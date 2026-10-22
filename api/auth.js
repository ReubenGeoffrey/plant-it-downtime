const {
  SUPABASE_URL,
  SUPABASE_KEY,
  setCorsHeaders,
  sha256,
  generateToken,
  requireAuth,
  checkRateLimit,
  recordFailedLogin,
  clearRateLimit
} = require('./utils');

module.exports = async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientIp = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1').split(',')[0].trim();

  // 1. POST /api/auth (Login with Rate Limiting)
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body || {};
      const cleanUser = String(username || '').trim().toLowerCase();
      const rawPassword = String(password || '').trim();

      if (!cleanUser || !rawPassword) {
        return res.status(400).json({ error: 'Username and password are required' });
      }

      // Check rate limit by IP and username
      const rateLimitKey = `${clientIp}:${cleanUser}`;
      const rateCheck = checkRateLimit(rateLimitKey, 5, 60000);
      if (!rateCheck.allowed) {
        res.setHeader('Retry-After', String(rateCheck.retryAfter || 60));
        return res.status(429).json({
          error: `Too many login attempts. Please wait ${rateCheck.retryAfter} seconds before trying again.`,
          retryAfter: rateCheck.retryAfter
        });
      }

      const pHash = sha256(rawPassword);

      // Authenticate directly against Supabase user_accounts table
      const queryUrl = `${SUPABASE_URL}/rest/v1/user_accounts?select=*&username=ilike.${encodeURIComponent(cleanUser)}&password_hash=eq.${encodeURIComponent(pHash)}&limit=1`;
      const sRes = await fetch(queryUrl, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`
        }
      });

      if (!sRes.ok) {
        const errText = await sRes.text();
        return res.status(500).json({ error: 'Authentication service unavailable', details: errText });
      }

      const rows = await sRes.json();
      if (!Array.isArray(rows) || rows.length === 0) {
        recordFailedLogin(rateLimitKey);
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      // Successful login - clear rate limit
      clearRateLimit(rateLimitKey);

      const userRow = rows[0];
      const token = generateToken({
        id: userRow.id,
        username: userRow.username,
        role: userRow.role,
        displayName: userRow.display_name
      });

      // Strictly omit password_hash from response
      const safeUser = {
        id: userRow.id,
        username: userRow.username,
        role: userRow.role,
        displayName: userRow.display_name,
        canExport: userRow.can_export !== false,
        canManageSettings: userRow.can_manage_settings === true,
        themeColor: userRow.theme_color || 'red',
        allowedTabs: userRow.role === 'OPERATOR' ? ['entry'] : (userRow.role === 'SUPERVISOR' ? ['entry', 'kpi', 'logs', 'all'] : ['entry', 'kpi', 'logs', 'all', 'settings'])
      };

      return res.status(200).json({
        token,
        user: safeUser
      });
    } catch (err) {
      return res.status(500).json({ error: 'Authentication internal error', message: err.message });
    }
  }

  // 2. GET /api/auth (Verify session)
  if (req.method === 'GET') {
    const user = requireAuth(req, res);
    if (!user) return; // 401 already sent by requireAuth
    return res.status(200).json({
      authenticated: true,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        displayName: user.displayName,
        canExport: user.role === 'ADMIN' || user.role === 'SUPERVISOR',
        canManageSettings: user.role === 'ADMIN',
        allowedTabs: user.role === 'OPERATOR' ? ['entry'] : (user.role === 'SUPERVISOR' ? ['entry', 'kpi', 'logs', 'all'] : ['entry', 'kpi', 'logs', 'all', 'settings'])
      }
    });
  }

  // 3. PUT /api/auth (Update user credentials - Admin only)
  if (req.method === 'PUT') {
    const adminUser = requireAuth(req, res, ['ADMIN']);
    if (!adminUser) return; // 401/403 already sent

    try {
      const { role, username, displayName, password } = req.body || {};
      const targetRole = String(role || '').toUpperCase().trim();
      const cleanUsername = String(username || '').toLowerCase().trim();

      if (!targetRole || !cleanUsername) {
        return res.status(400).json({ error: 'Target role and username are required' });
      }

      if (!['ADMIN', 'SUPERVISOR', 'OPERATOR'].includes(targetRole)) {
        return res.status(400).json({ error: 'Invalid user role specified' });
      }

      // Check username collision across other accounts
      const checkUrl = `${SUPABASE_URL}/rest/v1/user_accounts?select=role,username&username=ilike.${encodeURIComponent(cleanUsername)}&role=neq.${encodeURIComponent(targetRole)}`;
      const cRes = await fetch(checkUrl, {
        method: 'GET',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      if (cRes.ok) {
        const collisions = await cRes.json();
        if (Array.isArray(collisions) && collisions.length > 0) {
          return res.status(409).json({ error: `Username "${cleanUsername}" is already in use by ${collisions[0].role}` });
        }
      }

      const patch = {
        username: cleanUsername,
        updated_at: new Date().toISOString()
      };
      if (displayName) patch.display_name = String(displayName).trim();
      if (password && String(password).trim().length >= 4) {
        patch.password_hash = sha256(String(password).trim());
      }

      const updateUrl = `${SUPABASE_URL}/rest/v1/user_accounts?role=eq.${encodeURIComponent(targetRole)}`;
      const uRes = await fetch(updateUrl, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(patch)
      });

      if (!uRes.ok) {
        const errText = await uRes.text();
        return res.status(500).json({ error: 'Failed to update credentials in database', details: errText });
      }

      const updatedRows = await uRes.json();
      if (!Array.isArray(updatedRows) || updatedRows.length === 0) {
        return res.status(404).json({ error: `Account with role ${targetRole} not found` });
      }

      const updated = updatedRows[0];
      return res.status(200).json({
        success: true,
        user: {
          role: updated.role,
          username: updated.username,
          displayName: updated.display_name
        }
      });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to update user account', message: err.message });
    }
  }

  // 4. DELETE /api/auth (Session Logout acknowledgement)
  if (req.method === 'DELETE') {
    return res.status(200).json({ message: 'Session logged out successfully' });
  }

  return res.status(405).json({ error: `Method ${req.method} not allowed` });
};
