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
        { type: "callout", tone: "example", title: "The restaurant analogy", content: "Imagine a restaurant menu on a tablet. HTML is the menu items and buttons; CSS makes the menu clear and attractive; JavaScript responds when you tap “Add to order.” Each part has a different job, but the customer experiences them together." },
        { type: "comparison", title: "The three teammates", columns: [
          { title: "HTML · Structure", intro: "What is on the page?", points: ["Headings and paragraphs", "Links and images", "Buttons, forms and lists"] },
          { title: "CSS · Presentation", intro: "How should it look?", points: ["Colour and typography", "Spacing and page layout", "Responsive styles for different screens"] },
          { title: "JavaScript · Behaviour", intro: "How does it respond?", points: ["React to a button click", "Check a form before it is sent", "Update text or open a menu"] }
        ]},
        { type: "practice", title: "Look for the team on a website", steps: ["Choose a familiar page, such as a school homepage.", "Name one piece of structure, one visual style and one interactive behaviour.", "Imagine turning off CSS: what would still be there?", "Imagine JavaScript is unavailable: which interactions might stop working?", "Explain why a finished page needs the parts to cooperate."] },
        { type: "summary", points: ["HTML = structure", "CSS = appearance", "JavaScript = behaviour", "Real sites use all three together."] }
      ],
      playground: { html: `<h1 id="greeting">Hello!</h1>\n<button onclick="document.getElementById('greeting').textContent='You clicked me!'">Click me</button>`, css: `h1{color:#2563EB;font-family:system-ui}button{background:#10B981;color:#fff;border:none;padding:.5rem 1rem;border-radius:6px;cursor:pointer}`, js: `` }
    },
    "m1-l2": {
      id: "m1-l2", moduleId: "m1", title: "Client-side Programming",
      objectives: ["Define client-side programming", "List common client-side languages and technologies"],
      sections: [
        { type: "intro", title: "The client is closer than you think", content: "The client is the visitor’s device and the software it uses to access a site. Most often, that means a phone or computer running a browser. When you tap a menu and it opens immediately, your browser may be doing that work right on your device." },
        { type: "explanation", title: "What happens on your device?", content: "Client-side programming is code the browser runs after it receives website files. HTML gives the browser the page structure, CSS tells it how to draw the page, and JavaScript can listen for actions and update the page. A local interaction can feel quick because it does not need a request to travel to a server first." },
        { type: "steps", title: "Follow a client-side button click", items: [
          { title: "The page is ready", content: "The browser has loaded a button and a heading into the page." },
          { title: "The visitor clicks", content: "A JavaScript event listener notices the click." },
          { title: "The browser updates the page", content: "The script changes the heading text; the browser redraws that small part of the page." }
        ]},
        { type: "code", title: "A tiny browser interaction", language: "html", code: `<h1 id="message">Ready when you are</h1>\n<button id="hello-button">Say hello</button>\n<script>\n  const button = document.querySelector("#hello-button");\n  button.addEventListener("click", () => {\n    document.querySelector("#message").textContent = "Hello, learner!";\n  });\n</script>`, explanation: ["The browser runs the JavaScript locally.", "The click handler changes the DOM, which is the page represented as objects.", "No server request is needed for this simple greeting."] },
        { type: "comparison", title: "Good jobs for the browser", columns: [
          { title: "A good fit", points: ["Open a menu", "Show or hide a hint", "Give quick feedback as someone fills in a form"] },
          { title: "Not a safe place for secrets", points: ["Do not keep private passwords in the page code", "Do not trust browser-only checks for payments", "Visitors can inspect code sent to their device"] }
        ]},
        { type: "callout", tone: "warning", title: "A friendly security rule", content: "Anything sent to the browser should be treated as visible to the visitor. Client-side validation is helpful feedback, but a server must still check important data before accepting it." },
        { type: "practice", title: "Spot client-side behaviour", steps: ["Open a site and look for a menu, tab, or button that responds without a full page reload.", "Describe what the browser could do locally.", "Decide whether the action also needs private data or a database on a server."] },
        { type: "summary", points: ["Client-side code runs in the browser on the visitor’s device.", "HTML, CSS and JavaScript are core browser technologies.", "Local interactions can be fast and responsive.", "Never rely on browser code alone to protect secrets or approve sensitive actions."] }
      ],
      playground: { html: `<h1 id="message">Ready when you are</h1>\n<button id="hello-button">Say hello</button>`, css: `body { font-family: system-ui, sans-serif; padding: 1rem; }\nbutton { padding: .6rem 1rem; cursor: pointer; }`, js: `document.querySelector("#hello-button").addEventListener("click", () => {\n  document.querySelector("#message").textContent = "Hello, learner!";\n});` }
    },
    "m1-l3": {
      id: "m1-l3", moduleId: "m1", title: "Server-side Programming",
      objectives: ["Define server-side programming", "Contrast server-side rendering with sending data to the client"],
      sections: [
        { type: "intro", title: "The work behind the counter", content: "A server is a computer that waits for requests from browsers. Server-side programming is code that runs there, away from the visitor’s device. It can make decisions, read or update a database, and prepare the response the browser needs." },
        { type: "callout", tone: "example", title: "Think of ordering lunch", content: "You choose a meal from the menu (the browser). The kitchen checks the order, uses ingredients and prepares the food (the server). The waiter brings the result back (the response). You can change how the menu looks on your tablet, but you cannot safely decide what ingredients the kitchen actually has." },
        { type: "steps", title: "A request makes a round trip", items: [
          { title: "A visitor asks", content: "The browser sends a request, such as “show me the latest lesson.”" },
          { title: "The server works", content: "Server-side code checks the request and, if needed, reads trusted data from a database." },
          { title: "The server answers", content: "It sends a response: perhaps a complete HTML page, or data such as JSON." },
          { title: "The browser presents it", content: "The browser displays the returned page or uses the returned data to update the screen." }
        ]},
        { type: "visual", title: "Request and response", diagram: "webRequest", content: "The browser and server take turns: a request goes out, and a response comes back." },
        { type: "comparison", title: "Client-side or server-side?", columns: [
          { title: "Client · browser", points: ["Runs on the visitor’s device", "Handles page display and quick interactions", "Code sent to the browser can be inspected"] },
          { title: "Server · host computer", points: ["Runs on the website’s computer", "Can apply business rules and access a database", "Keeps trusted decisions and private credentials off the page"] }
        ]},
        { type: "explanation", title: "Two common kinds of response", content: "A server can build a complete HTML page before sending it; this is often called server-side rendering. Or it can send data, commonly JSON, and let browser code decide how to display it. Websites may combine both approaches." },
        { type: "practice", title: "Trace a sign-in", steps: ["Write down what the visitor types into a sign-in form.", "Identify what the browser can do, such as checking that the fields are not empty.", "Identify what the server must do, such as checking the account securely.", "Describe one response for a successful sign-in and one for a rejected sign-in."] },
        { type: "callout", tone: "warning", title: "Who gets the final say?", content: "A browser can be modified by its user, so it cannot be the authority for account access, payment approval, or private records. The server must verify those decisions." },
        { type: "summary", points: ["Server-side code runs on the website’s host computer.", "A server can apply trusted rules and work with databases.", "It can return a complete page or data for the browser.", "Sensitive decisions belong on the server, not only in the browser."] }
      ]
    },
    "m1-l4": {
      id: "m1-l4", moduleId: "m1", title: "Web Development Technologies",
      objectives: ["Name the main technologies used in modern web development", "Understand where HTML, CSS and JavaScript fit"],
      sections: [
        { type: "intro", title: "A website is a team of technologies", content: "A website is more than one file. A browser may download HTML, CSS, JavaScript, images, fonts and other resources, then combine them into the page you see. Other tools help developers write, test and deliver those files." },
        { type: "comparison", title: "The main pieces of a website", columns: [
          { title: "In the browser", intro: "What visitors experience", points: ["HTML describes content and structure", "CSS controls appearance and layout", "JavaScript responds to actions", "Images and fonts add media"] },
          { title: "Behind the scenes", intro: "What helps the site work", points: ["A web server sends files and responses", "An API can provide data", "A database can store information", "Git and npm help developers build and manage projects"] }
        ]},
        { type: "explanation", title: "Standards and tools are different things", content: "HTML, CSS and JavaScript are web technologies that browsers understand. A framework or editor is a tool that helps developers work with those technologies. Frameworks can save time, but they do not replace the need to understand the foundations." },
        { type: "terms", title: "A few useful names", items: [
          { term: "Browser", definition: "Software such as Chrome, Edge, Firefox or Safari that requests and displays web pages." },
          { term: "Web server", definition: "A computer and software that receive web requests and send responses." },
          { term: "API", definition: "A defined way for one program to request data or a service from another." },
          { term: "Database", definition: "A system for storing and retrieving organised information." },
          { term: "Git", definition: "A tool that records changes to files so a developer can review or share project history." }
        ]},
        { type: "steps", title: "What happens when you visit a page?", items: [
          { title: "Enter an address", content: "You type a URL, which tells the browser where to go." },
          { title: "Request resources", content: "The browser asks the website's server for the page and its files." },
          { title: "Receive files", content: "The server returns HTML and may also return CSS, JavaScript, images, and data." },
          { title: "Build the view", content: "The browser reads the files, applies styles, runs scripts, and displays the result." }
        ]},
        { type: "practice", title: "Technology detective", steps: ["Pick a website you use often.", "List two things you can see, such as a heading and an image.", "List one action, such as searching or opening a menu.", "Guess which technologies describe, style and operate those parts.", "Explain what extra work might happen on a server."] },
        { type: "callout", tone: "tip", title: "A good learning order", content: "Learn the browser foundations first: HTML for meaning, CSS for presentation and JavaScript for interaction. Once those feel familiar, tools and frameworks make much more sense." },
        { type: "summary", points: ["Websites combine files and technologies.", "HTML, CSS and JavaScript are the browser-side foundations.", "Servers and APIs deliver pages and data; databases store information.", "Developer tools support the work but do not replace web standards."] }
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
      id: "m5-l3", moduleId: "m5", title: "Providing Alternative Images",
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

Object.assign(window.COURSE_CONTENT.lessons, {
  "m2-l8": {
    id: "m2-l8", moduleId: "m2", title: "HTML Elements and Special Characters",
    objectives: ["Recognise the parts of an HTML element", "Display reserved characters safely in page text"],
    sections: [
      { type: "intro", title: "A tag is a label, not the whole element", content: "Think of an HTML element like a labelled box. The opening tag starts the box, the content sits inside, and the closing tag finishes it. Some characters, such as < and &, have special jobs in HTML, so we write character references when we want them to appear as ordinary text." },
      { type: "code", title: "Element parts and character references", language: "html", code: `<p class="note">HTML elements have tags and content.</p>\n<p>Use &lt; to show a less-than sign and &amp; to show an ampersand.</p>`, explanation: ["p is the element name; class is an attribute.", "The character references display < and & without treating them as markup."] },
      { type: "practice", title: "Try it", steps: ["Write a paragraph containing the words HTML and CSS.", "Display the text <h1> as an example without creating a heading.", "Use &amp;copy; to show a copyright symbol."] },
      { type: "summary", points: ["An element includes tags and its content.", "Use character references for reserved symbols such as < and &.", "The browser displays the referenced character."] }
    ]
  },
  "m3-l8": {
    id: "m3-l8", moduleId: "m3", title: "Creating an HTML Page",
    objectives: ["Combine headings, paragraphs and semantic text into a complete page", "Check a page in the browser"],
    sections: [
      { type: "intro", title: "Put the pieces together", content: "You have met the building blocks; now let’s assemble a small page. Imagine writing a short guide for a friend. Give it one clear page title, divide the information into sections, and choose an element for what each piece of text means." },
      { type: "code", title: "A small article page", language: "html", code: `<main>\n  <article>\n    <h1>My Weekend Garden</h1>\n    <p>Growing herbs is a relaxing way to learn about plants.</p>\n    <h2>What I planted</h2>\n    <p>I started with <strong>mint</strong> and <em>basil</em>.</p>\n  </article>\n</main>`, explanation: ["main identifies the page's main content.", "article groups a self-contained piece of writing.", "Headings make the article easier to scan."] },
      { type: "practice", title: "Make your own page", steps: ["Choose a hobby, place or favourite recipe.", "Write one h1, two h2 headings and a paragraph under each.", "Mark one important phrase with strong or em.", "Open the page in a browser and read only the headings to check the structure."] },
      { type: "summary", points: ["Choose HTML elements for meaning.", "Use a logical heading outline.", "A quick browser check catches missing or misplaced content."] }
    ]
  },
  "m4-l8": {
    id: "m4-l8", moduleId: "m4", title: "Lorem Ipsum",
    objectives: ["Explain what placeholder text is used for", "Replace placeholder copy before publishing"],
    sections: [
      { type: "intro", title: "Temporary words for a layout", content: "When you are sketching a page, you may not have the final writing ready. Lorem ipsum is placeholder text: it helps you see how a layout feels before the real copy is written. It is a temporary stand-in, not useful information for visitors." },
      { type: "code", title: "Placeholder copy in a draft", language: "html", code: `<article>\n  <h2>About the garden</h2>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n</article>`, explanation: ["This text can help test spacing while designing.", "Replace it with clear, original writing before the page goes live."] },
      { type: "practice", title: "Use it thoughtfully", steps: ["Add a short placeholder paragraph to a draft card.", "Check the card's spacing and line length.", "Replace the placeholder with real text that helps your intended reader."] },
      { type: "summary", points: ["Lorem ipsum is only layout filler.", "Do not leave placeholder copy in a finished site.", "Real content helps visitors understand the page."] }
    ]
  },
  "m4-l9": {
    id: "m4-l9", moduleId: "m4", title: "Targeting a Specific Location on the Page",
    objectives: ["Give a page section a unique id", "Link to that section from another link"],
    sections: [
      { type: "intro", title: "Help readers jump to the right place", content: "Long pages can feel like a long walk down a hallway. A fragment link is a shortcut: give the destination a unique id, then point a link to that id with a #. The browser scrolls straight to the matching section." },
      { type: "code", title: "Make a page shortcut", language: "html", code: `<nav aria-label="On this page">\n  <a href="#contact">Contact details</a>\n</nav>\n\n<h2 id="contact">Contact</h2>\n<p>Send me a note at hello@example.com.</p>`, explanation: ["The link fragment and the destination id must match.", "An id should be unique on the page."] },
      { type: "practice", title: "Build a mini table of contents", steps: ["Add three sections to a long page.", "Give each section a short, unique id.", "Add links near the top that jump to each section.", "Test every link and add a way back to the top."] },
      { type: "summary", points: ["Use href=\"#section-id\" to jump within a page.", "The destination needs the matching id.", "Use unique, descriptive ids."] }
    ]
  },
  "m5-l4": {
    id: "m5-l4", moduleId: "m5", title: "Adding Images to the Document",
    objectives: ["Add an image using a local or remote file path", "Keep images responsive and provide alternative text"],
    sections: [
      { type: "intro", title: "Bring a picture into your page", content: "An image element is like a window in your page: src tells the browser which picture to fetch, and alt gives people a useful text alternative. For a local image, keep the file inside your project and check the path carefully." },
      { type: "visual", title: "Anatomy of an image element", diagram: "imageAnatomy", content: "The source path finds the file; alternative text makes the image understandable when it cannot be seen." },
      { type: "code", title: "A responsive local image", language: "html", code: `<figure>\n  <img src="images/garden.jpg"\n       alt="Basil and mint growing in small pots"\n       width="800" height="500">\n  <figcaption>Our first windowsill herbs.</figcaption>\n</figure>`, explanation: ["src is a relative path from this HTML file.", "width and height help the browser reserve space.", "figure and figcaption group an image with its caption."] },
      { type: "practice", title: "Add an image of your own", steps: ["Create an images folder in your project.", "Copy one suitable image into it.", "Add the image with a path, dimensions and meaningful alt text.", "Resize the browser and make sure the image fits without distortion."] },
      { type: "summary", points: ["Use img with a working src.", "Write alt text that communicates the image's purpose.", "Use max-width: 100% in CSS to keep images within their container."] }
    ],
    playground: { html: `<figure>\n  <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80" alt="Colourful flowers in a garden">\n  <figcaption>A garden in bloom</figcaption>\n</figure>`, css: `img { max-width: 100%; height: auto; border-radius: 12px; }\nfigcaption { color: #475569; margin-top: .5rem; }`, js: "" }
  },
  "m7-l7": {
    id: "m7-l7", moduleId: "m7", title: "CSS Resets",
    objectives: ["Explain why browsers have default styles", "Use a small reset to make styling more predictable"],
    sections: [
      { type: "intro", title: "Start from a predictable baseline", content: "Browsers add default margins and styles so an unstyled page is readable. Different browsers may make slightly different choices. A CSS reset is a small set of rules that removes or normalises selected defaults before you add your own design." },
      { type: "code", title: "A gentle reset", language: "css", code: `* {\n  box-sizing: border-box;\n}\n\nbody, h1, h2, p {\n  margin: 0;\n}\n\nimg {\n  max-width: 100%;\n}`, explanation: ["This reset makes element sizing easier to reason about.", "Keep only the rules your project needs; a reset is a starting point, not a design."] },
      { type: "summary", points: ["Browsers include default styles.", "A reset reduces selected differences and surprises.", "Add readable project styles after the reset."] }
    ]
  },
  "m7-l8": {
    id: "m7-l8", moduleId: "m7", title: "External Stylesheets",
    objectives: ["Connect an external CSS file to an HTML page", "Describe why shared stylesheets are useful"],
    sections: [
      { type: "intro", title: "Keep your design in its own file", content: "An external stylesheet is a separate .css file linked from the page. Think of it as a shared wardrobe for your website: several pages can use the same rules, and one change can update them together." },
      { type: "code", title: "Link a stylesheet", language: "html", code: `<!-- In the document's <head> -->\n<link rel="stylesheet" href="css/styles.css">\n\n<!-- In css/styles.css -->\nh1 {\n  color: #1d4ed8;\n}`, explanation: ["The href path is relative to the HTML file.", "Keep the link inside head.", "External CSS is usually easiest to maintain across multiple pages."] },
      { type: "practice", title: "Try it in your project", steps: ["Create a css folder and a styles.css file.", "Add a link element in the HTML head.", "Style a heading and paragraph in the CSS file.", "Change the heading colour and refresh the page."] },
      { type: "summary", points: ["A stylesheet link connects HTML to a CSS file.", "Check the file path if styles do not appear.", "External styles can be reused across pages."] }
    ]
  },
  "m7-l10": {
    id: "m7-l10", moduleId: "m7", title: "Media Types",
    objectives: ["Explain that CSS can target different output media", "Write a simple print-specific rule", "Add viewport metadata for mobile layouts"],
    sections: [
      { type: "intro", title: "One page, different settings", content: "A page is not only viewed on a screen. Someone might print it, too. CSS media types let you provide sensible styles for different ways of viewing a document." },
      { type: "code", title: "A print-friendly page", language: "css", code: `@media print {\n  nav, button {\n    display: none;\n  }\n\n  body {\n    color: #000;\n    background: #fff;\n  }\n}`, explanation: ["Rules inside @media print apply when the page is printed.", "Hide controls that are not useful on paper and keep text readable."] },
      { type: "explanation", title: "Make room for small screens", content: "A phone is much narrower than a laptop. Add the viewport setting in head so a mobile browser uses the device's actual screen width instead of pretending the page is a wide desktop page." },
      { type: "code", title: "Set the viewport", language: "html", code: `<meta name="viewport" content="width=device-width, initial-scale=1">`, explanation: ["width=device-width matches the layout viewport to the device width.", "initial-scale=1 starts the page at normal zoom.", "CSS media queries can then adapt the layout to available space."] },
      { type: "practice", title: "Check screen and print layouts", steps: ["Add the viewport metadata to your page.", "Use Developer Tools to check a phone-sized viewport for horizontal overflow.", "Add a print rule that hides navigation.", "Open print preview and review the result."] },
      { type: "summary", points: ["Media rules adapt CSS to a viewing context.", "The print media type can create a cleaner paper copy.", "Viewport metadata helps responsive layouts work on mobile.", "Test small screens and print preview."] }
    ]
  },
  "m7-ex1": {
    id: "m7-ex1", moduleId: "m7", title: "Exercise: Creating an External Stylesheet", type: "exercise",
    objectives: ["Create and link an external stylesheet", "Style page headings and paragraphs with reusable rules"],
    sections: [
      { type: "intro", title: "Give your page its first shared style file", content: "In this exercise, you will move the design out of the HTML and into a separate CSS file. It is a small step that makes a big difference when your website grows beyond one page." },
      { type: "practice", title: "Create and connect the files", steps: ["Create a css folder beside your HTML file.", "Create css/styles.css.", "Link it from the HTML head with a stylesheet link.", "Add rules for body, h1 and p.", "Refresh the page and check the browser console/network panel if a style does not load."] },
      { type: "summary", points: ["External CSS keeps content and presentation separate.", "The link path must match your folders and file name.", "One stylesheet can style many pages."] }
    ],
    playground: { html: `<h1>My first style sheet</h1>\n<p>One design file can make a page feel like home.</p>`, css: `body { font-family: system-ui, sans-serif; line-height: 1.6; }\nh1 { color: #4338ca; }\np { color: #334155; }`, js: "" }
  },
  "m8-l4": {
    id: "m8-l4", moduleId: "m8", title: "font-style",
    objectives: ["Use normal and italic font styles", "Choose emphasis based on meaning as well as appearance"],
    sections: [
      { type: "intro", title: "A little tilt can add emphasis", content: "The font-style property controls whether text is normal or italic. In HTML, use elements such as em when the words need emphasis; CSS can then decide how that emphasis looks." },
      { type: "code", title: "Style emphasized text", language: "css", code: `em {\n  font-style: italic;\n}\n.note {\n  font-style: normal;\n}`, explanation: ["Italic text can help distinguish a phrase.", "Use normal to remove an italic style when the design calls for it."] },
      { type: "summary", points: ["font-style commonly uses normal or italic.", "Use meaningful HTML for emphasis and CSS for presentation."] }
    ]
  },
  "m8-l5": {
    id: "m8-l5", moduleId: "m8", title: "line-height",
    objectives: ["Set the vertical spacing between lines", "Choose a readable line height for paragraphs"],
    sections: [
      { type: "intro", title: "Give your text room to breathe", content: "When lines are crowded, reading feels tiring. line-height sets the distance between baselines. A comfortable value helps a paragraph feel open without making it look like every line is a separate paragraph." },
      { type: "code", title: "Comfortable paragraph spacing", language: "css", code: `body {\n  font-size: 1rem;\n  line-height: 1.6;\n}\n\nh1 {\n  line-height: 1.15;\n}`, explanation: ["A unitless value scales with the element's font size.", "Headings often use a tighter line height than body copy."] },
      { type: "practice", title: "Compare the difference", steps: ["Try line-height values of 1, 1.5 and 1.8 on a paragraph.", "Read each version at normal browser zoom.", "Choose the one that is easiest to follow."] },
      { type: "summary", points: ["line-height controls line spacing.", "Unitless values are flexible and inherit predictably.", "Choose readability over a one-size-fits-all number."] }
    ]
  },
  "m10-l1": {
    id: "m10-l1", moduleId: "m10", title: "letter-spacing",
    objectives: ["Adjust the space between characters", "Use letter spacing sparingly for readability"],
    sections: [
      { type: "intro", title: "Fine-tune the space between letters", content: "A little extra space can help a short label feel airy. Too much spacing makes sentences harder to read, so treat letter-spacing like seasoning: start small and check it at normal size." },
      { type: "code", title: "A small spacing adjustment", language: "css", code: `.eyebrow {\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}`, explanation: ["em scales the spacing with the text size.", "This effect is most useful on short labels, not long paragraphs."] },
      { type: "summary", points: ["letter-spacing changes space between characters.", "Small values are usually enough.", "Always test readability."] }
    ]
  },
  "m10-l4": {
    id: "m10-l4", moduleId: "m10", title: "text-indent",
    objectives: ["Indent the first line of a paragraph", "Use indentation to support a clear reading style"],
    sections: [
      { type: "intro", title: "Nudge the first line", content: "The text-indent property moves the first line of a block of text. It is often used in long-form writing, but it is not a replacement for spacing paragraphs apart." },
      { type: "code", title: "Indent the opening line", language: "css", code: `article p {\n  text-indent: 1.5em;\n}`, explanation: ["Only the first line of each selected paragraph is indented.", "Use margin or padding when you need to move the whole paragraph."] },
      { type: "practice", title: "Try a readable article style", steps: ["Apply text-indent to article paragraphs.", "Compare it with using margin-left.", "Keep the option that makes your page easiest to read."] },
      { type: "summary", points: ["text-indent moves the first line.", "Spacing properties move the whole block.", "Use indentation consistently."] }
    ]
  },
  "m10-l5": {
    id: "m10-l5", moduleId: "m10", title: "text-transform",
    objectives: ["Change the visual case of text with CSS", "Keep the original text meaningful and correctly written"],
    sections: [
      { type: "intro", title: "Change appearance, not the words", content: "text-transform can display text in uppercase, lowercase or title case. It changes how the words look, not the text stored in your HTML, so write the original content correctly." },
      { type: "code", title: "Style a small label", language: "css", code: `.category-label {\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}`, explanation: ["uppercase displays the letters in capitals.", "Avoid forcing long passages into uppercase; it can be tiring to read."] },
      { type: "summary", points: ["text-transform changes visual letter case.", "It does not edit the source text.", "Use it selectively for short labels and headings."] }
    ]
  },
  "m7-l13": {
    id: "m7-l13", moduleId: "m7", title: "CSS Normalizers",
    objectives: ["Describe how a normalizer differs from a reset", "Recognise when a project may benefit from a normalizer"],
    sections: [
      { type: "intro", title: "Smooth out browser differences", content: "A reset removes selected browser defaults, while a normalizer aims to make useful defaults more consistent across browsers. Think of it as tuning instruments before a band plays: each one still has its character, but they start closer together." },
      { type: "explanation", title: "Choosing a starting point", content: "A small reset or a maintained normalizer can both be reasonable. For a beginner project, start with a few rules you understand. If you adopt a third-party stylesheet, read what it changes and keep it updated." },
      { type: "code", title: "A tiny consistency baseline", language: "css", code: `*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  line-height: 1.5;\n}`, explanation: ["These rules create a small shared baseline.", "A full reset or normalizer contains more rules; this example is only a starting point."] },
      { type: "summary", points: ["Resets remove selected defaults.", "Normalizers preserve useful defaults while reducing browser inconsistencies.", "Understand any baseline stylesheet you choose."] }
    ]
  },
  "m7-l14": {
    id: "m7-l14", moduleId: "m7", title: "Embedded Stylesheets",
    objectives: ["Add CSS inside a style element", "Choose when embedded CSS is suitable"],
    sections: [
      { type: "intro", title: "Keep a small experiment close by", content: "An embedded stylesheet lives in a style element inside the HTML head. It can be handy for a one-page demonstration or a quick experiment. For a growing site, an external file is easier to share and maintain." },
      { type: "code", title: "Add a style element", language: "html", code: `<head>\n  <style>\n    body { font-family: system-ui, sans-serif; }\n    h1 { color: royalblue; }\n  </style>\n</head>`, explanation: ["The style element belongs in head.", "The declarations are ordinary CSS.", "Use an external stylesheet when pages need to share the same design."] },
      { type: "practice", title: "Experiment safely", steps: ["Add a style element to a one-page practice file.", "Change the heading colour and body font.", "Move the rules to a .css file and compare the two approaches."] },
      { type: "summary", points: ["Embedded CSS uses a style element.", "It can suit a small single-page example.", "External stylesheets are easier to reuse across pages."] }
    ]
  },
  "m7-l15": {
    id: "m7-l15", moduleId: "m7", title: "Inline Styles",
    objectives: ["Add a CSS declaration with the style attribute", "Explain why inline styles are usually not the first choice"],
    sections: [
      { type: "intro", title: "A style attached to one element", content: "An inline style sits in an element's style attribute. It can be useful for a quick demonstration, but sprinkling styles throughout HTML makes a site harder to update. Prefer a stylesheet for reusable design rules." },
      { type: "code", title: "One element, one inline rule", language: "html", code: `<p style="color: #1d4ed8; font-weight: 700;">A highlighted note</p>`, explanation: ["The style attribute contains CSS declarations.", "This affects only this element.", "Repeated inline styles are difficult to maintain consistently."] },
      { type: "practice", title: "Compare the approaches", steps: ["Add the example inline style to a paragraph.", "Create a class with the same colour in a stylesheet.", "Apply the class to a second paragraph and compare how easy it is to reuse."] },
      { type: "summary", points: ["Inline CSS uses the style attribute.", "It applies to one element.", "Prefer classes and stylesheets for maintainable designs."] }
    ]
  },
  "m7-ex2": {
    id: "m7-ex2", moduleId: "m7", title: "Exercise: Creating an Embedded Stylesheet", type: "exercise",
    objectives: ["Write an embedded stylesheet", "Apply more than one rule to page elements"],
    sections: [
      { type: "intro", title: "A quick one-page design", content: "Let’s style a single practice page without creating another file. You will place a style element in head and use a few CSS rules to make the content easier to read." },
      { type: "practice", title: "Build the page", steps: ["Create a page with one h1 and two paragraphs.", "Add a style element inside head.", "Choose a font family and a readable line-height for body.", "Give the h1 a colour and a suitable font size.", "Change one value and refresh to see the result."] },
      { type: "summary", points: ["Embedded rules go inside style in head.", "Selectors choose which elements to style.", "For a multi-page project, consider moving shared rules to an external file."] }
    ],
    playground: { html: `<h1>A Calm Morning</h1>\n<p>Start with a glass of water and a few quiet minutes.</p>\n<p>Then make a plan for the day.</p>`, css: `body { font-family: system-ui, sans-serif; line-height: 1.6; }\nh1 { color: #047857; }`, js: "" }
  },
  "m7-ex3": {
    id: "m7-ex3", moduleId: "m7", title: "Exercise: Adding Inline Styles", type: "exercise",
    objectives: ["Add an inline style to an element", "Compare inline styling with a reusable class"],
    sections: [
      { type: "intro", title: "A small style experiment", content: "Inline styles are easy to spot because they sit right on the element. Try one for learning, then move the same design into a class so you can reuse it." },
      { type: "practice", title: "Try, then improve", steps: ["Add a style attribute to one short note.", "Set its colour and font weight.", "Create a CSS class with the same declarations.", "Apply that class to two notes and remove the repeated inline styles.", "Explain which version is easier to maintain."] },
      { type: "summary", points: ["The style attribute applies CSS to one element.", "Classes make shared presentation reusable.", "Inline styles are best kept limited and intentional."] }
    ],
    playground: { html: `<p class="note">First note</p>\n<p class="note">Second note</p>`, css: `.note { color: #1d4ed8; font-weight: 700; }`, js: "" }
  },
  "m7-ex4": {
    id: "m7-ex4", moduleId: "m7", title: "Exercise: Styling div and span", type: "exercise",
    objectives: ["Use div to group block content", "Use span to style a small part of a text line"],
    sections: [
      { type: "intro", title: "Group a card and highlight a word", content: "A div can group a set of related elements, while a span can target a few words inside a line. They do not add meaning by themselves, so choose them when a more descriptive HTML element does not fit." },
      { type: "code", title: "A simple card", language: "html", code: `<div class="card">\n  <h2>Garden tip</h2>\n  <p>Water <span class="highlight">early</span> in the day.</p>\n</div>`, explanation: ["div groups the card content.", "span wraps just the word that needs a styling hook."] },
      { type: "practice", title: "Style the group", steps: ["Add a border, padding and background to .card.", "Give .highlight a colour and a light background.", "Check whether a semantic element would be more appropriate than div for your card."] },
      { type: "summary", points: ["div is a generic block container.", "span is a generic inline container.", "Prefer semantic HTML when it describes the content."] }
    ],
    playground: { html: `<div class="card">\n  <h2>Garden tip</h2>\n  <p>Water <span class="highlight">early</span> in the day.</p>\n</div>`, css: `.card { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 12px; }\n.highlight { color: #047857; font-weight: 700; }`, js: "" }
  },
  "m8-l6": {
    id: "m8-l6", moduleId: "m8", title: "font-variant",
    objectives: ["Use small capitals for a suitable label", "Understand that font support can vary"],
    sections: [
      { type: "intro", title: "A traditional small-caps look", content: "font-variant can display lowercase letters as smaller capital letters. It can add a quiet, formal feel to a short label. Use it sparingly and check that it remains easy to read." },
      { type: "code", title: "Try small capitals", language: "css", code: `.byline {\n  font-variant: small-caps;\n}`, explanation: ["small-caps changes the appearance of lowercase letters.", "The original text remains unchanged."] },
      { type: "summary", points: ["font-variant controls typographic variants.", "small-caps is best for short text.", "Check the result in your target browsers and fonts."] }
    ]
  },
  "m8-l7": {
    id: "m8-l7", moduleId: "m8", title: "font-weight",
    objectives: ["Control how light or bold text appears", "Use available weights from the chosen font"],
    sections: [
      { type: "intro", title: "Make important text stand out", content: "font-weight controls the thickness of characters. A stronger weight can help a heading stand apart, while regular text is often easier to read in long paragraphs." },
      { type: "code", title: "Choose a useful weight", language: "css", code: `body { font-weight: 400; }\nh1 { font-weight: 700; }\nsmall { font-weight: 500; }`, explanation: ["Numbers commonly range from 100 (light) to 900 (heavy).", "A font may only include some weights, so unavailable values can look similar."] },
      { type: "practice", title: "Build a clear hierarchy", steps: ["Set body text to a regular weight.", "Make the main heading bolder.", "Compare a medium weight for a small label.", "Keep enough contrast between the text and its background."] },
      { type: "summary", points: ["font-weight changes text thickness.", "Use weight to support hierarchy.", "The selected font determines which weights are available."] }
    ]
  },
  "m8-l8": {
    id: "m8-l8", moduleId: "m8", title: "font shorthand",
    objectives: ["Write common font settings with the font shorthand", "Identify the required size and family values"],
    sections: [
      { type: "intro", title: "Several font settings in one declaration", content: "The font shorthand can set several font properties at once. It is concise, but the order matters. Include a size and family, and remember that shorthand can reset other font settings you did not write." },
      { type: "code", title: "A complete shorthand", language: "css", code: `p {\n  font: italic 600 1rem/1.6 system-ui, sans-serif;\n}`, explanation: ["The order is style, weight, size/line-height, then family.", "The size and family are required.", "Use separate properties if the shorthand makes the rule hard to understand."] },
      { type: "summary", points: ["font is shorthand for multiple font properties.", "Include font-size and font-family.", "Keep the declaration readable for the next person who maintains it."] }
    ]
  },
  "m10-l7": {
    id: "m10-l7", moduleId: "m10", title: "word-spacing",
    objectives: ["Adjust the space between words", "Avoid spacing that makes sentences difficult to scan"],
    sections: [
      { type: "intro", title: "Adjust gaps between words", content: "word-spacing controls the space between words. A small adjustment can help a short label, but large gaps interrupt the natural shape of a sentence." },
      { type: "code", title: "A gentle adjustment", language: "css", code: `.tagline {\n  word-spacing: 0.12em;\n}`, explanation: ["em scales the added space with the font size.", "Compare the result at regular zoom before keeping the change."] },
      { type: "summary", points: ["word-spacing adjusts the spaces between words.", "Use modest values and preserve readability."] }
    ]
  },
  "m10-l8": {
    id: "m10-l8", moduleId: "m10", title: "text-shadow",
    objectives: ["Add a subtle shadow behind text", "Keep text readable when adding visual effects"],
    sections: [
      { type: "intro", title: "A soft shadow for depth", content: "text-shadow draws a shadow behind characters. A subtle shadow can help a heading stand out on an image, but a strong shadow can make words fuzzy and hard to read." },
      { type: "code", title: "A restrained shadow", language: "css", code: `h1 {\n  color: #0f172a;\n  text-shadow: 1px 2px 3px rgb(15 23 42 / 20%);\n}`, explanation: ["The values set horizontal offset, vertical offset, blur and colour.", "Keep enough contrast between the text and whatever sits behind it."] },
      { type: "practice", title: "Compare before you commit", steps: ["Try a small shadow on one heading.", "Increase the blur and opacity, then compare.", "Choose the clearest version or remove the shadow if it hurts readability."] },
      { type: "summary", points: ["text-shadow adds a visual shadow to text.", "Smaller, softer shadows are often easier to read.", "Do not use an effect as a substitute for contrast."] }
    ]
  },
  "m10-l9": {
    id: "m10-l9", moduleId: "m10", title: "white-space",
    objectives: ["Control how spaces and line breaks are handled", "Choose a white-space value that suits the content"],
    sections: [
      { type: "intro", title: "Spaces can affect wrapping", content: "Browsers normally collapse repeated spaces and wrap text onto new lines when needed. The white-space property changes that behaviour. It is useful for code snippets and carefully controlled labels, but some values can cause overflow." },
      { type: "code", title: "Preserve a code sample", language: "css", code: `.code-sample {\n  white-space: pre-wrap;\n}`, explanation: ["pre-wrap preserves spaces and line breaks while still allowing long lines to wrap.", "Use normal for ordinary paragraphs so text can flow naturally."] },
      { type: "practice", title: "Check the wrapping", steps: ["Add a paragraph with several spaces and a line break in its HTML.", "Compare white-space: normal with pre-wrap.", "Make the browser narrow and check that the text does not overflow."] },
      { type: "summary", points: ["white-space controls whitespace collapsing and wrapping.", "pre-wrap preserves spaces and still wraps long lines.", "Test narrow screens when changing wrapping behaviour."] }
    ]
  }
});

const additionalLessonTeaching = {
  "m2-l2": [
    { type: "explanation", title: "Elements, tags, and attributes are not the same thing", content: ["The tag is the markup in angle brackets, such as <p> or </p>. The element is the complete unit: the opening tag, its content, and usually its closing tag. An attribute adds information to an opening tag. For example, href tells a link where to go, while alt describes an image to people who cannot see it.", "Some elements do not wrap content. These are void elements; img and meta are examples. They are written as a single tag in modern HTML."] },
    { type: "mistakes", title: "Watch for these beginner slips", items: [
      { wrong: `<a>Visit</a>`, why: "The link has no destination.", fix: `<a href="about.html">Visit the about page</a>` },
      { wrong: `<p class=note>Note</p>`, why: "Unquoted values are easy to mistype and are less clear when they contain spaces.", fix: `<p class="note">Note</p>` },
      { wrong: `<!-- never closed`, why: "An unfinished comment can hide the rest of the page source.", fix: `<!-- A short helpful note -->` }
    ]},
    { type: "practice", title: "Annotate a snippet", steps: ["Underline one opening tag and its matching closing tag.", "Circle the attribute name and value in an image or link.", "Add a comment that explains why a section exists.", "Identify a void element and explain why it has no closing tag."] }
  ],
  "m2-l3": [
    { type: "steps", title: "What belongs in each part?", items: [
      { title: "DOCTYPE", content: "Tells the browser to use modern HTML parsing. It is a declaration, not an HTML element." },
      { title: "html", content: "Wraps the entire document. Its lang attribute identifies the main language." },
      { title: "head", content: "Holds information about the page, such as character encoding, title, viewport settings, and stylesheet links." },
      { title: "body", content: "Holds the content visitors see and interact with, such as headings, paragraphs, images, and buttons." }
    ]},
    { type: "code", title: "A reusable page skeleton", language: "html", code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>My first page</title>\n</head>\n<body>\n  <h1>Welcome</h1>\n  <p>My page starts here.</p>\n</body>\n</html>`, explanation: ["Keep metadata in head, not in the visible body.", "The title appears in the browser tab and helps identify the page.", "Indent nested elements consistently so you can see which elements are inside others."]},
    { type: "callout", tone: "tip", title: "How to debug a missing page detail", content: "If text does not appear, check that it is inside body and that the body and html closing tags are in the right place. If the tab title is wrong, look in head for title." }
  ],
  "m2-l4": [
    { type: "explanation", title: "Source code and the live page are different views", content: ["View Page Source shows the HTML document the browser received. The Elements panel in Developer Tools shows the live DOM after the browser has parsed the HTML and after JavaScript may have changed it.", "Use View Source to check the original markup. Use Elements when debugging what is currently on screen, including injected elements and computed structure. CSS styles are best inspected in the Styles and Computed panels."] },
    { type: "steps", title: "Inspect a page safely", items: [
      { title: "Open the source", content: "Right-click a page and choose View Page Source, or use the browser's source shortcut." },
      { title: "Find one element", content: "Search for a heading or a phrase you can see on the page." },
      { title: "Inspect the live element", content: "Open Developer Tools, select the element picker, and click that same heading." },
      { title: "Compare what changed", content: "Look for differences added by scripts or represented differently in the live DOM." }
    ]},
    { type: "callout", tone: "warning", title: "Viewing source is not editing the website", content: "Changing text in Developer Tools is temporary and local to your browser. It does not change the owner's website or save a change to its server." },
    { type: "practice", title: "Source detective", steps: ["Inspect a page you are allowed to explore.", "Find its title and one heading in View Source.", "Use the Elements panel to inspect the same heading.", "Write one difference you noticed between the original source and live DOM."] }
  ],
  "m2-l5": [
    { type: "explanation", title: "Why character references exist", content: ["The less-than sign begins an HTML tag, and an ampersand begins a character reference. If you type these characters as ordinary text in the wrong context, the browser may interpret them as markup instead of displaying them.", "Write &lt; for <, &gt; for >, and &amp; for &. A reference ends with a semicolon. The browser displays the intended character to the reader."] },
    { type: "code", title: "Show code without turning it into a tag", language: "html", code: `<p>Write &lt;strong&gt; to begin a strong element.</p>\n<p>Tom &amp; Ana are learning HTML.</p>\n<p>Price: 5 &gt; 3</p>`, explanation: ["The browser shows the symbols rather than treating them as markup.", "When writing code samples, escape each angle bracket that should appear visibly."]},
    { type: "practice", title: "Translate the symbols", steps: ["Write a paragraph that visibly displays <div>.", "Add a sentence that uses an ampersand.", "Display the expression 8 > 5.", "Preview the page and confirm each symbol appears as text."] }
  ],
  "m2-l6": [
    { type: "steps", title: "A beginner-friendly HTML timeline", items: [
      { title: "1991 · a simple start", content: "Tim Berners-Lee created HTML to link and share documents on the early World Wide Web." },
      { title: "1990s · wider adoption", content: "HTML grew as more people and organisations created websites. Standards helped browsers interpret pages more consistently." },
      { title: "HTML 4 and XHTML", content: "These versions shaped a large part of the web and encouraged more structured markup." },
      { title: "HTML5 and the living standard", content: "HTML gained richer semantic elements and built-in support for media. Today, the standard evolves continuously rather than requiring every learner to memorise a new version number." }
    ]},
    { type: "explanation", title: "Why history matters when you write a page", content: "Older tutorials may show presentational tags or long, outdated DOCTYPE declarations. Modern HTML separates meaning from appearance: use semantic elements for structure and CSS for design. The short <!DOCTYPE html> declaration asks browsers to use standards mode." },
    { type: "callout", tone: "tip", title: "What to remember", content: "You do not need to memorise every date. The useful lesson is that HTML is a shared standard, and modern semantic markup makes content clearer to browsers, assistive technology, and other developers." }
  ],
  "m2-l7": [
    { type: "explanation", title: "Language is useful information, not decoration", content: ["The lang attribute declares the language of human-readable content. Screen readers use it to choose pronunciation rules, browsers may use it for language-specific text handling, and search tools use it as one clue about the page.", "Use the language of most of the page on the html element. Mark a passage in another language on the specific element that contains it."] },
    { type: "code", title: "Set the main language and mark a different phrase", language: "html", code: `<html lang="en">\n  <body>\n    <p>In French, hello is <span lang="fr">bonjour</span>.</p>\n  </body>\n</html>`, explanation: ["Use a recognised language tag such as en, en-GB, fr, or sw.", "The inner span changes the declared language only for that word."]},
    { type: "callout", tone: "warning", title: "Avoid guessing", content: "Do not choose a language tag because it looks familiar. Set the language your content is actually written in; an incorrect declaration can cause assistive technology to pronounce it incorrectly." },
    { type: "practice", title: "Language check", steps: ["Find the html start tag in your page.", "Add lang with the page's main language.", "If you include a short phrase in another language, mark just that phrase.", "Explain one way this helps a screen-reader user."] }
  ],
  "m2-ex1": [
    { type: "steps", title: "Build, inspect, and improve", items: [
      { title: "Create the document", content: "Save a new file as about-me.html and write the DOCTYPE, html, head, and body structure." },
      { title: "Add useful page information", content: "Set the language, UTF-8 encoding, and a title that makes sense in a browser tab." },
      { title: "Write the visible content", content: "Add one h1 and two paragraphs about a hobby, a place, or something you want to learn." },
      { title: "Check your work", content: "Open the file in a browser, read the title in the tab, and use View Source to confirm the tags are present." }
    ]},
    { type: "callout", tone: "tip", title: "If something goes wrong", content: "A blank page often means a file was not saved where expected or the wrong file was opened. A missing character may mean a tag was not closed. Make one small correction at a time and refresh." }
  ],
  "m3-l1": [
    { type: "explanation", title: "Paragraphs group complete thoughts", content: ["Use a p element for a paragraph, not just to make text look separated. A browser normally gives paragraphs space before and after them. This spacing can be changed later with CSS without changing the meaning of the markup.", "HTML collapses runs of ordinary spaces, tabs, and line breaks into a single visible space. That means you can wrap a long sentence across several lines in your editor without changing how it reads in the browser."] },
    { type: "comparison", title: "Choose the element for the job", columns: [
      { title: "Use p", points: ["A complete paragraph", "A caption or short descriptive sentence", "Text that belongs together as one thought"] },
      { title: "Use br sparingly", points: ["A line break inside an address", "A line break in a poem where it matters", "Not a way to create blank space between paragraphs"] }
    ]},
    { type: "practice", title: "Reshape a rough draft", steps: ["Write a short three-sentence introduction.", "Put each complete thought in its own paragraph.", "Add several extra spaces in the source and preview the result.", "Use two br elements only if a line break is meaningful, then explain why."] }
  ],
  "m3-l2": [
    { type: "explanation", title: "Headings make a map for the page", content: ["A heading introduces the topic of the section that follows. h1 is the main page heading; h2 introduces a major section; h3 can introduce a subsection inside that h2 section. Continue the outline only as deeply as your content needs.", "Headings are not simply large text. Assistive technology can list headings so someone can skim or jump to a section. Use CSS to change size and colour while preserving the logical heading level."] },
    { type: "callout", tone: "warning", title: "Do not pick a heading by its default size", content: "If an h2 looks too large, style it with CSS. Do not choose h4 merely because it looks smaller: that can make the document outline confusing." },
    { type: "practice", title: "Outline before you mark up", steps: ["Write a page title.", "List two main sections under it.", "Add one subsection only where it truly belongs inside a main section.", "Turn the outline into h1, h2, and h3 elements.", "Read only the headings: can you understand the page structure?"] }
  ],
  "m3-l3": [
    { type: "comparison", title: "A line break is not a section break", columns: [
      { title: "br · line break", intro: "Stays inside one piece of content.", points: ["Useful for an address or poem", "Does not start a new paragraph", "Avoid using repeated br tags for layout"] },
      { title: "hr · thematic change", intro: "Marks a shift in topic or scene.", points: ["Creates a thematic break", "Often drawn as a horizontal line by default", "Can be restyled with CSS"] }
    ]},
    { type: "code", title: "Use a break only when the wording needs it", language: "html", code: `<p>Harbour House<br>18 River Road<br>Northport</p>\n\n<hr>\n\n<p>Our opening hours have changed.</p>`, explanation: ["The address remains one related block of content.", "The hr separates two related but distinct topics."]},
    { type: "callout", tone: "tip", title: "Need more space?", content: "For visual spacing, use CSS margin or padding. That keeps the HTML about content and the stylesheet about appearance." }
  ],
  "m3-l4": [
    { type: "explanation", title: "A div groups without adding meaning", content: ["div is a generic block container. It is useful when you need one wrapper for styling, layout, or a JavaScript hook and no semantic element describes the group.", "Before choosing div, ask whether main, section, article, nav, header, or footer expresses the role more clearly. Use div for layout only when the grouping itself has no special meaning."] },
    { type: "comparison", title: "Semantic container or generic container?", columns: [
      { title: "Choose a semantic element", points: ["A self-contained article → article", "A named thematic region → section", "Navigation links → nav"] },
      { title: "Choose div", points: ["A wrapper used only for a CSS grid", "A neutral group around unrelated layout parts", "A hook where no meaningful element fits"] }
    ]},
    { type: "code", title: "A meaningful section with a layout wrapper", language: "html", code: `<section aria-labelledby="tips-title">\n  <h2 id="tips-title">Garden tips</h2>\n  <div class="tip-grid">\n    <article><h3>Water gently</h3></article>\n    <article><h3>Check the leaves</h3></article>\n  </div>\n</section>`, explanation: ["section identifies a thematic region with a heading.", "div groups cards for layout without pretending to be a content section."]}
  ],
  "m3-l5": [
    { type: "explanation", title: "Give quotations their source and shape", content: ["Use q for a short quotation that fits naturally inside a sentence. Use blockquote for a longer quoted passage presented as its own block. When you know the source, cite it in surrounding text or with a citation; the cite attribute is not a substitute for a visible attribution.", "Do not use quotation elements just to indent text. Their meaning is that the words are quoted from another source."] },
    { type: "code", title: "Short and long quotations", language: "html", code: `<p>The guide calls the web <q cite="https://example.com">a place to share ideas</q>.</p>\n\n<blockquote cite="https://example.com/story">\n  <p>Longer quoted passage goes here, kept separate from your own writing.</p>\n</blockquote>\n<p><cite>— A guide to the web</cite></p>`, explanation: ["Browsers often add quotation marks around q automatically.", "blockquote represents the longer quoted passage.", "Give readers a useful attribution they can see."]},
    { type: "practice", title: "Quote with care", steps: ["Write a sentence containing a short quote and mark it with q.", "Add a separate longer quotation inside blockquote.", "Write an attribution near the quoted passage.", "Check that readers can tell which words are yours."]}
  ],
  "m3-l6": [
    { type: "explanation", title: "Preserve spacing when spacing carries meaning", content: ["Normal HTML text collapses repeated whitespace. pre preserves spaces and line breaks, which is useful for code samples, command output, and carefully formatted text.", "Pair pre with code when the content is source code. pre describes preserved formatting; code describes the content as code. Long lines can overflow, so give the sample a responsive container or allow wrapping when appropriate."]},
    { type: "code", title: "A readable code sample", language: "html", code: `<pre><code>const greeting = "Hello";\nconsole.log(greeting);</code></pre>`, explanation: ["Line breaks and indentation are preserved.", "The code element identifies the sample as code.", "Do not use pre to create page layout; use CSS layout tools for that."]},
    { type: "practice", title: "Preserve a small example", steps: ["Write a two-line code example inside pre and code.", "Indent its second line.", "Preview and confirm the spacing remains.", "Narrow the browser and check that the code can still be read."]}
  ],
  "m3-l7": [
    { type: "comparison", title: "Choose words that describe their meaning", columns: [
      { title: "Meaningful emphasis", points: ["strong marks importance", "em marks stress emphasis", "mark highlights a relevant passage"] },
      { title: "Meaningful references", points: ["abbr expands an abbreviation", "time can represent a date or time", "cite identifies the title of a creative work"] }
    ]},
    { type: "code", title: "Semantic words in a sentence", language: "html", code: `<p><strong>Important:</strong> submit the form by <time datetime="2026-10-20">20 October</time>.</p>\n<p>She said <em>this</em> is the version to use.</p>\n<p>The abbreviation <abbr title="HyperText Markup Language">HTML</abbr> describes page structure.</p>`, explanation: ["strong and em carry different meaning; they are not interchangeable bold and italic switches.", "time can include a machine-readable datetime value.", "The abbr title provides the expanded phrase on supporting browsers."]},
    { type: "callout", tone: "tip", title: "Meaning first, styling second", content: "Choose the element that matches the message. If it needs a different colour or weight, add CSS after the meaning is correct."}
  ],
  "m3-ex1": [
    { type: "intro", title: "Plan an article a reader can scan", content: "A useful article has a clear main idea and sections that answer the reader’s questions. Before writing markup, sketch the order of your ideas. This makes it easier to choose headings and keeps the page from becoming one long wall of text."},
    { type: "steps", title: "Draft and check your article", items: [
      { title: "Choose a reader and purpose", content: "Decide who the page is for and what they should learn or do." },
      { title: "Create a short outline", content: "Write one page title and two or three section headings in a sensible order." },
      { title: "Add the prose", content: "Write one or more paragraphs under each heading. Use quotation and emphasis only where they are meaningful." },
      { title: "Read the outline aloud", content: "Temporarily ignore the paragraphs. The headings should still tell the reader what the article covers." }
    ]},
    { type: "callout", tone: "example", title: "A useful final check", content: "If two headings describe the same idea, combine or rename them. If a section has no heading but introduces a new topic, consider adding one."}
  ],
  "m3-ex2": [
    { type: "steps", title: "Add semantic detail to a short introduction", items: [
      { title: "Write the plain sentence first", content: "Make sure the sentence communicates clearly without styling." },
      { title: "Identify the meaning", content: "Decide which words are important, stressed, a date, an abbreviation, or a quoted work." },
      { title: "Choose the element", content: "Use strong, em, time, abbr, or cite only when its meaning matches." },
      { title: "Test with and without styles", content: "The sentence should remain understandable even when your custom CSS is removed." }
    ]},
    { type: "practice", title: "Review your markup", steps: ["Add two different inline semantic elements.", "Explain the meaning each one adds.", "Check the HTML source for correctly nested tags.", "Ask a partner to read the text and explain which words are important."]}
  ],
  "m4-l1": [
    { type: "explanation", title: "Hypertext is connected information", content: ["A link lets a reader move from one resource to another. The anchor element a creates the link, and its href attribute names the destination. A destination may be another website, another file in your project, an email address, or a point in the current page.", "A good link makes its destination clear before a visitor activates it. This helps people scan, supports keyboard navigation, and makes a page easier to use with assistive technology."]},
    { type: "comparison", title: "Link or button?", columns: [
      { title: "Use a link", points: ["Move to another page or resource", "Jump to a section", "Open an email address"] },
      { title: "Use a button", points: ["Submit a form", "Open or close a menu", "Perform an action on the current page"] }
    ]},
    { type: "practice", title: "Plan a small navigation", steps: ["Choose three pages for a tiny site.", "Write the labels a visitor should see.", "Decide whether each control navigates somewhere or performs an action.", "Use descriptive text rather than “click here.”"]}
  ],
  "m4-l2": [
    { type: "explanation", title: "Write link text that works out of context", content: ["The clickable words are called link text. A reader may encounter links in a list without reading the surrounding paragraph, so the label should explain the destination or action. “Read our contact details” is more useful than “click here.”", "Use an anchor for navigation, not a button-shaped link for every control. CSS can make a real anchor look like a button when it still takes the visitor somewhere."]},
    { type: "mistakes", title: "Make a vague link more helpful", items: [
      { wrong: `<a href="/guide">Click here</a>`, why: "The label does not say where the link goes.", fix: `<a href="/guide">Read the beginner's guide</a>` },
      { wrong: `<a>Contact</a>`, why: "Without href, this is not a working link.", fix: `<a href="/contact.html">Contact us</a>` }
    ]},
    { type: "practice", title: "Link-label makeover", steps: ["Write three vague labels such as “more” or “here.”", "Rewrite each to describe its destination.", "Check that each link has a meaningful href.", "Use keyboard Tab to move through the links."]}
  ],
  "m4-l3": [
    { type: "explanation", title: "Relative paths start from the current file", content: ["An absolute URL contains the full address, including its scheme and domain, such as https://example.com/about.html. A relative path points from the current HTML file to a file in your project, such as pages/about.html.", "The same relative path can resolve differently depending on which folder contains the current page. From inside pages/, a stylesheet one folder above might be ../css/styles.css. The .. part means “go up one folder.”"]},
    { type: "steps", title: "Work out a relative path", items: [
      { title: "Find the page using the link", content: "Start from the folder containing the HTML file with the href." },
      { title: "Find the destination", content: "Locate the target file in the project tree." },
      { title: "Walk between them", content: "Use folder names to go down; use ../ to go up one level." },
      { title: "Test the result", content: "Click the link and check the address and page. Folder and file names may be case-sensitive on a web host." }
    ]},
    { type: "callout", tone: "warning", title: "Avoid computer-specific file paths", content: "A path such as C:\\Users\\Sam\\Desktop\\site\\about.html only works on one computer. Use project-relative paths for files you plan to share or publish."}
  ],
  "m4-l4": [
    { type: "explanation", title: "Opening a new tab changes the browsing context", content: ["By default, a link opens in the current tab. target=\"_blank\" asks the browser to open a new tab or window, although the visitor or browser settings may affect the exact result.", "A new tab can be useful when the visitor may want to keep their place, but unexpected tabs can be disruptive. Tell the visitor when a link opens a new tab, and use rel=\"noopener noreferrer\" for a safe external new-tab link."]},
    { type: "code", title: "A clearly labelled external link", language: "html", code: `<a href="https://developer.mozilla.org/"\n   target="_blank"\n   rel="noopener noreferrer">\n  MDN Web Docs (opens in a new tab)\n</a>`, explanation: ["target chooses where to open the destination.", "noopener prevents the new page from controlling the original tab.", "noreferrer avoids sending referrer information to the destination."]},
    { type: "practice", title: "Check the visitor experience", steps: ["Add one external link to a trusted learning resource.", "Open it in a new tab with the appropriate rel value.", "Make the new-tab behaviour clear in its visible label.", "Try it with a keyboard and confirm the original page stays available."]}
  ],
  "m4-l5": [
    { type: "explanation", title: "An email link asks the device to compose a message", content: ["A mailto URL can open the visitor’s configured email application with a recipient already filled in. It does not send the message automatically, and it may not work if the visitor has no email handler configured.", "You can prefill a subject using a query parameter. Keep the address and optional text readable, and avoid placing private information in a URL."]},
    { type: "code", title: "Email with a helpful subject", language: "html", code: `<a href="mailto:hello@example.com?subject=Course%20question">\n  Email the course team\n</a>`, explanation: ["mailto: starts an email link.", "Spaces in URL parameters are encoded as %20.", "The visitor can review and edit the message before sending."]},
    { type: "callout", tone: "tip", title: "Offer a visible address too", content: "Some visitors prefer to copy an address instead of opening an email program. Displaying the address near the link gives them another option."}
  ],
  "m4-l6": [
    { type: "explanation", title: "The title attribute is optional extra information", content: ["The title attribute can offer advisory information, often shown as a tooltip when a mouse pointer rests over an element. It is not a reliable place for essential instructions: touch users may not see it, and keyboard and screen-reader support varies.", "Put the important meaning in the visible link text or nearby page content. Use title only when it genuinely adds helpful, non-essential context."]},
    { type: "comparison", title: "Essential information belongs in visible text", columns: [
      { title: "Helpful", points: ["“Download the timetable (PDF)”", "The file type is visible to everyone", "A title may add optional context"] },
      { title: "Not enough", points: ["A vague “Download” label", "The only file detail hidden in a tooltip", "Instructions available only on hover"] }
    ]},
    { type: "practice", title: "Make a link understandable", steps: ["Write a link to a sample PDF.", "Include its purpose and file type in visible text.", "Add a title only if it contributes extra useful information.", "Check whether the visible label still makes sense without a mouse."]}
  ],
  "m4-ex1": [
    { type: "steps", title: "Build and test a useful link set", items: [
      { title: "Connect pages in your project", content: "Add links to home.html and about.html using relative paths." },
      { title: "Add one external resource", content: "Choose a trustworthy site and use a label that describes it." },
      { title: "Offer a contact link", content: "Create a mailto link and display the recipient address nearby." },
      { title: "Add an in-page shortcut", content: "Point a link to a section with a matching unique id." },
      { title: "Test every destination", content: "Click each link, test keyboard focus, and fix any destination that fails." }
    ]},
    { type: "callout", tone: "example", title: "A good navigation test", content: "Ask someone to find a specific page using only your link labels. If they have to guess what “more” means, make the label clearer."}
  ]
};

for (const [lessonId, sections] of Object.entries(additionalLessonTeaching)) {
  const lesson = window.COURSE_CONTENT.lessons[lessonId];
  lesson.sections.push(...sections);
}

const moreLessonTeaching = {
  "m5-l1": [
    { type: "explanation", title: "Choose the right file and describe it", content: ["The img element embeds an image file in the page. Its src can be a relative path such as images/team.jpg or a complete URL. The browser must be able to reach that file, and the path must match the real folder and file name.", "The alt text is the text alternative. Describe the information the image adds, not every tiny visual detail. For a purely decorative image, use alt=\"\" so assistive technology can skip it."]},
    { type: "mistakes", title: "Image checks before you publish", items: [
      { wrong: `<img src="team.jpg">`, why: "No alternative text is supplied.", fix: `<img src="team.jpg" alt="The school robotics team at a competition">` },
      { wrong: `<img src="images/team.jpg" alt="image">`, why: "“Image” does not tell the visitor what the picture communicates.", fix: `<img src="images/team.jpg" alt="Students testing a small robot">` }
    ]},
    { type: "practice", title: "Add an image responsibly", steps: ["Place an image in your project's images folder.", "Add it with a correct src and useful alt text.", "Decide whether the image is informative or decorative.", "If it is decorative, use an empty alt value.", "Check the page when the path is temporarily changed so you can see what fallback information remains."]}
  ],
  "m5-l2": [
    { type: "explanation", title: "A linked image needs an accessible purpose", content: ["Wrap an img in an anchor when the image itself is a link. The image then becomes part of the link's clickable area. Visitors should still be able to understand where the link goes.", "If the image is the only content inside the link, its alt text should usually describe the destination or action. If visible text already gives the destination, use empty alt on a decorative image to avoid repeating the same label."]},
    { type: "code", title: "Make a logo link home", language: "html", code: `<a href="index.html">\n  <img src="images/logo.svg" alt="Acorn Garden home">\n</a>`, explanation: ["The anchor supplies the destination.", "The image alternative communicates that this is a link to the Acorn Garden home page."]},
    { type: "practice", title: "Link a picture", steps: ["Choose a small image or logo.", "Wrap it in an anchor that points to a useful destination.", "Write alt text that makes the link's purpose clear.", "Use keyboard Tab and Enter to test it."]}
  ],
  "m5-l3": [
    { type: "comparison", title: "Write alt according to the image's job", columns: [
      { title: "Informative image", points: ["Describe its important information", "Be concise and specific", "Do not start with “image of” unless that matters"] },
      { title: "Decorative image", points: ["Use alt=\"\" when it adds no information", "Do not omit alt entirely", "Keep decorative details out of the reading flow"] },
      { title: "Image link", points: ["Describe the destination or action", "Avoid repeating nearby visible link text", "Make the link understandable without seeing the picture"] }
    ]},
    { type: "callout", tone: "example", title: "Describe the reason it is on the page", content: "A photo of a red stop sign in a driving lesson might need alt like “Stop sign at a four-way junction.” The same photo used as a decorative banner could use empty alt if nearby text already explains the lesson."},
    { type: "practice", title: "Write three alternatives", steps: ["Choose an informative photo and write a short alt description.", "Choose a decorative flourish and decide why empty alt is suitable.", "Choose an image-only link and describe its destination.", "Ask a classmate whether each description gives enough useful context."]}
  ],
  "m5-ex1": [
    { type: "steps", title: "Build a small accessible gallery", items: [
      { title: "Collect a few images", content: "Use images you own or have permission to use, and keep the files in an images folder." },
      { title: "Write the page first", content: "Give the gallery a heading and a short introduction so the pictures have context." },
      { title: "Add one figure at a time", content: "Use img with a tested src, meaningful alt, and an optional figcaption." },
      { title: "Add a linked image", content: "Make one picture a link and ensure its alternative text explains the destination." },
      { title: "Test and refine", content: "Check a broken path, narrow screen, keyboard navigation, and image proportions." }
    ]},
    { type: "callout", tone: "warning", title: "Respect image rights", content: "Do not assume that an image found in a search is free to reuse. Use your own media or check the creator's licence and attribution requirements."}
  ],
  "m6-l1": [
    { type: "explanation", title: "Use an unordered list when sequence is not important", content: ["A ul groups related items whose order does not change their meaning. Each list item belongs inside an li element. Browsers provide bullets by default, but CSS can change how the list looks without changing what it means.", "A navigation menu is often marked up as a list because its links are a related set. The list structure remains useful to people navigating with assistive technology."]},
    { type: "code", title: "A list with grouped sub-items", language: "html", code: `<h2>Pack for the lesson</h2>\n<ul>\n  <li>Notebook</li>\n  <li>Computer\n    <ul>\n      <li>Charger</li>\n      <li>Headphones</li>\n    </ul>\n  </li>\n  <li>Water bottle</li>\n</ul>`, explanation: ["The nested list belongs inside the Computer list item.", "Nesting expresses a parent-and-child relationship."]},
    { type: "practice", title: "Group items that belong together", steps: ["Make an unordered list of five things for a hobby.", "Add a nested list under one item only if it has meaningful sub-items.", "Check that every li is inside a list.", "Read the list aloud and confirm order does not matter."]}
  ],
  "m6-l2": [
    { type: "explanation", title: "Use an ordered list when sequence matters", content: ["An ol groups items whose order is meaningful: instructions, rankings, or a sequence of steps. Each step belongs in an li. Browsers number the items automatically.", "Use start or reversed only when it helps represent the real sequence. Do not type numbers into paragraph text to imitate a list; a real list can be rearranged and read correctly by assistive technology."]},
    { type: "code", title: "A sequence of steps", language: "html", code: `<h2>Save your project</h2>\n<ol>\n  <li>Choose File → Save.</li>\n  <li>Name the file index.html.</li>\n  <li>Open it in your browser.</li>\n</ol>`, explanation: ["The browser supplies the numbering.", "Reordering the li elements also reorders the steps."]},
    { type: "practice", title: "Write instructions", steps: ["Choose a simple process you know.", "Write at least four steps in their actual order.", "Mark them up using ol and li.", "Change the order in the source and observe how the browser numbering updates."]}
  ],
  "m6-l3": [
    { type: "explanation", title: "A description list connects terms and explanations", content: ["A dl groups one or more terms with their descriptions. Write each term in dt and its description in dd. Unlike ul and ol, this list is not a collection of steps or bullet items; it is a set of name-and-value relationships.", "Description lists work well for a glossary, metadata, or a set of questions and answers. Use headings and paragraphs instead when that structure communicates the content more clearly."]},
    { type: "code", title: "A tiny web glossary", language: "html", code: `<dl>\n  <dt>HTML</dt>\n  <dd>Describes the structure and meaning of a web page.</dd>\n\n  <dt>CSS</dt>\n  <dd>Controls the presentation of a web page.</dd>\n</dl>`, explanation: ["Each dt is a term or name.", "The dd that follows describes that term.", "A term may have more than one description when needed."]},
    { type: "practice", title: "Create a glossary", steps: ["Choose three terms from a subject you know.", "Write one plain-language definition for each term.", "Mark up each pair with dt and dd inside dl.", "Read the page and check that every definition is clearly connected to its term."]}
  ],
  "m6-ex1": [
    { type: "comparison", title: "Choose the list that matches the meaning", columns: [
      { title: "Shopping list · ul", points: ["Items can be read in any order", "Bullets help scan the group", "Each item is an li"] },
      { title: "Recipe steps · ol", points: ["Sequence changes the result", "Numbering communicates order", "Each step is an li"] },
      { title: "Glossary · dl", points: ["Terms pair with descriptions", "dt names a term", "dd explains its meaning"] }
    ]},
    { type: "practice", title: "Create three purposeful lists", steps: ["Write a short unordered list of materials.", "Write an ordered list of steps for a task.", "Write a description list containing three terms.", "Nest one list only if an item truly has sub-items.", "Validate that each list uses the right child elements."]}
  ],
  "m7-l1": [
    { type: "explanation", title: "Separate meaning from appearance", content: ["HTML describes what the content is. CSS describes how it should look. Keeping those jobs separate means you can redesign a page without rewriting its content, and update many pages by changing a shared stylesheet.", "CSS also supports responsive layouts, hover and focus states, animation, and print styles. Good styling helps people understand and use a page; it is not only decoration."]},
    { type: "comparison", title: "Without CSS and with CSS", columns: [
      { title: "HTML alone", points: ["Content still has meaning", "Browser defaults provide a basic layout", "Pages may feel visually plain"] },
      { title: "HTML plus CSS", points: ["A consistent brand and type scale", "Layout can adapt to screen size", "Focus and contrast can improve usability"] }
    ]},
    { type: "practice", title: "Notice structure and presentation", steps: ["Write a heading, paragraph, and link in HTML.", "Add a CSS rule that changes their appearance.", "Remove the CSS link and reload.", "Describe what changed and what meaning remained."]}
  ],
  "m7-l2": [
    { type: "explanation", title: "Read a CSS rule from the outside in", content: ["A CSS rule has a selector and a declaration block. The selector chooses which elements to match. Each declaration has a property, a colon, a value, and usually a semicolon. Curly braces contain the declarations.", "For example, h1 { color: navy; } selects every h1 and sets its text colour. If a declaration is misspelled or its value is invalid, the browser generally ignores that declaration, so the page may still partly work."]},
    { type: "code", title: "Label the parts of a rule", language: "css", code: `.notice {\n  color: #164e63;\n  background-color: #ecfeff;\n  padding: 1rem;\n}`, explanation: [".notice is the selector.", "color is a property; #164e63 is its value.", "Each property-value pair is a declaration.", "The braces group all declarations for matching elements."]},
    { type: "mistakes", title: "Small syntax checks", items: [
      { wrong: `color #164e63;`, why: "The colon between property and value is missing.", fix: `color: #164e63;` },
      { wrong: `.notice { color: navy;`, why: "The closing brace is missing.", fix: `.notice { color: navy; }` }
    ]}
  ],
  "m7-l3": [
    { type: "explanation", title: "Selectors are patterns, not decoration", content: ["A selector identifies the elements a rule should style. A type selector such as p matches all paragraphs. A class selector such as .note can be reused on many elements. An id selector such as #main-title should identify one unique element in the document.", "Choose the narrowest selector that expresses the design intention without making the stylesheet fragile. Classes are usually a good everyday tool because they can be reused and have moderate specificity."]},
    { type: "comparison", title: "Common selector choices", columns: [
      { title: "Type · p", points: ["Matches every p element", "Useful for broad defaults", "Can affect many parts of a page"] },
      { title: "Class · .note", points: ["Reusable on many elements", "Good for component styles", "Use a clear name based on role"] },
      { title: "ID · #main", points: ["Matches the element with that id", "Useful for unique page targets", "Avoid using ids for repeated styles"] }
    ]},
    { type: "practice", title: "Predict selector matches", steps: ["Add two paragraphs, one with class note, and one heading with id main-title.", "Write a type, class, and id selector.", "Before running, list which elements each selector should match.", "Use the selector playground and compare your prediction."]}
  ],
  "m7-l4": [
    { type: "explanation", title: "Combinators describe relationships", content: ["A combinator joins selectors to describe where an element sits in relation to another element. A space selects a descendant at any depth. > selects a direct child. + selects the next sibling, while ~ selects later siblings that share a parent.", "Relationship selectors can express real structure, but long chains become difficult to maintain. Use a clear class when a relationship alone does not make the style intention obvious."]},
    { type: "code", title: "Descendant and child selectors", language: "css", code: `article p { color: #334155; }\n.card > h2 { margin-top: 0; }\nh2 + p { margin-top: 0; }`, explanation: ["article p matches any p nested somewhere inside article.", ".card > h2 matches only an h2 that is a direct child of .card.", "h2 + p matches a paragraph immediately after an h2 with the same parent."]},
    { type: "practice", title: "Build a small relationship test", steps: ["Create an article with a nested section and two paragraphs.", "Style all paragraphs in the article with a descendant selector.", "Change one rule to a direct-child selector.", "Observe which paragraphs stop matching and explain why."]}
  ],
  "m7-l5": [
    { type: "explanation", title: "The cascade resolves competing declarations", content: ["More than one CSS rule can set the same property. The browser considers where a declaration came from, whether it is important, cascade layers, selector specificity, and then source order. Specificity is only one part of the cascade.", "For selectors of comparable origin and importance, a more specific selector usually wins. If specificity is equal, the later rule wins. The browser's Styles panel shows overridden declarations and helps you trace the winner."]},
    { type: "steps", title: "Find out which rule wins", items: [
      { title: "Inspect the element", content: "Select it in Developer Tools and look at the Styles panel." },
      { title: "Find the property", content: "Look for every declaration that sets the property in question." },
      { title: "Read the cascade clues", content: "Compare origin, importance, layer, specificity, and source order." },
      { title: "Simplify the fix", content: "Prefer a clearer selector or remove a conflict instead of adding !important." }
    ]},
    { type: "callout", tone: "warning", title: "Specificity is not a score to keep increasing", content: "Adding ids and !important may appear to fix one rule but makes future changes harder. Keep selectors simple and remove conflicting declarations where possible."}
  ],
  "m7-l6": [
    { type: "steps", title: "How markup becomes pixels", items: [
      { title: "Parse the HTML", content: "The browser reads the document and builds a DOM tree of elements." },
      { title: "Parse the CSS", content: "It reads style rules and builds a CSS model, matching selectors to elements." },
      { title: "Calculate styles and layout", content: "The browser resolves the cascade, calculates sizes and positions, and decides where content fits." },
      { title: "Paint the result", content: "It draws text, borders, backgrounds, and images to the screen." },
      { title: "Run scripts and update", content: "JavaScript may change the DOM or styles, which can cause some work to happen again." }
    ]},
    { type: "explanation", title: "Browser defaults and your styles work together", content: "When you do not write a CSS rule, the browser still has built-in styles for readable headings, lists, links, and form controls. Your stylesheet adds to or overrides those defaults through the cascade. Developer Tools lets you inspect the computed result rather than guessing."},
    { type: "practice", title: "Inspect a computed style", steps: ["Select a paragraph in Developer Tools.", "Find its computed font size and margin.", "Locate the rule that supplied each value.", "Toggle that declaration and observe the page update."]}
  ],
  "m7-l9": [
    { type: "comparison", title: "Block grouping and inline grouping", columns: [
      { title: "div · block container", points: ["Starts a new block in normal flow", "Can group several elements", "Has no built-in semantic meaning"] },
      { title: "span · inline container", points: ["Sits within a line of text", "Wraps a small phrase or word", "Has no built-in semantic meaning"] }
    ]},
    { type: "code", title: "Use containers as styling hooks", language: "html", code: `<div class="profile-card">\n  <h2>Sam Rivera</h2>\n  <p>Learning <span class="topic">CSS</span> this week.</p>\n</div>`, explanation: ["The div groups the card for styling.", "The span targets one word without breaking the sentence into a new block.", "Use article or section instead if the group has that meaning."]},
    { type: "callout", tone: "warning", title: "Containers do not make content meaningful", content: "Adding class names to div elements helps CSS find them, but does not add semantic meaning for assistive technology. Pick a semantic element when one accurately describes the region."}
  ],
  "m7-l11": [
    { type: "comparison", title: "Choose a unit that fits the job", columns: [
      { title: "Fixed or absolute-ish", points: ["px for fine visual details", "Can be less flexible when zooming or changing text size", "Avoid assuming every device has the same density"] },
      { title: "Relative", points: ["rem scales from the root font size", "em scales from the current font context", "% often relates to a containing size", "vw and vh relate to viewport dimensions"] }
    ]},
    { type: "explanation", title: "Relative units help interfaces adapt", content: ["A rem-based type scale can respect a visitor's browser text settings. Percentages can let a column fill part of its parent. Viewport units can size a hero relative to the screen, but very large or small text based only on viewport size can hurt accessibility.", "Use units intentionally: rem for many spacing and font decisions, percentages for flexible relationships, and px where a small crisp detail is helpful."]},
    { type: "practice", title: "Compare sizes as the page changes", steps: ["Set a base font size on html.", "Create one text sample in px and one in rem.", "Change the root font size and compare.", "Resize the browser and observe a percentage-width card.", "Choose units that continue to work when text or screen size changes."]}
  ],
  "m7-l12": [
    { type: "comparison", title: "Some properties inherit; many do not", columns: [
      { title: "Often inherited", points: ["color", "font-family", "font-size", "line-height"] },
      { title: "Usually not inherited", points: ["margin and padding", "border", "width and height", "background"] }
    ]},
    { type: "explanation", title: "Inheritance passes selected values down the tree", content: ["A child element may inherit certain text-related properties from its parent. This is why setting the font family and text colour on body often gives the whole page a consistent baseline.", "Layout and box properties generally do not inherit: a paragraph should not automatically receive its parent's margin or border. Use inherit only when you deliberately want a property value passed down."]},
    { type: "practice", title: "Trace inherited text styles", steps: ["Set a colour and font family on a parent element.", "Add a nested heading and paragraph.", "Observe which values the children inherit.", "Add a border to the parent and check whether the child receives its own border.", "Use the Computed panel to inspect the source of a value."]}
  ],
  "m8-l1": [
    { type: "explanation", title: "A font stack gives the browser a fallback plan", content: ["font-family lists the preferred typeface first, followed by alternatives. If the first font is unavailable, the browser tries the next. Finish with a generic family so the browser always has a category to use.", "Names containing spaces need quotes. A system font stack avoids downloading an extra font and often fits the visitor's device naturally."]},
    { type: "code", title: "A practical system stack", language: "css", code: `body {\n  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;\n}\ncode {\n  font-family: "Courier New", monospace;\n}`, explanation: ["The browser tries families from left to right.", "sans-serif and monospace are generic fallback families.", "Use a monospace family for code where character alignment helps."]},
    { type: "practice", title: "Compare two typefaces", steps: ["Apply a serif stack to a heading.", "Apply a sans-serif stack to body text.", "Try a monospace family on a short code example.", "Check that each fallback still looks readable."]}
  ],
  "m8-l2": [
    { type: "code", title: "Load a local WOFF2 font", language: "css", code: `@font-face {\n  font-family: "Course Sans";\n  src: url("../fonts/course-sans.woff2") format("woff2");\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n}\nbody {\n  font-family: "Course Sans", system-ui, sans-serif;\n}`, explanation: ["The font-family name becomes the name you use in CSS rules.", "The url must point to a font file that exists relative to the stylesheet.", "font-display: swap allows fallback text to appear while the custom font loads."]},
    { type: "callout", tone: "warning", title: "Font files are project assets too", content: "A broken URL means the browser falls back to another font. Check the Network panel for a missing font request, and make sure you have permission to use the font file."},
    { type: "practice", title: "Test a custom font safely", steps: ["Place a licensed WOFF2 font in a fonts folder.", "Write an @font-face rule with the correct relative URL.", "Add at least one fallback family.", "Refresh and check the Network panel for a successful font request."]}
  ],
  "m8-l3": [
    { type: "explanation", title: "Set a type scale rather than random sizes", content: ["font-size controls the size of text. Relative rem values make a type scale easier to adjust and can respect the visitor's base text size. Use headings to communicate structure, then style their size to match the design.", "Text that is too small is difficult to read, and text enlarged only by CSS is not automatically a more important heading. Keep semantic heading levels and visual size separate."]},
    { type: "code", title: "A simple responsive type scale", language: "css", code: `html { font-size: 100%; }\nbody { font-size: 1rem; }\nh1 { font-size: clamp(2rem, 5vw, 3.5rem); }\nh2 { font-size: 1.75rem; }\nsmall { font-size: 0.875rem; }`, explanation: ["rem values scale from the root font size.", "clamp sets a minimum, preferred, and maximum size.", "Always check that text remains readable at zoom and on small screens."]},
    { type: "practice", title: "Build a small type scale", steps: ["Choose body, h2, and h1 sizes using rem.", "Keep the main heading visibly larger than section headings.", "Resize the viewport and test browser zoom.", "Adjust any size that becomes cramped or difficult to read."]}
  ],
  "m8-ex1": [
    { type: "steps", title: "Create a readable type system", items: [
      { title: "Choose families", content: "Pick a body font and heading font, each with a reliable generic fallback." },
      { title: "Set the hierarchy", content: "Choose body, small text, h2, and h1 sizes that are visibly related." },
      { title: "Set line spacing and weight", content: "Make paragraphs comfortable to read and headings clear without making everything bold." },
      { title: "Test real content", content: "Preview a long paragraph, a heading on a narrow screen, and your page at browser zoom." }
    ]},
    { type: "practice", title: "Review the type choices", steps: ["Check that the page remains readable without the preferred web font.", "Remove any decorative effect that lowers clarity.", "Ask a partner to identify the page title and section headings at a glance."]}
  ],
  "m9-l1": [
    { type: "explanation", title: "Colour communicates, so check who can perceive it", content: ["CSS color sets text colour; background-color sets a background; border-color sets a border. Colour can guide attention or express a brand, but colour alone should not carry essential meaning.", "Opacity makes an element translucent. Lower opacity can reduce contrast and may also fade child content. Choose readable combinations and use another cue, such as a label or icon, when colour indicates status."]},
    { type: "comparison", title: "A colour is not a meaning by itself", columns: [
      { title: "Weak status cue", points: ["A red dot alone means “error”", "Some visitors cannot distinguish the colour", "The reason for the status is unclear"] },
      { title: "Clear status cue", points: ["A red icon plus “Payment failed”", "Text names the actual issue", "Colour reinforces rather than carries the message"] }
    ]},
    { type: "practice", title: "Audit a status message", steps: ["Create a success and an error message.", "Give each one a colour and a written label.", "View them in grayscale or imagine red and green look alike.", "Check that the meaning is still clear."]}
  ],
  "m9-l2": [
    { type: "explanation", title: "Four familiar ways to describe a colour", content: ["Named colours are easy to read but limited to the names browsers recognise. Hexadecimal values describe red, green, and blue channels. rgb() uses those channels directly. hsl() describes hue, saturation, and lightness, which can be easier to adjust by eye.", "Modern CSS also supports alpha transparency in colour functions. This often makes a translucent background more useful than opacity on the whole element, because child text can stay fully opaque."]},
    { type: "comparison", title: "The same blue, different notation", columns: [
      { title: "Named", points: ["royalblue", "Easy to read", "Limited set of names"] },
      { title: "Hex and RGB", points: ["#4169e1", "rgb(65 105 225)", "Direct red, green, blue channels"] },
      { title: "HSL", points: ["hsl(225 73% 57%)", "Hue, saturation, lightness", "Often convenient for colour variations"] }
    ]},
    { type: "code", title: "Add transparency to only the background", language: "css", code: `.notice {\n  background-color: rgb(37 99 235 / 15%);\n  color: #0f172a;\n}`, explanation: ["The alpha value makes the background colour translucent.", "Unlike opacity on the whole notice, the text colour remains fully opaque."]}
  ],
  "m9-l3": [
    { type: "explanation", title: "The color property sets foreground text colour", content: ["The color property changes text and other foreground details that inherit colour, including many borders and text decorations. It is separate from background-color, which paints behind the content.", "When you choose a text colour, check it against the actual background. A brand colour that looks bright in a palette may be too pale for small text on white."]},
    { type: "code", title: "Pair text and background intentionally", language: "css", code: `.card {\n  color: #1e293b;\n  background-color: #f8fafc;\n}\n.card a {\n  color: #1d4ed8;\n}`, explanation: ["The card sets a readable default text colour.", "The link uses a distinct colour, but should also have a non-colour cue such as an underline or focus style."]},
    { type: "practice", title: "Check a palette in context", steps: ["Choose a text and background colour.", "Apply them to a paragraph rather than a colour swatch.", "Check a link and keyboard focus state.", "Adjust the colours if small text is difficult to read."]}
  ],
  "m9-l4": [
    { type: "comparison", title: "Element opacity or colour alpha?", columns: [
      { title: "opacity: .5", points: ["Makes the whole element translucent", "Child text and icons fade too", "Useful when the entire element should fade"] },
      { title: "alpha in a colour", points: ["Makes only that colour translucent", "Text can remain fully opaque", "Useful for a soft background tint"] }
    ]},
    { type: "code", title: "Keep the text solid", language: "css", code: `.notice {\n  background: rgb(16 185 129 / 18%);\n  color: #064e3b;\n}\n.disabled-preview {\n  opacity: 0.5;\n}`, explanation: ["The first rule fades only the background paint.", "The second rule fades the entire element and its descendants."]},
    { type: "callout", tone: "warning", title: "Do not fade important instructions", content: "Low opacity can make text hard to read, especially on a changing background. If a control is disabled, communicate that state clearly and make sure its label is still legible."}
  ],
  "m9-ex1": [
    { type: "steps", title: "Apply colour with contrast in mind", items: [
      { title: "Choose a small palette", content: "Pick a text colour, background colour, one accent, and a secondary colour." },
      { title: "Apply the roles", content: "Use the text colour for body copy, the accent for actions or links, and the background for the reading surface." },
      { title: "Add meaning in words", content: "Give status messages a clear label as well as a colour." },
      { title: "Test opacity carefully", content: "Use a translucent background tint without fading the text unless the entire element should be transparent." }
    ]},
    { type: "practice", title: "Review your colour choices", steps: ["Check text against its background at normal size.", "Check buttons, links, hover, and focus states.", "Temporarily inspect the page in grayscale.", "Adjust the palette until content remains clear and distinguishable."]}
  ],
  "m10-l2": [
    { type: "explanation", title: "Align text for the way people read it", content: ["text-align positions inline content within its block. Left alignment is a reliable choice for many left-to-right paragraphs because the start of each line is easy to find. Center alignment often works for short headings, while long centered paragraphs are harder to scan.", "Logical values such as start and end can adapt better to languages that read in different directions. Alignment does not change the semantic order of the content."]},
    { type: "code", title: "Use alignment with intention", language: "css", code: `article p { text-align: start; }\n.hero h1 { text-align: center; }\n.price { text-align: end; }`, explanation: ["start and end follow the writing direction.", "Center short titles or callouts, not every paragraph."]},
    { type: "practice", title: "Compare reading comfort", steps: ["Write a paragraph of at least four lines.", "Compare start, center, and end alignment.", "Choose the easiest alignment to read.", "Use a different alignment only where it helps the page's hierarchy."]}
  ],
  "m10-l3": [
    { type: "explanation", title: "Decoration adds lines, not meaning", content: ["text-decoration can add an underline, overline, or line-through. Links are often underlined because the line helps visitors recognise them. You can change the style and colour, but keep links identifiable and provide a visible keyboard focus state.", "Do not use line-through alone to communicate that a price or task is no longer valid. Add text or another status cue so the meaning is clear."]},
    { type: "code", title: "Style a link without hiding it", language: "css", code: `a {\n  color: #1d4ed8;\n  text-decoration: underline;\n  text-decoration-thickness: 0.08em;\n  text-underline-offset: 0.15em;\n}\na:focus-visible {\n  outline: 3px solid #f59e0b;\n}`, explanation: ["The underline makes links recognisable without relying only on colour.", "A focus outline helps keyboard users identify the active link."]},
    { type: "practice", title: "Check your links", steps: ["Style a link's underline thickness and offset.", "Tab to the link and check its focus indicator.", "Make sure the link still looks different from surrounding text.", "Check that the underline is not used to suggest a link where no link exists."]}
  ],
  "m10-l6": [
    { type: "explanation", title: "Break long text without damaging normal words", content: ["word-break controls where words may break at line ends. Normal keeps words intact where possible. break-all allows breaks between almost any characters, which can make ordinary sentences unpleasant to read.", "For a long URL or code token that overflows a narrow card, overflow-wrap: anywhere is often a better first choice: it breaks only when needed to prevent overflow."]},
    { type: "comparison", title: "Choose a wrapping tool", columns: [
      { title: "overflow-wrap: anywhere", points: ["Breaks a long unbreakable string when needed", "Keeps ordinary words intact", "A useful safeguard for URLs"] },
      { title: "word-break: break-all", points: ["Can break at nearly any character", "May split ordinary words", "Use only when that behaviour is intended"] }
    ]},
    { type: "code", title: "Prevent a long link from escaping its card", language: "css", code: `.resource-link {\n  overflow-wrap: anywhere;\n}`, explanation: ["The link can wrap when its full URL cannot fit.", "The rest of the paragraph retains normal word wrapping."]}
  ],
  "m10-ex1": [
    { type: "steps", title: "Polish an article without sacrificing readability", items: [
      { title: "Set a clear hierarchy", content: "Choose alignment and decoration that distinguish a title, body text, and links." },
      { title: "Tune spacing carefully", content: "Use small letter and word spacing adjustments; read the text at normal size." },
      { title: "Protect long content", content: "Use sensible wrapping for long URLs and preserve spaces only where they matter." },
      { title: "Check on a phone-sized viewport", content: "Look for overflow, clipped text, and headings that wrap awkwardly." }
    ]},
    { type: "practice", title: "Explain one design decision", steps: ["Pick one text property you used.", "Describe what problem it solves for a reader.", "Show how the page looks before and after.", "Remove any effect that adds decoration but reduces clarity."]}
  ],
  "m11-l1": [
    { type: "explanation", title: "A language and its standard", content: ["JavaScript is the name people commonly use for the programming language. ECMAScript is the standard that specifies its core syntax and behaviour. Browser makers implement that standard, then provide browser APIs such as the DOM and fetch.", "This distinction explains why the same JavaScript language can run in browsers and other environments while the extra capabilities differ. A browser has document and window; a server runtime may have different APIs."]},
    { type: "comparison", title: "Language features or environment features?", columns: [
      { title: "ECMAScript language", points: ["Variables and functions", "Arrays and objects", "Conditions, loops, and modern syntax"] },
      { title: "Browser APIs", points: ["document and the DOM", "Events and browser storage", "Network requests and browser interfaces"] }
    ]},
    { type: "callout", tone: "tip", title: "A practical way to say it", content: "You write JavaScript that follows the ECMAScript standard and uses APIs supplied by the environment, such as a web browser."}
  ],
  "m11-l3": [
    { type: "explanation", title: "JavaScript is precise about spelling and values", content: ["JavaScript is case-sensitive: message, Message, and MESSAGE are three different names. A statement is an instruction. Expressions produce values, and braces group the body of a function or condition.", "Use const when a variable binding will not be reassigned, and let when it will. Strings use quotes or backticks; numbers do not. Indentation is not required by the language, but consistent formatting makes mistakes easier to spot."]},
    { type: "code", title: "Read each line as a small instruction", language: "javascript", code: `const learner = "Amina";\nlet lessonsDone = 0;\n\nlessonsDone = lessonsDone + 1;\nconsole.log(learner, lessonsDone);`, explanation: ["const declares a binding that will not be reassigned.", "let is used because lessonsDone changes.", "The plus operator adds one to the current number.", "console.log writes a debugging message to the browser console."]},
    { type: "mistakes", title: "Common first-week errors", items: [
      { wrong: `const score = 0; score = 1;`, why: "A const binding cannot be reassigned.", fix: `let score = 0; score = 1;` },
      { wrong: `console.Log("Hi");`, why: "JavaScript names are case-sensitive.", fix: `console.log("Hi");` }
    ]},
    { type: "practice", title: "Predict, run, and change", steps: ["Predict what the example logs before running it.", "Change the learner name and predict again.", "Change let to const and observe what happens when you try to reassign it.", "Read any error in the browser console and identify the line."]}
  ],
  "m11-l4": [
    { type: "explanation", title: "Select an element before changing it", content: ["The DOM is the browser's object representation of the current HTML document. JavaScript can find an element with methods such as getElementById or querySelector, then read or update its text, attributes, classes, or event handlers.", "querySelector returns the first match or null if nothing matches. Always use an id or selector that actually exists, and check the result before calling methods on it."]},
    { type: "code", title: "Select, check, and update", language: "javascript", code: `const heading = document.querySelector("#welcome-title");\n\nif (heading) {\n  heading.textContent = "Welcome back!";\n}`, explanation: ["querySelector accepts a CSS selector.", "The if check handles the possibility that no matching element exists.", "textContent replaces text safely without parsing it as HTML."]},
    { type: "mistakes", title: "If nothing happens", items: [
      { wrong: `document.querySelector("welcome-title")`, why: "This looks for an element named welcome-title, not an id.", fix: `document.querySelector("#welcome-title")` },
      { wrong: `heading.innerHTML = userText`, why: "Treating untrusted text as HTML can create security problems.", fix: `heading.textContent = userText` }
    ]},
    { type: "practice", title: "Find an element and change it", steps: ["Add a heading with a unique id.", "Select it with querySelector.", "Update its text when a button is clicked.", "Try a selector that does not match and handle the null result safely."]}
  ],
  "m11-l5": [
    { type: "comparison", title: "Three places JavaScript can appear", columns: [
      { title: "Inline handler", points: ["JavaScript in an HTML attribute", "Quick to demonstrate", "Mixes behaviour into markup; avoid for normal projects"] },
      { title: "Script block", points: ["JavaScript inside a script element", "Useful for a tiny standalone example", "Can make a large HTML file harder to maintain"] },
      { title: "External file", points: ["JavaScript in a separate .js file", "Reusable and easier to organise", "Use defer or a suitable module strategy"] }
    ]},
    { type: "code", title: "Load an external script after HTML parsing", language: "html", code: `<script src="js/app.js" defer></script>`, explanation: ["src points to the JavaScript file.", "defer lets the browser download the file while parsing and runs it after the document is parsed.", "The path is relative to the HTML document."]},
    { type: "practice", title: "Move behaviour out of HTML", steps: ["Create a js folder and app.js.", "Move a short click handler into the external file.", "Load it using a script element with defer.", "Check the browser console for a missing-file error or syntax error."]}
  ],
  "m11-l6": [
    { type: "comparison", title: "A property stores or exposes a value; a method performs an action", columns: [
      { title: "Property", points: ["heading.textContent", "button.disabled", "document.title"] },
      { title: "Method", points: ["classList.add()", "element.remove()", "console.log()"] }
    ]},
    { type: "explanation", title: "Read the dot and parentheses", content: ["An object groups related information and behaviour. The dot operator accesses one of its properties or methods. A property is usually read or assigned as a value; a method is called with parentheses.", "For example, heading.textContent reads the heading's text property. heading.classList.add(\"highlight\") calls the add method with a value. The exact available properties and methods depend on the object."]},
    { type: "practice", title: "Label the expressions", steps: ["Find a line that reads a property.", "Find a line that calls a method with parentheses.", "Change a property value and observe the result.", "Add a class with classList.add and remove it with classList.remove."]}
  ],
  "m11-ex1": [
    { type: "explanation", title: "Change the page through the DOM", content: ["A browser alert is useful for a tiny demonstration, but it interrupts the visitor. document.write can replace a document after it has loaded, so it is rarely appropriate for modern interaction. Prefer selecting an element and updating it with DOM methods.", "For this exercise, keep the interaction visible and reversible: a button changes the background, and another button updates a heading. This makes the result easy to test without reloading the page."]},
    { type: "mistakes", title: "Choose modern, predictable updates", items: [
      { wrong: `document.write("Welcome");`, why: "After a page loads, this can replace the document.", fix: `document.querySelector("#message").textContent = "Welcome";` },
      { wrong: `document.body.style.background = userInput;`, why: "Avoid using unchecked values as styles.", fix: `document.body.classList.toggle("highlighted");` }
    ]},
    { type: "practice", title: "Make a small interactive page", steps: ["Create a heading and two buttons.", "Attach click listeners from an external or playground script.", "Change the heading with textContent.", "Toggle a CSS class to change the background.", "Use alert only as a brief experiment, then replace it with an inline page message."]}
  ]
};

for (const [lessonId, sections] of Object.entries(moreLessonTeaching)) {
  const lesson = window.COURSE_CONTENT.lessons[lessonId];
  lesson.sections.push(...sections);
}

const focusedLessonTeaching = {
  "m4-l7": [
    { type: "explanation", title: "Build an in-page table of contents", content: ["A fragment link moves to an element in the current document. Give the destination a unique id, then put that exact value after # in the link. IDs are case-sensitive in practice, must be unique on the page, and should not contain spaces.", "The browser updates the URL fragment and scrolls the target into view. This works without JavaScript and also lets visitors copy a link directly to a section. A matching id is essential; a misspelled fragment has nowhere to go."]},
    { type: "code", title: "Link to a section and back again", language: "html", code: `<nav aria-label="On this page">\n  <a href="#materials">Jump to materials</a>\n</nav>\n\n<h2 id="materials">Materials</h2>\n<p>Gather a notebook and pencil.</p>\n<a href="#top">Back to top</a>`, explanation: ["Put id=\"top\" on the page's top landmark for the return link.", "Keep link text specific so the destination is clear.", "For long pages, use a semantic navigation landmark for the table of contents."]},
    { type: "practice", title: "Create and test two page shortcuts", steps: ["Add two headings with different, descriptive id values.", "Create a link for each heading using href=\"#that-id\".", "Click each link and check that the matching heading appears.", "Change one character in a fragment temporarily and observe the broken destination.", "Copy a working fragment URL and open it in a fresh tab."]}
  ],
  "m7-l7": [
    { type: "comparison", title: "A reset is a baseline, not a finished design", columns: [
      { title: "Useful reset choices", points: ["Make box sizing predictable", "Remove only unwanted default margins", "Make media elements fit their containers"] },
      { title: "Avoid removing blindly", points: ["Keep keyboard focus indicators visible", "Do not erase useful list or heading structure without a replacement", "Add readable typography and spacing after the reset"] }
    ]},
    { type: "practice", title: "Test the reset instead of guessing", steps: ["View a page with and without your reset.", "Check heading, paragraph, list, and form-control spacing.", "Use Tab to confirm that interactive controls still show focus.", "Add back only the spacing or visual defaults your design needs."]}
  ],
  "m7-ex1": [
    { type: "explanation", title: "Know what success looks like", content: ["When the stylesheet is connected, a rule in styles.css changes the page after refresh without adding style attributes to each element. If it does not, check the Network panel for a failed CSS request and confirm the path is relative to the HTML file.", "Keep the HTML link in the head and use rel=\"stylesheet\". A filename or folder typo is more common than a CSS selector problem, so test the connection with an obvious temporary colour before debugging detailed styles."]}
  ],
  "m7-ex2": [
    { type: "explanation", title: "Use an embedded stylesheet for a one-page experiment", content: ["An embedded stylesheet is a style element inside the document head. It is useful for a small exercise or a page-specific demonstration, but the styles are not automatically shared with other pages. For a site with several pages, an external stylesheet is usually easier to maintain.", "Put CSS rules inside the style element, not in the body. The browser reads the rules and applies selectors to matching elements; if no style changes, check both the selector and the placement of the style element."]}
  ],
  "m7-ex3": [
    { type: "comparison", title: "Inline styles are direct but hard to reuse", columns: [
      { title: "Inline style", points: ["Lives on one HTML element", "Can demonstrate one quick change", "Repeating or editing many values becomes tedious"] },
      { title: "Stylesheet rule", points: ["Targets elements using a selector", "Can be reused across matching elements", "Keeps appearance separate from content"] }
    ]},
    { type: "practice", title: "Compare an inline style with a rule", steps: ["Add a heading with a temporary style attribute.", "Move the same colour and font-size into a CSS rule.", "Add a second heading and apply the same rule.", "Remove the inline style and confirm the shared rule still works.", "Use inline styles only as a learning step; prefer CSS rules for the finished page."]}
  ],
  "m8-l4": [
    { type: "explanation", title: "Italic appearance and meaningful emphasis are different jobs", content: ["font-style accepts normal, italic, and—in suitable typefaces—oblique. Italic is usually a designed companion shape; oblique is generally a slanted version of upright letters. If the chosen font has no italic face, the browser may synthesize one.", "Use em in HTML when a phrase deserves emphasis, then style that semantic meaning with CSS. Use a class for italic appearance that is purely decorative. Set font-style: normal when you need to cancel an inherited italic style."]}
  ],
  "m8-l6": [
    { type: "explanation", title: "Small capitals are a typographic treatment", content: ["font-variant: small-caps displays lowercase letters as smaller capital-shaped forms while keeping the original text and its case intact. The effect depends on the font: a typeface with real small-cap glyphs can look better than one where the browser scales regular capitals.", "Use this for short labels or stylistic details, not to communicate that a word is more important. Screen readers still encounter the original text, and copying the text preserves its original case."]}
  ],
  "m8-l8": [
    { type: "explanation", title: "The shorthand has required parts and resets omitted values", content: ["The font shorthand can combine style, variant, weight, stretch, size, line-height, and family. The font-size and font-family are required; optional settings such as line-height go after the size separated by a slash. Put the family last.", "A shorthand declaration resets font-related sub-properties that you leave out. That can unexpectedly undo a font-variant or line-height set earlier, so keep related declarations together and inspect the computed styles when the result surprises you."]}
  ],
  "m10-l1": [
    { type: "explanation", title: "Adjust spacing carefully for readability", content: ["letter-spacing changes the space between characters; word-spacing changes the space between words. Both accept lengths such as 0.05em, which scales with the text size. Normal restores the font's usual spacing.", "A small adjustment can help a short uppercase label, but widely spaced paragraphs are slower to read. Avoid shrinking or stretching spacing to make text fit a fixed box; let content wrap and make sure users can still zoom without losing words."]}
  ],
  "m10-l4": [
    { type: "explanation", title: "Indent paragraphs; use shadows as decoration", content: ["text-indent adds space before the first line of a block, not before every wrapped line. A positive length moves the first line inward; a negative value can create a hanging indent, but may push words out of view if the layout is too narrow.", "text-shadow takes horizontal offset, vertical offset, blur radius, and colour. A subtle shadow can add depth, but a strong shadow behind body text reduces clarity. Check the text against its background and do not use shadow as the only way to distinguish important content."]}
  ],
  "m10-l5": [
    { type: "explanation", title: "Transform the display, not the stored words", content: ["text-transform can display text in uppercase, lowercase, or title-style capitalization without changing the text in the HTML. Keep the source text in its natural, correctly capitalized form so copying, search, and assistive technology have meaningful content.", "white-space controls how spaces and line breaks are handled. The default normal collapses repeated spaces and wraps text; pre preserves whitespace; nowrap prevents wrapping and can cause horizontal overflow. Use nowrap only when the surrounding layout can safely fit the content."]}
  ],
  "m10-l7": [
    { type: "code", title: "Compare word spacing with normal text", language: "html", code: `<p class="normal">A little space helps words stay distinct.</p>\n<p class="spaced">A little space helps words stay distinct.</p>`, explanation: ["Add .spaced { word-spacing: 0.2em; } in CSS and compare both lines.", "em scales the extra gap with the current font size.", "Use a subtle change; excess spacing makes a sentence harder to scan."]},
    { type: "practice", title: "Tune and evaluate the spacing", steps: ["Try normal, 0.1em, and 0.3em on the same sentence.", "Read each version at normal zoom and on a narrow screen.", "Choose the smallest value that improves your intended design.", "Reset the property to normal if spacing harms readability."]}
  ],
  "m11-l2": [
    { type: "explanation", title: "Read the document as a tree of relationships", content: ["The DOM represents nested HTML as a tree. The html element is the root; head and body are its children; headings and paragraphs are descendants of body. Elements next to one another under the same parent are siblings.", "These relationships help you reason about selectors and JavaScript. A parent groups its children, while a child can have its own descendants. The browser builds this model from the HTML source, so inspect the Elements panel to see the parsed structure rather than expecting the source to remain a flat string."]}
  ]
};

for (const [lessonId, sections] of Object.entries(focusedLessonTeaching)) {
  const lesson = window.COURSE_CONTENT.lessons[lessonId];
  lesson.sections.push(...sections);
}

const lessonKnowledgeChecks = {
  "m1-l1": ["A page has meaningful headings but no visual styling or click behaviour. Which teammate's work is present?", ["HTML", "CSS", "JavaScript", "The database"], 0, "HTML supplies the document's structure and meaning; CSS controls presentation and JavaScript adds behaviour."],
  "m1-l2": ["Where does client-side JavaScript normally run?", ["In the visitor's browser", "Only on the web server", "Inside the DNS system", "In the HTML file system"], 0, "Client-side code runs in the browser, where it can respond to interaction and update the displayed page."],
  "m1-l3": ["Which task is best handled on a server?", ["Checking credentials against a private database", "Changing a button colour on hover", "Moving the pointer cursor", "Showing a local CSS animation"], 0, "Private data access and trusted validation belong on the server; the browser should not receive secrets."],
  "m1-l4": ["Which description correctly places the core web technologies?", ["HTML structures content, CSS styles it, JavaScript adds behaviour", "CSS stores data, HTML runs servers, JavaScript draws every image", "JavaScript replaces the need for HTML and CSS", "HTML controls server security and CSS validates accounts"], 0, "HTML, CSS, and JavaScript have related but distinct roles and are commonly used together."],
  "m2-ex1": ["What makes a basic HTML document complete?", ["A doctype, html root, head metadata, and body content", "A body element only", "A CSS rule and a JavaScript alert", "A heading placed before the doctype"], 0, "The document skeleton gives the browser standards mode, a root, document metadata, and visible content."],
  "m2-l2": ["Which is a correctly written HTML attribute?", ["<a href=\"about.html\">About</a>", "<a>href=\"about.html\" About</a>", "<a href about.html>About</a>", "<href a=\"about.html\">About</a>"], 0, "An attribute is written in the opening tag as a name and value; comments use a separate comment syntax."],
  "m2-l3": ["Where should a page's visible heading be placed?", ["Inside body", "Inside head", "Inside the doctype", "After the closing html tag"], 0, "The body contains rendered page content; the head contains document metadata and linked resources."],
  "m2-l4": ["Why can a browser's rendered page differ from its source?", ["The browser parses markup and applies CSS and scripts to create the current page", "The source always contains the final pixels", "Browsers ignore HTML elements", "The rendered page is a screenshot of the source text"], 0, "View Source shows the delivered markup; the rendered view reflects browser parsing, styles, and script changes."],
  "m2-l5": ["How should a literal < character appear as ordinary page text in HTML?", ["&lt;", "<", "<tag>", "&less;"], 0, "The &lt; character reference represents a less-than sign without starting a tag."],
  "m2-l8": ["What does the character reference &amp; display in page text?", ["An ampersand (&)", "A less-than sign", "A quotation mark only", "A line break"], 0, "Character references let HTML display reserved symbols without confusing them with markup."],
  "m2-l6": ["Why is modern HTML generally called HTML Living Standard rather than a frozen HTML5 version?", ["The standard is maintained and updated over time", "HTML no longer has rules", "Every browser invents unrelated HTML", "HTML5 only works on phones"], 0, "The living standard evolves through ongoing maintenance while preserving interoperable web-platform rules."],
  "m2-l7": ["What is a key reason to declare lang=\"en\" on an English document?", ["Assistive technology and browsers can identify the document language", "It translates every word automatically", "It changes the page URL", "It selects the server location"], 0, "The language declaration helps pronunciation tools and other software interpret text correctly."],
  "m3-l1": ["How does HTML treat several spaces and line breaks in ordinary paragraph text?", ["It usually collapses them to a single space", "It preserves every space exactly", "It converts each space to a paragraph", "It removes all whitespace"], 0, "Normal HTML text collapses whitespace; use separate paragraphs or a suitable preformatted element when needed."],
  "m3-l2": ["What is the best reason to choose heading levels in order?", ["They communicate the document's nested outline to people and assistive technology", "Each level has a mandatory font size", "Headings create automatic page breaks", "Search engines require six headings"], 0, "Heading levels describe hierarchy; CSS can style their appearance independently."],
  "m3-l3": ["Which element is appropriate for a thematic shift between sections?", ["<hr>", "<br>", "<span>", "<meta>"], 0, "hr represents a thematic break; br is only a line break within content."],
  "m3-ex1": ["Which structure gives an article a clear, accessible outline?", ["One descriptive h1, nested section headings, and paragraphs", "Many h1 elements used only to enlarge text", "Paragraphs made from repeated br elements", "A page containing only div elements with no labels"], 0, "A logical heading hierarchy communicates the article structure and paragraphs mark prose."],
  "m3-l4": ["When is a div the best choice?", ["When no more meaningful semantic element fits the grouping", "For every paragraph and heading", "Whenever text should be emphasized", "To create a link"], 0, "div is a generic grouping container; use semantic elements when they convey the content's purpose."],
  "m3-l5": ["Which element is suited to a long quotation attributed to another source?", ["blockquote", "q", "em", "cite as a wrapper for the quoted passage"], 0, "blockquote marks an extended quotation; q is intended for a short inline quotation."],
  "m3-l6": ["Why use pre around a code sample whose spacing matters?", ["It preserves whitespace and line breaks in the displayed text", "It executes the code", "It adds syntax highlighting automatically", "It turns the sample into a heading"], 0, "pre preserves formatting whitespace; code can mark the content as a code sample inside it."],
  "m3-l7": ["Which pair marks meaning rather than only visual appearance?", ["strong and em", "big and italic font styling", "div and span", "br and hr"], 0, "strong and em convey importance and emphasis; presentation can then be styled separately."],
  "m3-l8": ["What should you do after combining page structure and text in an HTML document?", ["Open it in a browser and inspect the result and structure", "Assume every tag is correct because it saved", "Put all visible text in head", "Replace semantic markup with spaces"], 0, "A browser check reveals rendering issues, while inspecting the structure helps catch markup mistakes."],
  "m3-ex2": ["Which markup emphasizes a word for meaning, not just appearance?", ["<em>carefully</em>", "<span style=\"font-style:italic\">carefully</span>", "<br>carefully", "<small>carefully</small>"], 0, "em communicates stress emphasis; CSS can control its visual presentation."],
  "m4-l1": ["What does an HTML hyperlink primarily provide?", ["A navigable destination", "A new heading level", "A CSS selector", "A form validation rule"], 0, "An anchor with a destination lets users navigate to another resource or location."],
  "m4-l2": ["Which link label is most useful out of context?", ["Read the HTML forms guide", "Click here", "More", "This"], 0, "Descriptive link text communicates the destination and supports keyboard and assistive-technology users."],
  "m4-l3": ["If about.html sits beside index.html, which href is a suitable relative path?", ["about.html", "/about.html on every host", "https://about.html", "#about.html"], 0, "A sibling file is reached by its filename relative to the current document."],
  "m4-l4": ["Which safe pattern opens an external destination in a new tab?", ["target=\"_blank\" with rel=\"noopener noreferrer\"", "target=\"_self\" with no href", "rel=\"_blank\" alone", "onclick=\"open the link\""], 0, "target chooses a new browsing context; noopener prevents access through window.opener."],
  "m4-l5": ["What happens when a visitor activates a mailto link?", ["Their configured email handler opens a draft; it does not send automatically", "The page sends email without consent", "The browser creates an email account", "The link submits a database form"], 0, "mailto requests an email handler and gives the visitor a chance to review the draft."],
  "m4-ex1": ["Which set makes a link useful and testable?", ["Meaningful labels, correct destinations, and checking each link", "Using “click here” for every destination", "Leaving href empty on every anchor", "Adding title text instead of a destination"], 0, "Check every destination and make labels meaningful; use the correct URL type for each link."],
  "m4-l8": ["What should happen to Lorem Ipsum before publishing a real page?", ["Replace it with accurate content for the intended audience", "Leave it as permanent product information", "Use it as an HTML element", "Convert it into a link target"], 0, "Placeholder copy helps test layout but does not communicate a real site's message."],
  "m4-l6": ["Where should essential link instructions go?", ["In visible link text or nearby content", "Only in the title tooltip", "Only in a hover effect", "Only in a filename"], 0, "Title tooltips are not reliably available to touch, keyboard, or screen-reader users."],
  "m4-l7": ["How does href=\"#materials\" find its destination?", ["It matches an element whose unique id is materials", "It searches for text reading materials", "It opens a file named materials", "It creates an id automatically"], 0, "A fragment link refers to the element with the matching id in the document."],
  "m4-l9": ["For a link to a section on another page, which pattern is correct?", ["href=\"guide.html#setup\" and id=\"setup\" on the target", "href=\"guide.html\" and id=\"setup\" on the link only", "href=\"#guide.html\" with no target id", "href=\"setup\" and an unrelated id"], 0, "The URL names the document and fragment; the target document needs a matching unique id."],
  "m5-l1": ["Which two attributes are central to an informative image element?", ["src and alt", "href and target", "id and class", "width and title only"], 0, "src identifies the image resource; alt supplies an appropriate text alternative."],
  "m5-l2": ["If an image is the only content inside a link, what should its alt text usually communicate?", ["The link's destination or action", "The file extension only", "That it is an image", "Nothing, by omitting alt"], 0, "For an image link, its accessible name should communicate what activating the link does."],
  "m5-l4": ["Why is max-width: 100%; height: auto; a useful image rule?", ["It lets an image shrink to its container while preserving its ratio", "It forces every image to fill the screen", "It crops the image into a square", "It changes the image file on disk"], 0, "The maximum width prevents overflow and automatic height preserves the original aspect ratio."],
  "m5-ex1": ["Which check helps catch a broken local image?", ["Verify the relative path and confirm the image loads in the browser", "Change alt text until the file appears", "Add target=\"_blank\" to img", "Put the image filename in a heading"], 0, "A correct path and a browser/network check verify the resource actually loads."],
  "m5-l3": ["When is alt=\"\" appropriate?", ["For a decorative image that adds no information", "For every important diagram", "When the image file is missing", "When an image is the only label on a link"], 0, "An empty alternative tells assistive technology to skip a purely decorative image."],
  "m6-l1": ["Which list is appropriate when item order does not matter?", ["ul with li items", "ol with li items", "dl with dt only", "p elements separated by br"], 0, "ul represents an unordered collection; each list item uses li."],
  "m6-l2": ["Which element communicates a sequence where order matters?", ["ol", "ul", "dl", "span"], 0, "An ordered list represents ranked or sequential items and can be numbered by the browser."],
  "m6-l3": ["Which elements form a term-description group?", ["dl containing dt and dd", "ul containing dt and dd", "ol containing h1 and p", "table containing only li"], 0, "A description list groups terms (dt) with their descriptions (dd) inside dl."],
  "m6-ex1": ["How should you choose among ul, ol, and dl?", ["Use ul for unordered items, ol for meaningful sequence, and dl for terms and descriptions", "Choose by the bullet shape you prefer", "Use ol for every collection", "Use dl only to indent paragraphs"], 0, "Select list semantics based on the relationship between the items, then style the appearance with CSS."],
  "m7-l1": ["What is a central benefit of separating CSS from HTML?", ["Shared presentation can be changed without rewriting page content", "It prevents browsers from parsing HTML", "It makes CSS responsible for page meaning", "It removes the need to test layouts"], 0, "Separating concerns makes design easier to reuse and maintain while HTML retains structure."],
  "m7-l2": ["Which part of a CSS rule selects the elements to style?", ["The selector", "The declaration value", "The semicolon", "The stylesheet filename"], 0, "A selector identifies matching elements; declarations inside braces set property values."],
  "m7-l3": ["Which selector targets elements with class=\"notice\"?", [".notice", "#notice", "notice()", "*notice"], 0, "A class selector begins with a period; an id selector begins with #."],
  "m7-l4": ["What does the child combinator > select?", ["Direct children of the element on its left", "Every descendant at any depth", "Only the next sibling", "Elements with an attribute"], 0, "The child combinator matches one level of parent-child relationship."],
  "m7-l5": ["When two declarations conflict, what should you check first?", ["Origin/importance and cascade layers, then specificity and source order", "Which selector is written on more lines", "Which file was opened first in the editor", "The HTML element's text"], 0, "CSS conflict resolution follows the cascade; specificity and source order matter within the relevant origin and layer."],
  "m7-l6": ["What broadly happens after a browser receives HTML and CSS?", ["It parses documents and styles, builds layout, then paints the page", "It paints raw source without parsing", "It converts every element into an image file", "It skips CSS until a click occurs"], 0, "Parsing, style calculation, layout, and painting are simplified stages in rendering a page."],
  "m7-l7": ["What is a sensible goal for a CSS reset?", ["Make selected defaults more predictable while preserving usable interaction", "Delete every browser style and all focus indication", "Replace all semantic HTML", "Guarantee identical rendering in every situation"], 0, "A reset adjusts selected defaults; it should not remove essential accessibility cues."],
  "m7-l13": ["How does a normalizer generally differ from a reset?", ["It makes useful browser defaults more consistent instead of removing many defaults wholesale", "It only resets JavaScript variables", "It removes all default styles without replacements", "It is an HTML element"], 0, "Normalizers aim for consistent defaults while often preserving helpful browser behavior."],
  "m7-l8": ["Where should a linked external stylesheet usually be declared?", ["In head with a link whose rel is stylesheet", "Inside each paragraph", "After the closing html tag", "In a CSS comment"], 0, "The link element in head connects the HTML document to the external CSS resource."],
  "m7-ex1": ["A linked stylesheet returns 404 in the browser. What is the first useful check?", ["Compare the href path with the actual file location relative to the HTML page", "Rewrite every selector", "Remove the link element", "Change all colors to named colors"], 0, "A path or filename mismatch commonly causes a missing stylesheet; inspect the network request."],
  "m7-l14": ["When can an embedded style element be reasonable?", ["For a small single-document demonstration or page-specific experiment", "As the only choice for every large multi-page site", "Inside a CSS declaration", "As a replacement for HTML"], 0, "Embedded CSS is convenient for a self-contained example but is not shared automatically across pages."],
  "m7-ex2": ["Where do embedded CSS rules belong?", ["Inside a style element in the document head", "Inside the doctype", "As text after body closes", "Inside the href value"], 0, "A style element holds CSS rules, typically in head for a small embedded stylesheet."],
  "m7-l15": ["Why are inline style attributes usually not the first choice?", ["They mix presentation into markup and are hard to reuse", "They cannot set any CSS properties", "They always run on a server", "They make HTML semantic"], 0, "Inline styles are narrowly scoped and hard to maintain compared with reusable stylesheet rules."],
  "m7-ex3": ["What demonstrates that a class rule is more reusable than inline styling?", ["One class styles several elements and can be changed centrally", "Each element needs a different style attribute", "A class can only style one tag", "Inline styles are stored in a separate CSS file"], 0, "A shared class lets one CSS rule consistently style multiple matching elements."],
  "m7-l9": ["Which pairing is generally correct?", ["div groups block-level content; span wraps a small inline phrase", "span creates a page section; div creates an email link", "div is semantic emphasis; span is a heading", "Both elements always create the same display layout"], 0, "div and span are generic grouping hooks; their default display behavior differs."],
  "m7-ex4": ["To colour one word within a sentence without breaking the sentence into a block, use:", ["A span around that word and a class rule", "A div around the word", "A new body element", "An hr element"], 0, "span is an inline generic container suited to styling a small phrase."],
  "m7-l10": ["Which rule is intended for print output?", ["@media print { ... }", "@media screen-only { ... }", "<print> ...", "print: true;"], 0, "A print media query applies CSS when the document is printed or shown in print preview."],
  "m7-l11": ["Why might rem be preferable for scalable spacing and type?", ["It is based on the root font size", "It is always exactly one pixel", "It depends on the viewport width only", "It ignores user font settings"], 0, "rem uses the root element's font size, creating a consistent scalable reference."],
  "m7-l12": ["Which CSS properties commonly inherit by default?", ["Text color and font family", "Margin and border", "Width and position", "Padding and display"], 0, "Many text-related properties inherit; box-model and layout properties generally do not."],
  "m8-l1": ["Why should font-family usually end with a generic family?", ["It gives a fallback if named fonts are unavailable", "It downloads the first font automatically", "It sets the line height", "It prevents text wrapping"], 0, "A generic fallback such as sans-serif lets the system choose an available typeface."],
  "m8-l2": ["What does @font-face enable?", ["Defining a font resource the browser can load for use in CSS", "Changing HTML heading order", "Embedding JavaScript into a font", "Making font files available to every website automatically"], 0, "@font-face declares a font family and its source; the browser loads it subject to the resource path and format."],
  "m8-l3": ["Why is rem useful for font-size?", ["It scales relative to the root font size", "It measures the number of characters", "It always equals a physical centimeter", "It sets font weight"], 0, "rem provides a root-relative size that can respect user and site-wide type scaling."],
  "m8-l4": ["Which choice adds emphasis in meaning rather than only slanted appearance?", ["Use em in HTML and style it with CSS", "Use i for every italic effect", "Insert spaces around the word", "Use font-style on the entire document"], 0, "Semantic emphasis belongs in markup; CSS controls how that meaning is displayed."],
  "m8-l5": ["What does unitless line-height: 1.5 mean?", ["Line height is 1.5 times the element's font size", "Line height is always 1.5 pixels", "It adds 1.5 spaces between letters", "It changes font weight"], 0, "A unitless line-height scales with the element's font size and is usually inherited as a multiplier."],
  "m8-l6": ["Does font-variant: small-caps change the actual letter case in the HTML?", ["No, it changes the visual treatment", "Yes, it rewrites the source text", "It converts text to a link", "It hides lowercase letters"], 0, "Small-caps is typographic presentation; the underlying text remains unchanged."],
  "m8-l7": ["Why might font-weight: 600 look similar to 700 in a project?", ["The selected font may not provide a separate 600 face", "CSS ignores all font weights", "The text is inside a paragraph", "font-weight changes only line height"], 0, "Available weight faces depend on the font; browsers may choose or synthesize a nearby weight."],
  "m8-l8": ["In the font shorthand, which values are required?", ["font-size and font-family", "font-style and font-weight", "line-height and font-variant", "font-stretch and text-align"], 0, "The shorthand requires size and family, with optional components in a defined order."],
  "m8-ex1": ["What is a good way to create a readable typographic scale?", ["Choose a small set of related sizes and test their hierarchy in context", "Give every text element an unrelated size", "Use bold text instead of headings", "Set all text to the same tiny size"], 0, "A consistent scale supports hierarchy; check readability at realistic viewport sizes."],
  "m9-l1": ["What is a useful accessibility check when choosing text colours?", ["Verify sufficient contrast against the actual background", "Choose the brightest colour available", "Use colour as the only signal", "Check hue but ignore brightness"], 0, "Colour must remain distinguishable against its background; do not rely on hue alone to convey meaning."],
  "m9-l2": ["Which CSS colour notation can represent hue, saturation, and lightness?", ["hsl()", "rem()", "font()", "url()"], 0, "HSL separates hue, saturation, and lightness; modern syntax can also express alpha."],
  "m9-l3": ["Which selector changes text colour rather than the element's background?", ["color", "background-color", "opacity", "border-color"], 0, "The color property sets foreground text and other currentColor-based strokes."],
  "m9-l4": ["What is an important effect of opacity: 0.5 on an element?", ["The element and its descendants are rendered translucent", "Only its background becomes translucent", "It removes the element from layout", "It makes the element keyboard-inaccessible automatically"], 0, "Element opacity composites the whole element subtree; use an alpha colour when only a background should fade."],
  "m9-ex1": ["How can you make a coloured text design more accessible?", ["Check contrast and keep meaning available in text or another cue", "Use red and green as the only distinction", "Reduce opacity until the text is faint", "Remove the background and skip testing"], 0, "Good colour design preserves contrast and does not make colour the only carrier of information."],
  "m10-l1": ["What does letter-spacing: 0.1em adjust?", ["Space between characters relative to the font size", "Space between words only", "The first-line indent", "The element's width"], 0, "letter-spacing adjusts character spacing; excessive values can impair reading."],
  "m10-l2": ["Which value centers inline text within its block?", ["text-align: center", "vertical-align: center", "justify-content: center", "align-items: text"], 0, "text-align controls inline content alignment inside a block container."],
  "m10-l3": ["Why should link underlines generally remain visible or have another clear cue?", ["Colour alone may not identify links, and underlines aid recognition", "CSS cannot style links", "Underlines are required for all headings", "Removing them makes links inaccessible in every case"], 0, "Links need a discernible visual distinction; if an underline is removed, another clear cue should remain."],
  "m10-l4": ["What does text-indent affect in a paragraph?", ["The first line", "Every line equally", "The gap between words", "The paragraph's outer margin"], 0, "text-indent offsets the first line; margin changes space outside the whole block."],
  "m10-l5": ["Does text-transform: uppercase rewrite the original HTML text?", ["No, it changes the displayed casing", "Yes, it edits the source file", "It adds a heading element", "It changes the language declaration"], 0, "text-transform affects presentation; keep meaningful, naturally written source text."],
  "m10-l7": ["Which CSS property adjusts spaces between words?", ["word-spacing", "letter-spacing", "text-indent", "white-space"], 0, "word-spacing adjusts inter-word gaps, while letter-spacing adjusts character gaps."],
  "m10-l8": ["What should be prioritized when adding text-shadow?", ["Keep the text readable against its background", "Make the blur larger than every letter", "Use shadow instead of contrast", "Apply it to hide text"], 0, "A subtle shadow can decorate text, but it must not reduce legibility or contrast."],
  "m10-l9": ["What does white-space: pre-wrap do?", ["Preserves whitespace while allowing lines to wrap", "Collapses all spaces and forbids wrapping", "Removes every line break", "Indents the first line"], 0, "pre-wrap keeps spaces and line breaks while still allowing long lines to wrap."],
  "m10-l6": ["When is overflow-wrap: anywhere often safer than word-break: break-all?", ["It breaks long unbreakable strings when necessary while preserving normal word breaks", "It splits every word at every letter", "It hides long words", "It changes the font"], 0, "Use a wrapping strategy that prevents overflow without unnecessarily breaking ordinary words."],
  "m10-ex1": ["What should guide the choice of CSS text properties in a design task?", ["The content's purpose, readability, and behavior at narrow widths", "Using every property at once", "Matching only the designer's monitor", "Making all text uppercase"], 0, "Test combinations with real content and responsive widths to keep text readable."],
  "m11-l1": ["How are JavaScript and ECMAScript related?", ["ECMAScript specifies the core language standard; JavaScript implementations add web-host APIs", "ECMAScript is a browser and JavaScript is HTML", "They are unrelated languages", "ECMAScript only describes CSS"], 0, "ECMAScript standardizes core language behavior, while hosts such as browsers provide APIs like the DOM."],
  "m11-l2": ["What does the DOM represent?", ["A tree of objects for the document that scripts can inspect and update", "A screenshot of the browser window", "The CSS file alone", "A network protocol"], 0, "The DOM is the browser's structured object model of the document."],
  "m11-l3": ["Which statement correctly ends a JavaScript statement?", ["const score = 10;", "<const score = 10>", "const = score 10", "let: score -> 10"], 0, "JavaScript uses declarations and assignment syntax; semicolons are conventional statement terminators."],
  "m11-l4": ["What should code account for when querySelector finds no matching element?", ["It returns null, so check the result before using it", "It creates a matching element automatically", "It returns an empty string", "It selects the first element on the page"], 0, "querySelector returns the first match or null; guard before accessing properties."],
  "m11-l5": ["Why is an external script with defer often a good choice?", ["It keeps behavior separate and runs after HTML parsing", "It runs before the document exists", "It turns JavaScript into CSS", "It prevents the browser downloading the script"], 0, "defer downloads without blocking parsing and executes the script after the document has been parsed."],
  "m11-l6": ["How can you tell a method call from reading a property?", ["A method is invoked with parentheses; a property is accessed as a value", "Properties always start with #", "Methods never use a dot", "They are identical syntax"], 0, "The dot accesses members; parentheses call a function-valued method."],
  "m11-ex1": ["Why is changing an element through the DOM preferable to calling document.write after load?", ["A targeted DOM update changes the intended content without replacing the document", "document.write is required to update any page", "DOM methods only work on servers", "document.write is a CSS property"], 0, "Targeted DOM updates preserve the rest of the page; document.write after load can replace the document."]
};

for (const [lessonId, [question, options, answer, explain]] of Object.entries(lessonKnowledgeChecks)) {
  const lesson = window.COURSE_CONTENT.lessons[lessonId];
  if (!lesson) throw new Error(`Knowledge check references missing lesson: ${lessonId}`);
  if (!lesson.sections.some(section => section.type === 'quiz')) {
    const offset = lessonId.charCodeAt(lessonId.length - 1) % options.length;
    lesson.sections.push({
      type: 'quiz',
      title: 'Check your understanding',
      questions: [{
        q: question,
        options: [...options.slice(offset), ...options.slice(0, offset)],
        answer: (answer - offset + options.length) % options.length,
        explain
      }]
    });
  }
}

const additionalGuidedPractice = {
  "m2-l3": ["Sketch a two-column map of a page's head and body.", "Place the title and character encoding in head, then a heading and paragraph in body.", "Open the page and compare the browser tab with the visible content.", "Use View Source to locate each item and explain why it belongs there."],
  "m2-l6": ["Choose two milestones in HTML's development.", "Write one sentence about what changed and one feature you use today.", "Check a reliable standards source for the current standard's name.", "Explain why browser compatibility depends on shared standards."],
  "m3-l3": ["Write two short paragraphs that need separate lines.", "Use br only for a line break that belongs within one piece of content, such as an address.", "Use hr where the subject changes.", "Inspect the result and explain why repeated br tags should not replace paragraph structure."],
  "m3-l4": ["Group an article card's heading, paragraph, and link in a div.", "Replace the outer div with article or section if that element better describes the content.", "Compare the document outline and page behavior.", "Write down what semantic meaning the generic div would otherwise omit."],
  "m3-l7": ["Write a short paragraph with one important phrase, one stressed word, and a code term.", "Mark them with strong, em, and code for their meaning.", "Use CSS to change their visual appearance without changing the HTML meaning.", "Ask whether the text still makes sense when styles are disabled."],
  "m4-l3": ["Create index.html and a sibling about.html.", "Link between them with relative paths and open each destination.", "Add a file in a subfolder and use ../ only when the folder relationship requires it.", "Move one file and update the path; explain how URL paths are resolved from the current document."],
  "m4-l5": ["Create a mailto link with a real-looking sample address.", "Add a URL-encoded subject parameter.", "Activate it only if your device has an email handler, then confirm it opens a draft rather than sending.", "Provide the address as visible text as an alternative."],
  "m7-l2": ["Write a rule with a selector, one property, and a value.", "Add a second declaration and include the required semicolons and braces.", "Change the selector to target a class on two elements.", "Use Developer Tools to inspect which rule applied and correct one deliberate selector typo."],
  "m7-l5": ["Create two rules that set the same element's color.", "Change their specificity and then their source order one step at a time.", "Inspect computed styles to identify the winning declaration.", "Avoid adding !important as a shortcut; explain the cascade reason for the result."],
  "m7-l13": ["Compare a browser's default heading and form control styles before adding CSS.", "Apply one normalizer-style rule to make a selected behavior consistent.", "Keep useful focus indicators and semantic defaults.", "Test the page in at least one other browser if available and note what the normalizer does and does not guarantee."],
  "m7-l9": ["Use div to group a card's block content and span around one inline word.", "Add a class to each and style them with separate CSS rules.", "Observe where each element begins and ends in the layout.", "Replace a generic container with a semantic element when its purpose is known."],
  "m8-l4": ["Mark a phrase that deserves emphasis with em.", "Use CSS to style em as italic, then try font-style: normal.", "Compare the meaning of em with an italic-only span.", "Check that emphasis remains understandable when styling is removed."],
  "m8-l6": ["Apply font-variant: small-caps to a short label.", "Compare it with ordinary uppercase text and with the source text copied from the page.", "Try another system font and observe the visual differences.", "Keep the effect decorative rather than using it to signal importance."],
  "m8-l8": ["Write a font shorthand that includes a size and a family.", "Add optional weight and line-height in the correct order.", "Remove line-height and inspect the computed value to see what the shorthand resets.", "Keep family last and confirm the rule remains readable to another developer."],
  "m9-l2": ["Write one CSS color using hex and the same color using rgb or hsl.", "Add alpha to a color value, then compare it with opacity on the entire element.", "Check foreground/background contrast with realistic text.", "Explain which parts of an HSL value you would change to create a lighter tint."],
  "m9-l4": ["Place text inside a colored card and set opacity on the card.", "Observe that the text also becomes translucent.", "Replace the background with an alpha color while leaving the text opaque.", "Choose the version that keeps the text easiest to read."],
  "m10-l1": ["Compare normal, 0.05em, and 0.2em letter spacing on a short label.", "Apply the same values to a paragraph and read each at normal size.", "Check the narrow-screen version for awkward word shapes.", "Keep the smallest adjustment that improves the intended design."],
  "m10-l5": ["Write a label in normal sentence case in HTML.", "Apply uppercase and capitalize in separate CSS rules.", "Copy the displayed text and inspect its underlying source.", "Keep the source wording correct even when CSS changes its appearance."],
  "m10-l6": ["Create a narrow card containing a long URL-like string and ordinary prose.", "Compare normal wrapping with an overflow-safe setting.", "Check that ordinary words remain intact when possible.", "Resize the preview and confirm the content does not force page-wide scrolling."],
  "m11-l1": ["List one ECMAScript language feature and one browser API such as document.querySelector.", "Identify which one belongs to the language standard and which is provided by the browser host.", "Run a short language expression in a JavaScript console.", "Explain why a server-side JavaScript runtime can use the language without having the browser DOM."],
  "m11-l2": ["Draw a small DOM tree for a heading and paragraph inside main.", "Label parent, child, and sibling relationships.", "Inspect the same structure in Developer Tools.", "Add a wrapper element and predict which relationships change."]
};

const guidedPracticeOutcomes = {
  "m2-l3": "The browser tab shows the document title, while the heading and paragraph appear in the page body.",
  "m2-l6": "You can name two milestones, describe their impact, and explain how a shared standard supports compatible browsers.",
  "m3-l3": "The prose remains grouped in paragraphs, br is used only for an intentional line break, and hr separates a thematic shift.",
  "m3-l4": "The content is grouped, and you can justify whether a semantic container communicates its purpose better than div.",
  "m3-l7": "The phrase keeps its meaning when CSS is disabled because the correct semantic elements mark emphasis and code.",
  "m4-l3": "Each link resolves to the intended file after you account for the current document's folder.",
  "m4-l5": "The link opens an editable draft with its subject when an email handler exists, and the address is also readable as text.",
  "m7-l2": "The selector matches the intended elements, the declarations parse, and the computed style shows the expected value.",
  "m7-l5": "You can identify the winning declaration in computed styles and explain it using the cascade rather than trial-and-error !important.",
  "m7-l13": "Selected default differences are more consistent while focus indicators and useful semantic behavior remain intact.",
  "m7-l9": "The inline phrase stays within its line, the div groups the block content, and each class applies only its intended styling.",
  "m8-l4": "The emphasis remains meaningful without CSS, and changing font-style affects presentation only.",
  "m8-l6": "The label displays small capitals where the font supports them, while copied/source text retains its original case.",
  "m8-l8": "The browser applies the shorthand with size and family, and computed styles reveal the values reset by omitted components.",
  "m9-l2": "Equivalent color notations render consistently, and text remains distinguishable from its background.",
  "m9-l4": "The second card's text stays opaque while its background is translucent, unlike the whole-element opacity example.",
  "m10-l1": "A subtle character-spacing value is visible on the short label without making the paragraph harder to read.",
  "m10-l5": "The displayed casing changes, but the source text remains correctly written and meaningful.",
  "m10-l6": "The long string fits the card without horizontal page overflow, and ordinary words still wrap naturally.",
  "m11-l1": "You can distinguish a core language feature from a browser-provided API and explain why the DOM is not part of ECMAScript itself.",
  "m11-l2": "Your tree correctly labels parent, child, and sibling relationships and matches the structure in Developer Tools."
};

for (const [lessonId, steps] of Object.entries(additionalGuidedPractice)) {
  const lesson = window.COURSE_CONTENT.lessons[lessonId];
  if (!lesson) throw new Error(`Guided practice references missing lesson: ${lessonId}`);
  lesson.sections.push({
    type: 'practice',
    title: 'Guided workshop',
    steps,
    expected: guidedPracticeOutcomes[lessonId]
  });
}

const workedExamplesForSparseLessons = {
  "m1-l3": [
    { type: "steps", title: "Trace a request that needs private data", items: [
      { title: "Browser asks", content: "The page sends a request for a resource or action, such as the signed-in learner's course list." },
      { title: "Server checks", content: "Trusted server code validates the request and reads permitted records from a protected data store." },
      { title: "Server responds", content: "It returns HTML or data; the browser renders the response and can update the interface." }
    ]},
    { type: "callout", tone: "warning", title: "Never trust the browser with secrets", content: "A visitor can inspect and change client-side code. Keep credentials, private keys, and authorization decisions on a trusted server."}
  ],
  "m1-l4": [
    { type: "code", title: "One small page using the three core technologies", language: "html", code: `<!doctype html>\n<h1 class=\"welcome\">Hello, web!</h1>\n<button id=\"greet\">Say hello</button>\n<style>\n  .welcome { color: #2563eb; }\n</style>\n<script>\n  document.querySelector(\"#greet\").addEventListener(\"click\", () => {\n    document.querySelector(\".welcome\").textContent = \"Welcome!\";\n  });\n</script>`, explanation: ["HTML provides a heading and button.", "CSS styles the heading selected by its class.", "JavaScript listens for a click and changes the heading's text.", "In a larger project, keep CSS and JavaScript in separate files."]}
  ],
  "m2-ex1": [
    { type: "code", title: "A complete document to build from", language: "html", code: `<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My profile</title>\n</head>\n<body>\n  <h1>My profile</h1>\n  <p>Write one true sentence about yourself.</p>\n</body>\n</html>`, explanation: ["Save the whole example as index.html.", "The title belongs to document metadata; the h1 is visible content.", "Change the title and paragraph, then open the saved file in a browser."]}
  ],
  "m2-l4": [
    { type: "comparison", title: "Source and rendered page answer different questions", columns: [
      { title: "View Source", points: ["Shows the document markup delivered by the server or file", "Useful for finding authored tags and attributes", "May not include changes made later by JavaScript"] },
      { title: "Elements / rendered view", points: ["Shows the browser's parsed, current DOM", "Includes many script-created changes", "Shows the result after CSS and layout are applied"] }
    ]},
    { type: "callout", tone: "tip", title: "Use the right inspection tool", content: "Use View Source to inspect the original response. Use Developer Tools' Elements panel to inspect the live DOM and computed styles."}
  ],
  "m3-ex1": [
    { type: "code", title: "An article with a readable outline", language: "html", code: `<article>\n  <h1>My Weekend Garden</h1>\n  <p>I planted herbs in a sunny window.</p>\n  <h2>What I planted</h2>\n  <p>Basil and mint were easy to start.</p>\n</article>`, explanation: ["article groups a self-contained piece of content.", "The h1 names the article; h2 introduces a subsection.", "Each p groups one paragraph rather than using repeated line breaks."]}
  ],
  "m3-ex2": [
    { type: "code", title: "Inline elements add meaning within a sentence", language: "html", code: `<p>\n  Please <strong>save your work</strong> before you\n  <em>close the browser</em>. The shortcut is\n  <code>Ctrl+S</code>.\n</p>`, explanation: ["strong marks importance, em marks stress emphasis, and code marks a code-like value.", "These elements fit inside the paragraph's sentence flow.", "Use CSS to change appearance without discarding the meaning."]}
  ],
  "m4-l1": [
    { type: "code", title: "An anchor connects a label to a destination", language: "html", code: `<a href=\"about.html\">Read about our team</a>\n<a href=\"https://developer.mozilla.org/\">Visit MDN Web Docs</a>`, explanation: ["The a element makes its child content a link.", "href provides the destination URL.", "Use link text that still describes the destination when read on its own."]}
  ],
  "m4-ex1": [
    { type: "code", title: "A small, useful set of link types", language: "html", code: `<nav aria-label=\"Main navigation\">\n  <a href=\"index.html\">Home</a>\n  <a href=\"about.html\">About us</a>\n</nav>\n<a href=\"mailto:hello@example.com\">Email the team</a>\n<a href=\"#contact\">Jump to contact details</a>\n<h2 id=\"contact\">Contact details</h2>`, explanation: ["The first two anchors use relative file paths.", "mailto opens an email draft when a handler is configured.", "The fragment points to an element with the matching id."]}
  ],
  "m5-ex1": [
    { type: "code", title: "A responsive image with a useful alternative", language: "html", code: `<figure>\n  <img src=\"images/seedlings.jpg\"\n       alt=\"Three tomato seedlings growing in pots\"\n       width=\"900\" height=\"600\">\n  <figcaption>Our seedlings after two weeks.</figcaption>\n</figure>\n<style>\n  img { max-width: 100%; height: auto; }\n</style>`, explanation: ["Check that the file exists at the path relative to the HTML file.", "The alt describes useful information; the caption is visible context.", "The CSS lets the image shrink without distorting its proportions."]}
  ],
  "m5-l3": [
    { type: "comparison", title: "Choose alt text by purpose", columns: [
      { title: "Information-bearing image", points: ["Describe the important information it contributes", "Keep the alternative concise and specific", "Do not repeat a nearby caption word for word"] },
      { title: "Decorative image", points: ["Use alt=\"\" when it adds no information", "Keep the alt attribute present", "Do not make a screen reader announce irrelevant decoration"] },
      { title: "Image that is a link", points: ["Describe the destination or action", "Avoid a meaningless label such as “image”", "Check the link still makes sense without seeing it"] }
    ]}
  ],
  "m6-ex1": [
    { type: "code", title: "Three list structures for three relationships", language: "html", code: `<ul>\n  <li>Apples</li>\n  <li>Pears</li>\n</ul>\n<ol>\n  <li>Wash the fruit</li>\n  <li>Slice it</li>\n</ol>\n<dl>\n  <dt>Ripe</dt>\n  <dd>Ready to eat</dd>\n</dl>`, explanation: ["ul expresses a collection with no required order.", "ol expresses a sequence; the browser numbers its li items.", "dl groups each term (dt) with its description (dd)."]}
  ],
  "m7-l1": [
    { type: "comparison", title: "Structure and presentation can change independently", columns: [
      { title: "HTML", points: ["Describes the content and its meaning", "Contains headings, links, and controls", "Should stay understandable without decorative CSS"] },
      { title: "CSS", points: ["Controls visual presentation and layout", "Can restyle shared content consistently", "Should not be the only place where meaning exists"] }
    ]},
    { type: "callout", tone: "example", title: "One design change, many pages", content: "If several pages load the same stylesheet, changing one shared heading rule can update their presentation without editing every heading in the HTML."}
  ],
  "m7-l5": [
    { type: "code", title: "Specificity and source order in a small example", language: "css", code: `p { color: navy; }\n.note { color: seagreen; }\n#warning { color: crimson; }\n.note { color: teal; }`, explanation: ["The id selector has greater specificity than the class and type selectors.", "The two .note rules have equal specificity, so the later rule wins for an element with that class.", "The cascade also considers origin, importance, and layers before specificity."]}
  ],
  "m7-l6": [
    { type: "steps", title: "A simplified browser rendering journey", items: [
      { title: "Parse", content: "The browser reads HTML into a document tree and parses CSS rules." },
      { title: "Calculate styles", content: "Selectors match elements and the cascade determines computed values." },
      { title: "Layout and paint", content: "The browser calculates geometry, then paints text, backgrounds, borders, and other visual output." }
    ]},
    { type: "callout", tone: "tip", title: "Debug from the evidence", content: "If a color is wrong, inspect the computed style and the matched rules. If an element is missing, first inspect the DOM and console for markup or script errors."}
  ],
  "m7-ex1": [
    { type: "code", title: "Connect two project files", language: "html", code: `<!-- index.html, inside <head> -->\n<link rel=\"stylesheet\" href=\"css/styles.css\">`, explanation: ["The link belongs in the HTML document's head.", "The href path starts from the folder containing index.html.", "In css/styles.css, add a rule such as body { font-family: system-ui, sans-serif; }."]}
  ],
  "m7-ex2": [
    { type: "code", title: "An embedded stylesheet", language: "html", code: `<head>\n  <style>\n    body { font-family: system-ui, sans-serif; }\n    h1 { color: #2563eb; }\n  </style>\n</head>`, explanation: ["The style element contains CSS, while the surrounding document remains HTML.", "Each selector matches elements and applies declarations.", "The rules affect this document only; use an external sheet to share them across pages."]}
  ],
  "m7-ex3": [
    { type: "code", title: "Compare an inline value with a reusable class", language: "html", code: `<p style=\"color: teal\">One-off inline style</p>\n<p class=\"notice\">Reusable class style</p>\n<style>\n  .notice { color: teal; }\n</style>`, explanation: ["The first color is written directly on one element.", "The class allows the rule to be reused and changed in one stylesheet location.", "Prefer the class approach for normal project styling."]}
  ],
  "m7-l11": [
    { type: "code", title: "Relative units respond to their context", language: "css", code: `html { font-size: 16px; }\n.card { padding: 1rem; width: 80%; }\n.title { font-size: 1.5rem; }\n.hero { min-height: 60vh; }`, explanation: ["rem relates to the root font size; 1.5rem is 24px when the root is 16px.", "Percentages depend on the relevant containing size.", "vh is based on viewport height; test viewport units on small screens."]}
  ],
  "m7-l12": [
    { type: "code", title: "Text inherits; box spacing does not", language: "css", code: `.article { color: #334155; font-family: system-ui, sans-serif; padding: 1rem; }\n.article p { color: inherit; }\n.article a { color: #2563eb; }`, explanation: ["The paragraph inherits the article's color explicitly; color and font family commonly inherit by default.", "Padding belongs to the article's box and is not passed down as child padding.", "A child can define its own value, such as the link color."]}
  ],
  "m8-ex1": [
    { type: "code", title: "A small type scale with readable line spacing", language: "css", code: `body { font-family: system-ui, sans-serif; line-height: 1.6; }\nh1 { font-size: 2rem; line-height: 1.2; }\nh2 { font-size: 1.4rem; }\nsmall { font-size: 0.875rem; }`, explanation: ["A shared family and body line-height establish a baseline.", "Headings use a small set of larger sizes to create hierarchy.", "Preview at narrow widths and zoom to check that text remains readable."]}
  ],
  "m9-l1": [
    { type: "comparison", title: "A color is more than its hue", columns: [
      { title: "Hue", points: ["Names the general color family", "Does not guarantee readable contrast", "Can be hard to distinguish for some viewers"] },
      { title: "Contrast and opacity", points: ["Depend on foreground and background together", "Change perceived readability", "Should be checked with the actual text size and weight"] }
    ]},
    { type: "callout", tone: "warning", title: "Do not communicate by color alone", content: "Pair color changes with text, icons, labels, or another cue so the information remains available when colors are difficult to distinguish."}
  ],
  "m9-ex1": [
    { type: "code", title: "Style text and maintain a clear background", language: "html", code: `<h1 class=\"title\">Garden notes</h1>\n<p class=\"intro\">A bright windowsill helps seedlings grow.</p>\n<style>\n  .title { color: #1d4ed8; }\n  .intro { color: rgb(51 65 85); }\n</style>`, explanation: ["The text color is set with color, not opacity on the whole paragraph.", "Use a foreground/background combination with sufficient contrast.", "Change one color format at a time and inspect the actual rendered result."]}
  ],
  "m10-ex1": [
    { type: "code", title: "Combine text rules without sacrificing readability", language: "html", code: `<h1 class=\"page-title\">A short guide</h1>\n<p class=\"lead\">Clear text is easier to read.</p>\n<style>\n  .page-title { text-align: center; text-shadow: 0 1px 2px #cbd5e1; }\n  .lead { line-height: 1.6; letter-spacing: 0.01em; }\n</style>`, explanation: ["The heading is centered and has a subtle shadow.", "The paragraph uses comfortable line spacing and only a small character adjustment.", "Resize the page and remove each declaration to see which one helps or harms readability."]}
  ],
  "m11-l1": [
    { type: "comparison", title: "Language standard and host environment", columns: [
      { title: "ECMAScript", points: ["Specifies core syntax and language behavior", "Includes features such as functions, objects, and promises", "Does not define the browser DOM"] },
      { title: "Browser APIs", points: ["Are provided by the browser environment", "Include document, events, and fetch", "May not exist in every JavaScript host"] }
    ]},
    { type: "callout", tone: "example", title: "Why the distinction matters", content: "Core expressions such as 2 + 3 are language features. document.querySelector depends on a browser document and is unavailable in a plain non-browser JavaScript process."}
  ],
  "m11-l2": [
    { type: "code", title: "A DOM node can be selected and safely updated", language: "javascript", code: `const message = document.querySelector(\"#message\");\n\nif (message) {\n  message.textContent = \"The page is ready.\";\n}`, explanation: ["querySelector looks for the first element matching the CSS id selector.", "It returns null when there is no match, so the condition guards the update.", "textContent changes text without parsing the string as HTML."]}
  ]
};

for (const [lessonId, sections] of Object.entries(workedExamplesForSparseLessons)) {
  const lesson = window.COURSE_CONTENT.lessons[lessonId];
  if (!lesson) throw new Error(`Worked example references missing lesson: ${lessonId}`);
  lesson.sections.push(...sections);
}

const missingCodeExplanations = {
  "m8-l3": ["font-size sets the size of the selected text.", "rem is relative to the root font size, so the value can scale with the site's type settings.", "Test zoom and narrow layouts to ensure the text remains readable."],
  "m9-l2": ["Named colors and hexadecimal values are compact ways to specify colors.", "rgb() expresses red, green, and blue channels; hsl() expresses hue, saturation, and lightness.", "Alpha controls color transparency; compare it with opacity, which also fades descendants."],
  "m9-l3": ["color changes the foreground text color.", "The element may inherit color when no nearer rule sets it.", "Check the chosen foreground against its actual background for readable contrast."],
  "m10-l2": ["text-align controls inline content alignment within a block.", "left and right are physical directions; start and end follow the text direction.", "Alignment does not move the block itself; use layout properties to position a container."],
  "m10-l3": ["text-decoration-line chooses an underline, overline, or line-through.", "The shorthand text-decoration can also set style and color.", "Keep links distinguishable when changing their underline treatment."],
  "m10-l6": ["word-break controls how text can break at otherwise unbreakable points.", "break-all may split ordinary words, so use it only when that behavior is intended.", "For long URLs or identifiers, consider overflow-wrap to preserve normal words."]
};

for (const [lessonId, explanation] of Object.entries(missingCodeExplanations)) {
  const lesson = window.COURSE_CONTENT.lessons[lessonId];
  const codeSection = lesson?.sections.find(section => section.type === 'code' && !section.explanation?.length);
  if (!codeSection) throw new Error(`Expected unexplained code example in lesson: ${lessonId}`);
  codeSection.explanation = explanation;
}

for (const lesson of Object.values(window.COURSE_CONTENT.lessons)) {
  const objectives = lesson.objectives || [];
  let practiceIndex = 0;
  for (const section of lesson.sections.filter(item => item.type === 'practice')) {
    if (!section.expected && objectives.length) {
      const objective = objectives[practiceIndex % objectives.length];
      section.expected = `Check your work against this lesson objective: ${objective}.`;
    }
    practiceIndex++;
  }
}
