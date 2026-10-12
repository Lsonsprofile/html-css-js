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
        <div class="hero-eyebrow"><span></span> COURSE 55320A <i>•</i> BEGINNER TO BUILDER</div>
        <h1>Build your confidence<br>with <span>web development.</span></h1>
        <p>Learn HTML, CSS, and JavaScript through a clear, hands-on path—from your first page to interactive projects.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" id="startLearning">Explore the course <span aria-hidden="true">→</span></button>
          <button class="btn btn-ghost" id="openPlayground">Open playground</button>
        </div>
        <div class="hero-tags">
          <span>11 guided modules</span>
          <span>Hands-on practice</span>
          <span>Real projects</span>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-art">
          <div class="hero-art-top"><span></span><span></span><span></span><small>YOUR WEB TOOLKIT</small></div>
          <div class="hero-art-grid">
            <div class="hero-art-card html-card">
              <span class="hero-art-symbol">&lt;/&gt;</span>
              <span class="hero-art-copy"><small>01 · STRUCTURE</small><strong>HTML</strong></span>
              <span class="hero-art-check">✓</span>
            </div>
            <div class="hero-art-card css-card">
              <span class="hero-art-symbol">✳</span>
              <span class="hero-art-copy"><small>02 · DESIGN</small><strong>CSS</strong></span>
              <span class="hero-art-check">✓</span>
            </div>
            <div class="hero-art-card js-card">
              <span class="hero-art-symbol">JS</span>
              <span class="hero-art-copy"><small>03 · INTERACTION</small><strong>JavaScript</strong></span>
              <span class="hero-art-check">✓</span>
            </div>
          </div>
          <div class="hero-art-foot"><span></span> Three skills. One thing at a time.</div>
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
    <div class="section-title"><span>Explore the curriculum<small>Choose a module and start building your skills.</small></span><a href="#" data-view="topics">View all modules <span aria-hidden="true">→</span></a></div>
    <div class="topic-grid" id="dashTopics"></div>
    <div class="section-title section-title-spaced"><span>Your learning path<small>A step-by-step route through the core web skills.</small></span></div>
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
  el.innerHTML = `
    <h1 style="font-size:1.5rem;margin-bottom:0.5rem">All Modules</h1>
    <p style="color:var(--text-muted);margin-bottom:1.5rem">Choose a topic to start learning. Each module includes detailed explanations, examples and exercises.</p>
    <div class="topic-grid">
      ${mods.map(m => `
        <div class="topic-card" data-module="${m.id}">
          <div class="icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
          <h3>${escapeHtml(m.title)}</h3>
          <p>${m.lessons.length} lessons · Module ${m.number}</p>
          <div class="meta"><span></span><span class="arrow">Start →</span></div>
        </div>`).join('')}
    </div>`;
  el.querySelectorAll('.topic-card').forEach(c => c.addEventListener('click', () => showModule(c.dataset.module)));
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
    ${mod.learningOutcomes?.length ? `<div class="objectives"><h3>🎯 By the end of this module, you can</h3><ul>${mod.learningOutcomes.map(outcome => `<li>${escapeHtml(outcome)}</li>`).join('')}</ul></div>` : ''}
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

