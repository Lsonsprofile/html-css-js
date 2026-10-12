(() => {
  const lessons = window.COURSE_CONTENT && window.COURSE_CONTENT.lessons;
  if (!lessons) {
    throw new Error("Module 8–11 lesson expansions require window.COURSE_CONTENT.lessons.");
  }

  const expansions = {
    "m8-l1": [
      {
        type: "explanation",
        title: "Choosing a font stack that survives",
        content: [
          "A font stack is an ordered list of choices, not a request to download every font in the list. The browser checks the first name; if that font is unavailable, it tries the next one. Put a specific family first, then a dependable system family, and finish with a generic family such as sans-serif or serif. The generic ending lets the browser choose a suitable font even on a device you did not test.",
          "Use quotation marks around family names containing spaces, such as \"Trebuchet MS\". A family name without spaces can be written without them. Different devices may render the same stack with different actual fonts, so judge the stack by its overall character and readability rather than expecting pixel-perfect sameness. For a blog, a friendly sans-serif body paired with a more distinctive heading font can create hierarchy without making every paragraph look unrelated."
        ]
      },
      {
        type: "mistakes",
        title: "Font-family decisions to check",
        items: [
          { wrong: "font-family: Inter;", why: "If Inter is not installed or loaded, the browser has no clear fallback choice.", fix: "Use font-family: Inter, Arial, sans-serif; or quote a multiword family name." },
          { wrong: "Giving every selector a different decorative font.", why: "Too many competing letter shapes make a page harder to scan and can slow reading.", fix: "Choose one body stack and, if useful, one heading stack; reuse them consistently." }
        ]
      },
      {
        type: "practice",
        title: "Build a two-voice type system",
        prompt: "Create a short article page that stays readable even when its preferred fonts are unavailable.",
        steps: [
          "Choose a readable body stack with a generic fallback and apply it to body; include a paragraph long enough to judge letter shapes.",
          "Choose a contrasting but compatible heading stack and apply it only to h1 and h2, rather than assigning a new family to every element.",
          "Temporarily remove the first font name from each stack and reload; compare how the fallback changes the page's mood and line wrapping.",
          "Write down which stack you would use for a children's science blog and explain how its tone and fallback influenced your choice."
        ],
        expected: "The page has two clear typographic roles, both stacks end in a generic family, and removing the preferred font does not leave text without a usable font.",
        hint: "Try a sans-serif family for body copy and a serif or system-ui heading; the choice matters less than consistency and a reliable final fallback."
      }
    ],
    "m8-l2": [
      {
        type: "explanation",
        title: "How a web font is connected",
        content: [
          "@font-face gives a font file a name that CSS can use. Its font-family descriptor is the name you will later place in a font stack, while src points to the file. A WOFF2 file is usually a good web format because it is compact. A relative URL is resolved from the stylesheet's location, not from the HTML page, so a file in fonts/ beside styles.css is commonly referenced as url(\"fonts/story.woff2\").",
          "Declaring a font does not automatically apply it: a rule such as body { font-family: \"Story Sans\", Arial, sans-serif; } still needs to request that family. Self-hosting gives you control over the files and avoids a third-party request, but you must have permission to use the font and include all required files. A remote font service can simplify hosting, though it introduces a network dependency and its own privacy and performance considerations."
        ]
      },
      {
        type: "code",
        title: "Declare and then use a local font",
        language: "css",
        code: `@font-face {
  font-family: "Story Sans";
  src: url("fonts/story.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

body {
  font-family: "Story Sans", system-ui, sans-serif;
}`,
        explanation: [
          "The font-family name in @font-face is an author-chosen label; the file itself does not need to share that name.",
          "font-display: swap allows fallback text to appear while the font loads, preventing a blank-text wait on a slow connection.",
          "The declared weight describes the file. A single regular file should not be labelled as a complete range of bold weights."
        ]
      },
      {
        type: "mistakes",
        title: "Font loading pitfalls",
        items: [
          { wrong: "Putting a path in src that is correct relative to the HTML file.", why: "The browser resolves a CSS url relative to the stylesheet containing the declaration.", fix: "Check the stylesheet's folder and calculate the URL from that location." },
          { wrong: "Declaring @font-face but never using the family in a selector.", why: "The browser knows about the font but has no reason to render text with it.", fix: "Add the declared family at the start of a font-family stack." }
        ]
      },
      {
        type: "practice",
        title: "Plan a reliable font installation",
        prompt: "Sketch the files and rules needed to use one legally available WOFF2 font on a blog.",
        steps: [
          "Draw a small folder tree showing index.html, styles.css, and a fonts folder containing a WOFF2 file.",
          "Write an @font-face rule with a clear family label, the correct relative path, the matching style and weight, and font-display: swap.",
          "Apply the label to body while keeping system-ui and sans-serif as fallbacks; add a paragraph so the result is easy to inspect.",
          "Describe how you would diagnose a missing font: check the browser's network panel for the requested path and look for a failed file request."
        ],
        expected: "Your declaration and use rule agree on the family name, the URL matches the folder tree, and a fallback remains available.",
        hint: "If styles.css is in css/ and the file is in fonts/, the URL must move up one folder before entering fonts/."
      }
    ],
    "m8-l3": [
      {
        type: "explanation",
        title: "Sizing type with a useful scale",
        content: [
          "font-size sets the size of the characters, but a good type system is about relationships as well as individual numbers. Body text is the reading baseline; headings should be visibly larger, while captions and helper text should remain comfortably readable. A simple scale might use 1rem for body, 1.25rem for a small heading, and 2rem for a page title. Repeating a few deliberate sizes makes a page feel organized.",
          "A rem is based on the root element's font size, usually the browser's default, so it scales consistently when a reader changes their text-size preferences. An em is based on the current element's inherited or computed size; nested em values can compound. Pixels provide a fixed CSS-pixel size and can be useful for precise details, but they are less flexible as the only sizing strategy. Do not shrink legal or helpful instructions just to make them fit."
        ]
      },
      {
        type: "mistakes",
        title: "Sizing mistakes",
        items: [
          { wrong: "Setting every text element to 12px because it fits in a narrow card.", why: "Readers may need to zoom, and tiny body copy is tiring even when it technically fits.", fix: "Keep body text near a comfortable rem-based size and adjust the card layout or wording." },
          { wrong: "Using em for several nested components without checking the result.", why: "Each nested em can multiply the inherited size, creating unexpectedly huge or tiny text.", fix: "Use rem for a scale tied to the root, and use em only when local scaling is intentional." }
        ]
      },
      {
        type: "practice",
        title: "Test a heading and body scale",
        prompt: "Make a three-level heading hierarchy that still works when a visitor enlarges text.",
        steps: [
          "Set body text to 1rem and add a short paragraph, an h2, an h3, and a page title in that order.",
          "Choose larger rem-based values for each heading and write them down as a small scale rather than guessing separately each time.",
          "Use the browser's zoom controls to enlarge the page; check that headings remain distinct and paragraphs do not overflow their container.",
          "Reduce the viewport width and decide whether any heading needs a smaller responsive size, while keeping it clearly larger than body copy."
        ],
        expected: "The page has a consistent visual hierarchy, body copy remains readable, and zooming does not make the text disappear or overlap.",
        hint: "Start with a modest sequence such as 1rem, 1.25rem, 1.5rem, and 2rem, then judge it in context."
      }
    ],
    "m8-l4": [
      {
        type: "explanation",
        title: "Style is not the same as meaning",
        content: [
          "font-style controls the shape of a typeface: normal is the default, italic requests a true italic design when one exists, and oblique asks for a slanted form. Use italic sparingly for a quotation, a title, or a word that needs emphasis. If every sentence is slanted, the emphasis disappears and long passages become harder for some readers to follow. HTML elements such as em and cite already express meaning; CSS should style that meaning rather than invent it.",
          "font-variant: small-caps displays lowercase letters as smaller capital-like forms in supported fonts. It is a typographic choice for short labels, not a way to turn a whole paragraph into shouting capitals. The property has several newer variants, but the basic small-caps value is enough for this lesson. When the requested font lacks a genuine small-caps design, the browser may simulate the effect, so inspect it in the chosen font."
        ]
      },
      {
        type: "code",
        title: "Use style for a deliberate reading role",
        language: "css",
        code: `blockquote {
  font-style: italic;
}
.chapter-label {
  font-variant: small-caps;
}
`,
        explanation: [
          "The blockquote's HTML communicates that it is a quotation; italic styling is an optional visual treatment.",
          "A short chapter label is a better small-caps candidate than a long paragraph.",
          "If a chosen typeface makes small caps hard to read, remove the variant instead of forcing it."
        ]
      },
      {
        type: "mistakes",
        title: "Style and semantics checks",
        items: [
          { wrong: "Wrapping ordinary words in an em element only to make them italic.", why: "em marks spoken emphasis for assistive technology as well as appearance.", fix: "Use em when the emphasis is meaningful; use a class for purely decorative styling." },
          { wrong: "Applying small-caps to all body paragraphs.", why: "Small-cap text is visually dense and loses its usefulness as a brief label treatment.", fix: "Reserve it for short identifiers or labels, and compare the result with normal text." }
        ]
      },
      {
        type: "practice",
        title: "Style a quotation and its source",
        prompt: "Format a short quotation, its citation, and a chapter label without relying on appearance alone.",
        steps: [
          "Write a blockquote with one sentence and a cite element naming the speaker or source.",
          "Apply font-style: italic to the quotation, then test normal style; decide which version is easiest to read at paragraph length.",
          "Add a short chapter label and apply small-caps only to that label; compare it with a normal-weight version.",
          "Check the HTML meaning independently from the CSS: the quote and source should still make sense if styles are turned off."
        ],
        expected: "The markup expresses the quotation and citation, while italic and small-caps are limited to purposeful, readable styling.",
        hint: "A brief sample sentence is enough; avoid using style elements to encode information that belongs in the HTML."
      }
    ],
    "m8-l5": [
      {
        type: "explanation",
        title: "Line spacing makes paragraphs easier to follow",
        content: [
          "line-height controls the distance from one line's baseline to the next. It is not the height of the letters themselves. Tight leading can make lines collide visually, while very loose leading can make a paragraph feel like separate sentences. Body paragraphs often benefit from a unitless value around 1.4 to 1.7, then headings can use a tighter value because they wrap into fewer lines.",
          "A unitless line-height is a multiplier: line-height: 1.5 means each line box is one and a half times the element's font size. It inherits as a number, so a child with larger text gets line spacing based on its own size. A length such as 24px is inherited as a fixed computed length and may become cramped when a child has larger text. Test actual wrapped lines, not only a one-line heading."
        ]
      },
      {
        type: "code",
        title: "Choose spacing for different text roles",
        language: "css",
        code: `body {
  font-size: 1rem;
  line-height: 1.6;
}
h1 {
  font-size: 2rem;
  line-height: 1.15;
}`,
        explanation: [
          "Body copy uses extra space to help the eye return to the next line.",
          "A compact heading line-height keeps a two-line title from looking disconnected.",
          "These are starting points; a different font or content length may need adjustment."
        ]
      },
      {
        type: "mistakes",
        title: "Line-height mistakes",
        items: [
          { wrong: "Using line-height: 1.5px.", why: "The unit makes the line box nearly zero-height and causes overlapping text.", fix: "Use a unitless number such as 1.5 for scalable line spacing." },
          { wrong: "Copying a body line-height unchanged onto every large heading.", why: "Large headings with generous body leading can look fragmented when they wrap.", fix: "Give display headings their own tighter line-height and inspect multi-line titles." }
        ]
      },
      {
        type: "practice",
        title: "Tune a paragraph for comfortable reading",
        prompt: "Compare several line-height values using real text rather than relying on a number alone.",
        steps: [
          "Add a paragraph long enough to wrap into at least five lines at the width of a typical article column.",
          "Try line-height values of 1.2, 1.5, and 1.8, one at a time, and note when lines feel crowded or disconnected.",
          "Add a two-line heading and give it a separate tighter line-height; check the gap between its lines and the paragraph below.",
          "Zoom the page and narrow the viewport; confirm that descenders and punctuation do not collide with adjacent lines."
        ],
        expected: "Body lines are distinct but connected, while a wrapped heading remains compact and legible.",
        hint: "Start from a unitless 1.6 for body text and change one variable at a time."
      }
    ],
    "m8-l6": [
      {
        type: "explanation",
        title: "Small caps as a quiet typographic accent",
        content: [
          "The small-caps variant uses capital-shaped letters at a smaller height for lowercase characters. It can make a short category name, date label, or chapter marker feel distinct while keeping the text on the same line. Because the letters still read as uppercase shapes, small caps are best for a few words; a full sentence in small caps can look dense and be mistaken for all-caps text.",
          "Small caps are a font design feature, so the result depends on the available font. Some families include carefully drawn small-cap glyphs; others may have the browser scale down uppercase letters to imitate them. Compare the variant with normal text at the actual size and weight, especially for mixed-case labels and numbers. Do not use small caps to signal that a word is more important to a screen reader; use appropriate HTML heading or emphasis semantics for that."
        ]
      },
      {
        type: "code",
        title: "Apply small caps to a short label",
        language: "css",
        code: `.article-category {
  font-variant: small-caps;
  letter-spacing: 0.04em;
}`,
        explanation: [
          "A category label is brief, so the alternate letter shapes can provide visual variety without overwhelming reading.",
          "A small amount of letter spacing can help the label breathe, but excessive spacing makes short words harder to recognize.",
          "The font-variant property changes presentation only; the visible and accessible text remains the same."
        ]
      },
      {
        type: "mistakes",
        title: "When not to use small caps",
        items: [
          { wrong: "Styling an entire article as small caps to make it look formal.", why: "The uniform letter shapes remove normal word silhouettes and slow down scanning.", fix: "Use normal body text and reserve small caps for a concise label or short title." },
          { wrong: "Using small caps as the only signal that an item is a heading.", why: "A visual variant does not create document structure for assistive technology.", fix: "Use a real heading element and add small caps only as optional styling." }
        ]
      },
      {
        type: "practice",
        title: "Compare three label treatments",
        prompt: "Choose a treatment for the words “Field Notes” above an article heading.",
        steps: [
          "Create one label in normal lowercase, one in uppercase using text-transform, and one in small caps using font-variant.",
          "Keep the font family, size, and color the same so the variant itself is the main difference.",
          "Inspect the three options at normal and enlarged zoom; ask a classmate which one is easiest to read and why.",
          "Choose one treatment, keep the label's words in ordinary case in the HTML, and write a sentence explaining your choice."
        ],
        expected: "The label remains understandable, the styling is not used to replace heading structure, and the chosen version is comfortable at different zoom levels.",
        hint: "Small caps are an option rather than a rule; if your available font renders them poorly, choose normal text."
      }
    ],
    "m8-l7": [
      {
        type: "explanation",
        title: "Weight creates hierarchy, not just boldness",
        content: [
          "font-weight describes how heavy the strokes appear. Common numeric weights are 400 for regular and 700 for bold, while normal and bold are readable keywords for those familiar values. Lighter weights can suit large display text, but thin strokes may disappear on a small screen or low-quality display. A clear page usually needs only a few weight steps: regular reading text, medium emphasis, and a strong heading or button label.",
          "The requested number only looks different if the chosen font has that weight or a variable weight axis. With a static font file, the browser may substitute another available weight. If a web font is loaded with @font-face, declare the actual weight correctly; for a variable font, a range can describe supported weights. Use semantic HTML such as strong when content is important, and use font-weight to choose its visual emphasis."
        ]
      },
      {
        type: "code",
        title: "Build a small weight hierarchy",
        language: "css",
        code: `.article {
  font-weight: 400;
}
.article-lead {
  font-weight: 500;
}
.article-title {
  font-weight: 700;
}`,
        explanation: [
          "Regular body weight supports long reading; a slightly heavier lead can distinguish the opening without changing its meaning.",
          "A bold title stands apart in the hierarchy. Check that the selected font actually has a bold face.",
          "If 500 appears identical to 400, the family may not include that intermediate weight."
        ]
      },
      {
        type: "mistakes",
        title: "Weight problems to avoid",
        items: [
          { wrong: "Setting all text to 700 because bold looks stronger.", why: "If everything is emphasized, headings and important labels no longer stand out.", fix: "Use a restrained scale and keep regular weight for sustained reading." },
          { wrong: "Using a very light weight for small text on a pale background.", why: "Thin strokes have little visual contrast and may be difficult to read.", fix: "Use a sturdier weight or improve contrast, then check the text at normal size." }
        ]
      },
      {
        type: "practice",
        title: "Test a three-step weight scale",
        prompt: "Use a heading, opening sentence, and body paragraph to decide how much weight contrast your page needs.",
        steps: [
          "Start with 400 for the body, 600 for a short lead, and 700 for the heading; keep color and size unchanged during this test.",
          "Try the page with the default system font and, if available, the selected web font; compare whether the weights remain distinct.",
          "Remove one weight step and see whether the hierarchy still works; fewer weights can make the design more consistent.",
          "Check small text at normal zoom and on a narrow screen, then record the final weights and the purpose of each."
        ],
        expected: "The hierarchy is visible without making long passages bold, and small text remains sturdy enough to read.",
        hint: "You may not need an intermediate 500 or 600 weight if the font does not provide it."
      }
    ],
    "m8-l8": [
      {
        type: "explanation",
        title: "Read the font shorthand before using it",
        content: [
          "The font shorthand groups several font properties into one declaration. Its required pieces are a font size and a font family. Optional style, variant, and weight values come before the size; an optional line-height follows the size after a slash. The family comes last. This order lets the browser tell which number is the size and which value begins the family list.",
          "Shorthand is useful when you want to set a complete font choice in one place, but it is less explicit when you are changing just one detail. It also resets omitted font-related longhand settings to their initial values, so replacing one declaration can unexpectedly remove a previously set variant or weight. A declaration that the browser cannot parse is ignored as a whole, so check the order carefully and use the individual properties when that is clearer."
        ]
      },
      {
        type: "code",
        title: "A readable shorthand declaration",
        language: "css",
        code: `p {
  font: italic 600 1rem/1.65 Georgia, serif;
}`,
        explanation: [
          "The optional italic style and 600 weight appear before the required 1rem size.",
          "The slash attaches 1.65 line-height to the font-size; it is not a separate value after the family.",
          "Georgia, serif is the family list and therefore comes last."
        ]
      },
      {
        type: "mistakes",
        title: "Shorthand errors to catch",
        items: [
          { wrong: "Writing font: 1rem italic Georgia;", why: "The shorthand's optional style belongs before the size, so this order may make the whole declaration invalid.", fix: "Write font: italic 1rem Georgia, serif; and confirm it in the browser." },
          { wrong: "Leaving out the family because another rule already set it.", why: "The family is required in the shorthand; an invalid shorthand can be ignored.", fix: "Include a family stack or use font-size/font-weight longhands for a partial update." }
        ]
      },
      {
        type: "practice",
        title: "Translate between shorthand and longhand",
        prompt: "Describe the same paragraph style once with individual properties and once with shorthand.",
        steps: [
          "Write separate declarations for font-style, font-weight, font-size, line-height, and font-family.",
          "Convert them into one font declaration, putting optional values first, size and slash-line-height next, and family last.",
          "Temporarily introduce a wrong order, inspect the browser's computed style, and then restore the valid declaration.",
          "Decide which form you would keep in a shared stylesheet and explain whether compactness or easier editing matters more there."
        ],
        expected: "Both valid versions produce the same visible typography, and the shorthand contains a size and a family in the correct positions.",
        hint: "Use the pattern style weight size/line-height family; omit optional pieces only when you understand the reset behavior."
      }
    ],
    "m8-ex1": [
      {
        type: "explanation",
        title: "A typography system is a set of connected choices",
        content: [
          "A type system is more than a list of font declarations. It assigns roles: body text supports reading, headings show structure, labels provide small pieces of context, and captions explain media. A consistent system reuses a few font families, sizes, weights, and line heights so a visitor can recognize these roles across the page. The values should work together: a large heavy title may need tighter line spacing, while ordinary paragraphs need more.",
          "Typography must also handle real content. A long title can wrap, a name may contain unusual characters, and a reader may enlarge text. That means the system should be tested with multiple lines and at different widths. Do not use font appearance to fake a heading hierarchy; choose the correct HTML heading levels, then style them. The goal is a page whose structure is visible and whose words remain comfortable to read."
        ]
      },
      {
        type: "mistakes",
        title: "Review the whole type system",
        items: [
          { wrong: "Choosing a display font because it looks exciting, then using it for every paragraph.", why: "Highly distinctive fonts can tire the reader when used for long passages.", fix: "Reserve expressive type for short headings and use a legible body stack." },
          { wrong: "Making each heading a different size by visual guesswork.", why: "Unrelated sizes weaken hierarchy and make later updates difficult.", fix: "Define a small scale and reuse each size for the same content role." }
        ]
      },
      {
        type: "practice",
        title: "Create a mini blog type guide",
        prompt: "Style a short blog entry with a title, section heading, body paragraph, caption, and emphasized phrase.",
        steps: [
          "Choose body and heading font stacks, including sensible fallbacks; write the selected family roles at the top of your stylesheet.",
          "Set a small rem-based size scale and a unitless body line-height; use a distinct but tighter line-height for the page title.",
          "Use weight for hierarchy, italic only where emphasis or quotation makes sense, and a short label treatment only if it remains legible.",
          "Test a long title, a narrow viewport, and enlarged browser text; revise any sizes or line heights that crowd or clip."
        ],
        expected: "The page shows consistent heading and body roles, readable spacing, and sensible fallbacks without relying on a single installed font.",
        hint: "Write down the roles first, then choose values; avoid adding a new family or weight unless it solves a clear design need."
      }
    ],
    "m9-l1": [
      {
        type: "explanation",
        title: "Colour carries meaning and needs contrast",
        content: [
          "A CSS color can be applied to text, a background, a border, or another painted part of an element. The color property usually sets the foreground text color; background-color sets the area behind content. A palette works best when each color has a job, such as primary actions, links, supporting text, and page backgrounds. Reusing roles helps visitors learn the interface and prevents every component from competing for attention.",
          "Colour also affects access. Text must stand out from its background, and important information should not be communicated by colour alone: a red error should include a clear message or icon as well. A common accessibility target for ordinary text is at least 4.5:1 contrast; larger text has a different threshold. Contrast depends on the final foreground and background together, not on whether one color looks bright in isolation. Always test the pair in context."
        ]
      },
      {
        type: "comparison",
        title: "Two different jobs for colour",
        columns: [
          { title: "Foreground color", intro: "Sets a text or other foreground paint.", points: ["Use color on headings, links, and labels.", "Check it against the surface directly behind the text."] },
          { title: "Background color", intro: "Paints the element's background area.", points: ["Use background-color for cards and page surfaces.", "The same foreground may need a different color on a new surface."] }
        ]
      },
      {
        type: "mistakes",
        title: "Colour usability checks",
        items: [
          { wrong: "Choosing pale text because it looks gentle on a white page.", why: "Low contrast makes the letters hard to distinguish, particularly for small text.", fix: "Choose a darker text color and verify the exact foreground/background pair." },
          { wrong: "Showing an error only by turning a field border red.", why: "Some users may not perceive the color difference, and the reason is unclear.", fix: "Add an explicit error message and identify the affected field in text." }
        ]
      },
      {
        type: "practice",
        title: "Assign jobs to a small palette",
        prompt: "Plan a color system for a science-club article page before applying colors to every element.",
        steps: [
          "Choose a page surface, primary text, secondary text, link/action color, and one accent; give each a named role in your notes.",
          "Apply those roles to a title, paragraph, link, and button, keeping the same role consistent across the page.",
          "Use a contrast checker on the small body text and the button label against their actual backgrounds; adjust a color if needed.",
          "Create a second version for a pale or dark card surface and retest the text instead of assuming the original pairing still works."
        ],
        expected: "Every palette color has a purpose, text remains distinguishable from its surface, and meaning is not conveyed by color alone.",
        hint: "Start with the foreground and background used for your longest paragraph; that is usually the most important pair to check."
      }
    ],
    "m9-l2": [
      {
        type: "explanation",
        title: "Choose a color format that helps you work",
        content: [
          "CSS accepts several ways to express the same color. Named colors such as tomato are quick to read, but the list is limited and names do not communicate a coordinated brand palette. Hex values such as #2563EB are compact and common in design tools. The six digits represent red, green, and blue channel values written in hexadecimal; the shorthand three-digit form is only available when each channel repeats its digit.",
          "The rgb() form uses red, green, and blue channel values and can be convenient when thinking about screen light. hsl() describes hue, saturation, and lightness, which often makes it easier to create lighter or less saturated variations while keeping a similar hue. Modern CSS also supports alpha in these formats, such as rgb(37 99 235 / 0.5), for a partly transparent color. Opacity is separate from color-format choice: it changes compositing, not the underlying RGB or HSL hue."
        ]
      },
      {
        type: "code",
        title: "Equivalent ways to describe a blue",
        language: "css",
        code: `.blue-hex { color: #2563EB; }
.blue-rgb { color: rgb(37 99 235); }
.blue-hsl { color: hsl(221 83% 53%); }
.blue-alpha { color: rgb(37 99 235 / 70%); }`,
        explanation: [
          "The first three declarations describe approximately the same opaque blue using different notation.",
          "The final declaration includes alpha, so the rendered color blends with whatever is behind it.",
          "Modern space-separated syntax is valid CSS; commas are another familiar form for rgb() and hsl()."
        ]
      },
      {
        type: "mistakes",
        title: "Color-value mistakes",
        items: [
          { wrong: "Writing #12FG34 as a hex color.", why: "Hex digits range from 0–9 and A–F, so G is invalid and the browser rejects the value.", fix: "Use only valid hex digits and verify that the value has three, six, or supported alpha digits." },
          { wrong: "Assuming the same numeric lightness in HSL guarantees accessible contrast.", why: "HSL lightness is not a contrast ratio and different hues can appear very different.", fix: "Test the final rendered foreground and background with a contrast checker." }
        ]
      },
      {
        type: "practice",
        title: "Translate and compare palette values",
        prompt: "Represent one palette color in three notations and decide which format best supports your next change.",
        steps: [
          "Choose a blue or green from a color picker and record its hex, RGB, and HSL values.",
          "Add three sample elements using each format and check that their rendered colors appear equivalent in the browser.",
          "Create a lighter HSL variation by changing lightness while holding hue steady; compare it with the original.",
          "Add alpha to one sample over both a light and dark surface, then describe why its visible result changes."
        ],
        expected: "The opaque formats represent the same chosen color, the HSL variation keeps a related hue, and the alpha sample blends with its background.",
        hint: "Do not treat alpha as another way to make a color lighter; it reveals some of the surface beneath it."
      }
    ],
    "m9-l3": [
      {
        type: "explanation",
        title: "Text color is a relationship",
        content: [
          "The color property sets the foreground color inherited by many child elements. Setting it on body can establish a default for a page, while a more specific rule can give links, headings, or labels a purposeful variation. Inheritance reduces repetition, but it also means a nested component can unexpectedly receive a color from an ancestor. Inspect the computed styles if a child does not look as expected.",
          "Link color should make links easy to identify, and a link should not depend only on color to communicate that it is interactive. An underline is a familiar additional cue. A text color that works over a white article surface may become invisible over a colored card, so check the actual context. Use semantic elements for links and headings; a colored span does not become a link or a heading just because it looks different."
        ]
      },
      {
        type: "code",
        title: "Set a default and a link role",
        language: "css",
        code: `body {
  color: #243247;
}
a {
  color: #174EA6;
  text-decoration: underline;
}`,
        explanation: [
          "The body color is inherited by ordinary text inside the page.",
          "The link receives its own foreground color and retains a visible underline as a second cue.",
          "Check hover and focus states too; a readable default link color alone does not provide a complete interaction state."
        ]
      },
      {
        type: "mistakes",
        title: "Color property pitfalls",
        items: [
          { wrong: "Setting a link to a pale accent and removing its underline.", why: "It may not contrast enough and can be difficult to recognize as an action.", fix: "Choose a clear link color and preserve an underline or another unmistakable cue." },
          { wrong: "Changing a child element's color without checking its background.", why: "Inherited or local colors may become too similar to a component surface.", fix: "Evaluate the complete foreground and background pair wherever the text appears." }
        ]
      },
      {
        type: "practice",
        title: "Style an article's text roles",
        prompt: "Create a page with a page title, body text, a descriptive link, and a muted caption.",
        steps: [
          "Set a dark default color on body, then add a specific link color and keep the link visibly underlined.",
          "Choose a caption color that is quieter than body text but still readable; compare the actual contrast ratio.",
          "Place the same link inside a colored card and retest the contrast there; adjust its local color if needed.",
          "Use browser developer tools to inspect an inherited color, then explain which rule supplies the computed value."
        ],
        expected: "Text roles are distinct, links remain identifiable, and the caption and link colors remain readable on all surfaces.",
        hint: "A muted color should be less prominent, not nearly invisible; check it at its real text size."
      }
    ],
    "m9-l4": [
      {
        type: "explanation",
        title: "Opacity affects the whole element",
        content: [
          "The opacity property accepts a value from 0 to 1: 1 is fully opaque, 0.5 is half transparent, and 0 is fully transparent. It affects the rendered element as a whole, including its children. If a card is set to opacity: 0.5, its text, icons, and background all blend with what is behind it. The card still takes up space and may remain interactive even when it is invisible, so opacity: 0 is not a good way to hide content from users.",
          "When only a background should be translucent, use a color with an alpha channel, such as rgb(20 40 80 / 20%), and leave the element's opacity at 1. Its child text then stays opaque. Transparent colors blend with the backdrop, so their appearance changes across surfaces; test them on the real page background. For a disabled control or hidden content, use an intentional interaction and accessibility pattern rather than guessing that transparency alone communicates its state."
        ]
      },
      {
        type: "comparison",
        title: "Whole-element opacity or translucent color?",
        columns: [
          { title: "opacity on an element", intro: "Fades the element and its descendants together.", points: ["Useful for a deliberate fade effect.", "Can reduce text contrast and leave invisible clickable content."] },
          { title: "alpha in a color", intro: "Blends only that particular color with the backdrop.", points: ["Useful for a translucent decorative surface.", "Child text can stay fully opaque and readable."] }
        ]
      },
      {
        type: "mistakes",
        title: "Transparency pitfalls",
        items: [
          { wrong: "Setting a card's opacity to 0.6 to make only its background lighter.", why: "Every child, including its heading and buttons, is faded as well.", fix: "Use an alpha color for the background and keep text at full opacity." },
          { wrong: "Hiding important text with opacity: 0.", why: "The invisible content can still occupy space or be reached by interaction.", fix: "Use an appropriate hidden/visible state and ensure it behaves correctly for keyboard and assistive technology." }
        ]
      },
      {
        type: "practice",
        title: "Compare transparency on two surfaces",
        prompt: "Build a sample card whose surface is translucent but whose text remains clear.",
        steps: [
          "Create two cards with the same heading and paragraph, placing one on a pale background and one over a darker or patterned surface.",
          "Apply opacity: 0.5 to the first card and observe that its text fades together with its background.",
          "Replace the element opacity with an alpha color on background-color; keep the text at full opacity and compare both cards.",
          "Check paragraph contrast on each surface and remove transparency if the text becomes difficult to read."
        ],
        expected: "The final card's background blends with the surface while the heading and paragraph remain fully opaque and legible.",
        hint: "Change only the background color's alpha channel rather than setting opacity on the entire card."
      }
    ],
    "m9-ex1": [
      {
        type: "explanation",
        title: "Build a palette as a reusable design decision",
        content: [
          "A useful palette is small enough to remember and flexible enough to handle different content roles. Give colors jobs: page surface, main text, secondary text, primary action, and accent. Store the values in CSS custom properties so a change can be made once and reused consistently. A value chosen for a heading may not work for a small caption, so test role and size rather than assuming one accent can serve every foreground.",
          "Opacity is not a shortcut for making every secondary item accessible. A faded foreground can reduce contrast, and opacity on a container fades its children too. For a quieter caption, choose a solid color that still passes contrast instead of lowering the entire element's opacity. Check normal, hover, focus, and disabled states separately, and pair color with text, shape, or decoration so users can understand the interface without distinguishing color."
        ]
      },
      {
        type: "code",
        title: "Name palette roles once",
        language: "css",
        code: `:root {
  --ink: #1F2937;
  --muted-ink: #475569;
  --paper: #FFFFFF;
  --brand: #1D4ED8;
}
body { color: var(--ink); background: var(--paper); }
a { color: var(--brand); }`,
        explanation: [
          "Custom-property names describe purpose rather than repeating a color's appearance.",
          "A separate muted text color can be tested at caption size instead of relying on opacity.",
          "The example is a starting palette; verify each pairing and add interaction states for your own page."
        ]
      },
      {
        type: "mistakes",
        title: "Palette review",
        items: [
          { wrong: "Using a single bright brand color for all text, backgrounds, and actions.", why: "Roles blur together and some foreground/background combinations will have poor contrast.", fix: "Assign separate surface, text, muted-text, and action roles, then check their pairings." },
          { wrong: "Applying opacity: 0.7 to the entire card to create muted secondary text.", why: "The card's other content and controls also fade and may become hard to use.", fix: "Choose a solid muted text color and apply it only to the secondary text." }
        ]
      },
      {
        type: "practice",
        title: "Complete a color and opacity audit",
        prompt: "Style the heading and paragraph in the exercise, then check how the colors behave in context.",
        steps: [
          "Define custom properties for a page surface, primary text, secondary text, and accent; use them in headings and paragraphs.",
          "Set a solid muted color for supporting text and use a distinct accent for one meaningful link or call to action.",
          "Add one decorative translucent surface with an alpha color; keep its text fully opaque and test on a second background.",
          "Check each text pair with a contrast tool and add another cue, such as underline or a label, wherever color alone would carry meaning."
        ],
        expected: "The page uses a reusable palette, readable foreground/background pairs, and transparency only where it does not weaken text.",
        hint: "Check the smallest text first; small captions usually need more contrast than large display headings."
      }
    ],
    "m10-l1": [
      {
        type: "explanation",
        title: "Spacing changes the texture of text",
        content: [
          "letter-spacing adjusts the space between characters; word-spacing adjusts the extra space between words. They can make a short uppercase heading feel airy or help a compact label read clearly. Because spacing changes the texture of a whole line, small changes are usually enough. Relative units such as em scale with the element's font size, so 0.04em creates a smaller absolute gap on small text than on a large title.",
          "Spacing does not fix every readability problem. Excessive letter spacing can break familiar letter groups into separate shapes, while excessive word spacing can make sentences feel disconnected. Very tight negative spacing can cause characters to collide. Avoid applying decorative tracking to paragraphs by default; test the actual text at its real size and line length. Screen readers still read the underlying words, but sighted readers need the visual word shapes to remain recognizable."
        ]
      },
      {
        type: "code",
        title: "Use tracking lightly",
        language: "css",
        code: `.eyebrow {
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
article p {
  word-spacing: 0.02em;
}`,
        explanation: [
          "The short uppercase label can tolerate more letter spacing than a long paragraph.",
          "A tiny word-spacing adjustment is only useful if the font or design needs it; normal spacing is often best for body text.",
          "Compare the result at the intended size instead of treating a large value as automatically more stylish."
        ]
      },
      {
        type: "mistakes",
        title: "Spacing mistakes",
        items: [
          { wrong: "Adding 0.3em letter spacing to every paragraph.", why: "The large gaps break letter patterns and make continuous reading slow.", fix: "Leave body text at normal tracking or use only a small measured change." },
          { wrong: "Using repeated spaces in HTML to spread out a label.", why: "Spacing becomes content-dependent and may collapse or behave poorly when text wraps.", fix: "Use letter-spacing or layout properties for a visual spacing decision." }
        ]
      },
      {
        type: "practice",
        title: "Find a useful spacing range",
        prompt: "Compare spacing on a short label and a normal paragraph to learn where the treatment belongs.",
        steps: [
          "Make an uppercase category label and a three-sentence paragraph using the same font family.",
          "Test letter-spacing at 0, 0.04em, and 0.12em on the label; inspect the word as a whole rather than only individual letters.",
          "Try a small word-spacing change on the paragraph, then restore normal spacing if the line feels fragmented.",
          "Narrow the container until text wraps and check that the label and body copy remain recognizable."
        ],
        expected: "The short label may use restrained extra tracking, while paragraph text stays connected and easy to scan.",
        hint: "Change one property at a time and use em so the adjustment responds to the text size."
      }
    ],
    "m10-l2": [
      {
        type: "explanation",
        title: "Text alignment follows the writing direction",
        content: [
          "text-align controls how inline content is arranged within a block, such as the lines of a paragraph. Common values are left, right, center, and justify. The start and end values are direction-aware: start means the beginning edge of the writing direction, so it is more adaptable for languages that read right to left. For ordinary English paragraphs, left or start alignment is usually easiest to track from one line to the next.",
          "Center alignment works well for short titles or a compact announcement, but centered long paragraphs make the start of each line move and can slow reading. Justified text stretches spaces to line up both edges; on narrow columns it can create uneven gaps. text-align does not center a whole card or block on the page—that is a layout task handled by margins, flexbox, or grid. Keep the distinction clear when debugging."
        ]
      },
      {
        type: "comparison",
        title: "Alignment by content type",
        columns: [
          { title: "Short display content", intro: "A title or brief callout can use centered alignment.", points: ["Keep it short enough to scan quickly.", "Check how it wraps on a phone."] },
          { title: "Long reading content", intro: "A paragraph usually needs a consistent starting edge.", points: ["Left/start alignment supports line tracking.", "Avoid uneven word gaps from narrow justified text."] }
        ]
      },
      {
        type: "mistakes",
        title: "Alignment checks",
        items: [
          { wrong: "Centering every paragraph because the page feels balanced.", why: "Each line begins at a different position, making the paragraph harder to follow.", fix: "Center a short heading if appropriate and keep long reading copy start-aligned." },
          { wrong: "Using text-align: center to center a card's box.", why: "It centers inline content inside the block, not the block itself.", fix: "Use a layout method such as margin-inline: auto or flexbox to position the card." }
        ]
      },
      {
        type: "practice",
        title: "Align a landing-page section",
        prompt: "Choose alignment separately for a heading, a short announcement, and a long descriptive paragraph.",
        steps: [
          "Add one two-line heading, a brief invitation sentence, and a paragraph of at least four wrapped lines inside a fixed-width section.",
          "Center the heading and invitation, then compare the paragraph in center, left, and start alignment.",
          "Try justify at a narrow width and note whether the gaps between words become distracting.",
          "Center the section container independently using a layout technique, and explain why that is different from text-align."
        ],
        expected: "Short display content may be centered, long prose has a steady starting edge, and the container's position is controlled separately.",
        hint: "Use text-align for the content inside a block; use layout or margins for where the block itself sits."
      }
    ],
    "m10-l3": [
      {
        type: "explanation",
        title: "Decoration communicates relationships",
        content: [
          "text-decoration can draw an underline, overline, or line through text. It is useful for familiar cues: links are commonly underlined, and a removed or completed item can be crossed out when the status is also explained. The shorthand text-decoration can combine a line, style, and color, while longhand properties give finer control. Use decoration to reinforce the content's meaning, not to make every line compete for attention.",
          "Removing link underlines may create a cleaner design, but the link still needs another reliable visual cue, especially within a paragraph. Color alone is not enough for many readers. A focus indicator is also separate from text-decoration: do not remove outlines or focus styles without providing an equally clear replacement. If a price is crossed out, show the new price and label the old one so the information is not lost."
        ]
      },
      {
        type: "code",
        title: "Keep links clear and mark changed text",
        language: "css",
        code: `a {
  text-decoration: underline;
  text-decoration-thickness: 0.08em;
}
.old-price {
  text-decoration: line-through;
}`,
        explanation: [
          "The underline identifies link text in addition to its color.",
          "A line through an old price supports its status, but nearby text should still explain the current offer.",
          "Decoration should not be the only cue for important status information."
        ]
      },
      {
        type: "mistakes",
        title: "Decoration pitfalls",
        items: [
          { wrong: "Removing every link underline without adding another cue.", why: "Inline links may blend into surrounding text, especially for users who cannot distinguish the colors.", fix: "Keep underlines or provide another consistent visual treatment for links." },
          { wrong: "Using line-through as the only sign that an item is unavailable.", why: "The status may be missed, and the crossed-out text alone does not explain why.", fix: "Add a clear text label such as “Sold out” or “No longer available.”" }
        ]
      },
      {
        type: "practice",
        title: "Design links and an outdated price",
        prompt: "Create an article with an inline link and a simple before-and-after price example.",
        steps: [
          "Add a descriptive link within a sentence and style it with an underline; compare its color with nearby text.",
          "Temporarily remove the underline and test whether the link remains obvious without relying only on color.",
          "Show an old price with line-through next to a new price and a written label identifying the current price.",
          "Navigate through the link with the keyboard and confirm its focus state remains visible after any decoration changes."
        ],
        expected: "The link is recognizable and keyboard focus is visible; the crossed-out price has an understandable text explanation.",
        hint: "A sentence like “Read our field guide” is more useful link text than “click here.”"
      }
    ],
    "m10-l4": [
      {
        type: "explanation",
        title: "Indent and shadow solve different visual problems",
        content: [
          "text-indent moves the first line of a block inward relative to its following lines. It can mark the beginning of a paragraph in a continuous printed-style article, but on web pages paragraph spacing is often a clearer way to separate sections. A positive indent moves inward; a negative indent moves outward and can be useful for a carefully designed hanging indent. Indenting every short card paragraph may make it look like a quotation, so choose a convention and apply it consistently.",
          "text-shadow paints a shadow behind glyphs. Its values describe horizontal offset, vertical offset, blur radius, and color. Small, soft shadows can help large display text separate from a busy image, but shadows do not replace sufficient contrast. A strong or blurry shadow can make letter edges muddy, and some combinations are difficult to read. Unlike a box-shadow, text-shadow follows the text shapes rather than the rectangular element box."
        ]
      },
      {
        type: "code",
        title: "Subtle paragraph indent and heading shadow",
        language: "css",
        code: `article p + p {
  text-indent: 1.2em;
}
.hero-title {
  text-shadow: 1px 2px 3px rgb(0 0 0 / 25%);
}`,
        explanation: [
          "The adjacent-sibling selector indents later paragraphs but leaves the opening paragraph flush; this is one possible article convention.",
          "The small shadow uses modest offsets and blur to soften the edge rather than creating a hard duplicate.",
          "A real hero image still needs a readable contrast treatment behind the title."
        ]
      },
      {
        type: "mistakes",
        title: "Indent and shadow pitfalls",
        items: [
          { wrong: "Applying text-indent to every paragraph in a stack of cards.", why: "Each card starts abruptly and can resemble a block quote rather than a separate item.", fix: "Use spacing between card paragraphs or indent only a continuous article's later paragraphs." },
          { wrong: "Using a large bright shadow to make pale text readable on any image.", why: "Some parts of the image can still have poor text contrast, and the shadow blurs the letter shapes.", fix: "Use a suitable overlay or text surface, then keep any shadow subtle." }
        ]
      },
      {
        type: "practice",
        title: "Compare two article treatments",
        prompt: "Try paragraph indentation and text shadow in a small mock article, then keep only choices that help.",
        steps: [
          "Create three consecutive paragraphs and compare a flush-left layout with later paragraphs indented by about 1em.",
          "Add an h1 over a plain background, then place it over a photograph with a contrasting overlay or backing surface.",
          "Test a subtle text-shadow and a heavy one; compare edge clarity and readability rather than selecting the strongest effect.",
          "Zoom the page and inspect the title over both light and dark parts of the image; revise the background treatment if needed."
        ],
        expected: "The paragraph convention is consistent, the title remains readable from contrast rather than shadow alone, and text edges stay clear.",
        hint: "Try a plain text surface or image overlay before increasing shadow blur or darkness."
      }
    ],
    "m10-l5": [
      {
        type: "explanation",
        title: "Change presentation without changing stored text",
        content: [
          "text-transform changes how letters are displayed: uppercase, lowercase, capitalize, or none. The original text in the HTML remains unchanged, which is useful for visual labels but important for search, copying, and assistive technologies. Put the text in its natural written case and let CSS adjust its appearance. Capitalize generally makes the first letter of words uppercase; it is not a dependable grammar checker and may treat names or abbreviations incorrectly.",
          "white-space controls how spaces and line breaks inside text are handled, as well as whether text wraps. The normal value collapses repeated spaces and allows wrapping. pre preserves spaces and line breaks, which suits code or preformatted content but can overflow a small screen. pre-wrap preserves spacing while allowing lines to wrap. nowrap keeps a line unbroken and may force horizontal overflow, so use it only for short content where that behavior is deliberate."
        ]
      },
      {
        type: "code",
        title: "Style a label and preserve a code sample",
        language: "css",
        code: `.tag {
  text-transform: uppercase;
}
.code-sample {
  white-space: pre-wrap;
}`,
        explanation: [
          "The tag's natural case remains in the HTML while CSS presents it as uppercase.",
          "pre-wrap preserves intentional spaces and line breaks while allowing long lines to wrap.",
          "For a very long unbroken token, wrapping may need an additional overflow strategy."
        ]
      },
      {
        type: "mistakes",
        title: "Transform and whitespace pitfalls",
        items: [
          { wrong: "Typing every label in uppercase and also applying text-transform: uppercase.", why: "The content itself is less convenient to edit and may be read as an acronym by some speech tools.", fix: "Store natural case in HTML and use CSS for visual transformation." },
          { wrong: "Using white-space: nowrap on a long heading or paragraph.", why: "The line can exceed a narrow screen and cause horizontal scrolling.", fix: "Allow normal wrapping or use a controlled layout for a short no-wrap label." }
        ]
      },
      {
        type: "practice",
        title: "Format text and preserve intentional spacing",
        prompt: "Style a category label and a multi-line code-like sample without making ordinary text overflow.",
        steps: [
          "Write a category label in natural mixed case and use text-transform: uppercase; compare the stored source with the rendered result.",
          "Create a preformatted sample containing spaces and a line break; try normal, pre, and pre-wrap and describe what changes.",
          "Narrow the preview to phone width and check whether any preserved line extends beyond the page.",
          "Choose the whitespace behavior appropriate for the sample and keep article prose on normal wrapping."
        ],
        expected: "The label's source remains natural case, the sample preserves only the spacing it needs, and the page does not gain unwanted horizontal scrolling.",
        hint: "pre-wrap is often a useful compromise when spacing matters but long lines should still fit."
      }
    ],
    "m10-l6": [
      {
        type: "explanation",
        title: "Breaking a long token without wrecking paragraphs",
        content: [
          "Most normal text wraps at spaces. A long URL, file path, or unbroken identifier may have no convenient space, so it can spill out of a narrow card. word-break controls whether words can break at additional points. The break-all value permits breaks between characters almost anywhere; it contains the overflow, but it can make an ordinary word split into confusing fragments. Use it only when every character boundary is acceptable.",
          "For mixed content, overflow-wrap: anywhere is often a better first tool: it normally preserves words and introduces emergency break opportunities only when a token would otherwise overflow. Keep the containing layout responsive too; text wrapping should complement, not hide, a card that is simply too narrow. If a URL must be shown, consider linking it with a short descriptive label rather than displaying the full address."
        ]
      },
      {
        type: "comparison",
        title: "Two ways to handle an unbroken string",
        columns: [
          { title: "word-break: break-all", intro: "Can split ordinary words at any character.", points: ["Useful in exceptional cases with unbreakable strings.", "May make normal words difficult to scan."] },
          { title: "overflow-wrap: anywhere", intro: "Adds emergency break points when needed.", points: ["Usually preserves normal word wrapping.", "Useful for long URLs or identifiers in flexible cards."] }
        ]
      },
      {
        type: "mistakes",
        title: "Word-breaking pitfalls",
        items: [
          { wrong: "Applying word-break: break-all to every paragraph.", why: "Normal words can split at arbitrary characters even when there is plenty of room.", fix: "Use normal wrapping for prose and a targeted overflow rule for long tokens." },
          { wrong: "Making a card wider just to fit one very long URL.", why: "The oversized card can break the page layout on mobile.", fix: "Allow the token to wrap or show a shorter descriptive link label." }
        ]
      },
      {
        type: "practice",
        title: "Contain a long URL in a responsive card",
        prompt: "Add a long URL to a card and keep both the card and surrounding page within a narrow viewport.",
        steps: [
          "Create a card with a paragraph and one unbroken example URL; first observe the overflow at desktop and phone widths.",
          "Apply overflow-wrap: anywhere to the URL container and check that ordinary words still break at spaces.",
          "Try word-break: break-all on the same content and compare how normal words are affected.",
          "Replace the visible raw address with a short descriptive anchor when appropriate, while keeping the actual destination in href."
        ],
        expected: "The long token no longer creates page-level horizontal overflow, and ordinary paragraph words remain intact.",
        hint: "Target a class on the URL or its wrapper instead of applying aggressive breaking to every paragraph."
      }
    ],
    "m10-l7": [
      {
        type: "explanation",
        title: "Word spacing is a small adjustment, not a layout tool",
        content: [
          "word-spacing adds or subtracts space between words in a line. It can help tune a short banner or compensate for an unusually condensed display face, but everyday body text is usually best at its natural spacing. A value such as 0.05em scales with the text size; a large fixed value can feel very different when the font size changes. Check the result across several lines, since each line contains a different number of spaces.",
          "Word spacing is not the same as the gap between separate items in a navigation bar or button row. For separate components, use layout properties such as gap, margin, flexbox, or grid; word-spacing affects text runs only. Justified alignment also distributes available width by adjusting spaces, so adding word-spacing on top can create excessive gaps. Choose one mechanism for the problem you are solving."
        ]
      },
      {
        type: "code",
        title: "Adjust text, not component layout",
        language: "css",
        code: `.poster-line {
  word-spacing: 0.08em;
}
.navigation {
  display: flex;
  gap: 1rem;
}`,
        explanation: [
          "word-spacing changes the gaps between words within the poster line.",
          "The navigation uses flexbox gap because its links are separate layout items.",
          "Keep ordinary prose near its font's natural spacing unless a measured adjustment improves it."
        ]
      },
      {
        type: "mistakes",
        title: "Word-spacing mistakes",
        items: [
          { wrong: "Using word-spacing to create a large gap between navigation links.", why: "It changes text in each link rather than the distance between link elements.", fix: "Use gap in the flex or grid container." },
          { wrong: "Combining wide word spacing with justified narrow paragraphs.", why: "Justification already expands word gaps, so the result can look uneven and disconnected.", fix: "Use start alignment for normal article text and remove unnecessary word-spacing." }
        ]
      },
      {
        type: "practice",
        title: "Find the right spacing tool",
        prompt: "Improve spacing in one headline and one row of navigation links using the property suited to each job.",
        steps: [
          "Write a short poster headline with several words and compare normal word spacing with a small 0.05em adjustment.",
          "Create three separate navigation links and use a flex container with gap to control the space between them.",
          "Temporarily add word-spacing to the navigation and observe how it changes words inside each link, not just the link-to-link gap.",
          "Check the headline and navigation at a narrow width; remove any spacing that harms legibility or causes awkward wrapping."
        ],
        expected: "Word spacing is used only within a text line, while the navigation's item spacing comes from layout gap.",
        hint: "Ask whether the spaces are between words in one text run or between separate elements."
      }
    ],
    "m10-l8": [
      {
        type: "explanation",
        title: "A shadow follows glyphs, but contrast still matters",
        content: [
          "text-shadow paints one or more shadows behind text glyphs. Each shadow can specify a horizontal offset, vertical offset, blur radius, and color. A subtle shadow may separate a large title from a photograph, but it should not be the only reason the title can be read. If the image is busy, a suitable overlay or opaque text surface provides more predictable contrast than a very dark halo around each letter.",
          "Multiple comma-separated shadows can create effects, but every layer adds visual noise. Keep the direction and softness consistent with the page's other shadows. A small shadow on text is also different from text-outline effects, which can distort letter counters when too thick. Test real headings at multiple widths; a shadow that looks refined on a large monitor may blur small letters on a phone."
        ]
      },
      {
        type: "code",
        title: "Keep one display shadow restrained",
        language: "css",
        code: `.hero-title {
  color: white;
  text-shadow: 0 2px 6px rgb(0 0 0 / 35%);
}`,
        explanation: [
          "The first number is horizontal offset, the second is vertical offset, and the third is blur radius.",
          "The translucent dark color softens the shadow; it does not guarantee contrast over every part of an image.",
          "If the title still blends into the image, improve the image overlay or backing surface instead of making the shadow enormous."
        ]
      },
      {
        type: "mistakes",
        title: "Text-shadow pitfalls",
        items: [
          { wrong: "Adding a large, sharp shadow to every paragraph.", why: "The duplicate edges compete with the letter shapes and tire the reader.", fix: "Reserve restrained shadows for short display text, or remove them." },
          { wrong: "Assuming a text shadow makes any foreground/background combination accessible.", why: "The shadow can vary over the image and does not create a reliable solid contrast surface.", fix: "Use sufficient text contrast and an overlay or panel where needed." }
        ]
      },
      {
        type: "practice",
        title: "Test a title over a photograph",
        prompt: "Decide whether a text shadow or a background treatment makes a hero heading reliably readable.",
        steps: [
          "Place a short white heading over a photograph with both bright and dark areas and inspect each letter against its local background.",
          "Compare no shadow, a subtle shadow, and a heavy shadow; note where the letter edges become unclear.",
          "Add a dark translucent overlay or a solid panel behind the text and compare its contrast with the shadow-only version.",
          "Test at a phone width and choose the simplest treatment that keeps the full heading readable."
        ],
        expected: "The heading stays readable over both light and dark image areas, and the selected shadow remains subtle rather than carrying the whole contrast job.",
        hint: "A consistent overlay or backing surface usually helps more than a stronger text-shadow."
      }
    ],
    "m10-l9": [
      {
        type: "explanation",
        title: "Whitespace affects spaces and wrapping together",
        content: [
          "The white-space property controls whether runs of spaces collapse, whether line breaks are preserved, and whether content wraps. normal is the everyday behavior for prose: repeated spaces collapse and text wraps to fit. pre preserves spaces and line breaks and does not wrap, which is useful for code-like material in a pre element but may overflow. pre-wrap preserves intentional spacing while allowing long lines to wrap. pre-line keeps line breaks but collapses repeated spaces.",
          "nowrap collapses spaces but prevents the text from wrapping, which can be useful for a short date or compact control label. It is risky for long text because it can push a page wider than the screen. Pick a value based on the content's purpose and pair it with an overflow strategy when necessary. For code samples, horizontal scrolling can preserve exact line structure; for ordinary prose, normal wrapping is usually more comfortable."
        ]
      },
      {
        type: "comparison",
        title: "Common white-space behaviors",
        columns: [
          { title: "normal", intro: "The default for most prose.", points: ["Repeated spaces collapse.", "Text wraps at available break opportunities."] },
          { title: "pre-wrap", intro: "Keeps intentional spacing but still wraps.", points: ["Useful for formatted text that must fit a narrow view.", "Long unbroken tokens may still need another rule."] }
        ]
      },
      {
        type: "mistakes",
        title: "Whitespace pitfalls",
        items: [
          { wrong: "Using pre on a long code sample and assuming it will fit on mobile.", why: "pre preserves lines and disables wrapping, so the sample can overflow its box.", fix: "Use an intentional scroll area or pre-wrap, depending on whether exact line structure matters." },
          { wrong: "Using nowrap for an entire description to keep it on one line.", why: "The text can extend past the viewport and become difficult to reach.", fix: "Let prose wrap normally; reserve nowrap for short, tested labels." }
        ]
      },
      {
        type: "practice",
        title: "Choose whitespace behavior for three examples",
        prompt: "Compare ordinary prose, an aligned code sample, and a short date label.",
        steps: [
          "Create three elements containing repeated spaces and explicit line breaks, then start with the default normal behavior.",
          "Try pre, pre-wrap, and pre-line on the code-like sample and record which spaces and line breaks survive.",
          "Set nowrap on a short date label, then increase its text length and narrow the preview to test the overflow risk.",
          "Keep normal wrapping for prose and choose either wrapping or a horizontal scroll area for the code sample based on its purpose."
        ],
        expected: "Each text type has a deliberate whitespace rule, and no long prose or code sample silently expands the whole page.",
        hint: "Choose first whether spaces and line breaks are meaningful; then decide whether wrapping or scrolling is preferable."
      }
    ],
    "m10-ex1": [
      {
        type: "explanation",
        title: "Text polish should preserve the reading experience",
        content: [
          "Text properties can give a page a distinctive voice, but each effect should answer a design question. Letter spacing may clarify a short label; text alignment can establish a title's relationship to its section; decoration can identify a link; indentation can signal a paragraph convention; and a shadow may separate a display title from a background. Using every property at once does not make a page more polished. It often makes the hierarchy harder to understand.",
          "Responsive text needs to survive content changes. A heading may wrap to three lines on a phone, a link may contain a long address, and a visitor may zoom. Check the whole layout rather than judging only a desktop screenshot. Keep links identifiable, preserve visible keyboard focus, and ensure transformed text still has sensible source wording. Use proper line wrapping for normal paragraphs and target long tokens carefully rather than breaking every word."
        ]
      },
      {
        type: "mistakes",
        title: "Before you call the typography finished",
        items: [
          { wrong: "Adding every available effect to the same heading.", why: "Transform, tracking, heavy shadow, and decoration can compete instead of clarifying hierarchy.", fix: "Choose one or two effects that directly support the heading's role." },
          { wrong: "Removing link decoration without checking keyboard focus or contrast.", why: "A link may become difficult to identify for both sighted and keyboard users.", fix: "Keep a clear link cue and test the focus state separately." }
        ]
      },
      {
        type: "practice",
        title: "Polish and test a short article",
        prompt: "Use the exercise playground to improve a heading, paragraph, caption, and link without compromising small-screen reading.",
        steps: [
          "Apply restrained tracking and an optional transform to the heading; preserve natural text in the HTML and test a two-line title.",
          "Choose a readable paragraph alignment and spacing, then keep decoration on the link or provide another obvious link cue.",
          "Add a subtle shadow only if the heading needs separation; check a long URL or use a descriptive link label to avoid overflow.",
          "Test at desktop and phone widths, zoom in, and use keyboard navigation to verify wrapping, contrast, and visible focus."
        ],
        expected: "The heading has a clear role, paragraph text remains easy to read, links are recognizable, and no long text causes page-wide overflow.",
        hint: "Start by removing effects; add only the ones that solve a visible problem."
      }
    ],
    "m11-l1": [
      {
        type: "explanation",
        title: "A language, its standard, and its host environment",
        content: [
          "JavaScript is the name developers commonly use for the programming language. ECMAScript is the standardized specification that describes the language's syntax and behavior, including features such as variables, functions, and arrays. A new edition of ECMAScript can add or clarify language capabilities, and browsers implement those rules. That relationship is similar to a shared recipe: the standard describes what should happen, and each browser engine provides an implementation.",
          "A browser also supplies Web APIs that are not part of ECMAScript itself. document, the DOM, alert(), and fetch() are browser features that JavaScript code can use because the browser provides them. A JavaScript runtime outside the browser can implement ECMAScript but provide different APIs. This distinction helps explain why a language feature may work in many environments while a page-specific API such as document.querySelector is only available where a DOM exists."
        ]
      },
      {
        type: "comparison",
        title: "Separate the language from its environment",
        columns: [
          { title: "ECMAScript", intro: "The standardized core language rules.", points: ["Defines syntax and built-in language behavior.", "Features are adopted by runtime implementations."] },
          { title: "Browser Web APIs", intro: "Tools exposed by a browser environment.", points: ["The DOM lets code interact with page elements.", "An API can differ between browser and non-browser runtimes."] }
        ]
      },
      {
        type: "mistakes",
        title: "Terminology mistakes",
        items: [
          { wrong: "Calling document.querySelector an ECMAScript method.", why: "The DOM API is supplied by the browser, not by the core language standard.", fix: "Describe it as a browser API used by JavaScript." },
          { wrong: "Assuming every JavaScript runtime has document and window.", why: "Those objects depend on a browser-like environment being present.", fix: "Check the runtime's available APIs before using browser-specific code." }
        ]
      },
      {
        type: "practice",
        title: "Sort features by where they come from",
        prompt: "Classify a small set of familiar JavaScript and browser features.",
        steps: [
          "Make two columns in your notes: ECMAScript language and browser-provided Web APIs.",
          "Place let, const, arrays, and functions in the language column; place document, the DOM, and alert in the browser column.",
          "Choose one browser API and explain what page-related job it makes possible.",
          "Imagine running JavaScript in an environment without a web page; identify which browser-specific example would need a replacement."
        ],
        expected: "Core language features are distinguished from browser APIs, and you can explain that JavaScript runs in different environments.",
        hint: "Ask whether the feature describes language syntax/data behavior or interacts with a browser page or device."
      }
    ],
    "m11-l2": [
      {
        type: "explanation",
        title: "The DOM is a browser-created model of the page",
        content: [
          "The DOM, or Document Object Model, is the browser's object representation of a document. HTML elements become nodes arranged in a tree: the document contains the root html element, which contains head and body, and body contains nested elements such as headings and paragraphs. Parent and child relationships in the tree correspond to nesting in the HTML. JavaScript can use those objects to inspect content, change text or attributes, and create or remove elements.",
          "The DOM is related to the HTML source but is not simply a copy of the file. The browser parses the markup, repairs some invalid structures, and creates a live model. Changing an element's textContent updates the DOM and the browser repaints the page; it does not automatically rewrite the original HTML file on disk. Keeping that distinction in mind helps when you refresh a page and see the initial markup again."
        ]
      },
      {
        type: "code",
        title: "Trace a small DOM change",
        language: "html",
        code: `<main>
  <h1 id="title">Garden Club</h1>
  <p>We grow herbs together.</p>
</main>`,
        explanation: [
          "main is the parent of the heading and paragraph; those elements are its children.",
          "The heading and paragraph are siblings because they share the same parent.",
          "JavaScript can select the heading by its id and update the browser's live DOM."
        ]
      },
      {
        type: "mistakes",
        title: "DOM concepts to keep straight",
        items: [
          { wrong: "Thinking a JavaScript text change permanently edits the HTML file.", why: "The change is made to the current in-memory DOM, not saved back to the source file.", fix: "Update the source separately if the initial page should contain the new text." },
          { wrong: "Calling every object in the browser a DOM element.", why: "The DOM has document, element, and text nodes with different roles.", fix: "Use precise terms: the document contains element nodes, and elements can contain text nodes." }
        ]
      },
      {
        type: "practice",
        title: "Draw and edit a document tree",
        prompt: "Map a short piece of HTML to its DOM relationships before imagining a JavaScript update.",
        steps: [
          "Write a main element containing a heading, a paragraph, and a list with two list items.",
          "Draw each element as a node and connect it to its parent; mark the heading and paragraph as siblings.",
          "Choose an id for the heading and describe how changing its textContent would affect the visible page.",
          "Refresh the page conceptually: explain which content comes back from the HTML source and why the in-memory change is not saved."
        ],
        expected: "The tree correctly shows parent, child, and sibling relationships, and distinguishes live DOM changes from editing the source file.",
        hint: "Start with the outermost element, then indent each nested element one level farther in the tree."
      }
    ],
    "m11-l3": [
      {
        type: "explanation",
        title: "Read a statement as a small instruction",
        content: [
          "JavaScript syntax is the set of rules that lets the engine understand your instructions. Names are case-sensitive: score and Score are different identifiers. Strings need matching quote marks, braces and parentheses must pair correctly, and a statement should use consistent indentation so its structure is visible. Semicolons are often optional in simple code, but using them consistently can help make statement boundaries clear for beginners.",
          "Use let when a variable will be reassigned and const when the binding should not be reassigned. const does not make every object or array value deeply immutable; it prevents assigning a different value to that variable name. Choose names that describe the stored information, such as visitorName rather than x. Comments can explain why a decision exists, but obvious code does not need a comment that repeats the same instruction."
        ]
      },
      {
        type: "code",
        title: "Variables, reassignment, and a useful name",
        language: "javascript",
        code: `const clubName = "Young Gardeners";
let visitorName = "Ari";
visitorName = "Sam";
console.log("Welcome, " + visitorName + " to " + clubName);`,
        explanation: [
          "clubName stays bound to the same value, so const communicates that it will not be reassigned.",
          "visitorName changes from Ari to Sam, so let is appropriate.",
          "A descriptive identifier makes the output's purpose easier to understand than a short unnamed placeholder."
        ]
      },
      {
        type: "mistakes",
        title: "Syntax and variable mistakes",
        items: [
          { wrong: "Using visitorname when the declared name is visitorName.", why: "JavaScript treats uppercase and lowercase letters as different characters.", fix: "Copy the identifier consistently, including its capitalization." },
          { wrong: "Declaring a changing total with const and then assigning it a new number.", why: "A const binding cannot be reassigned, so the engine reports an error.", fix: "Use let for a value you plan to reassign, and keep const for stable bindings." }
        ]
      },
      {
        type: "practice",
        title: "Write a readable welcome message",
        prompt: "Use variables and a console message for a fictional club page.",
        steps: [
          "Declare a const variable for the club name and a let variable for a visitor's first name.",
          "Log a greeting using both values; use descriptive names and consistent quotes and indentation.",
          "Change the visitor variable once and log the greeting again, then try the same reassignment with const and observe the error.",
          "Add a comment only if it explains a choice that would not be clear from the variable names themselves."
        ],
        expected: "The club name stays constant, the visitor value can be reassigned, and the greeting uses the latest value without a spelling or capitalization error.",
        hint: "The declaration and every later reference must use the exact same case-sensitive identifier."
      }
    ],
    "m11-l4": [
      {
        type: "explanation",
        title: "Select the elements you actually intend to change",
        content: [
          "getElementById finds the element with a particular id and returns that element or null if it does not exist. querySelector accepts a CSS selector and returns the first matching element; querySelectorAll returns a collection of every match. Use an id when you intend to target one unique element, and use a class selector when a group of elements shares a role. A selector that matches nothing is not automatically an error, so your code should be written with the page structure in mind.",
          "Scripts can run before the browser has created the element you are trying to select. Put a deferred external script in the head, or place the script after the relevant HTML, so the selection happens after parsing. When you get null, check the id spelling, whether the selector uses the right prefix (# for id, . for class), and when the script runs. The selected element is an object; properties such as textContent can then read or change its content."
        ]
      },
      {
        type: "code",
        title: "Select one element and update its text",
        language: "javascript",
        code: `const status = document.querySelector("#status");
if (status) {
  status.textContent = "Ready to explore";
}`,
        explanation: [
          "The # prefix means the selector looks for an id named status.",
          "The check prevents trying to set a property on null if the element is missing.",
          "textContent changes text without interpreting it as HTML markup."
        ]
      },
      {
        type: "mistakes",
        title: "Selector errors to diagnose",
        items: [
          { wrong: "document.querySelector(\"status\") for id=\"status\".", why: "Without #, status is treated as an element name selector.", fix: "Use getElementById(\"status\") or querySelector(\"#status\")." },
          { wrong: "Calling addEventListener on the result without checking the page or selector.", why: "A missing match is null and does not have element methods.", fix: "Confirm the selector and script timing; guard the result when a match is optional." }
        ]
      },
      {
        type: "practice",
        title: "Select and update a small page",
        prompt: "Use three selector styles to target an id, a class, and a group of matching list items.",
        steps: [
          "Create a heading with id=\"status\", two paragraphs with class=\"note\", and a list with two li elements.",
          "Use getElementById to select the heading and querySelector to select the first note paragraph.",
          "Use querySelectorAll(\"li\") to collect both list items and describe how the collection differs from one element.",
          "Update only the heading's textContent; then deliberately misspell its id and explain the null result before correcting it."
        ],
        expected: "The id selects one heading, querySelector finds the first matching paragraph, and querySelectorAll represents both list items.",
        hint: "An id selector starts with # in CSS syntax, while a class selector starts with a dot."
      }
    ],
    "m11-l5": [
      {
        type: "explanation",
        title: "Choose a script location that is maintainable",
        content: [
          "JavaScript can be placed directly in an HTML attribute, inside a script element, or in a separate .js file. An inline event attribute such as onclick mixes behavior into markup and becomes hard to maintain as a page grows. An internal script is useful for a tiny demonstration or a page-specific experiment. A separate external file keeps structure, styling, and behavior easier to find and lets the browser cache shared code across pages.",
          "An external script in the document head may run before the page elements exist. The defer attribute tells the browser to download the file while parsing HTML and execute it after parsing, in document order. A script near the end of body also runs after the earlier markup has been read, though defer is often clearer. A script element with src should not also rely on inline content; put the executable code in the referenced file."
        ]
      },
      {
        type: "code",
        title: "Link a deferred external script",
        language: "html",
        code: `<head>
  <script src="js/main.js" defer></script>
</head>`,
        explanation: [
          "The src path points to an external JavaScript file relative to the HTML document.",
          "defer allows HTML parsing to continue and runs the script after the document has been parsed.",
          "Keep page behavior in main.js rather than placing a second copy of the same code in the HTML."
        ]
      },
      {
        type: "mistakes",
        title: "Script placement mistakes",
        items: [
          { wrong: "Loading a script in the head without defer and immediately selecting body elements.", why: "The browser may not have parsed those elements when the code runs.", fix: "Use defer or place the script after the relevant markup." },
          { wrong: "Repeating a long onclick attribute on several buttons.", why: "Behavior is mixed into HTML and repeated code is difficult to update consistently.", fix: "Use an external script and attach listeners to the elements." }
        ]
      },
      {
        type: "practice",
        title: "Move a page interaction into a file",
        prompt: "Plan a button interaction using a separate script so the page remains easy to maintain.",
        steps: [
          "Create index.html with a heading and button, plus a js/main.js file in a clearly drawn folder structure.",
          "Link the external file from the head with defer and move the interaction code into that file.",
          "Select the button and attach a click listener that changes the heading's textContent.",
          "Temporarily remove defer and note why code timing might matter; restore it and verify the external path matches the folder tree."
        ],
        expected: "HTML holds page structure, the external JavaScript file holds behavior, and deferred code can find the parsed button.",
        hint: "A relative src path starts from the HTML file, so check the spelling and folders exactly."
      }
    ],
    "m11-l6": [
      {
        type: "explanation",
        title: "Objects group related data and behavior",
        content: [
          "An object groups values under named properties and can also provide methods—functions associated with that object. A DOM element is an object: textContent and id are properties, while classList.add() and addEventListener() are methods. Dot notation reads as “the value named after this dot belongs to the object before it.” A method call uses parentheses because it performs an action; a property access usually reads or assigns a value.",
          "When reading code, follow the object from left to right. document.querySelector(\"h1\") asks the document for an element; the returned element then has its own properties and methods. Not every property is a string, and assigning the wrong kind of value can produce unexpected results. textContent is appropriate for plain text; innerHTML interprets markup and should not be used with untrusted text. Use the simplest property or method that matches the task."
        ]
      },
      {
        type: "code",
        title: "Read an element's properties and call its methods",
        language: "javascript",
        code: `const heading = document.querySelector("h1");
heading.textContent = "New title";
heading.classList.add("highlight");
console.log(heading.id);`,
        explanation: [
          "heading is a reference to an element object returned by the document method.",
          "textContent and id are properties; one is assigned a value and one is read.",
          "classList.add() is a method call that changes the element's class list."
        ]
      },
      {
        type: "mistakes",
        title: "Object notation checks",
        items: [
          { wrong: "Writing heading.classList.add = \"highlight\".", why: "This assigns to the method property instead of calling the method.", fix: "Call heading.classList.add(\"highlight\") with parentheses." },
          { wrong: "Using innerHTML to insert a visitor-provided name as plain text.", why: "HTML-like input could be interpreted as markup rather than displayed as text.", fix: "Use textContent when the value should be plain text." }
        ]
      },
      {
        type: "practice",
        title: "Label every part of an object expression",
        prompt: "Inspect an element expression and identify the object, properties, and method call.",
        steps: [
          "Create an h1 with an id and select it into a variable named heading.",
          "Read heading.id and heading.textContent in the console; identify each as a property access.",
          "Assign a new value to textContent and call heading.classList.add(\"highlight\"); identify which expression is a method call.",
          "Try using textContent with a string that contains angle brackets and compare it with innerHTML only in safe, controlled sample content."
        ],
        expected: "You can identify a DOM element object, distinguish its data properties from methods, and use textContent for plain text.",
        hint: "Parentheses after a method name indicate a function call; a property is typically read or assigned without calling it."
      }
    ],
    "m11-ex1": [
      {
        type: "explanation",
        title: "Use interaction tools thoughtfully",
        content: [
          "alert() opens a browser dialog and pauses the visitor's interaction until it is dismissed. It can be useful in a first demonstration, but repeated alerts interrupt the page and do not fit polished interfaces. document.write() is an older teaching example; after a document has loaded, calling it can replace the whole page. For a real interaction, select an element and update its textContent or style instead.",
          "Changing document.body.style.backgroundColor demonstrates that JavaScript can update an element's inline style, but a CSS class is often a better way to represent a reusable visual state. A button should have a clear label, respond when activated by keyboard as well as mouse, and update a meaningful part of the page. Keep page structure in HTML and behavior in JavaScript. Test the interaction after the script loads and watch the console for selector or spelling errors."
        ]
      },
      {
        type: "code",
        title: "Prefer a class-based theme change",
        language: "javascript",
        code: `const themeButton = document.querySelector("#theme");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
});`,
        explanation: [
          "The button uses a click event listener instead of an inline onclick attribute.",
          "classList.toggle() adds the class when it is absent and removes it when present.",
          "CSS can define the appearance of night-mode in one reusable place."
        ]
      },
      {
        type: "mistakes",
        title: "Interaction safety and usability",
        items: [
          { wrong: "Calling document.write() after clicking a button on the loaded page.", why: "It can replace the existing document instead of inserting a small message.", fix: "Select a specific element and change its textContent or add a class." },
          { wrong: "Changing the background without giving the button a clear label or focus state.", why: "Visitors may not know what the control does or may be unable to find it by keyboard.", fix: "Use descriptive button text, native button markup, and visible keyboard focus." }
        ]
      },
      {
        type: "practice",
        title: "Build a visitor-friendly page interaction",
        prompt: "Extend the existing exercise so a visitor can change the background and heading without blocking the page.",
        steps: [
          "Keep the provided heading and native buttons; add clear labels that describe the action before it is activated.",
          "Attach click listeners in JavaScript; use textContent for the heading and either a class toggle or a backgroundColor assignment for the theme.",
          "Try the classic alert once as a demonstration, then remove it and compare how the page feels without an interruption.",
          "Use Tab and Enter or Space to activate each button, test both theme states, and check the browser console for errors."
        ],
        expected: "Both controls work with keyboard and pointer input, update only the intended content or appearance, and do not replace the document.",
        hint: "A button element already supports keyboard activation; keep its accessible text clear and attach behavior with addEventListener."
      }
    ]
  };

  Object.entries(expansions).forEach(([lessonId, sections]) => {
    const lesson = lessons[lessonId];
    if (!lesson) {
      throw new Error(`Cannot add module 8–11 expansion: lesson "${lessonId}" is missing from COURSE_CONTENT.lessons.`);
    }
    lesson.sections.push(...sections);
  });
})();
