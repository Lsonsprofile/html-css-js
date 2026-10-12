(function expandEarlyCourseLessons() {
  const lessons = window.COURSE_CONTENT && window.COURSE_CONTENT.lessons;
  if (!lessons) {
    throw new Error("Cannot expand Modules 1–4: window.COURSE_CONTENT.lessons is unavailable.");
  }

  const expansions = {
    "m1-l1": [
      { type: "explanation", title: "How the three jobs cooperate", content: [
        "The three roles are separate, but they meet around the same page elements. A heading exists in HTML with a meaning; CSS can make it large and blue; JavaScript can replace its words after a button press. If a heading looks wrong, first ask whether the element exists, whether a CSS rule styles it, and whether a script changed it. This small diagnostic habit prevents random edits.",
        "Keeping the jobs understandable matters even on a tiny site. A useful rule is to put meaning in HTML, reusable visual decisions in CSS, and changing behaviour in JavaScript. A button should still be a button before it is decorated, and important instructions should remain readable if a style fails. These are not strict boxes—CSS and JavaScript can be embedded in a page—but separating them makes later changes easier."
      ]},
      { type: "mistakes", title: "Keep responsibilities clear", items: [
        { wrong: "Use a heading only because it looks big.", why: "Its document meaning matters to readers and assistive technology.", fix: "Choose a heading level for structure, then style its size with CSS." },
        { wrong: "Expect JavaScript to create every part of the page.", why: "If the script fails, essential content may disappear.", fix: "Write core content in HTML and use scripts to enhance interaction." }
      ]},
      { type: "practice", title: "Plan a three-part feature", prompt: "Design a simple library-book card without writing a complete website.", steps: [
        "List the information that belongs in HTML: title, author, and a borrow button.",
        "Describe two CSS choices that help someone scan the card.",
        "Describe a useful response when the borrow button is pressed.",
        "For each choice, explain which teammate owns it and why."
      ], expected: "The card’s words and controls are HTML, its visual treatment is CSS, and a changing response is JavaScript; the three should support the same purpose." }
    ],
    "m1-l2": [
      { type: "explanation", title: "A browser is a real program environment", content: [
        "Client-side work happens in a particular visitor’s browser, so it can use the page, listen to events, and respond immediately. For example, a music player can update a play button’s label or a quiz can reveal feedback without fetching a new page. The browser represents the loaded document as a tree of objects, often called the DOM; JavaScript can select an object and change its text or attributes.",
        "The client’s device also has limits: it may be slow, offline, low on memory, or running a different browser. Keep useful content understandable and test on more than one screen when possible. A browser can improve a form with an early message such as “enter a name,” but it cannot be trusted as the only checker because the visitor controls that browser and can alter its code."
      ]},
      { type: "code", title: "Give local feedback without replacing the page", language: "html", code: `<label for="nickname">Nickname</label>
<input id="nickname">
<p id="hint" aria-live="polite">Choose a short name.</p>
<script>
  const field = document.querySelector("#nickname");
  const hint = document.querySelector("#hint");
  field.addEventListener("input", () => {
    hint.textContent = field.value.length < 3
      ? "Try at least three characters."
      : "That looks long enough.";
  });
</script>`, explanation: [
        "The input event fires as the visitor edits the field, so this feedback is client-side.",
        "aria-live politely announces changed hint text to many screen readers.",
        "This is guidance, not proof that a real account name is available; a server must check that."
      ]},
      { type: "practice", title: "Test the client-side boundary", steps: [
        "Predict the hint when the field is empty, has two letters, and has four letters.",
        "Try those values and compare the result with your prediction.",
        "Name one improvement the browser can offer and one decision a server must make.",
        "Explain why a local message can be helpful even though it is not authoritative."
      ], expected: "The browser gives instant, friendly feedback; trusted checks involving accounts or stored information belong on the server." }
    ],
    "m1-l3": [
      { type: "explanation", title: "What makes a server trustworthy?", content: [
        "A server is a computer running software that listens for requests. It can use files and databases that are not sent to every visitor, apply shared rules, and return a result. For example, a library site might ask a server whether a book is available, because the answer depends on a shared catalogue that many people can change.",
        "A request and response do not make a server automatically safe or correct. Server code still needs to check incoming data, handle missing records, and avoid exposing private information in its answer. A successful response might include a page or data; an error response might say the requested item was not found. The browser then decides how to present that response to the visitor."
      ]},
      { type: "comparison", title: "Choose where the work belongs", columns: [
        { title: "Browser-side", intro: "Fast, visible interaction on one device", points: ["Open a menu or change a tab", "Show a local preview", "Keep non-sensitive interface state"] },
        { title: "Server-side", intro: "Shared or private work requiring trusted data", points: ["Check a real sign-in", "Read current stock from a database", "Save a message or account change"] }
      ]},
      { type: "mistakes", title: "Server-side misconceptions", items: [
        { wrong: "The server is always the visitor’s own computer.", why: "A server is a role: it may be a remote host serving many visitors.", fix: "Think of client and server as communicating roles, not fixed device sizes." },
        { wrong: "Hide a secret by putting it in a server-generated page.", why: "Anything returned to the browser can be inspected.", fix: "Keep secrets on the server and return only information the visitor may see." }
      ]},
      { type: "practice", title: "Map a message-board action", steps: [
        "A visitor writes a post: name two checks the browser could show immediately.",
        "Name two checks the server must repeat before saving it.",
        "Describe what the server should return if saving succeeds or fails.",
        "Mark which data should not be sent back to every visitor."
      ], expected: "The browser can guide the writer; the server validates and saves shared data and returns a safe success or error result." }
    ],
    "m1-l4": [
      { type: "explanation", title: "Standards, libraries, and project tools", content: [
        "A web standard describes behaviour browsers agree to understand, such as HTML elements, CSS rules, and JavaScript features. A library is reusable code that helps with a particular job; a framework offers a wider structure for building an application. Neither is required for a first web page. Learning the browser’s basic languages first helps you understand what a tool is generating and diagnose problems when its shortcuts are confusing.",
        "A project also needs ordinary resources and workflow tools. Images and fonts are files; an API is a documented way to ask another program for data; a database stores information; version control records changes so earlier work can be compared or restored. These pieces are selected for a reason, not added just because a site uses many technologies."
      ]},
      { type: "callout", tone: "example", title: "Choose tools for a small club site", content: "A club page with opening times may need only HTML, CSS, a few pictures, and web hosting. A live event calendar that several organisers update may also need a server and stored data. Start with the visitor’s need, then add the smallest suitable tool." },
      { type: "practice", title: "Make a technology map", steps: [
        "Choose a site idea and write down the information visitors need.",
        "Circle which information can be fixed text and which might change often.",
        "Match each need to a browser technology, a resource, or a server service.",
        "Cross out any tool that does not solve a named need and explain your choice."
      ], expected: "A sensible map distinguishes browser standards from optional tools and adds server or database work only when shared or changing information requires it." }
    ],
    "m2-ex1": [
      { type: "explanation", title: "Build in a reliable order", content: [
        "Start the exercise by creating a plain-text file named about-me.html in one project folder. Add the document skeleton before writing the story; this gives the browser a clear place for metadata and a separate place for visible content. Save after each small step. If something looks unexpected, make one change at a time so you can tell which edit caused the result.",
        "Make the page useful to a real reader: choose a focused subject such as a hobby, a pet, or a favourite place. Give the page a meaningful browser-tab title, one main heading, and paragraphs that each explain one idea. The title in the head is not the same as the heading in the body. Both can be clear while serving different purposes."
      ]},
      { type: "mistakes", title: "Check the file, not just the picture", items: [
        { wrong: "Save as about-me.html.txt.", why: "Some editors hide file extensions, so the browser may treat it as a text file.", fix: "Show file extensions and confirm the name ends in .html only." },
        { wrong: "Put the page heading inside head.", why: "The head contains metadata, not the visible article.", fix: "Place h1 and paragraphs inside body." }
      ]},
      { type: "practice", title: "Independent page challenge", steps: [
        "Create the skeleton and set an appropriate lang and charset.",
        "Write a title, one h1, and two paragraphs for a chosen reader.",
        "Add one HTML comment that reminds you what to improve later.",
        "Open the file, check the tab title, and compare the rendered page with View Source."
      ], expected: "A valid page opens in the browser, displays its article in the body, and has metadata visible in the tab or source rather than as page text." }
    ],
    "m2-l1": [
      { type: "explanation", title: "From saved text to a rendered page", content: [
        "An HTML file is source text, not a screenshot. The browser reads tags as instructions about the relationships among words and elements, then draws a view. The same source can look different after CSS is added, or on a narrow phone screen, while the content structure stays the same. That is why clean structure is more useful than trying to position every word by typing spaces.",
        "A local file is a good first test, but a website served online also involves a URL and a server. When opening your first file, check that you are viewing the latest saved version. If the page seems unchanged, save the editor, refresh the browser, and make sure the tab points to the file you edited."
      ]},
      { type: "steps", title: "A dependable first-page loop", items: [
        { title: "Write", content: "Add a small, meaningful change to the document." },
        { title: "Save", content: "Save the exact file you intend the browser to display." },
        { title: "Refresh", content: "Reload the browser tab and inspect the change." },
        { title: "Compare", content: "If it failed, check spelling, nesting, and whether the right file is open." }
      ]},
      { type: "practice", title: "Experiment with your skeleton", steps: [
        "Change the title and visible h1 to different but related words.",
        "Add a paragraph with an ampersand and a second sentence.",
        "Save and refresh, then identify what appears in the tab and what appears in the page.",
        "Temporarily remove one closing tag, observe the browser’s best-effort result, then repair it."
      ], expected: "The tab title comes from title in head; the visible heading and paragraph belong in body. Browsers may recover from errors, but correct nesting is more predictable." }
    ],
    "m2-l2": [
      { type: "explanation", title: "Nesting makes relationships", content: [
        "Elements can sit inside other elements. In a paragraph containing a strong phrase, the paragraph is the parent and strong is its child; the emphasis applies only to the words inside strong. Close nested elements in the reverse order in which they were opened. Clear indentation makes these parent–child relationships easier to see, especially when a page grows.",
        "Attributes belong to the opening tag and describe that particular element. A class can be shared by many elements for a common style, while an id is intended to identify one unique element on a page. Attribute values should be quoted. Comments are notes for people editing the source, so never put a password, private information, or instructions meant for the visitor in a comment."
      ]},
      { type: "code", title: "A small, nested profile card", language: "html", code: `<article class="profile">
  <h2 id="sam-title">Sam's garden</h2>
  <p>Sam grows <strong class="plant">mint</strong> at home.</p>
</article>`, explanation: [
        "article groups a self-contained card, and its children are indented to show the structure.",
        "The reusable class plant could style several plant names; this id identifies a single heading.",
        "The strong element adds importance, not merely bold appearance."
      ]},
      { type: "mistakes", title: "Element and attribute checks", items: [
        { wrong: "Repeat the same id on many cards.", why: "A page id should identify one unique destination or element.", fix: "Use a shared class for repeated styling and unique ids for individual targets." },
        { wrong: "Write a closing tag for img or meta.", why: "These are void elements and do not wrap content.", fix: "Use their required attributes without a separate closing tag." }
      ]},
      { type: "practice", title: "Read the markup aloud", steps: [
        "Write an article with a heading and a paragraph containing one strong phrase.",
        "Add a shared class to two words and give the heading a unique id.",
        "Indent children and check each opening tag has the correct closing tag.",
        "Add a comment for a future edit, then confirm it does not appear on the page."
      ], expected: "The nesting tells which words belong in the paragraph; class can repeat, while the id remains unique." }
    ],
    "m2-l3": [
      { type: "explanation", title: "Head metadata and page identity", content: [
        "The document skeleton gives browsers and other tools a consistent starting point. The doctype is a short declaration that asks browsers to use modern standards mode; it is not an HTML element. The html root wraps the entire document. Inside it, head contains information about the document, while body contains the content people read or interact with.",
        "The title in head labels the browser tab, a bookmark, and often a search result. Charset tells the browser how to decode text, so it should appear near the start of head. As a page grows, metadata such as a description or a link to a stylesheet also belongs there. Do not put visible paragraphs in head just because it appears before body in the file."
      ]},
      { type: "mistakes", title: "Skeleton checks", items: [
        { wrong: "Treat the doctype as a visible heading.", why: "It is a browser instruction, not visitor-facing content.", fix: "Keep it at the top of the file and put the page heading in body." },
        { wrong: "Forget the title because the page already has an h1.", why: "The h1 labels content on the page; title identifies the document outside it.", fix: "Write both, with concise and relevant text." }
      ]},
      { type: "practice", title: "Repair a document outline", steps: [
        "Write the order of the document’s outer parts from doctype through body.",
        "Place charset and a useful title in head.",
        "Place an h1 and a paragraph in body, not in head.",
        "Explain where you would link a stylesheet and where a visible image belongs."
      ], expected: "The stylesheet link is metadata in head; visible page content such as a heading and image belongs in body." }
    ],
    "m2-l4": [
      { type: "explanation", title: "Source and live page answer different questions", content: [
        "View Page Source is useful for seeing the HTML that arrived from the server or file. It helps answer, “Was this content sent in the original document?” The browser’s Elements panel shows the current DOM, which may have been changed by JavaScript. It helps answer, “What structure does the browser have now?” These views can differ without either being broken.",
        "Use the source when checking a missing tag, a link address, or server-provided text. Use the live DOM when investigating content added after a click or whether a script changed an attribute. Developer tools can also show styles and network requests, but inspect only the part relevant to your question; a large professional page contains many unrelated resources."
      ]},
      { type: "comparison", title: "Pick the right inspection view", columns: [
        { title: "View Page Source", intro: "The original document", points: ["Check initial markup", "Find text included by the server", "See authored comments and attributes"] },
        { title: "Elements / DOM inspector", intro: "The browser’s current structure", points: ["Inspect script-created elements", "See the result after interaction", "Try temporary edits in the inspector"] }
      ]},
      { type: "practice", title: "Inspect a safe example", steps: [
        "Open your own small HTML page and view its source.",
        "Find the title, h1, and a paragraph in the original markup.",
        "Use the Elements panel to select the h1 and temporarily change its text.",
        "Refresh and describe which view returns to the saved version."
      ], expected: "A temporary Elements-panel edit affects the current browser view; refreshing reloads the saved source and removes the experiment." }
    ],
    "m2-l5": [
      { type: "explanation", title: "When to write a character reference", content: [
        "HTML uses angle brackets to mark tags, so a raw less-than sign in ordinary text could be read as the start of markup. An ampersand introduces a character reference. Write &lt; for a less-than sign, &gt; for greater-than, and &amp; for an ampersand. The browser displays the intended character after parsing, even though the source uses a longer spelling.",
        "Not every punctuation mark needs an entity. Use a reference when the character has a special parsing role or when you need a character that is awkward to type. For example, write the source text “A & B” with &amp; between the letters. Named references are convenient, but the terminating semicolon helps the browser recognise exactly where the reference ends."
      ]},
      { type: "mistakes", title: "Avoid accidental markup", items: [
        { wrong: "Type <h1> as an example in a paragraph.", why: "The browser may treat it as a real heading tag instead of visible sample text.", fix: "Write &lt;h1&gt; when demonstrating the literal tag." },
        { wrong: "Replace every ordinary character with a numeric code.", why: "That makes source difficult to read without adding value.", fix: "Use normal text and reserve references for special or needed characters." }
      ]},
      { type: "practice", title: "Write a tiny HTML glossary", steps: [
        "Create a paragraph explaining what the literal text <p> means.",
        "Add a second sentence that contains a company-style ampersand.",
        "View the source and the rendered page and compare their spellings.",
        "Try leaving out one semicolon in a safe example and note why clear syntax matters."
      ], expected: "The source contains references such as &lt; and &amp;, while the rendered text shows the intended symbols." }
    ],
    "m2-l8": [
      { type: "explanation", title: "Read a tag without confusing it with an element", content: [
        "A tag is the piece of markup inside angle brackets; an element is the full structure it describes. In <p class=\"note\">Hello</p>, the opening tag includes the p name and class attribute, Hello is the text content, and the closing tag ends the paragraph element. This distinction helps when you debug: a missing closing tag is different from a misspelled attribute.",
        "When teaching HTML, examples often need to display tags as text rather than create them. Character references solve that problem, while still producing readable output. Browsers parse references in text content and show the corresponding character. In a code editor, the source remains explicit, which is useful for someone learning how markup is written."
      ]},
      { type: "code", title: "Show markup as an example", language: "html", code: `<p>Use &lt;strong&gt; for important text.</p>
<p>Use &amp; to display an ampersand.</p>`, explanation: [
        "The source uses references so the browser does not start a strong element.",
        "The visible page shows the literal opening-tag example and an ampersand.",
        "This technique is useful in tutorials, documentation, and code explanations."
      ]},
      { type: "practice", title: "Teach one HTML element", steps: [
        "Choose a familiar element such as h1, p, or a.",
        "Write one sentence that explains its job and visibly includes its tag name.",
        "Use references for angle brackets and check the sentence in a browser.",
        "In your source, identify the tag, its content, and any attributes."
      ], expected: "A reader sees the literal tag in the browser, while your source clearly distinguishes it from actual markup." }
    ],
    "m2-l6": [
      { type: "explanation", title: "HTML changes while keeping its purpose", content: [
        "HTML began as a way to share linked documents. As the web grew, authors needed richer structure, forms, and media. Older versions introduced new features over time, while HTML5 brought a widely recognised modern starting point and meaningful elements such as header, nav, and article. The important lesson is not to memorise every date, but to understand that standards develop as people use the web in new ways.",
        "Today HTML is maintained as a living standard: browser makers and standards groups continue to improve and clarify it. That does not mean a page changes by itself or that every new feature works everywhere immediately. Developers check reliable references and test support before depending on a feature. The familiar <!DOCTYPE html> declaration continues to signal modern standards mode."
      ]},
      { type: "comparison", title: "What changes and what stays useful?", columns: [
        { title: "What evolves", points: ["Available elements and attributes", "Browser support and best practices", "How websites use media and interaction"] },
        { title: "What remains", points: ["HTML describes document structure", "Browsers need clear, interoperable rules", "Semantic meaning helps people and tools"] }
      ]},
      { type: "practice", title: "Explain the history to a friend", steps: [
        "Write a three-sentence timeline: early linked documents, later richer standards, and today’s living standard.",
        "Name one modern semantic element and the information it communicates.",
        "Explain why developers consult current references instead of relying only on memory.",
        "Check that your explanation describes HTML’s purpose, not just its version numbers."
      ], expected: "A useful summary links changes in the standard to changing web needs and notes that current browser support should be checked." }
    ],
    "m2-l7": [
      { type: "explanation", title: "Language is information, not decoration", content: [
        "The lang attribute tells software which language a passage uses. A screen reader may choose pronunciation rules from it, a browser may choose language-aware text handling, and search systems can better understand the document. Put the main language on the root html element so the whole page has a useful default.",
        "A page may contain a phrase in another language. Mark that phrase with its own lang value when the language change matters, rather than changing the whole page. Use a recognised language tag, such as en, fr, or en-GB when a regional variety is important. Do not guess at a regional code: a simple language tag is better than an inaccurate one."
      ]},
      { type: "code", title: "Set a page language and mark a phrase", language: "html", code: `<html lang="en-GB">
  <body>
    <p>Our class learned to say <span lang="fr">bonjour</span>.</p>
  </body>
</html>`, explanation: [
        "The root declares the page’s main language, English as used in Great Britain.",
        "The span changes the language for one French word without changing the page’s default.",
        "If the whole page is French, declare French on html instead."
      ]},
      { type: "mistakes", title: "Language-tag checks", items: [
        { wrong: "Use a flag emoji as the page language.", why: "A flag does not reliably identify the language a person speaks.", fix: "Use a language tag such as en or es." },
        { wrong: "Set lang only on a heading and leave the page unset.", why: "Other page text still lacks a declared default.", fix: "Declare the primary language on the root html element." }
      ]},
      { type: "practice", title: "Label a multilingual greeting", steps: [
        "Choose the main language for a greeting page and put its tag on html.",
        "Write a greeting in that language and one short phrase in another language.",
        "Mark only the second phrase with the appropriate lang attribute.",
        "Explain why a screen reader might benefit from both declarations."
      ], expected: "The page has one clear default language and marks the passage whose language changes." }
    ],
    "m3-l1": [
      { type: "explanation", title: "Paragraphs group one idea", content: [
        "A paragraph is a meaningful unit of writing, not merely a convenient box for styling. A recipe introduction, one step’s explanation, or a short description can each be a paragraph. Splitting several ideas into separate paragraphs gives readers visual pauses and lets browsers, assistive technologies, and CSS treat those ideas consistently.",
        "HTML collapses runs of ordinary spaces, tabs, and line breaks in normal text into a space. This lets you indent and wrap source code for humans without forcing the same layout on the page. If spacing itself matters—such as an address or a carefully formatted code sample—choose a more suitable structure instead of filling a paragraph with spaces."
      ]},
      { type: "mistakes", title: "Paragraph habits to avoid", items: [
        { wrong: "Use one huge paragraph for an entire article.", why: "A long wall of text is difficult to scan and understand.", fix: "Break the writing where the topic or idea changes." },
        { wrong: "Add several empty paragraphs to create large gaps.", why: "Empty content is an unreliable spacing tool.", fix: "Use CSS margin for visual spacing and paragraphs for real text." }
      ]},
      { type: "practice", title: "Edit for readable paragraphs", steps: [
        "Write a short note about a favourite activity with at least three distinct ideas.",
        "Put each idea in its own paragraph and indent the source neatly.",
        "Add extra spaces in the source, then observe how they appear in the browser.",
        "Decide whether any line break is truly part of the content or only source formatting."
      ], expected: "Separate ideas appear as separate paragraphs; extra source whitespace does not control normal browser spacing." }
    ],
    "m3-l2": [
      { type: "explanation", title: "Headings form a readable outline", content: [
        "A heading tells readers what the next part is about. Screen-reader users can navigate by headings, and many people skim a page by reading the headings first. Imagine the outline as a tree: the page’s main topic is at the top, major sections branch beneath it, and a smaller topic belongs under the section that explains it.",
        "Choose a heading level because of its place in that outline, not because the browser’s default font size looks attractive. A section under an h2 can have an h3; a new major section can return to h2. CSS can make any level look the way your design needs. One clear page-level h1 is a helpful convention, while good nesting matters more than chasing a particular count."
      ]},
      { type: "mistakes", title: "Keep the outline logical", items: [
        { wrong: "Jump from h1 to h4 just to get smaller text.", why: "The outline suggests several missing levels of meaning.", fix: "Use the next logical heading level and style its appearance with CSS." },
        { wrong: "Use a heading tag for every bold label.", why: "Headings create navigable structure, not just emphasis.", fix: "Use strong for important phrases and headings for sections." }
      ]},
      { type: "practice", title: "Test your heading outline", steps: [
        "Plan a page about a school trip with one main title and three topic sections.",
        "Add a smaller heading under one section only if it introduces a genuine subtopic.",
        "Write the heading text alone in a list and check whether it tells the page’s story.",
        "Adjust any level that looks chosen for size rather than meaning."
      ], expected: "The outline communicates the page topic, its major sections, and any genuine nested subtopics in order." }
    ],
    "m3-l3": [
      { type: "explanation", title: "Use a break only when the content calls for it", content: [
        "A br creates a line break within one piece of content. It is useful when a line ending is meaningful, such as separate lines in a postal address or a poem. It is not a substitute for starting a new paragraph when the next sentence begins a new idea. Several br tags in a row usually signal that CSS spacing or a better content structure is needed.",
        "An hr represents a change of topic or scene in the content. Browsers often draw it as a horizontal line, but its meaning is the separation, not the decoration. If a design needs a line purely for appearance, a CSS border is a clearer choice. Both br and hr are void elements: they do not wrap text and have no closing tags."
      ]},
      { type: "comparison", title: "Choose the structure that matches the writing", columns: [
        { title: "Use br", points: ["A postal address with line-by-line parts", "A poem where line endings matter", "One compact block with meaningful lines"] },
        { title: "Use p or hr", points: ["A new paragraph or thought → p", "A shift in topic or scene → hr", "Visual-only divider → CSS border"] }
      ]},
      { type: "practice", title: "Repair a page full of breaks", steps: [
        "Write two related sentences and separate them as one paragraph.",
        "Write a short address whose line endings carry meaning and use br there.",
        "Add a new topic after the address and decide whether an hr is appropriate.",
        "Explain which choice would still make sense if browser styling changed."
      ], expected: "Paragraphs group prose, br preserves meaningful line endings, and hr marks a real content transition." }
    ],
    "m3-ex1": [
      { type: "explanation", title: "Draft the article before marking it up", content: [
        "Start by choosing one subject that you can explain from experience, such as a favourite sport, a local place, or how to care for a plant. Jot down a main idea and two supporting ideas before opening the editor. This makes it easier to give each paragraph a job instead of writing filler to satisfy a count.",
        "Next, label the article’s structure: one main heading, two major section headings, and paragraphs that provide evidence or examples. Use an hr only if the topic genuinely shifts, and strong or em only when the words deserve emphasis. A well-marked article should make sense as plain text before you add colour or layout."
      ]},
      { type: "mistakes", title: "Keep the article meaningful", items: [
        { wrong: "Add headings with no writing under them.", why: "A heading promises information that the reader cannot find.", fix: "Give each section at least one paragraph that answers its heading." },
        { wrong: "Make every other word strong or em.", why: "Constant emphasis removes the contrast that helps important words stand out.", fix: "Emphasise only a genuinely important term or stressed phrase." }
      ]},
      { type: "practice", title: "Publish a mini article", steps: [
        "Choose a subject and write a one-sentence purpose for its intended reader.",
        "Create one h1, two h2 sections, and at least two useful paragraphs.",
        "Use one semantic emphasis element only where its meaning fits.",
        "Read the paragraphs without CSS, then read the headings alone and revise unclear parts."
      ], expected: "The article has a coherent outline, paragraphs that support their headings, and emphasis used for meaning rather than decoration." }
    ],
    "m3-l4": [
      { type: "explanation", title: "A generic container is a last useful choice", content: [
        "A div groups content when you need a wrapper but no more meaningful element fits. For instance, it can hold several decorative pieces that must move together in a layout, or provide a hook for CSS around a small group of controls. By itself it does not announce that the content is navigation, an article, or a footer.",
        "Before adding a div, ask what this group means to the reader. If it is a site navigation area, nav communicates that. If it is a standalone article, article may fit; if it is a related section, section may fit when it has a heading. A div is not bad HTML—it is simply neutral, so use it when neutrality is accurate."
      ]},
      { type: "comparison", title: "Pick a container by purpose", columns: [
        { title: "Semantic container", points: ["nav for important navigation links", "article for a self-contained item", "header or footer for those page regions"] },
        { title: "div", points: ["A neutral layout wrapper", "A styling hook with no extra meaning", "A group that does not fit a semantic element"] }
      ]},
      { type: "practice", title: "Label the parts of a club page", steps: [
        "Sketch a header, a navigation menu, a main article, and a row of decorative badges.",
        "Choose meaningful elements for the named page regions.",
        "Decide whether the badge row needs a div or a semantic container, and explain why.",
        "Give any wrapper a useful class if it needs styling."
      ], expected: "Named page regions use meaningful elements; a neutral group can use div without pretending to have a special role." }
    ],
    "m3-l5": [
      { type: "explanation", title: "Quoting fairly and giving context", content: [
        "Use q for a short quotation woven into your own sentence, and blockquote for a longer quotation presented as its own passage. Quotation marks are often supplied by the browser for q, so do not type a second pair unless the language or style requires it. The cite attribute can store a source URL, but it does not display an attribution for the reader.",
        "Readers still need to know who said a quotation and where it came from. Add a visible attribution in nearby text, and quote accurately rather than changing someone’s words. If you are paraphrasing an idea, do not put it in quotation marks; clearly identify the source of the idea instead. A quotation should support your writing, not replace your explanation."
      ]},
      { type: "code", title: "A quote with visible attribution", language: "html", code: `<p>The coach reminded us, <q>practice makes progress</q>.</p>
<figure>
  <blockquote>
    <p>Look after the shared equipment so the next team can use it.</p>
  </blockquote>
  <figcaption>— A note from our club handbook</figcaption>
</figure>`, explanation: [
        "The short q is part of the sentence; the longer passage is set apart in blockquote.",
        "The figcaption shows attribution to a reader rather than hiding it in cite metadata.",
        "Use real, permitted wording when publishing someone else’s quotation."
      ]},
      { type: "practice", title: "Add a quotation responsibly", steps: [
        "Write a sentence of your own that introduces a short quotation.",
        "Create a longer blockquote with a visible source attribution.",
        "Check that the quote is exact and that the surrounding text explains why it matters.",
        "Decide whether cite metadata adds a useful source location."
      ], expected: "Short and long quotations use the element suited to their presentation and provide visible context for readers." }
    ],
    "m3-l6": [
      { type: "explanation", title: "Preserved whitespace changes the display", content: [
        "Inside pre, spaces and line endings are preserved instead of collapsing like ordinary paragraph text. That makes indentation meaningful for code examples, simple text diagrams, and other material where alignment is part of the information. A long preformatted line may overflow a narrow screen, so keep examples short or allow horizontal scrolling with CSS.",
        "The pre element preserves formatting; code identifies computer code. Use them together for a code sample so the structure says both how to display the spacing and what the content represents. The browser does not run code simply because it appears inside code or pre. It is text for the reader unless it is placed in an executable script context."
      ]},
      { type: "code", title: "Preformatted code sample", language: "html", code: `<pre><code>if (rainy) {
  takeUmbrella();
}</code></pre>`, explanation: [
        "pre preserves the indentation and line break.",
        "code identifies the sample as a snippet of programming code.",
        "The snippet is displayed to the visitor; this markup does not execute it."
      ]},
      { type: "mistakes", title: "Preformatted-text pitfalls", items: [
        { wrong: "Use many spaces in a normal paragraph to line up columns.", why: "Normal HTML whitespace collapses.", fix: "Use pre for genuinely whitespace-sensitive content." },
        { wrong: "Put a whole article inside pre to control its layout.", why: "The text stops behaving like ordinary prose and may be hard to read on phones.", fix: "Use paragraphs and CSS for ordinary writing." }
      ]},
      { type: "practice", title: "Display a tiny recipe algorithm", steps: [
        "Write three short pseudocode steps with indentation for a nested action.",
        "Wrap the sample in pre and code and check the spaces in the browser.",
        "Make the sample short enough to fit a narrow screen.",
        "Explain which part preserves layout and which part gives semantic meaning."
      ], expected: "pre preserves the layout; code labels the material as code, and ordinary prose remains in paragraphs." }
    ],
    "m3-l7": [
      { type: "explanation", title: "Choose inline meaning carefully", content: [
        "Inline elements describe a phrase without starting a new paragraph. Strong marks importance; em marks stress emphasis that can change how a sentence is understood; mark highlights text relevant to the current task. Code marks a short code fragment, kbd a key or typed input, and time can identify a date or time. These meanings can help assistive technologies and future tools, even when CSS changes their appearance.",
        "Do not select an element only because its default look is convenient. A word may be bold for visual design without being especially important, and a highlighted search result may be relevant without being a warning. Use CSS for appearance after choosing an accurate semantic element. Inline elements can be nested, but keep the markup simple enough to understand."
      ]},
      { type: "comparison", title: "Meaning first, then appearance", columns: [
        { title: "Semantic choices", points: ["strong → importance", "em → spoken stress", "code or kbd → computer code or user input", "time → a date or time value"] },
        { title: "Style choices", points: ["CSS controls colour and weight", "CSS can change default italics", "A visual highlight does not always mean mark", "Do not choose tags only for their default look"] }
      ]},
      { type: "practice", title: "Annotate a useful instruction", steps: [
        "Write a short instruction that includes an important warning, a stressed word, and a keyboard shortcut.",
        "Use strong, em, and kbd only where each meaning is accurate.",
        "Add a code fragment if the instruction includes a literal value such as save().",
        "Read it aloud and describe how its meaning differs from plain styling."
      ], expected: "Each inline element communicates a specific kind of meaning; CSS can later change how it looks without changing that meaning." }
    ],
    "m3-l8": [
      { type: "explanation", title: "Assemble content before polishing it", content: [
        "A complete article page begins with a clear purpose and audience. Choose information a reader can use, group related points under headings, and give each paragraph one main idea. Semantic elements such as main and article can identify the page’s central region and its self-contained story. A reader should be able to understand the page even before you add colours or a layout.",
        "After the structure works, check the page in a browser and improve it in small passes: first correct missing or misplaced content, then improve the heading outline and wording, then adjust presentation. If you add a date, a quotation, or inline emphasis, select the element that expresses its role. Avoid using blank lines or bold text as a substitute for page structure."
      ]},
      { type: "mistakes", title: "A page-building review", items: [
        { wrong: "Start by styling every sentence separately.", why: "Presentation work cannot fix a confusing content outline.", fix: "Draft and structure the information before polishing its appearance." },
        { wrong: "Use several h1 elements to make section titles prominent.", why: "The outline becomes harder to interpret.", fix: "Use a single clear page title and h2 for its major sections." }
      ]},
      { type: "practice", title: "Create a small guide page", steps: [
        "Choose a practical topic and write a one-sentence goal for the reader.",
        "Create main and article regions, one h1, two h2 sections, and helpful paragraphs.",
        "Add one inline semantic phrase that genuinely fits your writing.",
        "Preview the page and use the heading-only outline to revise its organisation."
      ], expected: "The page has meaningful regions, a logical heading hierarchy, and readable content before decorative styling." }
    ],
    "m3-ex2": [
      { type: "explanation", title: "Markup is an editing decision", content: [
        "Inline semantics work best when they reflect what the writer means. Strong can flag a safety warning or a key condition; em can show which word receives spoken stress; kbd can identify an exact keyboard action; code can identify an instruction or value that belongs to a program. A phrase does not become important just because bold text looks appealing.",
        "The same paragraph can contain several meanings without becoming cluttered. First write a clear sentence, then mark only the parts that need a particular semantic role. Preview it as a reader would, and remove tags that do not add meaning. This keeps both the prose and the markup easy to maintain."
      ]},
      { type: "mistakes", title: "Avoid semantic over-marking", items: [
        { wrong: "Wrap a whole paragraph in strong to make the page feel bold.", why: "The element implies strong importance for all of its contents.", fix: "Use CSS for a paragraph-wide style and reserve strong for truly important text." },
        { wrong: "Use code for every technical-sounding word.", why: "Code is for computer code or machine-readable fragments, not general jargon.", fix: "Leave ordinary technical vocabulary as normal prose." }
      ]},
      { type: "practice", title: "Mark up an instruction card", steps: [
        "Write a short instruction for saving a file with a keyboard shortcut.",
        "Mark the key combination with kbd and any literal code value with code.",
        "Use strong for one genuinely important caution and em for a stressed word.",
        "Explain the meaning of every tag you used and remove any tag you cannot justify."
      ], expected: "Every inline element has a clear purpose and the sentence still reads naturally without depending on its default styling." }
    ],
    "m4-l1": [
      { type: "explanation", title: "A link gives the reader a choice of destination", content: [
        "Hyperlinks connect one resource to another: a different page, a downloadable file, an email action, or a location in a long page. The a element becomes a real link when it has an href destination. The browser gives links familiar behaviours such as keyboard focus, activation with Enter, and a destination preview, helping people move through the web without scripting.",
        "A link should make sense before it is clicked. Its visible words tell the reader where it leads or what action it takes. Links are different from buttons: a link navigates to a resource, while a button performs an action on the current page, such as submitting a form or opening a dialog. Choosing the right control makes the page easier to understand and use."
      ]},
      { type: "comparison", title: "Link or button?", columns: [
        { title: "Link (a)", intro: "Go somewhere", points: ["Open another page", "Jump to a section", "Open an email draft or file"] },
        { title: "Button", intro: "Do something here", points: ["Submit a form", "Show or hide a panel", "Run an action without navigating"] }
      ]},
      { type: "practice", title: "Map journeys through a club website", steps: [
        "Name three pages a club visitor might need, such as events, about, and contact.",
        "Draw an arrow for each navigation journey and label its link text.",
        "Choose one action that should be a button rather than a link.",
        "Explain how descriptive labels help keyboard users and people scanning the page."
      ], expected: "Links represent destinations; buttons represent actions. Labels describe the destination or outcome rather than merely saying “click here.”" }
    ],
    "m4-l2": [
      { type: "explanation", title: "Write link text that works out of context", content: [
        "A visitor may reach a link from a screen reader’s list of links or skim only the clickable words. A label such as “Read the library opening hours” still explains its destination on its own; “click here” does not. Keep labels concise, but include enough detail to distinguish two similar destinations such as separate event pages.",
        "The href is the destination, while the text between the a tags is what readers see and activate. Check that both agree: a link labelled “Download schedule” should lead to a schedule, not a general homepage. The browser makes ordinary anchor links keyboard accessible, so do not replace them with a styled span that only works with a mouse."
      ]},
      { type: "mistakes", title: "Link-label checks", items: [
        { wrong: "Use “here” for every link on a page.", why: "A list of links would contain many identical, unclear labels.", fix: "Name the page, file, or action in the clickable text." },
        { wrong: "Put an entire paragraph inside a link.", why: "The active area and destination become difficult to predict.", fix: "Link the shortest phrase that clearly names the destination." }
      ]},
      { type: "practice", title: "Improve a link list", steps: [
        "Write three vague links such as “click here” for a made-up school page.",
        "Rewrite each one so it names a distinct destination.",
        "Read only the link labels aloud and see whether the destinations remain clear.",
        "Check every href points to the place its label promises."
      ], expected: "Each link label is concise, distinct, and meaningful even without the sentence around it." }
    ],
    "m4-l3": [
      { type: "explanation", title: "Relative paths depend on the current file", content: [
        "An absolute URL names a complete web destination, usually including a scheme such as https and a domain. A relative path names a location from the current document. If events.html and index.html share a folder, events.html is a simple relative path. If the current page is inside pages/, ../index.html moves up to the parent folder before choosing the home page.",
        "Paths are exact: spelling, folder names, file extensions, and letter case can matter on the server that hosts your site. A link can work on your computer but fail online if the server uses case-sensitive paths. Use relative paths for pages in your own project so the site can move to another domain; use absolute URLs for destinations on other websites."
      ]},
      { type: "steps", title: "Work out a relative path", items: [
        { title: "Start at the source file", content: "Find the folder that contains the HTML document with the link." },
        { title: "Move through folders", content: "Use a child-folder name to move down or ../ to move up one level." },
        { title: "Name the destination", content: "Finish with the exact file and extension." },
        { title: "Test it", content: "Activate the link and check the address and loaded page." }
      ]},
      { type: "practice", title: "Trace a folder map", steps: [
        "Imagine index.html and about.html in the root, with events/summer.html in a folder.",
        "Write the path from index to summer.html and from summer.html back to index.",
        "Write an absolute URL for a different organisation’s website.",
        "Change a filename’s letter case and explain why checking exact spelling matters."
      ], expected: "Root-to-child uses events/summer.html; child-to-root uses ../index.html; an outside site needs its full URL." }
    ],
    "m4-l4": [
      { type: "explanation", title: "Opening a new tab is a choice, not a default", content: [
        "Most links should open in the current tab so the browser’s Back button follows the visitor’s journey. A new tab can be useful when someone is following an external reference and wants to keep the current task ready, but surprise tabs can confuse people, especially on phones. Explain the behaviour in the link text when opening a new tab is important.",
        "target=\"_blank\" asks the browser for a new browsing context. Add rel=\"noopener\" to prevent the opened page from controlling the original page through window.opener; noreferrer also limits referrer information in addition to providing opener protection in modern browsers. Do not use a new tab just to keep visitors on your site—give them control over navigation."
      ]},
      { type: "code", title: "Explain the destination and new-tab behaviour", language: "html", code: `<a href="https://example.org/guide"
   target="_blank"
   rel="noopener noreferrer">
  Read the visitor guide (opens in a new tab)
</a>`, explanation: [
        "The label names the destination and tells visitors a new tab will open.",
        "target=\"_blank\" requests that separate browsing context.",
        "rel=\"noopener noreferrer\" protects the original window relationship and limits referrer details."
      ]},
      { type: "practice", title: "Choose a tab behaviour", steps: [
        "List one internal page link and one external reference link for a project.",
        "Decide which, if either, should open in a new tab and justify the decision.",
        "Add a clear label and the appropriate rel value if using _blank.",
        "Test the link and confirm you can return to the original page easily."
      ], expected: "Same-tab navigation is a good default; a new tab is reserved for a clear user benefit and is disclosed." }
    ],
    "m4-l5": [
      { type: "explanation", title: "A mailto link asks the device to compose a message", content: [
        "An href beginning with mailto: asks the visitor’s device to open a configured email application or service. The link does not send a message by itself. The visitor can review, change, or cancel the draft before sending it. If no email app is configured, the link may not behave as expected, so provide the address as visible text when contact is important.",
        "A subject can be pre-filled by adding a question mark and an encoded parameter. Spaces are commonly written as %20 in a URL. Keep the subject short and avoid putting private or sensitive information into a link, because link addresses may be copied, logged, or displayed. For a public contact page, explain what kind of message the address is for."
      ]},
      { type: "code", title: "A clear contact link", language: "html", code: `<p>
  Questions about the club?
  <a href="mailto:hello@example.org?subject=Club%20question">
    Email the club team
  </a>
</p>`, explanation: [
        "The link opens an email draft rather than sending it automatically.",
        "The subject is URL-encoded so the space is represented safely.",
        "Use an address and subject appropriate for a public page; never include private data in the URL."
      ]},
      { type: "practice", title: "Make an email link useful", steps: [
        "Write a short invitation that explains when a visitor should contact you.",
        "Add a mailto link with a descriptive subject and visible action text.",
        "Also show the email address as readable text for devices without a mail app.",
        "Check that the subject contains no personal or confidential details."
      ], expected: "The visitor knows why to email, what the link will open, and how to read the address if the mail app is unavailable." }
    ],
    "m4-ex1": [
      { type: "explanation", title: "Plan the routes before writing links", content: [
        "A small multi-page site is easier to build when its destinations are listed first. Draw the page names and the links visitors need between them. Shared navigation should use the same clear labels on each page, while a page-specific table of contents can help with a long article. This map also reveals a missing destination before you start debugging broken href values.",
        "For each link, decide whether it points to a file in your own project, an outside website, an email action, or a location in the current page. That decision determines the destination format and sometimes the safety or accessibility details. Test each link from the page where it appears; relative paths are calculated from that source file, not from the project folder in your imagination."
      ]},
      { type: "mistakes", title: "Exercise debugging checklist", items: [
        { wrong: "Use the same relative path from every page.", why: "Pages in different folders start from different locations.", fix: "Calculate each path from the document containing that link." },
        { wrong: "Create a link with no href and style it like navigation.", why: "It has no destination and may not work as a real link.", fix: "Use an anchor with a valid destination or a button for an action." }
      ]},
      { type: "practice", title: "Build and test a connected mini-site", steps: [
        "Create a home page and a page in a subfolder, with navigation on both.",
        "Add a clearly labelled external reference with a safe new-tab setup.",
        "Add a mailto contact link and a table of contents for a long section.",
        "Test every link from both pages, including the back-to-top destination."
      ], expected: "Each link reaches the promised page or action, uses paths relative to its source file, and has descriptive text." }
    ],
    "m4-l8": [
      { type: "explanation", title: "Placeholder text is a design aid, not a content plan", content: [
        "Placeholder text can help a designer test whether a card, column, or article layout has enough room before the final writing exists. It can reveal that one line wraps awkwardly or that a page needs more space. But random Latin-like text cannot show whether real instructions are clear, whether a heading is useful, or whether visitors can find the information they need.",
        "Real writing has different word lengths, headings, links, and emphasis, so a layout tested only with Lorem ipsum may break when actual content arrives. Use realistic draft copy as early as possible, mark temporary text clearly for your team, and replace every placeholder before publishing. Search the page for “lorem” during a final content check."
      ]},
      { type: "callout", tone: "warning", title: "Do not use filler to decide content length", content: "A paragraph’s final length should come from what the reader needs to know. If a card looks empty, consider whether it needs a useful detail, a shorter layout, or no card at all—do not invent words just to fill space." },
      { type: "comparison", title: "When a placeholder helps—and when it does not", columns: [
        { title: "Useful during a draft", points: ["Roughly test text length", "See card spacing and columns", "Keep focus on a layout sketch"] },
        { title: "Not a substitute for content", points: ["Cannot explain a real service", "Does not test understandable link text", "May hide layout problems with real wording"] }
      ]},
      { type: "practice", title: "Replace the filler", steps: [
        "Create a draft card with a short placeholder paragraph.",
        "Use it to check spacing, then write original copy for a real reader.",
        "Compare how the actual words wrap and adjust the layout if needed.",
        "Search the final draft for any remaining placeholder phrase."
      ], expected: "Placeholder text is temporary, realistic content is tested before launch, and no filler remains for visitors." }
    ],
    "m4-l6": [
      { type: "explanation", title: "A tooltip cannot carry essential instructions", content: [
        "The title attribute can provide advisory information that some browsers show as a tooltip when a pointer hovers over a link. For example, it might clarify that a file is a PDF. Tooltips are inconsistent: they may not appear on touch screens, can be hard to reach with a keyboard, and may be announced differently by assistive technology.",
        "Put essential information in visible text instead. If visitors need to know a file type or that a link opens a new tab, include that in the link label or nearby text. The title value should add a small optional hint, not repeat a whole paragraph. Keep the link understandable even when the title is never displayed."
      ]},
      { type: "mistakes", title: "Tooltip pitfalls", items: [
        { wrong: "Hide the destination only in title.", why: "Many visitors will never see the tooltip.", fix: "Make the visible link text describe its destination." },
        { wrong: "Use title as a replacement for alt or a label.", why: "Those attributes serve different purposes and users.", fix: "Provide the proper text alternative or visible control label." }
      ]},
      { type: "practice", title: "Make download details accessible", steps: [
        "Write a link to a pretend club report PDF.",
        "Make the visible link text name the report and file type.",
        "Add a short optional title hint and compare what is still clear without it.",
        "Explain why the hint should not contain the only important information."
      ], expected: "Visitors can identify the linked file from visible text alone; title adds only optional advisory detail." }
    ],
    "m4-l7": [
      { type: "explanation", title: "A fragment identifies a place, not a separate file", content: [
        "A fragment link uses a hash followed by an id to ask the browser to move to an element in the current document. For example, href=\"#events\" points to the element whose id is events. The id must match exactly and should occur only once on the page. A descriptive, simple id is easier to maintain than one that changes whenever the wording changes.",
        "In-page links are helpful for long guides, FAQs, and pages with several sections. They do not replace sensible headings: the destination still needs context so readers know where they arrived. Consider a visible “Back to top” link or a clear table of contents. If a fixed navigation bar covers the destination after scrolling, CSS scroll-margin can provide space above the target."
      ]},
      { type: "code", title: "A contents link and its destination", language: "html", code: `<nav aria-label="On this page">
  <a href="#materials">Materials</a>
</nav>
<section>
  <h2 id="materials">Materials</h2>
  <p>Gather a notebook and a pencil.</p>
</section>`, explanation: [
        "The fragment after # matches the target element's id exactly.",
        "A labelled navigation region explains that these links are page contents.",
        "A heading gives useful context when the browser jumps to the destination."
      ]},
      { type: "practice", title: "Build a table of contents", steps: [
        "Write three sections for a long how-to page and give each heading a unique id.",
        "Add a small navigation list at the top with matching fragment links.",
        "Activate every link, then add a return-to-top link and test it.",
        "Check that each destination heading remains visible after the jump."
      ], expected: "Every fragment matches one unique id, and each destination provides enough context to continue reading." }
    ],
    "m4-l9": [
      { type: "explanation", title: "Connect a fragment to a stable destination", content: [
        "A fragment can be part of a link to another page too: a URL can name a document and then include # followed by a target id. The browser loads that document and moves to the matching element. This lets a page link directly to a particular answer in a help guide instead of asking the visitor to search through the whole page.",
        "Keep ids unique, short, and stable. A link breaks if a heading changes its id but the link is not updated, so use names that describe the section rather than its current position, such as #returns instead of #section-3. If a destination is not found, the browser generally loads the page without jumping, so test the exact spelling from another page as well as from the same page."
      ]},
      { type: "code", title: "Link directly to another page section", language: "html", code: `<a href="help.html#returns">Read the returns policy</a>

<!-- In help.html -->
<h2 id="returns">Returns and exchanges</h2>`, explanation: [
        "The path names the other document; the fragment names an element inside it.",
        "The id must be unique in help.html and match the fragment exactly.",
        "A descriptive label tells visitors what they will find at the destination."
      ]},
      { type: "mistakes", title: "Fragment-link checks", items: [
        { wrong: "Use href=\"#returns\" to target an id on another page.", why: "Without a document path, the link searches the current page.", fix: "Include the other page path before the fragment." },
        { wrong: "Give two headings the same id.", why: "A fragment should identify one unambiguous destination.", fix: "Choose a unique id for each section and update its links." }
      ]},
      { type: "practice", title: "Create a deep link", steps: [
        "Create a help page with at least three named sections.",
        "Give the returns heading a unique, stable id.",
        "Add a link to that section from a separate home page.",
        "Test the link after changing unrelated text and verify it still lands correctly."
      ], expected: "The link names both the correct document and its unique section, then remains valid when unrelated content changes." }
    ]
  };

  for (const [lessonId, sections] of Object.entries(expansions)) {
    const lesson = lessons[lessonId];
    if (!lesson) {
      throw new Error(`Cannot expand Modules 1–4: lesson "${lessonId}" is missing from window.COURSE_CONTENT.lessons.`);
    }
    if (!/^m[1-4]-/.test(lessonId) || !Array.isArray(lesson.sections)) {
      throw new Error(`Cannot expand Modules 1–4: lesson "${lessonId}" is not a valid Module 1–4 lesson.`);
    }
    lesson.sections.push(...sections);
  }
})();
