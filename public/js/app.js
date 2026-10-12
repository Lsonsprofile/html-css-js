/* Programming with HTML, CSS & JavaScript — Learning Platform App */

const state = {
  modules: null,
  currentView: 'dashboard',
  currentLessonId: null,
  progress: JSON.parse(localStorage.getItem('hcj-progress') || '{}'),
  scores: JSON.parse(localStorage.getItem('hcj-scores') || '{}')
};

async function loadModules() {
  try {
    const res = await fetch('/api/modules');
    if (res.ok) {
      state.modules = await res.json();
      return;
    }
  } catch (_) {}
}

function getLesson(id) {
  return window.COURSE_CONTENT?.lessons?.[id] || null;
}

function saveProgress() {
  localStorage.setItem('hcj-progress', JSON.stringify(state.progress));
  localStorage.setItem('hcj-scores', JSON.stringify(state.scores));
  updateOverallProgress();
}

function toggleLessonComplete(lessonId) {
  const isComplete = Boolean(state.progress[lessonId]);

  if (isComplete) {
    delete state.progress[lessonId];
    showToast('Lesson marked incomplete');
  } else {
    state.progress[lessonId] = true;
    showToast('Lesson marked complete');
  }

  saveProgress();
}

function updateOverallProgress() {
  if (!state.modules) return;
  let total = 0, done = 0;
  state.modules.modules.forEach(m => {
    m.lessons.forEach(l => {
      total++;
      if (state.progress[l.id]) done++;
    });
  });
  const pct = total ? Math.round((done / total) * 100) : 0;
  const bar = document.getElementById('overallBar');
  const label = document.getElementById('overallPct');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = pct + '% complete';
}

function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function showToast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.add('hidden'), 2500);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderSidebar() {
  const nav = $('#moduleNav');
  if (!nav || !state.modules) return;
  nav.innerHTML = state.modules.modules.map(m =>
    `<button class="mod-btn" data-module="${m.id}">
      <span class="mod-num" style="background:${m.color}">${m.number}</span>
      <span>${escapeHtml(m.title)}</span>
    </button>`
  ).join('');
  nav.querySelectorAll('.mod-btn').forEach(btn => {
    btn.addEventListener('click', () => showModule(btn.dataset.module));
  });
}

