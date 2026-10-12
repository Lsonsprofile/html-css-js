/* Full curriculum content for Programming with HTML, CSS and JavaScript
   Source: Scheme of Work 55320A + expanded teaching material */

window.COURSE_CONTENT = {
  lessons: {
    /* ========== MODULE 1 ========== */
    "m1-l1": {
      id: "m1-l1", moduleId: "m1", title: "HTML is Part of a Team",
      objectives: ["Explain the roles of HTML, CSS and JavaScript", "Describe how the three technologies work together"],
      sections: [
{
        type: "image",
        title: "The three front-end languages",
        src: "/images/web-team.svg",
        alt: "HTML structure, CSS appearance, JavaScript behaviour",
        caption: "HTML = structure · CSS = appearance · JavaScript = behaviour"
      },
      {
        type: "video",
        title: "Watch & learn",
        content: "Short free videos that reinforce this lesson (opens in a new tab).",
        videos: [
          { title: "How the Web Works — MDN", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works", source: "MDN Web Docs" },
          { title: "HTML, CSS, JavaScript explained (5 min)", url: "https://www.youtube.com/watch?v=gT0Lh1eYk78", source: "YouTube" }
        ]
      },
      {
        type: "download",
        title: "Downloads for this course",
        content: "Starter files and cheatsheets you can keep offline.",
        files: [
          { name: "Starter index.html", href: "/resources/starter-index.html", desc: "Valid page skeleton from Module 2" },
          { name: "Project folder structure", href: "/resources/project-structure.txt", desc: "Recommended my-first-site layout" },
          { name: "HTML cheatsheet", href: "/resources/html-cheatsheet.md", desc: "Quick reference for all modules" },
          { name: "CSS cheatsheet", href: "/resources/css-cheatsheet.md", desc: "Selectors, box, fonts, colour, text" }
        ]
      },
        { type: "intro", title: "The web development team", content: "Every website you have ever used is a conversation between a browser and a server. HTML, CSS and JavaScript are the three front-end languages that work as a team: HTML gives structure and meaning, CSS controls appearance, and JavaScript makes the page respond to people. A useful house analogy: HTML is the walls and rooms, CSS is the paint and furniture, JavaScript is the wiring and switches. Open a real site and switch styles and scripts off in DevTools to prove it." },
        { type: "explanation", title: "Division of responsibilities", content: "HTML answers “What is this content?” — headings, paragraphs, images, links, lists. CSS answers “How should it look?” — colours, fonts, spacing, layout. JavaScript answers “What should happen when the user interacts?” — clicks, form validation, dynamic updates." },
        { type: "code", title: "A tiny example of the team working", language: "html",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Team Example</title>
  <style>
    h1 { color: #2563EB; font-family: system-ui; }
    button { background: #10B981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }
  </style>
</head>
<body>
  <h1 id="greeting">Hello!</h1>
  <button onclick="document.getElementById('greeting').textContent='You clicked me!'">
    Click me
  </button>
</body>
</html>`,
          explanation: ["HTML supplies the heading and button.", "CSS (inside <style>) colours the heading and styles the button.", "JavaScript (the onclick attribute) changes the heading text when the button is clicked."] },
        { type: "summary", points: ["HTML = structure", "CSS = appearance", "JavaScript = behaviour", "Real sites use all three together."] }
      ],
      playground: { html: `<h1 id="greeting">Hello!</h1>\n<button onclick="document.getElementById('greeting').textContent='You clicked me!'">Click me</button>`, css: `h1{color:#2563EB;font-family:system-ui}button{background:#10B981;color:#fff;border:none;padding:.5rem 1rem;border-radius:6px;cursor:pointer}`, js: `` }
    },
    "m1-l2": {
      id: "m1-l2", moduleId: "m1", title: "Client-side Programming",
      objectives: ["Define client-side programming", "List common client-side languages and technologies"],
      sections: [
        { type: "intro", title: "What runs in the browser?", content: "Client-side programming means code that executes on the user’s device — usually inside the web browser. The browser downloads HTML, CSS and JavaScript and then renders and runs them." },
        { type: "explanation", title: "Why client-side matters", content: "Because the code runs on the user’s machine, the page can respond instantly to clicks, scrolls and form input without waiting for a round-trip to a server. This is how interactive menus, live form validation and single-page applications feel fast." },
        { type: "summary", points: ["Client-side = code that runs in the browser", "HTML, CSS and JavaScript are the core client-side technologies", "Client-side code improves responsiveness and reduces server load for UI work"] }
      ]
    },
    "m1-l3": {
      id: "m1-l3", moduleId: "m1", title: "Server-side Programming",
      objectives: ["Define server-side programming", "Contrast server-side rendering with sending data to the client"],
      sections: [
        { type: "intro", title: "What runs on the server?", content: "Server-side programming runs on a computer that is always online and waiting for requests. When a browser asks for a page or data, the server can look things up in a database, apply business rules, and send a response back." },
        { type: "explanation", title: "HTML vs data responses", content: "A classic approach is server-side rendering: the server builds a finished HTML page and sends it. A web-service approach sends data (usually JSON) and lets the client decide how to display it. Both are useful; this course focuses on the client-side languages while the companion web-services course explores the server side." },
        { type: "summary", points: ["Server-side code runs on the host computer", "It can access databases and keep secrets safe", "It can send complete HTML or just data for the client to render"] }
      ]
    },
    "m1-l4": {
      id: "m1-l4", moduleId: "m1", title: "Web Development Technologies",
      objectives: ["Name the main technologies used in modern web development", "Understand where HTML, CSS and JavaScript fit"],
      sections: [
        { type: "intro", title: "The landscape", content: "Web development uses many tools. At the foundation sit HTML, CSS and JavaScript. Around them live version control (Git), package managers (npm), frameworks, build tools and hosting platforms." },
        { type: "explanation", title: "Core stack for this course", content: "We will stay close to the standards: plain HTML5, modern CSS and vanilla JavaScript. Once you understand these, frameworks become easier to learn because they are built on the same foundations." },
        { type: "summary", points: ["HTML, CSS, JS are the universal foundation", "Browsers implement the standards", "Master the foundations before specialising"] }
      ]
    },

    /* ========== MODULE 2 ========== */
    "m2-l1": {
      id: "m2-l1", moduleId: "m2", title: "Getting Started with a Simple HTML Document",
      objectives: ["Create a minimal valid HTML document", "Understand DOCTYPE, html, head and body", "Open the file in a browser"],
      sections: [
        { type: "intro", title: "What is an HTML document?", content: "HTML (HyperText Markup Language) is the standard language for creating web pages. An HTML document is a text file containing tags that the browser interprets to build the visual page." },
        { type: "explanation", title: "The smallest useful page", content: "Every modern HTML page starts with a DOCTYPE and contains an <html> element that wraps a <head> and a <body>. The head holds metadata; the body holds visible content." },
        { type: "code", title: "Working example", language: "html",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first HTML document.</p>
</body>
</html>`,
          explanation: ["<!DOCTYPE html> puts the browser into standards mode (HTML5).", "<html lang=\"en\"> is the root; lang helps accessibility and search engines.", "<head> contains information about the document.", "<meta charset=\"UTF-8\"> ensures characters display correctly.", "<title> appears in the browser tab.", "<body> holds everything the user sees."] },
        { type: "visual", title: "Document structure", diagram: "skeleton" },
        { type: "mistakes", title: "Common mistakes", items: [
          { wrong: "Forgetting the DOCTYPE", why: "Browser may use quirks mode and layout can break.", fix: "Always start with <!DOCTYPE html>" },
          { wrong: "Visible content inside <head>", why: "Head content is not rendered as page body.", fix: "Move paragraphs and headings into <body>" }
        ]},
        { type: "practice", title: "Guided practice", steps: ["Create index.html", "Type the skeleton above", "Change the title to your name", "Add a second paragraph", "Open the file in a browser"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "Which element contains the visible content?", options: ["<head>", "<body>", "<html>", "<meta>"], answer: 1, explain: "The <body> holds everything the user sees." },
          { q: "What does <!DOCTYPE html> do?", options: ["Adds a title", "Tells the browser to use HTML5 standards mode", "Creates a comment", "Links CSS"], answer: 1, explain: "It forces standards mode." }
        ]},
        { type: "summary", points: ["HTML documents are text files with tags", "Minimal structure: DOCTYPE → html → head + body", "Always include charset and a meaningful title"] }
      ],
      playground: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>Edit this text and click Run.</p>\n</body>\n</html>`, css: "", js: "" }
    },
    "m2-l2": {
      id: "m2-l2", moduleId: "m2", title: "HTML Elements, Attributes, and Comments",
      objectives: ["Identify opening tags, closing tags and content", "Use attributes correctly", "Write HTML comments"],
      sections: [
        { type: "intro", title: "The anatomy of an element", content: "Most HTML elements have an opening tag, optional attributes, content, and a closing tag. Some elements (void elements) have no content and no closing tag." },
        { type: "visual", title: "Parts of an element", diagram: "elementExplorer", content: "Every typical element has three parts: opening tag, content, and closing tag." },
        { type: "code", title: "Element breakdown", language: "html",
          code: `<!-- This is a comment -->
<p class="lead" id="intro">Hello, <strong>friend</strong>!</p>
<img src="photo.jpg" alt="A cat">`,
          explanation: ["<!-- ... --> is a comment; the browser ignores it.", "<p> is a paragraph element; class and id are attributes.", "<strong> is nested inside the paragraph.", "<img> is a void element — no closing tag."] },
        { type: "explanation", title: "Attributes", content: "Attributes give extra information. They appear in the opening tag as name=\"value\". Common ones: id, class, href, src, alt, lang, title." },
        { type: "summary", points: ["Opening tag + content + closing tag = element", "Attributes live in the opening tag", "Comments help humans; browsers ignore them", "Void elements never have closing tags"] }
      ],
      playground: { html: `<p class="lead">Edit the <strong>attributes</strong> and content.</p>\n<img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80" alt="A kitten">`, css: `.lead{font-size:1.2rem;color:#2563EB}`, js: "" }
    },
    "m2-l3": {
      id: "m2-l3", moduleId: "m2", title: "The HTML Skeleton",
      objectives: ["List the required parts of a valid HTML5 document", "Explain the purpose of each major section"],
      sections: [
{
        type: "image",
        title: "HTML document skeleton",
        src: "/images/html-skeleton.svg",
        alt: "DOCTYPE, html, head and body structure diagram",
        caption: "Every page: DOCTYPE → html → head (metadata) + body (visible content)"
      },
      {
        type: "video",
        title: "Watch & learn",
        videos: [
          { title: "HTML basics — MDN", url: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started", source: "MDN" },
          { title: "HTML Crash Course", url: "https://www.youtube.com/watch?v=UB1O30fR-EE", source: "YouTube · Traversy Media" }
        ]
      },
      {
        type: "download",
        title: "Starter files",
        files: [
          { name: "starter-index.html", href: "/resources/starter-index.html", desc: "Copy this into your project folder" },
          { name: "HTML cheatsheet", href: "/resources/html-cheatsheet.md", desc: "Tags and skeleton reference" }
        ]
      },
        { type: "intro", title: "Why a skeleton matters", content: "Browsers are forgiving, but a correct skeleton makes pages more reliable, accessible and future-proof." },
        { type: "visual", title: "The standard skeleton", diagram: "skeleton", content: "Colour-coded map of a complete HTML5 document." },
        { type: "summary", points: ["DOCTYPE, html, head, body are required", "meta charset should be early in head", "title is required for accessibility and SEO"] }
      ]
    },
    "m2-l4": {
      id: "m2-l4", moduleId: "m2", title: "Viewing the Page Source",
      objectives: ["Open the page source in a browser", "Distinguish source from the rendered view"],
      sections: [
        { type: "intro", title: "See what the browser received", content: "Right-click a page and choose “View Page Source” (or press Ctrl+U). You see the exact HTML the server sent. Developer Tools (F12) show the live DOM after JavaScript has run." },
        { type: "summary", points: ["View Source = original HTML", "Elements panel = live DOM after scripts", "Both are essential debugging tools"] }
      ]
    },
    "m2-l5": {
      id: "m2-l5", moduleId: "m2", title: "Special Characters",
      objectives: ["Use character entities for <, >, & and quotes", "Understand why entities are needed"],
      sections: [
        { type: "intro", title: "When characters mean something special", content: "The characters <, > and & have special meaning in HTML. If you want them to appear as text, you must use character entities (or numeric codes)." },
        { type: "code", title: "Common entities", language: "html",
          code: `<p>Use &lt;p&gt; for paragraphs.</p>
<p>AT&amp;T and &quot;quotes&quot; work too.</p>
<p>Copyright &copy; 2026</p>`,
          explanation: ["&lt; → <", "&gt; → >", "&amp; → &", "&quot; → \"", "&copy; → ©"] },
        { type: "summary", points: ["Always escape <, > and & in text", "Named entities are easier to remember than numeric codes"] }
      ],
      playground: { html: `<p>Type &lt;code&gt; tags safely with entities.</p>`, css: "", js: "" }
    },
    "m2-l6": {
      id: "m2-l6", moduleId: "m2", title: "History of HTML",
      objectives: ["Outline the major versions of HTML", "Recognise why HTML5 is the current standard"],
      sections: [
        { type: "intro", title: "A short timeline", content: "HTML began in 1991 with Tim Berners-Lee. HTML 4.01 (1999) was long-lived. XHTML tried stricter XML rules. HTML5 (2014, living standard since) added semantic elements, audio/video, canvas and a clearer parsing model. We write HTML5 today." },
        { type: "summary", points: ["HTML5 is the current standard", "Older DOCTYPEs are no longer needed", "Semantic elements (<header>, <nav>, <article>…) arrived with HTML5"] }
      ]
    },
    "m2-l7": {
      id: "m2-l7", moduleId: "m2", title: "The lang Attribute",
      objectives: ["Add the lang attribute to the html element", "Explain why language declaration matters"],
      sections: [
        { type: "intro", title: "Tell the browser the language", content: "The lang attribute on <html> declares the primary language of the page. Screen readers use it for pronunciation; search engines use it for relevance; browsers use it for hyphenation and fonts." },
        { type: "code", title: "Example", language: "html", code: `<html lang="en">\n<!-- or lang="es", lang="fr", lang="sw" … -->`, explanation: ["Use a valid BCP 47 language tag such as en, en-GB, fr, sw."] },
        { type: "summary", points: ["Always set lang on the root html element", "It improves accessibility and SEO"] }
      ]
    },
    "m2-ex1": {
      id: "m2-ex1", moduleId: "m2", title: "Exercise: A Simple HTML Document", type: "exercise",
      objectives: ["Build a complete HTML page from scratch", "Include proper skeleton, title and content"],
      sections: [
        { type: "intro", title: "Your first independent page", content: "Create a page about yourself or a hobby. Use the full HTML skeleton, a meaningful title, at least one heading and two paragraphs. Open it in the browser and view the source." },
        { type: "practice", title: "Steps", steps: ["Create about-me.html", "Add DOCTYPE, html lang, head with charset and title", "Add an h1 with your name", "Add two paragraphs of text", "Validate by viewing source and checking the browser title bar"] },
        { type: "summary", points: ["You can now create a valid HTML document independently"] }
      ],
      playground: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>About Me</title>\n</head>\n<body>\n  <!-- Your content here -->\n</body>\n</html>`, css: "", js: "" }
    },

    /* ========== MODULE 3 ========== */
    "m3-l1": {
      id: "m3-l1", moduleId: "m3", title: "Paragraphs",
      objectives: ["Create paragraphs with the p element", "Understand how browsers treat whitespace"],
      sections: [
        { type: "intro", title: "The paragraph element", content: "The <p> element marks a paragraph of text. Browsers add vertical space before and after each paragraph. Multiple spaces and line breaks inside the source collapse into a single space." },
        { type: "code", title: "Example", language: "html",
          code: `<p>This is the first paragraph.</p>
<p>This is the second.
It still appears as one paragraph
because whitespace collapses.</p>`,
          explanation: ["Each <p>…</p> becomes a separate block.", "Line breaks inside the tag do not create new paragraphs."] },
        { type: "visual", title: "Whitespace collapse", diagram: "whitespaceDemo", content: "Extra spaces and line breaks in the source become a single space in the browser." },
        { type: "summary", points: ["Use <p> for each logical paragraph", "Whitespace collapses; use <br> only for rare forced breaks"] }
      ],
      playground: { html: `<p>Edit this paragraph.</p>\n<p>Add another one below.</p>`, css: "p{margin-bottom:1em;line-height:1.5}", js: "" }
    },
    "m3-l2": {
      id: "m3-l2", moduleId: "m3", title: "Heading Levels",
      objectives: ["Use h1–h6 correctly", "Understand heading hierarchy for accessibility"],
      sections: [
        { type: "intro", title: "Six levels of headings", content: "HTML provides six heading levels: <h1> (most important) through <h6> (least important). They create a document outline that screen readers and search engines rely on." },
        { type: "visual", title: "Heading hierarchy", diagram: "headingHierarchy", content: "Each level nests under the one above — like chapters and sections in a book." },
        { type: "code", title: "Hierarchy example", language: "html",
          code: `<h1>Site Title</h1>
  <h2>Chapter One</h2>
    <h3>Section A</h3>
    <h3>Section B</h3>
  <h2>Chapter Two</h2>`,
          explanation: ["Do not skip levels for visual size — use CSS for appearance.", "One h1 per page is a common best practice."] },
        { type: "summary", points: ["h1–h6 create structure, not just size", "Never skip levels for styling reasons", "Screen readers announce the level"] }
      ],
      playground: { html: `<h1>Main Title</h1>\n<h2>Subtitle</h2>\n<h3>Section</h3>\n<p>Content under the section.</p>`, css: "h1{color:#1E40AF}h2{color:#3B82F6}h3{color:#60A5FA}", js: "" }
    },
    "m3-l3": {
      id: "m3-l3", moduleId: "m3", title: "Breaks and Horizontal Rules",
      objectives: ["Insert line breaks with br", "Add thematic breaks with hr"],
      sections: [
        { type: "intro", title: "Forced breaks", content: "<br> creates a line break inside a block. <hr> creates a thematic break (a horizontal rule) between sections. Prefer new paragraphs over multiple <br> tags." },
        { type: "code", title: "Example", language: "html",
          code: `<p>Line one<br>Line two</p>
<hr>
<p>New section after the rule.</p>`,
          explanation: ["<br> is a void element.", "<hr> is also void and indicates a topic change."] },
        { type: "summary", points: ["br = line break inside content", "hr = thematic separation", "Avoid stacking many br tags"] }
      ]
    },
    "m3-l4": {
      id: "m3-l4", moduleId: "m3", title: "The div Tag",
      objectives: ["Use div as a generic block container", "Know when semantic elements are better"],
      sections: [
        { type: "intro", title: "A generic box", content: "The <div> element is a block-level container with no semantic meaning. Use it when no better semantic element (section, article, nav…) fits, usually as a styling or scripting hook." },
        { type: "summary", points: ["div is block-level and meaningless by itself", "Prefer semantic elements when they fit", "div is still essential for layout wrappers"] }
      ]
    },
    "m3-l5": {
      id: "m3-l5", moduleId: "m3", title: "Quoted Text",
      objectives: ["Mark short quotations with q", "Mark long quotations with blockquote"],
      sections: [
        { type: "code", title: "Quotations", language: "html",
          code: `<p>She said <q>Hello</q> and left.</p>
<blockquote cite="https://example.com">
  <p>Long quotation goes here.</p>
</blockquote>`,
          explanation: ["<q> adds quotation marks automatically in most browsers.", "<blockquote> is a block and usually indented."] },
        { type: "summary", points: ["q for short inline quotes", "blockquote for longer extracts"] }
      ]
    },
    "m3-l6": {
      id: "m3-l6", moduleId: "m3", title: "Preformatted Text",
      objectives: ["Preserve whitespace with pre", "Display code samples correctly"],
      sections: [
        { type: "intro", title: "Keep the spaces", content: "The <pre> element preserves spaces and line breaks exactly as written. It is ideal for code samples and ASCII art." },
        { type: "code", title: "Example", language: "html",
          code: `<pre>
function hello() {
  console.log("Hi");
}
</pre>`,
          explanation: ["Everything inside pre is shown with a monospace font and exact spacing."] },
        { type: "summary", points: ["pre keeps whitespace", "Often combined with code for semantics"] }
      ]
    },
    "m3-l7": {
      id: "m3-l7", moduleId: "m3", title: "Inline Semantic Elements",
      objectives: ["Use strong, em, mark, code, small, time and others", "Understand the difference between semantic and presentational tags"],
      sections: [
        { type: "intro", title: "Meaning, not just style", content: "Inline semantic elements describe the meaning of a phrase. Browsers and assistive technologies can act on that meaning. Prefer them over purely presentational tags." },
        { type: "code", title: "Useful inline elements", language: "html",
          code: `<p>
  <strong>Important</strong> warning.
  <em>Emphasised</em> phrase.
  <mark>Highlighted</mark> text.
  Press <kbd>Ctrl</kbd>+<kbd>S</kbd>.
  The value is <code>null</code>.
  <small>Fine print.</small>
</p>`,
          explanation: ["strong = strong importance", "em = stress emphasis", "mark = relevance highlight", "kbd = keyboard input", "code = computer code", "small = side comments"] },
        { type: "summary", points: ["Choose tags for meaning, style with CSS", "Semantic inline tags improve accessibility"] }
      ],
      playground: { html: `<p>This is <strong>strong</strong>, <em>emphasised</em>, and <mark>marked</mark>.</p>`, css: "mark{background:#FDE68A}", js: "" }
    },
    "m3-ex1": {
      id: "m3-ex1", moduleId: "m3", title: "Exercise: Paragraphs, Headings, and Text", type: "exercise",
      objectives: ["Build a short article with proper headings and paragraphs"],
      sections: [
        { type: "practice", title: "Task", steps: ["Create a page with one h1, two h2s and several paragraphs", "Add an hr between major sections", "Use strong and em where appropriate"] }
      ],
      playground: { html: `<h1>My Article</h1>\n<p>Introduction paragraph.</p>\n<h2>First section</h2>\n<p>Content…</p>`, css: "", js: "" }
    },
    "m3-ex2": {
      id: "m3-ex2", moduleId: "m3", title: "Exercise: Adding Inline Elements", type: "exercise",
      objectives: ["Apply inline semantic elements correctly"],
      sections: [
        { type: "practice", title: "Task", steps: ["Take a paragraph of text", "Mark important words with strong", "Mark emphasised phrases with em", "Add a keyboard shortcut with kbd", "Add a code fragment with code"] }
      ]
    },

    /* ========== MODULE 4 ========== */
    "m4-l1": {
      id: "m4-l1", moduleId: "m4", title: "Links Introduction",
      objectives: ["Explain the purpose of hyperlinks", "Recognise the a element"],
      sections: [
        { type: "intro", title: "The hyper in hypertext", content: "Links are what make the web a web. The <a> (anchor) element creates a hyperlink to another page, a file, an email address or a location on the same page." }
      ]
    },
    "m4-l2": {
      id: "m4-l2", moduleId: "m4", title: "Text Links",
      objectives: ["Create a text link with href", "Choose meaningful link text"],
      sections: [
        { type: "visual", title: "Anatomy of a link", diagram: "linkAnatomy", content: "The <a> tag, href attribute, and optional target work together." },
        { type: "code", title: "Basic link", language: "html",
          code: `<a href="https://example.com">Visit Example</a>
<a href="about.html">About us</a>`,
          explanation: ["href holds the destination URL or path.", "Link text should describe the destination, not “click here”."] },
        { type: "summary", points: ["a + href = link", "Write descriptive link text"] }
      ],
      playground: { html: `<p><a href="https://developer.mozilla.org">MDN Web Docs</a></p>`, css: "a{color:#2563EB}", js: "" }
    },
    "m4-l3": {
      id: "m4-l3", moduleId: "m4", title: "Absolute vs. Relative Paths",
      objectives: ["Distinguish absolute and relative URLs", "Write correct relative paths"],
      sections: [
        { type: "intro", title: "Two ways to point", content: "An absolute URL includes the protocol and domain (https://…). A relative path is relative to the current file’s location." },
        { type: "visual", title: "Folder map: absolute vs relative", diagram: "absoluteRelative", content: "See how the same file can be reached with a full URL or a short relative path." },
        { type: "code", title: "Examples", language: "html",
          code: `<!-- Absolute -->
<a href="https://example.com/docs/guide.html">Guide</a>

<!-- Relative (same folder) -->
<a href="guide.html">Guide</a>

<!-- Relative (child folder) -->
<a href="docs/guide.html">Guide</a>

<!-- Relative (parent folder) -->
<a href="../index.html">Home</a>`,
          explanation: ["../ moves up one directory.", "Absolute links always work from any page but hard-code the domain."] },
        { type: "summary", points: ["Absolute = full URL", "Relative = path from current file", "Prefer relative for internal site links"] }
      ]
    },
    "m4-l4": {
      id: "m4-l4", moduleId: "m4", title: "Targeting New Tabs",
      objectives: ["Open links in a new tab with target=\"_blank\"", "Add rel=\"noopener\" for security"],
      sections: [
        { type: "code", title: "New tab", language: "html",
          code: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open in new tab
</a>`,
          explanation: ["target=\"_blank\" opens a new browsing context.", "rel=\"noopener\" prevents the new page from accessing window.opener (security)."] },
        { type: "summary", points: ["target=\"_blank\" for new tab", "Always pair with rel=\"noopener\""] }
      ]
    },
    "m4-l5": {
      id: "m4-l5", moduleId: "m4", title: "Email Links",
      objectives: ["Create a mailto: link"],
      sections: [
        { type: "code", title: "mailto", language: "html",
          code: `<a href="mailto:hello@example.com">Email us</a>
<a href="mailto:hello@example.com?subject=Hello">Email with subject</a>`,
          explanation: ["mailto: opens the user’s email client.", "You can pre-fill subject and body with query parameters."] }
      ]
    },
    "m4-l6": {
      id: "m4-l6", moduleId: "m4", title: "The title Attribute",
      objectives: ["Add advisory tooltips with title"],
      sections: [
        { type: "code", title: "Tooltip", language: "html",
          code: `<a href="report.pdf" title="PDF, 2 MB">Download report</a>`,
          explanation: ["title shows a tooltip on hover. Do not rely on it for essential information."] }
      ]
    },
    "m4-l7": {
      id: "m4-l7", moduleId: "m4", title: "Linking to a Specific Location on the Page",
      objectives: ["Create in-page anchors with id and href=\"#id\""],
      sections: [
        { type: "code", title: "Fragment links", language: "html",
          code: `<a href="#section2">Jump to section 2</a>
…
<h2 id="section2">Section 2</h2>`,
          explanation: ["The id on the target becomes the fragment identifier.", "href=\"#section2\" scrolls to that element."] },
        { type: "summary", points: ["id on the target + href=\"#id\" on the link", "Useful for tables of contents"] }
      ],
      playground: { html: `<a href="#bottom">Go to bottom</a>\n<p style="height:400px">Long content…</p>\n<h2 id="bottom">Bottom</h2>\n<a href="#">Back to top</a>`, css: "", js: "" }
    },
    "m4-ex1": {
      id: "m4-ex1", moduleId: "m4", title: "Exercise: Adding Links", type: "exercise",
      objectives: ["Add external, internal, email and fragment links"],
      sections: [
        { type: "practice", title: "Task", steps: ["Create a navigation list with relative links", "Add one external link that opens in a new tab", "Add a mailto link", "Add a “back to top” fragment link"] }
      ]
    },

    /* ========== MODULE 5 ========== */
    "m5-l1": {
      id: "m5-l1", moduleId: "m5", title: "Inserting Images",
      objectives: ["Insert an image with img, src and alt"],
      sections: [
        { type: "code", title: "Basic image", language: "html",
          code: `<img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80" alt="A cat photographed in close-up">`,
          explanation: ["src is the path or URL to the image file.", "alt is required for accessibility — describe the image if it conveys information."] },
        { type: "summary", points: ["img is a void element", "Always supply meaningful alt text", "Decorative images can use alt=\"\""] }
      ],
      playground: { html: `<img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80" alt="A cat photographed in close-up">`, css: "img{max-width:100%;border-radius:8px}", js: "" }
    },
    "m5-l2": {
      id: "m5-l2", moduleId: "m5", title: "Image Links",
      objectives: ["Wrap an image in an anchor to make it clickable"],
      sections: [
        { type: "code", title: "Clickable image", language: "html",
          code: `<a href="https://example.com">
  <img src="logo.png" alt="Example company logo">
</a>`,
          explanation: ["The entire image becomes the hit area for the link."] }
      ]
    },
    "m5-l3": {
      id: "m5-l3", moduleId: "m5", title: "Providing Alternative Text (alt)",
      objectives: ["Write effective alt text", "Know when empty alt is appropriate"],
      sections: [
        { type: "explanation", title: "Writing good alt text", content: "Describe the content and function of the image. If the image is purely decorative, use alt=\"\". If the image is a link, the alt should describe the destination." },
        { type: "summary", points: ["alt is not optional for accessibility", "Empty alt for decorative images", "Describe function for linked images"] }
      ]
    },
    "m5-ex1": {
      id: "m5-ex1", moduleId: "m5", title: "Exercise: Adding Images to the Page", type: "exercise",
      objectives: ["Add images with correct alt text and optional links"],
      sections: [
        { type: "practice", title: "Task", steps: ["Insert three images with descriptive alt text", "Make one of them a link", "Ensure the page still makes sense if images fail to load"] }
      ]
    },

    /* ========== MODULE 6 ========== */
    "m6-l1": {
      id: "m6-l1", moduleId: "m6", title: "Unordered Lists",
      objectives: ["Create bulleted lists with ul and li"],
      sections: [
        { type: "visual", title: "Three kinds of lists", diagram: "listTypes", content: "Compare unordered, ordered and definition lists side by side." },
        { type: "code", title: "Unordered list", language: "html",
          code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
          explanation: ["ul = unordered list", "Each item is an li"] },
        { type: "summary", points: ["Use ul when order does not matter"] }
      ],
      playground: { html: `<ul>\n  <li>First item</li>\n  <li>Second item</li>\n</ul>`, css: "ul{padding-left:1.5rem}", js: "" }
    },
    "m6-l2": {
      id: "m6-l2", moduleId: "m6", title: "Ordered Lists",
      objectives: ["Create numbered lists with ol and li"],
      sections: [
        { type: "code", title: "Ordered list", language: "html",
          code: `<ol>
  <li>Install Node</li>
  <li>Create project</li>
  <li>Write code</li>
</ol>`,
          explanation: ["ol = ordered list", "Type attribute or CSS can change numbering style"] }
      ]
    },
    "m6-l3": {
      id: "m6-l3", moduleId: "m6", title: "Definition Lists",
      objectives: ["Create term–definition pairs with dl, dt, dd"],
      sections: [
        { type: "code", title: "Definition list", language: "html",
          code: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
          explanation: ["dt = term", "dd = definition"] }
      ]
    },
    "m6-ex1": {
      id: "m6-ex1", moduleId: "m6", title: "Exercise: Creating Lists", type: "exercise",
      objectives: ["Build unordered, ordered and definition lists"],
      sections: [
        { type: "practice", title: "Task", steps: ["Create a shopping list (ul)", "Create a numbered recipe (ol)", "Create a glossary of three terms (dl)"] }
      ]
    },

    /* ========== MODULE 7 ========== */
    "m7-l1": {
      id: "m7-l1", moduleId: "m7", title: "Benefits of Cascading Style Sheets",
      objectives: ["Explain why CSS exists", "List the advantages of separating style from structure"],
      sections: [
{
        type: "download",
        title: "CSS downloads",
        files: [
          { name: "CSS cheatsheet", href: "/resources/css-cheatsheet.md", desc: "Selectors, cascade, units, fonts" }
        ]
      },
      {
        type: "video",
        title: "Watch & learn",
        videos: [
          { title: "CSS first steps — MDN", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps", source: "MDN" },
          { title: "CSS Crash Course", url: "https://www.youtube.com/watch?v=yfoY53QXEnI", source: "YouTube · Traversy Media" }
        ]
      },
        { type: "intro", title: "Why CSS?", content: "Before CSS, styling was mixed into HTML with presentational tags and attributes. CSS lets you keep structure and presentation separate, reuse styles across pages, and change the look of an entire site by editing one file." },
        { type: "summary", points: ["Separation of concerns", "Reusability and maintainability", "Consistent design across pages"] }
      ]
    },
    "m7-l2": {
      id: "m7-l2", moduleId: "m7", title: "CSS Rules",
      objectives: ["Write a CSS rule with selector and declarations"],
      sections: [
        { type: "code", title: "Anatomy of a rule", language: "css",
          code: `/* selector { property: value; } */
h1 {
  color: #1E40AF;
  font-size: 2rem;
}`,
          explanation: ["The selector chooses which elements the rule applies to.", "Declarations are property–value pairs ended by semicolons."] }
      ],
      playground: { html: `<h1>Styled Heading</h1>\n<p>A paragraph.</p>`, css: `h1 {\n  color: #1E40AF;\n  font-size: 2rem;\n}`, js: "" }
    },
    "m7-l3": {
      id: "m7-l3", moduleId: "m7", title: "Selectors",
      objectives: ["Use type, class, id and attribute selectors"],
      sections: [
        { type: "code", title: "Common selectors", language: "css",
          code: `p { }           /* type */
.lead { }       /* class */
#hero { }       /* id */
a[target] { }   /* attribute */`,
          explanation: ["Class selectors start with a dot.", "ID selectors start with a hash and should be unique.", "Attribute selectors match presence or value of attributes."] },
        { type: "interactive", title: "Selector playground", demo: "selectorPlayground", content: "Pick a selector and a colour — watch which paragraphs light up." }
      ]
    },
    "m7-l4": {
      id: "m7-l4", moduleId: "m7", title: "Combinators",
      objectives: ["Use descendant, child, adjacent and general sibling combinators"],
      sections: [
        { type: "code", title: "Combinators", language: "css",
          code: `article p { }      /* descendant */
ul > li { }        /* child */
h1 + p { }         /* adjacent sibling */
h1 ~ p { }         /* general sibling */`,
          explanation: ["Space = any descendant", "> = direct child only", "+ = next sibling", "~ = all following siblings"] }
      ]
    },
    "m7-l5": {
      id: "m7-l5", moduleId: "m7", title: "Precedence of Selectors (Cascade)",
      objectives: ["Understand specificity and source order"],
      sections: [
        { type: "explanation", title: "The cascade", content: "When two rules conflict, the browser uses specificity (id > class > type) and then source order. !important overrides everything but should be used sparingly." },
        { type: "visual", title: "Specificity ladder", diagram: "cssCascade", content: "Higher bars beat lower ones. Equal specificity → the rule that appears later wins." },
        { type: "visual", title: "The CSS box model", diagram: "boxModel", content: "Every element is a box: content, padding, border, margin." },
        { type: "summary", points: ["Specificity decides the winner", "Later rules beat earlier rules of equal specificity", "Avoid !important when possible"] }
      ]
    },
    "m7-l6": {
      id: "m7-l6", moduleId: "m7", title: "How Browsers Style Pages",
      objectives: ["Describe the high-level rendering process"],
      sections: [
        { type: "explanation", title: "From HTML to pixels", content: "The browser parses HTML into a DOM tree, parses CSS into a CSSOM, combines them into a render tree, performs layout, and paints pixels to the screen." }
      ]
    },
    "m7-l7": {
      id: "m7-l7", moduleId: "m7", title: "CSS Resets and Normalizers",
      objectives: ["Explain the purpose of a CSS reset or normalize"],
      sections: [
        { type: "explanation", title: "Consistent starting point", content: "Browsers apply default styles that differ slightly. A reset removes most defaults; a normalizer preserves useful defaults while fixing inconsistencies. Many projects start with a small modern reset." }
      ]
    },
    "m7-l8": {
      id: "m7-l8", moduleId: "m7", title: "External, Embedded and Inline Styles",
      objectives: ["Link an external stylesheet", "Write embedded and inline styles", "Know the cascade order among them"],
      sections: [
        { type: "code", title: "Three ways to add CSS", language: "html",
          code: `<!-- External -->
<link rel="stylesheet" href="styles.css">

<!-- Embedded -->
<style>
  p { color: navy; }
</style>

<!-- Inline -->
<p style="color: red;">Hello</p>`,
          explanation: ["External is preferred for maintainability.", "Inline has highest specificity but mixes concerns."] }
      ]
    },
    "m7-l9": {
      id: "m7-l9", moduleId: "m7", title: "div and span",
      objectives: ["Use div for block containers and span for inline hooks"],
      sections: [
        { type: "explanation", title: "Generic containers", content: "div is block-level; span is inline. Both have no semantic meaning and exist mainly as styling or scripting targets." }
      ]
    },
    "m7-l10": {
      id: "m7-l10", moduleId: "m7", title: "Media Types and Viewport",
      objectives: ["Understand the viewport meta tag", "Know that media queries adapt styles"],
      sections: [
        { type: "code", title: "Viewport", language: "html",
          code: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
          explanation: ["Essential for responsive design on mobile devices."] }
      ]
    },
    "m7-l11": {
      id: "m7-l11", moduleId: "m7", title: "Units of Measurement",
      objectives: ["Choose among px, em, rem, %, vh, vw"],
      sections: [
        { type: "explanation", title: "Absolute vs relative", content: "px is absolute. em is relative to the parent font-size; rem is relative to the root font-size. % is relative to the parent. vh/vw are relative to the viewport. Prefer rem for typography and flexible layouts." },
        { type: "interactive", title: "Unit size comparison", demo: "unitComparison", content: "Drag the base font-size and watch rem and em scale." }
      ]
    },
    "m7-l12": {
      id: "m7-l12", moduleId: "m7", title: "Inheritance",
      objectives: ["Predict which properties inherit", "Force inheritance with the inherit keyword"],
      sections: [
        { type: "explanation", title: "What inherits?", content: "Font, colour and line-height inherit by default. Margin, padding and border do not. You can explicitly set a property to inherit." }
      ]
    },
    "m7-ex1": {
      id: "m7-ex1", moduleId: "m7", title: "Exercise: Creating Stylesheets & Styling div/span", type: "exercise",
      objectives: ["Create an external stylesheet and style structural elements"],
      sections: [
        { type: "practice", title: "Task", steps: ["Create styles.css", "Link it from your HTML", "Style headings, paragraphs and a div wrapper", "Add a class and an id selector"] },
        { type: "explanation", title: "CSS transitions and animations", content: "Use transition to animate a change between states, such as a button hover. Use @keyframes when you need multiple animation stages. Keep movement purposeful and respect the prefers-reduced-motion media query so users who request less motion are not forced to see unnecessary animation." },
        { type: "code", title: "Motion example", language: "css", code: ".button { transition: transform 180ms ease; }\n.button:hover { transform: translateY(-3px); }\n@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }", explanation: ["The transition animates a hover change", "@keyframes defines animation stages"] },
        { type: "practice", title: "Motion practice", steps: ["Add a transition to a button", "Use keyframes to animate a small badge", "Test a reduced-motion media query"] }
      ],
      playground: { html: `<div class="card">\n  <h1>Card Title</h1>\n  <p>Some text inside a styled box.</p>\n</div>`, css: `.card {\n  border: 1px solid #E2E8F0;\n  border-radius: 12px;\n  padding: 1.5rem;\n  max-width: 320px;\n  box-shadow: 0 4px 6px rgb(0 0 0 / 0.07);\n}\nh1 { color: #1E40AF; font-size: 1.4rem; }`, js: "" }
    },

    /* ========== MODULE 8 ========== */
    "m8-l1": {
      id: "m8-l1", moduleId: "m8", title: "font-family",
      objectives: ["Set a font stack with font-family"],
      sections: [
        { type: "code", title: "Font stack", language: "css",
          code: `body {
  font-family: "Inter", system-ui, -apple-system, sans-serif;
}`,
          explanation: ["List fonts from most preferred to most generic.", "Always end with a generic family (serif, sans-serif, monospace)."] },
        { type: "interactive", title: "Font playground", demo: "fontPlayground", content: "Change family, size, weight and style — see the result and the CSS live." }
      ],
      playground: { html: `<p class="demo">Change my font family.</p>`, css: `.demo { font-family: Georgia, serif; font-size: 1.25rem; }`, js: "" }
    },
    "m8-l2": {
      id: "m8-l2", moduleId: "m8", title: "@font-face",
      objectives: ["Load a custom font with @font-face"],
      sections: [
        { type: "explanation", title: "Custom fonts", content: "@font-face declares a font name and points to font files. Then you can use that name in font-family. Many projects use Google Fonts or self-hosted WOFF2 files." }
      ]
    },
    "m8-l3": {
      id: "m8-l3", moduleId: "m8", title: "font-size",
      objectives: ["Set font size with absolute and relative units"],
      sections: [
        { type: "code", title: "Sizes", language: "css",
          code: `h1 { font-size: 2rem; }
p  { font-size: 1rem; }
small { font-size: 0.875rem; }` }
      ]
    },
    "m8-l4": {
      id: "m8-l4", moduleId: "m8", title: "font-style, font-variant, font-weight",
      objectives: ["Control italic, small-caps and weight"],
      sections: [
        { type: "code", title: "Style properties", language: "css",
          code: `em { font-style: italic; }
h2 { font-variant: small-caps; }
strong { font-weight: 700; }` }
      ]
    },
    "m8-l5": {
      id: "m8-l5", moduleId: "m8", title: "line-height and font shorthand",
      objectives: ["Set line-height", "Use the font shorthand property"],
      sections: [
        { type: "code", title: "Shorthand", language: "css",
          code: `p {
  font: italic 500 1rem/1.6 "Inter", sans-serif;
}`,
          explanation: ["Order: style variant weight size/line-height family", "size and family are required in the shorthand."] }
      ]
    },
    "m8-ex1": {
      id: "m8-ex1", moduleId: "m8", title: "Exercise: Styling Fonts", type: "exercise",
      objectives: ["Apply a complete typographic scale"],
      sections: [
        { type: "practice", title: "Task", steps: ["Choose a font stack", "Set sizes for h1–h3 and body", "Adjust line-height for readability", "Use weight for hierarchy"] }
      ]
    },

    /* ========== MODULE 9 ========== */
    "m9-l1": {
      id: "m9-l1", moduleId: "m9", title: "About Color and Opacity",
      objectives: ["Understand how colour is applied in CSS"],
      sections: [
        { type: "intro", title: "Colour on the web", content: "CSS can set the colour of text, backgrounds, borders and more. Opacity controls how transparent an element is." }
      ]
    },
    "m9-l2": {
      id: "m9-l2", moduleId: "m9", title: "Color and Opacity Values",
      objectives: ["Use named colours, hex, rgb, hsl and opacity"],
      sections: [
        { type: "code", title: "Colour formats", language: "css",
          code: `color: red;                  /* named */
color: #2563EB;              /* hex */
color: rgb(37, 99, 235);     /* rgb */
color: hsl(221, 83%, 53%);   /* hsl */
opacity: 0.8;                /* 0–1 */` }
      ]
    },
    "m9-l3": {
      id: "m9-l3", moduleId: "m9", title: "The color property",
      objectives: ["Set text colour"],
      sections: [
        { type: "code", title: "Text colour", language: "css",
          code: `p { color: #334155; }
a { color: #2563EB; }` },
        { type: "interactive", title: "Colour & opacity controls", demo: "colorOpacityDemo", content: "Pick a colour and drag opacity — the sample text and CSS update live." }
      ],
      playground: { html: `<p class="sample">Change my colour with the controls or the CSS panel.</p>`, css: `.sample { color: #2563EB; font-size: 1.25rem; }`, js: "" }
    },
    "m9-l4": {
      id: "m9-l4", moduleId: "m9", title: "The opacity property",
      objectives: ["Control element transparency"],
      sections: [
        { type: "explanation", title: "Opacity vs alpha", content: "opacity affects the entire element (including children). rgba()/hsla() affect only the colour channel. Use the latter when you need transparent backgrounds but opaque text." }
      ]
    },
    "m9-ex1": {
      id: "m9-ex1", moduleId: "m9", title: "Exercise: Adding Color and Opacity to Text", type: "exercise",
      objectives: ["Apply colour and opacity to headings and paragraphs"],
      sections: [
        { type: "practice", title: "Task", steps: ["Set a brand colour for headings", "Use a muted colour for secondary text", "Experiment with opacity on a decorative element"] }
      ]
    },

    /* ========== MODULE 10 ========== */
    "m10-l1": {
      id: "m10-l1", moduleId: "m10", title: "letter-spacing & word-spacing",
      objectives: ["Adjust spacing between letters and words"],
      sections: [
        { type: "code", title: "Spacing", language: "css",
          code: `h1 { letter-spacing: 0.05em; }
p  { word-spacing: 0.1em; }` },
        { type: "interactive", title: "Text properties playground", demo: "textPropsDemo", content: "Adjust align, transform, decoration and letter-spacing live." }
      ]
    },
    "m10-l2": {
      id: "m10-l2", moduleId: "m10", title: "text-align",
      objectives: ["Align text horizontally"],
      sections: [
        { type: "code", title: "Alignment", language: "css",
          code: `h1 { text-align: center; }
p  { text-align: left; }
.caption { text-align: right; }` }
      ]
    },
    "m10-l3": {
      id: "m10-l3", moduleId: "m10", title: "text-decoration",
      objectives: ["Add or remove underlines, overlines and line-through"],
      sections: [
        { type: "code", title: "Decoration", language: "css",
          code: `a { text-decoration: none; }
.sold-out { text-decoration: line-through; }` }
      ]
    },
    "m10-l4": {
      id: "m10-l4", moduleId: "m10", title: "text-indent & text-shadow",
      objectives: ["Indent the first line", "Add a text shadow"],
      sections: [
        { type: "code", title: "Indent and shadow", language: "css",
          code: `p { text-indent: 2em; }
h1 { text-shadow: 1px 1px 3px rgba(0,0,0,0.3); }` }
      ]
    },
    "m10-l5": {
      id: "m10-l5", moduleId: "m10", title: "text-transform & white-space",
      objectives: ["Change case with text-transform", "Control wrapping with white-space"],
      sections: [
        { type: "code", title: "Transform and space", language: "css",
          code: `.label { text-transform: uppercase; }
.pre   { white-space: pre; }` }
      ]
    },
    "m10-l6": {
      id: "m10-l6", moduleId: "m10", title: "word-break",
      objectives: ["Control how long words break"],
      sections: [
        { type: "code", title: "Breaking words", language: "css",
          code: `.long-url { word-break: break-all; }` }
      ]
    },
    "m10-ex1": {
      id: "m10-ex1", moduleId: "m10", title: "Exercise: Text Properties", type: "exercise",
      objectives: ["Combine text properties to match a design"],
      sections: [
        { type: "practice", title: "Task", steps: ["Create a heading with letter-spacing and text-transform", "Align a caption to the right", "Add a subtle text-shadow", "Remove underlines from links"] }
      ],
      playground: { html: `<h1 class="title">Styled Title</h1>\n<p class="body">Body text with comfortable reading settings.</p>`, css: `.title {\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  text-align: center;\n  text-shadow: 1px 1px 2px rgba(0,0,0,0.15);\n}\n.body {\n  line-height: 1.7;\n  text-align: left;\n}`, js: "" }
    },

    /* ========== MODULE 11 ========== */
    "m11-l1": {
      id: "m11-l1", moduleId: "m11", title: "JavaScript vs. ECMAScript",
      objectives: ["Distinguish JavaScript the language from the ECMAScript standard"],
      sections: [
{
        type: "video",
        title: "Watch & learn",
        videos: [
          { title: "JavaScript first steps — MDN", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps", source: "MDN" },
          { title: "JavaScript DOM tutorial", url: "https://www.youtube.com/watch?v=0ik6X4DJKCc", source: "YouTube · Traversy Media" }
        ]
      },
        { type: "intro", title: "Names and standards", content: "JavaScript is the common name of the language that runs in browsers. ECMAScript is the official standard that defines the language. Modern JavaScript implements successive editions of ECMAScript (ES6 / ES2015 and later)." },
        { type: "summary", points: ["JavaScript ≈ the language you write", "ECMAScript ≈ the standard specification", "Browsers implement the standard"] }
      ]
    },
    "m11-l2": {
      id: "m11-l2", moduleId: "m11", title: "The HTML DOM",
      objectives: ["Explain what the Document Object Model is", "Understand that the DOM is a tree of nodes"],
      sections: [
        { type: "intro", title: "The live document tree", content: "When a browser loads HTML it builds a tree of objects called the Document Object Model (DOM). JavaScript can read and change that tree, and the browser updates the page on the screen." },
        { type: "visual", title: "DOM tree", diagram: "domTree", content: "The browser turns your HTML into a tree of nodes. JavaScript walks and changes this tree." },
        { type: "explanation", title: "Why the DOM matters", content: "document is the entry point. From it you can find elements, change their text, attributes, styles and even add or remove nodes. This is how interactive pages work." },
        { type: "summary", points: ["DOM = object representation of the page", "JavaScript manipulates the DOM", "Changes appear live in the browser"] }
      ]
    },
    "m11-l3": {
      id: "m11-l3", moduleId: "m11", title: "JavaScript Syntax",
      objectives: ["Write basic statements, variables and comments"],
      sections: [
        { type: "code", title: "Core syntax", language: "javascript",
          code: `// comment
let name = "Ada";
const PI = 3.14;
name = "Grace";
console.log(name);`,
          explanation: ["let for values that change", "const for values that stay the same", "Statements end with optional semicolons (style dependent)"] }
      ]
    },
    "m11-l4": {
      id: "m11-l4", moduleId: "m11", title: "Accessing Elements",
      objectives: ["Select elements with getElementById, querySelector and others"],
      sections: [
        { type: "code", title: "Selecting nodes", language: "javascript",
          code: `const title = document.getElementById("main-title");
const firstPara = document.querySelector("p");
const allItems = document.querySelectorAll("li");`,
          explanation: ["getElementById is fast for a unique id", "querySelector accepts any CSS selector", "querySelectorAll returns a NodeList"] },
        { type: "interactive", title: "DOM modification demo", demo: "jsDomDemo", content: "Click the buttons to change text and background via the DOM — no page reload." }
      ],
      playground: { html: `<h1 id="main-title">Original Title</h1>\n<button id="btn">Change title</button>`, css: "", js: `document.getElementById("btn").addEventListener("click", () => {\n  document.getElementById("main-title").textContent = "Title changed!";\n});` }
    },
    "m11-l5": {
      id: "m11-l5", moduleId: "m11", title: "Where Is JavaScript Code Written?",
      objectives: ["Write inline, internal and external JavaScript"],
      sections: [
        { type: "code", title: "Three places", language: "html",
          code: `<!-- Inline -->
<button onclick="alert('Hi')">Click</button>

<!-- Internal -->
<script>
  console.log("Hello from script block");
</script>

<!-- External -->
<script src="app.js"></script>`,
          explanation: ["External files are preferred for anything beyond tiny snippets.", "Place scripts at the end of body or use defer so the DOM is ready."] }
      ]
    },
    "m11-l6": {
      id: "m11-l6", moduleId: "m11", title: "JavaScript Objects, Methods, and Properties",
      objectives: ["Access properties and call methods on objects"],
      sections: [
        { type: "code", title: "Objects in practice", language: "javascript",
          code: `const heading = document.querySelector("h1");
heading.textContent = "New text";   // property
heading.classList.add("highlight"); // method
console.log(heading.id);            // property`,
          explanation: ["Properties hold data", "Methods are functions that belong to an object"] }
      ]
    },
    "m11-ex1": {
      id: "m11-ex1", moduleId: "m11", title: "Exercise: Alerts, Writing, and Changing Background Color", type: "exercise",
      objectives: ["Use alert, document.write (sparingly) and change styles via the DOM"],
      sections: [
        { type: "code", title: "Classic interactions", language: "javascript",
          code: `alert("Welcome!");
// document.write is rarely used in modern apps
document.body.style.backgroundColor = "#DBEAFE";`,
          explanation: ["alert pauses execution and shows a dialog", "Prefer DOM methods over document.write", "style property lets you change CSS from JavaScript"] },
        { type: "practice", title: "Task", steps: ["Show an alert when the page loads", "Add a button that changes the page background colour", "Add another button that changes the text of a heading"] }
      ],
      playground: { html: `<h1 id="title">Hello</h1>\n<button id="bg">Change background</button>\n<button id="txt">Change text</button>`, css: "body{transition:background .3s}", js: `document.getElementById("bg").onclick = () => {\n  document.body.style.backgroundColor = "#DBEAFE";\n};\ndocument.getElementById("txt").onclick = () => {\n  document.getElementById("title").textContent = "You changed me!";\n};` }
    },
    "m12-l1": {
      id: "m12-l1", moduleId: "m12", title: "Events and Data Attributes",
      objectives: ["Respond to user actions with addEventListener", "Explain event objects and preventDefault", "Read custom HTML data-* attributes through dataset"],
      sections: [
        { type: "intro", title: "Pages respond to events", content: "An event is something that happens in the browser, such as a click, typing, form submission, or key press. addEventListener connects an event to a function. HTML data-* attributes let you attach small pieces of information to an element without inventing non-standard attributes." },
        { type: "code", title: "Listen for a click and read dataset", language: "html",
          code: `<button class="choose-topic" data-topic="css">Study CSS</button>
<p id="message">Choose a topic.</p>

<script>
  const button = document.querySelector(".choose-topic");
  const message = document.querySelector("#message");

  button.addEventListener("click", (event) => {
    const topic = event.currentTarget.dataset.topic;
    message.textContent = "You chose: " + topic;
  });
</script>`,
          explanation: ["querySelector finds the button and message", "addEventListener runs the callback when the button is clicked", "data-topic becomes dataset.topic in JavaScript", "textContent displays plain text safely"] },
        { type: "explanation", title: "Default browser actions", content: "A form submission or link click may navigate or reload the page. Inside an event listener, event.preventDefault() cancels that default action when your code needs to handle the interaction itself. Use it only when you intend to replace the normal behavior." },
        { type: "practice", title: "Practice", steps: ["Create two buttons with different data-topic values", "Use one event listener pattern to display the selected topic", "Add a form and prevent its default submission while showing a confirmation message", "Explain the difference between event.target and event.currentTarget"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "How do you read data-topic=\"html\" from an element in JavaScript?", options: ["element.data.topic", "element.dataset.topic", "element.attribute.topic", "element.topic"], answer: 1, explain: "The data-topic attribute is available as element.dataset.topic." },
          { q: "What does preventDefault() do?", options: ["Stops all JavaScript", "Cancels the browser's default action for that event", "Deletes the element", "Removes every event listener"], answer: 1, explain: "It cancels the event's default browser action, such as a form's normal submission." }
        ]},
        { type: "summary", points: ["Events connect user actions to JavaScript", "Use addEventListener for clear, reusable event handling", "Read data-* values through dataset", "Use preventDefault only when replacing default behavior"] }
      ]
    },
    "m12-l2": {
      id: "m12-l2", moduleId: "m12", title: "Functions, Callbacks, and Closures",
      objectives: ["Explain a callback in plain language", "Describe how a closure retains access to outer variables", "Recognise IIFEs and recursion"],
      sections: [
        { type: "intro", title: "Functions can be passed around", content: "A callback is a function passed to another function so it can be called later. Closures happen when a function keeps access to variables from the scope where it was created, even after the outer function has finished. An IIFE runs as soon as it is defined. Recursion is when a function calls itself and must have a stopping condition." },
        { type: "code", title: "Callback and closure examples", language: "javascript",
          code: `function greet(name, callback) {
  callback("Hello, " + name + "!");
}
greet("Ada", (message) => console.log(message));

function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const nextCount = createCounter();
console.log(nextCount()); // 1
console.log(nextCount()); // 2`,
          explanation: ["greet receives a function as its callback argument", "The arrow function is passed in and called by greet", "createCounter returns a function that still has access to count", "Each call changes the same private count variable"] },
        { type: "code", title: "IIFE and recursion", language: "javascript",
          code: `(() => {
  const pageMessage = "This runs immediately";
  console.log(pageMessage);
})();

function countDown(number) {
  if (number <= 0) return; // stopping condition
  console.log(number);
  countDown(number - 1);
}
countDown(3); // 3, 2, 1`,
          explanation: ["The IIFE is invoked immediately after it is defined", "The recursion stopping condition prevents endless calls", "For most everyday tasks, a loop may be simpler than recursion"] },
        { type: "practice", title: "Practice", steps: ["Write a function that accepts another function as a callback", "Create a counter with createCounter() and call it three times", "Trace countDown(3) by writing each call in order", "State the stopping condition before running a recursive function"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "What makes the counter example a closure?", options: ["It uses console.log", "The returned function retains access to count", "It contains an if statement", "It changes HTML"], answer: 1, explain: "The returned inner function retains access to the count variable in the outer function's scope." },
          { q: "What must a recursive function have to avoid continuing forever?", options: ["A CSS class", "A stopping or base condition", "A callback every time", "A global variable"], answer: 1, explain: "A base condition stops further recursive calls." }
        ]},
        { type: "summary", points: ["Callbacks are functions passed to other functions", "Closures retain access to outer-scope variables", "IIFEs execute immediately", "Recursion needs a reliable base condition"] }
      ]
    },
    "m12-l3": {
      id: "m12-l3", moduleId: "m12", title: "Timers and Delayed Actions",
      objectives: ["Choose between setTimeout and setInterval", "Cancel timers with the matching clear method", "Prevent duplicate intervals"],
      sections: [
        { type: "intro", title: "Schedule work in the browser", content: "setTimeout schedules a callback to run once after a delay. setInterval schedules a callback repeatedly. Delays are measured in milliseconds and are not guaranteed to run at an exact time if the browser is busy." },
        { type: "code", title: "One-time delay and repeating timer", language: "javascript",
          code: `const timeoutId = setTimeout(() => {
  console.log("This runs once after about 1 second");
}, 1000);

const intervalId = setInterval(() => {
  console.log("This repeats about every 2 seconds");
}, 2000);

// Stop the timers when they are no longer needed:
clearTimeout(timeoutId);
clearInterval(intervalId);`,
          explanation: ["1000 milliseconds is approximately one second", "setTimeout returns an identifier that clearTimeout can cancel", "setInterval repeats until clearInterval is called", "In a real app, do not cancel a timeout before it is supposed to run unless you intend to"] },
        { type: "code", title: "A safe countdown pattern", language: "javascript",
          code: `let secondsLeft = 5;
let timerId = null;

function startCountdown() {
  if (timerId !== null) return; // prevent duplicate timers

  timerId = setInterval(() => {
    secondsLeft -= 1;
    console.log(secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(timerId);
      timerId = null;
      console.log("Time's up!");
    }
  }, 1000);
}`,
          explanation: ["timerId records whether a timer is already active", "The condition prevents multiple intervals from running at once", "When the countdown ends, the interval is cleared and the identifier is reset"] },
        { type: "practice", title: "Practice", steps: ["Build a 10-second countdown with Start, Pause, and Reset buttons", "Make Start do nothing when the timer is already running", "Clear the interval when time reaches zero", "Add a toast notification that removes itself after three seconds"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "Which timer repeats a callback?", options: ["setTimeout", "setInterval", "clearTimeout", "Date.now"], answer: 1, explain: "setInterval repeats until its interval is cleared." },
          { q: "Why should a countdown prevent duplicate intervals?", options: ["To avoid several timers changing the same state", "To make CSS load faster", "To hide the HTML", "To remove the browser console"], answer: 0, explain: "Multiple active intervals can decrement the same value several times per second." }
        ]},
        { type: "summary", points: ["setTimeout runs once; setInterval repeats", "Use clearTimeout and clearInterval to cancel timers", "Track active timers to prevent duplicate work"] }
      ]
    },
    "m12-l4": {
      id: "m12-l4", moduleId: "m12", title: "HTML Templates and Dynamic Content",
      objectives: ["Explain why the template element is hidden by default", "Clone a template and fill it with data", "Render text safely with textContent"],
      sections: [
        { type: "intro", title: "Separate structure from data", content: "The HTML template element stores markup that is not rendered until JavaScript clones it. This keeps the card's structure in HTML and the data-handling logic in JavaScript, instead of building every HTML element as a string." },
        { type: "code", title: "HTML template", language: "html",
          code: `<ul id="product-list"></ul>

<template id="product-template">
  <li class="product-card">
    <h2 class="product-name"></h2>
    <p class="product-description"></p>
  </li>
</template>`,
          explanation: ["The template content is not displayed automatically", "The empty classed elements are placeholders that JavaScript will fill", "The list is the destination for the generated cards"] },
        { type: "code", title: "Clone, fill, and append", language: "javascript",
          code: `const products = [
  { name: "Blue Backpack", description: "A bag for school" },
  { name: "Sketchbook", description: "A place to draw" }
];

const template = document.querySelector("#product-template");
const list = document.querySelector("#product-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".product-name").textContent = product.name;
  clone.querySelector(".product-description").textContent = product.description;
  list.appendChild(clone);
});`,
          explanation: ["forEach visits each product object", "cloneNode(true) copies the template and all its children", "querySelector finds placeholders inside the copy", "textContent inserts plain text; appendChild places the finished card in the document"] },
        { type: "explanation", title: "Why textContent matters", content: "When displaying user-supplied or API-provided text, prefer textContent over innerHTML. innerHTML parses its input as markup and can create cross-site scripting risks when untrusted strings are inserted without careful sanitisation." },
        { type: "practice", title: "Practice", steps: ["Create a template for a lesson card with a title and summary", "Create an array containing at least three lesson objects", "Clone and fill the template for each object", "Add a new object and confirm a new card appears without copying the HTML manually"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "Which method makes a deep copy of template content?", options: ["cloneNode(true)", "appendChild(false)", "querySelectorAll(true)", "copyHTML()"], answer: 0, explain: "cloneNode(true) clones the node and its descendants." },
          { q: "Which property is the safer default for displaying plain text from an API?", options: ["innerHTML", "textContent", "outerHTML", "document.write"], answer: 1, explain: "textContent treats the value as text instead of parsing it as HTML." }
        ]},
        { type: "summary", points: ["Keep reusable markup in a template element", "Clone the template, fill placeholders, then append it", "Prefer textContent for plain text from users or APIs"] }
      ]
    },
    "m12-l5": {
      id: "m12-l5", moduleId: "m12", title: "Accessible Form Validation",
      objectives: ["Use built-in HTML validation attributes", "Check validity in JavaScript", "Show useful feedback and clear custom errors"],
      sections: [
        { type: "intro", title: "Validate before processing", content: "HTML provides built-in constraints such as required, type=email, minlength, min, max, and pattern. JavaScript can check validity and provide more specific feedback. Validation improves the user experience, but any data sent to a server must also be validated by that server." },
        { type: "code", title: "HTML constraints", language: "html",
          code: `<form id="signup-form">
  <label for="email">Email address</label>
  <input id="email" name="email" type="email" required>
  <label for="quantity">Number of tickets</label>
  <input id="quantity" name="quantity" type="number" min="1" max="10" required>
  <button type="submit">Continue</button>
  <p id="feedback" aria-live="polite"></p>
</form>`,
          explanation: ["required prevents an empty value from passing validation", "type=email checks for a browser-recognised email format", "min and max constrain the number field", "aria-live=polite allows assistive technology to announce feedback"] },
        { type: "code", title: "Check validity and report feedback", language: "javascript",
          code: `const form = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const feedback = document.querySelector("#feedback");

email.addEventListener("input", () => {
  email.setCustomValidity(""); // clear old custom errors
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    feedback.textContent = "Please correct the highlighted fields.";
    return;
  }

  feedback.textContent = "The form is valid and ready to process.";
});`,
          explanation: ["The input event clears any previous custom error", "checkValidity returns true only when constraints pass", "reportValidity asks the browser to show validation feedback", "preventDefault lets this example demonstrate validation without navigating away"] },
        { type: "practice", title: "Practice", steps: ["Add required, email, and number-range constraints to a form", "Display a helpful message when validation fails", "Clear custom validity messages when the user edits the field", "Test empty, invalid, and valid values"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "Which method checks whether a form's controls satisfy their constraints?", options: ["form.checkValidity()", "form.isReady()", "form.validateHTML()", "form.submitNow()"], answer: 0, explain: "checkValidity() returns whether the form's controls satisfy their validation constraints." },
          { q: "Where must validation also happen when data is sent to a server?", options: ["Only in CSS", "On the server", "Only in the browser", "Inside the page title"], answer: 1, explain: "Client-side checks can be bypassed, so the server must validate incoming data too." }
        ]},
        { type: "summary", points: ["Use native HTML constraints first", "Use checkValidity and reportValidity when JavaScript feedback is needed", "Clear custom errors as users edit", "Always validate data on the server as well"] }
      ]
    },
    "m13-l1": {
      id: "m13-l1", moduleId: "m13", title: "Fetch API and Error Handling",
      objectives: ["Request data with fetch", "Check response.ok before using response data", "Handle network and HTTP errors"],
      sections: [
        { type: "intro", title: "Load data without reloading the page", content: "fetch() starts an HTTP request and returns a Promise. The response body must be read, often with response.json(). A failed HTTP status such as 404 does not automatically reject the fetch promise, so check response.ok and handle errors explicitly." },
        { type: "code", title: "Fetch JSON safely", language: "javascript",
          code: `async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Request failed: " + response.status);
    }

    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error("Could not load posts:", error.message);
  }
}

loadPosts();`,
          explanation: ["async allows await inside the function", "await fetch waits for the response object", "response.ok is false for HTTP error statuses", "response.json() asynchronously parses the response body", "catch handles network failures and errors thrown inside try"] },
        { type: "explanation", title: "Avoid unsafe rendering", content: "When API data is displayed, create elements or use a template and assign text with textContent. Do not insert untrusted API values into innerHTML as if they were trusted markup." },
        { type: "practice", title: "Practice", steps: ["Fetch a small public JSON collection", "Check response.ok before parsing the response", "Display three returned items using textContent", "Temporarily use an invalid URL and show a friendly error message in the page"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "Does fetch automatically reject its promise for an HTTP 404 response?", options: ["Yes, always", "No, check response.ok", "Only when using JSON", "Only in Chrome"], answer: 1, explain: "fetch generally resolves with a Response even for HTTP error statuses; check response.ok." },
          { q: "What does response.json() do?", options: ["Changes the URL", "Parses the response body as JSON", "Creates a database", "Retries every request"], answer: 1, explain: "response.json() reads and parses the body as JSON." }
        ]},
        { type: "summary", points: ["fetch returns a Promise", "Check response.ok for HTTP status failures", "Parse JSON with response.json()", "Use try/catch and show useful failure feedback"] }
      ]
    },
    "m13-l2": {
      id: "m13-l2", moduleId: "m13", title: "URLSearchParams and Query Strings",
      objectives: ["Read query parameters from a URL", "Convert parameter strings to appropriate data types", "Handle missing or invalid values"],
      sections: [
        { type: "intro", title: "URLs can carry small pieces of state", content: "A query string begins with ? and contains key-value pairs such as ?topic=css&page=2. URLSearchParams makes it easier to read those values. Values from URLs are strings and should be validated before being used." },
        { type: "code", title: "Read and validate query parameters", language: "javascript",
          code: `// Example URL: /lessons?topic=css&page=2
const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");
const rawPage = params.get("page");
const page = Number(rawPage);

console.log(topic); // "css"
console.log(page);  // 2

if (!Number.isInteger(page) || page < 1) {
  console.log("Use page 1 as the default");
}`,
          explanation: ["window.location.search contains the query string", "URLSearchParams.get returns the value or null if it is missing", "Number converts a numeric string to a number", "Validate converted values before relying on them"] },
        { type: "practice", title: "Practice", steps: ["Open your page with ?name=Sam&page=3 in the URL", "Read both parameters with URLSearchParams", "Convert page to a number and reject zero or negative values", "Create a URLSearchParams object and use toString() to build a query string"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "What type does URLSearchParams.get() return for a present parameter?", options: ["Always a number", "A string", "A DOM element", "A boolean"], answer: 1, explain: "Query parameter values are returned as strings." },
          { q: "What does get() return when a parameter is absent?", options: ["0", "false", "null", "undefined in every case"], answer: 2, explain: "URLSearchParams.get returns null when the requested parameter is not present." }
        ]},
        { type: "summary", points: ["Use URLSearchParams to read query strings", "Values are strings until converted", "Handle missing values and validate numeric input"] }
      ]
    },
    "m13-l3": {
      id: "m13-l3", moduleId: "m13", title: "localStorage and sessionStorage",
      objectives: ["Compare persistent localStorage with tab-scoped sessionStorage", "Save and parse JSON values", "Avoid storing secrets in browser storage"],
      sections: [
        { type: "intro", title: "Store small pieces of browser state", content: "localStorage usually persists across browser restarts for the same origin. sessionStorage is scoped to a browsing tab session and is cleared when that tab's session ends. Both store strings, so objects and arrays must be serialised with JSON.stringify and parsed with JSON.parse." },
        { type: "code", title: "Save and restore a small preference", language: "javascript",
          code: `const settings = { theme: "dark", fontSize: "large" };

// Store an object as a string
localStorage.setItem("site-settings", JSON.stringify(settings));

// Read it back
const saved = localStorage.getItem("site-settings");
const restoredSettings = saved ? JSON.parse(saved) : { theme: "light" };

console.log(restoredSettings.theme);

// Temporary state for this tab
sessionStorage.setItem("active-tab", "practice");`,
          explanation: ["setItem stores a string under a key", "JSON.stringify converts an object to JSON text", "getItem returns the stored string or null", "JSON.parse converts saved JSON text back to an object", "sessionStorage is useful for temporary per-tab state"] },
        { type: "explanation", title: "Storage is not a vault", content: "Do not store passwords, session secrets, payment card data, or other sensitive information in localStorage or sessionStorage. JavaScript running on the page can read these values, so an XSS vulnerability can expose them. Handle missing or malformed stored values in production code." },
        { type: "practice", title: "Practice", steps: ["Save a theme preference and restore it on page load", "Store a list of recently viewed lesson IDs as JSON", "Store a temporary active-tab value in sessionStorage", "Clear the preference and verify the default is restored"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "Which API is designed for tab-session storage?", options: ["sessionStorage", "localStorage only", "document.cookie only", "window.name only"], answer: 0, explain: "sessionStorage is scoped to a page session in a tab." },
          { q: "Should you store a password in localStorage?", options: ["Yes, if JSON.stringify is used", "No, browser storage is not a secure vault", "Yes, if the key is hidden", "Only on mobile"], answer: 1, explain: "Browser storage is accessible to page JavaScript and is not appropriate for secrets." }
        ]},
        { type: "summary", points: ["localStorage persists longer; sessionStorage is temporary per tab session", "Both store strings", "Use JSON.stringify and JSON.parse for objects", "Never treat browser storage as secure storage for secrets"] }
      ]
    },
    "m13-l4": {
      id: "m13-l4", moduleId: "m13", title: "The Window Object and Browser APIs",
      objectives: ["Read viewport size and listen for resize and online/offline events", "Explain the purpose of browser APIs", "Request geolocation only with user permission"],
      sections: [
        { type: "intro", title: "The browser provides built-in tools", content: "The window object represents the browser tab's browsing context. It exposes useful properties such as innerWidth, location, and navigator, as well as events such as resize, online, and offline. Browser APIs add capabilities without requiring a third-party library." },
        { type: "code", title: "React to resize and connection changes", language: "javascript",
          code: `const sizeMessage = document.querySelector("#size-message");

function updateSize() {
  sizeMessage.textContent =
    "Viewport: " + window.innerWidth + " × " + window.innerHeight;
}

updateSize();
window.addEventListener("resize", updateSize);

window.addEventListener("offline", () => {
  console.log("Connection may be unavailable.");
});
window.addEventListener("online", () => {
  console.log("Browser reports that it is online.");
});`,
          explanation: ["innerWidth and innerHeight describe the viewport dimensions", "Call updateSize once so the display is populated immediately", "The resize event fires when the viewport changes", "online/offline events are useful signals, but navigator.onLine does not guarantee that a specific server is reachable"] },
        { type: "code", title: "Request location with permission", language: "javascript",
          code: `const locationMessage = document.querySelector("#location-message");

if (!navigator.geolocation) {
  locationMessage.textContent = "Location is not supported by this browser.";
} else {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      locationMessage.textContent = "Latitude: " + latitude + ", longitude: " + longitude;
    },
    (error) => {
      locationMessage.textContent = "Location unavailable: " + error.message;
    }
  );
}`,
          explanation: ["Check browser support before calling the API", "The browser asks the user for permission", "The success callback receives coordinates", "The error callback handles denial, timeout, or unavailable location", "Geolocation normally requires a secure context such as HTTPS or localhost"] },
        { type: "practice", title: "Practice", steps: ["Build a viewport-size display that updates on resize", "Show a clear offline/online status message", "Add a Find My Location button so location is requested only after the user chooses it", "Test what happens when location permission is denied"] },
        { type: "quiz", title: "Knowledge check", questions: [
          { q: "Which event is useful for detecting viewport size changes?", options: ["resize", "submit", "storage", "loadend only"], answer: 0, explain: "The resize event lets the page respond when the viewport dimensions change." },
          { q: "Should a page assume geolocation is available without asking the user?", options: ["Yes, every time", "No, browser support and user permission matter", "Only when using CSS", "Only when localStorage is empty"], answer: 1, explain: "Geolocation requires support and user permission; the user may deny access." }
        ]},
        { type: "summary", points: ["window exposes viewport, location, and browser events", "Handle resize and online/offline changes thoughtfully", "Request geolocation only when useful and explain why", "Provide a useful fallback for unsupported APIs or denied permission"] }
      ]
    },
  }
};
