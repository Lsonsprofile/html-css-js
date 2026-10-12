/* Educational SVG diagrams & interactive visual teaching tools */

window.VISUALS = {
  /* ========== STATIC SVG DIAGRAMS ========== */

  skeleton() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 420 320" class="viz-svg" role="img" aria-label="HTML document structure">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#3B82F6"/><stop offset="100%" stop-color="#1E40AF"/>
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#047857"/>
          </linearGradient>
          <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
        </defs>
        <!-- DOCTYPE -->
        <rect x="20" y="10" width="380" height="28" rx="6" fill="#F472B6"/>
        <text x="210" y="29" text-anchor="middle" fill="#fff" font-size="13" font-family="JetBrains Mono,monospace">&lt;!DOCTYPE html&gt;</text>
        <!-- html -->
        <rect x="30" y="50" width="360" height="250" rx="8" fill="none" stroke="url(#g1)" stroke-width="2.5"/>
        <text x="48" y="72" fill="#60A5FA" font-size="12" font-family="JetBrains Mono,monospace" font-weight="600">&lt;html lang="en"&gt;</text>
        <!-- head -->
        <rect x="48" y="85" width="324" height="70" rx="6" fill="#ECFDF5" stroke="url(#g2)" stroke-width="2"/>
        <text x="62" y="105" fill="#047857" font-size="12" font-family="JetBrains Mono,monospace" font-weight="600">&lt;head&gt;</text>
        <rect x="62" y="115" width="200" height="22" rx="4" fill="#A7F3D0"/>
        <text x="72" y="130" fill="#065F46" font-size="11" font-family="JetBrains Mono,monospace">&lt;meta charset="UTF-8"&gt;</text>
        <rect x="62" y="142" width="160" height="22" rx="4" fill="#A7F3D0"/>
        <text x="72" y="157" fill="#065F46" font-size="11" font-family="JetBrains Mono,monospace">&lt;title&gt;…&lt;/title&gt;</text>
        <!-- body -->
        <rect x="48" y="170" width="324" height="110" rx="6" fill="#FFFBEB" stroke="url(#g3)" stroke-width="2"/>
        <text x="62" y="190" fill="#B45309" font-size="12" font-family="JetBrains Mono,monospace" font-weight="600">&lt;body&gt;</text>
        <rect x="62" y="200" width="140" height="22" rx="4" fill="#FDE68A"/>
        <text x="72" y="215" fill="#92400E" font-size="11" font-family="JetBrains Mono,monospace">&lt;h1&gt;Hello&lt;/h1&gt;</text>
        <rect x="62" y="228" width="200" height="22" rx="4" fill="#FDE68A"/>
        <text x="72" y="243" fill="#92400E" font-size="11" font-family="JetBrains Mono,monospace">&lt;p&gt;Content here&lt;/p&gt;</text>
        <text x="62" y="268" fill="#B45309" font-size="11" font-family="JetBrains Mono,monospace">&lt;/body&gt;</text>
        <text x="48" y="292" fill="#60A5FA" font-size="11" font-family="JetBrains Mono,monospace">&lt;/html&gt;</text>
      </svg>
      <div class="viz-legend">
        <span class="leg pink">DOCTYPE</span>
        <span class="leg blue">html root</span>
        <span class="leg green">head (metadata)</span>
        <span class="leg amber">body (visible content)</span>
      </div>
    </div>`;
  },

  headingHierarchy() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 400 280" class="viz-svg" role="img" aria-label="Heading hierarchy h1 to h6">
        <text x="20" y="28" fill="#1E40AF" font-size="26" font-weight="800" font-family="Inter,sans-serif">h1 — Page title</text>
        <line x1="20" y1="38" x2="380" y2="38" stroke="#DBEAFE" stroke-width="2"/>
        <text x="36" y="68" fill="#2563EB" font-size="22" font-weight="700" font-family="Inter,sans-serif">h2 — Section</text>
        <text x="52" y="100" fill="#3B82F6" font-size="18" font-weight="600" font-family="Inter,sans-serif">h3 — Subsection</text>
        <text x="68" y="130" fill="#60A5FA" font-size="16" font-weight="600" font-family="Inter,sans-serif">h4 — Minor heading</text>
        <text x="84" y="158" fill="#93C5FD" font-size="14" font-weight="500" font-family="Inter,sans-serif">h5 — Detail heading</text>
        <text x="100" y="184" fill="#BFDBFE" font-size="13" font-weight="500" font-family="Inter,sans-serif">h6 — Finest level</text>
        <!-- tree lines -->
        <path d="M28 48 v20 M28 68 h8" stroke="#94A3B8" stroke-width="1.5" fill="none"/>
        <path d="M44 78 v20 M44 98 h8" stroke="#94A3B8" stroke-width="1.5" fill="none"/>
        <path d="M60 108 v20 M60 128 h8" stroke="#94A3B8" stroke-width="1.5" fill="none"/>
        <path d="M76 138 v18 M76 156 h8" stroke="#94A3B8" stroke-width="1.5" fill="none"/>
        <path d="M92 166 v16 M92 182 h8" stroke="#94A3B8" stroke-width="1.5" fill="none"/>
        <rect x="20" y="210" width="360" height="50" rx="8" fill="#EFF6FF" stroke="#BFDBFE"/>
        <text x="200" y="232" text-anchor="middle" fill="#1E40AF" font-size="12" font-family="Inter,sans-serif" font-weight="600">Never skip levels for visual size — use CSS for appearance</text>
        <text x="200" y="250" text-anchor="middle" fill="#64748B" font-size="11" font-family="Inter,sans-serif">Screen readers announce the level number</text>
      </svg>
    </div>`;
  },

  absoluteRelative() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 480 300" class="viz-svg" role="img" aria-label="Absolute vs relative file paths">
        <!-- Folder tree -->
        <rect x="20" y="20" width="200" height="260" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
        <text x="120" y="45" text-anchor="middle" fill="#0F172A" font-size="13" font-weight="700">Site folder</text>
        <rect x="40" y="60" width="160" height="28" rx="5" fill="#DBEAFE"/>
        <text x="55" y="79" fill="#1E40AF" font-size="12" font-family="JetBrains Mono,monospace">📁 index.html</text>
        <rect x="40" y="98" width="160" height="28" rx="5" fill="#DBEAFE"/>
        <text x="55" y="117" fill="#1E40AF" font-size="12" font-family="JetBrains Mono,monospace">📁 about.html</text>
        <rect x="40" y="136" width="160" height="28" rx="5" fill="#D1FAE5"/>
        <text x="55" y="155" fill="#065F46" font-size="12" font-family="JetBrains Mono,monospace">📂 pages/</text>
        <rect x="55" y="172" width="145" height="26" rx="4" fill="#A7F3D0"/>
        <text x="68" y="190" fill="#047857" font-size="11" font-family="JetBrains Mono,monospace">📄 contact.html</text>
        <rect x="40" y="210" width="160" height="28" rx="5" fill="#FEF3C7"/>
        <text x="55" y="229" fill="#92400E" font-size="12" font-family="JetBrains Mono,monospace">📂 images/</text>
        <rect x="55" y="246" width="145" height="26" rx="4" fill="#FDE68A"/>
        <text x="68" y="264" fill="#B45309" font-size="11" font-family="JetBrains Mono,monospace">🖼 logo.png</text>

        <!-- Absolute -->
        <rect x="250" y="30" width="210" height="100" rx="8" fill="#FEF2F2" stroke="#FECACA"/>
        <text x="355" y="55" text-anchor="middle" fill="#991B1B" font-size="13" font-weight="700">Absolute path</text>
        <text x="265" y="80" fill="#7F1D1D" font-size="11" font-family="JetBrains Mono,monospace">https://site.com/</text>
        <text x="265" y="98" fill="#7F1D1D" font-size="11" font-family="JetBrains Mono,monospace">pages/contact.html</text>
        <text x="355" y="118" text-anchor="middle" fill="#B91C1C" font-size="10">Full URL — works from anywhere</text>

        <!-- Relative -->
        <rect x="250" y="150" width="210" height="120" rx="8" fill="#ECFDF5" stroke="#A7F3D0"/>
        <text x="355" y="175" text-anchor="middle" fill="#065F46" font-size="13" font-weight="700">Relative paths</text>
        <text x="265" y="198" fill="#047857" font-size="11" font-family="JetBrains Mono,monospace">from index.html:</text>
        <text x="265" y="216" fill="#065F46" font-size="11" font-family="JetBrains Mono,monospace">pages/contact.html</text>
        <text x="265" y="238" fill="#047857" font-size="11" font-family="JetBrains Mono,monospace">from contact.html:</text>
        <text x="265" y="256" fill="#065F46" font-size="11" font-family="JetBrains Mono,monospace">../images/logo.png</text>
      </svg>
    </div>`;
  },

  linkAnatomy() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 460 160" class="viz-svg" role="img" aria-label="Anatomy of an HTML link">
        <rect x="10" y="40" width="440" height="50" rx="8" fill="#0F172A"/>
        <text x="24" y="72" fill="#F472B6" font-size="15" font-family="JetBrains Mono,monospace">&lt;a</text>
        <text x="52" y="72" fill="#34D399" font-size="15" font-family="JetBrains Mono,monospace"> href</text>
        <text x="100" y="72" fill="#94A3B8" font-size="15" font-family="JetBrains Mono,monospace">=</text>
        <text x="118" y="72" fill="#FBBF24" font-size="15" font-family="JetBrains Mono,monospace">"about.html"</text>
        <text x="240" y="72" fill="#60A5FA" font-size="15" font-family="JetBrains Mono,monospace"> target</text>
        <text x="310" y="72" fill="#94A3B8" font-size="15" font-family="JetBrains Mono,monospace">=</text>
        <text x="328" y="72" fill="#FBBF24" font-size="15" font-family="JetBrains Mono,monospace">"_blank"</text>
        <text x="410" y="72" fill="#F472B6" font-size="15" font-family="JetBrains Mono,monospace">&gt;</text>
        <!-- arrows -->
        <line x1="70" y1="95" x2="70" y2="120" stroke="#34D399" stroke-width="2"/>
        <text x="70" y="138" text-anchor="middle" fill="#059669" font-size="11" font-weight="600">attribute</text>
        <line x1="170" y1="95" x2="170" y2="120" stroke="#FBBF24" stroke-width="2"/>
        <text x="170" y="138" text-anchor="middle" fill="#D97706" font-size="11" font-weight="600">value (URL)</text>
        <line x1="280" y1="95" x2="280" y2="120" stroke="#60A5FA" stroke-width="2"/>
        <text x="280" y="138" text-anchor="middle" fill="#2563EB" font-size="11" font-weight="600">opens new tab</text>
        <text x="30" y="28" fill="#64748B" font-size="12" font-weight="600">Opening tag</text>
        <text x="380" y="28" fill="#64748B" font-size="12" font-weight="600">then content + &lt;/a&gt;</text>
      </svg>
    </div>`;
  },

  webRequest() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 720 190" class="viz-svg" role="img" aria-label="Browser request travels to a server and a response returns to the browser">
        <defs>
          <marker id="request-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#2563EB"/>
          </marker>
          <marker id="response-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#059669"/>
          </marker>
        </defs>
        <rect x="24" y="55" width="150" height="82" rx="14" fill="#DBEAFE" stroke="#60A5FA" stroke-width="2"/>
        <text x="99" y="88" text-anchor="middle" fill="#1E3A8A" font-size="16" font-weight="700">Browser</text>
        <text x="99" y="112" text-anchor="middle" fill="#1E40AF" font-size="12">asks for a page</text>
        <rect x="546" y="55" width="150" height="82" rx="14" fill="#D1FAE5" stroke="#34D399" stroke-width="2"/>
        <text x="621" y="88" text-anchor="middle" fill="#065F46" font-size="16" font-weight="700">Web server</text>
        <text x="621" y="112" text-anchor="middle" fill="#047857" font-size="12">finds the files</text>
        <path d="M182 77 H530" stroke="#2563EB" stroke-width="3" marker-end="url(#request-arrow)"/>
        <text x="356" y="68" text-anchor="middle" fill="#1D4ED8" font-size="12" font-weight="600">REQUEST →</text>
        <path d="M538 119 H190" stroke="#059669" stroke-width="3" marker-end="url(#response-arrow)"/>
        <text x="356" y="151" text-anchor="middle" fill="#047857" font-size="12" font-weight="600">← RESPONSE (HTML, CSS, JavaScript, images)</text>
      </svg>
      <div class="viz-legend">
        <span class="leg blue">The browser requests</span>
        <span class="leg green">The server responds</span>
      </div>
    </div>`;
  },

  imageAnatomy() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 560 250" class="viz-svg" role="img" aria-label="An HTML image uses a source path, alternative text, and an optional caption">
        <rect x="20" y="22" width="520" height="205" rx="14" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>
        <rect x="42" y="47" width="210" height="142" rx="10" fill="#DBEAFE" stroke="#60A5FA" stroke-width="2"/>
        <circle cx="105" cy="93" r="24" fill="#FDE68A"/>
        <path d="M55 173 L116 119 L152 151 L188 110 L238 173 Z" fill="#34D399"/>
        <text x="147" y="210" text-anchor="middle" fill="#334155" font-size="11">The picture visitors can see</text>
        <text x="282" y="70" fill="#1E40AF" font-size="14" font-family="JetBrains Mono,monospace">&lt;img src="garden.jpg"</text>
        <text x="282" y="101" fill="#047857" font-size="14" font-family="JetBrains Mono,monospace">alt="Herbs in pots"</text>
        <path d="M252 75 H272" stroke="#2563EB" stroke-width="2"/>
        <text x="282" y="132" fill="#475569" font-size="12">src tells the browser where to find it.</text>
        <text x="282" y="158" fill="#475569" font-size="12">alt describes its meaning or purpose.</text>
        <text x="282" y="190" fill="#475569" font-size="12">A caption can add visible context.</text>
      </svg>
      <div class="viz-legend">
        <span class="leg blue">Image source</span>
        <span class="leg green">Alternative text</span>
        <span class="leg amber">Optional caption</span>
      </div>
    </div>`;
  },

  listTypes() {
    return `
    <div class="viz-card viz-row">
      <div class="viz-col">
        <h4>Unordered (ul)</h4>
        <ul class="demo-ul"><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>
        <code>&lt;ul&gt;&lt;li&gt;…&lt;/li&gt;&lt;/ul&gt;</code>
      </div>
      <div class="viz-col">
        <h4>Ordered (ol)</h4>
        <ol class="demo-ol"><li>Plan</li><li>Build</li><li>Test</li></ol>
        <code>&lt;ol&gt;&lt;li&gt;…&lt;/li&gt;&lt;/ol&gt;</code>
      </div>
      <div class="viz-col">
        <h4>Definition (dl)</h4>
        <dl class="demo-dl"><dt>HTML</dt><dd>Structure</dd><dt>CSS</dt><dd>Style</dd></dl>
        <code>&lt;dl&gt;&lt;dt&gt;…&lt;dd&gt;…&lt;/dl&gt;</code>
      </div>
    </div>`;
  },

  cssCascade() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 440 260" class="viz-svg" role="img" aria-label="CSS specificity cascade">
        <text x="220" y="28" text-anchor="middle" fill="#0F172A" font-size="14" font-weight="700">Specificity — who wins?</text>
        <!-- bars -->
        <rect x="40" y="50" width="80" height="40" rx="6" fill="#E2E8F0"/>
        <text x="80" y="75" text-anchor="middle" fill="#475569" font-size="12" font-weight="600">type</text>
        <text x="80" y="110" text-anchor="middle" fill="#64748B" font-size="11">p { }</text>
        <text x="80" y="128" text-anchor="middle" fill="#94A3B8" font-size="10">0,0,1</text>

        <rect x="140" y="45" width="90" height="50" rx="6" fill="#BFDBFE"/>
        <text x="185" y="75" text-anchor="middle" fill="#1E40AF" font-size="12" font-weight="600">class</text>
        <text x="185" y="115" text-anchor="middle" fill="#64748B" font-size="11">.lead { }</text>
        <text x="185" y="133" text-anchor="middle" fill="#94A3B8" font-size="10">0,1,0</text>

        <rect x="250" y="38" width="90" height="60" rx="6" fill="#93C5FD"/>
        <text x="295" y="75" text-anchor="middle" fill="#1E3A8A" font-size="12" font-weight="700">id</text>
        <text x="295" y="120" text-anchor="middle" fill="#64748B" font-size="11">#hero { }</text>
        <text x="295" y="138" text-anchor="middle" fill="#94A3B8" font-size="10">1,0,0</text>

        <rect x="360" y="30" width="60" height="75" rx="6" fill="#EF4444"/>
        <text x="390" y="75" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">!imp</text>
        <text x="390" y="125" text-anchor="middle" fill="#64748B" font-size="10">overrides</text>

        <path d="M80 145 L80 170 L390 170 L390 145" stroke="#CBD5E1" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
        <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#94A3B8"/></marker></defs>
        <text x="220" y="195" text-anchor="middle" fill="#64748B" font-size="12">Higher specificity wins. Equal specificity → later rule wins.</text>
        <rect x="40" y="210" width="360" height="36" rx="6" fill="#FEF3C7"/>
        <text x="220" y="233" text-anchor="middle" fill="#92400E" font-size="12" font-weight="600">Avoid !important — it makes future overrides hard</text>
      </svg>
    </div>`;
  },

  boxModel() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 360 280" class="viz-svg" role="img" aria-label="CSS box model">
        <!-- margin -->
        <rect x="20" y="20" width="320" height="240" rx="4" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6 3"/>
        <text x="30" y="40" fill="#B45309" font-size="12" font-weight="700">margin</text>
        <!-- border -->
        <rect x="50" y="50" width="260" height="180" rx="4" fill="#DBEAFE" stroke="#3B82F6" stroke-width="8"/>
        <text x="60" y="72" fill="#1E40AF" font-size="12" font-weight="700">border</text>
        <!-- padding -->
        <rect x="70" y="80" width="220" height="120" rx="2" fill="#D1FAE5"/>
        <text x="80" y="100" fill="#065F46" font-size="12" font-weight="700">padding</text>
        <!-- content -->
        <rect x="100" y="115" width="160" height="55" rx="2" fill="#E0E7FF" stroke="#6366F1" stroke-width="2"/>
        <text x="180" y="148" text-anchor="middle" fill="#3730A3" font-size="13" font-weight="700">content</text>
      </svg>
      <div class="viz-legend">
        <span class="leg amber">margin — outside</span>
        <span class="leg blue">border</span>
        <span class="leg green">padding — inside</span>
        <span class="leg purple">content</span>
      </div>
    </div>`;
  },

  domTree() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 400 260" class="viz-svg" role="img" aria-label="DOM tree structure">
        <rect x="150" y="10" width="100" height="32" rx="6" fill="#1E40AF"/>
        <text x="200" y="31" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">document</text>
        <line x1="200" y1="42" x2="200" y2="60" stroke="#94A3B8" stroke-width="2"/>
        <rect x="150" y="60" width="100" height="28" rx="6" fill="#3B82F6"/>
        <text x="200" y="79" text-anchor="middle" fill="#fff" font-size="12">html</text>
        <line x1="200" y1="88" x2="200" y2="105" stroke="#94A3B8" stroke-width="2"/>
        <line x1="100" y1="105" x2="300" y2="105" stroke="#94A3B8" stroke-width="2"/>
        <line x1="100" y1="105" x2="100" y2="120" stroke="#94A3B8" stroke-width="2"/>
        <line x1="300" y1="105" x2="300" y2="120" stroke="#94A3B8" stroke-width="2"/>
        <rect x="55" y="120" width="90" height="28" rx="6" fill="#10B981"/>
        <text x="100" y="139" text-anchor="middle" fill="#fff" font-size="12">head</text>
        <rect x="255" y="120" width="90" height="28" rx="6" fill="#F59E0B"/>
        <text x="300" y="139" text-anchor="middle" fill="#fff" font-size="12">body</text>
        <line x1="100" y1="148" x2="100" y2="165" stroke="#94A3B8" stroke-width="2"/>
        <line x1="70" y1="165" x2="130" y2="165" stroke="#94A3B8" stroke-width="2"/>
        <line x1="70" y1="165" x2="70" y2="175" stroke="#94A3B8" stroke-width="2"/>
        <line x1="130" y1="165" x2="130" y2="175" stroke="#94A3B8" stroke-width="2"/>
        <rect x="40" y="175" width="60" height="24" rx="4" fill="#6EE7B7"/>
        <text x="70" y="192" text-anchor="middle" fill="#065F46" font-size="10">title</text>
        <rect x="105" y="175" width="60" height="24" rx="4" fill="#6EE7B7"/>
        <text x="135" y="192" text-anchor="middle" fill="#065F46" font-size="10">meta</text>
        <line x1="300" y1="148" x2="300" y2="165" stroke="#94A3B8" stroke-width="2"/>
        <line x1="250" y1="165" x2="350" y2="165" stroke="#94A3B8" stroke-width="2"/>
        <line x1="250" y1="165" x2="250" y2="175" stroke="#94A3B8" stroke-width="2"/>
        <line x1="350" y1="165" x2="350" y2="175" stroke="#94A3B8" stroke-width="2"/>
        <rect x="220" y="175" width="60" height="24" rx="4" fill="#FCD34D"/>
        <text x="250" y="192" text-anchor="middle" fill="#92400E" font-size="10">h1</text>
        <rect x="320" y="175" width="60" height="24" rx="4" fill="#FCD34D"/>
        <text x="350" y="192" text-anchor="middle" fill="#92400E" font-size="10">p</text>
        <text x="200" y="230" text-anchor="middle" fill="#64748B" font-size="12">JavaScript can select and change any node</text>
        <text x="200" y="248" text-anchor="middle" fill="#94A3B8" font-size="11">document.getElementById / querySelector</text>
      </svg>
    </div>`;
  },

  elementExplorer() {
    return `
    <div class="viz-card">
      <svg viewBox="0 0 460 140" class="viz-svg" role="img" aria-label="HTML element parts">
        <rect x="10" y="30" width="130" height="50" rx="8" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
        <text x="75" y="60" text-anchor="middle" fill="#1E40AF" font-size="13" font-weight="700">&lt;p class="x"&gt;</text>
        <text x="75" y="100" text-anchor="middle" fill="#2563EB" font-size="11">Opening tag</text>
        <rect x="155" y="30" width="150" height="50" rx="8" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
        <text x="230" y="60" text-anchor="middle" fill="#065F46" font-size="13" font-weight="700">Hello world</text>
        <text x="230" y="100" text-anchor="middle" fill="#059669" font-size="11">Content</text>
        <rect x="320" y="30" width="120" height="50" rx="8" fill="#FCE7F3" stroke="#EC4899" stroke-width="2"/>
        <text x="380" y="60" text-anchor="middle" fill="#9D174D" font-size="13" font-weight="700">&lt;/p&gt;</text>
        <text x="380" y="100" text-anchor="middle" fill="#DB2777" font-size="11">Closing tag</text>
        <path d="M140 55 H155" stroke="#94A3B8" stroke-width="2" marker-end="url(#a2)"/>
        <path d="M305 55 H320" stroke="#94A3B8" stroke-width="2" marker-end="url(#a2)"/>
        <defs><marker id="a2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L5,3 L0,6" fill="#94A3B8"/></marker></defs>
      </svg>
    </div>`;
  },

  /* ========== INTERACTIVE DEMOS ========== */

  colorOpacityDemo() {
    return `
    <div class="demo-box" data-demo="color">
      <div class="demo-controls">
        <label>Colour <input type="color" id="demo-color" value="#2563EB"></label>
        <label>Opacity <input type="range" id="demo-opacity" min="0" max="100" value="100"> <span id="demo-op-val">100%</span></label>
      </div>
      <div class="demo-output" id="demo-color-out" style="color:#2563EB;font-size:1.4rem;font-weight:700;text-align:center;padding:1.5rem">
        The quick brown fox jumps
      </div>
      <pre class="demo-code" id="demo-color-code">color: #2563EB;\nopacity: 1;</pre>
    </div>`;
  },

  fontPlayground() {
    return `
    <div class="demo-box" data-demo="font">
      <div class="demo-controls">
        <label>Family
          <select id="demo-ff">
            <option value="Inter, sans-serif">Inter (sans)</option>
            <option value="Georgia, serif">Georgia (serif)</option>
            <option value="'JetBrains Mono', monospace">Mono</option>
            <option value="'Comic Sans MS', cursive">Cursive</option>
          </select>
        </label>
        <label>Size <input type="range" id="demo-fs" min="12" max="48" value="24"> <span id="demo-fs-val">24px</span></label>
        <label>Weight
          <select id="demo-fw">
            <option value="400">400 normal</option>
            <option value="500">500</option>
            <option value="700" selected>700 bold</option>
            <option value="800">800</option>
          </select>
        </label>
        <label>Style
          <select id="demo-fst">
            <option value="normal">normal</option>
            <option value="italic">italic</option>
          </select>
        </label>
      </div>
      <div class="demo-output" id="demo-font-out" style="font-family:Inter,sans-serif;font-size:24px;font-weight:700;text-align:center;padding:1.5rem;line-height:1.4">
        Typography playground
      </div>
      <pre class="demo-code" id="demo-font-code">font-family: Inter, sans-serif;\nfont-size: 24px;\nfont-weight: 700;\nfont-style: normal;</pre>
    </div>`;
  },

  textPropsDemo() {
    return `
    <div class="demo-box" data-demo="text">
      <div class="demo-controls">
        <label>Align
          <select id="demo-ta">
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
            <option value="justify">justify</option>
          </select>
        </label>
        <label>Transform
          <select id="demo-tt">
            <option value="none">none</option>
            <option value="uppercase">uppercase</option>
            <option value="lowercase">lowercase</option>
            <option value="capitalize">capitalize</option>
          </select>
        </label>
        <label>Decoration
          <select id="demo-td">
            <option value="none">none</option>
            <option value="underline">underline</option>
            <option value="line-through">line-through</option>
            <option value="overline">overline</option>
          </select>
        </label>
        <label>Letter spacing <input type="range" id="demo-ls" min="-2" max="12" value="0"> <span id="demo-ls-val">0px</span></label>
      </div>
      <div class="demo-output" id="demo-text-out" style="padding:1.5rem;font-size:1.15rem">
        The quick brown fox jumps over the lazy dog. Change the controls to transform this text.
      </div>
      <pre class="demo-code" id="demo-text-code">text-align: left;\ntext-transform: none;\ntext-decoration: none;\nletter-spacing: 0px;</pre>
    </div>`;
  },

  selectorPlayground() {
    return `
    <div class="demo-box" data-demo="selector">
      <div class="demo-controls">
        <label>Selector
          <select id="demo-sel">
            <option value="p">p (type)</option>
            <option value=".note">.note (class)</option>
            <option value="#special">#special (id)</option>
            <option value="p.note">p.note (type+class)</option>
          </select>
        </label>
        <label>Colour <input type="color" id="demo-sel-color" value="#DC2626"></label>
      </div>
      <div class="demo-output" id="demo-sel-out" style="padding:1rem;line-height:1.8">
        <p>Plain paragraph</p>
        <p class="note">Paragraph with class="note"</p>
        <p id="special">Paragraph with id="special"</p>
        <p class="note">Another .note paragraph</p>
      </div>
      <pre class="demo-code" id="demo-sel-code">p { color: #DC2626; }</pre>
    </div>`;
  },

  unitComparison() {
    return `
    <div class="demo-box" data-demo="units">
      <div class="demo-controls">
        <label>Base (html) font-size
          <input type="range" id="demo-base" min="12" max="24" value="16"> <span id="demo-base-val">16px</span>
        </label>
      </div>
      <div class="demo-output" id="demo-units-out" style="padding:1rem">
        <div class="unit-bar" style="font-size:16px"><span class="ub-label">16px</span><span class="ub-bar" style="width:16px"></span></div>
        <div class="unit-bar" style="font-size:1rem"><span class="ub-label">1rem</span><span class="ub-bar" style="width:1rem"></span></div>
        <div class="unit-bar" style="font-size:1.5rem"><span class="ub-label">1.5rem</span><span class="ub-bar" style="width:1.5rem"></span></div>
        <div class="unit-bar" style="font-size:2em"><span class="ub-label">2em</span><span class="ub-bar" style="width:2em"></span></div>
      </div>
      <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.5rem">rem is relative to the root; em is relative to the parent. Prefer rem for scalable typography.</p>
    </div>`;
  },

  jsDomDemo() {
    return `
    <div class="demo-box" data-demo="dom">
      <div class="demo-controls">
        <button type="button" class="btn btn-primary" id="demo-dom-text" style="padding:0.4rem 0.9rem;font-size:0.85rem">Change text</button>
        <button type="button" class="btn" id="demo-dom-bg" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:#F1F5F9;border:1px solid var(--border)">Change background</button>
        <button type="button" class="btn" id="demo-dom-reset" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:#F1F5F9;border:1px solid var(--border)">Reset</button>
      </div>
      <div class="demo-output" id="demo-dom-out" style="padding:1.5rem;text-align:center;background:#F8FAFC;border-radius:8px;transition:background 0.3s">
        <h3 id="demo-dom-heading" style="margin:0 0 0.5rem">Original heading</h3>
        <p style="margin:0;color:var(--text-muted)">Click the buttons — JavaScript changes this live via the DOM.</p>
      </div>
      <pre class="demo-code">document.getElementById("heading").textContent = "Changed!";
document.body.style.backgroundColor = "#DBEAFE";</pre>
    </div>`;
  },

  whitespaceDemo() {
    return `
    <div class="demo-box">
      <div class="viz-row">
        <div class="viz-col">
          <h4>Source (with extra spaces)</h4>
          <pre class="demo-code" style="text-align:left">&lt;p&gt;Hello     World
  from
     HTML&lt;/p&gt;</pre>
        </div>
        <div class="viz-col">
          <h4>Browser result</h4>
          <div class="demo-output" style="padding:1rem">
            <p style="margin:0">Hello     World
  from
     HTML</p>
          </div>
          <p style="font-size:0.8rem;color:var(--text-muted);margin-top:0.5rem">Whitespace collapses to a single space. Use &lt;br&gt; or &lt;pre&gt; when you need exact breaks.</p>
        </div>
      </div>
    </div>`;
  }
};

/* Wire up interactive demos after they are injected into the DOM */
window.initVisualDemos = function (root) {
  root = root || document;

  // Colour / opacity
  const colorIn = root.querySelector('#demo-color');
  const opIn = root.querySelector('#demo-opacity');
  if (colorIn && opIn) {
    const update = () => {
      const c = colorIn.value;
      const o = opIn.value / 100;
      const out = root.querySelector('#demo-color-out');
      const code = root.querySelector('#demo-color-code');
      const val = root.querySelector('#demo-op-val');
      if (out) { out.style.color = c; out.style.opacity = o; }
      if (val) val.textContent = opIn.value + '%';
      if (code) code.textContent = `color: ${c};\nopacity: ${o};`;
    };
    colorIn.addEventListener('input', update);
    opIn.addEventListener('input', update);
  }

  // Font playground
  const ff = root.querySelector('#demo-ff');
  const fs = root.querySelector('#demo-fs');
  const fw = root.querySelector('#demo-fw');
  const fst = root.querySelector('#demo-fst');
  if (ff && fs) {
    const update = () => {
      const out = root.querySelector('#demo-font-out');
      const code = root.querySelector('#demo-font-code');
      const val = root.querySelector('#demo-fs-val');
      if (out) {
        out.style.fontFamily = ff.value;
        out.style.fontSize = fs.value + 'px';
        out.style.fontWeight = fw?.value || '700';
        out.style.fontStyle = fst?.value || 'normal';
      }
      if (val) val.textContent = fs.value + 'px';
      if (code) code.textContent = `font-family: ${ff.value};\nfont-size: ${fs.value}px;\nfont-weight: ${fw?.value || 700};\nfont-style: ${fst?.value || 'normal'};`;
    };
    [ff, fs, fw, fst].forEach(el => el?.addEventListener('input', update));
    [ff, fw, fst].forEach(el => el?.addEventListener('change', update));
  }

  // Text props
  const ta = root.querySelector('#demo-ta');
  const tt = root.querySelector('#demo-tt');
  const td = root.querySelector('#demo-td');
  const ls = root.querySelector('#demo-ls');
  if (ta) {
    const update = () => {
      const out = root.querySelector('#demo-text-out');
      const code = root.querySelector('#demo-text-code');
      const val = root.querySelector('#demo-ls-val');
      if (out) {
        out.style.textAlign = ta.value;
        out.style.textTransform = tt?.value || 'none';
        out.style.textDecoration = td?.value || 'none';
        out.style.letterSpacing = (ls?.value || 0) + 'px';
      }
      if (val) val.textContent = (ls?.value || 0) + 'px';
      if (code) code.textContent = `text-align: ${ta.value};\ntext-transform: ${tt?.value || 'none'};\ntext-decoration: ${td?.value || 'none'};\nletter-spacing: ${ls?.value || 0}px;`;
    };
    [ta, tt, td, ls].forEach(el => {
      el?.addEventListener('input', update);
      el?.addEventListener('change', update);
    });
  }

  // Selector playground
  const sel = root.querySelector('#demo-sel');
  const selColor = root.querySelector('#demo-sel-color');
  if (sel) {
    const update = () => {
      const out = root.querySelector('#demo-sel-out');
      const code = root.querySelector('#demo-sel-code');
      if (!out) return;
      out.querySelectorAll('p').forEach(p => { p.style.color = ''; p.style.fontWeight = ''; });
      const color = selColor?.value || '#DC2626';
      try {
        out.querySelectorAll(sel.value).forEach(el => {
          el.style.color = color;
          el.style.fontWeight = '700';
        });
      } catch (_) {}
      if (code) code.textContent = `${sel.value} { color: ${color}; }`;
    };
    sel.addEventListener('change', update);
    selColor?.addEventListener('input', update);
    update();
  }

  // Units
  const base = root.querySelector('#demo-base');
  if (base) {
    base.addEventListener('input', () => {
      const out = root.querySelector('#demo-units-out');
      const val = root.querySelector('#demo-base-val');
      if (val) val.textContent = base.value + 'px';
      if (out) out.style.fontSize = base.value + 'px';
    });
  }

  // DOM demo
  const domText = root.querySelector('#demo-dom-text');
  const domBg = root.querySelector('#demo-dom-bg');
  const domReset = root.querySelector('#demo-dom-reset');
  if (domText) {
    domText.addEventListener('click', () => {
      const h = root.querySelector('#demo-dom-heading');
      if (h) h.textContent = 'Changed by JavaScript!';
    });
    domBg?.addEventListener('click', () => {
      const o = root.querySelector('#demo-dom-out');
      if (o) o.style.background = '#DBEAFE';
    });
    domReset?.addEventListener('click', () => {
      const h = root.querySelector('#demo-dom-heading');
      const o = root.querySelector('#demo-dom-out');
      if (h) h.textContent = 'Original heading';
      if (o) o.style.background = '#F8FAFC';
    });
  }
};