function showView(name, param) {
  state.currentView = name;
  $$('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.view === name));
  $$('.side-link').forEach(b => b.classList.toggle('active', b.dataset.view === name));
  const main = $('#mainContent');
  if (name === 'dashboard') renderDashboard(main);
  else if (name === 'topics') renderTopics(main);
  else if (name === 'path') renderPath(main);
  else if (name === 'playground') renderPlayground(main);
  else if (name === 'projects') renderProjects(main);
  else if (name === 'quizzes') renderQuizzes(main);
  else if (name === 'lesson') renderLesson(main, param);
}

function renderDashboard(el) {
  const mods = state.modules?.modules || [];
  let total = 0, done = 0;
  mods.forEach(m => m.lessons.forEach(l => { total++; if (state.progress[l.id]) done++; }));
  const pct = total ? Math.round((done / total) * 100) : 0;
  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (pct / 100) * circumference;

  el.innerHTML = `
    <section class="hero">
      <div>
        <h1>Learn <span>HTML, CSS &amp; JavaScript</span><br>from Beginner to Confident</h1>
        <p>Comprehensive tutorials, interactive examples, live coding playground and real projects — all in one place.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" id="startLearning">Start Learning</button>
          <button class="btn btn-ghost" id="openPlayground">Open Playground</button>
        </div>
        <div class="hero-tags">
          <span>Structured Learning</span>
          <span>Hands-on Examples</span>
          <span>Real Projects</span>
          <span>Quizzes &amp; Progress</span>
        </div>
      </div>
      <div class="hero-visual">
        <img class="hero-photo" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" onerror="this.onerror=null;this.src='/images/web-team.svg';" alt="Laptop displaying code on a web developer’s desk" loading="eager">
        <div class="hero-card-stack">
          <div class="method-pills">
            <span class="m-get">HTML</span>
            <span class="m-post">CSS</span>
            <span class="m-put">JS</span>
          </div>
          <div class="hero-mini-card">
            <div class="hero-mini-icon" style="background:linear-gradient(135deg,#3B82F6,#1D4ED8)">📄</div>
            <div><strong>Structure</strong><span>Semantic HTML5</span></div>
          </div>
          <div class="hero-mini-card">
            <div class="hero-mini-icon" style="background:linear-gradient(135deg,#8B5CF6,#6D28D9)">🎨</div>
            <div><strong>Style</strong><span>Modern CSS design</span></div>
          </div>
          <div class="hero-mini-card">
            <div class="hero-mini-icon" style="background:linear-gradient(135deg,#F59E0B,#D97706)">⚡</div>
            <div><strong>Interact</strong><span>JavaScript &amp; DOM</span></div>
          </div>
        </div>
      </div>
    </section>
    <div class="dash-row">
      <div class="card">
        <h3>Your Learning Progress</h3>
        <div class="progress-ring-wrap">
          <div class="ring">
            <svg width="90" height="90" viewBox="0 0 90 90">
              <circle class="bg" cx="45" cy="45" r="38"></circle>
              <circle class="fg" cx="45" cy="45" r="38" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
            </svg>
            <div class="ring-text">${pct}%</div>
          </div>
          <div class="progress-info">
            <p>${done} of ${total} lessons completed. Keep going!</p>
            <button class="btn btn-primary" id="continueBtn" style="padding:0.45rem 1rem;font-size:0.85rem">Continue Learning</button>
          </div>
        </div>
      </div>
      <div class="card">
        <h3>Recent Activity</h3>
        <ul class="activity-list">
          ${Object.keys(state.progress).slice(-4).reverse().map(id => {
            const lesson = getLesson(id);
            return `<li><span class="dot"></span> Completed: ${lesson ? escapeHtml(lesson.title) : id}</li>`;
          }).join('') || '<li style="color:var(--text-muted)">No activity yet — start a lesson!</li>'}
        </ul>
      </div>
    </div>
    <div class="section-title">Explore Modules <a href="#" data-view="topics">View All</a></div>
    <div class="topic-grid" id="dashTopics"></div>
    <div class="section-title" style="margin-top:1.5rem">Featured Learning Path</div>
    <div class="card"><div class="path-steps" id="pathSteps"></div></div>
    <div class="resources-banner" style="margin-top:1.75rem">
      <h3>📥 Free downloads &amp; study aids</h3>
      <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:0.85rem">Starter files and cheatsheets from the Expanded Scheme of Work — keep them offline while you build your site.</p>
      <div class="download-grid">
        <a class="download-card" href="/resources/starter-index.html" download><span class="dl-icon">📄</span><span><strong>Starter index.html</strong><small>Valid page skeleton</small></span></a>
        <a class="download-card" href="/resources/project-structure.txt" download><span class="dl-icon">📁</span><span><strong>Project structure</strong><small>my-first-site folder map</small></span></a>
        <a class="download-card" href="/resources/html-cheatsheet.md" download><span class="dl-icon">📝</span><span><strong>HTML cheatsheet</strong><small>Tags &amp; skeleton</small></span></a>
        <a class="download-card" href="/resources/css-cheatsheet.md" download><span class="dl-icon">🎨</span><span><strong>CSS cheatsheet</strong><small>Selectors, box, fonts</small></span></a>
      </div>
    </div>
  `;

  const grid = $('#dashTopics');
  if (grid) {
    grid.innerHTML = mods.map(m => `
      <div class="topic-card" data-module="${m.id}" style="--card-accent:${m.color}">
        <div class="icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
        <h3>${escapeHtml(m.title)}</h3>
        <p>${m.lessons.length} lessons · hands-on practice</p>
        <div class="meta"><span>Module ${m.number}</span><span class="arrow">→</span></div>
      </div>`).join('');
    grid.querySelectorAll('.topic-card').forEach(c => c.addEventListener('click', () => showModule(c.dataset.module)));
  }

  const path = $('#pathSteps');
  if (path) {
    path.innerHTML = mods.slice(0, 6).map(m => {
      const allDone = m.lessons.every(l => state.progress[l.id]);
      const someDone = m.lessons.some(l => state.progress[l.id]);
      const cls = allDone ? 'done' : someDone ? 'current' : '';
      return `<div class="path-step ${cls}"><div class="num">${m.number}</div><div class="label">${escapeHtml(m.title.split(' ').slice(0, 3).join(' '))}</div></div>`;
    }).join('');
  }

  $('#startLearning')?.addEventListener('click', () => {
    const first = mods[0]?.lessons[0];
    if (first) showView('lesson', first.id);
  });
  $('#continueBtn')?.addEventListener('click', () => {
    for (const m of mods) {
      for (const l of m.lessons) {
        if (!state.progress[l.id]) { showView('lesson', l.id); return; }
      }
    }
    showView('topics');
  });
  $('#openPlayground')?.addEventListener('click', () => showView('playground'));
  $$('[data-view="topics"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); showView('topics'); }));
}

function renderPath(el) {
  const mods = state.modules?.modules || [];
  const totalLessons = mods.reduce((sum, mod) => sum + mod.lessons.length, 0);
  const completedLessons = mods.reduce((sum, mod) =>
    sum + mod.lessons.filter(lesson => state.progress[lesson.id]).length, 0);

  el.innerHTML = `
    <div class="lesson-header">
      <h1>🗺️ Your Learning Path</h1>
      <p class="lesson-meta">Follow the modules in order, practise each skill, and track your progress.</p>
    </div>
    <div class="card" style="margin-bottom:1.25rem">
      <h3>Overall progress</h3>
      <p style="color:var(--text-muted);margin-bottom:.75rem">${completedLessons} of ${totalLessons} lessons completed</p>
      <div class="progress-mini" style="height:10px"><div class="bar" style="width:${totalLessons ? Math.round(completedLessons / totalLessons * 100) : 0}%"></div></div>
    </div>
    <div class="topic-grid">
      ${mods.map((mod, index) => {
        const completed = mod.lessons.filter(lesson => state.progress[lesson.id]).length;
        const percent = mod.lessons.length ? Math.round(completed / mod.lessons.length * 100) : 0;
        return `
          <article class="topic-card">
            <div class="icon" style="background:${mod.color}22;color:${mod.color}">${mod.icon}</div>
            <p style="font-size:.75rem;color:var(--text-muted);margin-bottom:.25rem">STEP ${index + 1}</p>
            <h3>${escapeHtml(mod.title)}</h3>
            <p>${completed} of ${mod.lessons.length} lessons complete</p>
            <div class="progress-mini"><div class="bar" style="width:${percent}%"></div></div>
            <button class="btn btn-primary" style="margin-top:.75rem;padding:.45rem .8rem;font-size:.82rem" data-path-module="${mod.id}">${percent === 100 ? 'Review module' : 'Continue module'} →</button>
          </article>`;
      }).join('')}
    </div>`;
  el.querySelectorAll('[data-path-module]').forEach(button =>
    button.addEventListener('click', () => showModule(button.dataset.pathModule)));
}

function renderTopics(el) {
  const mods = state.modules?.modules || [];
  el.innerHTML = '<div class="lesson-header topics-page-header"><span class="lab-kicker">YOUR LEARNING LIBRARY</span>' +
    '<h1>Explore the curriculum</h1><p class="lesson-meta">Follow a clear path from your first HTML element to interactive browser features. Each module combines explanations, examples, practice and a small project goal.</p></div>' +
    '<div class="topic-grid">' + mods.map(mod => {
      const done = mod.lessons.filter(lesson => state.progress[lesson.id]).length;
      const percent = mod.lessons.length ? Math.round(done / mod.lessons.length * 100) : 0;
      const description = mod.overview || mod.bigIdea || mod.buildGoal || 'Build practical skills through examples, guided practice and review.';
      const goal = mod.buildGoal || mod.projectThread || 'Practise the core concepts and apply them in a small page.';
      return '<article class="topic-card curriculum-card" data-module="' + escapeHtml(mod.id) + '" style="--card-accent:' + escapeHtml(mod.color || '#2563EB') + '">' +
        '<div class="curriculum-card-top"><div class="icon" style="background:' + escapeHtml(mod.color || '#2563EB') + '22;color:' + escapeHtml(mod.color || '#2563EB') + '">' + escapeHtml(mod.icon || '📘') + '</div><span class="module-number">MODULE ' + mod.number + '</span></div>' +
        '<h3>' + escapeHtml(mod.title) + '</h3><p class="curriculum-description">' + escapeHtml(description) + '</p>' +
        '<div class="curriculum-goal"><strong>🎯 Build goal</strong><span>' + escapeHtml(goal) + '</span></div>' +
        '<div class="curriculum-progress"><div><span>' + done + ' of ' + mod.lessons.length + ' lessons</span><strong>' + percent + '%</strong></div><div class="progress-mini"><div class="bar" style="width:' + percent + '%"></div></div></div>' +
        '<div class="meta"><span>' + mod.lessons.length + ' guided lessons</span><span class="arrow">Open module →</span></div></article>';
    }).join('') + '</div>';
  el.querySelectorAll('.topic-card[data-module]').forEach(card => card.addEventListener('click', () => showModule(card.dataset.module)));
}

function showModule(moduleId) {
  const mod = state.modules?.modules.find(m => m.id === moduleId);
  if (!mod) return;
  const el = $('#mainContent');
  el.innerHTML = `
    <div class="lesson-header">
      <div class="breadcrumb"><a href="#" data-nav="dashboard">Dashboard</a> / Module ${mod.number}</div>
      <h1>${mod.icon} ${escapeHtml(mod.title)}</h1>
      <div class="lesson-meta">${mod.lessons.length} lessons · ${escapeHtml(mod.buildGoal || '')}</div>
    </div>
    <div class="lesson-hero-img" style="background:linear-gradient(135deg,#0F172A 0%,${mod.color}99 55%,#312E81 100%)">
      <div class="banner-content">
        <div class="banner-icon">${mod.icon}</div>
        <div class="banner-title">${escapeHtml(mod.title)}</div>
        <div class="banner-sub">${escapeHtml(mod.buildGoal || '')}</div>
      </div>
    </div>
    ${mod.bigIdea ? `<div class="objectives"><h3>💡 The big idea</h3><p style="margin:0;color:var(--text-secondary)">${escapeHtml(mod.bigIdea)}</p></div>` : ''}
    ${mod.overview ? `<div class="lesson-section"><h2>Overview</h2><p>${escapeHtml(mod.overview)}</p></div>` : ''}
    ${mod.projectThread ? `<div class="lesson-section" style="border-left:4px solid ${mod.color}"><h2>🛠️ Project thread</h2><p>${escapeHtml(mod.projectThread)}</p><p style="font-size:0.85rem;color:var(--text-muted);margin:0">Build this as you work through the lessons — each skill has an immediate purpose.</p></div>` : ''}
    <div class="section-title" style="margin-top:1.5rem">Lessons in this module</div>
    <div class="card" style="padding:0">
      ${mod.lessons.map((l, i) => {
        const done = state.progress[l.id];
        return `<button class="side-link" style="border-radius:0;border-bottom:1px solid var(--border);padding:0.9rem 1.25rem;width:100%" data-lesson="${l.id}">
          <span style="width:28px;height:28px;border-radius:50%;background:${done ? 'var(--success)' : '#E2E8F0'};color:${done ? '#fff' : 'var(--text-muted)'};display:grid;place-items:center;font-size:0.75rem;font-weight:700">${done ? '✓' : i + 1}</span>
          <span style="flex:1;text-align:left">${escapeHtml(l.title)}</span>
          <span style="font-size:0.8rem;color:var(--text-muted)">${l.duration || ''}</span>
        </button>`;
      }).join('')}
    </div>`;
  el.querySelectorAll('[data-lesson]').forEach(b => b.addEventListener('click', () => showView('lesson', b.dataset.lesson)));
  el.querySelector('[data-nav="dashboard"]')?.addEventListener('click', e => { e.preventDefault(); showView('dashboard'); });
}


/* Load CodeMirror with a CDN fallback, then upgrade HTML/CSS/JS textareas. */
let codeEditorLibraryPromise;

function loadEditorScript(src) {
  return new Promise((resolve, reject) => {
    const existing = [...document.scripts].find(script => script.src === src);
    if (existing?.dataset.loaded === 'true') return resolve();
    if (existing) {
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', reject, { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => { script.dataset.loaded = 'true'; resolve(); };
    script.onerror = () => { script.remove(); reject(new Error('Failed to load ' + src)); };
    document.head.appendChild(script);
  });
}

function editorAssetUrls(file, stylesheet = false) {
  // CodeMirror's cdnjs files live at the package root, while jsDelivr and
  // unpkg expose the core library and base stylesheet inside /lib/.
  const cdnjsFile = file === 'lib/codemirror.js' ? 'codemirror.min.js'
    : file === 'lib/codemirror.css' ? 'codemirror.min.css' : file;
  const packageFile = file === 'codemirror.min.js' ? 'lib/codemirror.js'
    : file === 'codemirror.min.css' ? 'lib/codemirror.css' : file;
  if (stylesheet) {
    return [
      'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/' + cdnjsFile,
      'https://cdn.jsdelivr.net/npm/codemirror@5.65.16/' + packageFile,
      'https://unpkg.com/codemirror@5.65.16/' + packageFile
    ];
  }
  return [
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.16/' + cdnjsFile,
    'https://cdn.jsdelivr.net/npm/codemirror@5.65.16/' + packageFile,
    'https://unpkg.com/codemirror@5.65.16/' + packageFile
  ];
}

async function loadEditorAsset(file) {
  let lastError;
  for (const url of editorAssetUrls(file)) {
    try {
      await loadEditorScript(url);
      return;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error('Unable to load CodeMirror asset: ' + file);
}

function loadEditorStylesheet(file) {
  return new Promise((resolve, reject) => {
    const urls = editorAssetUrls(file, true);
    let index = 0;
    const tryNext = () => {
      if (index >= urls.length) return reject(new Error('Unable to load CodeMirror stylesheet: ' + file));
      const url = urls[index++];
      const existing = [...document.querySelectorAll('link[rel="stylesheet"]')].find(link => link.href === url);
      if (existing?.dataset.loaded === 'true') return resolve();
      const link = existing || document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      link.onload = () => { link.dataset.loaded = 'true'; resolve(); };
      link.onerror = () => { link.remove(); tryNext(); };
      if (!existing) document.head.appendChild(link);
    };
    tryNext();
  });
}

function loadCodeEditorLibrary() {
  if (window.CodeMirror && window.CodeMirror.modes?.htmlmixed && window.CodeMirror.modes?.css && window.CodeMirror.modes?.javascript) {
    return Promise.resolve(true);
  }
  if (codeEditorLibraryPromise) return codeEditorLibraryPromise;
  codeEditorLibraryPromise = (async () => {
    await loadEditorStylesheet('lib/codemirror.css');
    await loadEditorStylesheet('addon/dialog/dialog.css');
    for (const file of [
      'lib/codemirror.js',
      'mode/xml/xml.js',
      'mode/javascript/javascript.js',
      'mode/css/css.js',
      'mode/htmlmixed/htmlmixed.js',
      'addon/edit/closebrackets.js',
      'addon/edit/closetag.js',
      'addon/edit/matchbrackets.js',
      'addon/selection/active-line.js',
      'addon/comment/comment.js',
      'addon/search/searchcursor.js',
      'addon/dialog/dialog.js',
      'addon/search/search.js'
    ]) await loadEditorAsset(file);
    if (!window.CodeMirror?.modes?.htmlmixed || !window.CodeMirror?.modes?.css || !window.CodeMirror?.modes?.javascript) {
      throw new Error('CodeMirror language modes did not register correctly');
    }
    return true;
  })().catch(error => {
    console.error('Rich code editor failed to initialize. Using plain textareas instead.', error);
    codeEditorLibraryPromise = null;
    return false;
  });
  return codeEditorLibraryPromise;
}

async function upgradeCodeEditors(container, textareas) {
  if (!await loadCodeEditorLibrary() || !container.isConnected) return {};
  const modes = { html: 'htmlmixed', css: 'css', js: 'javascript' };
  const editors = {};
  Object.entries(textareas).forEach(([language, textarea]) => {
    if (!textarea) return;
    const editor = window.CodeMirror.fromTextArea(textarea, {
      mode: modes[language], theme: 'default',
      lineNumbers: true, lineWrapping: true,
      indentUnit: 2, tabSize: 2, indentWithTabs: false,
      autoCloseBrackets: true, autoCloseTags: language === 'html',
      matchBrackets: true, styleActiveLine: true, viewportMargin: 20,
      extraKeys: {
        Tab: cm => cm.somethingSelected() ? cm.indentSelection('add') : cm.replaceSelection('  ', 'end'),
        'Shift-Tab': cm => cm.indentSelection('subtract'),
        'Ctrl-/': cm => cm.toggleComment(), 'Cmd-/': cm => cm.toggleComment(),
        'Ctrl-F': 'findPersistent', 'Cmd-F': 'findPersistent'
      }
    });
    textarea.dataset.richEditor = 'true';
    editors[language] = editor;
    editor.setSize('100%', '100%');
    editor.on('change', () => editor.save());
  });
  return editors;
}

function readEditorValue(editors, textareas, language) {
  return editors[language] ? editors[language].getValue() : (textareas[language]?.value || '');
}

function setEditorValue(editors, textareas, language, value) {
  if (editors[language]) editors[language].setValue(value || '');
  else if (textareas[language]) textareas[language].value = value || '';
}

/* Reusable teaching scaffold: every lesson gets a visual reference and two levels of practice. */
function renderLearningExtension(lesson) {
  const guides = {
    m1: {
      visual: null,
      concept: "A browser requests resources; the server responds; HTML, CSS and JavaScript then work together in the browser.",
      beginner: "Draw or label the journey: browser → request → server → response → rendered page. Mark which work happens in the browser and which belongs on the server.",
      intermediate: "Compare a static page with a page that loads data from an API. Explain which tasks belong on the client, which belong on the server, and why passwords or API secrets must not be placed in browser code.",
      checklist: ["HTML describes meaning and structure", "CSS controls presentation", "JavaScript adds behaviour", "The server can validate data and access a database"]
    },
    m2: {
      visual: "skeleton",
      concept: "An HTML document has a predictable outer structure. Elements describe content, attributes add information, and comments help developers without appearing on the page.",
      beginner: "Create index.html with a doctype, html lang attribute, head, UTF-8 metadata, title and body. Add one heading and two paragraphs.",
      intermediate: "Validate your page structure, add a useful language code, include a comment explaining one section, and test how spaces, line breaks and entities such as &amp;copy; display.",
      checklist: ["Use opening and closing tags where required", "Put metadata in head and visible content in body", "Quote attribute values", "Use character references for reserved characters"]
    },
    m3: {
      visual: "headingHierarchy",
      concept: "Text elements communicate structure and meaning. Choose an element for its purpose, not merely for the default size or appearance it produces.",
      beginner: "Build a short article with one main heading, two section headings, paragraphs, a quotation and a line of preformatted text.",
      intermediate: "Improve the article with meaningful emphasis, a citation or blockquote, and a div only where a grouping container is useful. Keep heading levels in a logical order.",
      checklist: ["Use headings to create a hierarchy", "Use p for paragraphs", "Use br only for meaningful line breaks", "Prefer semantic elements when they describe the content"]
    },
    m4: {
      visual: "absoluteRelative",
      concept: "A link connects a user to a destination. The href value may point to another website, a local file, an email address or an element on the current page.",
      beginner: "Create one external link, one link to another file in your project, one mailto link and one link to an id on the same page.",
      intermediate: "Add a link that opens in a new tab using target blank and rel values noopener noreferrer. Test every path after moving the files into folders.",
      checklist: ["Use descriptive link text", "Know the difference between absolute and relative URLs", "Every fragment target needs a matching id", "Do not use a link when a button action is intended"]
    },
    m5: {
      visual: null,
      concept: "An image is an external resource embedded in a page. The src locates it, while alt communicates its meaning when it cannot be seen or loaded.",
      beginner: "Add a local image with a sensible width and meaningful alt text. Confirm the path and file-name letter casing.",
      intermediate: "Make an image a link, decide whether its alternative text should describe the image or destination, and use an empty alt value for a purely decorative image.",
      checklist: ["Use a correct src path", "Write useful alternative text", "Keep image proportions intact", "Compress large images and use descriptive file names"]
    },
    m6: {
      visual: "listTypes",
      concept: "Lists group related information. Choose unordered lists when order is unimportant, ordered lists when sequence matters, and description lists for terms with explanations.",
      beginner: "Create a shopping list, a numbered set of steps and a three-term glossary using the correct list elements.",
      intermediate: "Nest a list under one list item, then check that every li belongs to an ol or ul and that the nesting reflects the meaning.",
      checklist: ["ul is for unordered items", "ol is for ordered steps or rankings", "li represents one list item", "dl groups terms and descriptions"]
    },
    m7: {
      visual: "cssCascade",
      concept: "CSS rules select elements and assign declarations. The cascade resolves competing declarations using origin, importance, layers, specificity and source order.",
      beginner: "Move styles into an external stylesheet. Style a heading, a paragraph and a class; then change one property and observe the result.",
      intermediate: "Predict which of two conflicting rules wins before testing. Use a child or descendant combinator, compare class and id specificity, and explain why a stylesheet reset can help.",
      checklist: ["A rule contains a selector and declarations", "Use classes for reusable styling", "Use the viewport meta tag for responsive layouts", "Prefer external CSS for maintainability"]
    },
    m8: {
      visual: "fontPlayground",
      concept: "Typography affects readability. Font family, size, weight, style and line height should work together, with suitable fallbacks when a preferred font is unavailable.",
      beginner: "Style a heading and paragraph with a font stack, readable font size, normal weight and comfortable line height.",
      intermediate: "Create a type scale using rem units and a consistent line-height. If using @font-face, verify the font file path and provide a fallback family.",
      checklist: ["Provide fallback fonts", "Use font-size to establish hierarchy", "Use line-height for readable lines", "Use font shorthand carefully because omitted sub-properties may reset"]
    },
    m9: {
      visual: "colorOpacityDemo",
      concept: "Colour can be expressed in named, hexadecimal, RGB or HSL forms. Opacity affects the transparency of an entire element, including its children.",
      beginner: "Apply a text colour and background colour using hex values. Check that the text remains easy to read.",
      intermediate: "Compare opacity: 0.5 with an rgba/alpha background. Explain why opacity can fade child text as well as the background, then improve contrast.",
      checklist: ["Use valid colour values", "Keep text/background contrast readable", "Opacity ranges from 0 (transparent) to 1 (opaque)", "Do not communicate meaning by colour alone"]
    },
    m10: {
      visual: "textPropsDemo",
      concept: "Text CSS properties control alignment, spacing, decoration, indentation, case and wrapping. Apply them to improve meaning and readability, not to replace semantic HTML.",
      beginner: "Create a paragraph and heading; experiment with text-align, text-decoration, text-transform and letter-spacing.",
      intermediate: "Test long words and repeated spaces with word-break and white-space. Make sure your styling still reads well on a narrow mobile screen.",
      checklist: ["text-align controls inline alignment", "text-transform changes visual casing, not the underlying text", "white-space affects spaces and wrapping", "Use text-shadow subtly and maintain contrast"]
    },
    m11: {
      visual: "domTree",
      concept: "JavaScript can find elements in the DOM and change their content, styles or behaviour. A clear script separates selecting an element, responding to an event and updating the page.",
      beginner: "Select a heading with getElementById or querySelector, then change its text when a button is clicked.",
      intermediate: "Move an inline event handler into an external script using addEventListener. Check that the script runs after the elements exist and use textContent for plain text.",
      checklist: ["JavaScript is case-sensitive", "Use parentheses to call functions", "Properties describe values; methods perform actions", "Use textContent for text and avoid injecting untrusted strings with innerHTML"]
    }
  };
  const guide = guides[lesson.moduleId] || guides.m2;
  const diagramFn = guide.visual && window.VISUALS && typeof window.VISUALS[guide.visual] === 'function'
    ? window.VISUALS[guide.visual]
    : null;
  return `
    <section class="lesson-section learning-extension">
      <div class="learning-extension-heading">
        <span class="learning-extension-kicker">LEARN IT · SEE IT · USE IT</span>
        <h2>Visual reference &amp; deeper practice</h2>
        <p>${escapeHtml(guide.concept)}</p>
      </div>
      ${diagramFn ? `<div class="learning-diagram">${diagramFn()}</div>` : `
        <div class="concept-flow" role="img" aria-label="Concept summary for this lesson">
          <div><span>01</span><strong>Understand</strong><small>What is the idea?</small></div>
          <i aria-hidden="true">→</i>
          <div><span>02</span><strong>Observe</strong><small>Read the example</small></div>
          <i aria-hidden="true">→</i>
          <div><span>03</span><strong>Apply</strong><small>Change and test it</small></div>
        </div>`}
      <div class="practice-level-grid">
        <article class="practice-level beginner-level">
          <div class="practice-level-label">LEVEL 1 · BEGINNER</div>
          <h3>Follow the steps</h3>
          <p>${escapeHtml(guide.beginner)}</p>
        </article>
        <article class="practice-level intermediate-level">
          <div class="practice-level-label">LEVEL 2 · INTERMEDIATE</div>
          <h3>Think like a developer</h3>
          <p>${escapeHtml(guide.intermediate)}</p>
        </article>
      </div>
      <div class="concept-checklist">
        <h3>Quick reference checklist</h3>
        <ul>${guide.checklist.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </div>
      <p class="practice-reminder"><strong>Learning routine:</strong> predict the result → run the example → compare the result → change one thing → explain why it changed.</p>
    </section>`;
}


function renderTopicLab(lesson) {
  const id = lesson.moduleId, title = lesson.title.toLowerCase();
  if (id === 'm1' || (id === 'm2' && /history|viewing the page source/.test(title))) return '';
  const field = (label, input) => '<label class="lab-control"><span>' + label + '</span>' + input + '</label>';
  const wrap = (kind, heading, intro, controls, preview, code) =>
    '<section class="lesson-section topic-lab" data-lab-root data-lab-kind="' + kind + '">' +
    '<div class="topic-lab-heading"><span class="lab-kicker">INTERACTIVE WORKSHOP</span><h2>🎛️ ' + heading + '</h2><p>' + intro + '</p></div>' +
    '<div class="topic-lab-grid"><div class="lab-controls">' + controls + '</div><div class="lab-result"><span class="lab-panel-label">LIVE PREVIEW</span>' +
    '<div class="lab-preview" data-lab-preview>' + preview + '</div><div class="lab-code-wrap"><div class="lab-code-head"><span>Example code</span><button type="button" class="copy-btn" data-lab-copy>Copy</button></div><pre data-lab-code>' + escapeHtml(code) + '</pre></div></div></div>' +
    '<p class="lab-tip">💡 Change one setting at a time. Predict the result, then compare.</p></section>';
  if (id === 'm2' || id === 'm3') return wrap('html','HTML content builder','Edit the text and heading level to see how HTML structures content.',
    field('Heading','<input data-lab="heading" value="My first webpage">') + field('Heading level','<select data-lab="level"><option>h1</option><option>h2</option><option>h3</option><option>h4</option><option>h5</option><option>h6</option></select>') + field('Paragraph','<textarea data-lab="paragraph" rows="3">HTML gives content meaning and structure.</textarea>'),
    '<article class="lab-html-card"><h2 data-heading>My first webpage</h2><p data-paragraph>HTML gives content meaning and structure.</p></article>','<h1>My first webpage</h1>\n<p>HTML gives content meaning and structure.</p>');
  if (id === 'm4') return wrap('link','Link builder','Edit link text and destination. The preview is deliberately non-navigating.',
    field('Link text','<input data-lab="linktext" value="Explore HTML">') + field('Destination','<input data-lab="href" value="https://example.com">') + field('Open in','<select data-lab="target"><option value="_self">Same tab</option><option value="_blank">New tab</option></select>'),
    '<a class="lab-demo-link" href="#">Explore HTML ↗</a><small class="lab-note">Preview only — no navigation.</small>','<a href="https://example.com">Explore HTML</a>');
  if (id === 'm5') return wrap('image','Image accessibility lab','Alternative text depends on the image purpose. Compare meaningful and decorative images.',
    field('Alternative text','<input data-lab="alt" value="A colourful landscape illustration">') + field('Purpose','<select data-lab="purpose"><option value="meaningful">Meaningful</option><option value="decorative">Decorative</option></select>'),
    '<div class="lab-image-placeholder" role="img" aria-label="A colourful landscape illustration">🏞️<span data-alt>A colourful landscape illustration</span></div>','<img src="landscape.jpg" alt="A colourful landscape illustration">');
  if (id === 'm6') return wrap('list','List builder','Choose list semantics and change the list items.',
    field('List type','<select data-lab="list"><option value="ul">Unordered (ul)</option><option value="ol">Ordered (ol)</option><option value="dl">Description (dl)</option></select>') + field('First item / term','<input data-lab="first" value="Plan the page">') + field('Second item / description','<input data-lab="second" value="Write the HTML">'),
    '<ul data-list-preview><li>Plan the page</li><li>Write the HTML</li></ul>','<ul>\n  <li>Plan the page</li>\n  <li>Write the HTML</li>\n</ul>');
  if (id === 'm7') return wrap('box','CSS design lab','Change background, text colour, padding and corner radius.',
    field('Background','<input type="color" data-lab="bg" value="#dbeafe">') + field('Text colour','<input type="color" data-lab="fg" value="#1e3a8a">') + field('Padding <output data-out="padding">24px</output>','<input type="range" data-lab="padding" min="8" max="48" value="24">') + field('Border radius <output data-out="radius">16px</output>','<input type="range" data-lab="radius" min="0" max="40" value="16">'),
    '<div class="lab-style-card">Style me with CSS!<small>CSS controls presentation.</small></div>','.card {\n  background: #dbeafe;\n  color: #1e3a8a;\n  padding: 24px;\n  border-radius: 16px;\n}');
  if (id === 'm8') return wrap('font','Font playground','Change family, size, weight, style and line height. The sample and CSS update live.',
    field('Family','<select data-lab="family"><option value="Inter, Arial, sans-serif">Inter (sans)</option><option value="Georgia, serif">Georgia (serif)</option><option value="monospace">Mono</option><option value="cursive">Cursive</option></select>') + field('Size <output data-out="size">20px</output>','<input type="range" data-lab="size" min="12" max="40" value="20">') + field('Weight','<select data-lab="weight"><option>400</option><option>500</option><option>700</option><option>800</option></select>') + field('Style','<select data-lab="style"><option>normal</option><option>italic</option></select>') + field('Line height <output data-out="line">1.5</output>','<input type="range" data-lab="line" min="10" max="22" value="15">'),
    '<p class="lab-font-preview">Typography makes information easier to scan, understand and remember.</p>','font-family: Inter, Arial, sans-serif;\nfont-size: 20px;\nfont-weight: 400;\nfont-style: normal;\nline-height: 1.5;');
  if (id === 'm9') return wrap('color','Colour and opacity mixer','Compare text and background colours. Opacity fades the entire element, including its text.',
    field('Text colour','<input type="color" data-lab="fg" value="#172554">') + field('Background','<input type="color" data-lab="bg" value="#bfdbfe">') + field('Opacity <output data-out="opacity">100%</output>','<input type="range" data-lab="opacity" min="20" max="100" value="100">'),
    '<div class="lab-color-card">Readable colour combinations matter.<small>Check contrast before choosing a colour.</small></div>','color: #172554;\nbackground-color: #bfdbfe;\nopacity: 1;');
  if (id === 'm10') return wrap('text','Text effects studio','Experiment with alignment, spacing, casing and decoration.',
    field('Alignment','<select data-lab="align"><option>left</option><option>center</option><option>right</option><option>justify</option></select>') + field('Letter spacing <output data-out="spacing">1px</output>','<input type="range" data-lab="spacing" min="0" max="8" value="1">') + field('Transform','<select data-lab="transform"><option value="none">Original case</option><option value="uppercase">UPPERCASE</option><option value="capitalize">Capitalize</option><option value="lowercase">lowercase</option></select>') + field('Decoration','<select data-lab="decoration"><option>none</option><option>underline</option><option>line-through</option><option>overline</option></select>'),
    '<p class="lab-text-preview">Small changes can make text easier to read.</p>','text-align: left;\nletter-spacing: 1px;\ntext-transform: none;\ntext-decoration: none;');
  if (id === 'm11' || id === 'm12') {
    if (id === 'm12' && /timer|delayed|timeout|interval/.test(title)) return wrap('timer','Timer lab','Set a duration and start a local countdown.',
      field('Seconds','<input type="number" data-lab="seconds" min="1" max="30" value="5">') + '<button type="button" class="btn btn-primary" data-action="start">Start timer</button> <button type="button" class="btn btn-ghost" data-action="reset">Reset</button>',
      '<div class="lab-counter" data-counter>Ready</div><p data-status>Choose a duration and start.</p>','setInterval(() => {\n  remaining -= 1;\n}, 1000);');
    if (id === 'm12' && /form|validation/.test(title)) return wrap('form','Form validation lab','Try an empty value or a name with at least two characters.',
      field('Your name','<input data-lab="name" placeholder="Enter your name">') + '<button type="button" class="btn btn-primary" data-action="validate">Check input</button>',
      '<p class="lab-status" data-status>Your result will appear here.</p>','if (name.trim().length < 2) {\n  showMessage("Enter at least 2 characters.");\n}');
    if (id === 'm12' && /template|dynamic content/.test(title)) return wrap('template','Dynamic content lab','Add a list item. User input is inserted as text rather than interpreted as HTML.',
      field('New item','<input data-lab="item" value="Practise every day">') + '<button type="button" class="btn btn-primary" data-action="add">Add item</button>',
      '<ul data-items><li>Learn a concept</li><li>Try an example</li></ul>','const item = document.createElement("li");\nitem.textContent = input.value;\nlist.append(item);');
    return wrap('counter','JavaScript interaction lab','JavaScript responds to events and updates the page.',
      field('Message','<input data-lab="message" value="You made it interactive!">') + '<button type="button" class="btn btn-primary" data-action="increment">Click counter</button> <button type="button" class="btn btn-ghost" data-action="reset">Reset</button>',
      '<div class="lab-counter" data-counter>0</div><p data-message>You made it interactive!</p>','button.addEventListener("click", () => {\n  count += 1;\n  output.textContent = count;\n});');
  }
  if (id === 'm13') {
    if (/urlsearchparams|query string/.test(title)) return wrap('url','URL query builder','Edit values and see URLSearchParams encode them into a query string.',
      field('Search term','<input data-lab="query" value="CSS fonts">') + field('Page number','<input data-lab="page" type="number" value="2" min="1">'),
      '<code data-url>?q=CSS+fonts&amp;page=2</code>','const params = new URLSearchParams({ q: "CSS fonts", page: "2" });');
    if (/storage/.test(title)) return wrap('storage','Storage sandbox','Save and read a note in temporary demo memory; this does not touch browser storage.',
      field('Note','<input data-lab="note" value="Remember to practise">') + '<button type="button" class="btn btn-primary" data-action="save">Save</button> <button type="button" class="btn btn-ghost" data-action="read">Read</button> <button type="button" class="btn btn-ghost" data-action="clear">Clear</button>',
      '<p data-status>No note saved yet.</p>','storage.setItem("note", input.value);\nconst saved = storage.getItem("note");');
    if (/fetch|error handling/.test(title)) return wrap('fetch','Fetch response simulator','Practise success and error handling without depending on a network request.',
      field('Simulated response','<select data-lab="status"><option value="200">200 OK</option><option value="404">404 Not Found</option><option value="500">500 Server Error</option></select>') + '<button type="button" class="btn btn-primary" data-action="fetch">Run simulation</button>',
      '<p class="lab-status" data-status>Choose a response and run the simulation.</p>','if (!response.ok) throw new Error("Request failed");');
    return wrap('browser','Browser API explainer','Choose a browser event or API and inspect what it is used for.',
      field('Concept','<select data-lab="concept"><option value="location">Current page URL</option><option value="permission">Geolocation permission</option><option value="network">Network status</option><option value="resize">Resize event</option><option value="scroll">Scroll event</option></select>') + '<button type="button" class="btn btn-primary" data-action="explain">Explain</button>',
      '<p data-status>Select a concept to learn more.</p>','window.addEventListener("online", () => {\n  console.log("Connection restored");\n});');
  }
  return '';
}
function setupTopicLab(el) {
  const root=el.querySelector('[data-lab-root]'); if(!root)return;
  const q=s=>root.querySelector(s), val=n=>q('[data-lab="'+n+'"]')?.value??'';
  const write=s=>{if(q('[data-lab-code]'))q('[data-lab-code]').textContent=s;};
  const out=(n,s)=>{if(q('[data-out="'+n+'"]'))q('[data-out="'+n+'"]').textContent=s;};
  const setText=(s,v)=>{if(q(s))q(s).textContent=v;};
  const refresh=()=>{
    const k=root.dataset.labKind;
    if(k==='html'){const h=val('heading')||'Add a heading',l=/^h[1-6]$/.test(val('level'))?val('level'):'h1',old=q('[data-heading]');if(old){const n=document.createElement(l);n.dataset.heading='';n.textContent=h;old.replaceWith(n);}setText('[data-paragraph]',val('paragraph'));write('<'+l+'>'+h+'</'+l+'>\n<p>'+val('paragraph')+'</p>');}
    if(k==='link'){const label=val('linktext')||'Link text',href=val('href')||'#',target=val('target');setText('.lab-demo-link',label+' ↗');write('<a href="'+href+'"'+(target==='_blank'?' target="_blank" rel="noopener noreferrer"':'')+'>'+label+'</a>');}
    if(k==='image'){const alt=val('purpose')==='decorative'?'':val('alt');setText('[data-alt]',alt||'Decorative image — empty alt');if(q('.lab-image-placeholder'))q('.lab-image-placeholder').setAttribute('aria-label',alt||'Decorative image');write('<img src="landscape.jpg" alt="'+alt+'">');}
    if(k==='list'){const t=val('list'),a=val('first'),b=val('second'),list=document.createElement(t);if(t==='dl'){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=a;dd.textContent=b;list.append(dt,dd);write('<dl>\n  <dt>'+a+'</dt>\n  <dd>'+b+'</dd>\n</dl>');}else{[a,b].forEach(x=>{const li=document.createElement('li');li.textContent=x;list.append(li);});write('<'+t+'>\n  <li>'+a+'</li>\n  <li>'+b+'</li>\n</'+t+'>');}q('[data-lab-preview]').replaceChildren(list);}
    if(k==='box'){const bg=val('bg'),fg=val('fg'),p=+val('padding'),r=+val('radius');Object.assign(q('.lab-style-card').style,{background:bg,color:fg,padding:p+'px',borderRadius:r+'px'});out('padding',p+'px');out('radius',r+'px');write('background: '+bg+';\ncolor: '+fg+';\npadding: '+p+'px;\nborder-radius: '+r+'px;');}
    if(k==='font'){const f=val('family'),s=+val('size'),w=val('weight'),st=val('style'),lh=(+val('line')/10).toFixed(1);Object.assign(q('.lab-font-preview').style,{fontFamily:f,fontSize:s+'px',fontWeight:w,fontStyle:st,lineHeight:lh});out('size',s+'px');out('line',lh);write('font-family: '+f+';\nfont-size: '+s+'px;\nfont-weight: '+w+';\nfont-style: '+st+';\nline-height: '+lh+';');}
    if(k==='color'){const fg=val('fg'),bg=val('bg'),op=+val('opacity')/100;Object.assign(q('.lab-color-card').style,{color:fg,backgroundColor:bg,opacity:op});out('opacity',Math.round(op*100)+'%');write('color: '+fg+';\nbackground-color: '+bg+';\nopacity: '+op+';');}
    if(k==='text'){const a=val('align'),s=+val('spacing'),t=val('transform'),d=val('decoration');Object.assign(q('.lab-text-preview').style,{textAlign:a,letterSpacing:s+'px',textTransform:t,textDecoration:d});out('spacing',s+'px');write('text-align: '+a+';\nletter-spacing: '+s+'px;\ntext-transform: '+t+';\ntext-decoration: '+d+';');}
    if(k==='counter')setText('[data-message]',val('message')||'Your message appears here.');
    if(k==='url'){const p=new URLSearchParams({q:val('query'),page:val('page')||'1'});setText('[data-url]','?'+p.toString());write('const params = new URLSearchParams({ q: "'+val('query')+'", page: "'+(val('page')||'1')+'" });');}
  };
  root.addEventListener('input',refresh);root.addEventListener('change',refresh);
  root.addEventListener('click',e=>{
    const b=e.target.closest('[data-action],[data-lab-copy]');if(!b)return;
    if(b.hasAttribute('data-lab-copy')){const t=q('[data-lab-code]')?.textContent||'';if(navigator.clipboard?.writeText)navigator.clipboard.writeText(t).then(()=>showToast('Example copied')).catch(()=>showToast('Copy unavailable'));else showToast('Copy unavailable');return;}
    const a=b.dataset.action;
    if(a==='increment'){const n=q('[data-counter]');n.textContent=String((+n.textContent||0)+1);}
    if(a==='reset'){if(q('[data-counter]'))q('[data-counter]').textContent='0';if(root._timer)clearInterval(root._timer);if(q('[data-status]'))q('[data-status]').textContent='Ready.';}
    if(a==='validate'){const n=val('name').trim();setText('[data-status]',n.length>=2?'Looks good, '+n+'!':'Please enter at least 2 characters.');}
    if(a==='add'){const x=val('item').trim();if(x){const li=document.createElement('li');li.textContent=x;q('[data-items]').append(li);}}
    if(a==='start'){if(root._timer)clearInterval(root._timer);let n=Math.max(1,Math.min(30,+val('seconds')||5));setText('[data-counter]',n+'s');root._timer=setInterval(()=>{n--;setText('[data-counter]',n+'s');if(n<=0){clearInterval(root._timer);root._timer=null;setText('[data-status]','Time is up!');}},1000);}
    if(a==='save'){root._note=val('note');setText('[data-status]','Note saved in temporary demo memory.');}if(a==='read')setText('[data-status]',root._note||'Nothing saved yet.');if(a==='clear'){delete root._note;setText('[data-status]','Demo note cleared.');}
    if(a==='fetch'){const s=val('status');setText('[data-status]',s==='200'?'Success: an OK response can be parsed.':s==='404'?'Not found: check the URL or resource identifier.':'Server error: show a useful message and consider retrying.');}
    if(a==='explain'){const c=val('concept'),d={location:'window.location exposes the current URL and navigation details.',permission:'Geolocation should be requested only after explaining why and obtaining permission.',network:'navigator.onLine is only a connectivity hint, not proof that a server is reachable.',resize:'The resize event fires when viewport dimensions change.',scroll:'The scroll event fires as the page is scrolled; avoid expensive work on every event.'};setText('[data-status]',d[c]);}
  });
  refresh();
}

function renderLesson(el, lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) {
    el.innerHTML = `<p>Lesson not found.</p><button class="btn btn-primary" id="backDash">Back</button>`;
    $('#backDash')?.addEventListener('click', () => showView('dashboard'));
    return;
  }
  state.currentLessonId = lessonId;
  const mod = state.modules?.modules.find(m => m.id === lesson.moduleId);
  const moduleLesson = mod?.lessons.find(item => item.id === lessonId);
  const lessonDuration = lesson.duration || moduleLesson?.duration || '10 min';

  const modIcon = mod?.icon || '📘';
  const modColor = mod?.color || '#2563EB';
  let html = `
    <div class="lesson-header">
      <div class="breadcrumb">
        <a href="#" data-nav="dashboard">Dashboard</a> /
        <a href="#" data-nav="module" data-id="${lesson.moduleId}">${mod ? escapeHtml(mod.title) : ''}</a>
      </div>
      <h1>${escapeHtml(lesson.title)}</h1>
      <div class="lesson-meta">
        <span>⏱ ${escapeHtml(lessonDuration)}</span>
        <span>Module ${mod?.number || ''}</span>
        <span id="lessonCompletionStatus" style="color:var(--success);font-weight:600;${state.progress[lessonId] ? '' : 'display:none'}">✓ Completed</span>
      </div>
    </div>
    <div class="lesson-hero-img" style="background:linear-gradient(135deg,#0F172A 0%,${modColor}99 60%,#312E81 100%)">
      <div class="banner-content">
        <div class="banner-icon">${modIcon}</div>
        <div class="banner-title">${escapeHtml(lesson.title)}</div>
        <div class="banner-sub">${mod ? escapeHtml(mod.title) : 'Programming with HTML, CSS & JavaScript'}</div>
      </div>
    </div>`;

  if (lesson.objectives?.length) {
    html += `<div class="objectives"><h3>🎯 Learning objectives</h3><ul>${lesson.objectives.map(o => `<li>${escapeHtml(o)}</li>`).join('')}</ul></div>`;
  }

  (lesson.sections || []).forEach(sec => {
    if (sec.type === 'intro' || sec.type === 'explanation') {
      html += `<div class="lesson-section"><h2>${sec.type === 'intro' ? 'Intro' : 'Explanation'}: ${escapeHtml(sec.title)}</h2><p>${escapeHtml(sec.content)}</p></div>`;
    } else if (sec.type === 'code') {
      html += `<div class="lesson-section"><h2>${escapeHtml(sec.title)}</h2>
        <div class="code-block"><button class="copy-btn" data-copy>Copy</button><pre>${escapeHtml(sec.code)}</pre></div>`;
      if (sec.explanation?.length) {
        html += `<div class="code-explain"><ol>${sec.explanation.map(e => `<li>${escapeHtml(e)}</li>`).join('')}</ol></div>`;
      }
      html += `</div>`;
    } else if (sec.type === 'visual') {
      const diagramFn = sec.diagram && window.VISUALS && typeof window.VISUALS[sec.diagram] === 'function'
        ? window.VISUALS[sec.diagram]
        : null;
      html += `<div class="lesson-section"><h2>📊 ${escapeHtml(sec.title)}</h2>`;
      if (sec.content) html += `<p>${escapeHtml(sec.content)}</p>`;
      if (diagramFn) html += diagramFn();
      else if (sec.diagram === 'skeleton') {
        html += (window.VISUALS && window.VISUALS.skeleton) ? window.VISUALS.skeleton() : '';
      }
      html += `</div>`;
    } else if (sec.type === 'interactive') {
      const demoFn = sec.demo && window.VISUALS && typeof window.VISUALS[sec.demo] === 'function'
        ? window.VISUALS[sec.demo]
        : null;
      html += `<div class="lesson-section"><h2>🎛️ ${escapeHtml(sec.title)}</h2>`;
      if (sec.content) html += `<p>${escapeHtml(sec.content)}</p>`;
      if (demoFn) html += demoFn();
      html += `</div>`;
    } else if (sec.type === 'mistakes') {
      html += `<div class="lesson-section"><h2>${escapeHtml(sec.title)}</h2>`;
      sec.items.forEach(item => {
        html += `<div class="mistake-card">
          <div class="mistake-box wrong"><strong>Incorrect</strong>${escapeHtml(item.wrong)}<br><small>${escapeHtml(item.why)}</small></div>
          <div class="mistake-box fix"><strong>Correct</strong>${escapeHtml(item.fix)}</div>
        </div>`;
      });
      html += `</div>`;
    } else if (sec.type === 'practice') {
      html += `<div class="lesson-section"><h2>${escapeHtml(sec.title)}</h2><ol>${sec.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol></div>`;
    } else if (sec.type === 'quiz') {
      html += `<div class="lesson-section"><h2>${escapeHtml(sec.title)}</h2>`;
      sec.questions.forEach((q, qi) => {
        html += `<div class="quiz-q" data-q="${qi}">
          <p>${escapeHtml(q.q)}</p>
          <div class="quiz-opts">
            ${q.options.map((opt, oi) => `<button data-qi="${qi}" data-oi="${oi}" data-answer="${q.answer}" data-explain="${escapeHtml(q.explain)}">${escapeHtml(opt)}</button>`).join('')}
          </div>
          <div class="quiz-feedback hidden"></div>
        </div>`;
      });
      html += `</div>`;
    } else if (sec.type === 'summary') {
      html += `<div class="lesson-section"><h2>Summary</h2><ul>${sec.points.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul></div>`;
    } else if (sec.type === 'image') {
      html += `<div class="lesson-section"><h2>🖼️ ${escapeHtml(sec.title || 'Visual')}</h2>`;
      if (sec.content) html += `<p>${escapeHtml(sec.content)}</p>`;
      html += `<figure class="content-figure"><img src="${escapeHtml(sec.src)}" alt="${escapeHtml(sec.alt || sec.title || '')}" loading="lazy">`;
      if (sec.caption) html += `<figcaption>${escapeHtml(sec.caption)}</figcaption>`;
      html += `</figure></div>`;
    } else if (sec.type === 'video') {
      html += `<div class="lesson-section"><h2>🎬 ${escapeHtml(sec.title || 'Watch & learn')}</h2>`;
      if (sec.content) html += `<p>${escapeHtml(sec.content)}</p>`;
      html += `<div class="video-list">${(sec.videos || []).map(v => `
        <a class="video-card" href="${escapeHtml(v.url)}" target="_blank" rel="noopener noreferrer">
          <span class="video-icon">▶</span>
          <span><strong>${escapeHtml(v.title)}</strong><small>${escapeHtml(v.source || 'External video')}</small></span>
        </a>`).join('')}</div></div>`;
    } else if (sec.type === 'download' || sec.type === 'resources') {
      html += `<div class="lesson-section"><h2>📥 ${escapeHtml(sec.title || 'Downloads')}</h2>`;
      if (sec.content) html += `<p>${escapeHtml(sec.content)}</p>`;
      html += `<div class="download-grid">${(sec.files || []).map(f => `
        <a class="download-card" href="${escapeHtml(f.href)}" download>
          <span class="dl-icon">📄</span>
          <span><strong>${escapeHtml(f.name)}</strong><small>${escapeHtml(f.desc || '')}</small></span>
        </a>`).join('')}</div></div>`;
    }
  });

  html += renderLearningExtension(lesson);
  html += renderTopicLab(lesson);

  if (lesson.playground) {
    html += `
      <div class="lesson-section">
        <h2>Try it yourself</h2>
        <p>Edit the code and click Run to see the result.</p>
        <div class="playground-wrap" style="height:420px">
          <div class="editor-panel">
            <div class="editor-tabs">
              <button class="active" data-tab="html">HTML</button>
              <button data-tab="css">CSS</button>
              <button data-tab="js">JS</button>
            </div>
            <div class="editor-area">
              <textarea id="pg-html">${escapeHtml(lesson.playground.html || '')}</textarea>
              <textarea id="pg-css" class="hidden">${escapeHtml(lesson.playground.css || '')}</textarea>
              <textarea id="pg-js" class="hidden">${escapeHtml(lesson.playground.js || '')}</textarea>
            </div>
          </div>
          <div class="preview-panel">
            <div class="preview-toolbar">
              <button class="primary" id="pg-run">Run</button>
              <button id="pg-reset">Reset</button>
            </div>
            <iframe id="pg-frame" class="preview-frame" sandbox="allow-scripts" title="Preview"></iframe>
          </div>
        </div>
      </div>`;
  }

  const allLessons = [];
  state.modules?.modules.forEach(m => m.lessons.forEach(l => allLessons.push(l.id)));
  const idx = allLessons.indexOf(lessonId);
  const prevId = idx > 0 ? allLessons[idx - 1] : null;
  const nextId = idx < allLessons.length - 1 ? allLessons[idx + 1] : null;

  const lessonPosition = idx >= 0 ? idx + 1 : 0;

  html += `
    <nav class="lesson-nav" aria-label="Lesson navigation">
      <button class="lesson-nav-btn prev-btn" type="button" data-go="${prevId || ''}" ${prevId ? '' : 'disabled'} aria-label="Go to previous lesson" title="${prevId ? 'Previous lesson' : 'You are at the first lesson'}">
        <span class="lesson-nav-arrow" aria-hidden="true">←</span>
        <span class="lesson-nav-btn-copy"><small>PREVIOUS</small><strong>Previous lesson</strong></span>
      </button>
      <div class="lesson-nav-center">
        <span class="lesson-nav-count">LESSON ${lessonPosition} OF ${allLessons.length}</span>
        <button class="btn btn-primary" id="markDone" type="button" aria-pressed="${Boolean(state.progress[lessonId])}">${state.progress[lessonId] ? '✓ Completed — Unmark' : '✓ Mark Complete'}</button>
      </div>
      <button class="lesson-nav-btn next-btn" type="button" data-go="${nextId || ''}" ${nextId ? '' : 'disabled'} aria-label="Go to next lesson" title="${nextId ? 'Next lesson' : 'You have reached the last lesson'}">
        <span class="lesson-nav-btn-copy"><small>NEXT</small><strong>Next lesson</strong></span>
        <span class="lesson-nav-arrow" aria-hidden="true">→</span>
      </button>
    </nav>`;

  el.innerHTML = html;
  setupTopicLab(el);

  el.querySelector('[data-nav="dashboard"]')?.addEventListener('click', e => { e.preventDefault(); showView('dashboard'); });
  el.querySelector('[data-nav="module"]')?.addEventListener('click', e => { e.preventDefault(); showModule(e.currentTarget.dataset.id); });

  el.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.parentElement.querySelector('pre');
      navigator.clipboard.writeText(pre.textContent);
      showToast('Copied');
    });
  });

  el.querySelectorAll('.quiz-opts button').forEach(btn => {
    btn.addEventListener('click', () => {
      const oi = +btn.dataset.oi;
      const answer = +btn.dataset.answer;
      const box = btn.closest('.quiz-q');
      const feedback = box.querySelector('.quiz-feedback');
      box.querySelectorAll('button').forEach(b => b.disabled = true);
      if (oi === answer) {
        btn.classList.add('correct');
        feedback.className = 'quiz-feedback ok';
        feedback.textContent = 'Correct! ' + btn.dataset.explain;
      } else {
        btn.classList.add('incorrect');
        box.querySelectorAll('button')[answer]?.classList.add('correct');
        feedback.className = 'quiz-feedback bad';
        feedback.textContent = 'Not quite. ' + btn.dataset.explain;
      }
      feedback.classList.remove('hidden');
    });
  });

  $('#markDone')?.addEventListener('click', () => {
    toggleLessonComplete(lessonId);

    const isComplete = Boolean(state.progress[lessonId]);
    const button = $('#markDone', el);
    const status = $('#lessonCompletionStatus', el);

    if (button) {
      button.textContent = isComplete ? 'Completed — Unmark' : 'Mark Complete';
      button.setAttribute('aria-pressed', String(isComplete));
    }

    // Update only completion-related UI. Do not rerender the lesson, because
    // that would erase quiz feedback, edited playground code, and demo state.
    if (status) status.style.display = isComplete ? '' : 'none';
    updateOverallProgress();
  });

  el.querySelectorAll('.lesson-nav [data-go]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLessonId = btn.dataset.go;
      if (!targetLessonId || btn.disabled) return;
      showView('lesson', targetLessonId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  if (lesson.playground) {
    const tabs = el.querySelectorAll('[data-tab]');
    const areas = { html: $('#pg-html'), css: $('#pg-css'), js: $('#pg-js') };
    let editors = {};
    const activateTab = language => {
      tabs.forEach(tab => {
        const active = tab.dataset.tab === language;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      Object.entries(areas).forEach(([key, area]) => {
        area?.classList.toggle('hidden', key !== language);
        editors[key]?.getWrapperElement().classList.toggle('hidden', key !== language);
        if (key === language) editors[key]?.refresh();
      });
    };
    tabs.forEach(tab => tab.addEventListener('click', () => activateTab(tab.dataset.tab)));
    const run = () => {
      const html = readEditorValue(editors, areas, 'html');
      const css = readEditorValue(editors, areas, 'css');
      const js = readEditorValue(editors, areas, 'js');
      const frame = $('#pg-frame');
      if (frame) frame.srcdoc = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
    };
    $('#pg-run')?.addEventListener('click', run);
    $('#pg-reset')?.addEventListener('click', () => {
      setEditorValue(editors, areas, 'html', lesson.playground.html);
      setEditorValue(editors, areas, 'css', lesson.playground.css);
      setEditorValue(editors, areas, 'js', lesson.playground.js);
      run();
    });
    upgradeCodeEditors(el, areas).then(result => {
      editors = result;
      Object.values(editors).forEach(editor => editor.refresh());
      activateTab('html');
      run();
    });
    run();
  }

  // Activate interactive visual demos in this lesson
  if (typeof window.initVisualDemos === 'function') {
    window.initVisualDemos(el);
  }
}

function renderPlayground(el) {
  el.innerHTML = `
    <h1 style="font-size:1.4rem;margin-bottom:0.75rem">Live Coding Playground</h1>
    <p style="color:var(--text-muted);margin-bottom:1rem">Write HTML, CSS and JavaScript and see the result instantly. Code runs in a sandboxed iframe.</p>
    <div class="playground-wrap">
      <div class="editor-panel">
        <div class="editor-tabs">
          <button class="active" data-tab="html">HTML</button>
          <button data-tab="css">CSS</button>
          <button data-tab="js">JavaScript</button>
        </div>
        <div class="editor-area">
          <textarea id="full-html"><h1>Hello, Playground!</h1>
<p>Edit the HTML, CSS and JS tabs, then click Run.</p>
<button id="magic">Click me</button></textarea>
          <textarea id="full-css" class="hidden">body {
  font-family: system-ui, sans-serif;
  padding: 1.5rem;
  background: #F0F4F8;
}
h1 { color: #1E40AF; }
button {
  background: #2563EB;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}</textarea>
          <textarea id="full-js" class="hidden">document.getElementById('magic').addEventListener('click', () => {
  document.querySelector('h1').textContent = 'You did it!';
  document.body.style.background = '#DBEAFE';
});</textarea>
        </div>
      </div>
      <div class="preview-panel">
        <div class="preview-toolbar">
          <button class="primary" id="full-run">Run</button>
          <button id="full-reset">Reset</button>
        </div>
        <iframe id="full-frame" class="preview-frame" sandbox="allow-scripts" title="Playground preview"></iframe>
      </div>
    </div>`;
  const tabs = el.querySelectorAll('[data-tab]');
  const areas = { html: $('#full-html'), css: $('#full-css'), js: $('#full-js') };
  const defaults = { html: areas.html.value, css: areas.css.value, js: areas.js.value };
  let editors = {};
  const activateTab = language => {
    tabs.forEach(tab => {
      const active = tab.dataset.tab === language;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    Object.entries(areas).forEach(([key, area]) => {
      area.classList.toggle('hidden', key !== language);
      editors[key]?.getWrapperElement().classList.toggle('hidden', key !== language);
      if (key === language) editors[key]?.refresh();
    });
  };
  tabs.forEach(tab => tab.addEventListener('click', () => activateTab(tab.dataset.tab)));
  const run = () => {
    const html = readEditorValue(editors, areas, 'html');
    const css = readEditorValue(editors, areas, 'css');
    const js = readEditorValue(editors, areas, 'js');
    $('#full-frame').srcdoc = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
  };
  $('#full-run').addEventListener('click', run);
  $('#full-reset').addEventListener('click', () => {
    Object.keys(areas).forEach(language => setEditorValue(editors, areas, language, defaults[language]));
    run();
  });
  upgradeCodeEditors(el, areas).then(result => {
    editors = result;
    Object.values(editors).forEach(editor => editor.refresh());
    activateTab('html');
    run();
  });
  run();
}

function renderProjects(el) {
  const cap = state.modules?.capstone;
  const threadProjects = (state.modules?.modules || []).map(m => ({
    id: m.id, title: `Module ${m.number}: ${m.buildGoal || m.title}`,
    level: m.number <= 4 ? 'Beginner' : m.number <= 8 ? 'Intermediate' : 'Advanced',
    detail: m.projectThread || m.overview || '',
    icon: m.icon, color: m.color
  }));
  el.innerHTML = `
    <h1 style="font-size:1.5rem;font-weight:800;margin-bottom:0.4rem;letter-spacing:-0.02em">Projects &amp; Capstone</h1>
    <p style="color:var(--text-muted);margin-bottom:1.5rem">You do not learn eleven separate topics — you build one real website, a little more each module.</p>
    ${cap ? `
    <div class="lesson-section" style="border:2px solid var(--primary);background:linear-gradient(135deg,#EFF6FF,#F5F3FF)">
      <h2>🏆 Capstone: ${escapeHtml(cap.title)}</h2>
      <p>${escapeHtml(cap.description)}</p>
      <h3 style="font-size:0.95rem;margin:1rem 0 0.5rem">Choose a purpose</h3>
      <ul>${(cap.purposes||[]).map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
      <h3 style="font-size:0.95rem;margin:1rem 0 0.5rem">Minimum requirements</h3>
      <div class="viz-row">${(cap.requirements||[]).map(r => `
        <div class="viz-col" style="text-align:left">
          <h4>${escapeHtml(r.area)}</h4>
          <p style="font-size:0.8rem;color:var(--text-muted);margin:0">${escapeHtml(r.items)}</p>
        </div>`).join('')}</div>
    </div>` : ''}
    <div class="section-title" style="margin-top:1.75rem">Module project threads</div>
    <div class="project-grid">
      ${threadProjects.map(p => `
        <div class="project-card">
          <span class="badge ${p.level.toLowerCase()}">${p.level}</span>
          <h3 style="margin-bottom:0.4rem">${p.icon} ${escapeHtml(p.title)}</h3>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.75rem;line-height:1.45">${escapeHtml(p.detail).slice(0,160)}${p.detail.length>160?'…':''}</p>
          <button class="btn btn-primary" style="font-size:0.85rem;padding:0.45rem 0.9rem" data-module="${p.id}">Open module</button>
        </div>`).join('')}
    </div>`;
  el.querySelectorAll('[data-module]').forEach(btn => {
    btn.addEventListener('click', () => showModule(btn.dataset.module));
  });
}

function renderQuizzes(el) {
  const lessons = Object.values(window.COURSE_CONTENT?.lessons || {});
  const quizLessons = lessons.filter(lesson =>
    (lesson.sections || []).some(section => section.type === 'quiz'));

  el.innerHTML = `
    <div class="lesson-header">
      <h1>Knowledge Checks</h1>
      <p class="lesson-meta">Choose a lesson quiz to test your understanding. You will receive feedback after each answer.</p>
    </div>
    <div class="topic-grid">
      ${quizLessons.map(lesson => {
        const quizSection = lesson.sections.find(section => section.type === 'quiz');
        const questionCount = quizSection.questions?.length || 0;
        const completed = Boolean(state.progress[lesson.id]);
        return `
          <article class="topic-card">
            <div class="icon" style="background:#DBEAFE;color:#1D4ED8">🧠</div>
            <h3>${escapeHtml(lesson.title)}</h3>
            <p>${questionCount} question${questionCount === 1 ? '' : 's'} · ${completed ? 'Lesson completed' : 'Ready to practise'}</p>
            <button class="btn btn-primary" style="margin-top:.5rem;padding:.45rem .8rem;font-size:.82rem" data-quiz-lesson="${lesson.id}">Start quiz →</button>
          </article>`;
      }).join('') || '<div class="card"><p>No lesson quizzes are available yet.</p></div>'}
    </div>`;
  el.querySelectorAll('[data-quiz-lesson]').forEach(button =>
    button.addEventListener('click', () => showView('lesson', button.dataset.quizLesson)));
}

function setupSearch() {
  const input = $('#globalSearch');
  if (!input) return;
  input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const q = input.value.trim().toLowerCase();
    if (!q) return;
    const hits = [];
    Object.values(window.COURSE_CONTENT?.lessons || {}).forEach(l => {
      if (l.title.toLowerCase().includes(q) || (l.objectives || []).some(o => o.toLowerCase().includes(q))) {
        hits.push(l);
      }
    });
    if (hits.length) {
      showView('lesson', hits[0].id);
      showToast('Found: ' + hits[0].title);
    } else {
      showToast('No matching lesson');
    }
  });
}

function applyTheme(theme) {
  const selectedTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = selectedTheme;

  const toggle = $('#themeToggle');
  if (toggle) {
    const isDark = selectedTheme === 'dark';
    toggle.textContent = isDark ? '☀️' : '🌙';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  }
}

function setupMobileNavigation() {
  const header = document.querySelector('.top-nav');
  const toggle = $('#mobileMenuToggle');
  const navigation = $('#primaryNavigation');
  if (!header || !toggle || !navigation) return;

  const closeMenu = () => {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    header.classList.toggle('menu-open', !isOpen);
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  });

  navigation.querySelectorAll('a[data-view]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) closeMenu();
  });
}

function setupThemeToggle() {
  let savedTheme = 'light';
  try {
    savedTheme = localStorage.getItem('hcj-theme') || 'light';
  } catch (_) {}

  applyTheme(savedTheme);
  $('#themeToggle')?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    try {
      localStorage.setItem('hcj-theme', nextTheme);
    } catch (_) {}
  });
}

async function init() {
  setupThemeToggle();
  setupMobileNavigation();
  await loadModules();
  if (!state.modules?.modules?.length) {
    const byMod = {};
    Object.values(window.COURSE_CONTENT?.lessons || {}).forEach(l => {
      if (!byMod[l.moduleId]) byMod[l.moduleId] = [];
      byMod[l.moduleId].push({ id: l.id, title: l.title, duration: l.duration });
    });
    const titles = {
      m1: 'A Quick Overview of Web Development', m2: 'Introduction to HTML',
      m3: 'Paragraphs, Headings, and Text', m4: 'HTML Links', m5: 'HTML Images',
      m6: 'HTML Lists', m7: 'Crash Course in CSS', m8: 'CSS Fonts',
      m9: 'Color and Opacity', m10: 'CSS Text', m11: 'JavaScript Basics'
    };
    const colors = ['#3B82F6','#10B981','#8B5CF6','#F59E0B','#EC4899','#14B8A6','#6366F1','#F97316','#EF4444','#0EA5E9','#EAB308'];
    const icons = ['🌐','📄','✏️','🔗','🖼️','📋','🎨','🔤','🌈','📝','⚡'];
    state.modules = {
      course: { title: 'Programming with HTML, CSS and JavaScript' },
      modules: Object.keys(byMod).sort().map((id, i) => ({
        id, number: i + 1, title: titles[id] || id, icon: icons[i], color: colors[i],
        lessons: byMod[id]
      })),
      projects: [
        { id: 'p1', title: 'Personal Profile Page', level: 'Beginner', modules: ['m2','m3','m4','m5'] },
        { id: 'p2', title: 'Recipe Card with Lists', level: 'Beginner', modules: ['m3','m6'] },
        { id: 'p3', title: 'Styled Article Page', level: 'Intermediate', modules: ['m7','m8','m9','m10'] },
        { id: 'p4', title: 'Interactive Greeting Page', level: 'Intermediate', modules: ['m11'] }
      ]
    };
  }
  renderSidebar();
  updateOverallProgress();
  setupSearch();
  showView('dashboard');

  $$('.nav-links a, .side-link').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const v = el.dataset.view;
      if (v) showView(v);
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
window.showView = showView;
window.showModule = showModule;