function renderParagraphs(content) {
  const paragraphs = Array.isArray(content) ? content : [content];
  return paragraphs.filter(Boolean).map(text => `<p>${escapeHtml(text)}</p>`).join('');
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
    </div>`;

  if (lesson.objectives?.length) {
    html += `<div class="objectives"><h3>🎯 Learning objectives</h3><ul>${lesson.objectives.map(o => `<li>${escapeHtml(o)}</li>`).join('')}</ul></div>`;
  }

  html += `<details class="lesson-outline" id="lessonOutline"><summary>Jump to a section in this lesson</summary><ol></ol></details>`;

  const authoredSections = lesson.sections || [];
  const lessonBodySections = authoredSections.filter(section =>
    section.type !== 'summary' && section.type !== 'quiz' && section.title !== 'Guided workshop');
  const guidedWorkshops = authoredSections.filter(section =>
    section.type === 'practice' && section.title === 'Guided workshop');
  const lessonSummaries = authoredSections.filter(section => section.type === 'summary');
  const lessonQuizzes = authoredSections.filter(section => section.type === 'quiz');
  [...lessonBodySections, ...guidedWorkshops, ...lessonSummaries, ...lessonQuizzes].forEach(sec => {
    if (sec.type === 'intro' || sec.type === 'explanation') {
      html += `<div class="lesson-section"><h2>${sec.type === 'intro' ? 'Intro' : 'Explanation'}: ${escapeHtml(sec.title)}</h2>${renderParagraphs(sec.content)}</div>`;
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
      if (sec.content) html += renderParagraphs(sec.content);
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
      if (sec.content) html += renderParagraphs(sec.content);
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
      html += `<div class="lesson-section"><h2>${escapeHtml(sec.title)}</h2>`;
      if (sec.prompt) html += `<p>${escapeHtml(sec.prompt)}</p>`;
      html += `<ol>${sec.steps.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ol>`;
      if (sec.expected) html += `<div class="practice-check"><strong>Check your result</strong><p>${escapeHtml(sec.expected)}</p></div>`;
      if (sec.hint) html += `<details class="practice-hint"><summary>Need a hint?</summary><p>${escapeHtml(sec.hint)}</p></details>`;
      html += `</div>`;
    } else if (sec.type === 'callout') {
      const tone = ['tip', 'warning', 'example'].includes(sec.tone) ? sec.tone : 'tip';
      html += `<aside class="lesson-callout ${tone}"><h2>${escapeHtml(sec.title)}</h2><p>${escapeHtml(sec.content)}</p></aside>`;
    } else if (sec.type === 'comparison') {
      html += `<section class="lesson-section"><h2>${escapeHtml(sec.title)}</h2><div class="comparison-grid">
        ${(sec.columns || []).map(column => `<article class="comparison-card"><h3>${escapeHtml(column.title)}</h3>
          ${column.intro ? `<p>${escapeHtml(column.intro)}</p>` : ''}
          <ul>${(column.points || []).map(point => `<li>${escapeHtml(point)}</li>`).join('')}</ul>
        </article>`).join('')}
      </div></section>`;
    } else if (sec.type === 'terms') {
      html += `<section class="lesson-section"><h2>${escapeHtml(sec.title)}</h2><dl class="lesson-terms">
        ${(sec.items || []).map(item => `<div><dt>${escapeHtml(item.term)}</dt><dd>${escapeHtml(item.definition)}</dd></div>`).join('')}
      </dl></section>`;
    } else if (sec.type === 'steps') {
      html += `<section class="lesson-section"><h2>${escapeHtml(sec.title)}</h2><ol class="lesson-steps">
        ${(sec.items || []).map((item, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.content)}</p></div></li>`).join('')}
      </ol></section>`;
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
      if (sec.content) html += renderParagraphs(sec.content);
      html += `<figure class="content-figure"><img src="${escapeHtml(sec.src)}" alt="${escapeHtml(sec.alt || sec.title || '')}" loading="lazy">`;
      if (sec.caption) html += `<figcaption>${escapeHtml(sec.caption)}</figcaption>`;
      html += `</figure></div>`;
    } else if (sec.type === 'video') {
      html += `<div class="lesson-section"><h2>🎬 ${escapeHtml(sec.title || 'Watch & learn')}</h2>`;
      if (sec.content) html += renderParagraphs(sec.content);
      html += `<div class="video-list">${(sec.videos || []).map(v => `
        <a class="video-card" href="${escapeHtml(v.url)}" target="_blank" rel="noopener noreferrer">
          <span class="video-icon">▶</span>
          <span><strong>${escapeHtml(v.title)}</strong><small>${escapeHtml(v.source || 'External video')}</small></span>
        </a>`).join('')}</div></div>`;
    } else if (sec.type === 'download' || sec.type === 'resources') {
      html += `<div class="lesson-section"><h2>📥 ${escapeHtml(sec.title || 'Downloads')}</h2>`;
      if (sec.content) html += renderParagraphs(sec.content);
      html += `<div class="download-grid">${(sec.files || []).map(f => `
        <a class="download-card" href="${escapeHtml(f.href)}" download>
          <span class="dl-icon">📄</span>
          <span><strong>${escapeHtml(f.name)}</strong><small>${escapeHtml(f.desc || '')}</small></span>
        </a>`).join('')}</div></div>`;
    }
  });

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

  const outline = $('#lessonOutline', el);
  const lessonSections = $$('.lesson-section, .lesson-callout', el);
  const outlineList = $('ol', outline);
  lessonSections.forEach((section, index) => {
    const id = `lesson-part-${index + 1}`;
    section.id = id;
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = $('h2', section)?.textContent || `Section ${index + 1}`;
    const item = document.createElement('li');
    item.append(link);
    outlineList.append(item);
  });
  if (lessonSections.length < 4) outline.hidden = true;

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
      const currentSection = box.closest('.lesson-section');
      const reviewSection = $$('.lesson-section', el)
        .filter(section => section !== currentSection && (section.compareDocumentPosition(currentSection) & Node.DOCUMENT_POSITION_FOLLOWING))
        .reverse()
        .find(section => !/^(Summary|Check your understanding|Guided workshop|Guided practice|Try it yourself)/i.test($('h2', section)?.textContent.trim() || ''));
      const reviewHeading = reviewSection && $('h2', reviewSection);
      if (reviewSection && reviewHeading) {
        const reviewLink = document.createElement('a');
        reviewLink.className = 'quiz-review-link';
        reviewLink.href = `#${reviewSection.id}`;
        reviewLink.textContent = `Review: ${reviewHeading.textContent.trim()}`;
        feedback.append(document.createTextNode(' '), reviewLink);
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
      course: { title: 'KidsTechGlobal | Programming with HTML, CSS and JavaScript' },
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
