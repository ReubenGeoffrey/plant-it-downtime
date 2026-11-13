const {
  SUPABASE_URL,
  SUPABASE_KEY,
  setCorsHeaders,
  requireAuth,
  mapRowToRecord,
  calculateAuthoritativeAvailability,
  calculateAuthoritativeClosureRate,
  calculateAuthoritativeMTTR
} = require('./utils');

module.exports = async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const user = requireAuth(req, res);
  if (!user) return; // 401 sent

  try {
    const { month, year, startDate, endDate, area } = req.query || {};

    let query = `${SUPABASE_URL}/rest/v1/incidents?select=*`;
    if (startDate) query += `&date=gte.${encodeURIComponent(startDate)}`;
    if (endDate) query += `&date=lte.${encodeURIComponent(endDate)}`;
    if (month && month !== 'ALL' && !startDate && !endDate) query += `&date=like.${encodeURIComponent(month)}*`;
    if (area && area !== 'ALL') query += `&area=eq.${encodeURIComponent(area)}`;

    const sRes = await fetch(query, {
      method: 'GET',
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
    });

    if (!sRes.ok) {
      return res.status(500).json({ error: 'Failed to fetch incident telemetry for KPIs' });
    }

    const rows = await sRes.json();
    const records = (Array.isArray(rows) ? rows : []).map(mapRowToRecord);
    const hasRecords = records.length > 0;

    // Check if the plant was operating during the period
    let periodDays = 0;
    if (startDate && endDate) {
      const s = new Date(startDate);
      const e = new Date(endDate);
      periodDays = Math.max(1, Math.round((e - s) / (1000 * 60 * 60 * 24)) + 1);
    } else if (month && month !== 'ALL') {
      const [y, m] = month.split('-').map(Number);
      const totalDaysInMonth = new Date(y, m, 0).getDate();
      const now = new Date();
      if (y === now.getFullYear() && m === (now.getMonth() + 1)) {
        periodDays = Math.min(totalDaysInMonth, Math.max(1, now.getDate()));
      } else {
        periodDays = totalDaysInMonth;
      }
    } else if (hasRecords) {
      const dates = records.map(r => r.issueDate).filter(Boolean).sort();
      if (dates.length > 0) {
        const s = new Date(dates[0]);
        const e = new Date(dates[dates.length - 1]);
        periodDays = Math.max(1, Math.round((e - s) / (1000 * 60 * 60 * 24)) + 1);
      }
    }

    const standardAreasCount = 8;
    const effectiveAreasCount = (area && area !== 'ALL') ? 1 : standardAreasCount;
    const totalOperatingMinutes = periodDays * 24 * 60 * effectiveAreasCount;
    const totalOutageMinutes = records.reduce((acc, r) => acc + (parseInt(r.downtimeMinutes, 10) || 0), 0);
    const totalMachineImpactMinutes = records.reduce((acc, r) => {
      const explicitTotal = parseInt(r.totalDowntimeMinutes, 10);
      if (!isNaN(explicitTotal) && explicitTotal > 0) return acc + explicitTotal;
      const dt = parseInt(r.downtimeMinutes, 10) || 0;
      const aff = parseInt(r.affectedMachines, 10) || 1;
      return acc + (dt * aff);
    }, 0);
    const totalWallClockDowntimeMinutes = totalOutageMinutes;
    const totalEquipmentDowntimeMinutes = totalMachineImpactMinutes;
    const totalDowntimeMinutes = totalOutageMinutes;

    const hasOperatingData = hasRecords || (periodDays > 0);

    // Authoritative calculations
    const availability = calculateAuthoritativeAvailability(totalOperatingMinutes, totalOutageMinutes, hasOperatingData);
    const closure = calculateAuthoritativeClosureRate(records);
    const mttr = calculateAuthoritativeMTTR(records);

    const openCount = records.filter(r => {
      const s = String(r.status || '').trim().toLowerCase();
      return s === 'open' || s === 'in progress';
    }).length;

    const completedCount = records.filter(r => {
      const s = String(r.status || '').trim().toLowerCase();
      return s === 'completed' || s === 'closed';
    }).length;

    return res.status(200).json({
      periodDays,
      effectiveAreasCount,
      totalOperatingMinutes,
      totalDowntimeMinutes,
      totalOutageMinutes,
      totalMachineImpactMinutes,
      totalWallClockDowntimeMinutes,
      totalEquipmentDowntimeMinutes,
      totalDowntimeHours: parseFloat((totalOutageMinutes / 60).toFixed(1)),
      totalEquipmentDowntimeHours: parseFloat((totalMachineImpactMinutes / 60).toFixed(1)),
      totalIncidents: records.length,
      openCount,
      completedCount,
      availability: availability.availabilityPct,
      availabilityDisplay: availability.display,
      availabilityStatus: availability.status,
      closureRate: closure.rate,
      closureRateDisplay: closure.display,
      mttrMinutes: mttr.mttrMinutes,
      mttrDisplay: mttr.display,
      hasOperatingData
    });
  } catch (err) {
    return res.status(500).json({ error: 'KPI calculation failed', message: err.message });
  }
};
