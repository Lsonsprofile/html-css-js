import http from 'http';
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const publicDir = path.resolve(__dirname, 'public');
const contentDir = path.resolve(__dirname, 'content');

const lessonDir = path.resolve(contentDir, 'lessons');
let bundledLessonsCache;
const lessonExpansionFiles = [
  'modules-1-4.js',
  'modules-5-7.js',
  'modules-8-11.js'
];

/**
 * Load the browser lesson data and its expansions so the lesson API matches the UI.
 */
function getBundledLesson(id) {
  if (!bundledLessonsCache) {
    const sandbox = { window: {} };
    const contentFiles = [
      path.join(publicDir, 'js', 'content-data.js'),
      ...lessonExpansionFiles.map(file => path.join(publicDir, 'js', 'lesson-expansions', file))
    ];
    for (const file of contentFiles) {
      const source = fs.readFileSync(file, 'utf8');
      vm.runInNewContext(source, sandbox, { timeout: 1000, filename: path.basename(file) });
    }
    bundledLessonsCache = sandbox.window.COURSE_CONTENT?.lessons || {};
  }
  return bundledLessonsCache[id] || null;
}

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // These headers provide a small baseline of browser-side protection.
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  let urlPath;
  try {
    // Decode once so encoded traversal attempts are validated too.
    urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad request');
    return;
  }

  if (urlPath.startsWith('/api/')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.setHeader('Allow', 'GET, HEAD');
      res.writeHead(405);
      res.end(JSON.stringify({ message: 'Method not allowed' }));
      return;
    }

    if (urlPath === '/api/modules') {
      try {
        const data = fs.readFileSync(path.join(contentDir, 'modules.json'), 'utf8');
        res.writeHead(200);
        res.end(req.method === 'HEAD' ? undefined : data);
      } catch {
        res.writeHead(500);
        res.end(req.method === 'HEAD' ? undefined : JSON.stringify({ message: 'Unable to load modules' }));
      }
      return;
    }

    if (urlPath.startsWith('/api/lessons/')) {
      const id = urlPath.slice('/api/lessons/'.length);

      // Lesson IDs are slugs, never paths. Reject separators and traversal.
      if (!/^[a-zA-Z0-9-]+$/.test(id)) {
        res.writeHead(400);
        res.end(req.method === 'HEAD' ? undefined : JSON.stringify({ message: 'Invalid lesson ID' }));
        return;
      }

      const lessonPath = path.resolve(lessonDir, `${id}.json`);
      if (!lessonPath.startsWith(lessonDir + path.sep)) {
        res.writeHead(400);
        res.end(req.method === 'HEAD' ? undefined : JSON.stringify({ message: 'Invalid lesson ID' }));
        return;
      }

      try {
        // Prefer the same lesson record used by the browser, so all curriculum
        // lessons are available through the API instead of only standalone JSON files.
        const bundledLesson = getBundledLesson(id);
        if (bundledLesson) {
          res.writeHead(200);
          res.end(req.method === 'HEAD' ? undefined : JSON.stringify(bundledLesson));
          return;
        }
      } catch {
        res.writeHead(500);
        res.end(req.method === 'HEAD' ? undefined : JSON.stringify({ message: 'Unable to load lesson content' }));
        return;
      }

      fs.readFile(lessonPath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end(req.method === 'HEAD' ? undefined : JSON.stringify({ message: 'Lesson not found' }));
          return;
        }
        res.writeHead(200);
        res.end(req.method === 'HEAD' ? undefined : data);
      });
      return;
    }

    if (urlPath === '/api/progress') {
      res.writeHead(200);
      res.end(req.method === 'HEAD' ? undefined : JSON.stringify({ message: 'Use localStorage for progress in this demo' }));
      return;
    }

    res.writeHead(404);
    res.end(req.method === 'HEAD' ? undefined : JSON.stringify({ message: 'Not found' }));
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Method not allowed');
    return;
  }

  if (urlPath === '/') urlPath = '/index.html';

  // Resolve the request beneath public/ and reject paths that escape it.
  const filePath = path.resolve(publicDir, `.${urlPath}`);
  if (filePath !== publicDir && !filePath.startsWith(publicDir + path.sep)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : 'Forbidden');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  fs.readFile(filePath, (err, data) => {
    if (!err) {
      res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
      res.end(req.method === 'HEAD' ? undefined : data);
      return;
    }

    // Only route-like URLs get the SPA fallback. Missing assets must be real 404s,
    // not index.html served as JavaScript, CSS, images, or downloads.
    const acceptsHtml = (req.headers.accept || '').includes('text/html');
    if (acceptsHtml && !ext) {
      fs.readFile(path.join(publicDir, 'index.html'), (indexErr, html) => {
        if (indexErr) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end(req.method === 'HEAD' ? undefined : 'Unable to load application');
          return;
        }
        res.writeHead(200, { 'Content-Type': mime['.html'] });
        res.end(req.method === 'HEAD' ? undefined : html);
      });
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : 'Not found');
  });
});

server.listen(PORT, () => {
  console.log('KidsTechGlobal — Programming with HTML, CSS & JavaScript Learning Platform');
  console.log(`Running at http://127.0.0.1:${PORT}`);
});
