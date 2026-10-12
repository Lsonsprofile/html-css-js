(() => {
  const lessons = window.COURSE_CONTENT?.lessons;
  if (!lessons) {
    throw new Error('[lesson-expansions/modules-5-7] window.COURSE_CONTENT.lessons is not available.');
  }

  const expansions = {
    'm5-l1': [
      {
        type: 'explanation',
        title: 'Find the image file and understand its size',
        content: [
          'An img element is a void element: it has attributes but no closing tag and no child content. The src value is a location, not the picture itself. A relative path such as images/robot.jpg starts from the folder containing the HTML file, so moving the page or changing a letter in the filename can break it. File names and letter case matter on many web servers. If an image is missing, compare the path with the actual folder tree before changing the HTML structure.',
          'Image files also have different jobs. JPEG is common for photographs, PNG can keep transparent areas, and SVG is useful for simple vector artwork such as logos. WebP and AVIF can make suitable images smaller, but use a format that your project tools and browsers support. Do not enlarge a tiny image until it looks blurry. Choose a sensible source size, and provide width and height attributes when you know the image dimensions so the browser can reserve space while it loads.'
        ]
      },
      {
        type: 'code',
        title: 'Use a project image with room to adapt',
        language: 'html',
        code: `<img src="images/robot-team.webp"
     alt="Three students testing their wheeled robot"
     width="960" height="640"
     loading="lazy">`,
        explanation: [
          'The path is relative to the HTML file; the images folder must sit beside that file.',
          'The dimensions describe the source ratio and help reserve layout space. CSS can still let the image shrink on a small screen.',
          'Lazy loading is helpful for an image farther down a long page, but do not delay the main image at the top of the page.'
        ]
      },
      {
        type: 'mistakes',
        title: 'Diagnose the file before rewriting the page',
        items: [
          { wrong: `<img src="/images/robot.webp">`, why: 'A leading slash points to the site root, which may not be where a small local project is served.', fix: `<img src="images/robot.webp" alt="A small robot on a test track">` },
          { wrong: `<img src="images/robot.png" width="960" height="640">`, why: 'The declared ratio should match the actual image, and the image still needs an appropriate alt value.', fix: `<img src="images/robot.png" alt="A small robot on a test track" width="960" height="640">` }
        ]
      },
      {
        type: 'practice',
        title: 'Trace an image from folder to page',
        expected: 'Both images load from the stated relative paths, have useful alternatives and matching dimensions, and stay undistorted when resized.',
        steps: [
          'Add two images to an images folder and write down their exact filenames and dimensions.',
          'Insert each with a relative src, useful alt text, and matching width and height attributes.',
          'Resize the browser and confirm neither image stretches past its container or becomes distorted.',
          'Temporarily change one filename in the HTML. Use the browser error and folder tree to explain how you would repair the path.'
        ]
      }
    ],
    'm5-l2': [
      {
        type: 'explanation',
        title: 'Make the link purpose clear without relying on the picture',
        content: [
          'An image inside an a element is still a link: the anchor supplies the destination and the image supplies the content of its clickable area. Think about the useful name a visitor hears when navigating by links. If the image is the only content in the anchor, its alt text generally needs to identify the destination or action, such as “Visit the school garden gallery,” rather than only naming objects in the picture.',
          'If the same link also contains visible text, the text may already explain the destination. In that case a redundant image can use alt=\"\" so its description is not announced twice. Avoid making a whole large decorative picture clickable when the destination is unclear. Keep the target useful, make focus visible, and test with the keyboard: Tab should reach the link and Enter should activate it.'
        ]
      },
      {
        type: 'comparison',
        title: 'Choose an image-link label that fits its job',
        columns: [
          { title: 'Image is the only link content', points: ['Alt text names the action or destination', 'Keep the wording short and specific', 'The link remains understandable when images are unavailable'] },
          { title: 'Image beside visible link text', points: ['Visible text provides the link name', 'Use empty alt for a redundant decorative image', 'Avoid announcing the same destination twice'] }
        ]
      },
      {
        type: 'code',
        title: 'Give a linked project badge a clear name',
        language: 'html',
        code: `<a href="projects/garden.html">
  <img src="images/garden-badge.svg"
       alt="Open the school garden project">
</a>`,
        explanation: [
          'The anchor points to a page inside the project.',
          'The alt value tells a visitor what activating the image link will do.'
        ]
      },
      {
        type: 'practice',
        title: 'Test the link as a visitor',
        expected: 'Each image link has a clear accessible purpose, visible keyboard focus, and opens its intended destination.',
        steps: [
          'Create one image-only link and one link containing an image plus visible text.',
          'Write an accessible name for the first; decide whether the second image repeats the text.',
          'Use Tab to reach both links and check that a visible focus indicator appears.',
          'Activate each link with Enter and verify it reaches the intended page.'
        ]
      }
    ],
    'm5-l3': [
      {
        type: 'explanation',
        title: 'Write an alternative for the information, not the pixels',
        content: [
          'Alt text is a text alternative chosen for the image’s purpose in this particular page. A short description can help when a photo provides evidence, introduces a person, or shows an object the surrounding words do not name. Describe the important point and keep it concise; a visitor usually does not need a colour-by-colour inventory. The same photo can need different alternative text in a science explanation and in a link to a photographer’s page.',
          'Use alt=\"\" when an image is purely decorative or repeats information that is already available in nearby text. Do not omit the alt attribute: an omitted value can cause a screen reader to announce a filename. A complex chart may need a brief alt summary plus a nearby table or paragraph with the important values and relationships. Alt text is not a caption; a visible figcaption can add context for everyone.'
        ]
      },
      {
        type: 'comparison',
        title: 'Decide whether the image carries unique information',
        columns: [
          { title: 'Informative photo', points: ['State the relevant event or detail', 'Leave out decoration unrelated to the page', 'Keep it distinct from the caption'] },
          { title: 'Decorative flourish', points: ['Use alt="" when it adds no information', 'Do not omit the attribute', 'Do not force visitors to hear a meaningless filename'] },
          { title: 'Complex chart', points: ['Give a short overview in alt', 'Provide exact values in nearby text or a table', 'Explain the conclusion rather than every pixel'] }
        ]
      },
      {
        type: 'callout',
        tone: 'example',
        title: 'The page changes the right description',
        content: 'A photo of a seedling may need “A bean seedling with its first two leaves” in a plant-growth lesson. On a page where the photo is only a coloured banner beside the heading “Growing Beans,” an empty alternative may be better because the image adds no new information.'
      },
      {
        type: 'practice',
        title: 'Make and review three alt decisions',
        expected: 'Informative content has concise alternatives, decoration has empty alt, and the chart has a summary plus accessible detail.',
        steps: [
          'Choose a photo, a decorative border image, and a simple chart.',
          'For each, write its purpose on the page before drafting any alt text.',
          'Draft concise alt text for informative content, empty alt for decoration, and a short chart summary with a plan for nearby details.',
          'Ask a partner to listen to the page text and identify anything repeated or missing.'
        ]
      }
    ],
    'm5-l4': [
      {
        type: 'explanation',
        title: 'Keep an image in proportion as the layout changes',
        content: [
          'A picture has an intrinsic width-to-height ratio. If CSS gives it a new width but also forces an unrelated height, people and objects can look stretched. A common responsive rule is max-width: 100% with height: auto: the image may shrink to fit its parent, while the browser calculates a matching height. The rule does not make a huge original file small, so crop or export an appropriately sized source as well.',
          'Use figure when an image, illustration, or code sample forms a self-contained item that may have a caption. figcaption is optional and should explain or credit the item, rather than repeat its alt word for word. Width and height attributes describe the source dimensions; they do not mean that every screen must display the image at that exact size. A clear caption and concise alternative serve different purposes.'
        ]
      },
      {
        type: 'code',
        title: 'Let a gallery image shrink without distortion',
        language: 'css',
        code: `figure { margin: 0; }
figure img {
  display: block;
  max-width: 100%;
  height: auto;
}
figcaption { margin-top: 0.5rem; }`,
        explanation: [
          'The image cannot grow wider than its figure container.',
          'Automatic height preserves its original ratio.',
          'display: block removes the small inline-image baseline gap beneath the image.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Resizing on screen does not optimise the download',
        content: 'A 5000-pixel photograph can still take a long time to download even when CSS displays it at 500 pixels. Use a sensibly sized, compressed image for the role, and provide larger alternatives only when the design genuinely needs them.'
      },
      {
        type: 'practice',
        title: 'Build a captioned image that survives resizing',
        expected: 'The image fits its container without distortion, and its caption and alternative provide distinct useful information.',
        steps: [
          'Add a figure with an img, matching width and height attributes, useful alt text, and a figcaption.',
          'Apply the responsive CSS and view the page at a wide and narrow viewport.',
          'Remove height: auto briefly and observe the distortion; then restore it.',
          'Explain what information belongs in the caption and what should be in the alternative text.'
        ]
      }
    ],
    'm5-ex1': [
      {
        type: 'steps',
        title: 'Plan and build an accessible mini-gallery',
        items: [
          { title: 'Choose a story', content: 'Pick a small theme such as seed growth, a sports practice, or a robot build. A shared subject gives the images context instead of making a random collection.' },
          { title: 'Prepare the files', content: 'Use your own images or media you are permitted to use. Put them in an images folder, choose sensible file sizes, and record the exact filenames.' },
          { title: 'Add meaning', content: 'Give the gallery a heading and introduction. Use a figure when a picture has a useful caption, and decide separately whether each image is informative or decorative.' },
          { title: 'Build one link carefully', content: 'Make one picture link to a related page or larger view. If the image is the only content in the link, make its alt text describe the destination or action.' },
          { title: 'Review the experience', content: 'Check every path, keyboard focus, narrow-screen fit, and image proportions. Read the page with images hidden and make sure its purpose still comes through.' }
        ]
      },
      {
        type: 'explanation',
        title: 'Treat the gallery as a small publishing project',
        content: [
          'Before writing markup, make a simple inventory: filename, what the image contributes, whether it is decorative, its caption if needed, and any credit required by the licence. This prevents captions, alternatives, and rights information from being guessed at the last minute. A good gallery tells a reader why the pictures belong together.',
          'Keep the design consistent without making every image identical. A shared class can control maximum width, spacing, and borders, while each caption and alt value stays specific to its own image. If the gallery uses thumbnails linking to larger files, label each link so its destination is clear and do not imply that a larger view will open unless it actually does.'
        ]
      },
      {
        type: 'practice',
        title: 'Use a final gallery quality checklist',
        steps: [
          'Check that every image loads and that the alt value reflects its role.',
          'Confirm that captions are readable and do not merely repeat alt text.',
          'Tab through the page and activate the linked image without a mouse.',
          'Test a narrow viewport and explain one change you made for clarity or performance.'
        ],
        expected: 'A reader can understand the gallery topic without seeing the images, every link has a clear purpose, and the images fit without stretching.',
        hint: 'If a description repeats the adjacent heading, ask whether the image adds information at all; an empty alt value may be right.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Credit and permission are part of the task',
        content: 'A picture being visible in a search result does not automatically grant permission to reuse it. Use work you created, a clearly licensed source, or a teacher-approved collection, and follow any attribution instructions.'
      }
    ],
    'm6-l1': [
      {
        type: 'explanation',
        title: 'Use unordered lists for sets, not for visual dots',
        content: [
          'An unordered list represents several related items when changing their order would not change the meaning. The ul element is the group and each li is one item. If an item needs a paragraph or another list, put that content inside the relevant li; do not place loose paragraphs directly among the ul children. Clear nesting shows which materials belong under which larger item.',
          'Lists are useful beyond shopping notes. Navigation links, ingredients, and features can each form a list when they are genuinely related. CSS can hide bullets or arrange a list horizontally, but visual styling does not change its meaning. Conversely, do not use a list just to get an indent or a bullet beside unrelated text; choose elements for their relationships, then style them.'
        ]
      },
      {
        type: 'code',
        title: 'Represent one main item and its related parts',
        language: 'html',
        code: `<h2>Make a model bridge</h2>
<ul>
  <li>Cardboard base</li>
  <li>Joining materials
    <ul>
      <li>Paper clips</li>
      <li>Reusable tape</li>
    </ul>
  </li>
  <li>Ruler for testing</li>
</ul>`,
        explanation: [
          'The nested list belongs inside the Joining materials list item.',
          'The relationship is meaningful: paper clips and tape are both kinds of joining material.',
          'The order of these materials does not describe a sequence of actions.'
        ]
      },
      {
        type: 'mistakes',
        title: 'Keep list structure valid and useful',
        items: [
          { wrong: `<ul>\n  <li>Notebook</li>\n  Charger\n</ul>`, why: 'Charger is a loose text node rather than a list item.', fix: `<ul>\n  <li>Notebook</li>\n  <li>Charger</li>\n</ul>` },
          { wrong: `<ul><li>First</li><li>Second</li></ul>`, why: 'This is valid, but putting all content on one line makes it harder for a learner to inspect and edit.', fix: `<ul>\n  <li>First</li>\n  <li>Second</li>\n</ul>` }
        ]
      },
      {
        type: 'practice',
        title: 'Group a collection and justify its order',
        expected: 'The unordered list contains valid, meaningfully grouped items whose order does not change their meaning.',
        steps: [
          'Write a list of six items needed for a hobby or class activity.',
          'Add one nested group only if some items are clearly part of a larger item.',
          'Choose whether order matters and explain why ul fits better than ol.',
          'Inspect the HTML to check every li is inside a list and every nested group is inside its parent li.'
        ]
      }
    ],
    'm6-l2': [
      {
        type: 'explanation',
        title: 'Let the list represent the sequence',
        content: [
          'Use ol when the position of an item matters: a recipe method, a setup sequence, a ranked set, or stages in a process. Each item is still marked up with li. The browser generates the numbering, so inserting a new step in the middle automatically updates later numbers. This is more reliable than typing “1.” into each paragraph, especially if you revise the instructions.',
          'The start attribute can be useful when a sequence deliberately begins at a particular number, such as a continuation from an earlier list. The reversed attribute can present descending order. These attributes should reflect the task, not be used just to decorate a list. If steps need substeps, place a nested list inside the appropriate li and choose its type based on the meaning of that sub-sequence.'
        ]
      },
      {
        type: 'code',
        title: 'Nest a short setup sequence under its main step',
        language: 'html',
        code: `<ol>
  <li>Prepare the project folder
    <ol>
      <li>Create an images folder.</li>
      <li>Save the page as index.html.</li>
    </ol>
  </li>
  <li>Open the page in a browser.</li>
</ol>`,
        explanation: [
          'The smaller sequence is part of the first top-level step.',
          'Moving a list item changes the sequence while the browser keeps the numbering correct.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Check that order is truly meaningful',
        content: 'If a reader may choose any item first without changing the result, an unordered list is probably the better choice. Use numbering because sequence matters, not because numbered markers look tidy.'
      },
      {
        type: 'practice',
        title: 'Write instructions that can be followed',
        steps: [
          'Choose a familiar task such as saving a web page or planting a seed.',
          'Write four or more actions in the order they must happen and mark them up with ol and li.',
          'Add a nested list only when a step genuinely contains smaller steps.',
          'Move one li in the source and verify that the new order still makes sense.',
          'Ask a partner to follow the steps and mark any action that needs clearer wording.'
        ],
        expected: 'The steps form a meaningful sequence, each is a separate li, and the browser-generated numbering matches the intended order.',
        hint: 'Try reading only the first sentence of each step. Can a person predict what happens next?'
      }
    ],
    'm6-l3': [
      {
        type: 'explanation',
        title: 'Pair names with descriptions',
        content: [
          'A description list is a group of terms and their associated descriptions or values. Use dl as the group, dt for a term or name, and dd for its description. One term may have more than one description, and a description may sometimes relate to more than one term. Keep the source order clear so the associations make sense when read aloud or displayed without CSS.',
          'A glossary is a familiar example, but a dl can also describe metadata such as a project name and its status. It is not a replacement for every two-column layout, nor should it be chosen merely because the browser indents dd by default. Use a heading and paragraph when the content is a normal section of prose, or a table when readers need to compare values across rows and columns.'
        ]
      },
      {
        type: 'code',
        title: 'Describe two project details',
        language: 'html',
        code: `<h2>Project details</h2>
<dl>
  <dt>Prototype</dt>
  <dd>A first model used to test an idea.</dd>

  <dt>Test date</dt>
  <dd>Friday afternoon, after the design review.</dd>
</dl>`,
        explanation: [
          'Each dt introduces the name of a term or detail.',
          'The dd that follows gives its description or value.',
          'Whitespace makes the source easier to read but does not create the association; the elements do.'
        ]
      },
      {
        type: 'comparison',
        title: 'Pick the structure that matches the relationship',
        columns: [
          { title: 'dl', points: ['Terms paired with explanations or values', 'Useful for glossaries and metadata', 'Relationships are between names and descriptions'] },
          { title: 'ul or ol', points: ['Related items or meaningful sequences', 'Useful for materials or steps', 'Each item has the same kind of list role'] },
          { title: 'table', points: ['Comparable data arranged across rows and columns', 'Useful when row and column headings matter', 'Not a general-purpose page layout tool'] }
        ]
      },
      {
        type: 'practice',
        title: 'Create a mini glossary with meaningful pairs',
        expected: 'Each glossary term is paired with a clear description in a description list.',
        steps: [
          'Choose three terms from a subject you are learning.',
          'Write each term as dt and a plain-language explanation as dd inside one dl.',
          'Add a second description to one term only if it provides a distinct useful detail.',
          'Compare your choice with ul: explain why a set of term-description pairs is the more accurate relationship.'
        ]
      }
    ],
    'm6-ex1': [
      {
        type: 'steps',
        title: 'Create a how-to page with three kinds of lists',
        items: [
          { title: 'Choose a process', content: 'Pick a safe activity you can explain, such as making a paper bookmark or organising a school project. Give the page a heading and a short introduction.' },
          { title: 'List the materials', content: 'Use ul for things that may be gathered in any order. Nest a short list only if some materials form a genuine group.' },
          { title: 'Write the method', content: 'Use ol for actions that must happen in sequence. Make each li start with a clear action and include enough detail for another learner.' },
          { title: 'Explain useful vocabulary', content: 'Use dl for two or three terms with concise definitions. Do not use it just to create indentation.' },
          { title: 'Review the finished page', content: 'Check nesting, source indentation, spelling, and whether the list types express the correct relationships.' }
        ]
      },
      {
        type: 'explanation',
        title: 'A strong exercise shows why each list exists',
        content: [
          'The goal is not to include one of every tag as a checklist. A materials list is unordered because the reader can collect items in any order. The method is ordered because its sequence changes the result. A glossary uses a description list because each term connects to an explanation. If your chosen process has no vocabulary worth defining, choose a different process rather than inventing meaningless pairs.',
          'Keep each item focused. A useful instruction usually begins with an action verb, and a definition should explain a term rather than repeat it. Use headings to tell readers what each list is for; the list element alone does not supply a visible heading. A second person following the page is a better test than whether the HTML looks colourful.'
        ]
      },
      {
        type: 'practice',
        title: 'Peer-test and refine the how-to page',
        steps: [
          'Ask a partner to gather materials and follow your steps without extra explanation.',
          'Circle a list whose order or relationships are unclear and decide whether its element type is correct.',
          'Check that nested lists are inside a parent li and that terms and descriptions are properly paired.',
          'Revise one item to make it more precise, then explain the change.'
        ],
        expected: 'The materials, instructions, and vocabulary use list structures that match their meaning; another learner can follow the process.',
        hint: 'Ask “Could I change the order?” for each collection. If not, decide whether the sequence is important or whether it is a set of named values.'
      }
    ],
    'm7-l1': [
      {
        type: 'explanation',
        title: 'Separate a page’s meaning from its visual design',
        content: [
          'HTML describes what content is and how it is organised: a heading, a paragraph, a navigation region, or a list. CSS describes how that content is presented: colour, spacing, type size, and layout. Keeping those responsibilities separate means a heading can remain a heading even when the design changes, and the same visual rules can be reused on several pages.',
          'A shared stylesheet makes maintenance more predictable. If every page uses the same class for a card, adjusting its border or spacing in one place can update all those cards. A stylesheet does not automatically make a page accessible or attractive, though. Structure still needs to be meaningful, and colours, focus indicators, and small-screen layouts still need to be checked with real content.'
        ]
      },
      {
        type: 'code',
        title: 'Style meaning without changing the HTML job',
        language: 'css',
        code: `.page-title {
  color: #173b73;
  font-family: system-ui, sans-serif;
}

.notice {
  border-left: 4px solid #2c7a68;
  padding: 1rem;
}`,
        explanation: [
          'The classes describe styling hooks; the HTML still supplies headings and meaningful notice text.',
          'A shared class can be applied consistently without copying a style attribute to every element.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'CSS is presentation, not a substitute for meaning',
        content: 'Making a paragraph look large and bold does not turn it into a heading. Use the right HTML element first, then use CSS to present it.'
      },
      {
        type: 'practice',
        title: 'Compare a quick inline design with reusable CSS',
        expected: 'The shared stylesheet changes both pages consistently, while the HTML keeps its semantic structure.',
        steps: [
          'Create two small HTML pages with the same heading and notice content.',
          'Add the same design using a shared stylesheet and compare it with repeated inline styles.',
          'Change the notice accent colour once and record how many edits each approach needs.',
          'Check the heading structure and keyboard focus; styling alone cannot supply either.'
        ]
      }
    ],
    'm7-l2': [
      {
        type: 'explanation',
        title: 'Read a CSS rule as a selector and a set of instructions',
        content: [
          'A CSS rule has a selector followed by a declaration block in braces. Each declaration names a property, a colon, and a value; a semicolon separates declarations. The selector answers “which elements?”, while each declaration answers “what should change?” For example, color is a property and navy is its value. Properties and values must be recognised CSS names and valid for the property.',
          'CSS ignores extra whitespace between many tokens, but consistent indentation makes rules easier to debug. Comments use /* and */ and can explain a reason for a rule. When a rule appears to do nothing, check the braces and punctuation, spelling of the property, selector match, and browser developer tools. A misspelled declaration may be ignored while the rest of the stylesheet continues to work.'
        ]
      },
      {
        type: 'code',
        title: 'Use more than one declaration in a rule',
        language: 'css',
        code: `.project-title {
  color: #183b65;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}`,
        explanation: [
          'The class selector matches elements whose class list includes project-title.',
          'Each property sets one aspect of presentation.',
          'The semicolon after each declaration makes the boundary clear, including the final one.'
        ]
      },
      {
        type: 'mistakes',
        title: 'Fix syntax without guessing at new properties',
        items: [
          { wrong: `.notice { color #173b73; }`, why: 'The colon separating the property and value is missing.', fix: `.notice { color: #173b73; }` },
          { wrong: `.notice { background-color: blue;`, why: 'The declaration block has no closing brace, so following rules may be read incorrectly.', fix: `.notice { background-color: blue; }` }
        ]
      },
      {
        type: 'practice',
        title: 'Build and debug a small rule set',
        expected: 'All intended rules match and apply, and the syntax error is found and corrected.',
        steps: [
          'Create a heading, paragraph, and button with clear class names.',
          'Write one rule for each class using at least two declarations.',
          'Intentionally remove a colon or misspell a property, then use the browser Styles panel to find the ignored declaration.',
          'Repair the rule and explain the selector, property, and value in one sentence.'
        ]
      }
    ],
    'm7-l3': [
      {
        type: 'explanation',
        title: 'Choose selectors that explain the styling intention',
        content: [
          'A type selector such as p is useful for a broad default because it matches every paragraph. A class such as .warning is reusable on several elements and can describe a role. An id such as #site-title is intended for one unique element in the document. An attribute selector such as a[download] can match links that have a particular attribute, which is more precise than selecting every link.',
          'Class names should describe a purpose rather than a temporary appearance when possible. A class called .success-message remains meaningful if the design colour changes; .green-text is tied to one visual choice. Avoid selectors that accidentally style unrelated content. Start with the simplest selector that accurately describes the target, then inspect the page to confirm its matches.'
        ]
      },
      {
        type: 'code',
        title: 'Match an element by its role or attribute',
        language: 'css',
        code: `.resource { border-bottom: 1px solid #cbd5e1; }
a[download] { font-weight: 700; }
#page-title { margin-block: 0 1rem; }`,
        explanation: [
          'The resource class can be shared by multiple resource cards.',
          'The attribute selector matches a link that has a download attribute.',
          'The id selector should match one page title, not every heading.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Class selectors are a flexible everyday choice',
        content: 'If a visual role appears more than once, a class usually gives you a reusable target without giving every rule the extra strength of an id selector.'
      },
      {
        type: 'practice',
        title: 'Predict matches before opening the browser',
        expected: 'The type, class, id, and attribute selectors match exactly the elements predicted.',
        steps: [
          'Create two paragraphs, one with class note, one heading with id page-title, and one download link.',
          'Write a type, class, id, and attribute selector for those elements.',
          'For each selector, list exactly which element or elements should match.',
          'Use developer tools to compare your prediction with the browser’s matched rules and revise overly broad selectors.'
        ]
      }
    ],
    'm7-l4': [
      {
        type: 'explanation',
        title: 'Use combinators to describe nearby structure',
        content: [
          'A combinator connects selectors using relationships in the HTML tree. A space means the right-hand element can be anywhere inside the left-hand element. The child symbol > limits the match to one direct level. The plus symbol + selects the next matching sibling immediately after the left element, and ~ selects later matching siblings with the same parent. These symbols describe structure, not visual distance.',
          'Combinators can help style a card’s heading or a paragraph following a heading, but a selector that depends on many layers of nesting can break when the HTML is reorganised. If a style belongs to a reusable component role, a clear class may be easier to understand than a long relationship chain. Check both the elements that should match and a similar element that should not.'
        ]
      },
      {
        type: 'comparison',
        title: 'Read each relationship from left to right',
        columns: [
          { title: 'article p', points: ['Any paragraph inside an article', 'Can match through several nested elements', 'A descendant relationship'] },
          { title: 'article > p', points: ['Only a paragraph directly inside an article', 'Does not pass through a section wrapper', 'A parent-child relationship'] },
          { title: 'h2 + p', points: ['The paragraph immediately after an h2', 'Both must share the same parent', 'An adjacent-sibling relationship'] }
        ]
      },
      {
        type: 'code',
        title: 'Avoid confusing a child with a descendant',
        language: 'html',
        code: `<article class="guide">
  <h2>First steps</h2>
  <p>This paragraph is a direct child.</p>
  <section>
    <p>This paragraph is a descendant, not a direct child.</p>
  </section>
</article>`,
        explanation: [
          '.guide p matches both paragraphs.',
          '.guide > p matches only the paragraph directly inside the article.'
        ]
      },
      {
        type: 'practice',
        title: 'Test the four relationships',
        expected: 'Each selector matches elements according to its descendant, child, adjacent-sibling, or general-sibling relationship.',
        steps: [
          'Add a heading, two paragraphs, and a nested section inside an article.',
          'Try descendant, child, adjacent-sibling, and general-sibling selectors one at a time.',
          'Predict the matching paragraph before each test and record what changes.',
          'Replace one complicated relationship selector with a class and compare which is easier to maintain.'
        ]
      }
    ],
    'm7-l5': [
      {
        type: 'explanation',
        title: 'Trace a conflict in the cascade instead of adding overrides',
        content: [
          'When more than one declaration sets the same property on an element, the cascade decides which applies. The full decision considers origin and importance, cascade layer, selector specificity, and source order. Specificity is not a general score across every kind of declaration; it is compared at the appropriate point in that process. For two normal author rules in the same layer, compare specificity, then use the later rule when specificity ties.',
          'A declaration can lose for different reasons: its selector may not match, it may be overridden, or its property value may be invalid. In developer tools, crossed-out declarations are often overridden, while the computed styles show the final value. Inspect the winning rule and the losing rule together. Removing an unnecessary conflict is usually clearer than stacking more selectors or adding !important.'
        ]
      },
      {
        type: 'code',
        title: 'Compare a class rule with a type rule',
        language: 'css',
        code: `p { color: #334155; }
.notice { color: #9a3412; }

/* Both match the example paragraph; the class rule is more specific. */`,
        explanation: [
          'The type selector matches all paragraphs; the class selector matches elements with class notice.',
          'For these ordinary rules in the same context, the class selector is more specific and supplies the colour.',
          'Keep HTML markup out of a real CSS file; the comment here identifies the example element.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Do not treat !important as a normal repair tool',
        content: 'Important declarations change the cascade and can make future overrides confusing. First check the matched selector, source order, and intended component rule; remove or simplify the conflict where possible.'
      },
      {
        type: 'practice',
        title: 'Explain the winning declaration',
        expected: 'The winning color is correctly explained first by specificity and then by source order when specificity ties.',
        steps: [
          'Make two rules that set the same paragraph colour: one type selector and one class selector.',
          'Inspect the paragraph in developer tools and identify both declarations.',
          'Change the selectors so their specificity ties, then move one rule later in the file.',
          'Write down the cascade reason for each winner; do not use !important.'
        ]
      }
    ],
    'm7-l6': [
      {
        type: 'explanation',
        title: 'Understand the browser’s work as a useful model',
        content: [
          'A browser reads HTML and builds a document object model (DOM), then reads CSS and works out the applicable styles. It combines those styles with the element tree to calculate sizes and positions, then paints text, borders, images, and backgrounds. This is a teaching model, not a promise that every browser performs each task once in a perfectly separate stage. Loading an image or changing content can require layout or paint work again.',
          'Developer tools help connect what you wrote to what appeared. The Elements panel can show the selected node, matched rules, overridden declarations, and computed values. If a rule is missing, first verify the stylesheet loaded and the selector matches. If it is crossed out, inspect the cascade. If the value applies but the page looks wrong, check layout, dimensions, and the surrounding content.'
        ]
      },
      {
        type: 'comparison',
        title: 'Ask which kind of browser work is involved',
        columns: [
          { title: 'Parsing and matching', points: ['Is the HTML structure present?', 'Did the CSS file load?', 'Does the selector match?'] },
          { title: 'Style and layout', points: ['Which value won the cascade?', 'What size and position were calculated?', 'Does content wrap as expected?'] },
          { title: 'Paint and resources', points: ['Are colours, borders, and images visible?', 'Did the image or font load?', 'Does a later content change affect the result?'] }
        ]
      },
      {
        type: 'practice',
        title: 'Follow one paragraph from markup to screen',
        expected: 'The paragraph?s DOM node, winning computed font size, and layout response to a margin change are identified.',
        steps: [
          'Select a paragraph in developer tools and find its DOM node.',
          'Locate the CSS rule that sets its font size and identify any overridden rule.',
          'Read the computed value and compare it with the declarations you wrote.',
          'Toggle a margin declaration and describe how layout changes while the paragraph content stays the same.'
        ]
      }
    ],
    'm7-l7': [
      {
        type: 'explanation',
        title: 'Reset selected defaults without erasing useful behaviour',
        content: [
          'Browsers supply default styles so headings, lists, forms, and links have a usable starting appearance even before a site adds CSS. A reset changes selected defaults, often to make sizing or spacing easier to reason about. It does not make every browser, font, or platform identical, and it does not replace choosing a readable design.',
          'A broad rule that removes every outline, margin, and list marker can create new problems. Keyboard users need to see focus, lists may need their markers to communicate grouping, and form controls have useful platform behaviour. Start with a small reset that solves a real consistency issue, then add deliberate styles for the page. Test headings, forms, keyboard focus, and narrow screens after changing defaults.'
        ]
      },
      {
        type: 'code',
        title: 'Begin with a small, deliberate reset',
        language: 'css',
        code: `*,
*::before,
*::after {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}`,
        explanation: [
          'The box-sizing rule makes declared widths include padding and borders.',
          'The image rule protects against horizontal overflow without deleting useful browser focus styles.',
          'This is only a starting point; add project-specific typography and spacing afterward.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Never remove focus without replacing it',
        content: 'A rule such as outline: none can hide which link or button is active for keyboard users. If you restyle focus, make the replacement clearly visible against the surrounding colours.'
      },
      {
        type: 'practice',
        title: 'Evaluate a reset by what it improves and what it risks',
        expected: 'The selected reset improves predictable styling while preserving visible keyboard focus and usable controls.',
        steps: [
          'View a plain page with a heading, list, form field, link, and button before adding reset rules.',
          'Apply a small reset and record which differences become easier to manage.',
          'Tab through every control and confirm focus remains visible.',
          'Add intentional styles only where the page needs them, then explain why each reset declaration is present.'
        ]
      }
    ],
    'm7-l13': [
      {
        type: 'explanation',
        title: 'Normalise selected differences while keeping useful defaults',
        content: [
          'A normalizer aims to make selected browser defaults more consistent while retaining useful behaviour, whereas a traditional reset may remove more defaults and expect the site to add its own. The names are not strict guarantees: projects differ in what they call a reset, and modern starter styles often combine both approaches. The important question is what each rule changes and whether that change helps your project.',
          'A normalizer cannot promise that every browser will render every pixel identically. Fonts, operating systems, controls, zoom, and user settings still affect the result. Read the stylesheet rather than adding it as a mystery file. Pay special attention to form controls, heading margins, image sizing, and focus states. Keep rules that solve an observed inconsistency; avoid duplicate declarations that make later debugging harder.'
        ]
      },
      {
        type: 'comparison',
        title: 'Choose a starting point based on the project',
        columns: [
          { title: 'Small custom reset', points: ['You can see and explain each declaration', 'Good for a short learning project', 'Requires you to add needed styles deliberately'] },
          { title: 'Normalizer or starter stylesheet', points: ['Can address known cross-browser differences', 'May preserve more useful defaults', 'Should be reviewed and tested rather than trusted blindly'] }
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Consistency is a tool, not the finished design',
        content: 'A normalizer can reduce a few surprises, but readable type, clear spacing, responsive images, and visible focus still need intentional project styles.'
      },
      {
        type: 'practice',
        title: 'Compare before and after without losing context',
        expected: 'Observed changes are attributable to the normalizer, and useful focus and form behavior remain intact.',
        steps: [
          'Make a page with a heading, list, link, image, and form control.',
          'Record a few default differences you notice before adding a normalizer.',
          'Apply one normalizer or a small selected rule set and note exactly what changed.',
          'Check keyboard focus and form usability; keep only changes you can explain.'
        ]
      }
    ],
    'm7-l8': [
      {
        type: 'explanation',
        title: 'Keep shared design rules in an external file',
        content: [
          'An external stylesheet is a separate file connected with a link element in the document head. Its href is a path from the HTML file to the CSS file, so a page in a different folder may need a different relative path. Check spelling, file extension, and folder names if the browser cannot load it. In developer tools, the Network panel can show whether the stylesheet request succeeded.',
          'One external file can serve multiple pages, which makes shared colours and components easier to maintain. Browsers can also cache the file between page visits. Keep related rules organised and avoid loading several competing copies without a reason. If two stylesheets set the same property, their order and other cascade factors matter; linking a file successfully does not guarantee that every rule wins.'
        ]
      },
      {
        type: 'code',
        title: 'Connect two pages to one stylesheet',
        language: 'html',
        code: `<!-- In the head of each HTML page -->
<link rel="stylesheet" href="css/site.css">`,
        explanation: [
          'The link belongs in head so the browser can discover styles while loading the document.',
          'Both pages can use the same href when they have the same folder relationship to css/site.css.'
        ]
      },
      {
        type: 'mistakes',
        title: 'When styles do not appear, check the connection',
        items: [
          { wrong: `<link href="css/site.css">`, why: 'Without rel="stylesheet", the browser is not told that this link is a stylesheet.', fix: `<link rel="stylesheet" href="css/site.css">` },
          { wrong: `<link rel="stylesheet" href="/css/site.css">`, why: 'A root-relative path may point outside a local project folder.', fix: `<link rel="stylesheet" href="css/site.css">` }
        ]
      },
      {
        type: 'practice',
        title: 'Reuse one rule set across two pages',
        expected: 'Both pages load the shared stylesheet, and path and selector errors are diagnosed and fixed.',
        steps: [
          'Create css/site.css and add a rule for a shared page heading class.',
          'Link both HTML pages to that file using the correct relative path.',
          'Change one declaration and refresh both pages to confirm the shared rule is active.',
          'Break one path temporarily and use the browser request information to find the cause.'
        ]
      }
    ],
    'm7-ex1': [
      {
        type: 'steps',
        title: 'Build a small site that shares its stylesheet',
        items: [
          { title: 'Create a clear folder layout', content: 'Make two HTML pages and one css folder containing site.css. Keep the file names simple and note the relative locations.' },
          { title: 'Link from each page', content: 'Place a stylesheet link in each page head. Compare the href values and adjust them if the pages sit in different folders.' },
          { title: 'Create shared styles', content: 'Style a heading class, a readable body font, and one card class. Use the same class on more than one page to show reuse.' },
          { title: 'Check the cascade', content: 'Add a deliberate second rule and inspect which declaration wins. Remove the test conflict after explaining it.' },
          { title: 'Test paths and screens', content: 'Refresh both pages, check the stylesheet request, and resize the browser to find overflow or hard-to-read content.' }
        ]
      },
      {
        type: 'explanation',
        title: 'A working stylesheet has more than correct syntax',
        content: [
          'The exercise succeeds when both pages load the same file and show the shared design. A correctly written selector in a stylesheet that never loaded has no visible effect, so check the path before rewriting rules. If the file loads but the expected element remains unchanged, check whether the class in HTML exactly matches the selector, including spelling and case.',
          'Use a small set of role-based classes such as page-title and project-card rather than selectors tied to fragile nesting. Keep content structure in HTML and reusable presentation in CSS. The browser’s computed styles can show whether a declaration matched, was overridden, or was invalid. Record one issue you found and the evidence that helped you fix it.'
        ]
      },
      {
        type: 'practice',
        title: 'Demonstrate a reliable troubleshooting sequence',
        steps: [
          'Open both pages and confirm the shared rule appears on each.',
          'Change a class name in one page to create a selector mismatch, then diagnose it.',
          'Change the stylesheet path in the other page and identify the failed request.',
          'Restore both pages and write the order of checks that helped you solve each problem.'
        ],
        expected: 'Both pages use the same external CSS file, shared classes have consistent styling, and each test error is repaired by finding its actual cause.',
        hint: 'Check the resource request first, then compare the HTML class value with the selector, then inspect the cascade.'
      }
    ],
    'm7-l14': [
      {
        type: 'explanation',
        title: 'Use embedded CSS for a self-contained document',
        content: [
          'An embedded stylesheet is written inside a style element, usually in the document head. It is useful for a short demonstration, a one-page experiment, or a document that must carry its own styling. The CSS still uses normal selectors and the cascade; embedding it changes where the rules live, not what a selector means.',
          'Rules in a style element are not automatically shared by other pages. If several pages repeat the same styles, an external stylesheet is easier to update and can be cached. Keep the embedded block organised and avoid writing the same rule in both an external file and a style element unless the override is intentional. When debugging, check both sources in developer tools.'
        ]
      },
      {
        type: 'code',
        title: 'Place a short stylesheet in the document head',
        language: 'html',
        code: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Plant journal</title>
  <style>
    body { font-family: system-ui, sans-serif; }
    .entry { border-bottom: 1px solid #cbd5e1; }
  </style>
</head>
<body>
  <article class="entry"><h1>Week one</h1></article>
</body>
</html>`,
        explanation: [
          'The style element contains CSS, not another HTML page.',
          'The class rule still depends on the matching class in the body.',
          'For multiple pages, move shared rules to an external stylesheet.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Embedded does not mean inline',
        content: 'A style element contains a stylesheet of rules. An inline style attribute belongs on an individual HTML element. Both are different from linking a separate CSS file.'
      },
      {
        type: 'practice',
        title: 'Decide whether embedded styles fit the need',
        expected: 'The embedded rules apply as intended, and the choice is justified by the page?s scope and reuse needs.',
        steps: [
          'Create a single-page experiment with a small style block in head.',
          'Apply a class rule to two matching elements and observe that both update.',
          'Copy the second page and compare what must be repeated to keep its design consistent.',
          'Explain when you would keep the block embedded and when you would move it to an external file.'
        ]
      }
    ],
    'm7-ex2': [
      {
        type: 'steps',
        title: 'Create a one-page embedded-style experiment',
        items: [
          { title: 'Write the document structure', content: 'Create a title, two sections, headings, paragraphs, and a short list in a valid HTML document.' },
          { title: 'Add a style block', content: 'Place one style element inside head. Use a type selector for a broad default and a class for a component role.' },
          { title: 'Test a shared class', content: 'Apply the class to two elements and change one declaration to confirm the embedded rule updates both.' },
          { title: 'Trace one conflict', content: 'Add a second rule that sets the same property, inspect the cascade, and explain which rule wins.' },
          { title: 'Review the trade-off', content: 'Duplicate the page mentally or in a copy and decide whether repeating the style block remains sensible.' }
        ]
      },
      {
        type: 'explanation',
        title: 'Make the embedded stylesheet easy to locate',
        content: [
          'A style block is still a stylesheet, so format it as readable CSS with one selector and declaration set at a time. Keep HTML content outside the style element and do not place the style element in the middle of a paragraph. Put page-specific styling together so another learner can distinguish it from the content it affects.',
          'A useful experiment changes one thing at a time. If the result surprises you, inspect the matched rules and computed property rather than adding another override. An embedded stylesheet is convenient for an isolated example, but copying it into every page creates several places that can drift apart. That is a good signal to move shared design into an external file.'
        ]
      },
      {
        type: 'practice',
        title: 'Check both the result and the maintainability',
        steps: [
          'Validate that the style element is inside head and its CSS block closes correctly.',
          'Test the type selector on all expected elements and the class selector on both matching components.',
          'Change one rule and confirm the two components stay visually consistent.',
          'Write one reason this stylesheet is suitable for a one-page exercise and one reason it may not suit a multi-page site.'
        ],
        expected: 'The embedded rules apply to the intended content, the CSS is easy to locate, and the choice of embedded styling has a clear reason.',
        hint: 'If the same rule would have to be copied into several files, compare the effort with linking one shared stylesheet.'
      }
    ],
    'm7-l15': [
      {
        type: 'explanation',
        title: 'Understand the limits of an inline style attribute',
        content: [
          'An inline style attribute puts CSS declarations directly on one HTML element, for example style=\"color: navy;\". It can be useful for a tiny isolated test or a value that is genuinely generated for one element. It is usually a poor home for repeated design rules because the presentation is mixed into the markup and must be edited in many places.',
          'An inline declaration participates in the cascade differently from a normal stylesheet rule and often wins over ordinary author rules for that element, but important declarations and other cascade conditions can change the result. Do not rely on a simplistic “inline always wins” rule. Developer tools can show its relationship to other declarations. Prefer a class for reusable design so the HTML communicates content and the stylesheet controls presentation.'
        ]
      },
      {
        type: 'comparison',
        title: 'Choose the style location that fits the scope',
        columns: [
          { title: 'External stylesheet', points: ['Reusable across pages', 'Best for shared site design', 'One place to maintain common rules'] },
          { title: 'Embedded style element', points: ['Contained in one document', 'Useful for a small one-page example', 'Not shared automatically with other pages'] },
          { title: 'Inline style attribute', points: ['Attached to one element', 'Can be hard to find and reuse', 'Keep for narrow, deliberate cases'] }
        ]
      },
      {
        type: 'code',
        title: 'Turn repeated inline styling into a class',
        language: 'html',
        code: `<p class="highlight">Bring your project notebook.</p>
<p class="highlight">Label each model part.</p>`,
        explanation: [
          'The same class names the shared role of both paragraphs.',
          'Put the visual declarations in a stylesheet rule for .highlight, so one edit changes both.'
        ]
      },
      {
        type: 'practice',
        title: 'Refactor repeated presentation',
        expected: 'Repeated declarations are replaced with a reusable class while the page?s appearance remains consistent.',
        steps: [
          'Add a temporary inline colour to two related paragraphs.',
          'Move the repeated declaration into a shared class rule and remove both style attributes.',
          'Change the class rule once and confirm both paragraphs respond.',
          'Name one narrow situation where an inline value could still be reasonable, and explain why it is not the default.'
        ]
      }
    ],
    'm7-ex3': [
      {
        type: 'steps',
        title: 'Compare and improve three styling locations',
        items: [
          { title: 'Make a reusable baseline', content: 'Create an external stylesheet with a readable body rule and a reusable .note class.' },
          { title: 'Add a page-only experiment', content: 'Add an embedded rule for a single-page feature and note that another page will not receive it automatically.' },
          { title: 'Try one inline value', content: 'Use a style attribute temporarily on one element, then inspect how it appears in developer tools.' },
          { title: 'Refactor the repeated part', content: 'Move any repeated inline declarations into an external class and remove the duplicates.' },
          { title: 'Explain your choices', content: 'For each remaining style, state why its location fits its scope and how you would change it later.' }
        ]
      },
      {
        type: 'explanation',
        title: 'Treat inline styles as a narrow tool, not a shortcut',
        content: [
          'Inline styles can be tempting because the effect appears beside the element. But as a project grows, they make it harder to see the complete design, compare similar components, or make one consistent change. They also do not provide a reusable state rule in the way a stylesheet class can. Keep HTML readable and let shared CSS express repeated patterns.',
          'This exercise is not about forbidding the style attribute. It is about noticing its scope and cascade behaviour, then choosing deliberately. A one-off value may be generated by a script or required by a focused experiment. A colour, spacing rule, or heading treatment repeated across the page should usually become a class in a stylesheet.'
        ]
      },
      {
        type: 'practice',
        title: 'Review the project after refactoring',
        steps: [
          'Search the page for remaining style attributes and identify what each one does.',
          'Move duplicate or design-wide declarations to named classes.',
          'Check that the refactored page looks consistent and that no selector became unnecessarily specific.',
          'Show a partner one before-and-after example and describe the maintenance benefit.'
        ],
        expected: 'Repeated styles are reusable, remaining inline styles have a specific reason, and the final appearance is unchanged by the refactor.',
        hint: 'When several elements need the same treatment, start by giving them the same class.'
      }
    ],
    'm7-l9': [
      {
        type: 'explanation',
        title: 'Use generic containers only when no semantic element fits',
        content: [
          'A div is a generic block container and a span is a generic inline container. Neither tells a browser or assistive technology whether content is navigation, an article, emphasis, or a heading. They are useful hooks for styling or scripting when a more meaningful HTML element does not fit. Their default display behaviour can be changed by CSS, but changing display does not give them new semantic meaning.',
          'Before adding a div, consider whether the content is a section with a heading, an article, a navigation area, or a list. Use span for a small phrase when that phrase needs a styling hook inside a sentence. Avoid wrapping every word or paragraph without a purpose: extra containers make the document harder to read and do not automatically improve layout.'
        ]
      },
      {
        type: 'comparison',
        title: 'Choose the right kind of wrapper',
        columns: [
          { title: 'Semantic element', points: ['Communicates a role such as nav, article, or section', 'Can help people understand page regions', 'Choose only when its meaning fits'] },
          { title: 'div', points: ['Generic block-level grouping by default', 'Useful for a styling or script hook', 'Does not describe the grouped content'] },
          { title: 'span', points: ['Generic inline grouping by default', 'Useful for a phrase inside surrounding text', 'Does not create a new semantic section'] }
        ]
      },
      {
        type: 'practice',
        title: 'Remove wrappers that do not help',
        expected: 'Only purposeful containers remain, and a semantic element replaces a generic wrapper when its meaning fits.',
        steps: [
          'Create a profile card with a heading, paragraph, and a highlighted phrase.',
          'Use one div around the card and one span around the phrase, each with a role-based class.',
          'Replace the card div with a semantic element if its content has a clear matching meaning.',
          'Remove any wrapper that does not provide a useful grouping, styling hook, or script target.'
        ]
      }
    ],
    'm7-ex4': [
      {
        type: 'steps',
        title: 'Style a card and a phrase without inventing meaning',
        items: [
          { title: 'Mark up meaningful content', content: 'Create a short project update with a heading, a paragraph, and a link. Choose semantic elements for the heading, paragraph, and link.' },
          { title: 'Add a useful group', content: 'Wrap the related update in a div only if it needs a visual card or script hook; otherwise use a semantic container that accurately describes it.' },
          { title: 'Target one phrase', content: 'Wrap a short phrase in a span and give it a class for emphasis that still makes sense without colour.' },
          { title: 'Write focused CSS', content: 'Style the card class and phrase class separately. Keep the sentence in normal reading order.' },
          { title: 'Check interactions', content: 'Tab to the link, inspect the phrase at narrow width, and confirm the container has not hidden or changed the content meaning.' }
        ]
      },
      {
        type: 'explanation',
        title: 'Let elements keep their proper jobs',
        content: [
          'The purpose of this exercise is not to make every element a div or span. The heading remains a heading because it labels the update; the paragraph remains a paragraph because it contains prose. A generic wrapper groups related content when it needs styling, while an inline span can identify a phrase without breaking the sentence into a separate block.',
          'Do not communicate a status only by colouring a span. Include the status in words as well, so the information is not lost for someone who cannot distinguish the colour. If a link sits inside the card, preserve its visible label, keyboard focus, and actual destination. CSS should improve the presentation without changing how a visitor understands or operates the page.'
        ]
      },
      {
        type: 'practice',
        title: 'Review the card structure with another learner',
        steps: [
          'Ask a partner to identify the heading, update text, status phrase, and link.',
          'Temporarily remove the CSS and check whether the HTML structure remains understandable.',
          'Use keyboard navigation to find the link and make sure the focus indicator is visible.',
          'Explain why each div or span exists; remove any wrapper that has no clear purpose.'
        ],
        expected: 'The page reads clearly without CSS, the wrapper has a practical role, and the inline phrase remains part of its sentence.',
        hint: 'If you cannot explain the meaning or useful styling purpose of a generic container, you may not need it.'
      }
    ],
    'm7-l10': [
      {
        type: 'explanation',
        title: 'Prepare for screens and for paper',
        content: [
          'A CSS media type describes a broad output environment, such as screen or print. A media query can apply rules only when its condition is true, for example @media print for a printed page or a width query for a narrow layout. Print styles can hide navigation and buttons that have no use on paper, switch to high-contrast ink-friendly colours, and avoid splitting a short heading from its content.',
          'The viewport meta element is HTML metadata rather than a CSS media type. On mobile devices it tells the browser to use the device’s layout width instead of a wide virtual desktop width. Without it, a carefully designed narrow-screen layout may be scaled down and become tiny. Test responsive pages by resizing a browser and by checking print preview; do not assume a media query fixes content that is wider than its container.'
        ]
      },
      {
        type: 'code',
        title: 'Keep paper output useful',
        language: 'css',
        code: `@media print {
  nav, .screen-only, button {
    display: none;
  }

  body {
    color: #111;
    background: #fff;
  }
}`,
        explanation: [
          'Only elements that are unnecessary on paper are hidden.',
          'High-contrast text and a white background are easier to print clearly.',
          'Check that important links or instructions are not inside a hidden region.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Do not hide information just because the output changes',
        content: 'A print rule should remove screen controls, not the content needed to understand the page. Preview the printed result before deciding that an element is unnecessary.'
      },
      {
        type: 'practice',
        title: 'Compare one page in a narrow view and print preview',
        expected: 'The page adapts to a narrow viewport and prints without hiding essential content.',
        steps: [
          'Add the viewport meta element in the head of a sample page.',
          'Write a print media rule that hides navigation but keeps article text and useful links.',
          'Resize to a phone-width viewport and inspect print preview.',
          'Record one screen-specific and one print-specific change, and check that neither removes essential information.'
        ]
      }
    ],
    'm7-l11': [
      {
        type: 'explanation',
        title: 'Choose units by asking what should control the size',
        content: [
          'A CSS unit describes what a measurement relates to. px is a CSS pixel useful for small details, but it is not always one physical screen pixel. rem relates to the root element’s font size, while em relates to the current element’s font context and can compound when nested. Percentages depend on the relevant containing size, which varies by property. These relationships are why two values written as 1em and 1rem may not end up equal.',
          'Viewport units such as vw and vh relate to the viewport dimensions. They can help with broad layout effects, but text sized only from viewport width may become too small or huge. Use a flexible range with sensible limits only when appropriate, and test zoom and narrow screens. For many text and spacing decisions, rem is a predictable scalable starting point; percentages are useful when a child should adapt to its parent.'
        ]
      },
      {
        type: 'code',
        title: 'Compare root-based and parent-based sizing',
        language: 'css',
        code: `html { font-size: 16px; }
.card { font-size: 1.25rem; }   /* 20px at this root size */
.card strong { font-size: 1.2em; } /* 24px of the card text */
.card img { width: 100%; }`,
        explanation: [
          'At a 16px root size, 1.25rem calculates to 20px.',
          'The strong element’s 1.2em uses its inherited 20px context, giving 24px here.',
          'The image width is relative to its containing block, not to the root font size.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Test units with changed text and screen size',
        content: 'A layout that looks correct at one browser size may fail when text is zoomed. Use real paragraphs and headings while comparing units instead of relying on a tiny demo box.'
      },
      {
        type: 'practice',
        title: 'Predict, calculate, and then inspect',
        expected: 'The rem and em sizes match their calculated values, and the percentage-width image follows its container.',
        steps: [
          'Set a root font size of 16px, then give a card a font size of 1.25rem.',
          'Give a bold phrase inside it a font size of 1.2em and predict the result before checking.',
          'Set an image width to 100% and resize the card container.',
          'Change the root text size or browser zoom and explain which values adapt and why.'
        ]
      }
    ],
    'm7-l12': [
      {
        type: 'explanation',
        title: 'Understand what flows from a parent to its children',
        content: [
          'Inheritance lets some values set on a parent affect descendants unless a child has its own value. Text-related properties such as color, font-family, and line-height commonly inherit, so a body rule can establish a consistent reading style for a page. Many box and layout properties, including margin, padding, border, and width, do not normally inherit; if every paragraph inherited the body’s margin, spacing would become difficult to control.',
          'A child’s own declaration can override an inherited value through the cascade. The inherit keyword explicitly asks a property to use the parent’s computed value, while initial requests the property’s initial value. Use these keywords only when they clarify intent; they do not fix an unrelated selector or loading problem. Developer tools can show whether a displayed value was inherited and from which rule.'
        ]
      },
      {
        type: 'code',
        title: 'Set a readable family and override one component',
        language: 'css',
        code: `body {
  color: #263449;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

.muted {
  color: #64748b;
}

button {
  font: inherit;
}`,
        explanation: [
          'Descendant text normally inherits the body colour, font family, and line height.',
          'The muted class supplies a more specific colour for its element.',
          'Buttons often use platform defaults; font: inherit asks this button to use the surrounding font settings.'
        ]
      },
      {
        type: 'comparison',
        title: 'Recognise common inherited and non-inherited properties',
        columns: [
          { title: 'Often inherited', points: ['color', 'font-family', 'line-height', 'Some text-related settings'] },
          { title: 'Usually not inherited', points: ['margin and padding', 'border', 'width and height', 'Many layout properties'] }
        ]
      },
      {
        type: 'practice',
        title: 'Find inherited values in a small page',
        expected: 'Computed styles distinguish inherited body values from local overrides, including the button font.',
        steps: [
          'Set color, font family, and line height on body.',
          'Add nested headings, paragraphs, a button, and one element with its own color class.',
          'Use computed styles to identify which values came from an ancestor and which were declared locally.',
          'Try font: inherit on the button and explain why its appearance changes.'
        ]
      }
    ]
  };

  for (const [lessonId, sections] of Object.entries(expansions)) {
    const lesson = lessons[lessonId];
    if (!lesson) {
      throw new Error(`[lesson-expansions/modules-5-7] Referenced lesson "${lessonId}" is missing.`);
    }
    if (!Array.isArray(lesson.sections)) lesson.sections = [];
    lesson.sections.push(...sections);
  }
})();
