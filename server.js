// ============================================================================
// YOKOHAMA MES PORTAL - STANDALONE FULL-STACK NODE.JS HTTP & API SERVER
// Serves static frontend assets and executes serverless API routes locally
// Compatible with Google Cloud Run, Google AI Studio, Docker, and Local Dev
// Authors: Hadssha Bell S & Reuben Geoffrey
// ============================================================================

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.txt': 'text/plain; charset=UTF-8'
};

// Map API endpoints to handlers
const API_ROUTES = {
  '/api/auth': require('./api/auth'),
  '/api/incidents': require('./api/incidents'),
  '/api/kpi': require('./api/kpi'),
  '/api/master-data': require('./api/master-data')
};

// Helper: attach Vercel/Express-like helper methods to Node req/res
function enhanceReqRes(req, res, parsedUrl) {
  req.query = Object.fromEntries(new URLSearchParams(parsedUrl.query || ''));
  
  res.status = function(code) {
    this.statusCode = code;
    return this;
  };

  res.json = function(data) {
    this.setHeader('Content-Type', 'application/json');
    this.end(JSON.stringify(data));
    return this;
  };
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;

  // 1. Check if requesting an API endpoint
  if (pathname.startsWith('/api/')) {
    const routeHandler = API_ROUTES[pathname];
    if (routeHandler) {
      enhanceReqRes(req, res, parsedUrl);

      // Parse JSON body for POST / PUT
      let rawBody = '';
      req.on('data', chunk => { rawBody += chunk; });
      req.on('end', async () => {
        if (rawBody) {
          try {
            req.body = JSON.parse(rawBody);
          } catch (e) {
            req.body = rawBody;
          }
        } else {
          req.body = {};
        }

        try {
          await routeHandler(req, res);
        } catch (err) {
          console.error(`[API Error] ${pathname}:`, err);
          if (!res.writableEnded) {
            res.status(500).json({ error: 'Internal API Server Error', message: err.message });
          }
        }
      });
      return;
    } else {
      enhanceReqRes(req, res, parsedUrl);
      return res.status(404).json({ error: `API route ${pathname} not found` });
    }
  }

  // 2. Serve static files
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('========================================================================');
  console.log(`Plant IT Downtime Management Portal running at http://localhost:${PORT}`);
  console.log(`API endpoints active: /api/auth, /api/incidents, /api/kpi, /api/master-data`);
  console.log('========================================================================');
});
