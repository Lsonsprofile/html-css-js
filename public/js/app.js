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

function markComplete(lessonId) {
  state.progress[lessonId] = true;
  saveProgress();
  showToast('Lesson marked complete');
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
  else if (name === 'topics' || name === 'path') renderTopics(main);
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
        <div class="method-pills">
          <span class="m-get">HTML</span>
          <span class="m-post">CSS</span>
          <span class="m-put">JS</span>
        </div>
        <div class="hero-illustration">💻</div>
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
  `;

  const grid = $('#dashTopics');
  if (grid) {
    grid.innerHTML = mods.map(m => `
      <div class="topic-card" data-module="${m.id}">
        <div class="icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
        <h3>${escapeHtml(m.title)}</h3>
        <p>${m.lessons.length} lessons</p>
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
      <div class="lesson-meta">${mod.lessons.length} lessons</div>
    </div>
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

function renderLesson(el, lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) {
    el.innerHTML = `<p>Lesson not found.</p><button class="btn btn-primary" id="backDash">Back</button>`;
    $('#backDash')?.addEventListener('click', () => showView('dashboard'));
    return;
  }
  state.currentLessonId = lessonId;
  const mod = state.modules?.modules.find(m => m.id === lesson.moduleId);

  let html = `
    <div class="lesson-header">
      <div class="breadcrumb">
        <a href="#" data-nav="dashboard">Dashboard</a> /
        <a href="#" data-nav="module" data-id="${lesson.moduleId}">${mod ? escapeHtml(mod.title) : ''}</a>
      </div>
      <h1>${escapeHtml(lesson.title)}</h1>
      <div class="lesson-meta">
        <span>${lesson.duration || '10 min'}</span>
        ${state.progress[lessonId] ? '<span style="color:var(--success)">Completed</span>' : ''}
      </div>
    </div>`;

  if (lesson.objectives?.length) {
    html += `<div class="objectives"><h3>Learning objectives</h3><ul>${lesson.objectives.map(o => `<li>${escapeHtml(o)}</li>`).join('')}</ul></div>`;
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

  html += `
    <div class="lesson-nav">
      <button ${prevId ? '' : 'disabled'} data-go="${prevId || ''}">Previous</button>
      <button class="btn btn-primary" id="markDone" style="padding:0.55rem 1.2rem">${state.progress[lessonId] ? 'Completed' : 'Mark Complete'}</button>
      <button class="next-btn" ${nextId ? '' : 'disabled'} data-go="${nextId || ''}">Next</button>
    </div>`;

  el.innerHTML = html;

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
    markComplete(lessonId);
    $('#markDone').textContent = 'Completed';
  });

  el.querySelectorAll('[data-go]').forEach(btn => {
    if (btn.dataset.go) btn.addEventListener('click', () => showView('lesson', btn.dataset.go));
  });

  if (lesson.playground) {
    const tabs = el.querySelectorAll('[data-tab]');
    const areas = { html: $('#pg-html'), css: $('#pg-css'), js: $('#pg-js') };
    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      Object.values(areas).forEach(a => a?.classList.add('hidden'));
      areas[t.dataset.tab]?.classList.remove('hidden');
    }));
    const run = () => {
      const doc = `<!DOCTYPE html><html><head><style>${areas.css?.value || ''}</style></head><body>${areas.html?.value || ''}<script>${areas.js?.value || ''}<\/script></body></html>`;
      const frame = $('#pg-frame');
      if (frame) frame.srcdoc = doc;
    };
    $('#pg-run')?.addEventListener('click', run);
    $('#pg-reset')?.addEventListener('click', () => {
      if (areas.html) areas.html.value = lesson.playground.html || '';
      if (areas.css) areas.css.value = lesson.playground.css || '';
      if (areas.js) areas.js.value = lesson.playground.js || '';
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
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    Object.values(areas).forEach(a => a.classList.add('hidden'));
    areas[t.dataset.tab].classList.remove('hidden');
  }));
  const run = () => {
    $('#full-frame').srcdoc = `<!DOCTYPE html><html><head><style>${areas.css.value}</style></head><body>${areas.html.value}<script>${areas.js.value}<\/script></body></html>`;
  };
  $('#full-run').addEventListener('click', run);
  $('#full-reset').addEventListener('click', () => {
    areas.html.value = defaults.html;
    areas.css.value = defaults.css;
    areas.js.value = defaults.js;
    run();
  });
  run();
}

function renderProjects(el) {
  const projects = state.modules?.projects || [];
  el.innerHTML = `
    <h1 style="font-size:1.4rem;margin-bottom:0.5rem">Practical Projects</h1>
    <p style="color:var(--text-muted);margin-bottom:1.5rem">Apply what you have learned.</p>
    <div class="project-grid">
      ${projects.map(p => `
        <div class="project-card">
          <span class="badge ${p.level.toLowerCase()}">${p.level}</span>
          <h3 style="margin-bottom:0.4rem">${escapeHtml(p.title)}</h3>
          <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.75rem">Modules: ${p.modules.join(', ')}</p>
          <button class="btn btn-primary" style="font-size:0.85rem;padding:0.45rem 0.9rem" data-project="${p.id}">Open brief</button>
        </div>`).join('')}
    </div>
    <div id="projectDetail" style="margin-top:1.5rem"></div>`;
  el.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = projects.find(x => x.id === btn.dataset.project);
      const detail = $('#projectDetail');
      detail.innerHTML = `
        <div class="card">
          <h2>${escapeHtml(p.title)}</h2>
          <p style="margin:0.75rem 0">Build a working page that demonstrates skills from the listed modules.</p>
          <ol style="padding-left:1.3rem;margin-bottom:1rem">
            <li>Review related lessons</li>
            <li>Build HTML structure first</li>
            <li>Add CSS for layout and typography</li>
            <li>Add JavaScript if interaction is required</li>
            <li>Test in the browser</li>
          </ol>
          <button class="btn btn-primary" data-go-play>Open Playground</button>
        </div>`;
      detail.querySelector('[data-go-play]')?.addEventListener('click', () => showView('playground'));
    });
  });
}

function renderQuizzes(el) {
  el.innerHTML = `
    <h1 style="font-size:1.4rem;margin-bottom:0.5rem">Knowledge Checks</h1>
    <p style="color:var(--text-muted);margin-bottom:1.5rem">Quizzes live inside each lesson. Complete lessons to practise.</p>
    <div class="card">
      <p>Open any lesson that contains a Knowledge check section. Feedback appears immediately.</p>
      <button class="btn btn-primary" style="margin-top:1rem" data-view="topics">Browse lessons</button>
    </div>`;
  el.querySelector('[data-view="topics"]')?.addEventListener('click', () => showView('topics'));
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

async function init() {
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
