import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');
const contentDir = path.join(__dirname, 'content');

const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  // API routes for dynamic content (web service style)
  if (urlPath.startsWith('/api/')) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (urlPath === '/api/modules') {
      try {
        const data = fs.readFileSync(path.join(contentDir, 'modules.json'), 'utf8');
        res.writeHead(200);
        res.end(data);
      } catch (e) {
        res.writeHead(500);
        res.end(JSON.stringify({ message: 'Unable to load modules' }));
      }
      return;
    }

    if (urlPath.startsWith('/api/lessons/')) {
      const id = decodeURIComponent(urlPath.replace('/api/lessons/', ''));
      try {
        const data = fs.readFileSync(path.join(contentDir, 'lessons', `${id}.json`), 'utf8');
        res.writeHead(200);
        res.end(data);
      } catch (e) {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Lesson not found' }));
      }
      return;
    }

    if (urlPath === '/api/progress' && req.method === 'GET') {
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'Use localStorage for progress in this demo' }));
      return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not found' }));
    return;
  }

  // static files
  const safePath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(publicDir, safePath);
  const ext = path.extname(filePath).toLowerCase();

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // SPA fallback to index.html
      fs.readFile(path.join(publicDir, 'index.html'), (e2, html) => {
        if (e2) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Programming with HTML, CSS & JavaScript — Learning Platform`);
  console.log(`Running at http://127.0.0.1:${PORT}`);
});
