# kids tech Programming with
# HTML, CSS, and
# JavaScript
### with examples and
### hands-on exercises
## WEBUCATOR

---

Copyright © 2024 by Webucator. All rights reserved.
No part of this manual may be reproduced or used in any manner without written permission of the
copyright owner.
Version: 1.2.0
The Author
Nat Dunn
Nat Dunn is the founder of Webucator (www.webucator.com), a company that has provided training
for tens of thousands of students from thousands of organizations. Nat started the company in 2003
to combine his passion for technical training with his business expertise, and to help companies benefit
from both. His previous experience was in sales, business and technical training, and management. Nat
has an MBA from Harvard Business School and a BA in International Relations from Pomona College.
Follow Nat on Twitter at @natdunn and Webucator at @webucator.
Class Files
Download the class files used in this manual at
https://static.webucator.com/media/public/materials/classfiles/W8-20480-1.2.0-programming-with-html-css-and-javascript.zip.
Errata
Corrections to errors in the manual can be found at https://www.webucator.com/books/errata/.

---

# Table of Contents
LESSON 1. A Quick Overview of Web Development......................................................................1
HTML is Part of a Team.............................................................................................................1
Client-side Programming..........................................................................................................5
Server-side Programming.........................................................................................................6
LESSON 2. Introduction to HTML.................................................................................................9
Exercise 1: A Simple HTML Document.........................................................................10
HTML Elements, Attributes, and Comments..........................................................................13
The HTML Skeleton.................................................................................................................17
Viewing the Page Source........................................................................................................20
Special Characters..................................................................................................................21
History of HTML......................................................................................................................22
The lang Attribute...................................................................................................................24
LESSON 3. Paragraphs, Headings, and Text..................................................................................27
Paragraphs..............................................................................................................................27
Heading Levels........................................................................................................................29
Breaks and Horizontal Rules...................................................................................................30
The div Tag..............................................................................................................................31
Exercise 2: Creating an HTML Page..............................................................................33
Quoted Text............................................................................................................................36
Preformatted Text...................................................................................................................38
Inline Semantic Elements.......................................................................................................40
Exercise 3: Adding Inline Elements..............................................................................44
LESSON 4. HTML Links..............................................................................................................47
Text Links................................................................................................................................47
Absolute vs. Relative Paths.....................................................................................................48
Targeting New Tabs.................................................................................................................51
Email Links..............................................................................................................................54
Exercise 4: Adding Links..............................................................................................55
Lorem Ipsum...........................................................................................................................65
The title Attribute...................................................................................................................65
Targeting a Specific Location on the Page..............................................................................66
LESSON 5. HTML Images............................................................................................................69
Inserting Images.....................................................................................................................70
Image Links.............................................................................................................................74
Exercise 5: Adding Images to the Page.........................................................................76
Providing Alternative Images..................................................................................................80
Table of Contents | i

---

LESSON 6. HTML Lists................................................................................................................83
Unordered Lists......................................................................................................................83
Ordered Lists..........................................................................................................................86
Description Lists.....................................................................................................................95
Exercise 6: Creating Lists.............................................................................................97
LESSON 7. Sectioning a Web Page..............................................................................................105
Semantic Block-Level Elements............................................................................................105
Articles vs. Sections..............................................................................................................106
Sectioning the Home Page...................................................................................................108
Sectioning Content and Styling.............................................................................................114
Heading Levels and Sectioning Elements.............................................................................115
Exercise 7: Sectioning the Pages................................................................................117
LESSON 8. Crash Course in CSS.................................................................................................119
Benefits of Cascading Style Sheets.......................................................................................120
CSS Rules..............................................................................................................................121
Selectors...............................................................................................................................122
Combinators.........................................................................................................................126
Precedence of Selectors.......................................................................................................128
How Browsers Style Pages....................................................................................................128
CSS Resets.............................................................................................................................131
CSS Normalizers....................................................................................................................133
External Stylesheets, Embedded Stylesheets, and Inline Styles...........................................134
Exercise 8: Creating an External Stylesheet................................................................139
Exercise 9: Creating an Embedded Stylesheet............................................................147
Exercise 10: Adding Inline Styles................................................................................150
div and span.........................................................................................................................152
Exercise 11: Styling div and span...............................................................................156
Media Types.........................................................................................................................158
Units of Measurement.........................................................................................................160
Inheritance...........................................................................................................................165
LESSON 9. CSS Fonts.................................................................................................................171
font-family............................................................................................................................172
@font-face............................................................................................................................177
font-size................................................................................................................................184
font-style..............................................................................................................................188
font-variant...........................................................................................................................188
font-weight...........................................................................................................................189
line-height............................................................................................................................192
font.......................................................................................................................................197
Exercise 12: Styling Fonts...........................................................................................201
ii | Table of Contents

---

LESSON 10. Color and Opacity...................................................................................................205
About Color and Opacity......................................................................................................205
Color and Opacity Values......................................................................................................206
color......................................................................................................................................209
opacity..................................................................................................................................212
Exercise 13: Adding Color and Opacity to Text...........................................................215
LESSON 11. CSS Text.................................................................................................................221
letter-spacing........................................................................................................................222
text-align..............................................................................................................................223
text-decoration.....................................................................................................................225
text-indent............................................................................................................................227
text-shadow..........................................................................................................................229
text-transform......................................................................................................................231
white-space..........................................................................................................................233
word-break...........................................................................................................................238
word-spacing........................................................................................................................240
Exercise 14: Text Properties.......................................................................................243
LESSON 12. JavaScript Basics......................................................................................................249
JavaScript vs. EcmaScript......................................................................................................249
The HTML DOM....................................................................................................................250
JavaScript Syntax..................................................................................................................251
Accessing Elements..............................................................................................................252
Where Is JavaScript Code Written?......................................................................................253
JavaScript Objects, Methods, and Properties.......................................................................256
Exercise 15: Alerts, Writing, and Changing Background Color....................................259
Table of Contents | iii

---

LESSON 13. Variables, Arrays, and Operators.............................................................................263
JavaScript Variables..............................................................................................................263
A Loosely Typed Language....................................................................................................264
Google Chrome DevTools.....................................................................................................265
Storing User-Entered Data....................................................................................................269
Exercise 16: Using Variables.......................................................................................273
Constants..............................................................................................................................274
Arrays....................................................................................................................................275
Exercise 17: Working with Arrays...............................................................................279
Associative Arrays.................................................................................................................282
Playing with Array Methods.................................................................................................285
JavaScript Operators.............................................................................................................286
The Modulus Operator.........................................................................................................289
Playing with Operators.........................................................................................................289
The Default Operator............................................................................................................292
Exercise 18: Working with Operators.........................................................................295
LESSON 14. JavaScript Functions................................................................................................303
Global Objects and Functions...............................................................................................303
Exercise 19: Working with Global Functions...............................................................306
User-defined Functions........................................................................................................312
Exercise 20: Writing a JavaScript Function.................................................................316
Returning Values from Functions.........................................................................................322
LESSON 15. Built-In JavaScript Objects......................................................................................323
Strings...................................................................................................................................323
Math.....................................................................................................................................328
Date......................................................................................................................................331
Helper Functions..................................................................................................................336
Exercise 21: Returning the Day of the Week as a String..............................................337
iv | Table of Contents

---

LESSON 16. Conditionals and Loops..........................................................................................341
Conditionals..........................................................................................................................341
Short-circuiting.....................................................................................................................346
Switch / Case........................................................................................................................350
Ternary Operator..................................................................................................................356
Truthy and Falsy....................................................................................................................357
Exercise 22: Conditional Processing...........................................................................358
Loops....................................................................................................................................362
while and do…while Loops...................................................................................................362
for Loops...............................................................................................................................364
break and continue...............................................................................................................366
Exercise 23: Working with Loops...............................................................................368
Array: forEach().....................................................................................................................371
LESSON 17. Event Handlers and Listeners..................................................................................373
On-event Handlers...............................................................................................................373
Exercise 24: Using On-event Handlers........................................................................376
The addEventListener() Method...........................................................................................380
Anonymous Functions..........................................................................................................386
Capturing Key Events............................................................................................................388
Exercise 25: Adding Event Listeners...........................................................................390
Benefits of Event Listeners...................................................................................................393
Timers...................................................................................................................................395
Exercise 26: Typing Test.............................................................................................399
Table of Contents | v

---

LESSON 18. The HTML Document Object Model....................................................................405
CSS Selectors........................................................................................................................406
The innerHTML Property......................................................................................................410
Nodes, NodeLists, and HTMLCollections..............................................................................411
Accessing Element Nodes.....................................................................................................412
Exercise 27: Accessing Elements................................................................................422
Dot Notation and Square Bracket Notation..........................................................................424
Accessing Elements Hierarchically........................................................................................428
Exercise 28: Working with Hierarchical Elements.......................................................432
Accessing Attributes.............................................................................................................437
Creating New Nodes.............................................................................................................438
Focusing on a Field...............................................................................................................439
Shopping List Application.....................................................................................................440
Exercise 29: Logging..................................................................................................442
Exercise 30: Adding EventListeners............................................................................445
Exercise 31: Adding Items to the List..........................................................................449
Exercise 32: Dynamically Adding Remove Buttons to the List Items...........................451
Exercise 33: Removing List Items...............................................................................453
Exercise 34: Preventing Duplicates and Zero-length Product Names..........................455
Manipulating Tables.............................................................................................................457
LESSON 19. HTML Forms.........................................................................................................465
How HTML Forms Work.......................................................................................................465
The form Element.................................................................................................................466
Form Elements.....................................................................................................................467
Buttons.................................................................................................................................477
Exercise 35: Creating a Registration Form..................................................................480
Checkboxes...........................................................................................................................483
Radio Buttons.......................................................................................................................484
Exercise 36: Adding Checkboxes and Radio Buttons...................................................487
Fieldsets................................................................................................................................490
Select Menus........................................................................................................................492
Textareas..............................................................................................................................494
Exercise 37: Adding a Select Menu and a Textarea.....................................................496
HTML Forms and CSS............................................................................................................499
vi | Table of Contents

---

LESSON 20. JavaScript Form Validation.....................................................................................501
Server-side Form Validation.................................................................................................501
HTML Form Validation..........................................................................................................502
Accessing Form Data............................................................................................................507
Form Validation with JavaScript...........................................................................................510
Exercise 38: Checking the Validity of the Email and URL Fields...................................511
Checking Validity on Input and Submit Events.....................................................................513
Adding Error Messages.........................................................................................................518
Validating Textareas..............................................................................................................524
Validating Checkboxes..........................................................................................................527
Validating Radio Buttons......................................................................................................528
Validating Select Menus.......................................................................................................531
Exercise 39: Validating the Ice Cream Order Form......................................................534
Giving the User a Chance.....................................................................................................541
LESSON 21. Regular Expressions.................................................................................................547
Getting Started.....................................................................................................................547
Regular Expression Syntax....................................................................................................548
Backreferences.....................................................................................................................559
Form Validation with Regular Expressions...........................................................................561
Cleaning Up Form Entries.....................................................................................................562
Exercise 40: Cleaning Up Form Entries.......................................................................567
A Slightly More Complex Example........................................................................................569
Table of Contents | vii

---

# LESSON 1
# A Quick Overview of Web Development
EVALUATION COPY: Not to be used in class.
Topics Covered
Client-side web development languages.
Server-side web development languages.
## Introduction
Learning HTML is the first step to becoming a web developer. But it is just one of several languages
you will need to know to create websites and web applications. In this lesson, you will learn where
HTML fits in the ecosystem of web development.
EVALUATION COPY: Not to be used in class.
### ❋
## 1.1. HTML is Part of a Team
Before you get started writing HTML code, it’s important to understand where HTML fits in the
ecosystem of web development. Let’s first consider what happens when you visit a website. When you
type in a URL in the location bar of your browser (e.g., https://www.runners-home.com/), the
browser makes a request from the web server for a web page. If you don’t specify the name of the file
you want (e.g., contact.html or about.html), the web server will send a default page, which is most
likely called index.html, index.php, index.cfm, or something similar. The web server returns that
web page to the browser for display. The web page may include references to other files:
Images to display on the page.
Style sheets to add formatting to the page.
Scripts to add interactivity to the page.
LESSON 1: A Quick Overview of Web Development | 1
EVALUATION COPY: Not to be used in class.

---

The browser will download these referenced files as well. To get a better feel for this, do the following
in Google Chrome:
1. As illustrated below…
A. Click the three-vertical-dot icon in the upper right of Google Chrome:
B. Then select More tools.
C. Then select Developer tools. This will open Chrome’s Developer tools.
2. In Developer tools, select the Network tab:
3. If Developer tools isn’t docked on the bottom of the browser, move it to the bottom to make
it easier to see the Network tab information:
2 | LESSON 1: A Quick Overview of Web Development
EVALUATION COPY: Not to be used in class.

---

Developer tools should now be at the bottom of the browser:
4. Now, in the location bar of your browser, enter https://www.runners-home.com/ and
press Enter:
5. After the page loads, take a look at the Network tab. You should see something like this:
LESSON 1: A Quick Overview of Web Development | 3
EVALUATION COPY: Not to be used in class.

---

A. www.runners-home.com – Although it doesn’t specify the page, this represents the
main page you requested: the HTML page (usually called index).
B. toggle.js – A JavaScript page used for adding interactivity to the HTML page.
Notice in the fourth column that the initiator for this page is (index). That means
that the HTML code instructed the browser to download this page.
C. Style sheets ending with .css – CSS pages used for adding style and formatting to
the HTML page. Like the JavaScript page, these pages were also requested by the
HTML code.
D. Images ending with .png and .jpg – Images to display on the page. The images
were also requested by the HTML code.
E. Font files ending with .woff2 – Web fonts for adding custom fonts to your web
page.
F. Though not shown in the screenshot above, you may also see favicon.ico – An
icon used to identify the website on the browser tab:
4 | LESSON 1: A Quick Overview of Web Development
EVALUATION COPY: Not to be used in class.

---

Note that favicon.ico only gets delivered when pages are sent from a web server. When you open
files in a browser directly from your file system, the favicon will not show up.
As you can see, HTML, while essential, is just a piece of the puzzle. Web development involves a
combination of client-side-programming and server-side-programming languages. We will now introduce
the most common languages, but don’t worry if you don’t fully understand the role of each one. At
this point, the most important takeaway is that HTML is just one of many languages used in web
development.
EVALUATION COPY: Not to be used in class.
### ❋
## 1.2. Client-side Programming
Client-side programming involves writing code that is interpreted by a browser, such as Google Chrome
or Safari, whether it be on your desktop or mobile device. The most common languages and technologies
used in client-side programming are HTML, Cascading Style Sheets (CSS), and JavaScript.
### 1.2.1. HTML
Hypertext Markup Language (HTML) is the language behind most web pages. The language is made
up of elements that describe the structure of the content on a web page.
### 1.2.2. Cascading Style Sheets
Cascading Style Sheets (CSS) are used in HTML pages to format and lay out the content. CSS rules
defining color, size, positioning, and other display aspects of elements are mixed within the HTML
code or in linked external style sheets.
### 1.2.3. JavaScript
1
JavaScript is used to make HTML pages more dynamic and interactive. It can be used to validate forms,
pop up new windows, create audio and video controls, and create dynamic effects such as drop-down
menus and modal dialogs.
1. The word “JavaScript” is a trademark of Oracle. Microsoft’s version of this language is called JScript.
LESSON 1: A Quick Overview of Web Development | 5
EVALUATION COPY: Not to be used in class.

---

### 1.2.4. Ajax
The term Ajax was originally a pseudo-acronym for “Asynchronous JavaScript and XML,” but is now
used much more broadly to cover all methods of communicating with a server using JavaScript.
The main purpose of Ajax is to provide a simple and standard means for a web page to communicate
with the server without a complete page refresh.
### 1.2.5. JavaScript Frameworks
JavaScript frameworks are frameworks written in JavaScript that create a different approach to web
application design. Popular frameworks include Angular (https://angular.io), React
(https://react.dev/), Vue.js (https://vuejs.org), and jQuery (https://jquery.com). You
should learn JavaScript before beginning to work with a JavaScript framework.
### 1.2.6. CSS Frameworks
CSS frameworks are frameworks that allow you to quickly design HTML pages with a predefined set
of CSS classes. The most popular CSS framework is Bootstrap (https://getbootstrap.com/),
which comes with a library of stylish components that you can easily incorporate into your website.
Tailwind CSS (https://tailwindcss.com/) is a newer CSS framework that allows for more
customization, but requires a better understanding of CSS.
EVALUATION COPY: Not to be used in class.
### ❋
## 1.3. Server-side Programming
Server-side programming involves writing code that connects web pages with databases, XML pages,
email servers, file systems, and other systems and software accessible from the web server. The most
common server-side languages and programming frameworks are PHP, Java Enterprise Edition,
ASP.NET, ColdFusion, Node.js, and Python.
6 | LESSON 1: A Quick Overview of Web Development
EVALUATION COPY: Not to be used in class.

---

### 1.3.1. PHP
PHP (https://www.php.net) is open source. It is the language behind WordPress and has long been
a popular alternative to proprietary languages such as ColdFusion and ASP.NET. PHP is lightweight
and relatively simple to learn.
### 1.3.2. Java EE
Java EE (https://docs.oracle.com/javaee/7/index.html) is used in large web projects. With
its power and robustness comes a steep learning curve.
### 1.3.3. ASP.NET
Microsoft’s ASP.NET (https://learn.microsoft.com/en-us/aspnet/core/) is not a language,
but a framework for writing websites and software. ASP.NET pages can be written in many languages,
but the most popular are C# (pronounced C-sharp) and Visual Basic .NET (VB.NET).
### 1.3.4. ColdFusion
ColdFusion (https://coldfusion.adobe.com), created by Allaire (now owned by Adobe), is arguably
the simplest of all server-side languages. It is tag-based, which makes it look a lot like HTML and easier
for client-side programmers to understand than some of the other choices.
### 1.3.5. Node.js
Node.js (https://nodejs.org) is a JavaScript runtime that can run on the server, allowing developers
to use JavaScript for server-side scripting as well as client-side scripting.
### 1.3.6. Python
Python (https://www.python.org) has been a popular open-source programming language for a
long time. There are many web frameworks based on Python, the most popular of which is Django
(https://www.djangoproject.com).
LESSON 1: A Quick Overview of Web Development | 7
EVALUATION COPY: Not to be used in class.

---

## Conclusion
This lesson has provided a general overview of the different languages and frameworks commonly used
in web development. Again, don’t worry if you don’t remember all the different technologies and their
specific roles. Take it one step at a time. The first step is to learn HTML.
8 | LESSON 1: A Quick Overview of Web Development
EVALUATION COPY: Not to be used in class.

---

# LESSON 2
# Introduction to HTML
EVALUATION COPY: Not to be used in class.
Topics Covered
Creating a simple HTML page.
Elements and attributes.
The skeleton of an HTML document.
Whitespace.
Special characters.
History of HTML.
## Introduction
You’re likely learning HTML because you have dreams of creating a website; perhaps like one you have
seen or perhaps like no other that’s yet been created. You have the dream, now it’s time to start building
the foundation.
We will begin with a simple exercise.
LESSON 2: Introduction to HTML | 9
EVALUATION COPY: Not to be used in class.

---

# Exercise 1: A Simple HTML Document
### 5 to 15 minutes
In this exercise, you will create your first HTML document by simply copying some code. The purpose
is to give you some sense of the structure of an HTML document.
1. Create a new file in Visual Studio Code by selecting New Text File from the File menu:
2. To save the file, select File > Save As…
10 | LESSON 2: Introduction to HTML
EVALUATION COPY: Not to be used in class.

---

3. Save the file as hello-world.html in the HTMLBasics/Exercises folder:
LESSON 2: Introduction to HTML | 11
EVALUATION COPY: Not to be used in class.

---

4. Type the following exactly as shown:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Hello world!</title>
</head>
<body>
<p>Hello world!</p>
</body>
</html>
5. Save the file again and then open it in your browser either by navigating to the file in your
folder system and double-clicking it:
Or by right-clicking the file in Visual Studio Code and selecting Open in Default Browser,
which you should have added when setting up Visual Studio Code:
The page should appear as follows:
12 | LESSON 2: Introduction to HTML
EVALUATION COPY: Not to be used in class.

---

Solution: HTMLBasics/Solutions/hello-world.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title>Hello world!</title>6.
</head>7.
<body>8.
<p>Hello world!</p>9.
</body>10.
</html>11.
EVALUATION COPY: Not to be used in class.
### ❋
## 2.1. HTML Elements, Attributes, and Comments
HTML elements describe the structure and content of a web page. Tags are used to indicate the beginning
and end of elements. The syntax is as follows:
<tagname>Element content</tagname>
### 2.1.1. Attributes
Tags often have attributes for further defining the element. Attributes usually come in name-value pairs.
Note that attributes only appear in the opening tag, like so:
LESSON 2: Introduction to HTML | 13
EVALUATION COPY: Not to be used in class.

---

<tagname att1="value" att2="value">Element content</tagname>
There are some attributes that do not need to take a value. You can think of them as being “on” when
the attribute is present and “off” when it is not. For example:
<tagname att>Element content</tagname>
The order of attributes is not important.
### 2.1.2. Empty vs. Container Tags
The tags shown above are called container tags because they have both an opening and closing tag with
content contained between them. Tags that do not contain content are called empty tags. The syntax
is as follows:
<tagname>
or
<tagname att1="value" att2="value">
Shortcut Close
Empty tags may also be written as follows:
<tagname />
or
<tagname att1="value" att2="value" />
The forward slash (/) at the end, just before the close angle bracket (>), explicitly indicates that this
tag is closed. In general, it is not necessary to use this shortcut close, but it also doesn’t cause any harm.
Our only recommendation is that if you use it, use it consistently.
14 | LESSON 2: Introduction to HTML
EVALUATION COPY: Not to be used in class.

---

### 2.1.3. Blocks and Inline Elements
Block-level Elements
Block-level elements are elements that separate a block of content. For example, a paragraph (<p>)
element is a block-level element. Other block-level elements include:
1. Lists (<ul> and <ol>)
2. Tables (<table>)
3. Forms (<form>)
4. Divs (<div>)
Inline Elements
Inline elements are elements that affect only snippets of content and do not block off a section of a
page. Examples of inline elements include:
1. Links (<a>)
2. Images (<img>)
3. Form elements (<input>, <button>, <select>, <textarea>, etc.)
4. Phrase elements (<em>, <strong>, <code>, etc.)
5. Spans (<span>) – wraps text without giving it any special meaning. Meaning and style can
be applied through its attributes.
You will learn what most of these elements do in upcoming lessons.
### 2.1.4. Comments
HTML comments are enclosed in <!-- and -->.
For example:
<!-- This is an HTML comment -->
LESSON 2: Introduction to HTML | 15
EVALUATION COPY: Not to be used in class.

---

Commented content will not show up on the web page. It is meant for developers’ eyes only. However,
as illustrated in the following screenshot, users can see comments by viewing the source of the page.
2
So don’t put anything in your comments that you wouldn’t want your site visitors to read.
Comments are generally used for one of two purposes:
1. To write helpful notes about the code; for example, why something is written in a specific
way.
2. To comment out some code that is not currently needed, but may be used sometime in the
future.
EVALUATION COPY: Not to be used in class.
### ❋
2. You’ll learn how to view the source of a page shortly.
16 | LESSON 2: Introduction to HTML
EVALUATION COPY: Not to be used in class.

---

## 2.2. The HTML Skeleton
At its simplest, an HTML page contains what can be thought of as a skeleton: the main structure of
the page. It looks like this:
Demo 2.1: HTMLBasics/Demos/skeleton.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title></title>6.
</head>7.
<body>8.
<!--9.
Content that appears on the page goes in the body10.
(but I won't show up because I'm in a comment).11.
-->12.
</body>13.
</html>14.
### 2.2.1. The head ### Element
The head element (<head>) contains content that is not displayed on the page itself. Some of the
elements commonly found in the head are:
1. Title of the page (<title>). Browsers typically show the title in the “title bar” at the top of
the browser window:
2. Meta tags (<meta>), which contain descriptive information about the page.
3. Script blocks (<script>), which contain JavaScript code for adding functionality and
interactivity to a page.
LESSON 2: Introduction to HTML | 17
EVALUATION COPY: Not to be used in class.

---

4. Style blocks (<style>), which contain Cascading Style Sheet rules for formatting a page.
5. References or links to external style sheets (<link>).
Here is an example head element:
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="styles.css" rel="stylesheet">
<script src="script.js"></script>
<title>Dummy title</title>
</head>
Don’t worry about the <link> and <script> tags. You’ll learn about those when you learn CSS and
JavaScript. For now, it is enough to know that HTML pages can reference CSS and JavaScript pages.
### 2.2.2. The body ### Element
The body element (<body>) contains all of the content that appears on the page itself. Tags that can
be placed within the <body> tag will be covered thoroughly throughout these lessons.
### 2.2.3. Whitespace
Extra whitespace is ignored in HTML. This means that all hard returns, tabs, and multiple spaces are
condensed into a single space for display purposes. Review the following demo:
18 | LESSON 2: Introduction to HTML
EVALUATION COPY: Not to be used in class.

---

Demo 2.2: HTMLBasics/Demos/whitespace.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title>Whitespace Example</title>6.
</head>7.
<body>8.
This is a sentence on a single line.9.
10.
This11.
is12.
a13.
sentence with14.
extra whitespace15.
throughout.16.
17.
</body>18.
</html>19.
Open HTMLBasics/Demos/whitespace.html in your browser. You will see that the two sentences
in the code above will be rendered in exactly the same way. Notice that all extra whitespace is ignored:
Why is extra whitespace ignored?
Browsers ignore extra whitespace so that web developers can use hard returns, spaces, and tabs
to make their code readable. For example, we like to limit the length of one line of HTML code
to 120 characters as this makes it easier to read the code. But we don’t want text that we send
to the browser to also be limited to 120-character lines.
LESSON 2: Introduction to HTML | 19
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 2.3. Viewing the Page Source
Most browsers will let you view the source of an HTML page. This is a useful way to see what the
browser sees. In Google Chrome, you can do this by right-clicking the page and selecting View Page
Source:
You will see the source of the page you created:
20 | LESSON 2: Introduction to HTML
EVALUATION COPY: Not to be used in class.

---

This demonstrates that Chrome does see all the whitespace in the page source. But it condenses it when
it presents the web page.
EVALUATION COPY: Not to be used in class.
### ❋
## 2.4. Special Characters
Special characters (e.g., characters that do not show up on your keyboard) can be added to HTML
pages using entity names and numbers. For example, a copyright symbol (©) can be added using &copy;
or &#169;. The following table shows some of the more common character references:
3
3. 
See https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references for the
official list of HTML entities.
LESSON 2: Introduction to HTML | 21
EVALUATION COPY: Not to be used in class.

---

HTML Entities
SYMBOLNAMENUMBERDESCRIPTION
"&quot;&#34;Quotation mark
'&apos;&#39;Single quotation mark (apostrophe)
&&amp;&#38;Ampersand
<&lt;&#60;Less than
>&gt;&#62;Greater than
&nbsp;&#160;Non-breaking space
¢&cent;&#162;Cent sign
£&pound;&#163;Pound sign
¥&yen;&#165;Yen sign
€&euro;&#8364;Euro sign
©&copy;&#169;Copyright
®&reg;&#174;Registered trademark
™&trade;&#8482;Trademark
¿&iquest;&#191;Inverted question mark
¡&iexcl;&#161;Inverted exclamation mark
¼&frac14;&#188;Fraction: one-fourth
½&frac12;&#189;Fraction: one-half
¾&frac34;&#190;Fraction: three-fourths
–&ndash;&#8211;En dash
—&mdash;&#8212;Em dash
†&dagger;&#8224;Dagger
…&hellip;&#8230;Horizontal ellipsis
EVALUATION COPY: Not to be used in class.
### ❋
## 2.5. History of HTML
HTML has a long history and several versions:
22 | LESSON 2: Introduction to HTML
EVALUATION COPY: Not to be used in class.

---

1. HTML was invented in the early 1990s.
2. In 1996, the World Wide Web Consortium (W3C)
4 
began maintaining the HTML
specification. At that point, HTML was already on version 2.0.
3. HTML 3.2 and HTML 4.0 were both released in 1997.
4. XHTML, a separate XML version of HTML, was released in 2000.
5. HTML5 was released in 2014 and updated to HTML 5.1 (now with a space before the 5) in
2016. As of this writing, it is in version 5.3.
6. For a while, two separate groups, the W3C and WHATWG
5 
managed separate HTML
specifications, with at least a little tension between the two groups
6
. In 2019, the W3C gave
full control of the HTML standard to WHATWG.
### 2.5.1. HTML5 / HTML 5
You may hear a lot about HTML5 or HTML 5. For a few years, the distinction between HTML 4
and HTML 5 was important. Today, you can simply think of everything as just HTML. The HTML
you use will be determined more by what modern browsers support than by what the specifications
specify.
### 2.5.2. What This Means for You
As a web developer, you don’t need to be too concerned with this history. The question is: what can
you do today? The best, most developer-friendly online reference is kept by Mozilla at https://de
veloper.mozilla.org/en-US/docs/Web/HTML/Reference.
Because people have been writing HTML for a long time, web pages exist that use deprecated (phased
out) tags and outdated techniques, such as using color and bgcolor attributes instead of CSS to add
color to pages. Modern browsers tend to be backward compatible, but you should avoid using any
deprecated tags and attributes.
4. https://www.w3.org/
5. https://html.spec.whatwg.org
6. https://en.wikipedia.org/wiki/HTML5#W3C_and_WHATWG_conflict
LESSON 2: Introduction to HTML | 23
EVALUATION COPY: Not to be used in class.

---

To indicate that you are using the latest version of HTML, you should use the following DOCTYPE at
the beginning of every HTML document:
<!DOCTYPE html>
This DOCTYPE is completely backward compatible and will make all browsers work in “standards mode,”
which is almost definitely what you want.
Although they are not required, you should generally use the following <meta> tags:
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
The first specifies the character set and the second makes web pages adjust for different screen sizes.
The opening of an HTML page should look like this (assuming your page is in English):
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
EVALUATION COPY: Not to be used in class.
### ❋
## 2.6. The ### lang ## Attribute
The lang attribute is used to tell the browser and other user agents
7 
the language contained within an
element. While it is not required, the W3C recommends that lang be included in the <html> tag of
all HTML documents, like so:
<html lang="en">
7. A user agent is software that acts on behalf of the user. When used in web development, the term refers to a web browser or any
other software used to request a web page from the server.
24 | LESSON 2: Introduction to HTML
EVALUATION COPY: Not to be used in class.

---

According to the W3C,
8 
the lang attribute is helpful in:
1. Assisting search engines.
2. Assisting speech synthesizers.
3. Helping a user agent select glyph variants for high-quality typography.
4. Helping a user agent choose a set of quotation marks.
5. Helping a user agent make decisions about hyphenation, ligatures, and spacing.
6. Assisting spell checkers and grammar checkers.
If a portion of the page is written in a different language, you can wrap that portion in a tag that includes
the lang attribute, like this:
<span lang="fr">Bonjour, mon ami!</span>
A smart screen reader
9 
could use that information to properly pronounce the French.
## Conclusion
In this lesson, you have learned the basics of HTML. You should understand how an HTML page is
structured and understand the basic syntax of HTML tags. In addition, you have learned some of the
history of HTML.
8. https://www.w3.org/International/questions/qa-html-language-declarations
9. Screen readers make it possible for visually impaired people to read web pages and other computer-based content. A widely used
screen reader is JAWS from Freedom Scientific (https://www.freedomscientific.com/).
LESSON 2: Introduction to HTML | 25
EVALUATION COPY: Not to be used in class.

---

26 | LESSON 2: Introduction to HTML
EVALUATION COPY: Not to be used in class.

---

# LESSON 3
# Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.
Topics Covered
Paragraphs.
Headings.
Breaks and horizontal rules.
Quoted text.
Preformatted text.
Phrase elements.
## Introduction
This lesson discusses how to properly mark up text. With just a few exceptions, it does not discuss how
to change the formatting or display of these elements. That is a task for CSS.
EVALUATION COPY: Not to be used in class.
### ❋
## 3.1. Paragraphs
Paragraph text should be contained in <p> tags as shown in the following example:
LESSON 3: Paragraphs, Headings, and Text | 27
EVALUATION COPY: Not to be used in class.

---

Demo 3.1: Text/Demos/paragraphs.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title>Paragraphs</title>6.
</head>7.
<body>8.
<!-- From Little Women by Louisa May Alcott-->9.
<p>Jo immediately sat up, put her hands in her pockets,10.
and began to whistle.</p>11.
<p>"Don't, Jo. It's so boyish!"</p>12.
<p>"That's why I do it."</p>13.
<p>"I detest rude, unladylike girls!"</p>14.
<p>"I hate affected, niminy-piminy chits!"</p>15.
<p>"Birds in their little nests agree," sang Beth, the peacemaker,16.
with such a funny face that both sharp voices softened to a laugh,17.
and the "pecking" ended for that time.</p>18.
</body>19.
</html>20.
This page will be rendered as follows:
EVALUATION COPY: Not to be used in class.
### ❋
28 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

## 3.2. Heading Levels
HTML supports six levels of heading. The tags are <h1>, <h2>, <h3>, <h4>, <h5>, and <h6>,
descending in importance from <h1> to <h6>. Headings are block-level elements. Examine the following
code:
Demo 3.2: Text/Demos/headings.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title>Heading Levels</title>6.
</head>7.
<body>8.
<h1>Heading Level 1</h1>9.
<p>Paragraph following heading level 1.</p>10.
<h2>Heading Level 2</h2>11.
<p>Paragraph following heading level 2.</p>12.
<h3>Heading Level 3</h3>13.
<p>Paragraph following heading level 3.</p>14.
<h4>Heading Level 4</h4>15.
<p>Paragraph following heading level 4.</p>16.
<h5>Heading Level 5</h5>17.
<p>Paragraph following heading level 5.</p>18.
<h6>Heading Level 6</h6>19.
<p>Paragraph following heading level 6.</p>20.
</body>21.
</html>22.
The following screenshot shows how they are formatted by default:
LESSON 3: Paragraphs, Headings, and Text | 29
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 3.3. Breaks and Horizontal Rules
The <br> tag forces a line break. The <hr> tag creates a horizontal rule across the page. The following
code shows how they are used:
30 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

Demo 3.3: Text/Demos/br-and-hr.html
-------Lines 1 through 7 Omitted-------
<body>8.
<p>Sometimes<br>it is desirable<br>to break text across lines.</p>9.
<hr>10.
<p>And to separate text with horizontal rules.</p>11.
</body>12.
-------Line 13 Omitted-------
The following screenshot shows how they appear by default:
Notice that the <br> and <hr> tags are both empty tags, meaning that they do not contain any content,
and therefore, do not have a corresponding closing tag.
EVALUATION COPY: Not to be used in class.
### ❋
## 3.4. The div Tag
The div element (<div>) is used to create a content division. That is, it divides a segment of content
from the surrounding content. Visually, this results in placing the content on its own block, similar in
effect to putting a <br> tag before and after the content.
The following demo shows how div elements work:
LESSON 3: Paragraphs, Headings, and Text | 31
EVALUATION COPY: Not to be used in class.

---

Demo 3.4: Text/Demos/div-haiku.html
-------Lines 1 through 7 Omitted-------
<body>8.
<h1>div Haiku</h1>9.
<div>I am the first div.</div>10.
<div>I'm the div in the middle.</div>11.
<div>I am the third div.</div>12.
</body>13.
-------Line 14 Omitted-------
The following screenshot shows how this will appear in the browser:
While the preceding demo illustrates how the div element works, it is more commonly used to separate
larger blocks of content. You will learn more about this in the Sectioning a Web Page lesson (see page
105).
32 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

# Exercise 2: Creating an HTML Page
### 15 to 25 minutes
In this exercise, you will create an HTML page from scratch. It should look like this:
1. Create a new page in Visual Studio Code and save it as index.html in the Text/Exercises
directory.
2. Write code to make the page look like the one in the screenshot above.
LESSON 3: Paragraphs, Headings, and Text | 33
EVALUATION COPY: Not to be used in class.

---

3. Save your work and open your new page in a browser to test it.
Challenge
Use special characters instead of the dashes to make more interesting bullets. Try &#8226;
34 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

Solution: Text/Solutions/index.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title>Runners Home</title>6.
</head>7.
<body>8.
<h1>Runners Home</h1>9.
<div>10.
Home | Resources | Calculator | Running Log | Running Terms |11.
Links | Running Advice | Races | Register12.
</div>13.
<p>Hello, Stranger!</p>14.
<p>Welcome to Runners Home</p>15.
<h2>Advice</h2>16.
<h3>Best Running Tips</h3>17.
<p>There are good ways to train and bad ways to train. To get18.
the most out of your runs... Read more...</p>19.
<h3>Best Health Tips</h3>20.
<p>In addition to keeping up with your physical training, you21.
must be sure to take care of your general health...22.
Read more...</p>23.
<p>More advice articles...</p>24.
<h2>Purpose</h2>25.
<p>Runners Home is dedicated to providing you with:<br>26.
- the most up-to-date information on running races.<br>27.
- the best resources for runners.28.
</p>29.
<p>Disclosure: This is not a real website.</p>30.
<hr>31.
<p>&copy; 2022 Runners Home. All rights reserved.</p>32.
<div>33.
info@runners-home.com |34.
Facebook |35.
LinkedIn |36.
Twitter37.
</div>38.
</body>39.
</html>40.
LESSON 3: Paragraphs, Headings, and Text | 35
EVALUATION COPY: Not to be used in class.

---

Challenge Solution: Text/Solutions/index-challenge.html
-------Lines 1 through 25 Omitted-------
<p>Runners Home is dedicated to providing you with:<br>26.
&#8226; the most up-to-date information on running races.<br>27.
&#8226; the best resources for runners.28.
</p>29.
-------Lines 30 through 40 Omitted-------
EVALUATION COPY: Not to be used in class.
### ❋
## 3.5. Quoted Text
The <blockquote> and <q> tags are used to designate quoted text. Both elements can take the cite
attribute, which is used to reference the source. The value of the cite attribute, which is used to point
to a URL with information about the quote, will not be visible on the page by default, but could be
made accessible using JavaScript.
blockquote is a block-level element, while q is an inline element. See the following example:
36 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

Demo 3.5: Text/Demos/quotes.html
-------Lines 1 through 7 Omitted-------
<body>8.
<h1>The Declaration of Independence</h1>9.
<p>The Declaration of Independence begins with the paragraph:</p>10.
<blockquote11.
cite="https://www.ushistory.org/declaration/document/index.html">12.
<p>When in the Course of human events it becomes necessary for one13.
people to dissolve the political bands which have connected them14.
with another and to assume among the powers of the earth, the15.
separate and equal station to which the Laws of Nature and of16.
Nature's God entitle them, a decent respect to the opinions of17.
mankind requires that they should declare the causes which impel18.
them to the separation.</p>19.
</blockquote>20.
21.
<p>The second paragraph, which begins22.
<q cite="https://www.ushistory.org/declaration/document/index.html">We23.
hold these truths to be self-evident, that all men are created24.
equal...</q> is more widely known.</p>25.
</body>26.
-------Line 27 Omitted-------
Most browsers add margins to blockquotes on both the left and right and wrap text nested in <q> tags
with quotes. Google Chrome renders this page as follows:
Some notes:
1. Modern browsers don’t do anything visual with the cite attribute.
LESSON 3: Paragraphs, Headings, and Text | 37
EVALUATION COPY: Not to be used in class.

---

2. Blockquotes should not be used for formatting purposes. If you want to add margins around
an element, you should use Cascading Style Sheets (CSS).
3. Blockquotes cannot be contained within paragraphs.
4. Blockquotes cannot have text as a direct child. Usually, blockquotes contain paragraphs (<p>
tags).
EVALUATION COPY: Not to be used in class.
### ❋
## 3.6. Preformatted Text
Occasionally, it is desirable to output content as it is laid out in the code, whitespace and all. The <pre>
tag is used for this purpose. It is often used in online coding tutorials so that the whitespace shown in
the tutorial reflects how it would appear in the document it represents. The following code shows how
<pre> is used.
38 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

Demo 3.6: Text/Demos/pre.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title>Preformatted Text</title>6.
</head>7.
<body>8.
<h1>Your First HTML Page</h1>9.
<pre>10.
&lt;!DOCTYPE html&gt;11.
&lt;html lang="en"&gt;12.
&lt;head&gt;13.
&lt;title&gt;Hello world!&lt;/title&gt;14.
&lt;/head&gt;15.
&lt;body&gt;16.
&lt;h1&gt;Hello world!&lt;/h1&gt;17.
&lt;/body&gt;18.
&lt;/html&gt;19.
</pre>20.
</body>21.
</html>22.
The page is rendered as follows:
Notice that the whitespace within the <pre> tags is not condensed. Remove the <pre> tags and this
page will appear like this:
LESSON 3: Paragraphs, Headings, and Text | 39
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 3.7. Inline Semantic Elements
Semantic (adj.): Of or relating to meaning, especially meaning in language.
10
Inline semantic elements provide meaningful information about the content they contain. The most
common elements of this type are em and strong. Both elements indicate that the content should be
emphasized. <strong> indicates stronger emphasis than <em>. Most browsers bold <strong> content
and italicize <em> content. Inline semantic elements are listed below: 
11
1. <abbr> – Used for abbreviations. Use the title attribute for the unabbreviated version.
Default styling varies.
2. <b> – Used to stylistically offset text without conveying any extra importance to it. Default
styling is usually bold. Use sparingly, if at all.
3. <cite> – Used to cite a creative work. Default styling is usually italic.
4. <code> – Used to denote computer code. Default styling is usually monospace.
5. <dfn> – Used to indicate a term being defined. Default styling is usually italic.
10. 
https://www.ahdictionary.com/word/search.html?q=semantic
11. 
For a complete list, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics.
40 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

6. <em> – Used to add emphasis to text. Default styling is usually italic.
7. <i> – Used to convey an alternate voice or mood. Default styling is usually italic. Use sparingly,
if at all.
8. <kbd> – Used to denote user input (e.g., from a keyboard or a voice input). Default styling
is usually monospace.
9. <mark> – Used to mark text of special interest or importance. Default styling is usually
highlighted in some way.
10. <s> – Used to mark text as no longer accurate or relevant. Default styling is to put a line
through the text.
12
11. <samp> – Used to denote output from a computer program. Default styling is usually
monospace.
12. <small> – Used to represent text as a side comment or “small print.” Default styling is usually
smaller than surrounding text.
13. <span> – Used as a generic wrapper of inline content. The <span> tag can be used for grouping
elements, and meaning and style can be added through adding attributes (e.g., id, class,
and lang).
14. <strong> – Used to add extra emphasis or importance to text. Default styling is usually bold.
15. <sub> – Used to denote a subscript.
16. <sup> – Used to denote a superscript.
17. <time> – Used to denote a date and/or time. It can include a datetime attribute with a
machine-readable format of the enclosed date and/or time.
18. <u> – Indicates that text should have some form of non-textual annotation applied. By default,
this is an underline, but if you use this element, you should probably change the default
rendering to something different, so that it doesn’t look like a link. Avoid using the <u> tag
unless you have a specific semantic use case such as drawing attention to spelling or grammatical
errors.
The following example shows how these inline elements are used.
12. There are special elements used to indicate editorial changes: del (for deleted text) and ins (for inserted text). The del and ins
elements are usually used in draft documents or in documents that have an updated version.
LESSON 3: Paragraphs, Headings, and Text | 41
EVALUATION COPY: Not to be used in class.

---

Demo 3.7: Text/Demos/inline.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title>Meaningful Inline Elements</title>6.
</head>7.
<body>8.
<h1>Meaningful Inline Elements</h1>9.
<p>10.
The man yelled for his dog, <q><em>Come here, Snoopy!</em></q>11.
When Snoopy didn't come, he yelled louder,12.
<q><strong>Get over here now, Snoopy!</strong></q>13.
He had named his dog <b>Snoopy</b> after the dog in14.
<cite>Peanuts</cite>. After having called for him repeatedly,15.
he finally remembered that Snoopy didn't speak English.16.
He yelled, <q><dfn lang="es">Ven acá!</dfn></q>, which means17.
<i>Come here!</i> in Spanish.18.
</p>19.
<p>20.
Snoopy will be signing autographs on <time datetime="1984-03-05t17:00">March
5, 1984 at 5:00pm</time>
21.
<s>Call 555-555-555 for tickets.</s> Tickets no longer available.22.
</p>23.
<p>24.
<mark>25.
Note that none of these tags should be used for formatting26.
purposes. All formatting should be handled with27.
<abbr title="Cascading Style Sheets">CSS</abbr>.28.
</mark>29.
</p>30.
<p><small>This is just legalese. Don't read it.</small></p>31.
</body>32.
</html>33.
The page is rendered as follows:
42 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

All of these formatting effects can be created with CSS, so if you just want to change the formatting
without implying any specific meaning, you should use CSS instead.
We recommend avoiding the <b> and <i> tags. In most cases, <strong> and <em> are more appropriate.
LESSON 3: Paragraphs, Headings, and Text | 43
EVALUATION COPY: Not to be used in class.

---

# Exercise 3: Adding Inline Elements
### 5 to 10 minutes
In this exercise, you will add inline elements to the Runners Home home page.
1. Open index.html from the Text/Exercises directory in Visual Studio Code.
2. Make the text “Hello, Stranger!” strongly emphasized.
3. Make the text “Disclosure: This is not a real website.” small.
4. Save your work and open your new page in a browser to test it.
Your finished page should look like this:
44 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

You are welcome to play around with additional tags. In fact, we encourage you to do so.
LESSON 3: Paragraphs, Headings, and Text | 45
EVALUATION COPY: Not to be used in class.

---

Solution: Text/Solutions/index-2.html
-------Lines 1 through 8 Omitted-------
<h1>Runners Home</h1>9.
<div>10.
Home | Resources | Calculator | Running Log | Running Terms |11.
Links | Running Advice | Races | Register12.
</div>13.
<p><strong>Hello, Stranger!</strong></p>14.
<p>Welcome to Runners Home</p>15.
<h2>Advice</h2>16.
<h3>Best Running Tips</h3>17.
<p>There are good ways to train and bad ways to train. To get18.
the most out of your runs... Read more...</p>19.
<h3>Best Health Tips</h3>20.
<p>In addition to keeping up with your physical training, you21.
must be sure to take care of your general health...22.
Read more...</p>23.
<p>More advice articles...</p>24.
<h2>Purpose</h2>25.
<p>Runners Home is dedicated to providing you with:<br>26.
&#8226; the most up-to-date information on running races.<br>27.
&#8226; the best resources for runners.28.
</p>29.
<p><small>Disclosure: This is not a real website.</small></p>30.
<hr>31.
<p>&copy; 2022 Runners Home. All rights reserved.</p>32.
<div>33.
info@runners-home.com |34.
Facebook |35.
LinkedIn |36.
Twitter37.
</div>38.
-------Lines 39 through 40 Omitted-------
## Conclusion
In this lesson, you have learned to work with paragraphs, headings, and other text elements. You can
now create a basic HTML page.
46 | LESSON 3: Paragraphs, Headings, and Text
EVALUATION COPY: Not to be used in class.

---

# LESSON 4
# HTML Links
EVALUATION COPY: Not to be used in class.
Topics Covered
Basic text links.
Absolute and relative paths.
Links that open in new tabs or windows.
Email links.
Links to specific locations on a page.
## Introduction
The ability to link from one page to another is what makes HTML hyper. Calling it Hypertext, however,
is a bit of a misnomer, as images can also be linked.
EVALUATION COPY: Not to be used in class.
### ❋
## 4.1. Text Links
The tag for a link is perhaps the least intuitive of all the HTML tags. It is <a>, and it comes from the
word “anchor,” as <a> tags used to be used to create locations to link to, known as anchors, as well as
the links themselves. By itself, the <a> tag does nothing. To create a link, it requires the href attribute,
which takes as a value the path to the file or location to which to link. The syntax is as follows:
<a href="path_to_file">Link Text</a>
LESSON 4: HTML Links | 47
EVALUATION COPY: Not to be used in class.

---

A couple of examples:
<a href="bios/john-lennon.html">John Lennon</a>
<a href="https://www.webucator.com">Webucator</a>
EVALUATION COPY: Not to be used in class.
### ❋
## 4.2. Absolute vs. Relative Paths
Paths are absolute or relative:
Absolute paths always start from the top-level directory (the web root) and work their way
downward toward the referenced file.
Relative paths start from the current location (the location of the file containing the path)
and work their way to the referenced file from that location.
For the examples in this section, we will use the following directory tree:
Things to notice:
1. The index.html file on the bottom is a direct child of the wwwroot folder.
48 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

2. The about, bios, and images folders are also children of the wwwroot folder. They each
contain their own files.
Assume that this site is located at https://www.example.com and that the wwwroot folder is the web
root, meaning that it is the top-level directory. This means that when a user visits https://www.ex
ample.com/index.html, the index.html page within the wwwroot folder will be downloaded to
the browser.
### 4.2.1. Absolute Paths
An absolute path shows the complete path to a file starting from the web root.
The absolute path to the web root from a page on the same domain is simply a forward slash (/). So,
given the folder structure shown above, a link on company.html to index.html could be written like
this:
<a href="/index.html">Home Page</a>
The same link could be placed on any page in any folder below the wwwroot folder or on any page in
the wwwroot folder itself.
Using an absolute path, a link to company.html would include the about directory, like this:
<a href="/about/company.html">About Our Company</a>
External Links
When linking to a file at a different domain, you must identify the location of the domain using the
domain name (or IP address) of the site. Again, assume that the directory structure shown above is
found at https://www.example.com. A link to company.html from another site would be written
like this:
<a href="https://www.example.com/about/company.html">About the Beatles</a>
### 4.2.2. Relative Paths
Relative paths can only be used to link to other files under the same web root. A relative path indicates
where a file is relative to the file that contains the link. The folder (or directory) that contains the file
LESSON 4: HTML Links | 49
EVALUATION COPY: Not to be used in class.

---

being worked on is called the current directory. The relative path to another file that is also in the current
directory is just the name of that file. For example, since company.html and contact.html are found
in the same directory, they can link to each other simply by specifying the file name. The following
shows a link that could be used in contact.html to company.html:
<a href="company.html">About Our Company</a>
The relative path to a file in a subdirectory of the current directory must include the name of the
subdirectory. For example, to link to company.html from index.html you must first point to the
about directory, like so:
<a href="about/company.html">About Our Company</a>
The relative path to a file in a directory above the current directory should begin with “../”. For
example, the following shows a link to index.html from company.html:
<a href="../index.html">Home Page</a>
### 4.2.3. Default Pages
The web server administrator can set up default page names to look for when a path ends with a
directory name without specifying a file. Often these files are called index.html. In this case, the
following URLs would be identical, all loading index.html:
https://www.example.com
https://www.example.com/
https://www.example.com/index.html
You can give this a try by visiting those pages at example.com, which is an actual website used for
demonstrating just this sort of thing:
50 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 4.3. Targeting New Tabs
The target attribute is used to specify the browser tab (or window) in which the linked page will
open. For example:
<a href="company.html" target="newtab">Our Company</a>
If there is no open browser tab with the specified target name, a new tab will be opened with that
name. As long as that tab stays open, future links with the same target value will target that tab.
Note that “newtab” has no special meaning. We could name it “external,” “newwin,” “roxanne,” or
anything else we want.
Try it out by doing the following:
LESSON 4: HTML Links | 51
EVALUATION COPY: Not to be used in class.

---

1. Open Links/Demos/links.html in Visual Studio Code and review the first two links below
the Targeting New Tabs heading:
<a href="https://www.amazon.com" target="newtab">Amazon</a>
<a href="https://www.nytimes.com" target="newtab">NY Times</a>
2. Open Links/Demos/links.html in your browser.
3. Under Targeting New Tabs, click the Amazon link:
This link has a target of newtab. The page will open in a new tab:
4. Without closing the tab with Amazon in it, go back to the tab that has links.html open.
5. Under Targeting New Tabs, click the NY Times link. This link also has a target of newtab.
The page will open in the same tab in which Amazon opened:
Other links targeting newtab would also open in that same tab.
52 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

### 4.3.1. _blank Target
To force each link to target a brand new tab or window, use _blank as the value of the target attribute
as shown here:
<a href="company.html" target="_blank">Our Company</a>
Try it out by doing the following:
1. Open Links/Demos/links.html in Visual Studio Code and review the third link below
the Targeting New Tabs heading:
<a href="https://www.webucator.com" target="_blank">Webucator</a>
2. Open Links/Demos/links.html in your browser if it’s not already open.
3. Under Targeting New Tabs, click the Webucator link:
This link has a target of _blank. The page will open in a new tab:
4. Without closing the tab with Webucator in it, go back to the tab that has links.html open.
5. Under Targeting New Tabs, click the Webucator link again. Rather than reusing the same
tab, it will open the page in another brand new tab:
LESSON 4: HTML Links | 53
EVALUATION COPY: Not to be used in class.

---

As a rule of thumb, if you’re going to have links open in new tabs, we would use a named target
rather than the generic _blank, so that the user doesn’t get inundated with new tabs.
As an even more important rule of thumb, we would avoid targeting new tabs/windows altogether.
Some websites do this so that the linked page will not replace their web page, but it is bad design.
Generally, you do not want to surprise your users, who are accustomed to clicking the Back button to
get back to a page they were just on. When a link opens in a new tab or window, users cannot click
the Back button to get back to your page. Instead, they have to know to go back to the tab that your
page is on, making it even more difficult to get back to your page. An exception would be when you
are quite certain that the user wants to stay on your page because they are following a setup guide or
a tutorial. In this case, it can be helpful to target new tabs, so that the user can easily toggle back and
forth between the instructions they are following and the linked pages.
EVALUATION COPY: Not to be used in class.
### ❋
## 4.4. Email Links
Email links are used to open an email client to start a new email message. The syntax is similar to the
links we have seen thus far. However, for email links, the value of the href attribute must begin with
mailto: and ends with an email address. For example:
<a href="mailto:paul@example.com">Email Paul</a>
It is good practice to include the email address as the text of the link, so that people who are printing
the page or whose setup does not support email links can see the actual email address. For example:
Email Paul at <a href="mailto:paul@example.com">paul@example.com</a>.
54 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

# Exercise 4: Adding Links
### 40 to 60 minutes
In this exercise, you will add links to the pages of the Runners Home website. The home page
(Links/Exercises/index.html) looks like this:
The links above the footer should go to the following pages:
LESSON 4: HTML Links | 55
EVALUATION COPY: Not to be used in class.

---

The footer links should go to:
15. info@runners-home.com. This should be an email link.
16. https://www.facebook.com/webucator
17. https://www.linkedin.com/companies/webucator
18. https://twitter.com/webucator
After you have finished adding links to the home page, open each of the other pages in the
Links/Exercises folder and add the same header and footer links that you added in index.html.
Copy and paste is your friend, but be careful: relative links on pages in subfolders will be different from
links in the root folder and from links in other subfolders.
In addition to the header and footer links, add the following links:
1. races.html
A. “AJC Peachtree Road Race”: https://www.atlantatrackclub.org/peachtree
B. “Boilermaker”: https://www.boilermaker.com
C. “NYC Marathon”: https://www.nyrr.org/
2. advice/index.html
A. “Running Tips”: the Running Tips page.
B. “Health Tips”: the Health Tips page.
56 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

3. advice/health-tips.html and advice/running-tips.html
A. “More Advice Articles”: Running Advice index page.
4. resources/index.html
A. “Calculator”: the Calculator page.
B. “Running Log”: the Running Log page.
C. “Running Terms”: the Running Terms page.
D. “Links”: the Links page.
5. resources/links.html
A. “Map My Run”: https://www.mapmyrun.com
B. “Runners World”: https://www.runnersworld.com
C. “Strength Running”: https://strengthrunning.com
D. “More Resources”: Resources index page.
6. resources/calculator.html, resources/run-log.html, and resources/terms.html
A. “More Resources”: Resources index page.
You may find Visual Studio Code’s Compare Selected tool useful for comparing the solutions you
did in the Exercises folder with the ones we included in the Solutions folder.
1. In Visual Studio Code’s Explorer panel, hold down the Ctrl key and click the two files you
wish to compare. They should become highlighted.
2. Right-click one of the files and select Compare Selected:
LESSON 4: HTML Links | 57
EVALUATION COPY: Not to be used in class.

---

3. You will get a side-by-side view of the files with differences highlighted.
4. Close the files when you are done comparing them:
58 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

LESSON 4: HTML Links | 59
EVALUATION COPY: Not to be used in class.

---

Solution: Links/Solutions/index.html
-------Lines 1 through 9 Omitted-------
<div>10.
<a href="index.html">Home</a> |11.
<a href="resources/index.html">Resources</a> |12.
<a href="resources/calculator.html">Calculator</a> |13.
<a href="resources/run-log.html">Running Log</a> |14.
<a href="resources/terms.html">Running Terms</a> |15.
<a href="resources/links.html">Links</a> |16.
<a href="advice/index.html">Running Advice</a> |17.
<a href="races.html">Races</a> |18.
<a href="register.html">Register</a>19.
</div>20.
<p><strong>Hello, Stranger!</strong></p>21.
<p>Welcome to Runners Home</p>22.
<h2>Advice</h2>23.
<h3>Best Running Tips</h3>24.
<p>There are good ways to train and bad ways to train. To get25.
the most out of your runs...26.
<a href="advice/running-tips.html">Read more...</a>27.
</p>28.
<h3>Best Health Tips</h3>29.
<p>In addition to keeping up with your physical training, you30.
must be sure to take care of your general health...31.
<a href="advice/health-tips.html">Read more...</a>32.
</p>33.
<p><a href="advice/index.html">More advice articles...</a></p>34.
<h2>Purpose</h2>35.
<p>Runners Home is dedicated to providing you with:<br>36.
&#8226; <a href="races.html">the most up-to-date37.
information on running races</a>.<br>38.
&#8226; <a href="resources/index.html">the best39.
resources for runners</a>.40.
</p>41.
<p><small>Disclosure: This is not a real website.</small></p>42.
<hr>43.
<p>&copy; 2022 Runners Home. All rights reserved.</p>44.
<div>45.
<a href="mailto:info@runners-home.com">info@runners-home.com</a> |46.
<a href="https://www.facebook.com/webucator">Facebook</a> |47.
<a href="https://www.linkedin.com/companies/webucator">LinkedIn</a> |48.
<a href="https://twitter.com/webucator">Twitter</a>49.
</div>50.
-------Lines 51 through 52 Omitted-------
60 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

Solution: Links/Solutions/races.html
-------Lines 1 through 20 Omitted-------
<h2>Races</h2>21.
<div>22.
March 15th,23.
<a href="https://www.atlantatrackclub.org/peachtree">24.
AJC Peachtree Road Race25.
</a>,26.
10K, Atlanta, GA<br>27.
July 11th,28.
<a href="https://www.boilermaker.com">Boilermaker</a>,29.
15K, Utica, NY<br>30.
November 3rd, <a href="https://www.nyrr.org/">NYC Marathon</a>,31.
26.22 mi, New York, NY32.
</div>33.
-------Lines 34 through 44 Omitted-------
The links in the header and footer of races.html are the same as they are in index.html.
The solution to register.html is not shown as it only has links in the header and footer, which are
also the same as they are in index.html.
LESSON 4: HTML Links | 61
EVALUATION COPY: Not to be used in class.

---

Solution: Links/Solutions/advice/index.html
-------Lines 1 through 9 Omitted-------
<div>10.
<a href="../index.html">Home</a> |11.
<a href="../resources/index.html">Resources</a> |12.
<a href="../resources/calculator.html">Calculator</a> |13.
<a href="../resources/run-log.html">Running Log</a> |14.
<a href="../resources/terms.html">Running Terms</a> |15.
<a href="../resources/links.html">Links</a> |16.
<a href="index.html">Running Advice</a> |17.
<a href="../races.html">Races</a> |18.
<a href="../register.html">Register</a>19.
</div>20.
<h2>Running Advice</h2>21.
<div>22.
<a href="running-tips.html">Running Tips</a><br>23.
<a href="health-tips.html">Health Tips</a>24.
</div>25.
<p><small>Disclosure: This is not a real website.</small></p>26.
<hr>27.
<p>&copy; 2022 Runners Home. All rights reserved.</p>28.
<div>29.
<a href="mailto:info@runners-home.com">info@runners-home.com</a> |30.
<a href="https://www.facebook.com/webucator">Facebook</a> |31.
<a href="https://www.linkedin.com/companies/webucator">LinkedIn</a> |32.
<a href="https://twitter.com/webucator">Twitter</a>33.
</div>34.
-------Lines 35 through 36 Omitted-------
Solution: Links/Solutions/advice/health-tips.html
-------Lines 1 through 20 Omitted-------
<h2>Health Tips</h2>21.
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.22.
Aliquam et gravida sapien, facilisis condimentum arcu.23.
Morbi eget dui iaculis, porttitor eros et, tincidunt erat...</p>24.
<p><a href="index.html">More Advice Articles</a></p>25.
<p><small>Disclosure: This is not a real website.</small></p>26.
-------Lines 27 through 36 Omitted-------
The links in advice/running-tips.html are the same as in health-tips.html.
62 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

Solution: Links/Solutions/resources/index.html
-------Lines 1 through 9 Omitted-------
<div>10.
<a href="../index.html">Home</a> |11.
<a href="index.html">Resources</a> |12.
<a href="calculator.html">Calculator</a> |13.
<a href="run-log.html">Running Log</a> |14.
<a href="terms.html">Running Terms</a> |15.
<a href="links.html">Links</a> |16.
<a href="../advice/index.html">Running Advice</a> |17.
<a href="../races.html">Races</a> |18.
<a href="../register.html">Register</a>19.
</div>20.
<h2>Resources</h2>21.
<div>22.
- <a href="calculator.html">Calculator</a><br>23.
- <a href="run-log.html">Running Log</a><br>24.
- <a href="terms.html">Running Terms</a><br>25.
- <a href="links.html">Links</a>26.
</div>27.
<p><small>Disclosure: This is not a real website.</small></p>28.
<hr>29.
<p>&copy; 2022 Runners Home. All rights reserved.</p>30.
<div>31.
<a href="mailto:info@runners-home.com">info@runners-home.com</a> |32.
<a href="https://www.facebook.com/webucator">Facebook</a> |33.
<a href="https://www.linkedin.com/companies/webucator">LinkedIn</a> |34.
<a href="https://twitter.com/webucator">Twitter</a>35.
</div>36.
-------Lines 37 through 38 Omitted-------
LESSON 4: HTML Links | 63
EVALUATION COPY: Not to be used in class.

---

Solution: Links/Solutions/resources/links.html
-------Lines 1 through 9 Omitted-------
<div>10.
<a href="../index.html">Home</a> |11.
<a href="index.html">Resources</a> |12.
<a href="calculator.html">Calculator</a> |13.
<a href="run-log.html">Running Log</a> |14.
<a href="terms.html">Running Terms</a> |15.
<a href="links.html">Links</a> |16.
<a href="../advice/index.html">Running Advice</a> |17.
<a href="../races.html">Races</a> |18.
<a href="../register.html">Register</a>19.
</div>20.
<h2>Useful Links</h2>21.
<div>22.
- <a href="https://www.mapmyrun.com">Map My Run</a><br>23.
- <a href="https://www.runnersworld.com">Runners World</a><br>24.
- <a href="https://strengthrunning.com">Strength Running</a>25.
</div>26.
<p><a href="index.html">More Resources</a></p>27.
<p><small>Disclosure: This is not a real website.</small></p>28.
<hr>29.
<p>&copy; 2022 Runners Home. All rights reserved.</p>30.
<div>31.
<a href="mailto:info@runners-home.com">info@runners-home.com</a> |32.
<a href="https://www.facebook.com/webucator">Facebook</a> |33.
<a href="https://www.linkedin.com/companies/webucator">LinkedIn</a> |34.
<a href="https://twitter.com/webucator">Twitter</a>35.
</div>36.
-------Lines 37 through 38 Omitted-------
The links in the header and footer of resources/links.html are the same as they are in re
sources/index.html.
The header, footer, and “More Resources” links in resources/calculator.html, resources/run-
log.html, and resources/terms.html are the same as in resources/links.html.
EVALUATION COPY: Not to be used in class.
### ❋
64 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

## 4.5. Lorem Ipsum
You may have noticed that some of the pages on our site use the following text:
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aliquam et gravida sapien, facilisis condimentum arcu.
Morbi eget dui iaculis, porttitor eros et, tincidunt erat...
This lorem ipsum text is commonly used as dummy placeholder text. You can copy it from
https://www.lipsum.com.
EVALUATION COPY: Not to be used in class.
### ❋
## 4.6. The title Attribute
The title attribute can be used to provide a description about a link. The description is displayed by
the browser as a tooltip. Screen readers might read the description to a blind user.
Here’s an example:
<a href="https://www.webucator.com" title="Webucator Home Page">Webucator</a>
When you hover over this link, the title appears as a tip:
This is especially useful when using an image as a link as it might not be clear from the image itself
where the link points. The title attribute can be used to make the link destination clear. You will
learn how to do this in the next lesson.
LESSON 4: HTML Links | 65
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 4.7. Targeting a Specific Location on the Page
Every HTML element can take an id attribute, which uniquely identifies that element on the page.
The value of the id attribute must not contain any whitespace.
To target a specific element on the page, the link’s href value should point to that element’s id attribute
prefaced with a number sign.
For example, assume you have an <h2> tag with the id of “john”:
<h2 id="john">John Lennon</h2>
To target that location, use:
<a href="#john">Read about John</a>
You can also link to locations on other pages:
<a href="about.html#john">Read about John</a>
Or:
<a href="https://www.example.com/about.html#john">Read about John</a>
The following file shows more examples:
66 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

Demo 4.1: Links/Demos/location-links.html
-------Lines 1 through 8 Omitted-------
<h1>Targeting Locations on a Page</h1>9.
<h2>Links to Locations on Remote Pages</h2>10.
<div>11.
<a href="https://www.runners-home.com/resources/terms.html#dnf">DNF</a>12.
</div>13.
<h2>Links to Locations on This Page</h2>14.
<div>15.
<a href="#alice"16.
title="A MAD TEA-PARTY - Lewis Carroll">A Mad Tea-Party</a><br>17.
<a href="#cinderella"18.
title="CINDERELLA - the brothers Grimm">Cinderella</a><br>19.
<a href="#naughtyboy"20.
title="THE NAUGHTY BOY - H.C. Andersen">The Naughty Boy</a>21.
</div>22.
<hr>23.
<h2>Locations on This Page</h2>24.
<p>Each title below has an id attribute.</p>25.
<h3 id="alice">A MAD TEA-PARTY - Lewis Carroll</h3>26.
<p>There was a table set out under a tree in front of the house, and27.
-------Lines 28 through 31 Omitted-------
asleep, I suppose it doesn't mind."32.
<a href="https://www.gutenberg.org/files/11/11-h/11-h.htm#link2HCH0007">33.
Continue reading</a></p>34.
<hr>35.
<h3 id="cinderella">CINDERELLA - the brothers Grimm</h3>36.
<p>The wife of a rich man fell sick: and when she felt that her end37.
-------Lines 38 through 48 Omitted-------
on, and laughed at her and turned her into the kitchen.49.
<a href="https://www.gutenberg.org/files/11027/11027-h/11027-h.htm#cinderella">50.
Continue reading</a></p>51.
<hr>52.
<h3 id="naughtyboy">THE NAUGHTY BOY - Hans Christian Andersen</h3>53.
<p>Along time ago, there lived an old poet, a thoroughly kind old54.
-------Lines 55 through 57 Omitted-------
blazed and the roasting apple hissed.58.
<a href="https://www.gutenberg.org/files/1597/1597-h/1597-h.htm#link2H_4_0017">59.
Continue reading</a></p>60.
<hr>61.
<div><a href="#top">Back to top</a></div>62.
</body>63.
</html>64.
LESSON 4: HTML Links | 67
EVALUATION COPY: Not to be used in class.

---

The “top” Keyword
You will notice in the demo that the last link is to “#top”, but there is no element on the page with
the id “top”. That is because “top” is a keyword. Browsers know that “top” references the top of the
page.
## Conclusion
In this lesson, you have learned to create text links, to work with absolute and relative paths, to target
new tabs, to create email links, and to create and link to specific locations on a page.
68 | LESSON 4: HTML Links
EVALUATION COPY: Not to be used in class.

---

# LESSON 5
# HTML Images
EVALUATION COPY: Not to be used in class.
Topics Covered
Adding images to a website.
Creating image links.
Making images accessible.
Providing image fallbacks.
## Introduction
Modern browsers support several types of images, including:
Graphics Interchange Format (GIF)
Joint Photographic Expert Group image (JPEG)
Portable Network Graphics (PNG)
Scalable Vector Graphics (SVG)
Web Picture format (WebP)
WebP is generally the best choice for both image quality and compression and is supported by Chrome,
Edge, Firefox, Opera, and Safari, but not by Internet Explorer.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 5: HTML Images | 69
EVALUATION COPY: Not to be used in class.

---

## 5.1. Inserting Images
The <img> tag is used to include an image in an HTML page. The <img> tag is an empty tag, meaning
it has no closing tag. Its src attribute is used to reference an image file using a relative or absolute path.
Here is the syntax:
<img src="path_to_image_file" alt="alternative text">
70 | LESSON 5: HTML Images
EVALUATION COPY: Not to be used in class.

---

The following demo shows how to use the <img> tag:
Demo 5.1: Images/Demos/images.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title>Images</title>6.
</head>7.
<body>8.
<h1>Images</h1>9.
<p><img src="https://www.google.com/images/logo.png" alt="Google Logo"></p>10.
<hr>11.
<p><img src="images/pooh.jpg" alt="Pooh Bear"></p>12.
<hr>13.
<p><img src="images/runners-home.png" alt="Runners Home"></p>14.
</body>15.
</html>16.
The page will render as follows:
13
13. The https://commons.wikimedia.org/wiki/File:R._John_Wright_Winnie_the_Pooh_Bear.jpg image is used under the terms of
GNU Free Documentation License, version 1.2 (https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_Li
cense,_version_1.2).
LESSON 5: HTML Images | 71
EVALUATION COPY: Not to be used in class.

---

### 5.1.1. Making Images Accessible
Alternative Text
To add alternative text for an image, use the alt attribute as shown below:
72 | LESSON 5: HTML Images
EVALUATION COPY: Not to be used in class.

---

<img src="logo.png" alt="Logo">
Alternative text is displayed…
1. When the user’s browser does not support images.
2. As the image is downloading.
3. When the user hovers over the image with the mouse (in some browsers).
Most importantly, alternative text is used by screen readers to describe an image for the visually impaired.
Providing Longer Descriptions
If an image depicts something complicated, such as a graph or chart, a longer description of the
image can be provided using the aria-describedby attribute.
14
### 5.1.2. height ### and width ### Attributes
The img element also takes height and width attributes that set the dimensions (in pixels) to use to
display the image on the page. It is not good practice to “resize” the image using these attributes. If
you use these attributes, you should set the values to the actual height and width of the image. Using
the height and width attributes lets the browser know how much space to allocate for the image
without having to wait for the image itself to download. Use of these attributes may promote faster
rendering of the web page:
<img src="logo.png" alt="Logo" height="100" width="300">
EVALUATION COPY: Not to be used in class.
### ❋
14. 
See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby for
information on the aria-describedby attribute.
LESSON 5: HTML Images | 73
EVALUATION COPY: Not to be used in class.

---

## 5.2. Image Links
To create an image link, wrap an <a> tag around your image, like so:
<a href="index.html" title="Link to Home Page">
<img src="images/logo.png" alt="Logo">
</a>
The following demo shows some image links:
Demo 5.2: Images/Demos/image-links.html
-------Lines 1 through 8 Omitted-------
<h1>Image Links</h1>9.
<a href="https://www.google.com" title="Visit Google">10.
<img src="https://www.google.com/images/logo.png" alt="Google Logo">11.
</a>12.
<hr>13.
<a href="https://en.wikipedia.org/wiki/Hundred_Acre_Wood"14.
title="Visit site about Winnie the Pooh">15.
<img src="images/pooh.jpg" alt="Pooh Bear">16.
</a>17.
<hr>18.
<a href="../Solutions/index.html" title="Link to Home Page">19.
<img src="images/runners-home.png" alt="Runners Home Logo">20.
</a>21.
-------Lines 22 through 23 Omitted-------
Including the title attribute results in a tooltip in many browsers:
74 | LESSON 5: HTML Images
EVALUATION COPY: Not to be used in class.

---

LESSON 5: HTML Images | 75
EVALUATION COPY: Not to be used in class.

---

# Exercise 5: Adding Images to the Page
### 15 to 25 minutes
In this exercise, you will add images to index.html. Here is the resulting page:
76 | LESSON 5: HTML Images
EVALUATION COPY: Not to be used in class.

---

1. Open Images/Exercises/index.html for editing.
2. Add the following images, all of which are in the Images/Exercises/images directory. Be
sure to include alternative text.
A. runners-home.png should link to index.html.
B. tips-running.png
15 
should link to advice/running-tips.html.
C. tips-health.png
16 
should link to advice/health-tips.html.
15. The https://pixabay.com/illustrations/running-woman-man-together-family-2897357 image is used under the terms of Pixabay
License (https://pixabay.com/service/license/).
16. The https://pixabay.com/illustrations/veggies-vegetables-healthy-food-2340299 image is used under the terms of Pixabay License
(https://pixabay.com/service/license/).
LESSON 5: HTML Images | 77
EVALUATION COPY: Not to be used in class.

---

D. facebook-icon.png, linkedin-icon.png, and twitter-icon.png
17 
should
replace the text used in the footer of the exercise file.
17. The https://pixabay.com/de/illustrations/icon-social-media-linkedin-facebook-2083456 image is used under the terms of Pixabay
License (https://pixabay.com/service/license/).
78 | LESSON 5: HTML Images
EVALUATION COPY: Not to be used in class.

---

LESSON 5: HTML Images | 79
EVALUATION COPY: Not to be used in class.

---

Solution: Images/Solutions/index.html
-------Lines 1 through 8 Omitted-------
<a href="index.html">9.
<img src="images/runners-home.png" alt="Runners Home">10.
</a>11.
-------Lines 12 through 26 Omitted-------
<h3>Best Running Tips</h3>27.
<a href="advice/running-tips.html">28.
<img src="images/tips-running.png" alt="Running Tips">29.
</a>30.
<p>There are good ways to train and bad ways to train. To get31.
the most out of your runs...32.
<a href="advice/running-tips.html">Read more...</a>33.
</p>34.
<h3>Best Health Tips</h3>35.
<a href="advice/health-tips.html">36.
<img src="images/tips-health.png" alt="Health Tips">37.
</a>38.
-------Lines 39 through 53 Omitted-------
<div>54.
<a href="mailto:info@runners-home.com">info@runners-home.com</a>55.
<a href="https://www.facebook.com/webucator">56.
<img src="images/facebook-icon.png" alt="Facebook Icon"></a>57.
<a href="https://www.linkedin.com/companies/webucator">58.
<img src="images/linkedin-icon.png" alt="LinkedIn Icon"></a>59.
<a href="https://twitter.com/webucator">60.
<img src="images/twitter-icon.png" alt="Twitter Icon"></a>61.
</div>62.
-------Lines 63 through 64 Omitted-------
EVALUATION COPY: Not to be used in class.
### ❋
## 5.3. Providing Alternative Images
All modern browsers support the newer WebP image type, which provides better quality and compression
than PNG, JPEG, and GIF images. Internet Explorer, however, does not. That may not be an issue
as Internet Explorer has a very small share of the market. However, if you do need to support Internet
80 | LESSON 5: HTML Images
EVALUATION COPY: Not to be used in class.

---

Explorer, that doesn’t mean you cannot use WebP images. To do so, you will need to use the picture
element, like so:
<picture>
<source srcset="images/logo.webp" type="image/webp">
<img src="images/logo.png" alt="logo">
</picture>
Notice that the picture element has a child source element with a srcset attribute that points to
the image file and a type attribute that indicates what type of image it is. If the browser supports that
type of image, it will use that file. If not, it will fall back on the image file in the subsequent img element.
More on WebP
For more information on WebP and a free tool for converting PNG and JPG files to WebP, see
https://developers.google.com/speed/webp.
## Conclusion
In this lesson, you have learned to add images to a web page, to make those images accessible, to create
image links, and to use the picture element to provide image fallbacks.
LESSON 5: HTML Images | 81
EVALUATION COPY: Not to be used in class.

---

82 | LESSON 5: HTML Images
EVALUATION COPY: Not to be used in class.

---

# LESSON 6
# HTML Lists
EVALUATION COPY: Not to be used in class.
Topics Covered
Unordered lists.
Ordered lists.
Description lists.
## Introduction
There are three types of lists in HTML: unordered, ordered, and description lists. In this lesson, you
will learn how to create all three.
EVALUATION COPY: Not to be used in class.
### ❋
## 6.1. Unordered Lists
Unordered lists are rendered as bulleted lists. Take a look at the following code sample:
LESSON 6: HTML Lists | 83
EVALUATION COPY: Not to be used in class.

---

Demo 6.1: Lists/Demos/beatles-unordered.html
-------Lines 1 through 8 Omitted-------
<h1>Beatles</h1>9.
<ul>10.
<li>John Lennon</li>11.
<li>Paul McCartney</li>12.
<li>George Harrison</li>13.
<li>Ringo Starr</li>14.
</ul>15.
-------Lines 16 through 17 Omitted-------
The <ul> tag starts an unordered list. Each list item is contained in <li></li> tags. The following
screenshot shows how this code would be rendered:
### 6.1.1. Nesting Unordered Lists
Unordered lists can also be nested. The browsers use indentation and different styles of bullets
18 
to
display the nested lists. The following example shows how this works:
18. Both the indentation and the style of bullet can be controlled with CSS.
84 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

Demo 6.2: Lists/Demos/beatles-unordered-nested.html
-------Lines 1 through 8 Omitted-------
<h1>Beatles Lead Singers</h1>9.
<ul>10.
<li>John Lennon11.
<ul>12.
<li>Norwegian Wood (This Bird Has Flown)</li>13.
<li>All You Need Is Love</li>14.
<li>Day Tripper</li>15.
<li>Can't Buy Me Love16.
<ul>17.
<li>John and Paul together</li>18.
</ul>19.
</li>20.
<li>Lucy In The Sky With Diamonds</li>21.
</ul>22.
</li>23.
<li>Paul McCartney24.
<ul>25.
<li>Lady Madonna</li>26.
<li>Lovely Rita</li>27.
<li>Eleanor Rigby</li>28.
<li>Can't Buy Me Love29.
<ul>30.
<li>John and Paul together</li>31.
</ul>32.
</li>33.
<li>When I'm Sixty-Four</li>34.
</ul>35.
</li>36.
<li>George Harrison37.
<ul>38.
<li>Here Comes The Sun</li>39.
<li>Roll Over Beethoven</li>40.
</ul>41.
</li>42.
<li>Ringo Starr43.
<ul>44.
<li>Don't Pass Me By</li>45.
<li>Yellow Submarine</li>46.
</ul>47.
</li>48.
</ul>49.
-------Lines 50 through 51 Omitted-------
LESSON 6: HTML Lists | 85
EVALUATION COPY: Not to be used in class.

---

Notice that the nested unordered lists are siblings to plain text. For example, the text “George Harrison”
and the unordered list that follows that text both are contained within the same parent <li> tag. Only
list items, not lists themselves, can contain nested (i.e., child) lists. In other words, lists contain list
items, which can contain lists, which contain list items, which can contain lists, which contain list
items, and so on and so forth, ad infinitum.
Here is the resulting page:
EVALUATION COPY: Not to be used in class.
### ❋
## 6.2. Ordered Lists
Ordered lists are similar to unordered lists. They are created with the <ol> tag and, by default, will
display list items with numbers. Take a look at the following code:
86 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

Demo 6.3: Lists/Demos/beatles-ordered.html
-------Lines 1 through 8 Omitted-------
<h1>Beatles</h1>9.
<ol>10.
<li>John Lennon</li>11.
<li>Paul McCartney</li>12.
<li>George Harrison</li>13.
<li>Ringo Starr</li>14.
</ol>15.
-------Lines 16 through 17 Omitted-------
The following screenshot shows how the code will be rendered:
LESSON 6: HTML Lists | 87
EVALUATION COPY: Not to be used in class.

---

### 6.2.1. Nesting Ordered Lists
Like unordered lists, ordered lists can be nested. However, unlike in some word processing applications,
nested ordered lists will continue to be displayed using standard numbers:
88 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

Demo 6.4: Lists/Demos/beatles-ordered-nested.html
-------Lines 1 through 8 Omitted-------
<h1>Beatles Lead Singers</h1>9.
<ol>10.
<li>John Lennon11.
<ol>12.
<li>Norwegian Wood (This Bird Has Flown)</li>13.
<li>All You Need Is Love</li>14.
<li>Day Tripper</li>15.
<li>Can't Buy Me Love16.
<ul>17.
<li>John and Paul together</li>18.
</ul>19.
</li>20.
<li>Lucy In The Sky With Diamonds</li>21.
</ol>22.
</li>23.
<li>Paul McCartney24.
<ol>25.
<li>Lady Madonna</li>26.
<li>Lovely Rita</li>27.
<li>Eleanor Rigby</li>28.
<li>Can't Buy Me Love29.
<ul>30.
<li>John and Paul together</li>31.
</ul>32.
</li>33.
<li>When I'm Sixty-Four</li>34.
</ol>35.
</li>36.
<li>George Harrison37.
<ol>38.
<li>Here Comes The Sun</li>39.
<li>Roll Over Beethoven</li>40.
</ol>41.
</li>42.
<li>Ringo Starr43.
<ol>44.
<li>Don't Pass Me By</li>45.
<li>Yellow Submarine</li>46.
</ol>47.
</li>48.
</ol>49.
-------Lines 50 through 51 Omitted-------
LESSON 6: HTML Lists | 89
EVALUATION COPY: Not to be used in class.

---

The resulting page looks like this:
As you can see, ordered lists can contain nested unordered lists (below Can’t Buy Me Love). The reverse
is also true.
90 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

### 6.2.2. The type ### Attribute
The type attribute is used to change the numbering type. Possible values are shown in the following
table:
Values of the type Attribute
DescriptionValue
Lowercase Roman Numeralsi
Uppercase Roman NumeralsI
Lowercase Lettersa
Uppercase LettersA
Numbers (default)1
The following code illustrates how type is used:
LESSON 6: HTML Lists | 91
EVALUATION COPY: Not to be used in class.

---

Demo 6.5: Lists/Demos/beatles-ordered-nested-type.html
-------Lines 1 through 9 Omitted-------
<ol>10.
<li>John Lennon11.
<ol type="A">12.
<li>Norwegian Wood (This Bird Has Flown)</li>13.
<li>All You Need Is Love</li>14.
<li>Day Tripper</li>15.
<li>Can't Buy Me Love16.
<ul>17.
<li>John and Paul together</li>18.
</ul>19.
</li>20.
<li>Lucy In The Sky With Diamonds</li>21.
</ol>22.
</li>23.
<li>Paul McCartney24.
<ol type="A">25.
<li>Lady Madonna</li>26.
<li>Lovely Rita</li>27.
<li>Eleanor Rigby</li>28.
<li>Can't Buy Me Love29.
<ul>30.
<li>John and Paul together</li>31.
</ul>32.
</li>33.
<li>When I'm Sixty-Four</li>34.
</ol>35.
</li>36.
<li>George Harrison37.
<ol type="A">38.
<li>Here Comes The Sun</li>39.
<li>Roll Over Beethoven</li>40.
</ol>41.
</li>42.
<li>Ringo Starr43.
<ol type="A">44.
<li>Don't Pass Me By</li>45.
<li>Yellow Submarine</li>46.
</ol>47.
</li>48.
</ol>49.
-------Lines 50 through 51 Omitted-------
92 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

Here is the resulting page:
List Types and CSS
As a rule, it is better to set the type of numbering using the CSS list-style-type property.
The exception is when the value of the list item is meaningful as it sometimes is in legal or
technical documents. This is because you cannot be sure that CSS will be enabled.
Also note that the unordered tag (<ul>) used to have a type attribute as well, but this has been
deprecated in favor of CSS, so you should not use it.
### 6.2.3. The start ### Attribute
The start attribute is used to specify what number the list should start on. It takes an integer value.
For example:
LESSON 6: HTML Lists | 93
EVALUATION COPY: Not to be used in class.

---

Demo 6.6: Lists/Demos/fifth-beatle.html
-------Lines 1 through 9 Omitted-------
<ol>10.
<li>John Lennon</li>11.
<li>Paul McCartney</li>12.
<li>George Harrison</li>13.
<li>Ringo Starr</li>14.
</ol>15.
<p>16.
People argue over who the17.
<a href="https://en.wikipedia.org/wiki/Fifth_Beatle">fifth</a>,18.
Beatle was. I'll just claim the spot myself:19.
</p>20.
<ol start="5">21.
<li>Nat Dunn</li>22.
</ol>23.
-------Lines 24 through 25 Omitted-------
The following screenshot shows how the code will be rendered:
EVALUATION COPY: Not to be used in class.
### ❋
94 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

## 6.3. Description Lists
Description lists are used to define a list of terms. The following example is a modified version of an
example from the W3C Recommendation:
19
Demo 6.7: Lists/Demos/description-list.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width, initial-scale=1">5.
<title>Description List</title>6.
</head>7.
<body>8.
<h1>Description List</h1>9.
<dl>10.
<dt><dfn>Dweeb</dfn> (n.)</dt>11.
<dd>young excitable person who may mature into a12.
<em>Nerd</em> or <em>Geek</em></dd>13.
<dt><dfn>Hacker</dfn> (n.)</dt>14.
<dd>a clever programmer</dd>15.
<dt><dfn>Nerd</dfn> (n.)</dt>16.
<dd>technically bright but socially inept person</dd>17.
</dl>18.
</body>19.
</html>20.
1. The <dl> tag contains the description list.
2. The <dt> tags contain the description terms. Notice that these contain <dfn></dfn> tags,
which are used to indicate the term being defined.
3. The <dd> tags contain the description details.
The following screenshot shows how the code will be rendered:
19. https://www.w3.org/TR/html4/struct/lists.html#edef-DD
LESSON 6: HTML Lists | 95
EVALUATION COPY: Not to be used in class.

---

96 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

# Exercise 6: Creating Lists
### 40 to 60 minutes
In this exercise, you will add several lists to the Runners Home website.
Navigation Menu
On all the pages, you will update the main navigation at the top to look like this:
Notice that there is a nested list under Resources.
In addition to the main navigation list, add the following lists:
1. index.html – Add an ordered list under Purpose on the home page:
2. races.html – Add an ordered list with nested unordered lists to the page:
LESSON 6: HTML Lists | 97
EVALUATION COPY: Not to be used in class.

---

3. resources/index.html – Add an unordered list:
4. resources/terms.html – Add a description list to the page:
98 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

5. resources/links.html – Add an unordered list to the page:
6. advice/index.html – Add an unordered list to the page:
LESSON 6: HTML Lists | 99
EVALUATION COPY: Not to be used in class.

---

Solution: Lists/Solutions/index.html
-------Lines 1 through 11 Omitted-------
<h1>Runners Home</h1>12.
<ul>13.
<li><a href="index.html">Home</a></li>14.
<li><a href="resources/index.html">Resources</a>15.
<ul>16.
<li><a href="resources/calculator.html">Calculator</a></li>17.
<li><a href="resources/run-log.html">Running Log</a></li>18.
<li><a href="resources/terms.html">Running Terms</a></li>19.
<li><a href="resources/links.html">Links</a></li>20.
</ul>21.
</li>22.
<li><a href="advice/index.html">Running Advice</a></li>23.
<li><a href="races.html">Races</a></li>24.
<li><a href="register.html">Register</a></li>25.
</ul>26.
-------Lines 27 through 46 Omitted-------
<h2>Purpose</h2>47.
<p>Runners Home is dedicated to providing you with:</p>48.
<ol>49.
<li><a href="races.html">the most up-to-date50.
information on running races</a>.</li>51.
<li><a href="resources/index.html">the best52.
resources for runners</a>.</li>53.
</ol>54.
-------Lines 55 through 68 Omitted-------
The main navigation list should be included on all the pages. That is not shown in the solutions below.
100 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

Solution: Lists/Solutions/races.html
-------Lines 1 through 26 Omitted-------
<h2>Races</h2>27.
<ol>28.
<li>29.
<a href="https://www.atlantatrackclub.org/peachtree">30.
AJC Peachtree Road Race31.
</a>32.
<ul>33.
<li><strong>Date</strong>: March 15th</li>34.
<li><strong>Distance</strong>: 10K</li>35.
<li><strong>Location</strong>: Atlanta, GA</li>36.
</ul>37.
</li>38.
<li>39.
<a href="https://www.boilermaker.com">Boilermaker</a>40.
<ul>41.
<li><strong>Date</strong>: July 11th</li>42.
<li><strong>Distance</strong>: 15K</li>43.
<li><strong>Location</strong>: Utica, NY</li>44.
</ul>45.
</li>46.
<li>47.
<a href="https://www.nyrr.org/">NYC Marathon</a>48.
<ul>49.
<li><strong>Date</strong>: November 3rd</li>50.
<li><strong>Distance</strong>: 26.22 mi</li>51.
<li><strong>Location</strong>: New York, NY</li>52.
</ul>53.
</li>54.
</ol>55.
-------Lines 56 through 69 Omitted-------
LESSON 6: HTML Lists | 101
EVALUATION COPY: Not to be used in class.

---

Solution: Lists/Solutions/resources/index.html
-------Lines 1 through 26 Omitted-------
<h2>Resources</h2>27.
<ul>28.
<li><a href="calculator.html">Calculator</a></li>29.
<li><a href="run-log.html">Running Log</a></li>30.
<li><a href="terms.html">Running Terms</a></li>31.
<li><a href="links.html">Links</a></li>32.
</ul>33.
-------Lines 34 through 47 Omitted-------
Solution: Lists/Solutions/resources/terms.html
-------Lines 1 through 26 Omitted-------
<h2>Running Terms</h2>27.
<dl>28.
<dt>Aerobic</dt>29.
<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.30.
Aliquam et gravida sapien, facilisis condimentum arcu.31.
Morbi eget dui iaculis, porttitor eros et, tincidunt erat...</dd>32.
33.
<dt>Bandit</dt>34.
<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.35.
Aliquam et gravida sapien, facilisis condimentum arcu.36.
Morbi eget dui iaculis, porttitor eros et, tincidunt erat...</dd>37.
38.
<dt><abbr title="couch to 5K">C25K</abbr></dt>39.
<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.40.
Aliquam et gravida sapien, facilisis condimentum arcu.41.
Morbi eget dui iaculis, porttitor eros et, tincidunt erat...</dd>42.
43.
<dt><abbr title="Did not finish">DNF</abbr></dt>44.
<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.45.
Aliquam et gravida sapien, facilisis condimentum arcu.46.
Morbi eget dui iaculis, porttitor eros et, tincidunt erat...</dd>47.
48.
<dt>Easy Run</dt>49.
<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.50.
Aliquam et gravida sapien, facilisis condimentum arcu.51.
Morbi eget dui iaculis, porttitor eros et, tincidunt erat...</dd>52.
</dl>53.
-------Lines 54 through 68 Omitted-------
102 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

Solution: Lists/Solutions/resources/links.html
-------Lines 1 through 26 Omitted-------
<h2>Useful Links</h2>27.
<ul>28.
<li><a href="https://www.mapmyrun.com/">Map My Run</a></li>29.
<li><a href="https://www.runnersworld.com">Runners World</a></li>30.
<li><a href="https://strengthrunning.com/">Strength Running</a></li>31.
</ul>32.
-------Lines 33 through 47 Omitted-------
Solution: Lists/Solutions/advice/index.html
-------Lines 1 through 26 Omitted-------
<h2>Running Advice</h2>27.
<ul>28.
<li><a href="running-tips.html">Running Tips</a></li>29.
<li><a href="health-tips.html">Health Tips</a></li>30.
</ul>31.
-------Lines 32 through 45 Omitted-------
## Conclusion
In this lesson, you have learned to create unordered, ordered and description lists.
LESSON 6: HTML Lists | 103
EVALUATION COPY: Not to be used in class.

---

104 | LESSON 6: HTML Lists
EVALUATION COPY: Not to be used in class.

---

# LESSON 7
# Sectioning a Web Page
EVALUATION COPY: Not to be used in class.
Topics Covered
Separating page content into semantic sections.
## Introduction
You have already worked with div elements to break out a block of content. But the <div> tag doesn’t
tell us anything about the content it contains. In this lesson, you will learn about semantic (i.e., logical
and meaningful) block-level elements.
EVALUATION COPY: Not to be used in class.
### ❋
## 7.1. Semantic Block-Level Elements
Remember that HTML is used to mark up content in a meaningful way. We learned earlier about
inline semantic elements (see page 40) like strong and em. HTML block-level semantic elements are
listed below:
1. address – Contains contact information.
2. article – Contains a self-contained article (e.g., for a blog or news site) that is meant to be
able to stand on its own.
3. aside – Contains content that is not directly related to the page’s main content.
4. div – Contains a meaningless block of content. Content within a <div> tag is not necessarily
related to other content in the same tag. Like the inline <span> tag, the <div> tag can be
used for grouping elements, and meaning and style can be added through adding attributes
(e.g., id, class, and lang).
LESSON 7: Sectioning a Web Page | 105
EVALUATION COPY: Not to be used in class.

---

5. footer – Contains the footer of the page. Often used for the company’s address or a copyright
message or legalese. Other page elements (e.g., article, aside) can contain their own footers.
6. header – Contains the header of the page. Often used for page headings, possibly some
introductory content, and to hold the main navigation of the page. Other page elements (e.g.,
article, aside) can contain their own headers.
7. main – Contains the dominant content of the page. You should have only one main element
on a page.
8. nav – Contains page or site navigation.
9. section – Contains a section of the page that doesn’t have any other tag that more
meaningfully describes the contained content. All content within a <section> tag should be
related.
The elements above are all block-level elements with no default formatting. Unless they are styled with
CSS, there will be no indication that they are included on the page.
20 
But the purpose of these elements
is not to style the page; it is to provide meaningful structure. They make it easier for screen readers and
other devices that inspect or read the page to understand the page content.
EVALUATION COPY: Not to be used in class.
### ❋
## 7.2. Articles vs. Sections
Most of the sectioning elements are easily distinguishable from each other. You’re not likely to be
confused as to when to use the header or footer elements. But the difference between a section
and an article is more subtle.
The major difference between the article element and the section element is that an article
element encapsulates content that could stand alone and might be of interest outside the context of
the page. Mozilla
21 
puts it this way:
The article element “represents a self-contained composition in a document, page, application, or
site, which is intended to be independently distributable or reusable (e.g., in syndication).”
20. 
The only exception is address, which is italic by default.
21. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
106 | LESSON 7: Sectioning a Web Page
EVALUATION COPY: Not to be used in class.

---

The most obvious example is a blog entry or a newspaper article; however, you could also apply this
to a product description as you can imagine wanting to syndicate all of your products to a website that
aggregates product information from different companies.
A section, on the other hand, is used to encapsulate content that fits together in some identifiable
way. One test for whether content should go together in a section is to see if you can give that section
a meaningful id, using the id attribute.
Note that section elements can contain article elements, and article elements can contain
section elements. Both section and article elements can also contain header and footer
elements.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 7: Sectioning a Web Page | 107
EVALUATION COPY: Not to be used in class.

---

## 7.3. Sectioning the Home Page
In the following code, we show how to use these tags to break up the Runners Home home page. We
have added a newsletter sign-up link to show how to use the aside element.
108 | LESSON 7: Sectioning a Web Page
EVALUATION COPY: Not to be used in class.

---

Demo 7.1: SectioningPage/Demos/index.html
-------Lines 1 through 7 Omitted-------
<body>8.
<header>9.
<a href="index.html">10.
<img src="images/runners-home.png" alt="Runners Home">11.
</a>12.
<h1>Runners Home</h1>13.
<nav>14.
<ul>15.
<li><a href="index.html">Home</a></li>16.
<li><a href="resources/index.html">Resources</a>17.
<ul>18.
<li><a href="resources/calculator.html">Calculator</a></li>19.
<li><a href="resources/run-log.html">Running Log</a></li>20.
<li><a href="resources/terms.html">Running Terms</a></li>21.
<li><a href="resources/links.html">Links</a></li>22.
</ul>23.
</li>24.
<li><a href="advice/index.html">Running Advice</a></li>25.
<li><a href="races.html">Races</a></li>26.
<li><a href="register.html">Register</a></li>27.
</ul>28.
</nav>29.
</header>30.
<main>31.
<section id="welcome">32.
<p><strong>Hello, Stranger!</strong></p>33.
<p>Welcome to Runners Home</p>34.
</section>35.
<section id="advice">36.
<h2>Advice</h2>37.
<article id="running-tips">38.
<h3>Best Running Tips</h3>39.
<a href="advice/running-tips.html">40.
<img src="images/tips-running.png" alt="Running Tips">41.
</a>42.
<p>There are good ways to train and bad ways to train. To get43.
the most out of your runs...44.
<a href="advice/running-tips.html">Read more...</a>45.
</p>46.
</article>47.
<article id="health-tips">48.
<h3>Best Health Tips</h3>49.
<a href="advice/health-tips.html">50.
LESSON 7: Sectioning a Web Page | 109
EVALUATION COPY: Not to be used in class.

---

<img src="images/tips-health.png" alt="Health Tips">51.
</a>52.
<p>In addition to keeping up with your physical training, you53.
must be sure to take care of your general health...54.
<a href="advice/health-tips.html">Read more...</a>55.
</p>56.
</article>57.
<p><a href="advice/index.html">More advice articles...</a></p>58.
</section>59.
<section id="purpose">60.
<h2>Purpose</h2>61.
<p>Runners Home is dedicated to providing you with:</p>62.
<ol>63.
<li><a href="races.html">the most up-to-date64.
information on running races</a>.</li>65.
<li><a href="resources/index.html">the best66.
resources for runners</a>.</li>67.
</ol>68.
<aside>69.
<h3>Newsletter</h3>70.
<p>Be the first to hear about our great offers.<br>71.
<a href="newsletter.html">Sign up for our newsletter today!</a>72.
</p>73.
</aside>74.
<p><small>Disclosure: This is not a real website.</small></p>75.
</section>76.
</main>77.
<footer>78.
<p>&copy; 2022 Runners Home. All rights reserved.</p>79.
<address>80.
<a href="mailto:info@runners-home.com">info@runners-home.com</a>81.
<a href="https://www.facebook.com/webucator">82.
<img src="images/facebook-icon.png" alt="Facebook Icon"></a>83.
<a href="https://www.linkedin.com/companies/webucator">84.
<img src="images/linkedin-icon.png" alt="LinkedIn Icon"></a>85.
<a href="https://twitter.com/webucator">86.
<img src="images/twitter-icon.png" alt="Twitter Icon"></a>87.
</address>88.
</footer>89.
</body>90.
</html>91.
Things to notice:
1. We broke the body into three parts: header, main, and footer.
110 | LESSON 7: Sectioning a Web Page
EVALUATION COPY: Not to be used in class.

---

2. We removed the <hr> tag after the disclosure paragraph. The purpose of the <hr> tag is to
provide a thematic break (e.g., between stanzas in a poem) rather than a visual break. Now
that we are breaking up the page semantically, we no longer need the <hr> tag.
3. In the header, we added a nav element to hold the navigation.
4. The main element holds all of the main content on the page. Typically, that is the content
that is specific to this page; whereas, the header and footer are more likely to contain content
that is relevant to the whole website, or at least a larger part of it.
5. In the footer, we placed the contact information in an address element.
6. The main element is broken into section elements to separate structurally meaningful parts
of the page. We have used the id attribute to uniquely identify these sections as “welcome”,
“advice”, and “purpose.” While this is helpful in and of itself as a way of making the code
clearer, the larger benefit is that it makes these sections easily identifiable when it’s time to
style the page with CSS.
7. We added an aside element to hold the newsletter aside.
The following screenshot shows the difference between the file before and after sectioning. This was
created by comparing index-unsectioned.html with index.html from the SectioningPage/Demos
folder using Visual Studio Code’s Compare Selected feature:
LESSON 7: Sectioning a Web Page | 111
EVALUATION COPY: Not to be used in class.

---

112 | LESSON 7: Sectioning a Web Page
EVALUATION COPY: Not to be used in class.

---

To see this comparison side-by-side with the unsectioned version, select the two files in Visual Studio
Code’s Explorer, right-click, and select Compare Selected:
LESSON 7: Sectioning a Web Page | 113
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 7.4. Sectioning Content and Styling
Because these semantic elements don’t have default styles, adding them will not change the way the
page appears. As such, we have used <link> tags in the head to reference CSS files to style the page.
This should help you to get a feel for what can be done with CSS on a well-structured page:
114 | LESSON 7: Sectioning a Web Page
EVALUATION COPY: Not to be used in class.

---

From SectioningPage/Demos, open index.html and index-styled.html in your browser to
compare the unstyled and styled versions.
## 7.4. Heading Levels and Sectioning Elements
Our recommended approach to using heading levels in sectioned content is as follows:
1. Do not put any content directly in the body. Break the body up into header, main, and
footer elements.
2. In the header, use an h1 heading for the heading of the entire page. Do not use any other
h1 headings on the page.
3. Within main, section, article, aside, nav, and address elements, headings should start
at the h2 level and then decrease in level with each nested element that contains a heading.
LESSON 7: Sectioning a Web Page | 115
EVALUATION COPY: Not to be used in class.

---

To illustrate, consider our main element on the Runners Home home page. A simplified
version follows. Notice that the heading levels decrease with each nested level:
<main>
<section id="advice">
<h2>Advice</h2>
<article>
<h3>Best Running Tips</h3>
</article>
<article>
<h3>Best Health Tips</h3>
</article>
</section>
<section id="purpose">
<h2>Purpose</h2>
<aside>
<h3>Newsletter</h3>
</section>
</main>
### 7.4.1. For People Who Like History
Guidance for selecting heading levels within nested elements has changed over the years and, as a result,
it is done differently on many websites. If you are interested in the reasoning behind the current
recommendation, see https://www.webucator.com/article/html-heading-levels-and-sec
tioning-content/.
116 | LESSON 7: Sectioning a Web Page
EVALUATION COPY: Not to be used in class.

---

# Exercise 7: Sectioning the Pages
### 25 to 40 minutes
In this exercise, you will break up the content of the rest of the pages on the site using semantic elements.
Open each page in the SectioningPage/Exercises directory and use sectioning tags to break up
the body. Note that the index.html page is already done. You can use that as a reference.
The pages have references to CSS files included so that they will be nicely formatted when you’re
through.
Solution
Open the pages in the SectioningPage/Solutions directory to see the solutions.
You can compare your solutions with ours using Visual Studio Code’s Compare Selected feature.
## Conclusion
In this lesson, you have learned to work with semantic structural elements.
LESSON 7: Sectioning a Web Page | 117
EVALUATION COPY: Not to be used in class.

---

118 | LESSON 7: Sectioning a Web Page
EVALUATION COPY: Not to be used in class.

---

# LESSON 8
# Crash Course in CSS
EVALUATION COPY: Not to be used in class.
Topics Covered
Benefits of Cascading Style Sheets.
Redefining how elements are formatted.
CSS selectors.
CSS combinators.
The CSS cascade.
CSS resets and normalizers.
External stylesheets, embedded stylesheets, and inline styles.
The div and span elements.
Media types.
The viewport <meta> tag.
Units of measurement.
How browsers style pages.
Inheritance.
## Introduction
Since HTML 4.0, most HTML formatting elements (e.g., center for centering content) and attributes
(e.g., bgcolor for background color) have been deprecated, meaning that, although they may still be
supported by browsers, the WHATWG (the maintainer of the HTML specification) recommends that
they no longer be used. Web designers are to use CSS instead. In this lesson, you will get a high-level
overview of CSS.
LESSON 8: Crash Course in CSS | 119
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 8.1. Benefits of Cascading Style Sheets
The major benefits of CSS are:
1. Cleaner Code
Easier to maintain.
Speedier download.
Better for search engine optimization.
2. Modular Code
Style rules can be applied to multiple pages.
Consistency of design.
Easier to maintain.
3. Design Power
Precise control of position, size, margins, etc.
4. Division of Labor
Developers develop / Designers design.
5. Better Accessibility
22
No need to misuse tags (e.g., <blockquote> for formatting).
No need for invisible images for positioning.
Users’ stylesheets override authors’ styles.
EVALUATION COPY: Not to be used in class.
### ❋
22. See https://www.w3.org/TR/CSS-access/.
120 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

## 8.2. CSS Rules
CSS rules are statements that define the style of an element or group of elements. The syntax is as
follows:
selector {
property: value;
property: value;
property: value;
}
Each property: value pair is a declaration. Multiple declarations are separated by semicolons. The selector
defines which elements are affected by the rule. Take a look at the following rule:
p {
color: darkgreen;
font-family: Verdana;
font-size: 1.5em;
}
This rule specifies that all paragraph text should be darkgreen and use a 1.5em Verdana font. That’s
one and a half times the size that the font would normally be. You will learn about units of measurement
soon.
### 8.2.1. CSS Comments
Comments in CSS begin with “/*” and end with “*/”. See the example below:
p {
color: red; /* All paragraphs should be red */
}
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 8: Crash Course in CSS | 121
EVALUATION COPY: Not to be used in class.

---

## 8.3. Selectors
Selectors identify the element(s) affected by the CSS rule. There are several types of selectors:
1. Type
2. Class
3. ID
4. Attribute
5. Universal
In this section, we will give a high-level explanation of each of these types of selectors. It is a lot of
information all at once. You should read through this section slowly and carefully. While it is important
that you have an understanding of the different types of selectors, you do not need to commit the
syntax for each type to memory. That will happen over time as you use them in practice.
### 8.3.1. Type Selectors
Type selectors specify elements by tag name and affect every instance of that element type. Looking
again at the previous example:
p {
color: darkgreen;
font-family: Verdana;
font-size: 1.5em;
}
Again, this rule specifies that the text of every p element should be darkgreen and use a 1.5em Verdana
font.
### 8.3.2. Class Selectors
In HTML, all elements can take the class attribute, which is used to assign one or more class names
to an element. The names given to classes are arbitrary, but should be descriptive of the purpose of the
class. In CSS, class selectors begin with a dot. For example, the following rule specifies that any elements
with the class “warning” should be bold and red:
122 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

.warning {
color: red;
font-weight: bold;
}
Following are a couple of examples of elements of the “warning” class:
<h1 class="warning">WARNING</h1>
<p class="warning">Don’t go there!</p>
If the class selector is preceded by an element name, then that selector only applies to the specified type
of element. To illustrate, the following two rules indicate that h1 elements of the class “warning” will
be underlined, while p elements of the class “warning” will not be:
h1.warning {
color: red;
text-decoration: underline;
}
p.warning {
color: red;
font-weight: bold;
}
Because both rules indicate that the color should be red, this could be rewritten as follows:
.warning {
color: red;
}
h1.warning {
text-decoration: underline;
}
p.warning {
font-weight: bold;
}
Note that you can assign an element any number of classes simply by separating the class names with
spaces like this:
LESSON 8: Crash Course in CSS | 123
EVALUATION COPY: Not to be used in class.

---

<div class="class1 class2 class3">...
### 8.3.3. ID Selectors
As with the class attribute, in HTML, all elements can take the id attribute, which is used to uniquely
identify an element on the page. In CSS, ID selectors begin with a number sign (#) and have arbitrary
names. The following rule will give the element with the “main-text” id a margin of 1.2em on the left
and right:
#main-text {
margin-left: 1.2em;
margin-right: 1.2em;
}
<div id="main-text">
<p>This is the main text of the page...</p>
</div>
### 8.3.4. Attribute Selectors
Attribute selectors specify elements that contain a specific attribute. They can also specify what the
value of that attribute should or should not be.
The following selector affects all links with a target attribute:
a[target] {
color: red;
}
The = (equals) operator can be used to specify the attribute value. The following selector would only
affect links whose target attribute is exactly “_blank”:
a[target='_blank'] {
color: red;
}
You can get much more specific about attribute values…
124 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

The ^= (starts-with) operator can be used to specify the beginning text of the attribute value. The
following selector will only affect links whose href attribute starts with “mailto”:
a[href^='mailto'] {
color: red;
}
The $= (ends-with) operator can be used to specify the ending text of the attribute value. The following
selector will only affect links whose class attribute ends with “link”:
a[class$='link'] {
color: red;
}
The *= (contains) operator can be used to specify text the attribute value must contain. The following
selector will only affect links whose class attribute contains “top”:
a[class*='top'] {
color: red;
}
### 8.3.5. The Universal Selector
The universal selector is an asterisk (*). It matches every element:
* {
color: red;
}
### 8.3.6. Grouping
Selectors can share the same declarations by separating them with commas. The following rule will
underline all em elements, all elements of the class “warning” and the element with the id of
“important”:
LESSON 8: Crash Course in CSS | 125
EVALUATION COPY: Not to be used in class.

---

em,
.warning,
#important {
text-decoration: underline;
}
EVALUATION COPY: Not to be used in class.
### ❋
## 8.4. Combinators
Combinators allow for the selection of elements based on the relationships between selectors.
There are several types of combinators:
1. Descendant
2. Child
3. General sibling
4. Adjacent sibling
### 8.4.1. Descendant Combinators
Descendant combinators specify elements by ancestry. Each “generation” is separated by a space. For
example, the following rule states that strong elements within p elements should have red text:
p strong {
color: red;
}
With descendant selectors, generations can be skipped. In other words, the code above does not require
that the strong element is a direct child of the p element.
126 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

### 8.4.2. Child Combinators
Child combinators specify a direct parent-child relationship. They are indicated by placing a > sign
between the two element names:
p > strong {
color: red;
}
In this case only strong elements that are direct children of p elements are affected.
### 8.4.3. General Sibling Combinators
General sibling combinators specify a sibling relationship
23 
between two elements where the second
element specified comes after the first. They are indicated by placing a ~ sign between the two element
names:
em ~ strong {
color: red;
}
In this case only strong elements that are siblings of and follow em elements are affected. For example,
in the following code: both strong elements would be red:
<em>Hello!</em>
<strong>Hi there!</strong>
I’m not in a strong or em element.
<strong>Howdy!</strong>
### 8.4.4. Adjacent Sibling Combinators
Adjacent sibling combinators specify a sibling relationship between two elements where the second
element specified comes immediately after the first. They are indicated by placing a + sign between the
two element names:
23. Sibling elements have the same parent element.
LESSON 8: Crash Course in CSS | 127
EVALUATION COPY: Not to be used in class.

---

em + strong {
color: red;
}
In this case only strong elements that are siblings of and immediately follow em elements are affected.
In the HTML code just shown above, only the first strong element (with the text “Hi there!”) would
be red, because it immediately follows an em element.
EVALUATION COPY: Not to be used in class.
### ❋
## 8.5. Precedence of Selectors
In the event that rules conflict:
The rule with the more specific selector takes precedence.
If two selectors have the same specificity, the rule specified later in the document takes
precedence.
!important
Adding !important to any CSS declaration will give that declaration the highest specificity,
but using !important is bad practice, and should be avoided.
24
EVALUATION COPY: Not to be used in class.
### ❋
## 8.6. How Browsers Style Pages
Browsers have built-in styles to make web pages readable by default (i.e., without CSS). Without any
styles, an HTML page would just be one big line of text. For example, look at the code below:
24. 
See https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#the_!important_exception.
128 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

Demo 8.1: CrashCourse/Demos/default-styles.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<title>Default Styles</title>6.
</head>7.
<body>8.
<h1>Header 1</h1>9.
<h2>Header 2</h2>10.
<h3>Header 3</h3>11.
<h4>Header 4</h4>12.
<p>This is a paragraph.</p>13.
<div>This is a div element that contains14.
<a href="https://www.runners-home.com">a link to Runners Home</a>.15.
</div>16.
<ul>17.
<li>List Item</li>18.
<li>List Item</li>19.
<li>List Item</li>20.
</ul>21.
<ol>22.
<li>List Item</li>23.
<li>List Item</li>24.
<li>List Item</li>25.
</ol>26.
</body>27.
</html>28.
To make pages readable by default, the browsers add styles to render the page like this:
LESSON 8: Crash Course in CSS | 129
EVALUATION COPY: Not to be used in class.

---

Notice the default styles:
1. The headings are bold, have varying font sizes, and have margin before and after them.
2. All of the elements, except the link, are on their own blocks as if they had <br> tags before
and after them.
3. The unordered and ordered lists come with bullets and numbers, respectively.
4. The link is blue and underlined.
If browsers did not have default styles, they would display all the text in the body along a single line
like this:
130 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

As that’s not very readable, it’s a good thing that browsers do provide default styles. Unfortunately,
not all browsers provide the same default styles for all elements, so it’s common practice for web
designers to remove or override the browsers’ default styles with default styles of their own.
EVALUATION COPY: Not to be used in class.
### ❋
## 8.7. CSS Resets
CSS resets are used to remove most default styles that browsers add to HTML elements, so that designers
can decide on these styles themselves. For example, after applying a CSS reset, header tags will no longer
be big and bold. By resetting the default styles, the designer gets rid of inconsistencies between browser
default styles, opening the door for them to add styles that are rendered the same by all browsers.
A common CSS reset is the Meyer Reset
25
, which you can see below:
25. https://meyerweb.com/eric/tools/css/reset/
LESSON 8: Crash Course in CSS | 131
EVALUATION COPY: Not to be used in class.

---

Demo 8.2: CrashCourse/Demos/reset.css
/* http://meyerweb.com/eric/tools/css/reset/1.
v2.0 | 201101262.
License: none (public domain)3.
*/4.
5.
html, body, div, span, applet, object, iframe,6.
h1, h2, h3, h4, h5, h6, p, blockquote, pre,7.
a, abbr, acronym, address, big, cite, code,8.
del, dfn, em, img, ins, kbd, q, s, samp,9.
small, strike, strong, sub, sup, tt, var,10.
b, u, i, center,11.
dl, dt, dd, ol, ul, li,12.
fieldset, form, label, legend,13.
table, caption, tbody, tfoot, thead, tr, th, td,14.
article, aside, canvas, details, embed,15.
figure, figcaption, footer, header, hgroup,16.
menu, nav, output, ruby, section, summary,17.
time, mark, audio, video {18.
margin: 0;19.
padding: 0;20.
border: 0;21.
font-size: 100%;22.
font: inherit;23.
vertical-align: baseline;24.
}25.
/* HTML5 display-role reset for older browsers */26.
article, aside, details, figcaption, figure,27.
footer, header, hgroup, menu, nav, section {28.
display: block;29.
}30.
body {31.
line-height: 1;32.
}33.
ol, ul {34.
list-style: none;35.
}36.
blockquote, q {37.
quotes: none;38.
}39.
blockquote:before, blockquote:after,40.
q:before, q:after {41.
content: '';42.
content: none;43.
}44.
132 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

table {45.
border-collapse: collapse;46.
border-spacing: 0;47.
}48.
Attaching this stylesheet to default-styles.html will render the page like this:
EVALUATION COPY: Not to be used in class.
### ❋
## 8.8. CSS Normalizers
CSS normalizers are slightly different from CSS resets. Instead of getting rid of all styles, they adjust
styles so that they are consistent between browsers. In doing so, normalizers have to choose some styles
over others. As such, normalizers are opinionated, meaning that the authors of these normalizers have
made design choices based on their own preferences. For the rest of this course, we will be using a
slightly modified version of a normalizer called normalize.css
26 
in all of our files.
26. https://necolas.github.io/normalize.css/
LESSON 8: Crash Course in CSS | 133
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 8.9. External Stylesheets, Embedded Stylesheets, and Inline
## Styles
### 8.9.1. External Stylesheets
External stylesheets are created in separate documents with a .css extension. An external stylesheet is
simply a listing of rules. It cannot contain HTML tags. Throughout this course, we will mainly be
working with external stylesheets. CrashCourse/Demos/styles.css is an example of an external
stylesheet.
Demo 8.3: CrashCourse/Demos/styles.css
.warning {1.
color: red;2.
}3.
4.
h1.warning {5.
text-decoration: underline;6.
}7.
8.
p.warning {9.
font-weight: bold;10.
}11.
The above CSS file can be included in any number of HTML pages using the <link> tag, which
usually goes in the head of an HTML page:
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link href="styles.css" rel="stylesheet">
<title>Page Title</title>
</head>
134 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

<link> Attributes
href - points to the location of the external stylesheet.
rel - must be set to “stylesheet” for linking stylesheets.
Notice the <link> tag in the code below that links to styles.css:
Demo 8.4: CrashCourse/Demos/external-stylesheet.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link href="../normalize.css" rel="stylesheet">6.
<link href="styles.css" rel="stylesheet">7.
<title>External Stylesheet</title>8.
</head>9.
<body class="webucator">10.
<h1 class="warning">WARNING</h1>11.
<p class="warning">Don't go there!</p>12.
</body>13.
</html>14.
This page will render as follows:
There is no limit to the number of external stylesheets a single HTML page can use. Notice in the
preceding example that we linked to two external stylesheets:
LESSON 8: Crash Course in CSS | 135
EVALUATION COPY: Not to be used in class.

---

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link href="../normalize.css" rel="stylesheet">
<link href="styles.css" rel="stylesheet">
<title>External Stylesheet</title>
</head>
Also, as you will see, external stylesheets can be combined with embedded stylesheets and inline styles.
### 8.9.2. Embedded Stylesheets
Embedded stylesheets appear in the style element, which usually goes in the head of an HTML page.
The code below shows a page with an embedded stylesheet:
Demo 8.5: CrashCourse/Demos/embedded-stylesheet.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link href="../normalize.css" rel="stylesheet">6.
<style>7.
.warning {8.
color: red;9.
}10.
11.
h1.warning {12.
text-decoration: underline;13.
}14.
15.
p.warning {16.
font-weight: bold;17.
}18.
</style>19.
<title>Embedded Stylesheet</title>20.
</head>21.
<body class="webucator">22.
<h1 class="warning">WARNING</h1>23.
<p class="warning">Don't go there!</p>24.
</body>25.
</html>26.
136 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

This page will render the same as the HTML page with the external stylesheet.
### 8.9.3. Inline Styles
Inline styles are created by adding the style attribute to a tag. As with the class and id attributes,
all elements can take the style attribute. The value of the style attribute is a list of one or more
declarations separated by semicolons. The code sample below illustrates how inline styles are used:
Demo 8.6: CrashCourse/Demos/inline-styles.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link href="../normalize.css" rel="stylesheet">6.
<title>Inline Styles</title>7.
</head>8.
<body class="webucator">9.
<p style="color: blue; font-style: italic; font-size: 1em;">10.
Common Greetings11.
</p>12.
<ul style="font-size: 0.8em;">13.
<li style="list-style-type: square;">Hello</li>14.
<li style="list-style-type: circle;">Hi</li>15.
<li style="list-style-type: disc;">Howdy</li>16.
</ul>17.
</body>18.
</html>19.
This page will render as follows:
LESSON 8: Crash Course in CSS | 137
EVALUATION COPY: Not to be used in class.

---

Avoid Using Inline Styles
It is generally bad practice to use inline styles in production code; however, they can be useful
for testing and debugging.
138 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

# Exercise 8: Creating an External
# Stylesheet
### 25 to 40 minutes
In this exercise, you will add several simple rules to an external stylesheet and link to it from Crash
Course/Exercises/index-external-styles.html. Do not worry about learning the CSS properties
and values at this point. This exercise is just to give you some practice creating a stylesheet.
1. Open CrashCourse/Exercises/index.html in a browser. It should look like this:
2. Open CrashCourse/Exercises/index.html in your editor and save it as index-external-
styles.html.
LESSON 8: Crash Course in CSS | 139
EVALUATION COPY: Not to be used in class.

---

3. Create a new file and save it as styles.css in the same directory.
4. Add a <link> tag with an href value of “styles.css” and a rel value of “stylesheet” in
the head of index-external-styles.html.
5. In styles.css, add a rule for the body element that contains the following declarations:
background-attachment: fixed;
background-image: url(images/baseball.png);
background-position: bottom;
background-repeat: repeat-x;
For a refresher on how to add rules, refer to the CSS Rules section of this lesson (see page
121).
6. Add a rule for table elements that contains the following declarations:
background-color: white;
border-collapse: collapse;
margin: auto;
min-width: 800px;
7. Add a rule for caption elements that contains the following declaration:
font-style: italic;
8. Add a rule for thead elements that contains the following declarations:
background-color: darkblue;
color: white;
9. Add a rule for td and th elements that contains the following declarations:
border: 1px solid orange;
margin: 0;
padding: .3em;
For a refresher on adding a rule for multiple selectors, refer to Grouping within the Selectors
section of this lesson (see page 125).
10. Add a rule for td elements that are in the tfoot that contains the following declarations:
background-color: silver;
border-top: 2px solid black;
140 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

font-weight: bold;
For a refresher on adding a rule for an element that is contained within another element, refer
to Descendant Combinators in the Combinators section of this lesson (see page 126).
11. Add a rule for elements with the “steroids-era” class that contains the following declaration:
font-style: italic;
For a refresher on adding a rule for an element of a specific class, refer to the Class Selectors
within the Selectors section of this lesson (see page 122).
12. Add a rule for the element with the “key” id that contains the following declarations:
background-color: lightgray;
font-style: italic;
For a refresher on adding a rule for an element of a specific id, refer to the ID Selectors within
the Selectors section of this lesson (see page 124).
13. Add the following two rules to the bottom of styles.css:
tr td:nth-child(2) {
text-align: center;
}
.steroids-era td:first-child::after {
content: '*';
}
Just add these last two rules exactly as written. Don’t worry about understanding the selectors
yet. We will cover them in later lessons. For now, we just want you to see what CSS can do.
14. In index-external-styles.html:
A. Assign a class of “steroids-era” to the table rows containing Barry Bonds and
Alex Rodriguez.
B. Assign an id of “key” to the table data cell in the tfoot that contains the text
“*Steroids Era.”
15. Open index-external-styles.html in a browser. It should look like this:
LESSON 8: Crash Course in CSS | 141
EVALUATION COPY: Not to be used in class.

---

142 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

LESSON 8: Crash Course in CSS | 143
EVALUATION COPY: Not to be used in class.

---

Solution: CrashCourse/Solutions/index-external-styles.html
-------Lines 1 through 6 Omitted-------
<link href="styles.css" rel="stylesheet">7.
<title>Home Run Hitters</title>8.
</head>9.
<body class="webucator">10.
<table>11.
<caption>All-time Home Run Records</caption>12.
<thead>13.
<tr>14.
<th>Player</th>15.
<th>Home Runs</th>16.
<th>Team</th>17.
</tr>18.
</thead>19.
<tbody>20.
<tr class="steroids-era">21.
<td>Barry Bonds</td>22.
<td>762</td>23.
<td>Giants</td>24.
</tr>25.
-------Lines 26 through 35 Omitted-------
<tr class="steroids-era">36.
<td>Alex Rodriguez</td>37.
<td>696</td>38.
<td>Yankees</td>39.
</tr>40.
-------Lines 41 through 52 Omitted-------
<tr>53.
<td colspan="3" id="key">*Steroids Era</td>54.
</tr>55.
</tfoot>56.
</table>57.
</body>58.
</html>59.
144 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

Solution: CrashCourse/Solutions/styles.css
body {1.
background-attachment: fixed;2.
background-image: url(images/baseball.png);3.
background-position: bottom;4.
background-repeat: repeat-x;5.
}6.
7.
table {8.
background-color: white;9.
border-collapse: collapse;10.
margin: auto;11.
min-width: 800px;12.
}13.
14.
caption {15.
font-style: italic;16.
}17.
18.
thead {19.
background-color: darkblue;20.
color: white;21.
}22.
23.
td,24.
th {25.
border: 1px solid orange;26.
margin: 0;27.
padding: .3em;28.
}29.
30.
tfoot td {31.
background-color: silver;32.
border-top: 2px solid black;33.
font-weight: bold;34.
}35.
36.
.steroids-era {37.
font-style: italic;38.
}39.
40.
#key {41.
background-color: lightgray;42.
font-style: italic;43.
}44.
LESSON 8: Crash Course in CSS | 145
EVALUATION COPY: Not to be used in class.

---

45.
tr td:nth-child(2) {46.
text-align: center;47.
}48.
49.
.steroids-era td:first-child::after {50.
content: '*';51.
}52.
146 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

# Exercise 9: Creating an Embedded
# Stylesheet
### 5 to 10 minutes
In this exercise, you will replace your external stylesheet with an embedded stylesheet.
1. Open CrashCourse/Exercises/index-external-styles.html in your editor and save
it as index-embedded-styles.html.
2. Remove the <link> tag, and add a style block.
3. Copy and paste all the CSS rules from styles.css to the style block in index-embedded-
styles.html.
4. Open index-embedded-styles.html in a browser. It should look the same as index-ex
ternal-styles.html did (see page 141).
LESSON 8: Crash Course in CSS | 147
EVALUATION COPY: Not to be used in class.

---

Solution: CrashCourse/Solutions/index-embedded-styles.html
-------Lines 1 through 6 Omitted-------
<title>Home Run Hitters</title>7.
<style>8.
body {9.
background-attachment: fixed;10.
background-image: url(images/baseball.png);11.
background-position: bottom;12.
background-repeat: repeat-x;13.
}14.
15.
table {16.
background-color: white;17.
border-collapse: collapse;18.
margin: auto;19.
min-width: 800px;20.
}21.
22.
caption {23.
font-style: italic;24.
}25.
26.
thead {27.
background-color: darkblue;28.
color: white;29.
}30.
31.
td,32.
th {33.
border: 1px solid orange;34.
margin: 0;35.
padding: .3em;36.
}37.
38.
tfoot td {39.
background-color: silver;40.
border-top: 2px solid black;41.
font-weight: bold;42.
}43.
44.
.steroids-era {45.
font-style: italic;46.
}47.
48.
#key {49.
148 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

background-color: lightgray;50.
font-style: italic;51.
}52.
53.
tr td:nth-child(2) {54.
text-align: center;55.
}56.
57.
.steroids-era td:first-child::after {58.
content: '*';59.
}60.
</style>61.
</head>62.
-------Lines 63 through 112 Omitted-------
LESSON 8: Crash Course in CSS | 149
EVALUATION COPY: Not to be used in class.

---

# Exercise 10: Adding Inline Styles
### 10 to 20 minutes
In this exercise, you will add some inline styles.
1. Open CrashCourse/Exercises/index-external-styles.html and save it as index-
inline-styles.html.
2. Add inline styles to the table data cells containing the word “Giants”. The style should contain
the following declarations:
color: darkred;
font-style: italic;
3. Add an inline style to the table data cell containing the word “Braves”. The style should contain
the following declarations:
color: red;
font-style: italic;
4. Add an inline style to the table data cells containing the word “Yankees”. The style should
contain the following declarations:
color: navy;
font-style: italic;
5. Add an inline style to the table data cells containing the word “Dodgers”. The style should
contain the following declarations:
color: dodgerblue;
font-style: italic;
6. Open index-inline-styles.html in a browser. The last column should now look like
this:
150 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

LESSON 8: Crash Course in CSS | 151
EVALUATION COPY: Not to be used in class.

---

Solution: CrashCourse/Solutions/index-inline-styles.html
-------Lines 1 through 19 Omitted-------
<tbody>20.
<tr class="steroids-era">21.
<td>Barry Bonds</td>22.
<td>762</td>23.
<td style="color: darkred; font-style: italic;">Giants</td>24.
</tr>25.
<tr>26.
<td>Hank Aaron</td>27.
<td>755</td>28.
<td style="color: red; font-style: italic;">Braves</td>29.
</tr>30.
<tr>31.
<td>Babe Ruth</td>32.
<td>714</td>33.
<td style="color: navy; font-style: italic;">Yankees</td>34.
</tr>35.
<tr class="steroids-era">36.
<td>Alex Rodriguez</td>37.
<td>696</td>38.
<td style="color: navy; font-style: italic;">Yankees</td>39.
</tr>40.
<tr>41.
<td>Albert Pujols</td>42.
<td>679</td>43.
<td style="color: dodgerblue; font-style: italic;">Dodgers</td>44.
</tr>45.
</tbody>46.
-------Lines 47 through 59 Omitted-------
EVALUATION COPY: Not to be used in class.
### ❋
## 8.10. div and span
The <div> and <span> tags are used in conjunction with Cascading Style Sheets. By themselves, they
do very little. In fact, the <span> tag without CSS has no visual effect on its contents. The only visual
152 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

effect of the <div> tag is to block off its contents, similar to putting a <br> tag before and after a
section on the page.
Like all tags, the <div> and <span> tags can take the class, id, and style attributes. It is through
these attributes that styles are applied to the elements. Unlike p (paragraph) elements, main (main
content) elements, header (header content) elements, etc., div elements and span elements do not
inherently represent anything. div elements are generic content containers for flow content and span
elements are generic containers of phrasing content.
Flow and Phrasing Content
Phrasing content is content that can fit inside a sentence: images, emphasized text, links (usually),
etc. Flow content is content that cannot fit inside a sentence: headings, tables, sections, etc.
For more information on content categories, see https://developer.mozilla.org/en-
US/docs/Web/HTML/Content_categories.
The following demo shows how you can apply styles do div and span elements:
LESSON 8: Crash Course in CSS | 153
EVALUATION COPY: Not to be used in class.

---

Demo 8.7: CrashCourse/Demos/div-and-span.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link href="../normalize.css" rel="stylesheet">6.
<style>7.
div {8.
border-color: blue;9.
border-style: groove;10.
border-width: 2em;11.
font-family: Verdana;12.
font-size: 1em;13.
padding: .5em;14.
}15.
16.
span {17.
color: red;18.
font-style: italic;19.
}20.
</style>21.
<title>Div and Span</title>22.
</head>23.
<body class="webucator">24.
<div>25.
<p>26.
All of this text is in a div, and27.
<span>this text is also in a span</span>.28.
</p>29.
</div>30.
</body>31.
</html>32.
This page will render as follows:
154 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

LESSON 8: Crash Course in CSS | 155
EVALUATION COPY: Not to be used in class.

---

# Exercise 11: Styling div and span
### 10 to 20 minutes
In this exercise, you will add class and id attributes to <div> and <span> tags on an already existing
HTML page. Open CrashCourse/Exercises/divs-and-spans.html and CrashCourse/Exer
cises/styles-divs-spans.css in your editor. You will need to modify the HTML page based on
the code in the CSS page. You will not need to modify the CSS page. Your goal is to make the page
render as follows:
There are no step-by-step instructions. Review the rules in the external stylesheet (styles-divs-
spans.css) and apply classes and ids as appropriate.
156 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

LESSON 8: Crash Course in CSS | 157
EVALUATION COPY: Not to be used in class.

---

Solution: CrashCourse/Solutions/divs-and-spans.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link href="../normalize.css" rel="stylesheet">6.
<link href="styles-divs-spans.css" rel="stylesheet">7.
<title>Divs and Spans</title>8.
</head>9.
<body class="webucator">10.
<div id="top-div">11.
<span class="left-span">1</span>12.
<span class="mid-span">2</span>13.
<span class="right-span">3</span>14.
</div>15.
<div id="mid-div">16.
<span class="left-span">4</span>17.
<span class="mid-span">5</span>18.
<span class="right-span">6</span>19.
</div>20.
<div id="bottom-div">21.
<span class="left-span">7</span>22.
<span class="mid-span">8</span>23.
<span class="right-span">9</span>24.
</div>25.
</body>26.
</html>27.
EVALUATION COPY: Not to be used in class.
### ❋
## 8.11. Media Types
Styles can be defined for different media. For example, you may want to style a page one way for viewing
with a browser and a different way for viewing in print. Some possible media types are:
Media List
all
158 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

print
screen
To define the media type for an entire external or embedded stylesheet, the media attribute is added
to the <link> or <style> tag, and assigned the value of a media type. If the media attribute is not
included, the media type defaults to all.
<link href="stylesheet.css" rel="stylesheet" media="screen">
<style media="all">
/* rules */
</style>
It is also possible to target multiple media types within one stylesheet using @media.
@media screen {
/* rules */
}
@media print {
/* rules */
}
@media is a powerful CSS tool. As you will see later, it can be used to target not just the type of media
but also aspects of the user’s device: screen width, screen height, orientation, etc. This is done with
media queries. Media queries allow us to craft pages that are responsive, presenting different layouts
for desktop computers, tablet devices, and smartphones.
The viewport meta tag
You may have noticed that all of our files have a line of code in the head that looks like this:
<meta name="viewport" content="width=device-width,initial-scale=1">
This is called the viewport meta tag and it is used to help pages adjust correctly for all devices.
You should use it on all your web pages. For detailed information, see https://develop
er.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag.
LESSON 8: Crash Course in CSS | 159
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 8.12. Units of Measurement
CSS allows for the use of many different units when specifying property values such as font size, border
size, margins, etc. However, standards have been established for what units to use for different media
types. In these lessons, except where specifically stated, you will be designing for screen.
Note that units of measurement and sizing will be covered throughout these lessons. In this section,
we provide a general overview of the different units of measurement.
### 8.12.1. Absolute vs. Relative Units
Absolute units have a basis in the physical world; however, their actual size on the screen depends on
the resolution and size of the user’s device. When designing for screen, it is standard to use pixels for
absolute units.
Relative units are relative to the size of other things (e.g., window size, font size, container element
size, etc.). When designing for screen, it is standard to use ems, rems, and percentages for relative units.
### 8.12.2. Pixels
Pixels are the only recommended absolute unit to be used when designing for screen. A common
practice is to use pixels to set root font sizes for different screen and window sizes. Root font sizes are
font sizes set on the html or body element. This allows for designs using mostly ems and rems to adjust
between different screen and window sizes because ems and rems are relative to font size.
### 8.12.3. Ems and Rems
You should use ems and rems for almost everything when building responsive designs for screens. The
exception to this rule is height and width, which are more often defined in pixels (for absolute values)
and percentages or viewport units (for relative values). An em is the size of the font size for the current
element or the parent element. For example, if the font-size of the html element is set to 14px, then
for all elements within that html element, 1em is 14px.
160 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

Rems are similar to ems, except for one key difference. The ‘r’ in rem stands for ‘root’ because 1rem is
always equal to the root font size (the font size set for the html element) regardless of what element it
is in. This means 1rem is consistent throughout the page, while 1em is not. Both ems and rems can be
used to accomplish the same things.
The code below illustrates the difference between ems and rems:
Demo 8.8: CrashCourse/Demos/ems-vs-rems.html
<!DOCTYPE HTML>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link href="../normalize.css" rel="stylesheet">6.
<style>7.
/* Tighten vertical spacing of headings. */8.
h1,9.
h2,10.
h3 {11.
margin-bottom: .2rem;12.
margin-top: .2rem;13.
}14.
</style>15.
<title>Ems vs Rems</title>16.
</head>17.
<body class="webucator">18.
<h1>Using em</h1>19.
<h2 style="margin-left: 2em;">Subtitle 1</h2>20.
<h3 style="margin-left: 2em;">Subtitle 2</h3>21.
22.
<hr>23.
24.
<h1>Using rem</h1>25.
<h2 style="margin-left: 2rem;">Subtitle 1</h2>26.
<h3 style="margin-left: 2rem;">Subtitle 2</h3>27.
</body>28.
</html>29.
The code above will render the following:
LESSON 8: Crash Course in CSS | 161
EVALUATION COPY: Not to be used in class.

---

Notice that “Subtitle 1” and “Subtitle 2” do not line up in the Using em section, but do line up in the
Using rem section. This is because the ems are relative to the font sizes of their h2 and h3 elements,
while the rems are not:
2em = twice the size of the inherited font.
2rem = twice the size of the base font.
### 8.12.4. Percentages
Percentages are most often used to create flexible layouts that change to fit the size of the browser
window. When specifying a value such as width or height in percentages, the percentage is relative
to the size of the containing element. For font-size, percentages work the same as ems. 100% is equal
to the inherited font size, so 100% is essentially 1em when specifying font size. It is most common to
use percentages to specify values like width and height to create “fluid” boxes that grow and shrink
to fit within the browser window.
### 8.12.5. Other Units
Units like inches (in), centimeters (cm), millimeters (mm), points (pt), and picas (pc) are absolute
measurements. They are typically utilized in print design due to their consistency in physical dimensions.
162 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

For screen design, you may encounter viewport-relative units that adapt to the size of the viewport,
which is the visible area of a browser window. The units vw (viewport width) and vh (viewport height)
represent percentages of the viewport’s dimensions. Specifically, vw corresponds to 1% of the viewport’s
width, while vh is 1% of its height.
1. vw equals 1/100th of the viewport’s width.
2. vh equals 1/100th of the viewport’s height.
3. vmax is sized relative to the larger of the viewport’s dimensions, whether width or height.
4. vmin is sized relative to the smaller of the viewport’s dimensions.
These viewport units are valuable for creating responsive designs that adjust to different screen sizes.
Although not as commonly used as pixels or percentages for screen design, viewport units are gaining
traction.
If you would like to play with the different CSS units to see how they compare on a screen, open
CrashCourse/Demos/units-of-measurement.html (shown below) in your browser:
LESSON 8: Crash Course in CSS | 163
EVALUATION COPY: Not to be used in class.

---

CSS Values and Units
For even more detailed information on CSS values and units see https://developer.mozil
la.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units.
164 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 8.13. Inheritance
By default, all CSS properties are either inherited or non-inherited properties. This difference
determines what happens when a property for an element goes unspecified.
If an inherited property for an element goes unspecified, then that element will inherit the value from
its parent element. A common inherited property is font-size:
Demo 8.9: CrashCourse/Demos/inherited.html
<!DOCTYPE HTML>1.
<html>2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link href="../normalize.css" rel="stylesheet">6.
<style>7.
p {8.
font-size: 20px;9.
}10.
</style>11.
<title>Inherited Properties</title>12.
</head>13.
<body class="webucator">14.
<p>This is a paragraph element with a15.
<strong>strong element</strong> within it.</p>16.
</body>17.
</html>18.
The above code will render the following:
LESSON 8: Crash Course in CSS | 165
EVALUATION COPY: Not to be used in class.

---

Notice that the strong element has the same font size as the p element, even though font-size was
not specified for it.
If a non-inherited property for an element goes unspecified, then that element will get the initial
(default) value of that property. A common non-inherited property is border:
Demo 8.10: CrashCourse/Demos/non-inherited.html
<!DOCTYPE HTML>1.
<html>2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link href="../normalize.css" rel="stylesheet">6.
<style>7.
p {8.
border: 0.2rem solid black;9.
}10.
</style>11.
<title>Non-Inherited Properties</title>12.
</head>13.
<body class="webucator">14.
<p>This is a paragraph element with a15.
<strong>strong element</strong> within it.</p>16.
</body>17.
</html>18.
The above code will render the following:
Notice that the strong element does not also have its own border. This is because the initial value for
border is none and border is not an inherited property.
### 8.13.1. The inherit Value
You can force a property to inherit the value of its parent by setting its value to inherit.
The inherit property is most often used to override other rules, as illustrated in the following demo:
166 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

Demo 8.11: CrashCourse/Demos/inherit-styles.css
h2 {1.
color: blue;2.
}3.
4.
article h2 {5.
color: inherit;6.
}7.
8.
#article-red {9.
color: red;10.
}11.
12.
#article-green {13.
color: green;14.
}15.
16.
#article-purple {17.
color: purple;18.
}19.
LESSON 8: Crash Course in CSS | 167
EVALUATION COPY: Not to be used in class.

---

Demo 8.12: CrashCourse/Demos/inherit.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1>inherit</h1>11.
<header>12.
<h2>This is the Header</h2>13.
<p>This is a paragraph.</p>14.
</header>15.
<article id="article-red">16.
<h2>Article Red</h2>17.
<p>This is a paragraph.</p>18.
</article>19.
<article id="article-green">20.
<h2>Article Green</h2>21.
<p>This is a paragraph.</p>22.
</article>23.
<article id="article-purple">24.
<h2>Article Purple</h2>25.
<p>This is a paragraph.</p>26.
</article>27.
<footer>28.
<h2>This Is the Footer</h2>29.
<p>This is a paragraph.</p>30.
</footer>31.
</body>32.
</html>33.
The above code will render the following:
27
27. If you are reading this in black and white, be sure to open the page in your browser.
168 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

Notice that this rule says that all h2 elements should be blue:
h2 {
color: blue;
}
This rule would normally trump inheritance. In other words, by default the h2 elements would inherit
the color of their parent element, but the rule above overrides that, specifying that all h2 elements
should be blue.
LESSON 8: Crash Course in CSS | 169
EVALUATION COPY: Not to be used in class.

---

But in the result, the h2 elements in the article elements are not blue. Why?
Because this more specific rule says that h2 elements within article elements should inherit the color
property from their parent elements:
article h2 {
color: inherit;
}
## Conclusion
Cascading Style Sheets provide a far better way of formatting HTML pages than the traditional use of
HTML tags. In this lesson, you have developed a foundation for creating and applying CSS rules.
170 | LESSON 8: Crash Course in CSS
EVALUATION COPY: Not to be used in class.

---

# LESSON 9
# CSS Fonts
EVALUATION COPY: Not to be used in class.
Topics Covered
font-family
@font-face.
font-size
font-style
font-variant
font-weight
line-height
Shorthand properties.
font
## Introduction
In this lesson, you will learn to use CSS to modify font properties. You will also learn to work with
CSS shorthand properties.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 9: CSS Fonts | 171
EVALUATION COPY: Not to be used in class.

---

## 9.1. font-family
The font-family property is used in CSS to specify the font applied to an element. You can specify
by font name or font category.
### 9.1.1. Specifying by Font Name
When you specify a font by font name, the browser will look for the named font on the end user’s
computer. If it finds it, the text will be displayed in that font. For example, the following rule would
make the font of all <p> tags Arial:
p {
font-family: Arial;
}
If the Arial font were not found on the end user’s computer, the browser would display a default font.
If you are concerned that the font name you want to use might not be found on a user’s computer,
you can provide a list of options.
p {
font-family: Arial, Helvetica;
}
In this case, the browser will first look for Arial. If it doesn’t find Arial, it will then look for Helvetica.
### 9.1.2. Specifying Font by Category
When you specify a font by category, the browser will use the font the user’s computer specifies for
that category. For example, for monospace, the computer might specify Courier. Some common font
family categories are listed below:
cursive
fantasy
monospace
sans-serif
serif
172 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

To be extra safe, designers often specify a couple specific options followed by a font family category,
like so:
p {
font-family: Arial, Helvetica, sans-serif;
}
This way, if neither Arial nor Helvetica is found, the browser at least knows to use some sans-serif font.
The following code samples illustrate how font-family works:
Demo 9.1: Fonts/Demos/font-family-styles.css
#cursive-div {1.
font-family: 'Cool Linked Font', cursive;2.
}3.
4.
#fantasy-div {5.
font-family: 'Cool Linked Font', fantasy;6.
}7.
8.
#monospace-div {9.
font-family: 'Courier New', monospace;10.
}11.
12.
#sans-serif-div {13.
font-family: Tahoma, Verdana, Arial, sans-serif;14.
}15.
16.
#serif-div {17.
font-family: Times, 'Times New Roman', Georgia, serif;18.
}19.
Notice that #cursive-div and #fantasy-div both have a ‘Cool Linked Font’ listed before their
generic family names. Cursive and fantasy fonts are not as popular or as widely supported as the other
three, so it is common to load your own fonts for these two font families.
Also notice that fonts that have multi-word names (e.g., Times New Roman) should be contained in
either single or double quotes.
Here is an HTML page that uses the stylesheet shown above:
LESSON 9: CSS Fonts | 173
EVALUATION COPY: Not to be used in class.

---

Demo 9.2: Fonts/Demos/font-family.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<div id="cursive-div">11.
<h3>Cursive</h3>12.
<p>This paragraph is in a cursive font.</p>13.
</div>14.
<div id="fantasy-div">15.
<h3>Fantasy</h3>16.
<p>This paragraph is in a fantasy font.</p>17.
</div>18.
<div id="monospace-div">19.
<h3>Monospace</h3>20.
<p>This paragraph is in a monospace font.</p>21.
</div>22.
<div id="sans-serif-div">23.
<h3>Sans-serif</h3>24.
<p>This paragraph is in a sans-serif font.</p>25.
</div>26.
<div id="serif-div">27.
<h3>Serif</h3>28.
<p>This paragraph is in a serif font.</p>29.
</div>30.
</body>31.
</html>32.
The code above will render as follows:
174 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

### 9.1.3. Web-Safe Fonts
Web-safe fonts are fonts that are commonly installed across various operating systems and devices,
ensuring that the text on a website appears consistently for all users. When you use a web-safe font,
you can be more confident that what you see during the design process is what your audience will see
when they visit your site.
Why Use Web-Safe Fonts?
1. Consistency: Using web-safe fonts ensures that your text appears the same way across different
platforms and browsers.
2. Load Time: Because these fonts are pre-installed, they don’t need to be downloaded, which
can improve page load times.
3. Readability: Web-safe fonts are generally easy to read, which enhances user experience.
LESSON 9: CSS Fonts | 175
EVALUATION COPY: Not to be used in class.

---

Common Web-Safe Fonts
Here are some commonly used web-safe fonts:
1. Arial
2. Times New Roman
3. Georgia
4. Verdana
5. Courier New
Limitations
1. Limited Choices: There are only a limited number of web-safe fonts, which can be restrictive
for design.
2. Styling: Some web-safe fonts may not support different styles like bold or italic.
To overcome these limitations, web designers often use web fonts, which are downloaded from the
web as needed. However, these can impact page load times and may not be available if the user is
offline.
Do Web-Safe Fonts Really Matter?
In today’s web design landscape, the importance of web-safe fonts is diminishing. With
advancements in web font technologies and the widespread adoption of these fonts, designers
have more flexibility than ever in their typography choices. While web-safe fonts ensure maximum
compatibility and can be useful in specific scenarios, modern web development increasingly
leverages web fonts for their versatility and broad design options. When choosing fonts, you
should balance the need for creative expression with performance and accessibility considerations.
EVALUATION COPY: Not to be used in class.
### ❋
176 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

## 9.2. @font-face
The CSS @font-face rule enables the loading of a font file, and thus offers us the ability to use any
font, not just those our users happen to have loaded on their computer or device. The @font-face
rule is defined in the W3C’s CSS Fonts Module Level 3
28 
specification. As the W3C specification
states:
The @font-face rule allows for linking to fonts that are automatically fetched and
activated when needed. This allows authors to select a font that closely matches the design
goals for a given page rather than limiting the font choice to a set of fonts available on a
given platform. A set of font descriptors define the location of a font resource, either
locally or externally, along with the style characteristics of an individual face. Multiple
@font-face rules can be used to construct font families with a variety of faces. Using
CSS font matching rules, a user agent can selectively load only those faces that are needed
for a given piece of text.
In the CSS, you define your own font-family and associate it with a font file:
29
@font-face {
font-family: Gentium;
src: url('Gentium.ttf');
}
A subsequent CSS rule could style a given element with the newly defined font-family:
div.newsitem {
font-family: Gentium;
}
Browsers will download the specified font file and will use it to render the designated content.
Different browsers support different font file formats. To address these differences, the specification
for the @font-face rule allows for a series of font files, with format hints to aid browsers in selecting
the appropriate file for the font:
28. https://www.w3.org/TR/css-fonts-3/
29. We will cover how to get font files soon.
LESSON 9: CSS Fonts | 177
EVALUATION COPY: Not to be used in class.

---

@font-face {
font-family: bodytext;
src: url(ideal-sans-serif.woff) format("woff"),
url(basic-sans-serif.ttf) format("opentype");
}
Here’s a list of the formats supported by the W3C specification:
30
1. OpenType
Format string: opentype
Extension(s): .ttf, .otf
2. TrueType
Format string: truetype
Extension(s): .ttf
3. WOFF (Web Open Font Format)
Format string: woff
Extension(s): .woff
4. WOFF 2.0
Format string: woff2
Extension(s): .woff2
In the @font-face rule, you can specify additional properties, such as font-style and font-weight,
which we will cover soon.
CSS Fonts Module Level 4
The CSS Fonts Module Level 4
31 
provides further enhancements and features for advanced
typography control.
30. https://www.w3.org/TR/2018/REC-css-fonts-3-20180920/#fontformats
31. https://www.w3.org/TR/css-fonts-4/
178 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

### 9.2.1. Getting Fonts
Let’s look at a typical example, in which you will download the font “Great Vibes” from Font Squirrel
32
,
a popular resource for free fonts and then convert it into several different file font formats:
1. Search https://www.fontsquirrel.com for “Great Vibes”:
Click the DOWNLOAD OTF button to download the zip file containing the font. You can
save it wherever you like.
2. Unzip the file. You will see a GreatVibes-Regular.otf file.
3. To convert the GreatVibes-Regular.otf to other file types, use the Font Squirrel Webfont
Generator.
33
4. Upload the OpenType file you just downloaded and choose four font formats to convert it
to. Select the “Expert” option as the other options do not allow for the specific selection of
font formats:
32. https://www.fontsquirrel.com/
33. https://www.fontsquirrel.com/tools/webfont-generator
LESSON 9: CSS Fonts | 179
EVALUATION COPY: Not to be used in class.

---

5. At the bottom of the generator, check the agreement box and click the DOWNLOAD YOUR
KIT button:
You can save it wherever you like.
6. Unzip the file. Among its contents, you will see:
greatvibes-regular-demo.html – a demo HTML file using the new font.
180 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

stylesheet.css – A stylesheet demonstrating how to create the @font-face rule:
@font-face {
font-family: 'great_vibesregular';
src: url('greatvibes-regular-webfont.eot');
src: url('greatvibes-regular-webfont.eot?#iefix') format('embedded-
opentype'),
url('greatvibes-regular-webfont.woff2') format('woff2'),
url('greatvibes-regular-webfont.woff') format('woff');
font-weight: normal;
font-style: normal;
}
Three font files:
greatvibes-regular-webfont.eot
greatvibes-regular-webfont.woff
greatvibes-regular-webfont.woff2
7. Open greatvibes-regular-demo.html to see the demo, which illustrates the use of “Great
Vibes” in different sizes, shows a sample page that uses only the “Great Vibes” font, and
provides charts showing special characters and glyphs.
Internet Explorer Bug
In the generated stylesheet, notice the ?#iefix appended to the .eot file. This tricks versions
of Internet Explorer to get around a known bug for not loading multiple versions of the font
file.
We made a few edits to the generated stylesheet and attached it to a simple HTML page as you can
see in the samples below:
LESSON 9: CSS Fonts | 181
EVALUATION COPY: Not to be used in class.

---

Demo 9.3: Fonts/Demos/font-face-styles.css
@font-face {1.
font-family: 'GreatVibes';2.
src: url('fonts/greatvibes-regular-webfont.eot');3.
src: url('fonts/greatvibes-regular-webfont.eot?#iefix')4.
format('embedded-opentype'),5.
url('fonts/greatvibes-regular-webfont.woff2')6.
format('woff2'),7.
url('fonts/greatvibes-regular-webfont.woff')8.
format('woff'),9.
url('fonts/greatvibes-regular-webfont.ttf')10.
format('truetype');11.
font-weight: normal;12.
font-style: normal;13.
}14.
15.
p {16.
font-family: GreatVibes;17.
}18.
We changed the font name from what the generated stylesheet suggested, and we adjusted the paths
for the urls. In the Fonts/Demos folder, we moved all of our “Great Vibes” font files into a folder
called fonts, and we deleted the unnecessary generated files (e.g., the demo file, the original stylesheet,
etc.).
Finally, after the @font-face rule, we used the “Great Vibes” font to style the first paragraph of the
U.S. Declaration of Independence.
Here’s the HTML:
182 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

Demo 9.4: Fonts/Demos/font-face.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1><code>@font-face</code></h1>11.
<p>When in the Course of human events, it becomes necessary12.
for one people to dissolve the political bands which have13.
connected them with another, and to assume among the powers14.
of the earth, the separate and equal station to which the15.
Laws of Nature and of Nature's God entitle them, a decent16.
respect to the opinions of mankind requires that they should17.
declare the causes which impel them to the separation.</p>18.
</body>19.
</html>20.
And here is the resulting page:
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 9: CSS Fonts | 183
EVALUATION COPY: Not to be used in class.

---

## 9.3. font-size
font-size is an unexpectedly complicated CSS property. It is difficult to quickly grasp the different
font-size units, how they relate to each other, and how they change depending on the font family.
It will require some practice and experimentation to get used to.
### 9.3.1. Relative font-size Terms
In addition to all the units of measurement we discussed in the Crash Course lesson (see page 160),
font size can be defined using the following terms:
xx-large
x-large
large
medium
small
x-small
xx-small
smaller
larger
The terms xx-small to xx-large are absolute-size keywords relative to the user’s default font size
(medium). The terms smaller and larger are relative-size keywords, meaning that they change the
font size of an element relative to its parent element’s font size. The following examples illustrate these
terms:
184 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

Demo 9.5: Fonts/Demos/font-size-styles.css
.biggest {1.
font-size: xx-large;2.
}3.
4.
.second-biggest {5.
font-size: x-large;6.
}7.
8.
.third-biggest {9.
font-size: large;10.
}11.
12.
.medium {13.
font-size: medium;14.
}15.
16.
.third-smallest {17.
font-size: small;18.
}19.
20.
.second-smallest {21.
font-size: x-small;22.
}23.
24.
.smallest {25.
font-size: xx-small;26.
}27.
28.
.larger {29.
font-size: larger;30.
}31.
32.
.smaller {33.
font-size: smaller;34.
}35.
LESSON 9: CSS Fonts | 185
EVALUATION COPY: Not to be used in class.

---

Demo 9.6: Fonts/Demos/font-size.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<p class="biggest">This text is xx-large.</p>11.
<p class="second-biggest">This text is x-large.</p>12.
<p class="third-biggest">This text is large.</p>13.
<p class="medium">This text is medium.</p>14.
<p class="third-smallest">This text is small.</p>15.
<p class="second-smallest">This text is x-small.</p>16.
<p class="smallest">This text is xx-small.</p>17.
<div id="compare-div" class="medium">18.
<p>This text starts medium, and then gets19.
<span class="larger">larger and20.
<span class="larger">larger and21.
<span class="larger">larger and22.
<span class="larger">even larger.23.
</span>24.
</span>25.
</span>26.
</span>27.
</p>28.
<p>This text starts medium, and then gets29.
<span class="smaller">smaller and30.
<span class="smaller">smaller and31.
<span class="smaller">smaller and32.
<span class="smaller">even smaller.33.
</span>34.
</span>35.
</span>36.
</span>37.
</p>38.
</div>39.
</body>40.
</html>41.
The code above will output the following:
186 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

Visualizing Ems and Rems
For a visual representation of fonts using ems and rems, open CrashCourse/Demos/units-
of-measurement.html in your browser.
### 9.3.2. Best Practices
Most experts agree that font size should be defined in relative units (e.g., em, rem, or %) or in terms
(e.g., large, small, etc.). This is because absolute font sizes can make pages inaccessible to people
who have difficulty seeing. In most browsers, a user can change both the “zoom” of the page and,
separately, the default font size. While “zooming” will increase the size of all elements (font included)
LESSON 9: CSS Fonts | 187
EVALUATION COPY: Not to be used in class.

---

on the page, changing the default browser font size won’t have any effect on fonts whose size in CSS
is specified using absolute, rather than relative, units.
EVALUATION COPY: Not to be used in class.
### ❋
## 9.4. font-style
Currently, the only use for font-style is to italicize (and unitalicize) text. The values are listed below:
normal
italic
oblique
However, italic and oblique are displayed in the same way. Since italic has better support, you
should use it. For more on font-style, see https://developer.mozilla.org/en-
US/docs/Web/CSS/font-style.
EVALUATION COPY: Not to be used in class.
### ❋
## 9.5. font-variant
The most common and well-supported use of font-variant is to turn lowercase letters into small
caps. The values are listed below:
normal
small-caps
The screenshot below shows an h1 tag with small-caps:
34
34. 
The file used for this screenshot is Fonts/Demos/font-variant.html.
188 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

font-variant is actually a shorthand property (more on shorthand properties soon) for several
longhand properties, but those are rarely used and poorly supported, so you shouldn’t worry about
them. For more details, see https://developer.mozilla.org/en-US/docs/Web/CSS/font-
variant.
EVALUATION COPY: Not to be used in class.
### ❋
## 9.6. font-weight
The weight of a font determines how thick (or bold) it is. Possible values are:
Any number between 1 and 1000
bold
bolder
lighter
normal
The numeric values are used for fonts that can have many different degrees of boldness. Most fonts,
however, are either bold or normal (not bold). bold is the same as 700 and normal is the same as
400. bolder and lighter work similarly to larger and smaller for font-size.
Here is a stylesheet with rules setting font-weight for elements on the page:
LESSON 9: CSS Fonts | 189
EVALUATION COPY: Not to be used in class.

---

Demo 9.7: Fonts/Demos/font-weight-styles.css
html {1.
font-family:'Segoe UI', 'Open Sans',2.
'Helvetica Neue', sans-serif;3.
}4.
#div1 {5.
font-weight: normal;6.
}7.
#div2 {8.
font-weight: bold;9.
}10.
#div3 {11.
font-weight: 400;12.
}13.
#div4 {14.
font-weight: 1000;15.
}16.
.bolder {17.
font-weight: bolder;18.
}19.
.lighter {20.
font-weight: lighter;21.
}22.
#li1 {23.
font-weight: 100;24.
}25.
#li2 {26.
font-weight: 400;27.
}28.
#li3 {29.
font-weight: 600;30.
}31.
#li4 {32.
font-weight: 700;33.
}34.
#li5 {35.
font-weight: 900;36.
}37.
We used the Segoe UI font because it has precise control over its weight. If we were to use a font that
didn’t have this control, like Times, then each element would only render either bold or normal.
And here is an HTML page that uses this stylesheet:
190 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

Demo 9.8: Fonts/Demos/font-weight.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<div id="div1">11.
<p>This is a normal paragraph.</p>12.
</div>13.
<div id="div2">14.
<p>This is a bold paragraph.</p>15.
</div>16.
<div id="div3">17.
<p>This is normal, and18.
<span class="bolder">this is bolder, and19.
<span class="bolder">this is even bolder.20.
</span>21.
</span>22.
</p>23.
</div>24.
<div id="div4">25.
<p>This is very bold, and26.
<span class="lighter">this is lighter, and27.
<span class="lighter">this is even lighter.28.
</span>29.
</span>30.
</p>31.
</div>32.
<ol>33.
<li id="li1">100 weight</li>34.
<li id="li2">400 weight</li>35.
<li id="li3">600 weight</li>36.
<li id="li4">700 weight</li>37.
<li id="li5">900 weight</li>38.
</ol>39.
</body>40.
</html>41.
The code above will render the following:
LESSON 9: CSS Fonts | 191
EVALUATION COPY: Not to be used in class.

---

font-weight Values
In early versions of font-weight, only intervals of 100 (100 to 900) were accepted, so if you
use a more exact number value, make sure both the font you’re using and your target browsers
support that value. For more on font-weight, see https://developer.mozilla.org/en-
US/docs/Web/CSS/font-weight.
EVALUATION COPY: Not to be used in class.
### ❋
## 9.7. line-height
line-height determines the amount of vertical space used for lines, most commonly in text.
Although there are several options for line-height values, the best option is to use a unit-less number.
This number is relative to the font-size of the text. For example, if you set line-height to 1, there
will be no space between the text on a line and the text on lines before and after that line.
192 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

The default line-height value is approximately 1.2. You can set that specifically using:
line-height: 1.2;
Or you can set it using:
line-height: normal;
The latter will set the line-height to the exact default value, which is dependent on the browser and
the font.
To add more space between lines, set line-height to a value higher than 1.2 and to make lines
tighter, set it to a value less than 1.2.
Other Values of line-height
While line-height can also take a length with units (e.g., em or px), we recommend you stick
with a unit-less number.
The following samples shows some different line heights:
LESSON 9: CSS Fonts | 193
EVALUATION COPY: Not to be used in class.

---

Demo 9.9: Fonts/Demos/line-height-styles.css
html {1.
font-size: 16px;2.
}3.
4.
#normal {5.
line-height: normal;6.
}7.
8.
#p1 {9.
line-height: 1;10.
}11.
12.
#p2 {13.
line-height: 1.1;14.
}15.
16.
#p3 {17.
line-height: 1.2;18.
}19.
20.
#p4 {21.
line-height: 1.3;22.
}23.
24.
#p5 {25.
line-height: 1.5;26.
}27.
28.
#p6 {29.
line-height: 2;30.
}31.
194 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

Demo 9.10: Fonts/Demos/line-height.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<p id="normal">11.
line-height: normal; line-height: normal; line-height: normal;12.
line-height: normal; line-height: normal; line-height: normal;13.
line-height: normal; line-height: normal; line-height: normal;14.
</p>15.
<p id="p1">16.
line-height: 1; line-height: 1; line-height: 1; line-height: 1;17.
line-height: 1; line-height: 1; line-height: 1; line-height: 1;18.
line-height: 1; line-height: 1; line-height: 1; line-height: 1;19.
</p>20.
<p id="p2">21.
line-height: 1.1; line-height: 1.1; line-height: 1.1;22.
line-height: 1.1; line-height: 1.1; line-height: 1.1;23.
line-height: 1.1; line-height: 1.1; line-height: 1.1;24.
</p>25.
<p id="p3">26.
line-height: 1.2; line-height: 1.2; line-height: 1.2;27.
line-height: 1.2; line-height: 1.2; line-height: 1.2;28.
line-height: 1.2; line-height: 1.2; line-height: 1.2;29.
</p>30.
<p id="p4">31.
line-height: 1.3; line-height: 1.3; line-height: 1.3;32.
line-height: 1.3; line-height: 1.3; line-height: 1.3;33.
line-height: 1.3; line-height: 1.3; line-height: 1.3;34.
</p>35.
<p id="p5">36.
line-height: 1.5; line-height: 1.5; line-height: 1.5;37.
line-height: 1.5; line-height: 1.5; line-height: 1.5;38.
line-height: 1.5; line-height: 1.5; line-height: 1.5;39.
</p>40.
<p id="p6">41.
line-height: 2; line-height: 2; line-height: 2; line-height: 2;42.
line-height: 2; line-height: 2; line-height: 2; line-height: 2;43.
line-height: 2; line-height: 2; line-height: 2; line-height: 2;44.
</p>45.
</body>46.
</html>47.
The code above will render the following:
LESSON 9: CSS Fonts | 195
EVALUATION COPY: Not to be used in class.

---

For more on line-height, see https://developer.mozilla.org/en-US/docs/Web/CSS/line-
height.
196 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 9.8. font
font is a shorthand property that encompasses the properties we have discussed in this lesson.
Shorthand Properties
Shorthand properties set multiple CSS properties at once, allowing for more concise, more
readable stylesheets that save time and space. Using shorthand properties instead of longhand
properties also has the benefit of reducing file size, which increases download speed.
An important thing to note about shorthand properties is that any unspecified values will be set
to their default values.
The syntax for font is shown below. The highlighted properties are required:
font: font-style
font-variant
font-weight
font-stretch
font-size/line-height
font-family;
Some notes:
1. font-stretch, while well supported by browsers, only works with a small number of fonts.
35
2. font-style, font-variant, font-weight, and font-stretch are optional and may be
written in any order before font-size.
3. line-height is also optional, but it must be written immediately after font-size separated
by a forward slash (/).
35. See https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch.
LESSON 9: CSS Fonts | 197
EVALUATION COPY: Not to be used in class.

---

4. If one of the optional values is not included, it will be set to the default value, overriding any
rules with lower precedence.
The code below illustrates the use of font:
Demo 9.11: Fonts/Demos/font-styles.css
#div1 h1 {1.
font: italic small-caps bold 2em Georgia, Times,2.
'Times New Roman', sans-serif;3.
}4.
5.
#div1 p {6.
font: 1em/1.2 Arial, Helvetica, sans-serif;7.
}8.
9.
#div2 h1 {10.
font-style: italic; /* gets overridden */11.
font-variant: small-caps; /* gets overridden */12.
font: 2.5em 'Gill Sans', serif;13.
}14.
15.
#div2 p {16.
font: 0.9em/1.5 cursive;17.
}18.
Notice that the font-style and font-variant declarations written in the #div2 h1 rule will not
be applied because they were later overridden by defaults in the font declaration, even though those
defaults are not explicitly stated.
198 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

Demo 9.12: Fonts/Demos/font.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<div id="div1">11.
<h1>Div 1</h1>12.
<p>13.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.14.
Maecenas euismod tellus lorem, vitae convallis nulla15.
facilisis vel. Nam blandit vulputate elit, ac accumsan16.
elit suscipit vel. Phasellus nec metus libero.17.
</p>18.
</div>19.
<div id="div2">20.
<h1>Div 2</h1>21.
<p>22.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.23.
Maecenas euismod tellus lorem, vitae convallis nulla24.
facilisis vel. Nam blandit vulputate elit, ac accumsan25.
elit suscipit vel. Phasellus nec metus libero.26.
</p>27.
</div>28.
</body>29.
</html>30.
The code above will render the following:
LESSON 9: CSS Fonts | 199
EVALUATION COPY: Not to be used in class.

---

For more on font, see https://developer.mozilla.org/en-US/docs/Web/CSS/font.
200 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

# Exercise 12: Styling Fonts
### 25 to 40 minutes
In this exercise, you will modify an HTML page by applying the font properties you just learned.
1. Open Fonts/Exercises/index.html in your editor. You will see the home page for a
website called Runners Home.
2. Create an external stylesheet called styles.css and link to it from index.html.
3. Using your new knowledge of font properties, add some styles to this page. The object of this
exercise is to practice using the font properties covered in this lesson. You are also welcome
to download a font and use @font-face.
4. When you are done, open index.html in your browser to see the results. You are welcome
to go back to the code and continue to work.
You can design it however you like, or you can try to make it look something like this:
LESSON 9: CSS Fonts | 201
EVALUATION COPY: Not to be used in class.

---

202 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

LESSON 9: CSS Fonts | 203
EVALUATION COPY: Not to be used in class.

---

Solution: Fonts/Solutions/styles.css
html {1.
font-size: 16px;2.
}3.
4.
body {5.
font: 1rem/1.3 Verdana, Geneva, Tahoma, sans-serif;6.
}7.
8.
#welcome {9.
font-size: larger;10.
}11.
12.
article h2 {13.
font-variant: small-caps;14.
}15.
16.
article p {17.
line-height: 2;18.
}19.
20.
aside label {21.
font-weight: bold;22.
}23.
24.
footer {25.
font-size: smaller;26.
font-style: italic;27.
}28.
## Conclusion
In this lesson, you have learned to use CSS font properties.
204 | LESSON 9: CSS Fonts
EVALUATION COPY: Not to be used in class.

---

# LESSON 10
# Color and Opacity
EVALUATION COPY: Not to be used in class.
Topics Covered
color
opacity
## Introduction
In this lesson, you will learn to add color and opacity to your HTML pages.
EVALUATION COPY: Not to be used in class.
### ❋
## 10.1. About Color and Opacity
CSS makes it really easy to add color to your HTML pages. Almost every element can have color added
to it, and CSS provides multiple methods to do so. For a comprehensive list of things in CSS that can
have color, see Mozilla’s list of Things that can have color
36
.
The opacity of an element is its level of opaqueness: an element with zero opacity is fully transparent.
Everything that can be colored, can also have its opacity changed, and opacity can additionally affect
images, which colors do not affect. Opacity and color go hand in hand, and there are several ways to
apply color and opacity at the same time.
36. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Applying_color#things_that_can_have_color
LESSON 10: Color and Opacity | 205
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 10.2. Color and Opacity Values
There are two main color models used to create colors in CSS. The first is the RGB color model, which
combines red, green, and blue in different amounts to create a wide range of colors. The second is the
HSL color model, which creates colors based on hue, lightness, and saturation. RGB is more popular
and more commonly used.
Picking RGB and HSL Colors
Guessing RGB and HSL colors by their notations, which are explained below, is extremely
difficult, and thankfully, unnecessary. There are plenty of excellent tools for selecting RGB and
HSL colors from color pallettes, such as Mozilla’s Color picker tool
37
.
Opacity is most commonly expressed as a percentage from 0% (invisible) to 100% (opaque), and/or a
number from 0.0 (invisible) to 1.0 (opaque).
### 10.2.1. Color Keywords
CSS recognizes over a hundred color keywords as acceptable color values. Examples include standard
colors you would expect, such as blue, green, red, black, silver, and white; and some more fun
color names, such as blanchedalmond, firebrick, floralwhite, and lawngreen. For a full list of
accepted color keywords see Mozilla’s List of color keywords
38
### 10.2.2. RGB Hexadecimal Notation
RGB hexadecimal notation is the most commonly used type of color value. Hexadecimal digits are
used to represent the amounts of each color component (red, green, and blue) ranging from 0 (00) to
255 (ff). The syntax for hexadecimal notation is below:
37. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool
38. https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords
206 | LESSON 10: Color and Opacity
EVALUATION COPY: Not to be used in class.

---

#rrggbb /* longhand */
#rgb /* shorthand */
Hexadecimal Numbers
The numbering system we are all used to is base 10. To make that work, we have ten single-digit
characters: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.
The hexidecimal system uses base 16. So, there are sixteen single-digit characters: 0, 1, 2, 3, 4,
5, 6,7, 8, 9, a, b, c, d, e, and f.
In base 10, 90 is 10 greater than 80. In base 16, 90 is 16 greater than 80, and a0 is 16 greater
than 90. You count it like this:
0 1 2 3 4 5 6 7 8 9 a b c d e f
10 11 12 13 14 15 16 17 18 19 1a 1b 1c 1d 1e 1f
20 21 22 23 24 25 26 27 28 29 2a 2b 2c 2d 2e 2f
30 31 32 33 34 35 36 37 38 39 3a 3b 3c 3d 3e 3f
40 41 42 43 44 45 46 47 48 49 4a 4b 4c 4d 4e 4f
50 51 52 53 54 55 56 57 58 59 5a 5b 5c 5d 5e 5f
60 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f
70 71 72 73 74 75 76 77 78 79 7a 7b 7c 7d 7e 7f
80 81 82 83 84 85 86 87 88 89 8a 8b 8c 8d 8e 8f
90 91 92 93 94 95 96 97 98 99 9a 9b 9c 9d 9e 9f
a0 a1 a2 a3 a4 a5 a6 a7 a8 a9 aa ab ac ad ae af
b0 b1 b2 b3 b4 b5 b6 b7 b8 b9 ba bb bc bd be bf
c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 ca cb cc cd ce cf
d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 da db dc dd de df
e0 e1 e2 e3 e4 e5 e6 e7 e8 e9 ea eb ec ed ee ef
f0 f1 f2 f3 f4 f5 f6 f7 f8 f9 fa fb fc fd fe ff
In shorthand hexadecimal notation, the six digits are cut down to three, and each digit represents two
of itself. For example, #f03 would be #ff0033. Both of those notations mean that the color is made
from ff of red, 00 of green, and 33 of blue. The result is sort of a rose color.
LESSON 10: Color and Opacity | 207
EVALUATION COPY: Not to be used in class.

---

### 10.2.3. RGB Functional Notation
RGB colors can also be expressed in rgb() functional notation, which takes three parameters (red,
green, and blue). These can either be integers from 0 to 255 or percentages from 0% to 100%. The
syntax for RGB functional notation is:
rgb(red, green, blue)
### 10.2.4. HSL Functional Notation
HSL colors are expressed using the hsl() function notation. The hsl() function notation takes three
parameters:
1. Hue - An angle of the color circle in degrees (deg), radians (rad), gradians (grad), or turns
(turn). If units are omitted, deg are assumed.
A. red = 0° or 360°
B. green = 120°
C. blue = 240°
2. Saturation - A percentage where 100% is completely saturated (full color) and 0% is a shade
of gray.
3. Lightness - A percentage where 100% is white, 50% is “normal” lightness, and 0% is black.
The syntax for hsl() function notation is:
hsl(hue, saturation, lightness)
rgba(), hsla(), and #rgba
Both RGB and HSL functional notations have ways to specify opacity (alpha) at the same time
as color. Along with their respective normal notations (rgb() and hsl()), they also have alpha
notations (rgba() and hsla()) that accept a fourth parameter: alpha, which is expressed either
as a percentage from 0% to 100% or a number between 0.0 and 1.0. These are both well-supported
in modern browsers.
208 | LESSON 10: Color and Opacity
EVALUATION COPY: Not to be used in class.

---

In modern browsers (i.e., not IE), the rgb() and rgba() notations are interchangeable, meaning
that rgb() can also take the alpha parameter.
You can also specify opacity using hexadecimal notation by adding the hexadecimal value for
opacity at the end. For example: #ff0033aa.
EVALUATION COPY: Not to be used in class.
### ❋
## 10.3. color
color is the CSS property used to apply color to the foreground of an element. The most common
example of a “foreground” is just plain old text. See the samples below:
LESSON 10: Color and Opacity | 209
EVALUATION COPY: Not to be used in class.

---

Demo 10.1: ColorAndOpacity/Demos/color-styles.css
#keyword {1.
color: red;2.
}3.
4.
#rgb-longhand {5.
color: #ff0000;6.
}7.
8.
#rgb-shorthand {9.
color: #f00;10.
}11.
12.
#rgb-function-numbers {13.
color: rgb(255, 0, 0);14.
}15.
16.
#rgb-function-percentage {17.
color: rgb(100%, 0%, 0%);18.
}19.
20.
#rgba {21.
color: rgba(255, 0, 0, 0.5);22.
}23.
24.
#hsl-function {25.
color: hsl(0, 100%, 50%);26.
}27.
28.
#hsla {29.
color: hsla(0, 100%, 50%, 50%);30.
}31.
210 | LESSON 10: Color and Opacity
EVALUATION COPY: Not to be used in class.

---

Demo 10.2: ColorAndOpacity/Demos/color-demo.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1>color</h1>11.
<div id="keyword">color: red;</div>12.
<div id="rgb-longhand">color: #ff0000;</div>13.
<div id="rgb-shorthand">color: #f00;</div>14.
<div id="rgb-function-numbers">color: rgb(255, 0, 0);</div>15.
<div id="rgba">color: rgba(255, 0, 0, 0.5);</div>16.
<div id="rgb-function-percentage">color: rgb(100%, 0%, 0%);</div>17.
<div id="hsl-function">color: hsl(0, 100%, 50%);</div>18.
<div id="hsla">color: hsla(0, 100%, 50%, 50%);</div>19.
</body>20.
</html>21.
The code above will render the following:
39
EVALUATION COPY: Not to be used in class.
### ❋
39. If you are reading this in black and white, be sure to open the page in your browser.
LESSON 10: Color and Opacity | 211
EVALUATION COPY: Not to be used in class.

---

## 10.4. opacity
opacity is the CSS property used to set the transparency of an entire element. See the demo below:
Demo 10.3: ColorAndOpacity/Demos/opacity-styles.css
#my-div {1.
/* To make the changes in opacity2.
easier to see, we have added a yellow3.
background color and made the text red */4.
background-color: yellow;5.
color: red;6.
}7.
8.
.invisible {9.
opacity: 0;10.
}11.
12.
.light {13.
opacity: .25;14.
}15.
16.
.medium {17.
opacity: .5;18.
}19.
20.
.heavy {21.
opacity: .75;22.
}23.
24.
.opaque {25.
opacity: 1;26.
}27.
In this demo, opacity was also used to change the transparency of images. This is something that the
color property cannot do as images are not affected by the color property.
212 | LESSON 10: Color and Opacity
EVALUATION COPY: Not to be used in class.

---

Demo 10.4: ColorAndOpacity/Demos/opacity-demo.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1>opacity</h1>11.
<div id="my-div">12.
<p class="invisible">opacity: 0;</p>13.
<p class="light">opacity: .25;</p>14.
<p class="medium">opacity: .5;</p>15.
<p class="heavy">opacity: .75;</p>16.
<p class="opaque">opacity: 1;</p>17.
</div>18.
<img src="images/sun.png" class="invisible">19.
<img src="images/sun.png" class="light">20.
<img src="images/sun.png" class="medium">21.
<img src="images/sun.png" class="heavy">22.
<img src="images/sun.png" class="opaque">23.
</body>24.
</html>25.
The code above will render the following:
LESSON 10: Color and Opacity | 213
EVALUATION COPY: Not to be used in class.

---

214 | LESSON 10: Color and Opacity
EVALUATION COPY: Not to be used in class.

---

# Exercise 13: Adding Color and Opacity to
# Text
### 25 to 40 minutes
In this exercise, you will add color and opacity properties to an HTML file containing three children’s
stories.
1. Open Exercises/stories.html in your editor.
2. Create a CSS file called stories-styles.css and link to it from stories.html.
3. Using CSS, edit the color and opacity of the different elements in stories.html. The object
of this exercise is to practice using the color and opacity properties.
4. When you are done, open stories.html in your browser. You are welcome to go back to
the code and keep working.
You can design it however you like, or you can try to make it look something like: 
40
40. 
The images used in this section are in the public domain (https://commons.wikimedia.org/wiki/Public_domain):
https://commons.wikimedia.org/wiki/File:Cinderella_and_the_Fairy_Godmother.jpg
https://commons.wikimedia.org/wiki/File:Boys_and_Girls_of_Bookland_Alice_in_Wonderland.jpg
https://commons.wikimedia.org/wiki/File:Joshua_Reynolds_-_Cupid_as_Link_Boy.jpg
LESSON 10: Color and Opacity | 215
EVALUATION COPY: Not to be used in class.

---

216 | LESSON 10: Color and Opacity
EVALUATION COPY: Not to be used in class.

---

LESSON 10: Color and Opacity | 217
EVALUATION COPY: Not to be used in class.

---

Solution: ColorAndOpacity/Solutions/stories-styles.css
a {1.
color: red;2.
}3.
4.
a[href='#top'],5.
h1 {6.
color: limegreen;7.
}8.
9.
nav a {10.
color: hsl(300, 20%, 50%);11.
}12.
13.
h2 {14.
font-size: 1.2em;15.
font-style: italic;16.
font-weight: normal;17.
}18.
19.
#cinderella h2 {20.
color: hsl(56, 100%, 45%);21.
}22.
23.
#alice h2 {24.
color: #f60;25.
}26.
27.
#naughtyboy h2 {28.
color: #e96df2;29.
}30.
31.
p {32.
color: rgb(51, 102, 102);33.
font-family: Cambria, Cochin, Georgia, Times, serif;34.
font-size: .9em;35.
}36.
37.
img {38.
opacity: .5;39.
}40.
218 | LESSON 10: Color and Opacity
EVALUATION COPY: Not to be used in class.

---

## Conclusion
In this lesson, you have learned to work with color and opacity in CSS.
LESSON 10: Color and Opacity | 219
EVALUATION COPY: Not to be used in class.

---

220 | LESSON 10: Color and Opacity
EVALUATION COPY: Not to be used in class.

---

# LESSON 11
# CSS Text
EVALUATION COPY: Not to be used in class.
Topics Covered
letter-spacing
text-align
text-decoration
text-indent
text-shadow
text-transform
white-space
word-break
word-spacing
## Introduction
In this lesson, you will learn to use CSS properties for formatting text.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 11: CSS Text | 221
EVALUATION COPY: Not to be used in class.

---

## 11.1. letter-spacing
The letter-spacing property is used to specify the amount of space between letters. The amount
indicated is in addition to the default spacing. The property either takes the keyword normal, which
is the default defined by the current font and/or browser, or a length value. See the following example:
Demo 11.1: CssText/Demos/letter-spacing-styles.css
#normal {1.
letter-spacing: normal;2.
}3.
4.
#wide {5.
letter-spacing: 0.2rem;6.
}7.
8.
#wider {9.
letter-spacing: 0.4rem;10.
}11.
12.
#widest {13.
letter-spacing: 0.6rem;14.
}15.
Demo 11.2: CssText/Demos/letter-spacing.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1>letter-spacing</h1>11.
<div id="normal">letter-spacing: normal;</div>12.
<br>13.
<div id="wide">letter-spacing: 0.2rem;</div>14.
<br>15.
<div id="wider">letter-spacing: 0.4rem;</div>16.
<br>17.
<div id="widest">letter-spacing: 0.6rem;</div>18.
</body>19.
</html>20.
The code above will render the following:
222 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 11.2. text-align
The text-align property is used to specify how inline content should be aligned horizontally within
a block. The values are listed below:
left
right
center
justify
LESSON 11: CSS Text | 223
EVALUATION COPY: Not to be used in class.

---

Demo 11.3: CssText/Demos/text-align-styles.css
.left {1.
text-align: left;2.
}3.
4.
.center {5.
text-align: center;6.
}7.
8.
.right {9.
text-align: right;10.
}11.
12.
.justify {13.
text-align: justify;14.
}15.
Demo 11.4: CssText/Demos/text-align.html
-------Lines 1 through 8 Omitted-------
<body class="webucator">9.
<h1>text-align</h1>10.
<div class="left">text-align:left</div>11.
<div class="center">text-align:center</div>12.
<div class="right">text-align:right</div>13.
<div class="justify">14.
text-align:justify - to see the effect of justify,15.
the text block has to wrap16.
text-align:justify - to see the effect of justify,17.
the text block has to wrap18.
text-align:justify - to see the effect of justify,19.
the text block has to wrap20.
</div>21.
</body>22.
</html>23.
The code above will render the following:
224 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 11.3. text-decoration
The text-decoration property is used to add effects to text, such as underlines and line-throughs.
The values are listed below:
none
underline
overline
line-through
The none value of the text-decoration property can be used to remove the underline from links,
as shown below:
a {
text-decoration: none;
}
LESSON 11: CSS Text | 225
EVALUATION COPY: Not to be used in class.

---

Demo 11.5: CssText/Demos/text-decoration-styles.css
.none {1.
text-decoration: none;2.
}3.
4.
.overline {5.
text-decoration: overline;6.
}7.
8.
.underline {9.
text-decoration: underline;10.
}11.
12.
.line-through {13.
text-decoration: line-through;14.
}15.
Demo 11.6: CssText/Demos/text-decoration.html
-------Lines 1 through 8 Omitted-------
<body class="webucator">9.
<h1>text-decoration</h1>10.
<div class="none">text-decoration: none</div>11.
<div class="overline">text-decoration: overline</div>12.
<div class="underline">text-decoration: underline</div>13.
<div class="line-through">text-decoration: line-through</div>14.
<div><a href="https://www.webucator.com" class="none">15.
Webucator</a>16.
</div>17.
</body>18.
</html>19.
The code above will render the following:
226 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

Note how we have removed the underline from the link using text-decoration: none.
text-decoration is actually a shorthand property for the following longhand properties:
1. text-decoration-line: Values include none, underline, overline, and line-through.
2. text-decoration-color: Any valid color.
3. text-decoration-style: Values include solid, double, dotted, dashed, and wavy.
4. text-decoration-thickness: Values can be a length (e.g., 3px), a percentage (e.g, 10%),
or a keyword (e.g., auto or from-font).
For more details on text-decoration, see https://developer.mozilla.org/en-
US/docs/Web/CSS/text-decoration.
EVALUATION COPY: Not to be used in class.
### ❋
## 11.4. text-indent
The text-indent property is used to indent (or outdent) the first line of a block of text. The value
can be specified in number of units or in percentage of the width of the containing block.
The following code sample shows the effects of text-indent:
LESSON 11: CSS Text | 227
EVALUATION COPY: Not to be used in class.

---

Demo 11.7: CssText/Demos/text-indent-styles.css
.indent-length {1.
text-indent: 3em;2.
}3.
4.
.indent-percentage {5.
text-indent: 10%;6.
}7.
8.
.outdent-length {9.
text-indent: -3em;10.
}11.
12.
.outdent-percentage {13.
text-indent: -10%;14.
}15.
Demo 11.8: CssText/Demos/text-indent.html
-------Lines 1 through 8 Omitted-------
<body class="webucator">9.
<h1>text-indent</h1>10.
<div class="indent-length">11.
text-indent: 3em only applies to the first line of text.12.
The next lines will not be indented.13.
</div>14.
<div class="indent-percentage">15.
text-indent: 10% only applies to the first line of text.16.
The next lines will not be indented.17.
</div>18.
<div class="outdent-length">19.
text-indent: -3em only applies to the first line of text.20.
The next lines will not be outdented.21.
</div>22.
<div class="outdent-percentage">23.
text-indent: -10% only applies to the first line of text.24.
The next lines will not be outdented.25.
</div>26.
</body>27.
</html>28.
The code above will render the following:
228 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

Note how the outdenting moves some of the content out of the viewport. Normally, you would add
padding on the left to prevent this from happening. We will learn how to do that in a later lesson.
EVALUATION COPY: Not to be used in class.
### ❋
## 11.5. text-shadow
The text-shadow property is used to add shadow to text. It can take a comma-delimited list of
shadows, each described by a combination of x and y offsets, blur radius, and color. The syntax is shown
below:
text-shadow: x-offset y-offset blur-radius color /* shadow1 */,
x-offset y-offset blur-radius color /* shadow2 */,
x-offset y-offset blur-radius color /* shadow3 */
The values are explained below:
1. x-offset and y-offset – Required length values. x-offset must come immediately before
y-offset. x-offset specifies the horizontal displacement (positive values to the right and
LESSON 11: CSS Text | 229
EVALUATION COPY: Not to be used in class.

---

negative values to the left). y-offset specifies the vertical displacement (positive values below
and negative values above). If both values are zero, the shadow will be directly behind the
text.
2. blur-radius – An optional length value that specifies the size of the blur effect. If included,
this value must come after the two offset values.
3. color – An optional color value that has to be either the first value included or the last value.
If not included, the browser picks the color, so for consistency across browsers, it is a good
idea to specify the shadow’s color.
Demo 11.9: CssText/Demos/text-shadow-styles.css
#simple-shadow {1.
color: yellow;2.
text-shadow: -.1rem -.1rem blue;3.
}4.
5.
#blurred-shadow {6.
text-shadow: .1rem .1rem .25rem red;7.
}8.
9.
#double-shadow {10.
color: red;11.
text-shadow: .1rem .1rem white,12.
.2rem .2rem blue;13.
}14.
Demo 11.10: CssText/Demos/text-shadow.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1>text-shadow</h1>11.
<h1 id="simple-shadow">Simple Shadow</h1>12.
<h1 id="blurred-shadow">Blurred Shadow</h1>13.
<h1 id="double-shadow">Double Shadow</h1>14.
</body>15.
</html>16.
The code above will render the following:
41
41. If you are reading this in black and white, be sure to open the page in your browser to see the color effects.
230 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 11.6. text-transform
The text-transform property is used to change the capitalization of text. The most common values
are listed below:
none
capitalize
uppercase
lowercase
The following code sample shows the effects of text-transform:
LESSON 11: CSS Text | 231
EVALUATION COPY: Not to be used in class.

---

Demo 11.11: CssText/Demos/text-transform-styles.css
#none {1.
text-transform: none;2.
}3.
4.
#caps {5.
text-transform: capitalize;6.
}7.
8.
#lower {9.
text-transform: lowercase;10.
}11.
12.
#upper {13.
text-transform: uppercase;14.
}15.
Demo 11.12: CssText/Demos/text-transform.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1>text-transform</h1>11.
<div id="none">text-transform: none;</div><br>12.
<div id="caps">text-transform: capitalize;13.
- this is written in all lowercase letters14.
</div><br>15.
<div id="lower">text-transform: lowercase;16.
- THIS IS WRITTEN IN ALL UPPERCASE LETTERS17.
</div><br>18.
<div id="upper">text-transform: uppercase;19.
- this is written in all lowercase letters20.
</div>21.
</body>22.
</html>23.
The code above will render the following:
232 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

Notice in the last two examples that the lowercase letters have been transformed to uppercase, and the
uppercase letters have been transformed to lowercase.
EVALUATION COPY: Not to be used in class.
### ❋
## 11.7. white-space
The white-space property determines how sequences of whitespace are displayed. Below we list the
most common values of the white-space property and their effects:
1. normal
Collapses adjacent spaces and tabs.
Collapses line breaks.
Wraps to fit containing box.
2. nowrap
LESSON 11: CSS Text | 233
EVALUATION COPY: Not to be used in class.

---

Collapses adjacent spaces and tabs.
Collapses line breaks.
Does not wrap to fit containing box.
3. pre
Does not collapse adjacent spaces and tabs.
Does not collapse line breaks.
Does not wrap to fit containing box.
4. pre-line
Collapses adjacent spaces and tabs.
Does not collapse line breaks.
Wraps to fit containing box.
5. pre-wrap
Does not collapse adjacent spaces and tabs.
Does not collapse line breaks.
Wraps to fit containing box.
The following code sample shows the effects of white-space:
234 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

Demo 11.13: CssText/Demos/white-space-styles.css
#normal {1.
white-space: normal;2.
}3.
4.
#nowrap {5.
white-space: nowrap;6.
}7.
#pre {8.
white-space: pre;9.
}10.
11.
#pre-line {12.
white-space: pre-line;13.
}14.
15.
#pre-wrap {16.
white-space: pre-wrap;17.
}18.
LESSON 11: CSS Text | 235
EVALUATION COPY: Not to be used in class.

---

Demo 11.14: CssText/Demos/white-space.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1>white-space</h1>11.
<div id="normal">12.
white-space: normal;13.
white-space: normal;14.
white-space: normal; white-space: normal; white-space: normal; white-space:
normal;
15.
white-space: normal; white-space: normal;16.
</div>17.
<hr>18.
<div id="nowrap">19.
white-space: nowrap;20.
white-space: nowrap;21.
white-space: nowrap; white-space: nowrap; white-space: nowrap; white-space:
nowrap;
22.
white-space: nowrap; white-space: nowrap;23.
</div>24.
<hr>25.
<div id="pre">26.
white-space: pre;27.
white-space: pre;28.
white-space: pre; white-space: pre; white-space: pre; white-space: pre;
white-space: pre;
29.
</div>30.
<hr>31.
<div id="pre-line">32.
white-space: pre-line;33.
white-space: pre-line;34.
white-space: pre-line;35.
</div>36.
<hr>37.
<div id="pre-wrap">38.
white-space: pre-wrap;39.
white-space: pre-wrap;40.
white-space: pre-wrap; white-space: pre-wrap; white-space: pre-wrap;
white-space: pre-wrap; white-space: pre-wrap;
41.
</div>42.
</body>43.
</html>44.
The code above will render the following:
236 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

Notice that the user would need to scroll right to see the content that we have forced not to wrap.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 11: CSS Text | 237
EVALUATION COPY: Not to be used in class.

---

## 11.8. word-break
The word-break property specifies where it is permissible to have line breaks when text would otherwise
overflow its content box. The most common values are explained below:
1. normal -- default line breaks (at the end of words or at hyphens)
2. break-all -- line breaks can happen between any two characters
The following example shows the effects of word-break:
Demo 11.15: CssText/Demos/word-break-styles.css
#div1 {1.
word-break: normal;2.
}3.
4.
#div2 {5.
word-break: break-all;6.
}7.
238 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

Demo 11.16: CssText/Demos/word-break.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1>word-break</h1>11.
<div id="div1">12.
<p><strong>word-break: normal;</strong> When in the Course of human13.
events, it becomes necessary for one people to dissolve the14.
political bands which have connected them with another, and to15.
assume among the powers of the earth, the separate and equal station16.
to which the Laws of Nature and of Nature's God entitle them, a17.
decent respect to the opinions of mankind requires that they should18.
declare the causes which impel them to the separation..</p>19.
</div>20.
<hr>21.
<div id="div2">22.
<p><strong>word-break: break-all;</strong> When in the Course of23.
human events, it becomes necessary for one people to dissolve the24.
political bands which have connected them with another, and to25.
assume among the powers of the earth, the separate and equal station26.
to which the Laws of Nature and of Nature's God entitle them, a27.
decent respect to the opinions of mankind requires that they should28.
declare the causes which impel them to the separation.</p>29.
</div>30.
</body>31.
</html>32.
The code above will render the following:
LESSON 11: CSS Text | 239
EVALUATION COPY: Not to be used in class.

---

Notice that in the second rendering of the paragraph, some of the wrapping splits in the middle of a
word (e.g., “separate”).
EVALUATION COPY: Not to be used in class.
### ❋
## 11.9. word-spacing
The word-spacing property is used to specify the amount of space between words. The amount
indicated is in addition to the default spacing. The property either takes the keyword normal, which
is the default defined by the current font and/or browser, or a length value. See the following example:
240 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

Demo 11.17: CssText/Demos/word-spacing-styles.css
#normal {1.
word-spacing: normal;2.
}3.
4.
#wide {5.
word-spacing: 0.5rem;6.
}7.
8.
#wider {9.
word-spacing: 1rem;10.
}11.
12.
#widest {13.
word-spacing: 1.5rem;14.
}15.
Demo 11.18: CssText/Demos/word-spacing.html
-------Lines 1 through 9 Omitted-------
<body class="webucator">10.
<h1>word-spacing</h1>11.
<div id="normal">word-spacing: normal;12.
- This is a normal sentence.13.
</div><br>14.
<div id="wide">word-spacing: 0.5rem;15.
- This is a wide sentence.16.
</div><br>17.
<div id="wider">word-spacing: 1rem;18.
- This is a wider sentence.19.
</div><br>20.
<div id="widest">word-spacing: 1.5rem;21.
- This is the widest sentence.22.
</div>23.
</body>24.
</html>25.
The code above will render the following:
LESSON 11: CSS Text | 241
EVALUATION COPY: Not to be used in class.

---

242 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

# Exercise 14: Text Properties
### 25 to 40 minutes
In this exercise, you will continue to work on the Runners Home page that you started in the Fonts
lesson (see page 201).
1. Open CssText/Exercises/index.html in your editor. You will see the Runners Home
home page.
2. Open CssText/Exercises/styles.css. This is the stylesheet from the solution to the
Fonts exercise. Feel free to continue working from your own stylesheet.
3. Using your new knowledge of text properties, add some styles to this page. The object of this
exercise is to practice using the text properties covered in this lesson. Feel free to use color
and opacity and any other properties you have learned as well.
4. When you are done, open index.html in your browser to see the results. You are welcome
to go back to the code and continue to work.
You can design it however you like, or you can try to make it look something like:
LESSON 11: CSS Text | 243
EVALUATION COPY: Not to be used in class.

---

244 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

LESSON 11: CSS Text | 245
EVALUATION COPY: Not to be used in class.

---

Solution: CssText/Solutions/styles.css
html {1.
font-size: 16px;2.
}3.
4.
body {5.
font: 1rem/1.3 Verdana, Geneva, Tahoma, sans-serif;6.
}7.
8.
nav a {9.
text-decoration: none;10.
}11.
12.
#welcome {13.
font-size: larger;14.
}15.
16.
#welcome h1 {17.
color: rgb(8, 5, 211);18.
text-shadow: 0.2rem 0.2rem 0.1rem rgb(211, 200, 238);19.
}20.
21.
article {22.
text-align: center;23.
}24.
25.
article h2 {26.
font-variant: small-caps;27.
letter-spacing: 0.1em;28.
word-spacing: 0.2em;29.
}30.
31.
article p {32.
line-height: 2;33.
text-align: left;34.
text-indent: 3rem;35.
}36.
37.
.read-more {38.
text-decoration: none;39.
}40.
41.
aside label {42.
font-weight: bold;43.
}44.
246 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

45.
#newsletter {46.
text-align: right;47.
}48.
49.
footer {50.
font-size: smaller;51.
font-style: italic;52.
}53.
## Conclusion
In this lesson, you have learned to use CSS text properties.
LESSON 11: CSS Text | 247
EVALUATION COPY: Not to be used in class.

---

248 | LESSON 11: CSS Text
EVALUATION COPY: Not to be used in class.

---

# LESSON 12
# JavaScript Basics
EVALUATION COPY: Not to be used in class.
Topics Covered
The HTML DOM.
JavaScript syntax rules.
Inline JavaScript.
JavaScript script blocks.
Creating and linking to external JavaScript files.
Working with JavaScript objects, methods, and properties.
Referencing HTML elements.
## Introduction
In this lesson, you will get comfortable with the basics of JavaScript.
EVALUATION COPY: Not to be used in class.
### ❋
## 12.1. JavaScript vs. EcmaScript
We refer to the language you are learning as JavaScript, which is what it is usually called. However,
JavaScript was invented by Netscape Communications and is now owned by Oracle Corporation
42
.
Microsoft calls its version of the language JScript. JavaScript and JScript are both implementations of
EcmaScript, but everyone still refers to the language as JavaScript.
42. https://en.wikipedia.org/wiki/JavaScript#Trademark
LESSON 12: JavaScript Basics | 249
EVALUATION COPY: Not to be used in class.

---

### 12.1.1. What is ECMAScript?
ECMAScript, sometimes abbreviated as “ES”, is a scripting language specification maintained and
trademarked by Ecma International (https://www.ecma-international.org/mission/), a
Europe-based industry association dedicated to technology and communications standards. The
specification for the most-recent standard version of ECMAScript can be found at:
https://www.ecma-international.org/publications-and-standards/standards/ecma-
262/
As we mentioned above, JavaScript – the scripting language you are learning here and whose code is
run by the browsers you (or others) use to visit the pages you build – is an implementation of
ECMAScript.
Keep in mind that ECMAScript evolves over time: new features are added, new syntax is adopted, etc.
Like CSS, HTML, and other client-side technologies, JavaScript is an implementation of a standard
(ECMAScript) by browsers - please be aware that all browsers won’t implement (or implement in the
same manner) all newer features of ECMAScript, and that later versions of browsers will implement
newer features over time.
EVALUATION COPY: Not to be used in class.
### ❋
## 12.2. The HTML DOM
The HTML Document Object Model (DOM) is the browser’s view of an HTML page as an object
hierarchy, starting with the browser window itself and moving deeper into the page, including all of
the elements on the page and their attributes. Below is a simplified version of the HTML DOM:
250 | LESSON 12: JavaScript Basics
EVALUATION COPY: Not to be used in class.

---

As shown, the top-level object is window. The document object is a child of window and all the objects
(i.e., elements) that appear on the page (e.g., forms, links, images, tables, etc.) are descendants of the
document object. These objects can have children of their own. For example, form objects generally
have several child objects, including text boxes, radio buttons, and select menus.
EVALUATION COPY: Not to be used in class.
### ❋
## 12.3. JavaScript Syntax
### 12.3.1. Basic Rules
1. JavaScript statements end with semi-colons.
2. JavaScript is case sensitive.
3. JavaScript has two forms of comments:
LESSON 12: JavaScript Basics | 251
EVALUATION COPY: Not to be used in class.

---

Single-line comments begin with a double slash (//).
Multi-line comments begin with “/*” and end with “*/”.
// This is a single-line comment.
/*
This is
a multi-line
comment.
*/
EVALUATION COPY: Not to be used in class.
### ❋
## 12.4. Accessing Elements
### 12.4.1. Dot Notation
In JavaScript, elements (and other objects) can be referenced using dot notation, starting with the
highest-level object (i.e., window). Objects can be referred to by name or id or by their position on the
page. For example, if there is a form on the page named “loginform”, using dot notation you could
refer to the form as follows:
window.document.loginform
Assuming that loginform is the first form on the page, you could also refer to it in this way:
window.document.forms[0]
A document can have multiple form elements as children. The number in the square brackets ([])
indicates the specific form in question. In programming speak, every document object contains a
collection of forms. The length of the collection could be zero (meaning there are no forms on the page)
or greater. In JavaScript, collections (and arrays) are zero-based, meaning that the first form on the
page is referenced with the number zero (0) as shown in the syntax example above.
252 | LESSON 12: JavaScript Basics
EVALUATION COPY: Not to be used in class.

---

### 12.4.2. Square Bracket Notation
Objects can also be referenced using square bracket notation as shown below:
window['document']['loginform']
// and
window['document']['forms'][0]
Dot notation and square bracket notation are completely interchangeable. Dot notation is much more
common; however, as we will see later in the course, there are times when it is more convenient to use
square bracket notation.
EVALUATION COPY: Not to be used in class.
### ❋
## 12.5. Where Is JavaScript Code Written?
JavaScript code can be written inline (e.g., within HTML attributes called on-event handlers), in script
blocks, and in external JavaScript files. The page below shows examples of all three.
LESSON 12: JavaScript Basics | 253
EVALUATION COPY: Not to be used in class.

---

Demo 12.1: JavaScriptBasics/Demos/javascript.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
//Pop up an alert9.
window.alert("The page is loading");10.
</script>11.
<title>JavaScript Page</title>12.
</head>13.
<body>14.
<main>15.
<button onclick="document.body.style.backgroundColor = 'red';">16.
Red17.
</button>18.
<button onclick="document.body.style.backgroundColor = 'white';">19.
White20.
</button>21.
<button onclick="document.body.style.backgroundColor = 'green';">22.
Green23.
</button>24.
<button onclick="document.body.style.backgroundColor = 'blue';">25.
Blue26.
</button>27.
<script src="script.js"></script>28.
</main>29.
</body>30.
</html>31.
Demo 12.2: JavaScriptBasics/Demos/script.js
/*1.
This script simply outputs2.
"Hello, there!"3.
to the browser.4.
*/5.
document.write("<p>Hello, there!</p>");6.
1. Open JavaScriptBasics/Demos/javascript.html in your browser. As the page loads,
an alert will pop up that says “The page is loading” as shown below:
254 | LESSON 12: JavaScript Basics
EVALUATION COPY: Not to be used in class.

---

2. Click the OK button. The page will finish loading and will appear as follows:
The text “Hello, there!” is written dynamically by the code in JavaScriptBasics/De
mos/script.js.
3. Click any one of the buttons. The background color of the page changes:
LESSON 12: JavaScript Basics | 255
EVALUATION COPY: Not to be used in class.

---

We will look at the code in this file and in JavaScriptBasics/Demos/javascript.html again
shortly.
The Implicit window Object
The window object is always the implicit top-level object and therefore does not have to be
included in references to objects. For example, window.document.write() can be shortened
to document.write(). Likewise, window.alert() can be shortened to just alert().
EVALUATION COPY: Not to be used in class.
### ❋
## 12.6. JavaScript Objects, Methods, and Properties
JavaScript is used to manipulate or get information about objects in the HTML DOM. Objects in an
HTML page have methods (actions, such as opening a new window or submitting a form) and properties
(attributes or qualities, such as color and size).
256 | LESSON 12: JavaScript Basics
EVALUATION COPY: Not to be used in class.

---

To illustrate objects, methods and properties, let’s return to the code in JavaScriptBasics/De
mos/javascript.html and JavaScriptBasics/Demos/script.js. You may find it useful to have
those files open in your editor while reading this section.
### 12.6.1. Methods
Methods are the verbs of JavaScript. They cause things to happen.
window.alert()
HTML pages are read and processed from top to bottom. The JavaScript code in the initial script
block at the top of JavaScriptBasics/Demos/javascript.html calls the alert() method of the
window object. When the browser reads that line of code, it will pop up an alert box and will not
continue processing the page until the user presses the OK button. Once the user presses the button,
the alert box disappears and the rest of the page loads.
Note that, because window is the implicit top-level object, we could leave it off and just write
alert("The page is loading"). And, in fact, this is the way it is usually done.
document.write()
The write() method of the document object is used to write out code to the page as it loads. In
JavaScriptBasics/Demos/script.js, it simply writes out “Hello, there!”; however, it is more often
used to write out dynamic data, such as the date and time on the user’s machine.
The document object is a child of window, so we could write window.document.write('some
text'), but again, window is implicit.
Arguments
Methods can take zero or more arguments separated by commas.
object.method(argument1, argument2);
The alert() and write() methods shown in the example above each take only one argument: the
message to show or the HTML to write out to the browser.
LESSON 12: JavaScript Basics | 257
EVALUATION COPY: Not to be used in class.

---

### 12.6.2. Properties
Properties are the adjectives of JavaScript. They describe qualities of objects and, in some cases are
writable (can be changed dynamically).
document.body.style.backgroundColor
The body object is a property of the document object, the style object is a property of the body
object, and backgroundColor is a read-write property of the style object. To understand what’s
going on, it can be useful to read the dot notation from right to left: “The backgroundColor style
of the body of the document.”
Looking back at JavaScriptBasics/Demos/javascript.html, the four button elements use the
onclick on-event handler to catch click events. When the user clicks a button, JavaScript is used to
set the background of the body to a new color, in the same way that we might use CSS to style the
page with background-color:red or background-color:white.
258 | LESSON 12: JavaScript Basics
EVALUATION COPY: Not to be used in class.

---

# Exercise 15: Alerts, Writing, and Changing
# Background Color
### 5 to 15 minutes
In this exercise, you will practice using JavaScript to pop up an alert, write text to the screen, and set
the background color of the page.
1. Open JavaScriptBasics/Exercises/alert-write-bgcolor.html for editing.
2. In the head of the file, add a JavaScript alert which pops up the message “Welcome to my
page!” when the page loads.
3. Add click handlers to the two buttons to allow the user to change the background color of
the page to red or to blue.
4. In the script at the bottom of the page, use JavaScript to write the text “This text was
generated by JavaScript.” to the page.
5. Test your solution in a browser.
LESSON 12: JavaScript Basics | 259
EVALUATION COPY: Not to be used in class.

---

Solution: JavaScriptBasics/Solutions/alert-write-bgcolor.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
window.alert("Welcome to my page!");9.
</script>10.
<title>Alert, Write, Change Background Color</title>11.
</head>12.
<body>13.
<main>14.
<p>Click the button to turn the page:</p>15.
<button onclick="document.body.style.backgroundColor = 'red'">16.
Red17.
</button>18.
<p>Click the button to turn the page:</p>19.
<button onclick="document.body.style.backgroundColor = 'blue'">20.
Blue21.
</button>22.
<script>23.
document.write('This text was generated by JavaScript');24.
</script>25.
</main>26.
</body>27.
</html>28.
Code Explanation
1. In the head, we use window.alert() to generate the pop-up. We could have just used
alert().
2. We use document.write() to write to the screen at the bottom of the page.
3. We use onclick="document.body.style.backgroundColor = 'red'" and
onclick="document.body.style.backgroundColor = 'blue'" to add click handlers
to the buttons.
260 | LESSON 12: JavaScript Basics
EVALUATION COPY: Not to be used in class.

---

## Conclusion
In this lesson, you have learned the basics of JavaScript. Now you’re ready for more.
LESSON 12: JavaScript Basics | 261
EVALUATION COPY: Not to be used in class.

---

262 | LESSON 12: JavaScript Basics
EVALUATION COPY: Not to be used in class.

---

# LESSON 13
# Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.
Topics Covered
Creating, reading, and modifying variables in JavaScript.
JavaScript arrays.
JavaScript operators.
## Introduction
In this lesson, you will learn to work with variables, arrays, and operators.
EVALUATION COPY: Not to be used in class.
### ❋
## 13.1. JavaScript Variables
Variables are used to hold data in memory. JavaScript variables are declared with the let keyword.
let age;
While this practice is discouraged, it is possible to declare multiple variables in a single step, like this:
let age, height, weight, dominantHand;
After a variable is declared, it can be assigned a value.
LESSON 13: Variables, Arrays, and Operators | 263
EVALUATION COPY: Not to be used in class.

---

age = 18;
Variable declaration and assignment can be done in a single step.
let age = 18;
let versus var
If you have worked with JavaScript before, you may wonder why we are using let as opposed
to the var keyword. Although var has not been officially deprecated, use of this keyword is
discouraged primarily because variables defined with let cannot be accessed outside of the block
where the variable is defined, thus reducing the likelihood of runtime errors caused by changing
the value of a variable out of scope.
43 
See the Mozilla documentation
44 
for details.
EVALUATION COPY: Not to be used in class.
### ❋
## 13.2. A Loosely Typed Language
JavaScript is a loosely typed language. This means that you do not specify the data type of a variable
when declaring it. It also means that a single variable can hold different data types at different times
and that JavaScript can change the variable type on the fly.
For example, in the following block, the variable age is an integer and the variable strAge is a string
(programming speak for text) because of the quotes.
let age = 18;
let strAge = "18";
If you were to try to do a math function on strAge (e.g., multiply it by 4), a strongly typed (or statically
typed) language would error saying you cannot multiply a string by a number. JavaScript would
43. You will learn more about scope when we cover functions.
44. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
264 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

dynamically change strAge to an integer for the purposes of that operation. Although this is very
convenient, it can also cause unexpected results, so be careful.
TypeScript
TypeScript
45 
is an open-source programming language developed by Microsoft. Developers
writing in TypeScript compile their code to valid JavaScript, which they can use anywhere one
might use JavaScript. A useful feature of TypeScript is static typing, meaning that a developer
might specify the type of a given variable - to be a string, say, or a Boolean true/false variable -
when declaring the variable. Violations of this static typing - trying to work with a number value
as if it were a string value, for example - produces an error when compiling the TypeScript code
into JavaScript, and thus adds a check against a dangerous bug creeping into the code.
EVALUATION COPY: Not to be used in class.
### ❋
## 13.3. Google Chrome DevTools
Google Chrome DevTools is a set of tools to help web developers. We will use the Chrome DevTools
Console to illustrate JavaScript’s dynamic typing.
To open the Chrome DevTools Console:
1. Click the three-vertical-dot icon in the upper right of Google Chrome.
2. Select More Tools.
3. Select Developer Tools.
45. https://www.typescriptlang.org/
LESSON 13: Variables, Arrays, and Operators | 265
EVALUATION COPY: Not to be used in class.

---

4. The tools will usually be docked on the right or bottom of your screen. Make sure that the
Console is selected:
You may need to dropdown the menu to see the Console option:
5. Now type “gobbledygook” in the Console and press Enter:
266 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

The word “gobbledygook” doesn’t mean anything in JavaScript and we have not defined a
variable named “gobbledygook”, so we get an error.
6. To clear the Console, press the Clear Console icon:
7. You should now have a clear Console to start practicing JavaScript:
You can write and test JavaScript for a page directly in the Console. We will use it to show how JavaScript
variables are dynamic:
1. Type let age = 18; and press Enter :
LESSON 13: Variables, Arrays, and Operators | 267
EVALUATION COPY: Not to be used in class.

---

Don’t worry about the “undefined” response. All that means is that your code didn’t return
anything.
2. Now type age; and press Enter :
This time it does return something – the value of age.
3. Let’s subtract 2 from age and then add 2 to age :
That works as expected.
4. Now we will set age to '18' in single quotes. This makes age a string, which is
programming-speak for text :
Notice that it returns "18". At this point, a strongly typed programming language would
have balked. It would have told us that age was declared as a number and cannot be assigned
a string value. You may also notice that "18" in double quotes was returned even though we
used single quotes when we set the value of age. Single and double quotes are interchangeable
in JavaScript.
5. Now let’s subtract 2 from age :
268 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

Notice that JavaScript understands that we want to treat age as a number and so it converts
it to a number before doing the math.
6. Now let’s add 2 to age :
Oops! What happened? As it turns out, the plus operator (+) has multiple functions in
JavaScript. In addition to adding numbers together, it can add strings together. In this case,
because age is a string, it converts 2 to a string before doing the operation. So, it’s adding
"18" and "2" to give us "182".
The issue shown above does not come up often, but when it does, it can bite you. The best way to
handle it is to make sure that when you are going to use a variable as a new type, you explicitly convert
it to the new type. We will show how to do that later in the course.
### 13.3.1. Variable Naming
1. Variable names must begin with a letter, underscore (_), or dollar sign ($).
2. Variable names cannot contain spaces or special characters (other than the underscore and
dollar sign).
3. Variable names can contain numbers (but not as the first character).
4. Variable names are case sensitive.
5. You cannot use keywords (e.g., window or function) as variable names.
EVALUATION COPY: Not to be used in class.
### ❋
## 13.4. Storing User-Entered Data
The following example uses the prompt() method of the window object to collect user input. The
value entered by the user is then assigned to a variable, which is accessed when the user clicks one of
the button elements.
LESSON 13: Variables, Arrays, and Operators | 269
EVALUATION COPY: Not to be used in class.

---

Demo 13.1: VariablesArraysOperators/Demos/variables.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
//Pop up a prompt9.
let userColor = window.prompt("Enter a color.", "");10.
</script>11.
<title>JavaScript Variables</title>12.
</head>13.
<body>14.
<main>15.
<button onclick="document.body.style.backgroundColor = 'red';">16.
Red17.
</button>18.
<button onclick="document.body.style.backgroundColor = 'white';">19.
White20.
</button>21.
<button onclick="document.body.style.backgroundColor = 'green';">22.
Green23.
</button>24.
<button onclick="document.body.style.backgroundColor = 'blue';">25.
Blue26.
</button>27.
<button onclick="document.body.style.backgroundColor = userColor;">28.
<script>29.
document.write(userColor);30.
</script>31.
</button>32.
</main>33.
</body>34.
</html>35.
As the page loads, a prompt pops up asking the user to enter a color.
270 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

This is done with the prompt() method of the window object. The prompt() method is used to get
input from the user. It takes two arguments:
1. The message in the dialog box (e.g., "Enter a color.").
2. The default value that appears in the text box. In the example above this is an empty string
(i.e., "").
If the OK button is pressed, the prompt returns the value entered in the text box. If the Cancel button,
the prompt returns null.
46 
The line below assigns whatever is returned to the variable userColor.
let userColor = window.prompt("Enter a color.", "");
A script block with a call to document.write() is then used to output the color entered by the
user. This output is contained within a button element, which has an onclick on-event handler that
will be used to turn the background color of the page to the user-entered color.
<button
onclick="document.body.style.backgroundColor = userColor;">
<script>
document.write(userColor);
</script>
</button>
Test this out:
1. Open VariablesArraysOperators/Demos/variables.html in your browser and enter
“Yellow” in the prompt:
46. 
In JavaScript, null is a datatype with only one value: null. It represents a value that we don’t know or that is missing.
LESSON 13: Variables, Arrays, and Operators | 271
EVALUATION COPY: Not to be used in class.

---

2. The resulting page should appear as follows:
3. Click the “Yellow” button. The background should turn yellow.
272 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

# Exercise 16: Using Variables
### 5 to 15 minutes
In this exercise, you will practice using variables.
1. Open VariablesArraysOperators/Exercises/variables.html for editing.
2. Below the ADD PROMPT HERE comment, write code that will prompt the user for their first
name and assign the result to a variable.
3. Add a button below the Ringo button that reads “Your Name”. Add functionality so that
when this button is pressed an alert pops up showing the user’s first name.
4. Test your solution in a browser.
Exercise Code 16.1:VariablesArraysOperators/Exercises/variables.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
//ADD PROMPT HERE9.
</script>10.
<title>JavaScript Variables</title>11.
</head>12.
<body>13.
<main>14.
<button onclick="alert('Paul');">Paul</button>15.
<button onclick="alert('John');">John</button>16.
<button onclick="alert('George');">George</button>17.
<button onclick="alert('Ringo');">Ringo</button>18.
<!--ADD BUTTON HERE-->19.
</main>20.
</body>21.
</html>22.
LESSON 13: Variables, Arrays, and Operators | 273
EVALUATION COPY: Not to be used in class.

---

Solution: VariablesArraysOperators/Solutions/variables.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
let firstName = window.prompt("What's your name?", "");9.
</script>10.
<title>JavaScript Variables</title>11.
</head>12.
<body>13.
<main>14.
<button onclick="alert('Paul');">Paul</button>15.
<button onclick="alert('John');">John</button>16.
<button onclick="alert('George');">George</button>17.
<button onclick="alert('Ringo');">Ringo</button>18.
<button onclick="alert(firstName);">Your Name</button>19.
</main>20.
</body>21.
</html>22.
EVALUATION COPY: Not to be used in class.
### ❋
## 13.5. Constants
In programming, a constant is like a variable in that it is an identifier that holds a value, but, unlike
variables, constants are not variable, they are constant. Good name choices, right?
Whereas variables are declared with the let keyword, constants are declared with the const keyword:
const NUM = 1;
Constants cannot be reassigned; that is, a later statement like NUM = 2; would fail, meaning that the
value of NUM would remain 1; depending on how the browser you are using handles const, the later
274 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

statement may either cause the code to fail or simply not assign the new value to NUM. In Google
Chrome, for example, trying to assign a new value to a constant will cause an error. We can see this
using the Chrome DevTools Console:
While constants can be declared with uppercase or lowercase names, the convention is to use
all-uppercase names for constants in the global scope
47
, so they are easily distinguishable from variables.
Constants in the function scope are named using lowerCamelCase, just like variables.
Constants in this Course
In this course, we often write small bits of code in the global scope (i.e., not within curly braces)
that would normally be locally scoped in real code. In these cases, we use lowerCamelCase for
our constant names.
EVALUATION COPY: Not to be used in class.
### ❋
## 13.6. Arrays
An array is a grouping of objects that can be accessed through subscripts. At its simplest, an array can
be thought of as a list. In JavaScript, the first element of an array is considered to be at position zero
(0), the second element at position one (1), and so on. Arrays are useful for storing related sets of data.
48
Arrays are declared using the new keyword and should be defined as constant:
const myArray = new Array();
47. You will learn more about scope when we cover functions.
48. Unlike in some languages, values in JavaScript arrays do not all have to be of the same data type.
LESSON 13: Variables, Arrays, and Operators | 275
EVALUATION COPY: Not to be used in class.

---

It is also possible and very common to use the [] literal to declare a new Array object:
const myArray = [];
When constants are not constant
When you declare a constant, you create a pointer to a specific object. You may not change the
pointer (i.e., you cannot assign a new value to a constant), but you can change the object that is
assigned to the constant (e.g., the items in the array).
Values are assigned to arrays as follows:
myArray[0] = value1;
myArray[1] = value2;
myArray[2] = value3;
Arrays can be declared with initial values.
const myArray = new Array(value1, value2, value3);
Or, using the [] notation:
const myArray = [value1, value2, value3];
The following example is similar to the previous one, except that it prompts the user for four different
colors and places each into the colors array. It then displays the values in the colors array in the
buttons and assigns them to document.body.style.backgroundColor when the user clicks the
buttons.
276 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

Demo 13.2: VariablesArraysOperators/Demos/arrays.html
-------Lines 1 through 7 Omitted-------
<script>8.
//Pop up four prompts and create an array9.
const colors = new Array();10.
colors[0] = prompt("Choose a color.", "");11.
colors[1] = prompt("Choose a color.", "");12.
colors[2] = prompt("Choose a color.", "");13.
colors[3] = prompt("Choose a color.", "");14.
</script>15.
<title>JavaScript Arrays</title>16.
</head>17.
<body>18.
<main>19.
<button onclick="document.body.style.backgroundColor = colors[0];">20.
<script>21.
document.write(colors[0]);22.
</script>23.
</button>24.
<button onclick="document.body.style.backgroundColor = colors[1];">25.
<script>26.
document.write(colors[1]);27.
</script>28.
</button>29.
<button onclick="document.body.style.backgroundColor = colors[2];">30.
<script>31.
document.write(colors[2]);32.
</script>33.
</button>34.
<button onclick="document.body.style.backgroundColor = colors[3];">35.
<script>36.
document.write(colors[3]);37.
</script>38.
</button>39.
</main>40.
</body>41.
</html>42.
As the page loads, an array called colors is declared.
colors = new Array();
The next four lines populate the array with user-entered values.
LESSON 13: Variables, Arrays, and Operators | 277
EVALUATION COPY: Not to be used in class.

---

colors[0] = prompt("Choose a color.", "");
colors[1] = prompt("Choose a color.", "");
colors[2] = prompt("Choose a color.", "");
colors[3] = prompt("Choose a color.", "");
The body of the page contains a paragraph with four <button> tags, the text of which is dynamically
created with values from the colors array.
278 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

# Exercise 17: Working with Arrays
### 15 to 25 minutes
In this exercise, you will practice working with arrays.
1. Open VariablesArraysOperators/Exercises/arrays.html for editing.
2. Below the comment, declare a rockStars array and populate it with four values entered by
the user.
3. Add functionality to the buttons, so that alerts pop up with values from the array when the
buttons are clicked.
4. Test your solution in a browser. It should work as follows:
A. As the page loads, you should get four alerts (the values should be blank by default):
LESSON 13: Variables, Arrays, and Operators | 279
EVALUATION COPY: Not to be used in class.

---

B. After responding to all the prompts, you should see four buttons on the page. When
you click one of the buttons, it should alert one of your rock stars:
280 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

Exercise Code 17.1: VariablesArraysOperators/Exercises/arrays.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
/*9.
Declare a rockStars array and populate it with10.
four values entered by the user.11.
*/12.
</script>13.
<title>JavaScript Arrays</title>14.
</head>15.
<body>16.
<main>17.
<button>Favorite</button>18.
<button>Next Favorite</button>19.
<button>Next Favorite</button>20.
<button>Next Favorite</button>21.
</main>22.
</body>23.
</html>24.
LESSON 13: Variables, Arrays, and Operators | 281
EVALUATION COPY: Not to be used in class.

---

Solution: VariablesArraysOperators/Solutions/arrays.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const rockStars = new Array();9.
rockStars[0] = prompt("Who is your favorite rock star?", "");10.
rockStars[1] = prompt("Your next favorite rock star?", "");11.
rockStars[2] = prompt("Your next favorite rock star?", "");12.
rockStars[3] = prompt("Your next favorite rock star?", "");13.
</script>14.
<title>JavaScript Arrays</title>15.
</head>16.
<body>17.
<main>18.
<button onclick="alert(rockStars[0]);">Favorite</button>19.
<button onclick="alert(rockStars[1]);">Next Favorite</button>20.
<button onclick="alert(rockStars[2]);">Next Favorite</button>21.
<button onclick="alert(rockStars[3]);">Next Favorite</button>22.
</main>23.
</body>24.
</html>25.
EVALUATION COPY: Not to be used in class.
### ❋
## 13.7. Associative Arrays
Whereas regular (or enumerated) arrays are indexed numerically, associative arrays are indexed using
names as keys. The advantage of this is that the keys can be meaningful, which can make it easier to
reference an element in an array. The following code, written in Chrome DevTools Console, illustrates
how an associative array is used:
282 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

Arrays can also have subarrays. For example, rather than having “singer1” and “singer2” keys, it would
be better to have a “singers” key that was an enumerated array. We could do that like this:
Notice how the singers are accessed first by the “singers” key of the beatles array and then by the
index:
beatles['singers'][0];
### 13.7.1. Array Properties and Methods
The tables below show some of the most useful array properties and methods. All of the examples
assume an array called beatles that holds “Paul”, “John”, “George”, and “Ringo”.
LESSON 13: Variables, Arrays, and Operators | 283
EVALUATION COPY: Not to be used in class.

---

const beatles = ["Paul", "John", "George", "Ringo"];
Array Properties
DescriptionProperty
Holds the number of elements in an array.length
beatles.length // 4
Array Methods
DescriptionProperty
Returns a string comprised of the elements in the array. The elements are joined together
by the delimiter. The default delimiter is a comma.
join(delimiter)
beatles.join(":") // Paul:John:George:Ringo
beatles.join() // Paul,John,George,Ringo
Appends an element to an array.push()
beatles.push("Steve")
Removes the last item in an array and returns its value.pop()
beatles.pop() // Returns Ringo
Removes the first item in an array and returns its value.shift()
beatles.shift() // Returns Paul
Prepends one or more items to the beginning of an array.unshift()
beatles.unshift('Paul')
Returns a subarray from start up to, but not including end. If end is left out, it
includes the remainder of the array.
slice(start, end)
beatles.slice(1, 3) //Returns [John, George]
Removes count items from start in the array and returns the resulting array.splice(start,
count) 
beatles.splice(1, 2) //Returns [John, George]
Sorts an array alphabetically.sort()
beatles.sort() //Returns [George, John, Paul, Ringo] and sorts the array
284 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 13.8. Playing with Array Methods
Take some time to play around with these array methods in Chrome DevTools Console. Try your own
things and/or follow along with the following code.
Note that some methods will return a value without modifying the existing array, while others will
make changes to the existing array “in place”. For example, study the following code. Notice that
slice() returns a new array without changing the existing array, whereas splice() and sort() make
changes to the existing array.
LESSON 13: Variables, Arrays, and Operators | 285
EVALUATION COPY: Not to be used in class.

---

Array Documentation
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Glob
al_Objects/Array for full documentation on Arrays.
EVALUATION COPY: Not to be used in class.
### ❋
## 13.9. JavaScript Operators
Arithmetic Operators
DescriptionOperator
Addition+
Subtraction-
Multiplication*
Division/
Modulus (remainder)%
286 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

Assignment Operators
DescriptionOperator
Assignment=
One step addition and assignment (a+=3 is the same as a=a+3)+=
One step subtraction and assignment (a-=3 is the same as a=a-3)-=
One step multiplication and assignment (a*=3 is the same as a=a*3)*=
One step division and assignment (a/=3 is the same as a=a/3)/=
One step modulus and assignment (a%=3 is the same as a=a%3)%=
Increment by one (a++ is the same as a=a+1 or a+=1)++
Decrement by one (a-- is the same as a=a-1 or a-=1)--
String Operators
DescriptionOperator
Concatenation+
let greeting = "Hello " + firstname;
One step concatenation and assignment+=
let greeting = "Hello ";
greeting += firstname;
The following code, written in Chrome DevTools Console, shows examples of working with JavaScript
arithmetic operators:
LESSON 13: Variables, Arrays, and Operators | 287
EVALUATION COPY: Not to be used in class.

---

And here we have examples of the concatenation operator:
288 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 13.10. The Modulus Operator
The modulus operator (%) is used to find the remainder after division:
5 % 2 // returns 1
11 % 3 // returns 2
22 % 4 // returns 2
22 % 3 // returns 1
10934 % 324 // returns 242
The modulus operator is useful for determining whether a number is even or odd:
1 % 2 // returns 1: odd
2 % 2 // returns 0: even
3 % 2 // returns 1: odd
4 % 2 // returns 0: even
5 % 2 // returns 1: odd
6 % 2 // returns 0: even
EVALUATION COPY: Not to be used in class.
### ❋
## 13.11. Playing with Operators
Take some time to play around with JavaScript operators in Chrome DevTools Console. Try your
own things and/or follow along with the code in the preceding sections.
The file below illustrates the use of the concatenation operator and several math operators. It also
illustrates a potential problem with loosely typed languages.
LESSON 13: Variables, Arrays, and Operators | 289
EVALUATION COPY: Not to be used in class.

---

Demo 13.3: VariablesArraysOperators/Demos/operators.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const userNum1 = window.prompt("Choose a number.", "");9.
alert("You chose " + userNum1);10.
const userNum2 = window.prompt("Choose another number.", "");11.
alert("You chose " + userNum2);12.
const numsAdded = userNum1 + userNum2;13.
const numsSubtracted = userNum1 - userNum2;14.
const numsMultiplied = userNum1 * userNum2;15.
const numsDivided = userNum1 / userNum2;16.
const numsModulused = userNum1 % userNum2;17.
</script>18.
<title>JavaScript Operators</title>19.
</head>20.
<body>21.
<main>22.
<p>23.
<script>24.
document.write(userNum1 + " + " + userNum2 + " = ");25.
document.write(numsAdded + "<br>");26.
document.write(userNum1 + " - " + userNum2 + " = ");27.
document.write(numsSubtracted + "<br>");28.
document.write(userNum1 + " * " + userNum2 + " = ");29.
document.write(numsMultiplied + "<br>");30.
document.write(userNum1 + " / " + userNum2 + " = ");31.
document.write(numsDivided + "<br>");32.
document.write(userNum1 + " % " + userNum2 + " = ");33.
document.write(numsModulused + "<br>");34.
</script>35.
</p>36.
</main>37.
</body>38.
</html>39.
This page is processed as follows:
1. The user is prompted for a number and the result is assigned to userNum1:
290 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

2. An alert pops up telling the user what number they entered. The concatenation operator (+)
is used to combine two strings: “You chose ” and the number entered by the user. Note that
all user-entered data is always treated as a string of text, even if the text consists of only digits:
3. The user is prompted for another number and the result is assigned to userNum2:
4. Another alert pops up telling the user what number they entered:
LESSON 13: Variables, Arrays, and Operators | 291
EVALUATION COPY: Not to be used in class.

---

5. Five constants are declared and assigned values :
const numsAdded = userNum1 + userNum2;
const numsSubtracted = userNum1 - userNum2;
const numsMultiplied = userNum1 * userNum2;
const numsDivided = userNum1 / userNum2;
const numsModulused = userNum1 % userNum2;
6. The values the constants contain are output to the browser:
So, 5 + 4 is 54?? Well, only if 5 and 4 are strings, and, as stated earlier, all user-entered data is treated
as a string. Don’t worry. We will learn how to fix this problem soon.
EVALUATION COPY: Not to be used in class.
### ❋
## 13.12. The Default Operator
Default Operator
DescriptionOperator
Used to assign a default value.||
const yourName = prompt("Your Name?", "") || "Stranger";
The following code sample shows how the default operator works:
292 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

Demo 13.4: VariablesArraysOperators/Demos/default.html
-------Lines 1 through 7 Omitted-------
<script>8.
const yourName = prompt("Your Name?","") || "Stranger";9.
10.
alert("Hi " + yourName + "!");11.
</script>12.
-------Lines 13 through 20 Omitted-------
If the user presses OK without filling out the prompt or presses Cancel, the default value “Stranger”
is assigned to the yourName constant.
Why do we need a default operator?
The default operator allows you to make sure that your variable contains a non-null value, so
that you can perform operations on the variable with no errors. To illustrate, do the following
in the Chrome DevTools Console:
1. Enter the following code and press Enter:
let firstName = prompt("First Name:", "");
This will cause a prompt to pop up.
2. Press the Cancel button. This will return null and assign it to firstName:
3. Enter the following code and press Enter:
let greeting = "Hello, " + firstName;
4. Then output greeting and you’ll see this strange result:
LESSON 13: Variables, Arrays, and Operators | 293
EVALUATION COPY: Not to be used in class.

---

Now repeat the above, but start with:
let firstName = prompt("First Name:", "") || "Stranger";
This time, when you press Cancel, the default value of “Stranger” will be assigned to firstName
and the concatenation operation will work fine:
294 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

# Exercise 18: Working with Operators
### 15 to 25 minutes
In this exercise, you will practice working with JavaScript operators.
1. Open VariablesArraysOperators/Exercises/operators.html for editing.
2. Add code to prompt the user for the number of songs they have downloaded of their favorite
and second favorite rock stars:
LESSON 13: Variables, Arrays, and Operators | 295
EVALUATION COPY: Not to be used in class.

---

3. In the body, let the user know how many more of their favorite rock star’s songs they have
than of their second favorite rock star’s songs:
4. Test your solution in a browser.
296 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

Exercise Code 18.1:VariablesArraysOperators/Exercises/operators.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const rockStars = [];9.
rockStars[0] = prompt("Who is your favorite rock star?", "");10.
/*11.
Ask the user how many of this rockstar's songs they have downloaded12.
and store the result in a variable.13.
*/14.
rockStars[1] = prompt("And your next favorite rock star?", "");15.
/*16.
Ask the user how many of this rockstar's songs they have downloaded17.
and store the result in a variable.18.
*/19.
</script>20.
<title>JavaScript Operators</title>21.
</head>22.
<body>23.
<main>24.
<!--25.
Let the user know how many more of their favorite rock star's songs26.
they have than of their second favorite rock star's songs.27.
-->28.
</main>29.
</body>30.
</html>31.
Challenge
1. Open VariablesArraysOperators/Exercises/operators-challenge.html for editing.
2. Modify it so that it outputs an unordered list as shown below:
LESSON 13: Variables, Arrays, and Operators | 297
EVALUATION COPY: Not to be used in class.

---

Don’t worry about the 54. We will learn how to fix the addition problem soon.
298 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

LESSON 13: Variables, Arrays, and Operators | 299
EVALUATION COPY: Not to be used in class.

---

Solution: VariablesArraysOperators/Solutions/operators.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const rockStars = [];9.
const songTotals = [];10.
rockStars[0] = prompt("Who is your favorite rock star?", "");11.
songTotals[0] = prompt("How many " + rockStars[0] +12.
" songs do you have?", "");13.
rockStars[1] = prompt("And your next favorite rock star?", "");14.
songTotals[1] = prompt("How many " + rockStars[1] +15.
" songs do you have?", "");16.
</script>17.
<title>JavaScript Operators</title>18.
</head>19.
<body>20.
<main>21.
<script>22.
const diff = songTotals[0] - songTotals[1];23.
document.write("You have " + diff + " more songs of " + rockStars[0]);24.
document.write(" than you have of " + rockStars[1] + ".");25.
</script>26.
</main>27.
</body>28.
</html>29.
300 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

Challenge Solution:
VariablesArraysOperators/Solutions/operators-challenge.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const userNum1 = prompt("Choose a number.", "");9.
alert("You chose " + userNum1);10.
const userNum2 = prompt("Choose another number.", "");11.
alert("You chose " + userNum2);12.
const numsAdded = userNum1 + userNum2;13.
const numsSubtracted = userNum1 - userNum2;14.
const numsMultiplied = userNum1 * userNum2;15.
const numsDivided = userNum1 / userNum2;16.
const numsModulused = userNum1 % userNum2;17.
</script>18.
<title>JavaScript Operators</title>19.
</head>20.
<body>21.
<main>22.
<ul>23.
<script>24.
document.write("<li>" + userNum1 + " + " + userNum2 + " = ");25.
document.write(numsAdded + "</li>");26.
document.write("<li>" + userNum1 + " - " + userNum2 + " = ");27.
document.write(numsSubtracted + "</li>");28.
document.write("<li>" + userNum1 + " * " + userNum2 + " = ");29.
document.write(numsMultiplied + "</li>");30.
document.write("<li>" + userNum1 + " / " + userNum2 + " = ");31.
document.write(numsDivided + "</li>");32.
document.write("<li>" + userNum1 + " % " + userNum2 + " = ");33.
document.write(numsModulused + "</li>");34.
</script>35.
</ul>36.
</main>37.
</body>38.
</html>39.
LESSON 13: Variables, Arrays, and Operators | 301
EVALUATION COPY: Not to be used in class.

---

## Conclusion
In this lesson, you have learned to work with JavaScript variables, arrays and operators.
302 | LESSON 13: Variables, Arrays, and Operators
EVALUATION COPY: Not to be used in class.

---

# LESSON 14
# JavaScript Functions
EVALUATION COPY: Not to be used in class.
Topics Covered
JavaScript’s global functions and objects.
Creating your own functions.
Returning values from functions.
## Introduction
In this lesson, you will learn to use some of JavaScript’s built-in-functions, and you will also learn to
create your own.
EVALUATION COPY: Not to be used in class.
### ❋
## 14.1. Global Objects and Functions
A “global” function or object is one that is accessible from anywhere. JavaScript has a number of global
objects and functions. We will examine some of them in this section.
### 14.1.1. parseFloat(object)
The parseFloat() function takes one argument: an object, and attempts to return a floating point
number, which is a decimal number. If it cannot, it returns NaN, for “Not a Number.”
Remember when we “add” two strings using the plus sign (+), the strings are concatenated together,
as the following code illustrates:
LESSON 14: JavaScript Functions | 303
EVALUATION COPY: Not to be used in class.

---

const strNum1 = '1';
const strNum2 = '2';
const strSum = strNum1 + strNum2;
strSum; // will return "12"
Because strNum1 and strNum2 are both strings, the + operator concatenates them, resulting in "12".
We can use parseFloat() to convert those strings to numbers before adding them:
const strNum1 = '1';
const strNum2 = '2';
const num1 = parseFloat(strNum1);
const num2 = parseFloat(strNum2);
const sum = num1 + num2;
sum; // will return 3
After the parseFloat() function has been used to convert the strings to numbers, the + operator
performs addition, resulting in 3.
If the value passed to parseFloat() doesn’t start with a number, the function returns NaN:
parseFloat('I want 1.5 apples'); // will return NaN
### 14.1.2. parseInt(object)
The parseInt() function is similar to parseFloat(). It takes one argument: an object, and attempts
to return an integer. If it cannot, it returns NaN, for “Not a Number.”
As you can see from the following code, parseInt() just strips everything to the right of the first
integer it finds. If the value passed to parseInt() doesn’t start with an integer, the function returns
NaN:
parseInt('1'); // will return 1
parseInt('1.5'); // will return 1
parseInt('1.5 apples'); // will return 1
parseInt('I want 1.5 apples'); // will return NaN
304 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

### 14.1.3. isNaN(object)
The isNaN() function takes one argument: an object. The function checks if the object is not a number
(or cannot be converted to a number). It returns true if the object is not a number and false if it is
a number:
isNaN(4); // will return false
isNaN('4'); // will return false
isNaN('hello'); // will return true
As you can see from the code above, if the passed-in value is a number or can be converted into a
number (e.g., 4 and '4'), isNaN() returns false. Otherwise (e.g., 'hello'), it returns true, meaning
that it is indeed Not a Number.
LESSON 14: JavaScript Functions | 305
EVALUATION COPY: Not to be used in class.

---

# Exercise 19: Working with Global
# Functions
### 10 to 15 minutes
In this exercise, you will practice working with JavaScript’s global functions.
1. Open JavaScriptFunctions/Exercises/built-in-functions.html for editing.
2. As the code is currently written (see below), it will concatenate the user-entered numbers
rather than add them. Fix this so that it outputs the sum of the two numbers entered by the
user.
306 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

Exercise Code 19.1:
JavaScriptFunctions/Exercises/built-in-functions.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
let userNum1;9.
let userNum2;10.
let numsAdded;11.
userNum1 = window.prompt("Choose a number.", "");12.
alert("You chose " + userNum1);13.
userNum2 = window.prompt("Choose another number.", "");14.
alert("You chose " + userNum2);15.
numsAdded = userNum1 + userNum2;16.
</script>17.
<title>JavaScript Built-in Functions</title>18.
</head>19.
<body>20.
<p>21.
<script>22.
document.write(userNum1 + " + " + userNum2 + " = ");23.
document.write(numsAdded);24.
</script>25.
</p>26.
</body>27.
</html>28.
Challenge
Create a new HTML file that prompts the user for
1. Their name:
LESSON 14: JavaScript Functions | 307
EVALUATION COPY: Not to be used in class.

---

The age at which they first worked on a computer:
And their current age:
After gathering this information, write out to the page how many years they have been working
on a computer:
308 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

Notice that the program is able to deal with numbers followed by strings (e.g., “12 years old”).
LESSON 14: JavaScript Functions | 309
EVALUATION COPY: Not to be used in class.

---

Solution: JavaScriptFunctions/Solutions/built-in-functions.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
let userNum1;9.
let userNum2;10.
let numsAdded;11.
userNum1 = window.prompt("Choose a number.", "");12.
alert("You chose " + userNum1);13.
userNum2 = window.prompt("Choose another number.", "");14.
alert("You chose " + userNum2);15.
numsAdded = parseFloat(userNum1) + parseFloat(userNum2);16.
</script>17.
<title>JavaScript Built-in Functions</title>18.
</head>19.
<body>20.
<main>21.
<p>22.
<script>23.
document.write(userNum1 + " + " + userNum2 + " = ");24.
document.write(numsAdded);25.
</script>26.
</p>27.
</main>28.
</body>29.
</html>30.
310 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

Challenge Solution:
JavaScriptFunctions/Solutions/built-in-functions-challenge.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const userName = prompt("What's your name?");9.
const age1 = prompt('How old were you when you first used a computer?');10.
const age2 = prompt('How old are you now?');11.
const diff = parseFloat(age2) - parseFloat(age1);12.
</script>13.
<title>JavaScript Built-in Functions</title>14.
</head>15.
<body>16.
<main>17.
<p>18.
<script>19.
document.write(userName + ', you have used '20.
+'computers for ' + diff + ' years.');21.
</script>22.
</p>23.
</main>24.
</body>25.
</html>26.
Code Explanation
You may have noticed that we are not including the second argument, which is the default value, for
prompt() in the challenge solution. While these could be written as const age2 = prompt("How
old are you now?", "");, this is not necessary as an empty string is the default value.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 14: JavaScript Functions | 311
EVALUATION COPY: Not to be used in class.

---

## 14.2. User-defined Functions
Writing functions makes it possible to reuse code for common tasks. Functions can also be used to
hide complex code. For example, an experienced developer can write a function for performing a
complicated task. Other developers do not need to know how that function works; they only need to
know how to call it.
### 14.2.1. Function Syntax
JavaScript functions generally appear in the head of the page or in external JavaScript files. A function
is written using the function keyword followed by the name of the function.
function doSomething() {
//function statements go here
}
As you can see, the body of the function is contained within curly brackets ({}). The following example
demonstrates the use of simple functions:
312 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

Demo 14.1: JavaScriptFunctions/Demos/simple-functions.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function changeBgRed() {9.
document.body.style.backgroundColor = "red";10.
}11.
12.
function changeBgWhite() {13.
document.body.style.backgroundColor = "white";14.
}15.
</script>16.
<title>JavaScript Simple Functions</title>17.
</head>18.
<body>19.
<button onclick="changeBgRed();">Red</button>20.
<button onclick="changeBgWhite();">White</button>21.
</body>22.
</html>23.
When the user clicks one of the buttons, the event is captured by the onclick event handler and the
corresponding function is called.
### 14.2.2. Passing Values to Functions
The functions above aren’t very useful because they always do the same thing. Every time we wanted
to add another color, we would have to write another function. Also, if we want to modify the behavior,
we will have to do it in each function. The following example shows how to create a single function
to handle changing the background color.
LESSON 14: JavaScript Functions | 313
EVALUATION COPY: Not to be used in class.

---

Demo 14.2: JavaScriptFunctions/Demos/passing-values.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function changeBg(color) {9.
document.body.style.backgroundColor = color;10.
}11.
</script>12.
<title>Passing Values</title>13.
</head>14.
<body>15.
<button onclick="changeBg('red');">Red</button>16.
<button onclick="changeBg('white');">White</button>17.
</body>18.
</html>19.
As you can see, when calling the changeBg() function, we pass a value (e.g., 'red'), which is assigned
to the color variable. We can then refer to the color variable throughout the function. Variables
created in this way are called “parameters” and the values passed to them are called “arguments”. A
function can have any number of parameters, separated by commas.
Adding parameters to functions makes them more flexible and, thus, more useful; as you saw above,
we can call the changeBg() function many times, passing to it a different color as needed. We can
make our functions even more useful by providing default values for parameters so that, if the function
is called without an argument, we assign some default value to the parameter. Here’s how we might
modify our earlier example:
314 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

Demo 14.3:
JavaScriptFunctions/Demos/passing-values-default-param.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function changeBg(color='blue') {9.
document.body.style.backgroundColor = color;10.
}11.
</script>12.
<title>Passing Values - Default Param</title>13.
</head>14.
<body>15.
<p>16.
<button onclick="changeBg('red');">Red</button>17.
<button onclick="changeBg('white');">White</button>18.
<button onclick="changeBg();">Blue (no param)</button>19.
</p>20.
</body>21.
</html>22.
We’ve added a default value for changeBg’s color parameter, giving it the value 'blue' if no value
is supplied when the function is called. We’ve also added a third button on which the user can click;
here we call changeBg() (without a parameter for color) and thus get the default color 'blue'.
A Note on Variable Scope
A variable’s “scope” is the context in which the variable can be referenced. Variables created by
passing arguments to function parameters are local to the function, meaning that they cannot
be accessed outside of the function. The same is true for variables declared within a function
using the let keyword.
Variables declared with let outside of a function can only be used in the block of code in which
the variable is defined.
LESSON 14: JavaScript Functions | 315
EVALUATION COPY: Not to be used in class.

---

# Exercise 20: Writing a JavaScript Function
### 15 to 25 minutes
In this exercise, you will modify a page called resize-box.html, which will contain a box and two
buttons for resizing the box:
1. Open JavaScriptFunctions/Exercises/resize-box.html for editing.
2. Notice that the page has a div with the id “box” and width and height styles set.
3. The page also contains two buttons that call resizeBox() passing in -10 and 10 for the
change argument.
4. Write a function called resizeBox() that has one parameter: change, which is the amount
the width and height of the box should be changed. The default value of change should be
10. The resizeBox() function will need to do the following:
A. Declare a constant box that holds the “box” div. You will do this using
document.getElementById(), which is a method for accessing elements on the
page by their id value:
const box = document.getElementById('box');
B. Declare a constant w that holds the current width of the box. You will do this with
the following line of code:
const w = box.style.width;
316 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

Note that the value will be a string ending in “px” as shown below. This is because
width and height style values take a number and a unit.
C. Just as you did for width, declare a constant h that holds the current height of the
box.
D. Declare variables wNew and hNew that contain the new width and height values.
Note that you will need to add the value of change to the current values of w and
h, but before doing so, you will need to strip off the “px” from w and h and convert
those values to numbers. You can do that with parseInt().
E. Assign the new values of w and h to box.style.width and box.style.height.
Note that you will need to append (concatenate) “px” back to those values.
Exercise Code 20.1: JavaScriptFunctions/Exercises/resize-box.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
// Write your code here9.
</script>10.
<title>Resize Box</title>11.
</head>12.
<body id="resize-box">13.
<main>14.
<div id="box" style="width:100px; height:100px;15.
background-color:blue;"></div>16.
<button onclick="resizeBox(-10)">SHRINK</button>17.
<button onclick="resizeBox(10)">GROW</button>18.
</main>19.
</body>20.
</html>21.
LESSON 14: JavaScript Functions | 317
EVALUATION COPY: Not to be used in class.

---

Challenge
Add separate buttons for changing height and width:
As we haven’t learned to write conditional code yet, you will need to write separate functions; for
example, resizeBoxHeight() and resizeBoxWidth().
318 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

LESSON 14: JavaScript Functions | 319
EVALUATION COPY: Not to be used in class.

---

Solution: JavaScriptFunctions/Solutions/resize-box.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function resizeBox(change=10) {9.
const box = document.getElementById('box');10.
const w = box.style.width;11.
const h = box.style.height;12.
const wNew = parseInt(w) + change;13.
const hNew = parseInt(h) + change;14.
box.style.width = wNew + 'px';15.
box.style.height = hNew + 'px';16.
}17.
</script>18.
<title>Resize Box</title>19.
</head>20.
<body id="resize-box">21.
<main>22.
<div id="box" style="width:100px; height:100px;"></div>23.
<button onclick="resizeBox(-10)">SHRINK</button>24.
<button onclick="resizeBox(10)">GROW</button>25.
</main>26.
</body>27.
</html>28.
320 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

Challenge Solution:
JavaScriptFunctions/Solutions/resize-box-challenge.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function resizeHeight(change=10) {9.
const box = document.getElementById('box');10.
const h = box.style.height;11.
const hNew = parseInt(h) + change;12.
box.style.height = hNew + 'px';13.
}14.
15.
function resizeWidth(change=10) {16.
const box = document.getElementById('box');17.
const w = box.style.width;18.
const wNew = parseInt(w) + change;19.
box.style.width = wNew + 'px';20.
}21.
</script>22.
<title>Resize Box - Challenge</title>23.
</head>24.
<body id="resize-box">25.
<main>26.
<div id="box" style="width:100px; height:100px;"></div>27.
<button onclick="resizeHeight(-10)">SHRINK HEIGHT</button>28.
<button onclick="resizeHeight(10)">GROW HEIGHT</button><br>29.
<button onclick="resizeWidth(-10)">SHRINK WIDTH</button>30.
<button onclick="resizeWidth(10)">GROW WIDTH</button>31.
</main>32.
</body>33.
</html>34.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 14: JavaScript Functions | 321
EVALUATION COPY: Not to be used in class.

---

## 14.3. Returning Values from Functions
The return keyword is used to return values from functions as the following example illustrates:
Demo 14.4: JavaScriptFunctions/Demos/return-value.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function setBgColor() {9.
const bg = prompt("Set Background Color:", "");10.
document.body.style.backgroundColor = bg;11.
}12.
13.
function getBgColor() {14.
return document.body.style.backgroundColor;15.
}16.
</script>17.
<title>Returning a Value</title>18.
</head>19.
<body>20.
<button onclick="setBgColor()">Set Background Color</button>21.
<button onclick="alert(getBgColor())">Get Background Color</button>22.
</body>23.
</html>24.
When the user clicks the “Get Background Color” button, an alert pops up with a value returned from
the getBgColor() function. This is a very simple example. Generally, functions that return values are
a bit more involved. We’ll see many more functions that return values throughout the course.
## Conclusion
In this lesson, you have learned to work with JavaScript’s global functions and to create functions of
your own.
322 | LESSON 14: JavaScript Functions
EVALUATION COPY: Not to be used in class.

---

# LESSON 15
# Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.
Topics Covered
Built-in String object.
Built-in Math object.
Built-in Date object.
## Introduction
JavaScript has some predefined, built-in objects that enable you to work with Strings and Dates, and
perform mathematical operations.
EVALUATION COPY: Not to be used in class.
### ❋
## 15.1. Strings
In JavaScript, there are two types of string data types: primitive strings and String objects. String objects
have many methods for manipulating and parsing strings of text. Because these methods are available
to primitive strings as well, in practice, there is no need to differentiate between the two types of strings.
Some common string properties and methods are shown below. In all the examples, the constant myStr
contains “Webucator”:
const myStr = 'Webucator';
LESSON 15: Built-In JavaScript Objects | 323
EVALUATION COPY: Not to be used in class.

---

Common String Properties
DescriptionProperty
Read-only value containing the number of characters in the string.length
myStr.length; // returns 9
Try the following out in the Chrome DevTools Console:
const myStr = 'Webucator';
myStr.length; // will return 9
Spend some time going through methods in the table below and trying them out in the Chrome
DevTools Console. Note that most programming languages have similar string methods, though they
may use different names. Some of the string methods will seem obscure (“When would I use that?”).
Don’t worry too much about that. The most important takeaway is to understand that there are a lot
of built-in methods for working with strings and to get some practice using them.
324 | LESSON 15: Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.

---

Common String Methods
DescriptionMethod
Returns the character at the specified position.charAt(position)
myStr.charAt(4); // returns 'c'
myStr.charAt(0); // returns 'W'
Searches from startPos (or the beginning of the string, if startPos is not supplied)
for substr. Returns the first position at which substr is found or -1 if substr is
not found.
indexOf(substr,
startPos)
myStr.indexOf("cat"); // returns 4
myStr.indexOf("cat", 5); // returns -1
Searches from endPos (or the end of the string, if endPos is not supplied) for
substr. Returns the last position at which substr is found or -1 is substr is not
found.
lastIndexOf(substr,
endPos)
myStr.lastIndexOf("cat"); // returns 4
myStr.lastIndexOf("cat", 5); // returns 4
Returns the substring beginning at startPos and ending with the character before
endPos. endPos is optional. If it is excluded, the substring continues to the end of
the string.
substring(startPos,
endPos)
myStr.substring(4, 7); // returns cat
myStr.substring(4); // returns cator
Same as substring(startPos, endPos).slice(startPos,
endPos) 
myStr.slice(4, 7); // returns cat
posFromEnd is a negative integer. Returns the substring beginning at startPos
and ending posFromEnd characters from the end of the string.
slice(startPos,
posFromEnd)
myStr.slice(4, -2); // returns cat
Returns an array by splitting a string on the specified delimiter.split(delimiter)
const s = "A,B,C,D";
const a = s.split(",");
document.write(a[2]); // returns C
LESSON 15: Built-In JavaScript Objects | 325
EVALUATION COPY: Not to be used in class.

---

DescriptionMethod
Returns the string in all lowercase letters.toLowerCase()
myStr.toLowerCase(); // returns webucator
Returns the string in all uppercase letters.toUpperCase()
myStr.toUpperCase(); // returns WEBUCATOR
Removes leading and trailing whitespace.trim()
' Webucator '.trim(); // returns Webucator with no spaces around it
Below are the same methods from the table above shown in the Chrome DevTools Console:
Splitting a String
The split() method returns an array by splitting a string on the specified delimiter (separator). The
following code illustrates this:
326 | LESSON 15: Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.

---

const s = "A,B,C,D";
const a = s.split(",");
a[2]; // returns C
Try it out in the Chrome DevTools Console:
Converting an Object to a String
To convert an object to a string, pass it to String(). For example:
String Documentation
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Glob
al_Objects/String for full documentation on Strings.
LESSON 15: Built-In JavaScript Objects | 327
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 15.2. Math
The Math object’s properties and methods are accessed directly (e.g., Math.PI) and are used for
performing complex math operations. Some common math properties and methods are shown below:
Common Math Properties
DescriptionProperty
The value of Pi (Π)Math.PI
Math.PI; //3.141592653589793
Square root of 2.Math.SQRT2
Math.SQRT2; //1.4142135623730951
Try the following out in the Chrome DevTools Console:
Spend some time going through methods in the table below and trying them out in the Chrome
DevTools Console.
328 | LESSON 15: Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.

---

Common Math Methods
DescriptionMethod
Absolute value of number.Math.abs(number)
Math.abs(-12); // returns 12
number rounded up.Math.ceil(number)
Math.ceil(5.4); // returns 6
number rounded down.Math.floor(number)
Math.floor(5.6); // returns 5
Highest Number in numbers.Math.max(numbers)
Math.max(2, 5, 9, 3); // returns 9
Lowest Number in numbers.Math.min(numbers)
Math.min(2, 5, 9, 3); // returns 2
number to the power of power.Math.pow(number, power)
Math.pow(2, 5); // returns 32
Rounded number.Math.round(number)
Math.round(2.5); // returns 3
Random number between 0 and 1.Math.random()
Math.random(); // Returns random number from 0 to 1
Below are the same methods from the table above shown in the Chrome DevTools Console:
LESSON 15: Built-In JavaScript Objects | 329
EVALUATION COPY: Not to be used in class.

---

Method for Generating Random Integers
Because Math.random() returns a decimal value greater than or equal to 0 and less than 1, we can use
the following code to return a random integer between low and high, inclusively (meaning the low
and high values are included):
function randInt(low, high) {
const rndDec = Math.random();
const rndInt = Math.floor(rndDec * (high - low + 1) + low);
return rndInt;
}
And here it is in the Chrome DevTools Console:
330 | LESSON 15: Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.

---

Math Documentation
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Glob
al_Objects/Math for full documentation on Math.
EVALUATION COPY: Not to be used in class.
### ❋
## 15.3. Date
The Date object has methods for manipulating dates and times. JavaScript stores dates as the number
of milliseconds since January 1, 1970.
The Epoch
The epoch is the moment that a computer or computer language considers time to have started.
JavaScript considers the epoch to be January 1, 1970 at midnight (1970-01-01 00:00:00)
The following code samples show the different methods of creating date objects, all of which involve
passing arguments to the Date() constructor (a special function for creating objects):
New Date object with current date and time
const now = new Date();
now; // returns Thu Nov 11, 2021 18:40:31 GMT-0500 (Eastern Standard Time
LESSON 15: Built-In JavaScript Objects | 331
EVALUATION COPY: Not to be used in class.

---

New Date object with specific date and time
// Syntax: new Date('month dd, yyyy hh:mm:ss')
const moonLanding = new Date('July 21, 1969 16:18:00');
moonLanding; // returns Mon Jul 21, 1969 16:18:00 GMT-0400 (Eastern Daylight Time)
// Alternative Syntax: new Date(year, month, day, hours, min, sec, millisec)
const moonLanding = new Date(1969, 6, 21, 16, 18, 0, 0);
moonLanding; // returns Mon Jul 21, 1969 16:18:00 GMT-0400 (Eastern Daylight Time)
A few things to note:
1. To create a Date object containing the current date and time, the Date() constructor takes
no arguments.
2. When passing the date as a string to the Date() constructor, the time portion is optional. If
it is not included, it defaults to 00:00:00. Also, other date formats are acceptable (e.g.,
'6/21/1969' and '06-21-1969').
3. When passing date parts to the Date() constructor, dd, hh, mm, ss, and ms are all optional.
The default for dd is 1; the other parameters default to 0.
4. Months are numbered from 0 (January) to 11 (December). In the example above, 6 represents
July.
Some common date methods are shown below. In all the examples, the variable moonLanding contains
the date Mon Jul 21, 1969 16:18:00 GMT-0400 (Eastern Daylight Time).
332 | LESSON 15: Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.

---

Common Date Methods
DescriptionMethod
Returns the day of the month (1-31).getDate()
moonLanding.getDate();
// returns 21
Returns the day of the week as a number (0-6, 0=Sunday, 6=Saturday).getDay()
moonLanding.getDay();
// returns 1
Returns the month as a number (0-11, 0=January, 11=December).getMonth()
moonLanding.getMonth();
// returns 6
Returns the four-digit year.getFullYear()
moonLanding.getFullYear();
// returns 1969
Returns the hour (0-23).getHours()
moonLanding.getHours();
// returns 16
Returns the minute (0-59).getMinutes()
moonLanding.getMinutes();
// returns 18
Returns the second (0-59).getSeconds()
moonLanding.getSeconds();
// returns 0
Returns the millisecond (0-999).getMilliseconds()
moonLanding.getMilliseconds();
// returns 0
Returns the number of milliseconds since midnight January 1, 1970.getTime()
moonLanding.getTime();
// returns -14096520000. It’s negative, because it’s before the epoch.
LESSON 15: Built-In JavaScript Objects | 333
EVALUATION COPY: Not to be used in class.

---

DescriptionMethod
Returns the time difference in minutes between the user’s computer and GMT.getTimezoneOffset()
moonLanding.getTimezoneOffset();
// returns 240
Returns the Date object as a string.toLocaleString()
moonLanding.toLocaleString();
// returns '7/21/1969, 4:18:00 PM'
Returns the date portion of a Date object as a string.toLocaleDateString()
moonLanding.toLocaleDateString();
// returns '7/21/1969'
Returns the time portion of a Date object as a string.toLocaleTimeString()
moonLanding.toLocaleTimeString();
// returns '4:18:00 PM'
Returns the Date object as a string in GMT timezone.toGMTString()
moonLanding.toGMTString();
// returns 'Mon, 21 Jul 1969 20:18:00 GMT'
Below are the same methods from the table above shown in the Chrome DevTools Console:
334 | LESSON 15: Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.

---

Date Documentation
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Glob
al_Objects/Date for full documentation on Date.
LESSON 15: Built-In JavaScript Objects | 335
EVALUATION COPY: Not to be used in class.

---

Let’s see how we can use dates to build useful helper functions.
EVALUATION COPY: Not to be used in class.
### ❋
## 15.4. Helper Functions
Some languages have functions that return the month as a string. JavaScript doesn’t have such a built-in
function. The following sample shows a user-defined “helper” function that handles this and how the
getMonth() method of a Date object can be used to get the month.
Demo 15.1: BuiltInObjects/Demos/month-as-string.html
-------Lines 1 through 7 Omitted-------
<script>8.
function monthAsString(num) {9.
const months = ["January", "February", "March", "April",10.
"May", "June", "July", "August", "September",11.
"October", "November", "December"];12.
return months[num-1];13.
}14.
15.
function enterMonth() {16.
const userMonth = prompt("What month were you born?", "");17.
alert("You were born in " + monthAsString(userMonth) + ".");18.
}19.
20.
function getCurrentMonth() {21.
const today = new Date();22.
alert(monthAsString(today.getMonth()+1));23.
}24.
</script>25.
-------Lines 26 through 34 Omitted-------
Run this page in your browser and then click the buttons to see how they work.
336 | LESSON 15: Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.

---

# Exercise 21: Returning the Day of the
# Week as a String
### 15 to 25 minutes
In this exercise, you will create a function that returns the day of the week as a string.
1. Open BuiltInObjects/Exercises/date-udfs.html for editing.
2. Write a dayAsString() function that returns the day of the week as a string, with "1"
returning "Sunday", "2" returning "Monday", etc.
3. Write an enterDay() function that prompts the user for the day of the week (as a number)
and then alerts the string value of that day by calling the dayAsString() function.
4. Write a getCurrentDay() function that alerts today’s actual day of the week according to
the user’s machine.
5. Add a CHOOSE DAY button that calls the enterDay() function.
6. Add a GET CURRENT DAY button that calls the getCurrentDay() function.
7. Test your solution in a browser.
LESSON 15: Built-In JavaScript Objects | 337
EVALUATION COPY: Not to be used in class.

---

Solution: BuiltInObjects/Solutions/date-udfs.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function monthAsString(num) {9.
const months = [];10.
months[0] = "January";11.
months[1] = "February";12.
months[2] = "March";13.
months[3] = "April";14.
months[4] = "May";15.
months[5] = "June";16.
months[6] = "July";17.
months[7] = "August";18.
months[8] = "September";19.
months[9] = "October";20.
months[10] = "November";21.
months[11] = "December";22.
23.
return months[num-1];24.
}25.
26.
function dayAsString(num) {27.
const weekDays = [];28.
weekDays[0] = "Sunday";29.
weekDays[1] = "Monday";30.
weekDays[2] = "Tuesday";31.
weekDays[3] = "Wednesday";32.
weekDays[4] = "Thursday";33.
weekDays[5] = "Friday";34.
weekDays[6] = "Saturday";35.
36.
return weekDays[num-1];37.
}38.
39.
function enterMonth() {40.
const userMonth = prompt("What month were you born?", "");41.
alert("You were born in " + monthAsString(userMonth) + ".");42.
}43.
44.
338 | LESSON 15: Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.

---

function getCurrentMonth() {45.
const today = new Date();46.
alert(monthAsString(today.getMonth()+1));47.
}48.
49.
function enterDay() {50.
const userDay = prompt("What day of the week is it?", "");51.
alert("Today is " + dayAsString(userDay) + ".");52.
}53.
54.
function getCurrentDay() {55.
const today = new Date();56.
alert(dayAsString(today.getDay()+1));57.
}58.
</script>59.
<title>Date UDFs</title>60.
</head>61.
<body>62.
<main>63.
<button onclick="enterMonth()">CHOOSE MONTH</button>64.
<button onclick="getCurrentMonth()">GET CURRENT MONTH</button>65.
<hr>66.
<button onclick="enterDay()">CHOOSE DAY</button>67.
<button onclick="getCurrentDay()">GET CURRENT DAY</button>68.
</main>69.
</body>70.
</html>71.
## Conclusion
In this lesson, you have learned to work with some of JavaScript’s most useful built-in objects.
LESSON 15: Built-In JavaScript Objects | 339
EVALUATION COPY: Not to be used in class.

---

340 | LESSON 15: Built-In JavaScript Objects
EVALUATION COPY: Not to be used in class.

---

# LESSON 16
# Conditionals and Loops
EVALUATION COPY: Not to be used in class.
Topics Covered
if - else if - else blocks.
switch / case blocks.
Loops.
## Introduction
In this lesson, you will learn to branch your code using if and switch conditions, and to use different
types of loops.
EVALUATION COPY: Not to be used in class.
### ❋
## 16.1. Conditionals
There are two types of conditionals in JavaScript:
1. if - else if - else
2. switch / case
LESSON 16: Conditionals and Loops | 341
EVALUATION COPY: Not to be used in class.

---

### 16.1.1. if - else if - else Conditions
if (conditions) {
statements;
} else if (conditions) {
statements;
} else {
statements;
}
Like with functions, each part of the if - else if - else block is contained within curly brackets
({}). There can be zero or more else if blocks. The else block is optional.
Comparison Operators
DescriptionOperator
Equals==
Doesn’t equal!=
Strictly equals===
Doesn’t strictly equal!==
Is greater than>
Is less than<
Is greater than or equal to>=
Is less than or equal to<=
Note the difference between == (equals) and === (strictly equals). For two objects to be strictly equal
they must be of the same value and the same type, whereas to be equal they must only have the same
value. See the code samples below:
342 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

Notice that 0 is equal to, but not strictly equal to, an empty string. Both these values are falsy, meaning
that when they are treated as Booleans, they are considered to be false. More on this soon.
It is almost always better to use the strictly equals operator (===) and the corresponding doesn’t strictly
equal operator (!==) as these help avoid unanticipated errors.
Logical Operators
ExampleDescriptionOperator
(a == b && c != d)and&&
(a == b || c != d)or||
!(a == b || c == d)not!
The following example shows a function using an if - else if - else condition.
LESSON 16: Conditionals and Loops | 343
EVALUATION COPY: Not to be used in class.

---

Demo 16.1: ConditionalsAndLoops/Demos/if-else-if-else.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function checkAge() {9.
const age = prompt("Your age?", "") || "";10.
11.
if (age >= 21) {12.
alert("You can vote and drink!");13.
} else if (age >= 18) {14.
alert("You can vote, but can't drink.");15.
} else {16.
alert("You cannot vote or drink.");17.
}18.
}19.
</script>20.
<title>JavaScript Conditionals Demo</title>21.
</head>22.
<body>23.
<main>24.
<h1>JavaScript if - else if - else Demo</h1>25.
<h2>Age Check</h2>26.
<button onclick="checkAge()">Age Check</button>27.
</main>28.
</body>29.
</html>30.
The display of the page is shown below:
344 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

When the user clicks the Age Check button, the following prompt pops up:
After the user enters their age, an alert pops up. The text of the alert depends on the user’s age. The
three possibilities are shown below:
LESSON 16: Conditionals and Loops | 345
EVALUATION COPY: Not to be used in class.

---

Compound Conditions
Compound conditions are conditions that check for multiple things. See the following sample:
if (age > 18 && isCitizen) {
alert("You can vote!");
}
if (age >= 16 && (isCitizen || hasGreenCard)) {
alert("You can work in the United States");
}
EVALUATION COPY: Not to be used in class.
### ❋
## 16.2. Short-circuiting
JavaScript is lazy (or efficient) about processing compound conditions. As soon as it can determine the
overall result of the compound condition, it stops looking at the remaining parts of the condition:
Short-circuiting is useful for checking that a variable is of the right data type before you try to manipulate
it.
346 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

To illustrate, take a look at the following sample:
Demo 16.2: ConditionalsAndLoops/Demos/password-check-broken.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const userPass = prompt("Password:", ""); //ESC here causes problems9.
const pw = "xyz";10.
</script>11.
<title>Password Check</title>12.
</head>13.
<body>14.
<main>15.
<script>16.
if (userPass.toLowerCase() === pw) {17.
document.write("<h1>Welcome!</h1>");18.
} else {19.
document.write("<h1>Bad Password!</h1>");20.
}21.
</script>22.
</main>23.
</body>24.
</html>25.
Everything works fine as long as the user does what you expect. However, if the user clicks the Cancel
button when prompted for a password, the value null will be assigned to userPass. Because null is
not a string, it does not have the toLowerCase() method. So the following line will result in a JavaScript
error:
if (userPass.toLowerCase() === pw)
You can see the error in Chrome DevTools Console:
LESSON 16: Conditionals and Loops | 347
EVALUATION COPY: Not to be used in class.

---

This can be fixed by using typeof (described below) to first check if userPass is a string as shown
in the following sample:
The typeof Operator
The typeof operator is used to find out the type of a piece of data. The following screenshot
shows what the typeof operator returns for different data types:
348 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

Demo 16.3: ConditionalsAndLoops/Demos/password-check.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const userPass = prompt("Password:", "");9.
const pw = "xyz";10.
</script>11.
<title>Password Check</title>12.
</head>13.
<body>14.
<main>15.
<script>16.
if (typeof userPass === "string" && userPass.toLowerCase() === pw) {17.
document.write("<h1>Welcome!</h1>");18.
} else {19.
document.write("<h1>Bad Password!</h1>");20.
}21.
</script>22.
</main>23.
</body>24.
</html>25.
Now, if the user presses Cancel and userPass gets null, this check will fail: typeof userPass ===
"string". Because the if condition uses && requiring that both conditions are true for the whole
statement to be true, there is no reason to check the second condition if the first condition is false. So,
JavaScript short circuits, meaning it immediately returns false without wasting time checking the
second condition.
Short circuiting also works with or conditions (e.g., if (a or b)). In this case, the whole statement
is true if either side of the or condition is true. So, if a is true, there is no reason to check b. JavaScript
will short circuit and return true.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 16: Conditionals and Loops | 349
EVALUATION COPY: Not to be used in class.

---

## 16.3. Switch / Case
switch (expression) {
case value :
statements;
case value :
statements;
default :
statements;
}
Like if - else if - else statements, switch / case statements are used to run different code at
different times. Unlike if statements, switch / case statements are limited to checking for equality.
Each case is checked to see if the expression matches the value.
Take a look at the following example:
350 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

Demo 16.4: ConditionalsAndLoops/Demos/switch-without-break.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const quantity = 1;9.
switch (quantity) {10.
case 1 :11.
alert("quantity is 1");12.
case 2 :13.
alert("quantity is 2");14.
default :15.
alert("quantity is not 1 or 2");16.
}17.
</script>18.
<title>Switch</title>19.
</head>20.
<body>21.
<main>22.
<p>Nothing to show here.</p>23.
</main>24.
</body>25.
</html>26.
When you run this page in a browser, you’ll see that all three alerts pop up, even though only the first
case is a match:
LESSON 16: Conditionals and Loops | 351
EVALUATION COPY: Not to be used in class.

---

That’s because if a match is found, none of the remaining cases are checked and all the remaining
statements in the switch block are executed. To stop this process, you can insert a break statement,
which will end the processing of the switch statement.
The corrected code is shown in the following example:
Demo 16.5: ConditionalsAndLoops/Demos/switch-with-break.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
const quantity = 1;9.
switch (quantity) {10.
case 1 :11.
alert("quantity is 1");12.
break;13.
case 2 :14.
alert("quantity is 2");15.
break;16.
default :17.
alert("quantity is not 1 or 2");18.
}19.
</script>20.
<title>Switch</title>21.
</head>22.
<body>23.
<main>24.
<p>Nothing to show here.</p>25.
</main>26.
</body>27.
</html>28.
352 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

The following example shows how a switch / case statement can be used to decide what math
operation to perform:
LESSON 16: Conditionals and Loops | 353
EVALUATION COPY: Not to be used in class.

---

Demo 16.6: ConditionalsAndLoops/Demos/do-math.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function doMath(operator) {9.
const n1 = parseFloat(document.getElementById('n1').value);10.
const n2 = parseFloat(document.getElementById('n2').value);11.
let result;12.
switch (operator) {13.
case "+":14.
result = n1 + n2;15.
break;16.
case "-":17.
result = n1 - n2;18.
break;19.
case "*":20.
result = n1 * n2;21.
break;22.
case "/":23.
result = n1 / n2;24.
break;25.
default:26.
alert("Bad operator");27.
}28.
alert(n1 + operator + n2 + '=' + result);29.
}30.
</script>31.
<title>doMath</title>32.
</head>33.
<body>34.
<main>35.
<label for="n1">First Number:</label> <input id="n1">36.
<label for="n2">Second Number:</label> <input id="n2">37.
<button onclick="doMath('+')">Add</button>38.
<button onclick="doMath('-')">Subtract</button>39.
<button onclick="doMath('*')">Multiply</button>40.
<button onclick="doMath('/')">Divide</button>41.
</main>42.
</body>43.
</html>44.
354 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

Use Case for switch Without break
In most cases, you will include break statements in your switch conditions; however, there are cases
when it makes sense to continue to execute all the subsequent statements in a switch condition after
a match has been found. Consider the following, in which permissions are being added to an array
based on a user’s role:
const role = 'Admin';
const permissions = [];
switch (role) {
case 'SuperAdmin':
permissions.push('delete');
case 'Admin':
permissions.push('update');
case 'Contributor':
permissions.push('create');
default:
permissions.push('read');
}
console.log(permissions);
The code above will log (3) ['update', 'create', 'read'] to the console. That’s because role
is set to 'Admin'. The logic works as follows:
1. Does role contain 'SuperAdmin'? No, it does not. So, it doesn’t push 'delete' onto the
permissions array.
2. Does role contain 'Admin'? Yes, it does. So, it pushes 'update' onto the permissions
array.
3. Then, it stops checking the cases, because it already found the match. And it continues
executing all the statements until it finds a break or it reaches the end of the switch statement.
In this case, there are no break statements, so it pushes 'create' and 'update' onto the
permissions array.
The result is that SuperAdmin will get all permissions. Admin will get update, create, and read
permissions. Contributor will get create and read permissions. All others will only get read permissions.
Order of Conditions
In conditional statements it’s generally a good practice to test for the most likely cases/matches
first so the browser can find the correct code to execute more quickly.
LESSON 16: Conditionals and Loops | 355
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 16.4. Ternary Operator
The ternary operator provides a shortcut for if conditions. The syntax is as follows:
const constName = (condition) ? valueIfTrue : valueIfFalse;
For example:
const evenOrOdd = (number % 2 === 0) ? "even" : "odd";
The following code sample shows how the ternary operator works:
Demo 16.7: ConditionalsAndLoops/Demos/ternary.html
-------Lines 1 through 7 Omitted-------
<script>8.
const num = parseInt(prompt("Enter a number.",""));9.
10.
//without ternary11.
if (num % 2 === 0) {12.
alert(num + " is even.");13.
} else {14.
alert(num + " is odd.");15.
}16.
17.
//with ternary18.
const term = num % 2 === 0 ? "even" : "odd";19.
alert(num + " is " + term);20.
</script>21.
-------Lines 22 through 29 Omitted-------
The first block shows a regular if-else statement.
The second block shows how to accomplish the same thing in a couple of lines of code with the ternary
operator.
356 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 16.5. Truthy and Falsy
JavaScript has a boolean data type, which has only two possible values: true or false. In addition,
every value and expression in JavaScript can be converted to true or false.
When a non-boolean literal value, variable, or expressions is used in a boolean context (e.g, an if
condition or with the default operator), it is implicitly converted to a boolean. This process is called
Type Coercion. For example, look at the following code, which uses the default operator:
const a = 1 || 2;
The value 1 is interpreted as true, so a will get 1. Non-boolean values that are treated as true when
used in a boolean context are said to be truthy.
Now examine the following code:
const a = 0 || 2;
The value 0 is interpreted as false, so a will get 2. Non-boolean values that are treated as false when
used in a boolean context are said to be falsy.
The only falsy values are:
1. 0, but not "0", which is a string.
2. "" – a zero-length string.
3. null
4. undefined
5. NaN – a special number value that means “Not a Number”. For example, NaN is the result of
dividing 0 by 0 or finding the square root of a negative number (e.g. Math.sqrt(-1)).
All other values are truthy.
LESSON 16: Conditionals and Loops | 357
EVALUATION COPY: Not to be used in class.

---

# Exercise 22: Conditional Processing
### 20 to 30 minutes
In this exercise, you will practice using conditional processing.
1. Open ConditionalsAndLoops/Exercises/conditionals.html for editing.
2. Notice that there is an onclick event handler on the button that calls the greetUser()
function. Create this function in the script block.
3. The function should do the following:
A. Ask (via a prompt) if the user is right- or left-handed.
B. If the user enters a value other than “right” or “left”, prompt again.
C. Ask (via a prompt) for the user’s last name.
D. If the user leaves the last name blank, prompt again.
E. If the user enters a number for the last name, alert that a last name can’t be a number
and prompt again.
F. After collecting the user’s dominant hand and last name:
If the dominant hand is valid, pop up an alert that greets the user
appropriately (e.g., “Hello Lefty Smith!”)
If the dominant hand is not valid, pop up an alert that reads something like
“XYZ is not a valid value for dominant hand!”
4. Test your solution in a browser.
Challenge
1. Allow the user to enter the dominant hand in any case (e.g., left, Left, LEFT, right, Right,
RIGHT).
2. If the user enters a last name that does not start with a capital letter, prompt to try again.
358 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

LESSON 16: Conditionals and Loops | 359
EVALUATION COPY: Not to be used in class.

---

Solution: ConditionalsAndLoops/Solutions/conditionals.html
-------Lines 1 through 7 Omitted-------
<script>8.
function greetUser() {9.
let dominantHand;10.
let lastName;11.
12.
dominantHand = prompt("Are you left- or right-handed?", "") || "";13.
if (dominantHand !== "right" && dominantHand !== "left") {14.
dominantHand = prompt("Try again: right or left?", "") || "";15.
}16.
17.
lastName = prompt("What's your last name?", "") || "";18.
if (lastName.length === 0) {19.
lastName = prompt("No last name? Please re-enter:", "") || "";20.
} else if (!isNaN(lastName)) {21.
lastName = prompt("Names aren't numbers. Re-enter:", "") || "";22.
}23.
24.
switch (dominantHand) {25.
case "right" :26.
alert("Hello Righty " + lastName + "!");27.
break;28.
case "left" :29.
alert("Hello Lefty " + lastName + "!");30.
break;31.
default :32.
alert(dominantHand + " is not a valid value for dominant hand!");33.
}34.
}35.
</script>36.
-------Lines 37 through 44 Omitted-------
360 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

Challenge Solution:
ConditionalsAndLoops/Solutions/conditionals-challenge.html
-------Lines 1 through 7 Omitted-------
<script>8.
function greetUser() {9.
let dominantHand;10.
let lastName;11.
12.
dominantHand = prompt("Are you left- or right-handed?", "") || "";13.
dominantHand = dominantHand.toLowerCase();14.
if (dominantHand !== "right" && dominantHand !== "left") {15.
dominantHand = prompt("Try again: right or left?", "") || "";16.
}17.
18.
lastName = prompt("What's your last name?", "") || "";19.
const firstLetter = lastName.substring(0, 1);20.
if (lastName.length === 0) {21.
lastName = prompt("No last name? Please re-enter:", "") || "";22.
} else if (!isNaN(lastName)) {23.
lastName = prompt("Names aren't numbers. Re-enter:", "") || "";24.
} else if (firstLetter === firstLetter.toLowerCase()) {25.
lastName = prompt("Names begin with capital letters. Re-enter:", "") || "";26.
}27.
28.
switch (dominantHand) {29.
case "right" :30.
alert("Hello Righty " + lastName + "!");31.
break;32.
case "left" :33.
alert("Hello Lefty " + lastName + "!");34.
break;35.
default :36.
alert(dominantHand + " is not a valid value for dominant hand!");37.
}38.
}39.
</script>40.
-------Lines 41 through 48 Omitted-------
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 16: Conditionals and Loops | 361
EVALUATION COPY: Not to be used in class.

---

## 16.6. Loops
There are several types of loops in JavaScript:
while
do…while
for
for…in
for…of
EVALUATION COPY: Not to be used in class.
### ❋
## 16.7. while and do…while Loops
### 16.7.1. while Loop Syntax
while (conditions) {
statements;
}
The while loop first checks one or more conditions and then executes the statements in its body as
long as those conditions are true. Something, usually a statement within the while block, must cause
the condition to change so that it eventually becomes false and causes the loop to end. Otherwise, you
get stuck in an infinite loop, which can bring down the browser.
Here is an example of a while loop:
let i=0;
while (i < 5) {
console.log(i);
i++; // changing value of i
}
And here’s the above code executed at Chrome DevTools Console:
362 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

### 16.7.2. do…while Loop Syntax
do {
statements;
} while (conditions);
The do…while loop checks the conditions after each execution of the statements in the body. Again,
something, usually a statement within the do block, must cause the condition to change so that it
eventually becomes false and causes the loop to end.
Here is an example of a do…while loop:
let i=0;
do {
console.log(i);
i++; // changing value of i
} while (i < 5);
And here’s the above code executed at Chrome DevTools Console:
LESSON 16: Conditionals and Loops | 363
EVALUATION COPY: Not to be used in class.

---

Unlike with while loops, the statements in do…while loops will always execute at least one time
because the conditions are not checked until the end of each iteration. The following code illustrates
this:
EVALUATION COPY: Not to be used in class.
### ❋
## 16.8. for Loops
### 16.8.1. for Loop Syntax
for (initialization; conditions; change) {
statements;
}
In for loops, the initialization, conditions, and change are all placed up front and separated by
semi-colons. This makes it easy to remember to include a change statement that will eventually cause
the loop to end.
for loops are often used to iterate through arrays. The length property of an array can be used to
check how many elements the array contains. For example:
const fruit = ['Apples', 'Oranges', 'Bananas', 'Pears'];
for (let i=0; i<fruit.length; i++) {
console.log(fruit[i]);
}
364 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

And here’s the above code executed at Chrome DevTools Console:
### 16.8.2. for…of Loop Syntax
for (let item of iterable) {
statement;
}
for…of loops are used to loop through any iterable object – usually arrays, but there are other types of
iterable objects as well. For example:
const fruit = ['Apples', 'Oranges', 'Bananas', 'Pears'];
for (let i of fruit) {
console.log(i);
}
And here’s the above code executed at Chrome DevTools Console:
LESSON 16: Conditionals and Loops | 365
EVALUATION COPY: Not to be used in class.

---

### 16.8.3. for…in Loop Syntax
for (let item in object) {
statements;
}
for…in loops are used to loop through object properties. A common mistake is to use this type of loop
to iterate through arrays. Most of the time, this will work fine, but for reasons that are beyond the
scope of this course, you should avoid using for…in loops to iterate through arrays. We cover the
syntax here only because you are likely to see this type of loop used incorrectly and we want you to be
able to recognize it. If you would like to learn more why it should be avoided, see https://develop
er.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#Arrays.
EVALUATION COPY: Not to be used in class.
### ❋
## 16.9. ### break ## and ### continue
The break statement is used to break out of a loop, usually when some condition is met.
for (let item of object) {
doSomething(item);
if (conditions) {
break;
// loop will stop executing
// and afterLoop() will run
}
}
afterLoop();
The following code illustrates how break works:
366 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

Notice that the Bananas and Pears do not get logged, because the loop is broken as soon as Oranges,
which contains “an” is found.
The continue statement is used to move on to the next iteration of the loop. It is used when a condition
is met that makes it unnecessary to run the rest of the code in the loop body for that iteration.
for (let item of object) {
doSomething(item);
if (conditions) {
continue;
// loop will move on to next item
// doSomethingElse() won’t be executed for this item
}
doSomethingElse(item);
}
The following code illustrates how continue works:
Notice that the Oranges and Bananas do not get logged, because both contain “an”, and when that
condition is met, the loop moves on to the next iteration.
LESSON 16: Conditionals and Loops | 367
EVALUATION COPY: Not to be used in class.

---

# Exercise 23: Working with Loops
### 20 to 30 minutes
In this exercise, you will practice working with loops.
1. Open ConditionalsAndLoops/Exercises/loops.html for editing. You will see that this
file is similar to the solution to the challenge from the last exercise.
2. Declare an additional variable called greeting.
3. Create an array called presidents that contains the last names of four or more past presidents.
4. Currently, the user only gets two tries to enter a valid dominantHand and lastName. Modify
the code so that, in both cases, the user continues to get prompted until the data is valid.
A. For dominantHand, the first prompt should be “Are you left- or right-handed?”
Each subsequent prompt should be “Try again: right or left?”
B. For lastName, it should just continue prompting “What’s your last name?” until
the user enters a valid last name.
5. Change the switch block so that it assigns an appropriate value (e.g., “Hello Lefty Smith”)
to the greeting variable rather than popping up an alert.
6. After the switch block, write code that alerts the user by name if they have the same last
name as a president. There is no need to alert those people who have non-presidential names.
Challenge
1. For those people who do not have presidential names, pop up an alert that tells them their
names are not presidential.
368 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

LESSON 16: Conditionals and Loops | 369
EVALUATION COPY: Not to be used in class.

---

Solution: ConditionalsAndLoops/Solutions/loops.html
-------Lines 1 through 7 Omitted-------
<script>8.
function greetUser() {9.
let dominantHand;10.
let lastName;11.
let greeting;12.
const presidents = ["Washington", "Jefferson", "Lincoln", "Kennedy"];13.
14.
dominantHand = prompt("Are you left- or right-handed?", "") || "";15.
dominantHand = dominantHand.toLowerCase();16.
while (dominantHand !== "right" && dominantHand !== "left") {17.
dominantHand = prompt("Try again: right or left?", "") || "";18.
}19.
20.
do {21.
lastName = prompt("What's your last name?", "") || "";22.
} while (lastName.length === 023.
|| !isNaN(lastName)24.
|| lastName.substring(0, 1) === lastName.substring(0, 1).toLowerCase())25.
26.
switch (dominantHand) {27.
case "right" :28.
greeting = "Hello Righty " + lastName + "!";29.
break;30.
default : // If not right, must be left31.
greeting = "Hello Lefty " + lastName + "!";32.
}33.
34.
for (let lName of presidents) {35.
if (lName === lastName) {36.
alert(greeting + ' Your name is presidential!');37.
break; // No need to keep looking after we've found a match38.
}39.
}40.
}41.
</script>42.
-------Lines 43 through 50 Omitted-------
370 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

Challenge Solution:
ConditionalsAndLoops/Solutions/loops-challenge.html
-------Lines 1 through 34 Omitted-------
let match = false;35.
for (let lName of presidents) {36.
if (lName === lastName) {37.
alert(greeting + ' Your name is presidential!');38.
match = true;39.
break; // No need to keep looking after we've found a match40.
}41.
}42.
if (!match) {43.
alert(greeting + ' Your name is not presidential!');44.
}45.
-------Lines 46 through 55 Omitted-------
EVALUATION COPY: Not to be used in class.
### ❋
## 16.10. Array: forEach()
Another way to loop through arrays is to use the array’s built-in forEach() method.
myArray.forEach( function(item) {
doSomething(item);
});
Each item of the array is passed to the function one by one. For example:
const fruit = ['Apples', 'Oranges', 'Bananas', 'Pears'];
fruit.forEach(function(item) {
console.log(item);
});
And here’s the above code executed at Chrome DevTools Console:
LESSON 16: Conditionals and Loops | 371
EVALUATION COPY: Not to be used in class.

---

## Conclusion
In this lesson, you learned:
To work with if-else if-else conditions.
To work with switch / case conditionals.
To work with several types of loops.
372 | LESSON 16: Conditionals and Loops
EVALUATION COPY: Not to be used in class.

---

# LESSON 17
# Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.
Topics Covered
Understanding on-event handlers.
Commonly-used on-event handlers.
addEventListener().
Benefits of event listeners.
## Introduction
On-event handlers allow us to listen for user actions and to respond to those events with custom code.
EVALUATION COPY: Not to be used in class.
### ❋
## 17.1. On-event Handlers
On-event handlers are attributes that force an element to “listen” for a specific event to occur.
We might, for instance, listen for a user to click a specific div element, listen for a form submission,
or listen for the user to pass their mouse over any input element of a given class.
The table below lists commonly-used HTML on-event handlers with descriptions:
LESSON 17: Event Handlers and Listeners | 373
EVALUATION COPY: Not to be used in class.

---

HTML On-event Handlers
DescriptionOn-event Handler
The element lost the focus.onblur
The element value was changed.onchange
A pointer button was clicked.onclick
A pointer button was double-clicked.ondblclick
The element received the focus.onfocus
A key was pressed down.onkeydown
A key was pressed and released.onkeypress
A key was released.onkeyup
The document has been loaded.onload
A pointer button was pressed down.onmousedown
A pointer was moved within the element.onmousemove
A pointer was moved off of the element.onmouseout
A pointer was moved onto the element.onmouseover
A pointer button was released over the element.onmouseup
The form was reset.onreset
Some text was selected.onselect
The form was submitted.onsubmit
### 17.1.1. The getElementById() ### Method
A very common way to reference HTML elements is by their id using the getElementById() method
of the document object as shown in the following example. Once we have the element – that is, once
we get a given div, p, input or other DOM element via the getElementById() method – we can
then listen for events on that element. Let’s look at an example:
374 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

Demo 17.1: EventHandlers/Demos/get-element-by-id.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function changeBg(id, color) {9.
document.getElementById(id).style.backgroundColor = color;10.
}11.
</script>12.
<title>getElementById()</title>13.
</head>14.
<body>15.
<main>16.
<button onclick="changeBg('divRed','red')">Red</button>17.
<button onclick="changeBg('divOrange','orange')">Orange</button>18.
<button onclick="changeBg('divGreen','green')">Green</button>19.
<button onclick="changeBg('divBlue','blue')">Blue</button>20.
<div id="divRed">Red</div>21.
<div id="divOrange">Orange</div>22.
<div id="divGreen">Green</div>23.
<div id="divBlue">Blue</div>24.
</main>25.
</body>26.
</html>27.
Clicking the buttons sets the style of the corresponding div element, whose id is gotten via a call to
getElementById() in the changeBg() function.
LESSON 17: Event Handlers and Listeners | 375
EVALUATION COPY: Not to be used in class.

---

# Exercise 24: Using On-event Handlers
### 15 to 25 minutes
In this exercise, you will use on-event handlers to allow the user to change the background color of the
page.
1. Open EventHandlers/Exercises/color-changer.html for editing.
2. Modify the page so that…
When the “Red” button is clicked, the background color turns red.
When the “Green” button is double-clicked, the background color turns green.
When the “Orange” button is clicked down, the background color turns orange and
when the button is released (onmouseup), the background color turns white.
When the mouse hovers over the “pink” link, the background color turns pink.
When it hovers off, the background color turns white.
376 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

Exercise Code 24.1: EventHandlers/Exercises/color-changer.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<title>Color Changer</title>8.
</head>9.
<body>10.
<main>11.
<button>12.
Click to turn the page red.13.
</button>14.
<button>15.
Double-click to turn the page green.16.
</button>17.
<button>18.
Click and hold to turn the page orange.19.
</button>20.
<a href="#">Hover over to turn page pink.</a>21.
</main>22.
</body>23.
</html>24.
Challenge
1. Add functionality so that when the user presses any key, the background color turns white.
LESSON 17: Event Handlers and Listeners | 377
EVALUATION COPY: Not to be used in class.

---

Solution: EventHandlers/Solutions/color-changer.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function changeBg(color) {9.
document.body.style.backgroundColor = color;10.
}11.
</script>12.
<title>Color Changer</title>13.
</head>14.
<body>15.
<main>16.
<button onclick="changeBg('red')">17.
Click to turn the page red.18.
</button>19.
<button ondblclick="changeBg('green')">20.
Double-click to turn the page green.21.
</button>22.
<button onmousedown="changeBg('orange')"23.
onmouseup="changeBg('white')">24.
Click and hold to turn the page orange.25.
</button>26.
<a href="#"27.
onmouseover="changeBg('pink')"28.
onmouseout="changeBg('white')">Hover over to turn page pink.</a>29.
</main>30.
</body>31.
</html>32.
378 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

Challenge Solution:
EventHandlers/Solutions/color-changer-challenge.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function changeBg(color) {9.
document.body.style.backgroundColor = color;10.
}11.
</script>12.
<title>Color Changer</title>13.
</head>14.
<body onkeypress="changeBg('white')">15.
<main>16.
<button onclick="changeBg('red')">17.
Click to turn the page red.18.
</button>19.
<button ondblclick="changeBg('green')">20.
Double-click to turn the page green.21.
</button>22.
<button onmousedown="changeBg('orange')"23.
onmouseup="changeBg('white')">24.
Click and hold to turn the page orange.25.
</button>26.
<a href="#" onmouseover="changeBg('pink')"27.
onmouseout="changeBg('white')">Hover over to turn page pink.</a>28.
</main>29.
</body>30.
</html>31.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 17: Event Handlers and Listeners | 379
EVALUATION COPY: Not to be used in class.

---

## 17.2. The ### addEventListener() ## Method
You have learned how to add event handlers using the on-event HTML attributes (e.g., onload,
onclick, etc). Now, you will learn how to add event listeners using an EventTarget’s
addEventListener() method.
An EventListener represents an object that does something when an event occurs. Think of a swimmer
on a block, waiting for the starting gun to go off. When the gun goes off, the swimmer dives. Here is
some pseudo-code to set that up in JavaScript:
diver.addEventListener('shotFire', dive);
In the pseudo-code above, diver is the EventTarget, shotFire is the event type, and dive is the
function that will be called when the event occurs. Functions that are called in response to an event
are known as callback functions.
An EventTarget is any object on which an event can occur, including window, document, and any
HTML element. The basic syntax is as follows:
object.addEventListener(eventType, callbackFunction);
We have already seen the different types of events: click, dblclick, load, mouseover, mouseout,
etc. HTML attributes used to call these events all begin with “on”, but when referencing the event type
directly, you do not include the “on” prefix. For example, the following code shows how to call the
init() function when the load event of the window object occurs:
380 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

Demo 17.2: EventHandlers/Demos/window-load.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function init(e) {9.
alert('Hello, world!');10.
}11.
window.addEventListener('load', init);12.
</script>13.
<title>window load</title>14.
</head>15.
<body>16.
<main>17.
<p>Nothing to show here.</p>18.
</main>19.
</body>20.
</html>21.
Run this in the browser and you will see the “Hello, world!” alert as soon as the page is finished loading.
Notice in the code above that init is passed to addEventListener() without the usual trailing
parentheses associated with functions. It is window.addEventListener('load', init); and not
window.addEventListener('load', init() ); The reason is that we are not calling the function
at this point in the code. Rather, we are indicating that we want the function to be called when the
relevant event occurs. If you make the mistake of including the parentheses, the function will be called
immediately and the value returned from the function will be used as the callback function, probably
resulting in an error.
The table below lists common event types with descriptions. These correspond to the on-event handlers
we saw earlier.
LESSON 17: Event Handlers and Listeners | 381
EVALUATION COPY: Not to be used in class.

---

Event Types
DescriptionEvent Type
The element lost the focus.blur
The element value was changed.change
A pointer button was clicked.click
A pointer button was double-clicked.dblclick
The element received the focus.focus
A key was pressed down.keydown
A key was released.keyup
The document has been loaded.load
A pointer button was pressed down.mousedown
A pointer was moved within the element.mousemove
A pointer was moved off of the element.mouseout
A pointer was moved onto the element.mouseover
A pointer button was released over the element.mouseup
The form was reset.reset
Some text was selected.select
The form was submitted.submit
The DOMContentLoaded Event Type
The DOMContentLoaded event type is similar to the load event type, but it is fired as soon as
the HTML document has been completely loaded and parsed, without waiting for stylesheets,
images, and other resources to load. This makes it particularly useful for initializing JavaScript
functions that need the DOM but don’t require other resources to be loaded. In contrast, the
load event waits for all resources to load, which can result in a delay before scripts can run,
especially on pages with many or large resources.
382 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

The Callback Function
In the example above, the callback function is init(e). You may have noticed that it takes a single
parameter, which we have called e, but the variable name is arbitrary. Common names are e and evt.
This parameter will hold the event that caused the callback function to be called. Examine the following:
Demo 17.3: EventHandlers/Demos/window-load-e.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function init(e) {9.
alert(e);10.
alert(e.currentTarget);11.
alert(e.type);12.
}13.
window.addEventListener('load', init);14.
</script>15.
<title>window load</title>16.
</head>17.
<body>18.
<main>19.
<p>Nothing to show here.</p>20.
</main>21.
</body>22.
</html>23.
This time, instead of alerting “Hello, world!”, the code alerts [object Event]:
LESSON 17: Event Handlers and Listeners | 383
EVALUATION COPY: Not to be used in class.

---

and then alerts the currentTarget property of the event, which is the object that caused the event to
occur: [object Window]:
Finally, it alerts the type of event: load:
Now let’s take a look at how we use this passing of the event to make a function’s response dependent
on the event that spawned it:
384 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

Demo 17.4: EventHandlers/Demos/current-target.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function changeBg(e) {9.
const color = e.currentTarget.id;10.
document.body.style.backgroundColor = color;11.
}12.
13.
function init(e) {14.
const aqua = document.getElementById('aqua');15.
const lime = document.getElementById('lime');16.
const pink = document.getElementById('pink');17.
aqua.addEventListener('click', changeBg);18.
lime.addEventListener('click', changeBg);19.
pink.addEventListener('click', changeBg);20.
}21.
window.addEventListener('load', init);22.
</script>23.
<title>window load</title>24.
</head>25.
<body>26.
<main>27.
<button id="aqua">Aqua</button>28.
<button id="lime">Lime</button>29.
<button id="pink">Pink</button>30.
</main>31.
</body>32.
</html>33.
Run this page in your browser to see how it works.
1. When the page is loaded the init() function is called. It adds event listeners to each of the
buttons, all with the same callback function: changeBg. Note that we have to add these event
listeners after the document loads to be sure that the buttons exist. That is why we do it in
the callback function of window’s load event.
LESSON 17: Event Handlers and Listeners | 385
EVALUATION COPY: Not to be used in class.

---

2. The callback function, changeBg(), sets the color variable to the value of the id of the
event’s currentTarget – the button that was clicked. It then changes the background color
to color.
EVALUATION COPY: Not to be used in class.
### ❋
## 17.3. Anonymous Functions
The init() function in the previous example is meant to be called once and only once – when the
page finishes loading. As such, there is no reason for it to remain available after it is run. Such functions
are often created as anonymous functions at the point in the code that they are needed. The syntax is as
follows:
object.addEventListener(eventType, function(e) {
// function code here
});
Notice the function has no name: function init(e) is replaced with function(e). It doesn’t need
a name, because it will only be referenced this one time in the code.
Here is the last page rewritten to use an anonymous function:
386 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

Demo 17.5: EventHandlers/Demos/anonymous-function.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function changeBg(e) {9.
const color = e.currentTarget.id;10.
document.body.style.backgroundColor = color;11.
}12.
13.
window.addEventListener('load', function(e) {14.
const aqua = document.getElementById('aqua');15.
const lime = document.getElementById('lime');16.
const pink = document.getElementById('pink');17.
aqua.addEventListener('click', changeBg);18.
lime.addEventListener('click', changeBg);19.
pink.addEventListener('click', changeBg);20.
});21.
</script>22.
<title>Anonymous Function</title>23.
</head>24.
<body>25.
<main>26.
<button id="aqua">Aqua</button>27.
<button id="lime">Lime</button>28.
<button id="pink">Pink</button>29.
</main>30.
</body>31.
</html>32.
Run this page in your browser and you’ll see that it works the same as it did with a named function.
Note that we could make changeBg() an anonymous function as well, but because it is called three
times, we would have to change it each place it is called. If we ever wanted to make modifications in
the future, we would have to make those modifications in all three places. So, as it is reused, it makes
more sense to give that one a name.
LESSON 17: Event Handlers and Listeners | 387
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 17.4. Capturing Key Events
The two types of keyboard events are:
1. keydown – fires when a key is pressed down.
2. keyup – fires when a key is released.
keypress
You may also see the keypress event, which fires when a key is pressed and then released.
However, this event has been deprecated
49 
and is no longer recommended.
The target of keyboard events can be the document or any element on the page.
When capturing a keyboard event, it is common to want to know what key is pressed. This is available
via the event’s key property.
49. https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event.
388 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

Demo 17.6: EventHandlers/Demos/keys.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
document.addEventListener('keyup', function(e) {9.
document.getElementById('keyholder').innerHTML = e.key;10.
});11.
</script>12.
<title>Key Press</title>13.
</head>14.
<body>15.
<main id="keyholder"></main>16.
</body>17.
</html>18.
Run this page in your browser and press any key to see how it works. Notice that when you press the
Enter key, the word “Enter” is output. You could use the following code to capture this on an input
field:
const myInput = document.getElementById('myInput');
myInput.addEventListener('keyup', function(e) {
if (e.key === 'Enter') {
doSomething();
}
});
innerHTML
This demo uses the innerHTML property, which you can use to read and modify the HTML
content of an element.
LESSON 17: Event Handlers and Listeners | 389
EVALUATION COPY: Not to be used in class.

---

# Exercise 25: Adding Event Listeners
### 15 to 25 minutes
You will start with the following code:
Exercise Code 25.1: EventHandlers/Exercises/add-event-listener.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
// write changeBg function here9.
10.
function changeBgWhite(e) {11.
document.body.style.backgroundColor = 'white';12.
}13.
14.
// add your event listener here15.
</script>16.
<title>Color Changer</title>17.
</head>18.
<body>19.
<main>20.
<button id="red">21.
Click to turn the page red.22.
</button>23.
<button id="green">24.
Double-click to turn the page green.25.
</button>26.
<button id="orange">27.
Click and hold to turn the page orange.28.
</button>29.
<a href="#" id="pink">Hover over to turn page pink.</a>30.
</main>31.
</body>32.
</html>33.
1. Open EventHandlers/Exercises/add-event-listener.html in your editor.
390 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

2. Add an event listener to capture the load event of the window object. The callback function
should be anonymous and should do the following:
A. Create variables holding the buttons and link.
B. Add a click event to the red button that calls changeBg.
C. Add a dblclick event to the green button that calls changeBg.
D. Add a mousedown event to the orange button that calls changeBg.
E. Add a mouseup event to the orange button that calls changeBgWhite.
F. Add a mouseover event to the link that calls changeBg.
G. Add a mouseout event to the link that calls changeBgWhite.
H. Add a keyup event to the document object that calls changeBgWhite.
3. Write the changeBg() function.
Challenge
1. Change the changeBgWhite() function as follows:
function changeBgWhite(e) {
changeBg('white');
}
2. Change the changeBg() function to allow for a color value as a string as well as an event. If
an event is passed in, it should get the color from the id of the currentTarget of the event
as it does now. But if a string is passed in, it should use that string as the color value.
LESSON 17: Event Handlers and Listeners | 391
EVALUATION COPY: Not to be used in class.

---

Solution: EventHandlers/Solutions/add-event-listener.html
-------Lines 1 through 7 Omitted-------
<script>8.
function changeBg(e) {9.
const color = e.currentTarget.id;10.
document.body.style.backgroundColor = color;11.
}12.
13.
function changeBgWhite(e) {14.
document.body.style.backgroundColor = 'white';15.
}16.
17.
window.addEventListener('load', function() {18.
const btnRed = document.getElementById('red');19.
const btnGreen = document.getElementById('green');20.
const btnOrange = document.getElementById('orange');21.
const lnkPink = document.getElementById('pink');22.
23.
btnRed.addEventListener('click', changeBg);24.
btnGreen.addEventListener('dblclick', changeBg);25.
btnOrange.addEventListener('mousedown', changeBg);26.
btnOrange.addEventListener('mouseup', changeBgWhite);27.
lnkPink.addEventListener('mouseover', changeBg);28.
lnkPink.addEventListener('mouseout', changeBgWhite);29.
30.
document.addEventListener('keyup', changeBgWhite);31.
});32.
</script>33.
-------Lines 34 through 50 Omitted-------
Code Explanation
We need a changeBgWhite() function because we cannot key off the id value to change the background
color to white for two reasons:
1. We have added two event handlers to the btnOrange button: mousedown and mouseup. For
mouseDown, we call changeBg(), which keys off btnOrange’s id attribute (“orange”) to
change the background color to orange. For mouseup though, we want to change the
background color to white, so we cannot call changeBg() again as that sets the color to the
button’s id value. That’s why we need changeBgWhite(). The same logic applies to the
lnkPink link.
392 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

2. The document object doesn’t have an id value, so for keyup events, if we call changeBg(),
the e.currentTarget.id value would be null. That’s why we call changeBgWhite()
instead.
Challenge Solution:
EventHandlers/Solutions/add-event-listener-challenge.html
-------Lines 1 through 7 Omitted-------
<script>8.
function changeBg(colorOrEvent) {9.
let color = 'white'; // default10.
if ( typeof colorOrEvent === 'string' ) {11.
color = colorOrEvent;12.
} else {13.
color = colorOrEvent.currentTarget.id;14.
}15.
document.body.style.backgroundColor = color;16.
}17.
18.
function changeBgWhite(e) {19.
changeBg('white');20.
}21.
-------Lines 22 through 55 Omitted-------
EVALUATION COPY: Not to be used in class.
### ❋
## 17.5. Benefits of Event Listeners
Using on-event handlers such as onclick and onmouseover is simple and straightforward, while using
event listeners requires more JavaScript to set things up, so why use event listeners?
There are at least two major benefits to using event listeners:
1. You can add multiple event listeners to the same element.
2. Your HTML and JavaScript code are decoupled, which provides for easier maintenance and
debugging.
LESSON 17: Event Handlers and Listeners | 393
EVALUATION COPY: Not to be used in class.

---

To illustrate, take a look at the following JavaScript file:
Demo 17.7: EventHandlers/Demos/benefits.js
function color() {1.
document.body.style.backgroundColor = 'red';2.
}3.
4.
function reset() {5.
document.body.style.backgroundColor = 'white';6.
}7.
8.
function log(e) {9.
const t = e.currentTarget;10.
console.log(t.id + ' clicked');11.
}12.
13.
window.addEventListener('load', function() {14.
const btnColor = document.getElementById('btn-color');15.
btnColor.addEventListener('click', color);16.
btnColor.addEventListener('click', log);17.
18.
const btnReset = document.getElementById('btn-reset');19.
btnReset.addEventListener('click', reset);20.
btnReset.addEventListener('click', log);21.
});22.
Notice that you don’t need to see the HTML to understand how this code will work and when it will
run.
1. The color() and reset() functions just change the background color of the page.
2. The log(e) function logs the button click. Here we just log it to the console, but in practice,
we could log it to a permanent location using Ajax, which we do not cover in this course.
3. Each button gets two event listeners: one to change the color and the other to log the event.
We couldn’t do this with an onclick tag without rewriting our JavaScript to combine the
logging with the color-changing functions.
To see how it works, open EventHandlers/Demos/event-listeners-benefits.html in Google
Chrome with the console open and click the buttons several times.
394 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 17.6. Timers
Timers are started and stopped with the following four methods of the window object:
1. setTimeout(function, waitTime) – waitTime is in milliseconds.
2. clearTimeout(timer)
3. setInterval(function, intervalTime) – intervalTime is in milliseconds.
4. clearInterval(interval)
Let’s take a look at how setTimeout() and clearTimeout() work first:
LESSON 17: Event Handlers and Listeners | 395
EVALUATION COPY: Not to be used in class.

---

Demo 17.8: EventHandlers/Demos/timer.html
-------Lines 1 through 7 Omitted-------
<script>8.
// Create global timer variable9.
let timer;10.
11.
function changeBg(e) {12.
const color = e.currentTarget.id;13.
timer = setTimeout(function() {14.
document.body.style.backgroundColor=color;15.
}, 1000);16.
}17.
18.
function stopTimer() {19.
clearTimeout(timer);20.
alert('Timer cleared!');21.
}22.
23.
window.addEventListener('load', function() {24.
btnRed = document.getElementById('red');25.
btnWhite = document.getElementById('white');26.
btnStop = document.getElementById('stop');27.
28.
btnRed.addEventListener('click', changeBg);29.
btnWhite.addEventListener('click', changeBg);30.
btnStop.addEventListener('click', stopTimer);31.
});32.
</script>33.
<title>Timer</title>34.
</head>35.
<body>36.
<main>37.
<button id="red">Change Background to Red</button>38.
<button id="white">Change Background to White</button>39.
<button id="stop">Wait! Don't do it!</button>40.
</main>41.
</body>42.
</html>43.
Things to notice:
1. We make timer a global variable so that we can access the timer object from within multiple
functions.
396 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

2. In the changeBg() function, we create the timer using setTimeout(). The first argument
of setTimeout() is the function to execute and the second argument is the number of
milliseconds to wait before executing it.
3. The stopTimer() function simply clears the timer timer using clearTimeout().
The setInterval() and clearInterval() methods work the same way. The only difference is that
the code gets executed repeatedly until the interval is cleared.
LESSON 17: Event Handlers and Listeners | 397
EVALUATION COPY: Not to be used in class.

---

Demo 17.9: EventHandlers/Demos/interval.html
-------Lines 1 through 7 Omitted-------
<script>8.
// Create global interval and color variables9.
let interval;10.
let color = 'white';11.
12.
function startTogglingBg() {13.
interval = setInterval(function() {14.
if (color === 'white') {15.
color = 'red';16.
} else {17.
color = 'white';18.
}19.
document.body.style.backgroundColor=color;20.
}, 500);21.
}22.
23.
function stopTogglingBg() {24.
clearInterval(interval);25.
}26.
27.
window.addEventListener('load', function() {28.
btnStart = document.getElementById('start');29.
btnStop = document.getElementById('stop');30.
31.
btnStart.addEventListener('click', startTogglingBg);32.
btnStop.addEventListener('click', stopTogglingBg);33.
});34.
</script>35.
<title>Timer</title>36.
</head>37.
<body>38.
<main>39.
<button id="start">Start</button>40.
<button id="stop">Stop</button>41.
</main>42.
</body>43.
</html>44.
Open EventHandlers/Demos/interval.html in your browser to see how it works. Click the Start
button. The background should change back and forth from red to white. Click the Stop button to
stop the changes.
398 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

# Exercise 26: Typing Test
### 10 to 20 minutes
In this exercise, you will create a simple typing test.
innerHTML
This exercise uses the innerHTML property, which you can use to read and modify the HTML
content of an element.
Here is the starting code:
LESSON 17: Event Handlers and Listeners | 399
EVALUATION COPY: Not to be used in class.

---

Exercise Code 26.1: EventHandlers/Exercises/typing-test.html
-------Lines 1 through 7 Omitted-------
<script>8.
// Global variable containing time passed9.
let timePassed = 0;10.
11.
function checkSentence(sentence, entry) {12.
const msg = document.getElementById('message');13.
if (sentence === entry) {14.
msg.innerHTML = 'You finished in ' + timePassed + ' seconds';15.
return true;16.
}17.
timePassed += .1;18.
timePassed = parseFloat(timePassed.toFixed(1));19.
msg.innerHTML = timePassed + ' seconds';20.
return false;21.
}22.
23.
window.addEventListener('load', function() {24.
const sentence = document.getElementById('sentence').innerHTML;25.
const entryField = document.getElementById('entry');26.
27.
// Write your code here.28.
});29.
</script>30.
<title>Typing Test</title>31.
</head>32.
<body id="typing-test">33.
<main>34.
<div id="container">35.
<p id="sentence">The quick brown fox jumps over the lazy dog.</p>36.
<input id="entry" placeholder="Click to start timer.">37.
<p id="message">0 seconds</p>38.
</div>39.
</main>40.
</body>41.
</html>42.
1. Open EventHandlers/Exercises/typing-test.html in your editor.
2. Beneath the line where entryField is declared, add an event listener to entryField, so that
when the user focuses on the field, an interval is created. The interval’s function should run
every 100 milliseconds and should do the following:
400 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

Call checkSentence(), passing in the sentence and the value of entryField and
assigning the result to a variable.
A.
B. If checkSentence() returns true, clear the interval.
3. Test your solution in a browser.
LESSON 17: Event Handlers and Listeners | 401
EVALUATION COPY: Not to be used in class.

---

Solution: EventHandlers/Solutions/typing-test.html
-------Lines 1 through 7 Omitted-------
<script>8.
// Global variable containing time passed9.
let timePassed = 0;10.
11.
function checkSentence(sentence, entry) {12.
const msg = document.getElementById('message');13.
if (sentence === entry) {14.
msg.innerHTML = 'You finished in ' + timePassed + ' seconds';15.
return true;16.
}17.
timePassed += .1;18.
timePassed = parseFloat(timePassed.toFixed(1));19.
msg.innerHTML = timePassed + ' seconds';20.
return false;21.
}22.
23.
window.addEventListener('load', function() {24.
const sentence = document.getElementById('sentence').innerHTML;25.
const entryField = document.getElementById('entry');26.
27.
entryField.addEventListener('focus', function() {28.
const interval = setInterval(function() {29.
const result = checkSentence(sentence, entryField.value);30.
if (result) {31.
clearInterval(interval);32.
}33.
}, 100);34.
});35.
});36.
</script>37.
-------Lines 38 through 49 Omitted-------
## Conclusion
In this lesson, you have learned:
How to use on-event handlers to respond to user events.
How to listen for events with the addEventListener() method and to understand the
benefits of this approach.
How to write anonymous functions.
402 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

How to create timers and intervals.
LESSON 17: Event Handlers and Listeners | 403
EVALUATION COPY: Not to be used in class.

---

404 | LESSON 17: Event Handlers and Listeners
EVALUATION COPY: Not to be used in class.

---

# LESSON 18
# The HTML Document Object Model
EVALUATION COPY: Not to be used in class.
Topics Covered
The HTML DOM.
Accessing specific nodes.
Accessing nodes by tag name, class name, and CSS selector.
Accessing nodes hierarchically.
Creating and removing nodes.
Dynamically creating an HTML page.
## Introduction
The HTML Document Object Model (DOM) is a W3C standard that defines a set of HTML objects
and their methods and properties. JavaScript can be used to access, to create, and to destroy these
objects, to invoke their methods, and to manipulate their properties.
A subset of the object hierarchy is shown below:
LESSON 18: The HTML Document Object Model | 405
EVALUATION COPY: Not to be used in class.

---

This lesson is concerned with the different ways of identifying and manipulating document nodes.
While we have looked at some of these features in previous lessons, we present them here together for
completeness.
EVALUATION COPY: Not to be used in class.
### ❋
## 18.1. CSS Selectors
We will start with an introduction/review of CSS selectors as we can make use of them to access elements
with JavaScript. There are several different types of selectors, including:
Type
Descendant
Child
406 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

Class
ID
Attribute
Universal
Selectors identify the element(s) affected by a CSS rule.
### 18.1.1. Type Selectors
Type selectors specify elements by tag name and affect every instance of that element type. The rule
below specifies that the text of every p element should be darkgreen and use a 10-point Verdana font:
p {
color: darkgreen;
font-family: Verdana;
font-size: 10pt;
}
### 18.1.2. Descendant Selectors
Descendant selectors specify elements by ancestry. Each “generation” is separated by a space. For
example, the following rule states that strong elements within p elements should have red text:
p strong {
color: red;
}
With descendant selectors generations can be skipped. In other words, the code above does not require
that the strong element is a direct child of the p element.
### 18.1.3. Child Selectors
Child selectors specify a direct parent-child relationship and are indicated by placing a > sign between
the two tag names:
p > strong {
color: red;
}
LESSON 18: The HTML Document Object Model | 407
EVALUATION COPY: Not to be used in class.

---

In this case, only strong elements that are direct children of p elements are affected.
### 18.1.4. Class Selectors
In HTML, almost all elements can take the class attribute, which assigns a class name to an element.
The names given to classes are arbitrary, but should be descriptive of the purpose of the class. In CSS,
class selectors begin with a dot. For example, the following rule specifies that any elements with the
class “warning” should be bold and red:
.warning {
font-weight: bold;
color: #f00;
}
Following are a couple of examples of elements of the “warning” class:
<h1 class="warning">WARNING</h1>
<p class="warning">Don’t go there!</p>
If the class selector is preceded by an element name, then that selector only applies to the specified type
of element. To illustrate, the following two rules indicate that h1 elements of the class “warning” will
be underlined, while p elements of the class “warning” should be bold, but will not be underlined:
h1.warning {
color: #f00;
text-decoration: underline;
}
p.warning {
color: #f00;
font-weight: bold;
}
Because both rules indicate that the color should be red (#f00), this could be rewritten as follows:
408 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

.warning {
color: #f00;
}
h1.warning {
text-decoration: underline;
}
p.warning {
font-weight: bold;
}
Note that you can assign an element any number of classes simply by separating the class names with
spaces like this:
<div class="class1 class2 class3">...
### 18.1.5. ID Selectors
As with the class attribute, in HTML, almost all elements can take the id attribute, which is used
to uniquely identify an element on the page. In CSS, id selectors begin with a pound sign (#) and have
arbitrary names. The following rule will indent the element with the “main-text” id 20 pixels from
the left and right:
#main-text {
margin-left: 20px;
margin-right: 20px;
}
<div id="main-text">
This is the main text of the page...
</div>
### 18.1.6. Attribute Selectors
Attribute selectors specify elements that contain a specific attribute. They can also specify the value of
that attribute.
The following selector affects all links with a target attribute:
LESSON 18: The HTML Document Object Model | 409
EVALUATION COPY: Not to be used in class.

---

a[target] {
color: red;
}
The following selector would only affect links whose target attribute is “_blank”:
a[target='_blank'] {
color: red;
}
Now, with that bit of CSS review out of the way, let’s move on to the HTML DOM.
EVALUATION COPY: Not to be used in class.
### ❋
## 18.2. The ### innerHTML ## Property
Most HTML elements have an innerHTML property, which can be used to access and modify the
HTML within an element.
innerHTML Illustration
Given the code:
<p>I <strong>love</strong> JavaScript.</p>
the innerHTML property of the p element would be: I <strong>love</strong> JavaScript.
Tip
You can use the innerHTML property to either get the element’s innerHTML value (as shown
above) or to set the element’s innerHTML value. More on this later in the lesson.
410 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 18.3. Nodes, NodeLists, and HTMLCollections
In JavaScript, you will see the words Node and NodeList used often. For the most part, you can think
of a Node as one of the following:
1. The document object.
2. An element.
3. A snippet of text within an element.
A NodeList is a list of Node elements and is similar to an array.
An HTMLCollection is very similar to a NodeList except that:
1. HTMLCollections are live, meaning that they take into account page changes. NodeLists
are static.
2. HTMLCollections can only contain element nodes; whereas NodeLists can contain any type
of Node; however, most of the time NodeLists will be lists of elements.
Don’t Worry
If the difference between Nodes and Elements and between NodeLists and HTMLCollections
seems fuzzy to you, don’t worry too much about it. For the most part, you can think of Nodes
and Elements as interchangeable and NodeLists and HTMLCollections as arrays containing
elements. It’s not until you get to pretty advanced JavaScript that you have to be able to
differentiate between these different types.
For a full technical definition of Node, see https://developer.mozilla.org/en-
US/docs/Web/API/Node.
For a full technical definition of HTMLCollection, see https://developer.mozil
la.org/en-US/docs/Web/API/HTMLCollection.
LESSON 18: The HTML Document Object Model | 411
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 18.4. Accessing Element Nodes
JavaScript provides several different ways to access elements on the page. We will look at the following
methods:
getElementById(id) – returns a single Element Node with the passed-in id or null if no
such element exists.
getElementsByClassName(className) – returns an HTMLCollection of Element Nodes
with the passed-in className.
getElementsByTagName(tagName) – returns an HTMLCollection of Element Nodes with
the passed-in tagName.
querySelectorAll(selector) – returns a NodeList of Element Nodes matching the
passed-in selector.
querySelector(selector) – returns the first Element Node matching the passed-in
selector.
### 18.4.1. getElementById()
We have already seen the document.getElementById(id) method, which returns the first element
with the given id (there shouldn’t be more than one on the page!) or null if none is found. The
following example illustrates how getElementById() works:
412 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

Demo 18.1: HTMLDOM/Demos/get-element-by-id.html
-------Lines 1 through 7 Omitted-------
<script>8.
window.addEventListener('load', function() {9.
const elem = document.getElementById('beatles-list');10.
alert(elem.innerHTML);11.
});12.
</script>13.
<title>getElementById()</title>14.
</head>15.
<body>16.
<main>17.
<h1>Rockbands</h1>18.
<h2>Beatles</h2>19.
<ol id="beatles-list">20.
<li>Paul</li>21.
<li>John</li>22.
<li>George</li>23.
<li>Ringo</li>24.
</ol>25.
<h2>Rolling Stones</h2>26.
<ol id="stones-list">27.
<li>Mick</li>28.
<li>Keith</li>29.
<li>Charlie</li>30.
<li>Bill</li>31.
</ol>32.
</main>33.
</body>34.
</html>35.
When this page loads, the following alert box will pop up:
LESSON 18: The HTML Document Object Model | 413
EVALUATION COPY: Not to be used in class.

---

### 18.4.2. getElementsByTagName()
The getElementsByTagName() method of an element node retrieves all descendant (children,
grandchildren, etc.) elements that have the specified tag name and stores them in a NodeList, which
can be treated like an array of elements. The following example illustrates how
getElementsByTagName() works:
Demo 18.2: HTMLDOM/Demos/get-elements-by-tag-name.html
-------Lines 1 through 7 Omitted-------
<script>8.
window.addEventListener('load', function() {9.
const elems = document.getElementsByTagName('li');10.
let msg = "";11.
for (let elem of elems) {12.
msg += elem.innerHTML + "\n";13.
}14.
alert(msg);15.
});16.
</script>17.
<title>getElementsByTagName()</title>18.
</head>19.
<body>20.
<main>21.
<h1>Rockbands</h1>22.
<h2>Beatles</h2>23.
<ol>24.
<li>Paul</li>25.
<li>John</li>26.
<li>George</li>27.
<li>Ringo</li>28.
</ol>29.
<h2>Rolling Stones</h2>30.
<ol>31.
<li>Mick</li>32.
<li>Keith</li>33.
<li>Charlie</li>34.
<li>Bill</li>35.
</ol>36.
</main>37.
</body>38.
</html>39.
When this page loads, the following alert box will pop up:
414 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

### 18.4.3. getElementsByClassName()
The getElementsByClassName() method is applicable to all elements that can have descendant
elements. It is used to retrieve all the descendant (children, grandchildren, etc.) elements that have a
specific class name. For example, the following code would return a NodeList containing all elements
of the “warning” class:
const warnings = document.getElementsByClassName('warning');
### 18.4.4. querySelectorAll() ### and querySelector()
We can exploit the various CSS selectors (reviewed above) by using querySelectorAll() and
querySelector(). Unlike the getElementById(), getElementsByTagName(), and
getElementsByClassName() methods, which find elements by one specific value (id, tag name, and
class name, respectively), document.querySelector() provides a way to find an element using many
different properties of the element, and querySelectorAll() provides a way to find all such elements.
For example, the following code would return a node list containing all a elements that are direct
children of td elements:
const linksInTds = document.querySelectorAll('td>a');
The document.querySelector() method is the same as document.querySelectorAll() but
rather than returning a list, it returns only the first element found. The following two lines of code
would both return the first link element found in an td element:
LESSON 18: The HTML Document Object Model | 415
EVALUATION COPY: Not to be used in class.

---

const firstLinkInTd = document.querySelectorAll('td>a')[0];
const firstLinkInTd = document.querySelector('td>a');
Now you have a chance to play with these methods using Chrome DevTools Console. You will start
with the following file:
Demo 18.3: HTMLDOM/Demos/getting-elements.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<title>Getting Elements</title>8.
</head>9.
<body>10.
<main>11.
<div id="board">12.
<div class="row">13.
<div class="col">A</div>14.
<div class="col">B</div>15.
<div class="col">C</div>16.
</div>17.
<div class="row">18.
<div class="col">D</div>19.
<div class="col">E</div>20.
<div class="col">F</div>21.
</div>22.
<div class="row">23.
<div class="col">G</div>24.
<div class="col">H</div>25.
<div class="col">I</div>26.
</div>27.
</div>28.
</main>29.
</body>30.
</html>31.
1. Open HTMLDOM/Demos/getting-elements.html in Google Chrome and open the console:
416 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

2. Using the console, write code to do the following:
A. Turn the background of the whole board to pink:
B. Turn the second row to lime:
LESSON 18: The HTML Document Object Model | 417
EVALUATION COPY: Not to be used in class.

---

C. Turn the middle cell to white:
D. Refresh the page and clear the console to start with the original board. Turn the first
column pink. There are several ways to do this. Can you figure out more than one?
418 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

E. Refresh the page and clear the console to start with the original board. Change the
content of the squares from A-I to 1-9:
3. Here are possible solutions:
A. Turn the background of the whole board to pink:
LESSON 18: The HTML Document Object Model | 419
EVALUATION COPY: Not to be used in class.

---

B. Turn the second row to lime:
C. Turn the middle cell to white:
D. Refresh the page and clear the console to start with the original board. Turn the first
column pink:
Three possible solutions:
420 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

E. Refresh the page and clear the console to start with the original board. Change the
content of the squares from A-I to 1-9:
LESSON 18: The HTML Document Object Model | 421
EVALUATION COPY: Not to be used in class.

---

# Exercise 27: Accessing Elements
### 10 to 15 minutes
In this exercise, you will practice accessing elements in JavaScript.
1. Open HTMLDOM/Exercises/chessboard-table.html in your browser. It contains an 8 x
8 table:
2. Open HTMLDOM/Exercises/chessboard-table.html for editing.
3. Add JavaScript so that when the page loads, it checkers the table to look like this:
422 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

LESSON 18: The HTML Document Object Model | 423
EVALUATION COPY: Not to be used in class.

---

Solution: HTMLDOM/Solutions/chessboard-table.html
-------Lines 1 through 7 Omitted-------
<script>8.
window.addEventListener('load', function(e) {9.
const oddrows = document.querySelectorAll('tr.odd');10.
const evenrows = document.querySelectorAll('tr.even');11.
for (row of oddrows) {12.
const evencols = row.querySelectorAll('.even');13.
for (col of evencols) {14.
col.style.backgroundColor = 'black';15.
}16.
}17.
for (row of evenrows) {18.
const oddcols = row.querySelectorAll('.odd');19.
for (col of oddcols) {20.
col.style.backgroundColor = 'black';21.
}22.
}23.
});24.
</script>25.
-------Lines 26 through 112 Omitted-------
Code Explanation
The solution shown here is just one of many ways to do this.
EVALUATION COPY: Not to be used in class.
### ❋
## 18.5. Dot Notation and Square Bracket Notation
In the first lesson of this course, we took a look at two ways to access elements in JavaScript: dot notation
and square bracket notation. Let’s review these concepts again.
Dot notation lets us refer to hierarchical DOM elements starting with the top-most element (window)
then a set of dot-separated names, referencing elements by their name. For instance, to get an input
424 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

element with the name fname inside a form with the name loginform, we might use the following
(as long as there are no hyphens in the names):
window.document.loginform.fname
### 18.5.1. Collections of Elements
A document can have multiple form elements as children. We call this the document’s forms collection.
We can reference the specific form by its order on the page. Like arrays, collections in JavaScript start
with index 0, so the first form on the page would be forms[0].
window.document.forms[0].fname
### 18.5.2. window ### is Implicit
As window is the implicit top-level object, we don’t have to refer to it explicitly. The preceding code
samples could be written as:
document.loginform.fname
document.forms[0].fname
Similarly, we can reference objects with square bracket notation, where the key is the name of the element:
document['loginform']['fname']
This is equivalent to the dot-notation references we showed earlier and can be used interchangeably.
Let’s play with this a little in the Chrome DevTools Console using the following file:
LESSON 18: The HTML Document Object Model | 425
EVALUATION COPY: Not to be used in class.

---

Demo 18.4: HTMLDOM/Demos/forms.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<title>Forms</title>8.
</head>9.
<body>10.
<main>11.
<form name="form-a">12.
<input name="fname">13.
</form>14.
<form name="form-b">15.
<input name="fname">16.
</form>17.
<form name="form-c">18.
<input name="fname">19.
</form>20.
<form name="form-d">21.
<input name="fname">22.
</form>23.
</main>24.
</body>25.
</html>26.
Notice the file has four form elements named “form-a”, “form-b”, “form-c”, and “form-d”. Each
of those forms has an input element named “fname”.
1. Open HTMLDOM/Demos/forms.html in Google Chrome.
2. In the console, type document.forms; and press Enter. Then click the triangle (circled below)
to expand the collection:
426 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

Notice that you see both ways of referencing the forms, by index (0, 1, 2, and 3) and by name
(form-a, form-b, form-c, and form-d).
3. Now type document["forms"]; and press Enter and notice that you get the same result,
demonstrating that you can use dot and square-bracket notation interchangeably.
4. Now run each of the following and notice that they both deliver the first form:
A. document.forms[0];
B. document["form-a"];
5. However, if you try to access the same form using dot notation you will get an error:
This is because of the hyphen in the name. It reads this as "document.form minus a" and
errors because a is undefined. So, when using hypens in names, you should use square-bracket
notation or use another technique for getting the objects.
LESSON 18: The HTML Document Object Model | 427
EVALUATION COPY: Not to be used in class.

---

6. You can use either dot notation or square-bracket notation to access the “fname” input
elements, because the name doesn’t contain a hyphen:
7. E n t e r y o u r n a m e i n t h e f i r s t f o r m ’ s t e x t b o x a n d t y p e
document.forms['form-a']['fname'].value (or one of the other variations) at the
console:
8. Now use JavaScript to set the value of fname in form-b:
EVALUATION COPY: Not to be used in class.
### ❋
## 18.6. Accessing Elements Hierarchically
JavaScript provides a variety of methods and properties for accessing elements based on their hierarchical
relationship. The most common are shown in the table below:
428 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

Properties for Accessing Element Nodes
DescriptionProperty
A collection of the element’s child elements.children
A reference to an element’s first child element. The equivalent of
children[0].
firstElementChild
A reference to an element’s last child element. The equivalent of
children[children.length-1].
lastElementChild
A reference to the previous element at the same level in the document
tree.
previousElementSibling
A reference to the next element at the same level in the document tree.nextElementSibling
A reference to an element’s parent node.
50
parentNode
The children property returns a collection of element nodes. The other properties return a single
element node.
These properties provide a flexible way to get elements on the page, relative to their parents, siblings,
or children. We can do anything with the returned elements that we did previously when retrieving
the elements with getElementById(), querySelector() and the other methods – set the background
color, change the font style, etc.
Let’s take a look at how we might use these properties:
50. A node is an object in the document tree. Elements, attributes, and text snippets are all examples of nodes. While there are some
obscure exceptions, you can generally expect the parentNode of an element to be an element.
LESSON 18: The HTML Document Object Model | 429
EVALUATION COPY: Not to be used in class.

---

Demo 18.5: HTMLDOM/Demos/elem-hierarchy.html
-------Lines 1 through 7 Omitted-------
<script>8.
function modify() {9.
const list = document.getElementById('list');10.
const liFirst = list.firstElementChild;11.
liFirst.style.backgroundColor = 'pink';12.
const liLast = list.lastElementChild;13.
liLast.style.backgroundColor = 'aqua';14.
const siblingPrev = liLast.previousElementSibling;15.
siblingPrev.style.backgroundColor = 'lime';16.
17.
for (item of list.children) {18.
item.innerHTML += ' - check';19.
}20.
}21.
22.
window.addEventListener('load', function() {23.
const goBtn = document.getElementById('btn-go');24.
goBtn.addEventListener('click', modify);25.
});26.
</script>27.
<title>Element Hierarchy</title>28.
</head>29.
<body>30.
<main>31.
<button id="btn-go">Go</button>32.
<ul id="list">33.
<li>Item 1</li>34.
<li>Item 2</li>35.
<li>Item 3</li>36.
<li>Item 4</li>37.
<li>Item 5</li>38.
</ul>39.
</main>40.
</body>41.
</html>42.
Our simple page displays a button and five unordered list items, with text “Item 1”, “Item 2”, etc.
Clicking the button calls the function modify(), which does the following:
Gets the first child of the list using firstElementChild, and sets its background to pink.
Gets the last child of the list using lastElementChild, and sets its background to aqua.
430 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

Gets the next-to-last child of the list using previousElementSibling (relative to the
already-gotten liLast), and sets its background to lime.
Loops through all the list items (children of the list) adding “ - check” to the innerHTML.
We’ll ask you to try out these properties in the next exercise.
LESSON 18: The HTML Document Object Model | 431
EVALUATION COPY: Not to be used in class.

---

# Exercise 28: Working with Hierarchical
# Elements
### 10 to 15 minutes
You will start with the code shown below:
432 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

Exercise Code 28.1: HTMLDOM/Exercises/elem-hierarchy.html
-------Lines 1 through 7 Omitted-------
<script>8.
function create() {9.
const board = document.getElementById('board');10.
const topRow = board.firstElementChild;11.
const trLeftCol = topRow.firstElementChild;12.
trLeftCol.style.backgroundColor='rgba(0, 255, 255, .5)';13.
const trCenterCol = trLeftCol.nextElementSibling;14.
trCenterCol.style.backgroundColor='rgba(102, 255, 255, .5)';15.
const trRightCol = topRow.lastElementChild;16.
trRightCol.style.backgroundColor='rgba(204, 255, 255, .5)';17.
}18.
19.
window.addEventListener('load', function() {20.
const goBtn = document.getElementById('btn-go');21.
goBtn.addEventListener('click', create);22.
});23.
-------Lines 24 through 28 Omitted-------
<button id="btn-go">Go</button>29.
<div id="board">30.
<div class="row">31.
<div class="col">A</div>32.
<div class="col">B</div>33.
<div class="col">C</div>34.
</div>35.
<div class="row">36.
<div class="col">D</div>37.
<div class="col">E</div>38.
<div class="col">F</div>39.
</div>40.
<div class="row">41.
<div class="col">G</div>42.
<div class="col">H</div>43.
<div class="col">I</div>44.
</div>45.
</div>46.
-------Lines 47 through 49 Omitted-------
LESSON 18: The HTML Document Object Model | 433
EVALUATION COPY: Not to be used in class.

---

rgba(R, G, B, A) Functional Notation
We are using rgba(R, G, B, A) functional notation in this exercise. R, G, and B indicate the
amount of Red, Green, and Blue in the color. A indicates the opacity level: 0 (fully transparent)
to 1 (full opacity).
In this exercise, you will practice working with JavaScript’s hierarchical elements.
1. Open HTMLDOM/Exercises/elem-hierarchy.html in the browser, click the Go button,
and notice how the background colors of the first row’s cells change:
2. Note that a click handler has been added to the button so that the function create() is called
when the user clicks the button.
3. Finish the create() function so that each cell has a different color. You can use your own
colors or the ones listed below:
A. rgba(0, 255, 255, .5)
B. rgba(102, 255, 255, .5)
C. rgba(204, 255, 255, .5)
D. rgba(255, 0, 255, .5)
E. rgba(255, 102, 255, .5)
434 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

F. rgba(255, 204, 255, .5)
G. rgba(255, 255, 0, .5)
H. rgba(255, 255, 102, .5)
I. rgba(255, 255, 204, .5)
LESSON 18: The HTML Document Object Model | 435
EVALUATION COPY: Not to be used in class.

---

Solution: HTMLDOM/Solutions/elem-hierarchy.html
-------Lines 1 through 7 Omitted-------
<script>8.
function create() {9.
const board = document.getElementById('board');10.
const topRow = board.firstElementChild;11.
const trLeftCol = topRow.firstElementChild;12.
trLeftCol.style.backgroundColor='rgba(0, 255, 255, .5)';13.
const trCenterCol = trLeftCol.nextElementSibling;14.
trCenterCol.style.backgroundColor='rgba(102, 255, 255, .5)';15.
const trRightCol = topRow.lastElementChild;16.
trRightCol.style.backgroundColor='rgba(204, 255, 255, .5)';17.
18.
const middleRow = topRow.nextElementSibling;19.
const mrLeftCol = middleRow.firstElementChild;20.
mrLeftCol.style.backgroundColor='rgba(255, 0, 255, .5)';21.
const mrCenterCol = mrLeftCol.nextElementSibling;22.
mrCenterCol.style.backgroundColor='rgba(255, 102, 255, .5)';23.
const mrRightCol = middleRow.lastElementChild;24.
mrRightCol.style.backgroundColor='rgba(255, 204, 255, .5)';25.
26.
const bottomRow = board.lastElementChild;27.
const brLeftCol = bottomRow.firstElementChild;28.
brLeftCol.style.backgroundColor='rgba(255, 255, 0, .5)';29.
const brCenterCol = brLeftCol.nextElementSibling;30.
brCenterCol.style.backgroundColor='rgba(255, 255, 102, .5)';31.
const brRightCol = bottomRow.lastElementChild;32.
brRightCol.style.backgroundColor='rgba(255, 255, 204, .5)';33.
}34.
35.
window.addEventListener('load', function() {36.
const goBtn = document.getElementById('btn-go');37.
goBtn.addEventListener('click', create);38.
});39.
</script>40.
-------Lines 41 through 65 Omitted-------
EVALUATION COPY: Not to be used in class.
### ❋
436 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

## 18.7. Accessing Attributes
Essentially, all standard attributes of HTML elements can be accessed as properties of the element. For
example, given the following link:
<a href="https://www.google.com"
id="google" target="_blank">Google</a>
We can access the value of the target attribute like this:
const gLink = document.getElementById('google');
console.log(gLink.target);
Likewise, we can set the value of the target attribute using the target property:
gLink.target = "searchWin";
To test this:
1. Open HTMLDOM/Demos/attributes.html in Google Chrome.
2. Click the Google link and notice that it opens in a new window or tab.
3. Run the code above at the console:
Notice that before you set gLink.target, its value is “_blank” and after you set it, its value
is “searchWin”.
You can also access and modify attribute values using the following methods and properties:
LESSON 18: The HTML Document Object Model | 437
EVALUATION COPY: Not to be used in class.

---

Methods and Properties for Working with Attributes
DescriptionMethod/Property
Returns a Boolean (true/false) value indicating whether or
not the element to which the method is applied includes the
given attribute.
hasAttribute(attName)
Returns the attribute value or null if the attribute doesn’t exist.getAttribute(attName)
Adds an attribute with a value or, if the attribute already exists,
changes the value of the attribute.
setAttribute(attName,
attValue)
Removes the attribute (if it exists) from an element.removeAttribute(attName)
Property referencing the collection of an element’s attributes.attributes
EVALUATION COPY: Not to be used in class.
### ❋
## 18.8. Creating New Nodes
The document node has separate methods for creating element nodes and creating text nodes:
createElement() and createTextNode(). These methods each create a node in memory that then
has to be placed somewhere in the object hierarchy. A new node can be inserted as a child to an existing
node with that node’s appendChild() and insertBefore() methods.
Moving Nodes
You can also use the appendChild() and insertBefore() methods to move an existing node
– the node will be removed from its current location and placed at the new location (since the
same node cannot exist twice in the same document).
These methods and some others are described in the table below:
438 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

Methods for Inserting and Removing Nodes
DescriptionMethod
Takes a single parameter: the node to insert, and inserts that node after the last
child node.
appendChild()
Takes two parameters: the node to insert and the child node that it should precede.
The new child node is inserted before the referenced child node.
insertBefore()
Takes two parameters: the new node and the node to be replaced. It replaces the
old node with the new node and returns the old node.
replaceChild()
Removes an element from the Document Object Model. It does not destroy the
element, it just removes it from its parent.
remove()
EVALUATION COPY: Not to be used in class.
### ❋
## 18.9. Focusing on a Field
When you visit https://www.google.com, you will notice that the search input field gets immediate
focus, so that you can start typing your search right away:
This is accomplished using the focus() method of the input element, like this:
const searchInput = document.getElementById('search');
searchInput.focus();
It is often tied to the window’s load event, like this:
LESSON 18: The HTML Document Object Model | 439
EVALUATION COPY: Not to be used in class.

---

Demo 18.6: HTMLDOM/Demos/focus.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
window.addEventListener("load", function() {9.
const searchInput = document.getElementById('search');10.
searchInput.focus();11.
});12.
</script>13.
<title>Focus</title>14.
</head>15.
<body>16.
<main>17.
<form>18.
<input id="search" name="search">19.
<button>Search</button>20.
</form>21.
</main>22.
</body>23.
</html>24.
Open HTMLDOM/Demos/focus.html in your browser to see how it works.
EVALUATION COPY: Not to be used in class.
### ❋
## 18.10. Shopping List Application
Using what we have learned in this lesson, we will build the one-page shopping list application shown
below:
440 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

Open HTMLDOM/Solutions/shopping-list.html in your browser to see how the finished application
works:
1. Notice that “Page Loaded” is logged and the New Item field gets focus.
2. Add Milk by clicking the + button next to Milk under Common Items.
3. Add Lettuce by typing “Lettuce” in the New Item field and pressing the + button. Notice the
New Item field gets focus, making it easy to enter another value.
4. Add Bread by typing “Bread” in the New Item field and pressing the Enter key.
5. Try adding Bread again both by clicking the + button and using the New Item field. Both
attempts should fail silently.
6. Try pressing the + button next to an empty New Item field. It should fail silently.
7. Try entering just spaces in the New Item field and pressing the + button. It should fail silently.
8. Remove Milk by clicking the - button next to Milk under Active List.
The HTML (HTMLDOM/Exercises/shopping-list.html) and CSS (HTMLDOM/Exercises/shop
ping-list.css) have already been completed. You will build the JavaScript (HTMLDOM/Exercis
es/shopping-list.js) piece by piece.
LESSON 18: The HTML Document Object Model | 441
EVALUATION COPY: Not to be used in class.

---

# Exercise 29: Logging
### 15 to 25 minutes
In this exercise, you will complete the log(msg) function.
1. Open HTMLDOM/Exercises/shopping-list.html in your editor. Examine the section of
the code shown below. The ordered list will contain the log. You will need to access that
ordered list and add list items to it with JavaScript.
<section id="log">
<h2>Log</h2>
<ol></ol>
</section>
2. Open HTMLDOM/Exercises/shopping-list.js in your editor.
3. In the log(msg) function, write code to:
A. Access the ordered list shown above and save it in a constant.
B. Create a new list item element and save it in a constant.
C. Get the current date and save it in a constant.
D. Set the innerHTML of the new list item to the current local time using the
toLocaleTimeString() method, followed by a colon, followed by the msg passed
to log(msg). For example, “5:53:12 PM: Page Loaded”.
E. Append the new list item to the ordered list.
4. Test your code in the browser. When the page loads, it should log “Page Loaded”. If it isn’t
working, use the console to help you debug.
442 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

LESSON 18: The HTML Document Object Model | 443
EVALUATION COPY: Not to be used in class.

---

Solution: HTMLDOM/Solutions/shopping-list.1.js
/* Log Messages */1.
function log(msg) {2.
// Access the ordered list and save it in a variable3.
const log = document.querySelector('section#log>ol');4.
// Create a new list item element and save it in a variable5.
const newItem = document.createElement('li');6.
// Get the current date and save it in a variable7.
const now = new Date();8.
// Set the innerHTML of the new list item9.
newItem.innerHTML = now.toLocaleTimeString() +10.
': <em>' + msg + '</em>';11.
// Append the new list item to the ordered list12.
log.appendChild(newItem);13.
}14.
-------Lines 15 through 30 Omitted-------
444 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

# Exercise 30: Adding EventListeners
### 25 to 40 minutes
In this exercise, you will add EventListeners in the init() function so that you can log when a new
item is added. You will not yet write the code to actually add the items. You will do that in the next
exercise.
1. Open HTMLDOM/Exercises/shopping-list.html in your editor. You will have to listen
for the following events:
A. Clicks on any button element with the class “btn-add”.
B. Clicks on the button element with the id “add-new-item”.
C. Keyup events on the input element with the id “new-item”.
2. Open HTMLDOM/Exercises/shopping-list.js in your editor if it isn’t already open.
3. Beneath the log('Page Loaded'); line, declare the following three constants:
A. btnListAdd – A collection of button elements with the class “btn-add”.
B. btnAddNewItem – The button element with the id “add-new-item”.
C. newItem – The input element with the id “new-item”.
4. Add a line of code to place focus on the newItem input, so the user can just start typing in
a new item.
5. Each button in the btnListAdd collection is coded as follows:
<button class="btn-add" name="Milk">+</button>
When the user clicks one of these buttons, your code should pass the name of that button as
the argument for product to the addToList(product) function. To do this, you will need
to loop through these buttons, adding click EventListeners to each. You will need to know
which of the buttons is clicked (e.currentTarget) so that you get the value of its name
attribute.
6. The add-new-item button is coded as follows:
<button id="add-new-item">+</button>
LESSON 18: The HTML Document Object Model | 445
EVALUATION COPY: Not to be used in class.

---

And the associated text field is:
<input id="new-item">
When the user clicks the “add-new-item” button, your code should:
A. Pass the value of the text field as the argument for product to the
addToList(product) function.
B. Clear the text field.
C. Place focus on the text field.
7. Finally, you need to add an EventListener for the keyup event on the “new-item” text
field. The callback function should check if the key pressed was the Enter key. If it was, it
should:
A. Pass the value of the text field as the argument for product to the
addToList(product) function.
B. Clear the text field.
C. Place focus on the text field.
8. Test your code in the browser. At this point, the shopping lists won’t change, but logging
should work when you add new items. If it isn’t working, use the console to help you debug.
446 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

LESSON 18: The HTML Document Object Model | 447
EVALUATION COPY: Not to be used in class.

---

Solution: HTMLDOM/Solutions/shopping-list.2.js
-------Lines 1 through 20 Omitted-------
function init() {21.
log('Page Loaded');22.
const btnListAdd = document.getElementsByClassName('btn-add');23.
const btnAddNewItem = document.getElementById('add-new-item');24.
const newItem = document.getElementById('new-item');25.
newItem.focus();26.
27.
/* Add event listeners to all common list Add buttons */28.
for (btn of btnListAdd) {29.
btn.addEventListener('click', function(e) {30.
const button = e.currentTarget;31.
const product = button.name;32.
addToList(product);33.
newItem.focus();34.
});35.
}36.
37.
/* Add event listener to New Item Add button */38.
btnAddNewItem.addEventListener('click', function() {39.
addToList(newItem.value);40.
newItem.value='';41.
newItem.focus();42.
});43.
44.
/*45.
Add event listener capturing Enter press while46.
focus is on New Item field47.
*/48.
newItem.addEventListener('keyup', function(e) {49.
if (e.key === 'Enter') {50.
addToList(newItem.value);51.
newItem.value='';52.
newItem.focus();53.
}54.
});55.
}56.
57.
window.addEventListener("load", init);58.
448 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

# Exercise 31: Adding Items to the List
### 15 to 25 minutes
In this exercise, you will write the addToList() function.
1. Open HTMLDOM/Exercises/shopping-list.js in your editor if it isn’t already open.
2. Currently, the addToList() function should look like this:
function addToList(product) {
log(product + ' added.')
}
You will write your code above the log(product + ' added.') line that does the following:
A. Removes leading and trailing whitespace from the passed-in product, so that if the
user enters “ Milk ”, we store it as “Milk”.
B. Access the “active-items-list” unordered list and save it in a constant.
C. Create a new list item element and save it in a constant.
D. Set the title of the new list item element to the product name.
E. Set the innerHTML of the new list item element to the product name.
F. Append the new list item to the “active-items-list” unordered list.
3. Test your code in the browser. You should now be able to add items to list. If it isn’t working,
use the console to help you debug.
LESSON 18: The HTML Document Object Model | 449
EVALUATION COPY: Not to be used in class.

---

Solution: HTMLDOM/Solutions/shopping-list.3.js
-------Lines 1 through 16 Omitted-------
function addToList(product) {17.
product = product.trim();18.
19.
const activeList = document.getElementById('active-items-list');20.
const newItem = document.createElement('li');21.
newItem.title = product;22.
newItem.innerHTML = product;23.
activeList.appendChild(newItem);24.
log(product + ' added.');25.
}26.
-------Lines 27 through 65 Omitted-------
450 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

# Exercise 32: Dynamically Adding Remove
# Buttons to the List Items
### 15 to 25 minutes
In this exercise, you will continue to work in the addToList() function. You will add remove buttons
to the list items you created in the last exercise.
1. Open HTMLDOM/Exercises/shopping-list.js in your editor if it isn’t already open.
2. Currently, the addToList() function should look something like this:
function addToList(product) {
product = product.trim();
const activeList = document.getElementById('active-items-list');
const newItem = document.createElement('li');
newItem.title = product;
newItem.innerHTML = product;
activeList.appendChild(newItem);
log(product + ' added.')
}
You will write your code below the log(product + ' added.') line that does the following:
A. Create a button element with a minus sign that calls removeFromList() when
clicked and append it to the new list item.
B. Add a space between the product name and the new button.
C. Check if the list item being added is in the common list items. If it is, disable the
“add” button for that list item by setting its disabled property to true. Hint: Look
at the name attributes of the buttons in the “common-items-list” list. Can you use
querySelector() to find a button with the same name as the new list item you’re
adding?
Note that these directions are intentionally less specific than in the previous exercises.
3. Test your code in the browser. The list items in the ‘active-items-list’ ordered list should now
have remove buttons. They won‘t actually remove the items, but they should log “Item
removed” when clicked. Also, any item in the “common-items-list” list that is also in the
“active-items-list” should have its “add” button disabled (red and unclickable). If your code
isn’t working, use the console to help you debug.
LESSON 18: The HTML Document Object Model | 451
EVALUATION COPY: Not to be used in class.

---

Solution: HTMLDOM/Solutions/shopping-list.4.js
-------Lines 1 through 16 Omitted-------
function addToList(product) {17.
product = product.trim();18.
19.
const activeList = document.getElementById('active-items-list');20.
const newItem = document.createElement('li');21.
newItem.title = product;22.
newItem.innerHTML = product + ' '; // space before button23.
activeList.appendChild(newItem);24.
log(product + ' added.');25.
26.
const btnRemove = document.createElement('button');27.
btnRemove.innerHTML = '-';28.
btnRemove.addEventListener('click', removeFromList);29.
newItem.appendChild(btnRemove);30.
31.
// Check if list item being added is in common list items32.
// If it is, we need to disable its button there.33.
const selector = '#common-items-list>li>button[name="' + product + '"]';34.
const btnMatch = document.querySelector(selector);35.
if (btnMatch) {36.
btnMatch.disabled = true;37.
}38.
}39.
-------Lines 40 through 78 Omitted-------
452 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

# Exercise 33: Removing List Items
### 15 to 25 minutes
In this exercise, you will write the removeFromList() function to remove elements from the
‘active-items-list’ ordered list.
1. Open HTMLDOM/Exercises/shopping-list.js in your editor if it isn’t already open.
2. Currently, the removeFromList() function should look like this:
function removeFromList(e) {
log('Item Removed');
}
A. Using the passed-in event (e), access the list item that contains the button that was
clicked to call this function and assign that list item to a constant.
B. Remove that item from the list.
C. Change log('Item Removed') to log the name of the product removed.
D. Check if the list item being removed is in the common list items. If it is, re-enable
the “add” button for that list item by setting its disabled property to false.
3. Test your code in the browser. When a remove button is clicked, the associated list item
should now get removed and the log should tell you which item was removed. In addition,
if there is an associated list item in the “common-items-list” list, its “add” button should be
re-enabled. If your code isn’t working, use the console to help you debug.
LESSON 18: The HTML Document Object Model | 453
EVALUATION COPY: Not to be used in class.

---

Solution: HTMLDOM/Solutions/shopping-list.5.js
-------Lines 1 through 10 Omitted-------
/* Remove item from list */11.
function removeFromList(e) {12.
const item = e.currentTarget.parentNode;13.
item.remove();14.
log(item.title + ' removed.');15.
16.
// Check if list item being removed is in common list items17.
// If it is, we need to enable its button there.18.
const selector = '#common-items-list>li>button[name="' +19.
item.title + '"]';20.
const btnMatch = document.querySelector(selector);21.
if (btnMatch) {22.
btnMatch.disabled = false;23.
}24.
}25.
-------Lines 26 through 89 Omitted-------
454 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

# Exercise 34: Preventing Duplicates and
# Zero-length Product Names
### 15 to 25 minutes
In this exercise, you will finalize the shopping list by preventing duplicate values and empty strings
from being added to the “active-items-list” list.
1. There are a couple of issues still. Open HTMLDOM/Exercises/shopping-list.html in your
browser.
2. Add Milk via the Common Items list and then try adding it again using the New Item form
field. Milk will be listed twice in your Active List. We’ll fix that.
3. Press the + button next to the empty New Item form field. It will add an empty item to your
Active List. We’ll fix that too.
4. Open HTMLDOM/Exercises/shopping-list.js in your editor if it isn’t already open.
5. Below the line in which you trim the product name, add code that checks if that product is
already listed in the “active-items-list” list. If it is or if the trimmed product name is an empty
string, return false so that the rest of the code in the function doesn’t run.
6. Test your code in the browser.
A. Add Milk via the Common Items list and then try adding it again using the New
Item form field. It should fail silently.
B. Press the + button next to the empty New Item form field. It should fail silently.
7. If your code isn’t working, use the console to help you debug.
LESSON 18: The HTML Document Object Model | 455
EVALUATION COPY: Not to be used in class.

---

Solution: HTMLDOM/Solutions/shopping-list.js
-------Lines 1 through 24 Omitted-------
/* Add product to list */25.
function addToList(product) {26.
product = product.trim();27.
28.
// Check if list item is already in active list29.
// or if product is empty string.30.
let selector = '#active-items-list>li[title="' + product + '"]';31.
const liMatch = document.querySelector(selector);32.
if (liMatch || !product.length) {33.
return false;34.
}35.
const activeList = document.getElementById('active-items-list');36.
const newItem = document.createElement('li');37.
newItem.title = product;38.
newItem.innerHTML = product + ' ';39.
activeList.appendChild(newItem);40.
log(product + ' added.');41.
42.
const btnRemove = document.createElement('button');43.
btnRemove.innerHTML = '-';44.
btnRemove.addEventListener('click', removeFromList);45.
newItem.appendChild(btnRemove);46.
47.
// Check if list item being added is in common list items48.
// If it is, we need to disable its button there.49.
selector = '#common-items-list>li>button[name="' + product + '"]';50.
const btnMatch = document.querySelector(selector);51.
if (btnMatch) {52.
btnMatch.disabled = true;53.
}54.
}55.
-------Lines 56 through 94 Omitted-------
EVALUATION COPY: Not to be used in class.
### ❋
456 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

## 18.11. Manipulating Tables
HTML tables can be created and manipulated dynamically with JavaScript. Each table, tbody, thead,
and tfoot element contains a rows array and methods for inserting and deleting rows: insertRow()
and deleteRow(). Each tr element contains a cells array and methods for inserting and deleting
cells: insertCell() and deleteCell(). The following example shows how these objects can be used
to dynamically create HTML tables.
First let’s take a look at how the page works in the browser. Open HTMLDOM/Demos/table.html in
your browser to follow along.
1. When it first loads, you see a screen like this:
2. Fill in the form and press the + sign several times:
LESSON 18: The HTML Document Object Model | 457
EVALUATION COPY: Not to be used in class.

---

3. Press the X next to one of the rows to delete that row:
4. Press the - next to Delete all people to remove all rows and get back to where we started:
Now let’s look at the code:
458 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

Demo 18.7: HTMLDOM/Demos/table.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function addRow(tbodyId, cells) {9.
// Get the tbody and insert a new row10.
const tbody = document.getElementById(tbodyId);11.
const newRow = tbody.insertRow();12.
13.
// Insert cells based on passed-in cells array14.
for (const cellText of cells) {15.
cell = newRow.insertCell();16.
cell.innerHTML = cellText;17.
}18.
19.
// Insert a final cell with a Delete button20.
newCell = newRow.insertCell();21.
const btnDelete = document.createElement('button');22.
btnDelete.innerHTML = 'X';23.
btnDelete.addEventListener('click', function(e) {24.
btnDelete.parentNode.parentNode.remove();25.
});26.
newCell.appendChild(btnDelete);27.
}28.
29.
function deleteAllRows(tbodyId) {30.
const tbody = document.getElementById(tbodyId);31.
while (tbody.rows.length > 0) {32.
tbody.deleteRow(0);33.
}34.
}35.
36.
function prepareCells(fName, lName) {37.
//Create a cells array to pass to the38.
const cells = [fName.value, lName.value];39.
addRow('people', cells);40.
fName.value = '';41.
lName.value = '';42.
fName.focus();43.
}44.
LESSON 18: The HTML Document Object Model | 459
EVALUATION COPY: Not to be used in class.

---

45.
window.addEventListener('load', function() {46.
const btnAdd = document.getElementById("btn-add");47.
const btnDeleteAll = document.getElementById("btn-delete-all");48.
const fName = document.getElementById('firstname');49.
const lName = document.getElementById('lastname');50.
51.
btnAdd.addEventListener('click', function() {52.
prepareCells(fName, lName);53.
});54.
55.
lName.addEventListener('keyup',function(e) {56.
if (e.key === 'Enter') {57.
prepareCells(fName, lName);58.
}59.
});60.
61.
btnDeleteAll.addEventListener('click', function() {62.
deleteAllRows('people');63.
});64.
65.
fName.focus();66.
});67.
</script>68.
<title>Manipulating Tables</title>69.
</head>70.
<body id="table-demo">71.
<main>72.
<table>73.
<thead>74.
<tr>75.
<th>First Name</th>76.
<th>Last Name</th>77.
<th>Admin</th>78.
</tr>79.
</thead>80.
<tbody id="people"></tbody>81.
<tbody>82.
<tr>83.
<td><input id="firstname" placeholder="First Name"></td>84.
<td><input id="lastname" placeholder="Last Name"></td>85.
<td><button type="button" id="btn-add">+</button></td>86.
</tr>87.
</tbody>88.
<tfoot>89.
460 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

<tr>90.
<th colspan="2">Delete all people:</th>91.
<td><button type="button" id="btn-delete-all">-</button></td>92.
</tr>93.
</tfoot>94.
</table>95.
</main>96.
</body>97.
</html>98.
The body of the page contains a table with a thead that contains a single row of headers:
<thead>
<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Admin</th>
</tr>
</thead>
Below the thead are two tbody elements.
1. The first is empty and has an id of “people”. We will add and remove people from this tbody.
2. The second contains form elements for adding new rows:
<tr>
<td><input id="firstname" placeholder="First Name"></td>
<td><input id="lastname" placeholder="Last Name"></td>
<td><button type="button" id="btn-add">+</button></td>
</tr>
Below the tbody elements is a tfoot element with a button for deleting all rows.
The JavaScript contains two generic functions: addRow() and deleteAllRows(). By “generic”, we
mean that these functions are not tied to this application. They could be used with any table.
The addRow() function takes two parameters: the id of the tbody element to which to add the row
and an array of strings to populate the new row’s cells:
LESSON 18: The HTML Document Object Model | 461
EVALUATION COPY: Not to be used in class.

---

function addRow(tbodyId, cells) {
// Get the tbody and insert a new row
const tbody = document.getElementById(tbodyId);
const newRow = tbody.insertRow();
// Insert cells based on passed-in cells array
for (const cellText of cells) {
cell = newRow.insertCell();
cell.innerHTML = cellText;
}
// Insert a final cell with a Delete button
newCell = newRow.insertCell();
const btnDelete = document.createElement('button');
btnDelete.innerHTML = 'X';
btnDelete.addEventListener('click', function(e) {
btnDelete.parentNode.parentNode.remove();
});
newCell.appendChild(btnDelete);
}
Note this line of code:
btnDelete.parentNode.parentNode.remove();
The first parentNode is the cell that contains btnDelete. The second parentNode is the row that
contains that cell. That is the row that we are removing. We’ve added some styling below to make this
easier to see:
The deleteAllRows() function takes one parameter: the id of the tbody element containing the
rows to be deleted. It then uses a while loop to delete the first row over and over until there are no
rows left:
462 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

function deleteAllRows(tbodyId) {
const tbody = document.getElementById(tbodyId);
while (tbody.rows.length > 0) {
tbody.deleteRow(0);
}
}
The other JavaScript wires up the eventListeners and prepares the cells for passing data to addRow().
You may wish to practice inserting removing rows and cells using Chrome DevTools Console. Just
open the HTMLDOM/Demos/table.html file in Google Chrome, add some rows through the form,
then open the console and see if you can add and remove individual rows and cells with JavaScript.
## Conclusion
In this lesson, you have learned to work with the HTML DOM to create and modify HTML page
elements dynamically with JavaScript.
LESSON 18: The HTML Document Object Model | 463
EVALUATION COPY: Not to be used in class.

---

464 | LESSON 18: The HTML Document Object Model
EVALUATION COPY: Not to be used in class.

---

# LESSON 19
# HTML Forms
EVALUATION COPY: Not to be used in class.
Topics Covered
How HTML forms work.
The post and get methods.
Form elements.
Labels.
## Introduction
In this lesson, you will learn to work with HTML forms.
EVALUATION COPY: Not to be used in class.
### ❋
## 19.1. How HTML Forms Work
HTML forms are used for submitting data back to a script on the server for data processing. When a
form is submitted, the data in the form fields is passed to the server as name-value pairs. Server-side
scripts, which can be written in several different languages, are used to process the incoming data and
return a new HTML page to the browser. The page returned to the browser could be anything from
a “Thank you for registering” message to a list of search results generated from a database query.
The form processing occurs in the following sequence:
1. The user fills out the form and submits the form data using a “submit” button.
2. The data is sent to the web server.
LESSON 19: HTML Forms | 465
EVALUATION COPY: Not to be used in class.

---

3. A script on the web server processes the form, possibly interacting with the file system, one
or more databases, a mail server, or any number of other applications.
4. The script generates an HTML page, which the server returns to the client for display.
EVALUATION COPY: Not to be used in class.
### ❋
## 19.2. The ### form ## Element
HTML forms are created using the <form> tag, which takes two main attributes: action and method.
The action specifies the URL of the page that processes the form. The method attribute has two
possible values: post and get. Here is an example of a form element:
<form method="post" action="process-form.cfm">
<!--form fields go here-->
</form>
### 19.2.1. Get vs. Post
The value of the method attribute determines how the form data will be passed to the server.
get
When using the get method, which is the default, form data is sent to the server in the URL as a query
string. The query string is appended to the website address starting with a question mark (?) and
followed by name-value pairs delimited (separated) by an ampersand (&). A URL with a query string
might look like this:
https://www.example.com?firstname=Nat&lastname=Dunn
The get method is commonly used by search engines, because it allows the resulting page to be
bookmarked. For example, Google uses the get method. You can tell by looking at the location bar
after doing a search:
466 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

post
When post is used, the name-value pairs are not sent as part of the query string. Instead, they are sent
behind the scenes. This has the advantage of keeping the values hidden from anyone looking over the
user’s shoulder. Two other advantages of the post method are:
1. It allows for much more data to be submitted (i.e., larger forms).
2. It allows for files to be uploaded to the server.
51
Use Post for Most Forms
As a general rule, you should use post unless you want the user to be able to bookmark or share
(e.g., via email) the resulting web page.
EVALUATION COPY: Not to be used in class.
### ❋
## 19.3. Form Elements
This section describes the different form elements that can be used to input data into a form. As you
will see, many of these elements, but not all, are created with the <input> tag.
51. Files can be uploaded to the server via the file input type. The tag syntax is: <input type="file" name="filename">.
LESSON 19: HTML Forms | 467
EVALUATION COPY: Not to be used in class.

---

### 19.3.1. id and name Attributes
Form fields (also called controls) take both the name attribute and the id attribute. They are used for
different purposes:
The name attribute is used to hold the value of the field when data is sent to the server.
The id attribute is used by the browser to identify a specific element.
### 19.3.2. Text Fields
Text fields are created with the <input> tag with the type attribute set to “text”. They are used for
single lines of text:
The code to create the input element shown above is:
Username: <input type="text" name="username" id="username">
As text is the default type for input elements, if the type attribute is absent, the input type will
be text. So, the above code can also be written:
Username: <input name="username" id="username">
### 19.3.3. Labels
Form element labels should be put in <label> tags. Labels can be associated with form elements using
two methods:
1. Using the for attribute of the <label> to point to the id attribute of the form element.
2. Wrapping the form element in the <label> tag.
Method 1
<label for="username">Username:</label>
<input type="text" name="username" id="username">
468 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

Method 2
<label>
Username:
<input type="text" name="username" id="username">
</label>
We will mostly use the first method.
### 19.3.4. Text-like Input Types
There are many input types that are similar to the text type:
1. password
2. date
3. time
4. datetime-local
5. month
6. week
7. color
8. email
9. tel
10. url
11. search
12. number
Not all of these types are supported by all browsers. When a browser does not support a certain type,
it will fall back to using a standard text type, so you can technically use all of these types today.
However, we recommend not using the date and time types until there is more consistent browser
support. We will explain why soon.
Common Attributes for Text-like Inputs
1. type – Input type (e.g., text, tel, etc.). Applies to all text-like inputs.
2. name – Variable name used to send data to server. Applies to all text-like inputs.
LESSON 19: HTML Forms | 469
EVALUATION COPY: Not to be used in class.

---

3. id – Variable name used to identify field in the browser. Applies to all text-like inputs.
4. value – Initial value in the field. Applies to all text-like inputs.
5. size – Approximate number of characters visible in the field. Applies to text, search, tel,
url, email, and password.
6. minlength – Minimum number of characters that must be entered. Applies to text, search,
tel, url, email, and password.
7. maxlength – Maximum number of characters that can be entered. Applies to text, search,
tel, url, email, and password.
8. placeholder – A hint indicating what should be entered in the field. Applies to all text-like
inputs.
9. pattern – A regular expression expressing a valid value for the field. Applies to text, search,
tel, url, email, and password.
10. required – When present, the user must fill in a value before submitting the form. Applies
to all text-like inputs.
11. autofocus – Instructs the browser to place focus on that field allowing the user to begin
typing as soon as the page loads. Applies to all text-like inputs.
12. autocomplete – Used to override the browser’s or form element’s autocomplete behavior
on a field-by-field basis. When used, it is usually set to “off”.
52 
Applies to all text-like inputs,
except password.
Be Careful with Autofocusing
Autofocusing on a form element can cause problems for people using screen readers. For sighted
people, it’s generally okay if we provide one focus point for the keyboard (i.e., autofocus) and
another one for the eyes (e.g., instructions for filling out the form), but for people using screen
readers, there is only one focus point. So be careful not to skip over important contextual content
when directing focus to a form field using autofocus.
### 19.3.5. placeholder Attribute
The placeholder attribute is used to add placeholder text to the form field. The placeholder text will
go away as soon as the user begins typing in the field. The following code illustrates:
52. See https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill.
470 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

Demo 19.1: Forms/Demos/placeholder.html
-------Lines 1 through 9 Omitted-------
<label for="fullname">Name: </label>10.
<input type="text" name="fullname" id="fullname"11.
placeholder="Enter full name">12.
<input type="submit">13.
-------Lines 14 through 16 Omitted-------
Here’s what it looks like in the browser:
### 19.3.6. pattern Attribute
The pattern attribute is used to force a specific pattern (via a regular expression
53
) within a form field.
You can use a placeholder to give an example of a valid entry:
Demo 19.2: Forms/Demos/pattern.html
-------Lines 1 through 14 Omitted-------
<label for="telephone">Telephone: </label>15.
<input type="tel" name="telephone" id="telephone"16.
placeholder="(555) 555-5555"17.
pattern="^\(?([2-9]\d\d)\)?[\-\. ]?([2-9]\d\d)[\-\. ]?(\d{4})$">18.
-------Lines 19 through 22 Omitted-------
Open this file in the browser and enter data in the field. It should remain red
54 
until the value is a valid
10-digit U.S.-style phone number. It will allow for parentheses around the area code and for dashes,
spaces, and dots as separators. It will also allow for no separators. Note the first digit may not be a 0
or a 1.
When the user tries to submit with an invalid pattern, an error will appear:
53. Regular expressions are used by many programming languages for pattern matching. The syntax is complex, but super powerful.
54. Note that we use CSS to make the invalid content red. By default, you won’t know it’s invalid until you submit.
LESSON 19: HTML Forms | 471
EVALUATION COPY: Not to be used in class.

---

When the user enters a valid pattern, the field will indicate that it is valid (e.g., by changing the font
color from red to black):
### 19.3.7. Password Fields
Password fields are similar to text fields. They are coded as follows:
<label for="pw">Password:</label>
<input type="password" name="pw" id="pw" size="10" maxlength="12">
The only difference between a password field and a text field is that the value entered in a password
field is disguised so that onlookers cannot see it:
Not Really Secure
Note that there is no additional security provided by password fields beyond obscuring the text
you enter in the field. Passwords are not sent to the server any differently than other fields.
### 19.3.8. Date and Time Fields
The date, time and datetime-local field controls in Google Chrome are beautiful, both in their
presentation and in their control of the data entry. When these controls are used, you can count on
the data being in the formats shown in the following table:
472 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

Date and Time Data Formats
Example(s)Data FormatInput Type
1991-06-12yyyy-mm-dddate
03:05, 15:05hh:mmtime
1991-06-12T03:05yyyy-mm-ddThh:mmdatetime-local
1776-07yyyy-mmmonth
2028-W02yyyy-Wwwweek
Knowing the format of incoming data makes it much easier to process the data on the server side.
Unfortunately, users of browsers (most notably Safari) that do not support these field types are presented
with basic text fields instead of the more modern date and time controls. Such users are not likely to
enter data in the formats shown in the table above. That means that you have to write code to validate
the user-entered data. While this is possible, it would still be confusing to the user. As such, for now,
you are better off taking other approaches to collecting date and time values. One simple approach is
to use a combination of number inputs and radio buttons. We will learn about those soon. In the
meantime, here is a screenshot of what the form might look like in the browser:
While this isn’t as pretty as the date and time controls used by some browsers, for now, it provides a
safer way of collecting accurate data from the user.
### 19.3.9. Number Fields
Browsers present up and down buttons (spinboxes) to scroll through numbers, and they also allow you
to use the up and down arrows on the keyboard:
The step Attribute
By default, numbers increment by 1 and any non-integer (e.g., a decimal like 0.5) is considered invalid.
However, you can change the increment using the step attribute:
LESSON 19: HTML Forms | 473
EVALUATION COPY: Not to be used in class.

---

<input id="amount" name="amount" type="number" step=".01">
With step set to ".01", valid numbers can have a decimal point followed by one or two digits.
The min and max Attributes
You can control the range of possible values using the min and max attributes:
<input id="amount" name="amount" type="number" step=".01" min="0" max="100">
With the code above, numbers below 0 and above 100 will be invalid.
### 19.3.10. Color Fields
Most browsers will present a color picker when the user focuses on a color field:
<input id="color" name="color" type="color">
This will appear different in different browsers. The following screenshot shows how it appears in
Google Chrome:
474 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

### 19.3.11. Tel, URL, and Email Fields
tel
<input id="telephone" name="telephone" type="tel">
On desktop browsers, you don’t really gain anything by using the tel input type. As telephone numbers
can come in all different formats, there are no constraints on what can be entered here. You could,
however, add your own custom validation to all telephone inputs using the pattern attribute as
demonstrated earlier.
Also, user agents are free to provide a different/better means for filling out input fields based on their
type. For example, the iPhone provides a more appropriate interface (presenting the user with the
phone keypad) for filling out fields of the tel type:
url and email
<input id="url" name="url" type="url">
<input id="email" name="email" type="email">
Browsers provide validation for url and email fields to make sure the user enters valid data.
Also, as with type="tel", user agents are free to provide a different/better means for entering URLs
and email addresses.
For example, for url types, the iPhone provides keys for ., / and .com and does not provide a Space
key, as spaces are not allowed in URLs:
LESSON 19: HTML Forms | 475
EVALUATION COPY: Not to be used in class.

---

For emails, the iPhone provides @ and . keys:
Interestingly enough, the iPhone also provides a “space” key for emails. This is because email input
types can include a multiple attribute, which, when included, allows users to enter multiple emails
delimited by spaces. If the iPhone were a little smarter, it would only include the Space key when the
multiple attribute was present.
### 19.3.12. Search Fields
<input id="search" name="search" type="search">
Most input fields are meant to be filled out only one time and then submitted for processing. But a
search box is a bit different. For example, consider Microsoft Word’s search box:
476 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

Notice the x used for clearing the box. If you look at search boxes in other applications, you’ll notice
many of them also provide a simple way to clear the text. Modern web browsers take the same approach
that Word does. Here’s Chrome’s search box:
Note that the x doesn’t show up until you have entered some text into the field.
### 19.3.13. Hidden Fields
Hidden fields are created with the input element with the type attribute set to hidden. They are
used to pass name-value pairs to the server without displaying them to the user. Hidden fields are often
used to identify the product being ordered on an e-commerce page. For example:
<input type="hidden" name="product-id" id="product-id" value="42">
Beware of Hackers
Although the user can’t change the value of an input field via the form, savvy users can change
the value of any field, including input fields, using the browser’s developer tools, so you must
always include some sort of server-side validation, meaning you must have code on the server
that verifies that the data coming in from the form is valid and safe.
EVALUATION COPY: Not to be used in class.
### ❋
## 19.4. Buttons
Submit and reset buttons can both be created with the <input> tag.
### 19.4.1. Submit Button
A simple submit button looks like this:
LESSON 19: HTML Forms | 477
EVALUATION COPY: Not to be used in class.

---

Sample code for a submit button:
<input type="submit" name="submitbtn" id="submitbtn">
Different browsers format buttons in different ways and some have different default text for submit
buttons. Use the value attribute to explicitly set the text of the button:
<input type="submit" name="submitbtn" id="submitbtn" value="Register">
Now the button will appear as follows:
When a form has a submit button, it can be submitted either by clicking the button or by pressing
the Enter key when an input element has focus.
When a submit button is clicked, the name and value of that button are sent to the server (as a
name-value pair). This can be useful in the event that a form has multiple submit buttons as the
processing page can be set to behave differently depending on which button is clicked to submit the
form.
### 19.4.2. Reset Button
A reset button is used to set all the form fields back to their original values. A reset button looks like
this:
Most browsers use “Reset” as the default text. While this can be changed with the value attribute, it
is generally a better practice to leave the default value unchanged, or even to explicitly set it to “Reset”
as users are likely familiar with a standard Reset button.
478 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

Sample code for a reset button:
<input type="reset" name="resetbtn" id="resetbtn" value="Reset">
### 19.4.3. Button Buttons
Buttons can also be created using the <button> tag with an optional type attribute, which defaults
to “submit” if not present. Other possible values for type are “reset” and “button”.
<button type="submit"> and <button type="reset"> can be used interchangeably with <input
type="submit"> and <input type="reset">. The text between the opening and closing <button>
tags shows up on the button.
Sample code for a button button:
<button type="button" id="mycustombtn">Click me!</button>
This will appear as follows:
Button Buttons and JavaScript
Button buttons are often used in conjunction with JavaScript to add custom behaviors to a web
page. Open forms/Demos/button-buttons.html in your browser to see some fun things you
can do with buttons and JavaScript.
LESSON 19: HTML Forms | 479
EVALUATION COPY: Not to be used in class.

---

# Exercise 35: Creating a Registration Form
### 20 to 40 minutes
In this exercise, you will begin to create a registration form.
The form should appear as follows:
1. Open Forms/Exercises/registration.html for editing.
2. Add a form element to the page.
The action should be:
https://www.webucator.com/materials/htm101/
The method should be “post”.
3. Add the following form elements:
Hidden field: name and id should be “secretcode”; value should be “42”.
Text field: name and id should be “username”. The input should have a
corresponding label.
Password field: name and id should be “pw”. The input should have a corresponding
label.
Repeat password field: name and id should be “pw2”. The input should have a
corresponding label.
480 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

Submit button: value should be “Register”.
Reset button.
4. When you are done, open the page in a browser and fill out and submit the form.
You will need internet access to see the resulting page, which will look something like this:
Note that the resulting page shown above is not something you coded. It is the action page we used
in the form. This page just dumps back the data submitted in the form. We use it simply to show you
that the form does indeed get submitted and the data is now available on the server.
LESSON 19: HTML Forms | 481
EVALUATION COPY: Not to be used in class.

---

Solution: Forms/Solutions/registration-1.html
<!DOCTYPE html>1.
<html>2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1.0">5.
<title>Registration Form</title>6.
</head>7.
<body>8.
<h1>Registration Form</h1>9.
<form method="post"10.
action="https://www.webucator.com/materials/htm101/">11.
<input type="hidden" name="secretcode" id="secretcode" value="42">12.
<div>13.
<label for="username">Username:</label>14.
<input type="text" name="username" id="username" size="15">15.
</div>16.
<div>17.
<label for="pw">Password:</label>18.
<input type="password" name="pw" id="pw" size="15">19.
</div>20.
<div>21.
<label for="pw2">Repeat Password:</label>22.
<input type="password" name="pw2" id="pw2" size="15">23.
</div>24.
<div>25.
<input type="submit" name="submitbutton" id="submitbutton"26.
value="Register">27.
<input type="reset" name="resetbutton" id="resetbutton">28.
</div>29.
</form>30.
</body>31.
</html>32.
Note that we have used div elements to group the label-input pairs.
Be sure to correct any mistakes that you made as you will be starting with your solution to this exercise
in the next exercise.
EVALUATION COPY: Not to be used in class.
### ❋
482 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

## 19.5. Checkboxes
Checkboxes are created with the input element with the type attribute set to “checkbox”. The default
value for a checkbox is “on”. Although the value of a checkbox can be changed with the value attribute,
there is usually no reason to do so, as the name-value pair only gets sent to the server if the checkbox
is checked. In other words, the code on the server only needs to check for the existence of the variable
name to see if the checkbox was checked or not.
Take a look at the following code:
Toppings:
<input type="checkbox" name="sprinkles" id="sprinkles">
<label for="sprinkles">Sprinkles</label>
<input type="checkbox" name="nuts" id="nuts">
<label for="nuts">Nuts</label>
<input type="checkbox" name="whip" id="whip">
<label for="whip">Whipped Cream</label>
This will appear as follows in the browser:
### 19.5.1. Checked By Default
Checkboxes can be set to be checked by default using the checked attribute:
<input type="checkbox" checked name="sprinkles" id="sprinkles">
### 19.5.2. Making a Checkbox Required
To force the user to check a checkbox (e.g., to accept a user agreement), checkboxes can be set to be
required using the required attribute:
<input type="checkbox" required name="terms" id="terms">
<label for="terms">Check to indicate that you accept our terms.</label>
LESSON 19: HTML Forms | 483
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 19.6. Radio Buttons
Radio buttons are created with the input element with the type attribute set to “radio”. Radio buttons
generally come in groups, in which each radio button has the same name. Only one radio button in
the group can be checked at any given time. Each radio button in the group should have a unique value
– the value to be sent to the server if that radio button is selected.
Take a look at the following code:
Cup or Cone?
<label>
<input type="radio" name="container" value="cup">
Cup
</label>
<label>
<input type="radio" name="container" value="plaincone">
Plain cone
</label>
<label>
<input type="radio" name="container" value="sugarcone">
Sugar cone
</label>
<label>
<input type="radio" name="container" value="wafflecone">
Waffle cone
</label>
This will appear as follows in the browser:
484 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

### 19.6.1. Radio Buttons, Labels, and the id Attribute
You will notice that we used <label> differently with radio buttons. Instead of using the for attribute,
we wrapped each radio button in <label> tags. This is because our radio buttons don’t include id
attributes.
In form elements such as text fields and checkboxes, the id is usually the same as the name. Remember
that ids and names serve different purposes. Again, here is the difference between these attributes:
1. The name attribute is used to hold the value of the field when data is sent to the server.
2. The id attribute is used by the browser to identify a specific element.
In most cases, it’s simplest to use the same value for both the name and the id. But for radio buttons,
this isn’t possible, because radio buttons in the same set must all have the same name, but they cannot
all have the same id. All id values must be unique on a given page.
The following code shows radio buttons with ids:
Dominant Hand:
<input type="radio" name="dom-hand" id="hand-right" value="right">
<label for="hand-right">Right</label>
<input type="radio" name="dom-hand" id="hand-left" value="left">
<label for="hand-left">Left</label>
### 19.6.2. Checked By Default
Like checkboxes, radio buttons can be set to be checked by default using the checked attribute:
<input type="radio" name="container" value="cone" checked>
### 19.6.3. Requiring a Selection
To make a selection required, add the required attribute to at least one of the radio buttons in the
named group:
LESSON 19: HTML Forms | 485
EVALUATION COPY: Not to be used in class.

---

Dominant Hand:
<input type="radio" name="dom-hand" id="hand-right" value="right" required>
<label for="hand-right">Right</label>
<input type="radio" name="dom-hand" id="hand-left" value="left" required>
<label for="hand-left">Left</label>
There is no effective difference between adding the required attribute to one radio button or to all
the radio buttons in a named group, but the code is clearer if you add it to all of them. Marking just
one as required makes it look like you have to choose that option, which is not the case.
486 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

# Exercise 36: Adding Checkboxes and
# Radio Buttons
### 10 to 15 minutes
In this exercise, you will add a checkbox and radio buttons to the registration form. On completion,
the form should look like this:
1. Open Forms/Exercises/registration.html for editing if you don’t have it open already.
2. Add the following input elements:
A. Two radio buttons:
i. The name should be “dom-hand” for both.
ii. The id of each should be unique, say “hand-right” and “hand-left”.
iii. The value should also be unique, say “right” and “left”.
iv. The user should see the radio buttons labeled as “Right” and “Left”,
respectively.
B. A checkbox: the name and id should both be “terms” and the field should be required.
3. When you are done, open the page in a browser and fill out and submit the form. You shouldn’t
be able to submit unless you have accepted the terms.
You will need internet access to see the resulting page, which will look something like this:
LESSON 19: HTML Forms | 487
EVALUATION COPY: Not to be used in class.

---

488 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

LESSON 19: HTML Forms | 489
EVALUATION COPY: Not to be used in class.

---

Solution: Forms/Solutions/registration-2.html
-------Lines 1 through 24 Omitted-------
<div>25.
Dominant Hand:26.
<label>27.
<input type="radio" name="dom-hand" id="hand-right" value="right">28.
Right29.
</label>30.
<label>31.
<input type="radio" name="dom-hand" id="hand-left" value="left">32.
Left33.
</label>34.
</div>35.
<div>36.
<input type="checkbox" name="terms" id="terms" required>37.
<label for="terms">Check to accept our terms.</label>38.
</div>39.
-------Lines 40 through 47 Omitted-------
Be sure to correct any mistakes that you made as you will be starting with your solution to this exercise
in the next exercise.
EVALUATION COPY: Not to be used in class.
### ❋
## 19.7. Fieldsets
The fieldset element is used to group a set of inputs. The legend element is used within a fieldset
to give the group of elements a legend, which is similar to a caption. Here is a simple example with
radio buttons:
490 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

Demo 19.3: Forms/Demos/fieldset.html
-------Lines 1 through 7 Omitted-------
<body>8.
<form method="post"9.
action="https://www.webucator.com/materials/htm101/">10.
<fieldset>11.
<legend>Cup or Cone*:</legend>12.
<label>13.
<input type="radio" name="container" value="cup" required>14.
Cup15.
</label>16.
<label>17.
<input type="radio" name="container" value="plaincone"18.
required>19.
Plain cone20.
</label>21.
<label>22.
<input type="radio" name="container" value="sugarcone"23.
required>24.
Sugar cone25.
</label>26.
<label>27.
<input type="radio" name="container" value="wafflecone"28.
required>29.
Waffle Cone30.
</label>31.
</fieldset>32.
<input name="submitbutton" id="submitbutton" type="submit">33.
<input name="resetbutton" id="resetbutton" type="reset">34.
</form>35.
-------Lines 36 through 37 Omitted-------
And here is how it appears in Google Chrome:
LESSON 19: HTML Forms | 491
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 19.8. Select Menus
Select menus are created with the select element, which must contain one or more option elements.
The text between the opening and closing <option> tags appears in the select menu. The value of the
option element’s value attribute is what gets passed to the server if that option is selected.
Here is a simple example:
<label for="flavor">Flavor:</label>
<select name="flavor" id="flavor">
<option value="chocolate">Chocolate</option>
<option value="strawberry">Strawberry</option>
<option value="vanilla">Vanilla</option>
</select>
And here is how it appears in Google Chrome:
The <select> and <option> tags’ attributes are listed below:
select Attributes
1. size – Number of options to appear at once.
2. multiple – Indicates that multiple options can be selected. Value must be “multiple” or left
out.
3. required – When present, the user must select an option that has a value at least one character
long.
492 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

option Attributes
1. value – Value to send to server if option is selected.
2. selected – Indicates that option is pre-selected. Value must be “selected” or left out.
### 19.8.1. Option Groups
Options can be arranged in groups using the <optgroup> tag. The label attribute is used to set the
option group heading.
<label for="flavor">Flavor:</label>
<select name="flavor" id="flavor">
<option value="0"></option>
<optgroup label="Soft Flavors">
<option value="softChoc">Chocolate</option>
<option value="softStraw">Strawberry</option>
<option value="softVan">Vanilla</option>
</optgroup>
<optgroup label="Hard Flavors">
<option value="hardChoc">Chocolate</option>
<option value="hardStraw">Strawberry</option>
<option value="hardVan">Vanilla</option>
<option value="hardMint">Mint Chocolate Chip</option>
<option value="hardCC">Cookies &amp; Cream</option>
</optgroup>
</select>
This will appear as follows in Google Chrome:
LESSON 19: HTML Forms | 493
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 19.9. Textareas
Textareas are created with the <textarea> tag. Take a look at the following code:
<label for="requests">Special Requests:</label><br>
<textarea name="requests" id="requests" cols="40" rows="6"></textarea>
This would appear as follows after the user has entered data:
494 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

The cols and rows attributes indicate the number of columns and rows (in characters) that the
textarea should span.
An initial value can be entered into the textarea by adding text between the opening and closing
<textarea> tags. For example:
<textarea name="requests" cols="40" rows="6">Hello, there!</textarea>
This is often done when a user submits the form with errors. The server-side code then returns the
form already populated with the previously entered values, so the user doesn’t have to re-enter them.
The textarea element’s attributes are shown below:
1. name – Variable name.
2. cols – Width of textarea in average width of characters.
3. rows – Height of textarea in number of lines.
4. minlength – Minimum number of characters that must be entered.
5. maxlength – Maximum number of characters that can be entered.
6. pattern – A regular expression expressing a valid value for the field.
7. placeholder – A placeholder value that will disappear as soon as data is entered into the
field.
8. required – When present, the user must fill in a value before submitting the form.
LESSON 19: HTML Forms | 495
EVALUATION COPY: Not to be used in class.

---

# Exercise 37: Adding a Select Menu and a
# Textarea
### 15 to 25 minutes
In this exercise, you will add a select menu and textarea to the registration form. On completion, the
form should look like this:
1. Open Forms/Exercises/registration.html for editing if you don’t have it open already.
2. Add the following form elements:
A. select: name and id should be “referral”. Options should be broken up as follows
(refer to the screenshot above):
i. “--Please choose--” with value of “0”
ii. An option group with the label of “Search Engine” and the following
options:
a. “Google” with value of “Google”
496 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

b. “Bing” with value of “Bing”
c. “Yahoo!” with value of “Yahoo”
d. “Other” with value of “OtherSearchEngine”
iii. “Word of Mouth” with value of “wom”
iv. “Other” with value of “other”
B. textarea: name and id should be “comments”. Be sure to include cols and rows
attributes.
3. Put the “dominant hand” radio buttons in a fieldset.
When you are done, open the page in a browser and fill out and submit the form. You will need internet
access to see the resulting page, which will look something like this:
LESSON 19: HTML Forms | 497
EVALUATION COPY: Not to be used in class.

---

Solution: Forms/Solutions/registration-3.html
-------Lines 1 through 24 Omitted-------
<div>25.
<label for="referral">Where did you hear about us?</label>26.
<select name="referral" id="referral">27.
<option value="0">--Please choose--</option>28.
<optgroup label="Search Engine">29.
<option value="Google">Google</option>30.
<option value="Bing">Bing</option>31.
<option value="Yahoo">Yahoo!</option>32.
<option value="OtherSearchEngine">Other</option>33.
</optgroup>34.
<option value="wom">Word of Mouth</option>35.
<option value="other">Other</option>36.
</select>37.
</div>38.
<div>39.
<fieldset>40.
<legend>Dominant Hand:</legend>41.
<label>42.
<input type="radio" name="dom-hand" id="hand-right" value="right">43.
Right44.
</label>45.
<label>46.
<input type="radio" name="dom-hand" id="hand-left" value="left">47.
Left48.
</label>49.
</fieldset>50.
</div>51.
<div>52.
<label for="comments">Comments:</label><br>53.
<textarea name="comments" id="comments"54.
cols="40" rows="4"></textarea>55.
</div>56.
-------Lines 57 through 68 Omitted-------
EVALUATION COPY: Not to be used in class.
### ❋
498 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

## 19.10. HTML Forms and CSS
As with all elements, forms can be laid out better and made to look much prettier with CSS. For
example, here is a completed ice cream form without CSS:
And here is the same form with CSS added:
LESSON 19: HTML Forms | 499
EVALUATION COPY: Not to be used in class.

---

## Conclusion
In this lesson, you have learned to create HTML forms.
500 | LESSON 19: HTML Forms
EVALUATION COPY: Not to be used in class.

---

# LESSON 20
# JavaScript Form Validation
EVALUATION COPY: Not to be used in class.
Topics Covered
Accessing data entered by users in forms.
Validating text fields, textareas, radio buttons, checkboxes, and select menus.
Writing clean, reusable validation functions.
## Introduction
In this lesson, you will learn to validate forms with HTML and JavaScript.
EVALUATION COPY: Not to be used in class.
### ❋
## 20.1. Server-side Form Validation
In most cases, when a user submits a registration form, a login form, a purchase form, or any other
type of form, the data gets sent to a web server for processing. That data should be validated as soon
as it hits the server, before doing anything else with it. This is true even if the data has already been
validated on the client (the browser). That’s because, it is impossible for the server to know that the
client-side validation actually occurred. Nefarious hackers can easily get around JavaScript validation.
In fact, it can be as simple as turning JavaScript off in the browser. To see how easy that is, simply
google “Turn off JavaScript in Google Chrome” or in whichever browser you want to test. Server-side
validation can be done with PHP, Java, Python, or any server-side programming language.
So, is it worth validating the code on the client if you have to do it again on the server anyway? Yes, it
is. Here’s why:
LESSON 20: JavaScript Form Validation | 501
EVALUATION COPY: Not to be used in class.

---

1. Better user experience. Client-side validation is practically immediate. In fact, it can be done
as the user types. So, the user gets immediate feedback as to what needs to be corrected.
2. Less work for your server. If the data has already been validated on the client, then it is likely
to pass server-side validation as well, meaning your server will only have to check it once.
EVALUATION COPY: Not to be used in class.
### ❋
## 20.2. HTML Form Validation
HTML form fields include validation attributes, such as required, pattern, min and max, and
minlength and maxlength. In addition, setting the type to “email” or “url” forces the user to enter
a valid email or URL. These are called constraints. While adding HTML constraints is very simple, it
is difficult to control the user experience. To illustrate, let’s look at an ice cream order form:
502 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Demo 20.1: FormValidation/Demos/ice-cream.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<title>Ice Cream Order Form</title>8.
</head>9.
<body>10.
<form id="ice-cream-form" method="post">11.
<label for="username">Username*:</label>12.
<input type="text" id="username" name="username"13.
required minlength="8" maxlength="25">14.
<label for="email">Email*:</label>15.
<input type="email" id="email" name="email" required>16.
<label for="phone">Telephone:</label>17.
<input type="tel" id="phone" name="phone"18.
pattern="[1-9]\d{2}-\d{3}-\d{4}">19.
20.
<fieldset>21.
<legend>Cup or Cone*:</legend>22.
<label>23.
<input type="radio" name="container" value="cup" required>24.
Cup25.
</label>26.
<label>27.
<input type="radio" name="container" value="plaincone" required>28.
Plain cone29.
</label>30.
<label>31.
<input type="radio" name="container" value="sugarcone" required>32.
Sugar cone33.
</label>34.
<label>35.
<input type="radio" name="container" value="wafflecone" required>36.
Waffle Cone37.
</label>38.
</fieldset>39.
40.
<label for="flavor">Flavor*:</label>41.
<select name="flavor" id="flavor" required>42.
<option value="0" selected="selected">--Please Choose--</option>43.
<optgroup label="Soft Flavors">44.
LESSON 20: JavaScript Form Validation | 503
EVALUATION COPY: Not to be used in class.

---

<option value="softChoc">Chocolate</option>45.
<option value="softStraw">Strawberry</option>46.
<option value="softVan">Vanilla</option>47.
</optgroup>48.
<optgroup label="Hard Flavors">49.
<option value="hardChoc">Chocolate</option>50.
<option value="hardStraw">Strawberry</option>51.
<option value="hardVan">Vanilla</option>52.
<option value="hardMint">Mint Chocolate Chip</option>53.
<option value="hardCC">Cookies &amp; Cream</option>54.
</optgroup>55.
</select>56.
57.
<fieldset id="toppings">58.
<legend>Toppings:</legend>59.
<input type="checkbox" name="sprinkles" id="sprinkles">60.
<label for="sprinkles">Sprinkles</label>61.
<input type="checkbox" name="nuts" id="nuts">62.
<label for="nuts">Nuts</label>63.
<input type="checkbox" name="whip" id="whip">64.
<label for="whip">Whipped Cream</label>65.
</fieldset>66.
67.
<label for="requests">Special Requests:</label>68.
<textarea name="requests" id="requests"69.
minlength="10" maxlength="200"></textarea><br>70.
71.
<input type="checkbox" name="terms" id="terms" required>72.
<label for="terms">73.
I understand that I'm really not going to get any ice cream.74.
</label>75.
76.
<button>Submit</button>77.
</form>78.
</body>79.
</html>80.
Code Explanation
We have added some basic CSS to style the form:
504 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

This form has no JavaScript validation, but the form fields do include HTML constraints:
1. The username must be between 8 and 25 characters and is required.
2. The email must be a valid email address and is required.
3. The phone must match a regular expression
55 
if it is entered. It is not required.
55. Regular expressions are used by many programming languages for pattern matching.
LESSON 20: JavaScript Form Validation | 505
EVALUATION COPY: Not to be used in class.

---

4. A container selection is required.
5. A flavor selection is required.
6. A requests entry must be between 10 and 200 characters if it is entered. It is not required.
7. The terms checkbox must be checked.
While this is functional, it’s not very user friendly. Watch what happens when we submit the form
without entering any data:
Notice that, while both the username and the email fields are invalid, we only get an error for the
username field.
Now let’s fill in a username and resubmit:
This time we get an error on the email field, but not on any of the other fields.
506 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

So, the user only finds out one error at a time and then must attempt to submit after each correction.
JavaScript to the rescue! With JavaScript, we can enhance and customize the validation of forms.
EVALUATION COPY: Not to be used in class.
### ❋
## 20.3. Accessing Form Data
All forms on a web page are stored in the document.forms[] array. The first form on a page is
document.forms[0], the second form is document.forms[1], and so on. However, it is usually
easier to reference forms via their id attribute and refer to them that way. For example, a form with
id login-form can be referenced as document.getElementById('login-form'). The major
advantage of referencing forms by id is that the forms can be repositioned on the page without affecting
the JavaScript.
Elements within a form are properties of that form and can be referenced as follows, where elementName
is the value of the element’s name attribute:
document.getElementById('login-form').elementName
For example, given the following form:
<form id="login-form">
<label for="uname">Username:</label>
<input type="text" name="username" id="uname">
<input type="submit" value="Log in">
</form>
You can access the username field like this:
const username = document.getElementById('login-form').username;
As with all elements, you can also access a field by its id:
LESSON 20: JavaScript Form Validation | 507
EVALUATION COPY: Not to be used in class.

---

const username = document.getElementById('uname');
Names and IDs
It is common to use the same value for both the name and id of form fields. In the example
above, we use different values simply to distinguish between the examples of accessing the field
by name and id.
All text-like fields (e.g., text, password, url, email, tel, etc.) have a value property that holds the
text value of the field. Take a look at the following example:
Demo 20.2: FormValidation/Demos/text-like-fields.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<title>Text-like Fields</title>8.
</head>9.
<body>10.
<form id="my-form" method="post" novalidate>11.
<label for="textfield">Text field*:</label>12.
<input type="text" id="textfield" name="textfield"13.
required minlength="5" maxlength="10">14.
<label for="emailfield">Email field*:</label>15.
<input type="email" id="emailfield" name="emailfield" required>16.
<label for="urlfield">URL field:</label>17.
<input type="url" id="urlfield" name="urlfield" pattern="https:.*">18.
19.
<button>Submit</button>20.
</form>21.
</body>22.
</html>23.
508 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Code Explanation
1. Open FormValidation/Demos/text-like-fields.html in the browser, open the console,
and type:
const form = document.getElementById('my-form');
const textField = form.textfield;
textField.value;
2. You will see the above code outputs an empty string. That is because the field has no text in
it.
3. Now type “Hello!” in the text field and type textField.value; in the console again. This
time, textField.value returns “Hello!”:
4. All values of text-like fields can be accessed in this way. Try it with emailfield and urlfield.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 20: JavaScript Form Validation | 509
EVALUATION COPY: Not to be used in class.

---

## 20.4. Form Validation with JavaScript
The first step to using JavaScript to validate your forms is to turn off the default HTML validation.
You do this by adding the novalidate attribute to the <form> tag:
<form id="my-form" method="post" novalidate>
This prevents the default HTML validation from happening when the form is submitted, so you can
use JavaScript to create custom validation.
To check if a field’s value is valid, use the checkValidity() method of the field. In the following
screenshot, we first ran textField.checkValidity(); when the field was empty and then ran it
again after typing “Hello!” into the text field:
510 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

# Exercise 38: Checking the Validity of the
# Email and URL Fields
### 5 to 10 minutes
1. From your Demos folder, open text-like-fields.html in your browser, if it’s not open
already.
2. In the console, check the validity of the emailfield and urlfield fields. If the field is valid
to start, modify the field value to make it invalid and check it again. If it is invalid to start,
modify the field value to make it valid and check it again.
3. Note that emailfield is required and must be a well-formed email, and urlfield is not
required, but if entered, it must be a valid URL beginning with “https:”.
LESSON 20: JavaScript Form Validation | 511
EVALUATION COPY: Not to be used in class.

---

Solution
The url field isn’t valid in the last example, because it starts with “http:” and the pattern requires
that it starts with “https:”.
EVALUATION COPY: Not to be used in class.
### ❋
512 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

## 20.5. Checking Validity on Input and Submit Events
For the best user experience, in addition to checking all fields when the user submits the form, we
should check the validity of each field when the user changes the value of that field. To do this, we will
listen for submit events on the form, and input events on the text-like fields. We will add those
listeners as soon as the page loads. We can use the following function to check the validity of a field
and turn the background color of the control to pink if the entry is invalid:
function checkField(field) {
if (!field.checkValidity()) {
field.style.backgroundColor = 'pink';
} else {
field.style.backgroundColor = '';
}
}
We will call the checkField() function when the user inputs a value in the field we want to check
and when the user submits the form. To do that, we add our event listeners:
window.addEventListener('load', function(e) {
const form = document.getElementById('my-form');
const textField = form.textfield;
textField.addEventListener('input', function(e) {
checkField(textField);
});
form.addEventListener("submit", function(e) {
// Check errors
checkField(textField);
// If form is invalid, prevent submission
if (!form.checkValidity()) {
e.preventDefault();
alert('Please fix form errors.');
}
});
});
A few things to note:
LESSON 20: JavaScript Form Validation | 513
EVALUATION COPY: Not to be used in class.

---

1. The event we are listening for is an input event. This fires whenever the value of an input,
select, or textarea changes; however, at the time of this writing, it is only reliable for
text-like input and textarea fields.
A. For checkboxes and radio buttons, it is better to listen for click events.
B. For select fields, it is better to listen for change events.
2. For now, we’re just changing the background color of invalid fields to pink. Later, we’ll add
useful messages.
3. form elements also take the checkValidity() method, which returns false if any of the
form’s fields are invalid. Otherwise, it returns true.
4. The preventDefault() method of an event is used to prevent what would normally happen
when that event occurs. In this case, the event is submit, which would normally cause the
form to be submitted. To prevent that from happening when the form is invalid, we call
e.preventDefault().
5. We include an alert() call only for illustration purposes. In practice, you probably don’t
need the alert. You can just show the errors in the form.
Input Event
The input event is meant to be fired when the user changes the value of input, select, and
textarea elements, but at the time of this writing, it is not yet fully reliable. Check
https://caniuse.com/#search=input for information on current browser support.
Below, we have the complete file:
514 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Demo 20.3: FormValidation/Demos/text-like-fields-validate.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<script>8.
function checkField(field) {9.
if (!field.checkValidity()) {10.
field.style.backgroundColor = 'pink';11.
} else {12.
field.style.backgroundColor = '';13.
}14.
}15.
16.
window.addEventListener('load', function(e) {17.
const form = document.getElementById('my-form');18.
const textField = form.textfield;19.
20.
textField.addEventListener('input', function(e) {21.
checkField(textField);22.
});23.
24.
form.addEventListener('submit', function(e) {25.
// Check errors26.
checkField(textField);27.
28.
// If form is invalid, prevent submission29.
if (!form.checkValidity()) {30.
e.preventDefault();31.
alert('Please fix form errors.');32.
}33.
});34.
});35.
</script>36.
<title>Text-like Fields</title>37.
</head>38.
<body>39.
<form id="my-form" method="post" novalidate>40.
<label for="textfield">Text field*:</label>41.
<input type="text" id="textfield" name="textfield"42.
required minlength="5" maxlength="10">43.
<label for="emailfield">Email field*:</label>44.
LESSON 20: JavaScript Form Validation | 515
EVALUATION COPY: Not to be used in class.

---

<input type="email" id="emailfield" name="emailfield" required>45.
<label for="urlfield">URL field:</label>46.
<input type="url" id="urlfield" name="urlfield" pattern="https:.*">47.
48.
<button>Submit</button>49.
</form>50.
</body>51.
</html>52.
Code Explanation
1. Open FormValidation/Demos/text-like-fields-validate.html in your browser and
submit the form without filling in any of the fields. The text field should turn pink:
2. Enter a value of at least 5 characters in the text field. You will see that the pink background
goes away.
Now let’s add validation for the email and url fields:
516 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Demo 20.4: FormValidation/Demos/text-like-fields-validate2.html
-------Lines 1 through 16 Omitted-------
window.addEventListener('load', function(e) {17.
const form = document.getElementById('my-form');18.
const textField = form.textfield;19.
const emailField = form.emailfield;20.
const urlField = form.urlfield;21.
22.
textField.addEventListener('input', function(e) {23.
checkField(textField);24.
});25.
26.
emailField.addEventListener('input', function(e) {27.
checkField(emailField);28.
});29.
30.
urlField.addEventListener('input', function(e) {31.
checkField(urlField);32.
});33.
34.
form.addEventListener('submit', function(e) {35.
// Check errors36.
checkField(textField);37.
checkField(emailField);38.
checkField(urlField);39.
40.
// If form is invalid, prevent submission41.
if (!form.checkValidity()) {42.
e.preventDefault();43.
alert('Please fix form errors.');44.
}45.
});46.
});47.
-------Lines 48 through 64 Omitted-------
Code Explanation
1. Notice that we reuse the checkField() function without modification.
2. Open FormValidation/Demos/text-like-fields-validate2.htmlin your browser
and submit the form without filling in any of the fields. You will notice that only the Text
and Email fields appear pink. That’s because the URL field is not required.
3. Enter an invalid URL in the URL field (e.g., “hello”) and resubmit. This time all three fields
will appear pink.
LESSON 20: JavaScript Form Validation | 517
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 20.6. Adding Error Messages
There are many ways to add error messages to the form. One common practice is to have the error
messages within the HTML, but to hide them until it is time to report an error. You could do this by
setting the display property to “none” by default and then changing it to “block” to report the error.
One downside to this method is that it makes the HTML messy.
Instead of adding error messages to our HTML that may never be shown to the user, we will use
JavaScript to dynamically add elements containing error messages.
### 20.6.1. The dataset Property
HTML elements can take a dataset property to associate non-standard data with an element. We
will use this to assign error messages to our form fields. The following code illustrates this:
const form = document.getElementById('my-form');
const textField = form.textfield;
textField.dataset.errorMsg = 'You must enter a value.';
Sometimes it is useful to use other properties of the field in the error message. For example, our
textField field is created with the following HTML:
<input type="text" id="textfield" name="textfield"
required minlength="5" maxlength="10">
Below we use the minLength and maxLength properties of textField to create the error message.
Note that JavaScript uses camelCase for the property names (e.g., minLength and maxLength):
textField.dataset.errorMsg = 'Your entry must be between ' +
textField.minLength + ' and ' +
textField.maxLength + ' characters.';
Now we’ll look at how we can report these custom errors to the user in a friendly way:
518 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Demo 20.5: FormValidation/Demos/text-like-fields-add-error1.html
-------Lines 1 through 7 Omitted-------
<script>8.
function addError(field) {9.
const error = document.createElement('div');10.
error.innerHTML = field.dataset.errorMsg;11.
error.className = 'error';12.
field.parentNode.insertBefore(error, field);13.
}14.
15.
function removeError(field) {16.
// to do17.
}18.
19.
function checkField(field) {20.
if (!field.checkValidity()) {21.
addError(field);22.
} else {23.
removeError(field);24.
}25.
}26.
27.
window.addEventListener('load', function(e) {28.
const form = document.getElementById('my-form');29.
const textField = form.textfield;30.
textField.dataset.errorMsg = 'Your entry must be between ' +31.
textField.minLength + ' and ' + textField.maxLength +32.
' characters.';33.
34.
const emailField = form.emailfield;35.
emailField.dataset.errorMsg = 'You must enter a valid email.';36.
37.
const urlField = form.urlfield;38.
urlField.dataset.errorMsg = 'The URL must begin with "https".';39.
40.
textField.addEventListener('input', function(e) {41.
checkField(textField);42.
});43.
44.
emailField.addEventListener('input', function(e) {45.
checkField(emailField);46.
});47.
48.
urlField.addEventListener('input', function(e) {49.
checkField(urlField);50.
LESSON 20: JavaScript Form Validation | 519
EVALUATION COPY: Not to be used in class.

---

});51.
52.
form.addEventListener('submit', function(e) {53.
// Check errors54.
checkField(textField);55.
checkField(emailField);56.
checkField(urlField);57.
58.
// If form is invalid, prevent submission59.
if (!form.checkValidity()) {60.
e.preventDefault();61.
alert('Please fix form errors.');62.
}63.
});64.
});65.
</script>66.
-------Lines 67 through 82 Omitted-------
Code Explanation
1. Notice that we have added errorMsg properties to the dataset properties of our field elements
on the load event.
2. Notice that we have changed checkField() to call addError(field) and
removeError(field) instead of setting and unsetting a pink background.
3. Open FormValidation/Demos/text-like-fields-add-error1.html in your browser
and submit the form without filling in any of the fields. After seeing an alert warning you that
there are errors, you should see those errors appear right above the two empty required input
fields:
520 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

4. The addError() function takes one argument: the field to which to add an error message.
That field should be sent to the function with an errorMsg property in its dataset. The
function does the following:
A. Creates a new div element and assigns it to error:
const error = document.createElement('div');
B. Sets the innerHTML of the error to the field’s errorMsg:
error.innerHTML = field.dataset.errorMsg;
C. Sets the className of error to 'error':
error.className = 'error';
D. Inserts the new error element before the passed-in field, so that the error shows
up right above the field itself.
5. Now, type “hello” into the textfield input:
LESSON 20: JavaScript Form Validation | 521
EVALUATION COPY: Not to be used in class.

---

6. It validates the field with each user input. And each time it finds the field invalid, it adds
another error div. To prevent that from happening, we should check to see if the error
div already exists and, if it does, exit the function without adding another error div. The
following example does that:
Demo 20.6: FormValidation/Demos/text-like-fields-add-error2.html
-------Lines 1 through 8 Omitted-------
function addError(field) {9.
if (field.previousElementSibling &&10.
field.previousElementSibling.className === 'error') {11.
// error message already showing12.
return;13.
}14.
const error = document.createElement('div');15.
error.innerHTML = field.dataset.errorMsg;16.
error.className = 'error';17.
field.parentNode.insertBefore(error, field);18.
}19.
-------Lines 20 through 85 Omitted-------
Code Explanation
Now the addError() function first checks to see if the passed-in field has a previousElementSibling
and, if it does, if that element’s className is “error”. If it is, that means the error div is already
present, so we return. We don’t actually return anything. We are simply exiting the function and
effectively passing the ball back to the code that called the function.
Open FormValidation/Demos/text-like-fields-add-error2.html in your browser to test it
out.
522 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Now we need to write our removeError() function so that we can remove the error when the user
corrects the problem:
Demo 20.7: FormValidation/Demos/text-like-fields-remove-error.html
-------Lines 1 through 8 Omitted-------
function addError(field) {9.
if (field.previousElementSibling &&10.
field.previousElementSibling.className === 'error') {11.
// error message already showing12.
return;13.
}14.
const error = document.createElement('div');15.
error.innerHTML = field.dataset.errorMsg;16.
error.className = 'error';17.
field.parentNode.insertBefore(error, field);18.
}19.
20.
function removeError(field) {21.
if (field.previousElementSibling &&22.
field.previousElementSibling.className === 'error') {23.
field.previousElementSibling.remove();24.
}25.
}26.
-------Lines 27 through 88 Omitted-------
Code Explanation
1. Like with the addError() function, the removeError() function first checks to see if the
passed-in field has a previousElementSibling and, if it does, if that element’s className
is “error”. If it is, that means the error div is present, so we remove it using the remove()
method.
2. Now, type “Hello” into the textfield input. The error should disappear as soon as the entry
is valid.
3. Add and remove values from the other fields as well to see if they work as expected.
EVALUATION COPY: Not to be used in class.
### ❋
LESSON 20: JavaScript Form Validation | 523
EVALUATION COPY: Not to be used in class.

---

## 20.7. Validating Textareas
Validating textarea elements is similar to validating text-like input fields. In the following code
sample we have added a textarea, which is not required, but if included must be between 10 and
200 characters:
524 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Demo 20.8: FormValidation/Demos/text-like-fields-complete.html
-------Lines 1 through 46 Omitted-------
const urlField = form.urlfield;47.
urlField.dataset.errorMsg = 'The URL must begin with "https".';48.
49.
const comments = form.comments;50.
comments.dataset.errorMsg = 'Your comment must be between ' +51.
comments.minLength + ' and ' + comments.maxLength +52.
' characters.';53.
54.
textField.addEventListener('input', function(e) {55.
checkField(textField);56.
});57.
58.
emailField.addEventListener('input', function(e) {59.
checkField(emailField);60.
});61.
62.
urlField.addEventListener('input', function(e) {63.
checkField(urlField);64.
});65.
66.
comments.addEventListener('input', function(e) {67.
checkField(comments);68.
});69.
70.
form.addEventListener('submit', function(e) {71.
// Check errors72.
checkField(textField);73.
checkField(emailField);74.
checkField(urlField);75.
checkField(comments);76.
77.
// If form is invalid, prevent submission78.
if (!form.checkValidity()) {79.
e.preventDefault();80.
alert('Please fix form errors.');81.
}82.
});83.
});84.
-------Lines 85 through 97 Omitted-------
<label for="comments">Comments:</label>98.
<textarea name="comments" id="comments"99.
minlength="10" maxlength="200"></textarea><br>100.
LESSON 20: JavaScript Form Validation | 525
EVALUATION COPY: Not to be used in class.

---

101.
-------Lines 102 through 105 Omitted-------
Code Explanation
The image belows shows how the form appears when all fields are invalid:
EVALUATION COPY: Not to be used in class.
### ❋
526 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

## 20.8. Validating Checkboxes
Like the text-like fields we’ve been looking at, checkboxes are created with the input tag. We can reuse
the same checkField() function we have created; however, rather than listening for input events,
we will listen for click events.
Demo 20.9: FormValidation/Demos/checkbox.html
-------Lines 1 through 35 Omitted-------
window.addEventListener('load', function(e) {36.
const form = document.getElementById('my-form');37.
const cb = form.terms;38.
cb.dataset.errorMsg = 'You must check the box!';39.
40.
cb.addEventListener('click', function(e) {41.
checkField(cb);42.
});43.
44.
form.addEventListener("submit", function(e) {45.
// Check errors46.
checkField(cb);47.
48.
// If form is invalid, prevent submission49.
if (!form.checkValidity()) {50.
e.preventDefault();51.
alert('Please fix form errors.');52.
}53.
});54.
});55.
-------Lines 56 through 59 Omitted-------
<form id="my-form" method="post" novalidate>60.
<input type="checkbox" name="terms" id="terms" required>61.
<label for="terms">62.
I understand that it's really important63.
that I check this box.64.
</label>65.
-------Lines 66 through 70 Omitted-------
Code Explanation
1. This code should all be clear as it’s similar to the text-field validation in the earlier examples.
LESSON 20: JavaScript Form Validation | 527
EVALUATION COPY: Not to be used in class.

---

2. Open FormValidation/Demos/checkbox.html and submit the form without checking
the checkbox. You should get an alert saying “Please fix form errors.” and see an error above
the checkbox:
3. As you check and uncheck the box, the error should disappear and reappear.
EVALUATION COPY: Not to be used in class.
### ❋
## 20.9. Validating Radio Buttons
Radio buttons are similar to checkboxes; however, since our checkField() function only expects a
single element, we have to pass just one radio button input element to the function. Luckily, if any
one of a group of radio buttons is invalid, they are all invalid, so we can just send the first radio button,
which we can get like this:
const answer = form.answer[0];
answer.dataset.errorMsg = 'Please answer the question.';
As with checkboxes, we will listen for click events. We loop through form.answer, which is an array
of radio buttons, adding the click event to each one:
528 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Demo 20.10: FormValidation/Demos/radio-buttons.html
-------Lines 1 through 35 Omitted-------
window.addEventListener('load', function(e) {36.
const form = document.getElementById('my-form');37.
const answer = form.answer[0];38.
answer.dataset.errorMsg = 'Please answer the question.';39.
40.
// Add click event handler to each radio button41.
for (let button of form.answer) {42.
button.addEventListener('click', function(e) {43.
checkField(answer);44.
});45.
}46.
47.
form.addEventListener("submit", function(e) {48.
// Check errors49.
checkField(answer);50.
51.
// If form is invalid, prevent submission52.
if (!form.checkValidity()) {53.
e.preventDefault();54.
alert('Please fix form errors.');55.
}56.
});57.
});58.
</script>59.
<title>Radio Buttons</title>60.
</head>61.
<body>62.
<form id="my-form" method="post" novalidate>63.
<fieldset>64.
<legend>Question*:</legend>65.
<label>66.
<input type="radio" name="answer" value="1" required> A67.
</label>68.
<label>69.
<input type="radio" name="answer" value="2" required> B70.
</label>71.
<label>72.
<input type="radio" name="answer" value="3" required> C73.
</label>74.
<label>75.
<input type="radio" name="answer" value="4" required> D76.
</label>77.
</fieldset>78.
LESSON 20: JavaScript Form Validation | 529
EVALUATION COPY: Not to be used in class.

---

-------Lines 79 through 83 Omitted-------
Code Explanation
1. This code should all be clear as it’s similar to the text-field validation in the earlier examples.
2. Open FormValidation/Demos/radio-buttons.html and submit the form without selecting
an answer. You should get an alert to fix form errors and see an error message:
3. As soon as you make a selection, the error should disappear.
### 20.9.1. Which Radio Button was Selected?
The following function is useful for checking which radio button in a group of radio buttons is selected.
This might be useful in an upcoming challenge exercise!
function getSelectedRadio(radioArray) {
for (btn of radioArray) {
if (btn.checked) {
return btn;
}
}
return null;
}
The function simply loops through the buttons until it finds one that is checked, at which point it
returns that button. If it doesn’t find any checked buttons, it returns null.
530 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 20.10. Validating Select Menus
When select menus allow for only one option to be selected (i.e., when the multiple attribute is not
used), then there is always a default selection. If it is not set specfically using the selected attribute,
then the first option (at index 0) will be selected by default. As such, the required attribute, while
valid, doesn’t actually change anything. It is a common practice to make the first option of select
menu an invalid option that might be blank or read “--Please choose--”; however, there is no way to
enforce this with HTML alone. Using JavaScript, we can report an error if the first option is left selected.
In addition, because leaving the first option selected doesn’t make the select menu invalid, we need
to explicitly make the field invalid. This is done with the element’s setCustomValidity() method,
which takes a string with an error message:
function checkSelect(field) {
if ( field.selectedIndex === 0 ) {
field.setCustomValidity('Invalid');
addError(field);
} else {
field.setCustomValidity('');
removeError(field);
}
}
By setting the custom validity to a string with at least one character, we make the field invalid, which
in turn makes the whole form invalid. Then in the else block, we set the custom validity to an empty
string, which indicates that the element has no custom validity error.
The following example shows how we incorporate this checkSelect() function in our form validation:
LESSON 20: JavaScript Form Validation | 531
EVALUATION COPY: Not to be used in class.

---

Demo 20.11: FormValidation/Demos/select-menus.html
-------Lines 1 through 27 Omitted-------
function checkSelect(field) {28.
if ( field.selectedIndex === 0 ) {29.
field.setCustomValidity('Invalid');30.
addError(field);31.
} else {32.
field.setCustomValidity('');33.
removeError(field);34.
}35.
}36.
37.
window.addEventListener('load', function(e) {38.
const form = document.getElementById('my-form');39.
const problem = form.problem;40.
problem.dataset.errorMsg = 'Please choose an answer.';41.
42.
problem.addEventListener('change', function(e) {43.
checkSelect(problem);44.
});45.
46.
form.addEventListener("submit", function(e) {47.
// Check errors48.
checkSelect(problem);49.
50.
// If form is invalid, prevent submission51.
if (!form.checkValidity()) {52.
e.preventDefault();53.
alert('Please fix form errors.');54.
}55.
});56.
});57.
</script>58.
<title>Select Menus</title>59.
</head>60.
<body>61.
<form id="my-form" method="post" novalidate>62.
<label for="problem">50 + 50? *:</label>63.
<select name="problem" id="problem" required>64.
<option value="0">--Please Choose--</option>65.
<option value="50">50</option>66.
<option value="100">100</option>67.
<option value="250">250</option>68.
</select>69.
532 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

-------Lines 70 through 74 Omitted-------
Code Explanation
1. Note that the code listens for a change event on the select field.
2. Open FormValidation/Demos/select-menus.html and submit the form without selecting
an answer. You should see an error:
3. As soon as you make a selection, the error should disappear. If you re-select the first option,
the error should reappear.
LESSON 20: JavaScript Form Validation | 533
EVALUATION COPY: Not to be used in class.

---

# Exercise 39: Validating the Ice Cream
# Order Form
### 25 to 40 minutes
In this exercise, you will write JavaScript to validate the ice cream order form we saw at the beginning
of this lesson.
1. Open FormValidation/Exercises/ice-cream.html for editing.
A. Add a script tag to use ice-cream.js.
B. Turn off HTML form validation.
2. Open FormValidation/Exercises/ice-cream.js for editing.
A. Notice that the following functions are already written:
i. addError()
ii. removeError()
iii. checkField()
iv. checkSelect()
3. Write code to add validation for the following fields:
A. email
B. phone
C. username
D. container
E. flavor
F. requests
G. terms
4. Each of the above fields should be validated when its value is changed. All fields should be
validated when the form is submitted. Be sure to prevent the form from submitting if any
field is invalid.
5. Test your solution in a browser.
The following screenshot shows the form (split into two parts) after submitting with errors in all fields:
534 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Challenge
Write code to add an error if the user orders whipped cream on a cone:
Note that you will want to perform this check:
1. When the user clicks the “Whipped Cream” checkbox.
2. When the user selects a container.
3. When the user submits the form.
LESSON 20: JavaScript Form Validation | 535
EVALUATION COPY: Not to be used in class.

---

Solution: FormValidation/Solutions/ice-cream.html
-------Lines 1 through 6 Omitted-------
<link rel="stylesheet" href="../styles.css">7.
<script src="ice-cream.js"></script>8.
<title>Ice Cream Order Form</title>9.
</head>10.
<body>11.
<form id="ice-cream-form" method="post" novalidate>12.
-------Lines 13 through 80 Omitted-------
536 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Solution: FormValidation/Solutions/ice-cream.js
-------Lines 1 through 38 Omitted-------
window.addEventListener('load', function(e) {39.
const form = document.getElementById('ice-cream-form');40.
const email = form.email;41.
email.dataset.errorMsg = 'Invalid Email';42.
const phone = form.phone;43.
phone.dataset.errorMsg = 'Invalid Phone. Use format: ###-###-####';44.
const username = form.username;45.
username.dataset.errorMsg = 'Username must be 8 to 25 characters.';46.
const container = form.container[0];47.
container.dataset.errorMsg = 'Please select a container.';48.
const flavor = form.flavor;49.
flavor.dataset.errorMsg = 'Please select a flavor.';50.
const terms = form.terms;51.
terms.dataset.errorMsg = 'You must accept the terms.';52.
const requests = form.requests;53.
requests.dataset.errorMsg = 'Your comment must be between ' +54.
requests.minLength + ' and ' + requests.maxLength +55.
' characters.';56.
57.
username.addEventListener("input", function(e) {58.
checkField(username);59.
});60.
61.
email.addEventListener("input", function(e) {62.
checkField(email);63.
});64.
65.
phone.addEventListener("input", function(e) {66.
checkField(phone);67.
});68.
69.
for (radio of form.container) {70.
radio.addEventListener("click", function(e) {71.
checkField(container);72.
});73.
}74.
75.
flavor.addEventListener("change", function(e) {76.
checkSelect(flavor);77.
});78.
79.
requests.addEventListener("input", function(e) {80.
checkField(requests);81.
LESSON 20: JavaScript Form Validation | 537
EVALUATION COPY: Not to be used in class.

---

});82.
83.
terms.addEventListener("click", function(e) {84.
checkField(terms);85.
});86.
87.
form.addEventListener("submit", function(e) {88.
// Check errors89.
checkField(username);90.
checkField(email);91.
checkField(phone);92.
checkField(container);93.
checkSelect(flavor);94.
checkField(requests);95.
checkField(terms);96.
97.
// If form is invalid, prevent submission98.
if (!form.checkValidity()) {99.
e.preventDefault();100.
alert('Please fix form errors.');101.
}102.
});103.
104.
});105.
538 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Challenge Solution: FormValidation/Solutions/ice-cream-challenge.js
-------Lines 1 through 38 Omitted-------
function getSelectedRadio(radioArray) {39.
for (btn of radioArray) {40.
if (btn.checked) {41.
return btn;42.
}43.
}44.
return null;45.
}46.
47.
function checkWhip(whip) {48.
const radioArray = document.querySelectorAll('input[name="container"]');49.
const selectedContainer = getSelectedRadio(radioArray);50.
if (!selectedContainer) {51.
return true; //container not selected52.
}53.
if (whip.checked && selectedContainer.value !== 'cup') {54.
addError(whip);55.
return false;56.
} else {57.
removeError(whip);58.
}59.
return true;60.
}61.
62.
window.addEventListener('load', function(e) {63.
const form = document.getElementById('ice-cream-form');64.
const email = form.email;65.
email.dataset.errorMsg = 'Invalid Email';66.
const phone = form.phone;67.
phone.dataset.errorMsg = 'Invalid Phone. Use format: ###-###-####';68.
const username = form.username;69.
username.dataset.errorMsg = 'Username must be 8 to 25 characters.';70.
const container = form.container[0];71.
container.dataset.errorMsg = 'Please select a container.';72.
const flavor = form.flavor;73.
flavor.dataset.errorMsg = 'Please select a flavor.';74.
const terms = form.terms;75.
terms.dataset.errorMsg = 'You must accept the terms.';76.
const requests = form.requests;77.
requests.dataset.errorMsg = 'Your comment must be between ' +78.
requests.minLength + ' and ' + requests.maxLength +79.
' characters.';80.
const whip = form.whip;81.
LESSON 20: JavaScript Form Validation | 539
EVALUATION COPY: Not to be used in class.

---

whip.dataset.errorMsg = 'You cannot have whipped cream on a cone.';82.
83.
username.addEventListener("input", function(e) {84.
checkField(username);85.
});86.
87.
email.addEventListener("input", function(e) {88.
checkField(email);89.
});90.
91.
phone.addEventListener("input", function(e) {92.
checkField(phone);93.
});94.
95.
for (radio of form.container) {96.
radio.addEventListener("click", function(e) {97.
checkField(container);98.
checkWhip(whip);99.
});100.
}101.
102.
flavor.addEventListener("change", function(e) {103.
checkSelect(flavor);104.
});105.
106.
requests.addEventListener("input", function(e) {107.
checkField(requests);108.
});109.
110.
terms.addEventListener("click", function(e) {111.
checkField(terms);112.
});113.
114.
whip.addEventListener("click", function(e) {115.
checkWhip(whip);116.
});117.
118.
form.addEventListener("submit", function(e) {119.
// Check errors120.
checkField(username);121.
checkField(email);122.
checkField(phone);123.
checkField(container);124.
checkSelect(flavor);125.
checkField(requests);126.
540 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

checkField(terms);127.
const whipValid = checkWhip(whip);128.
129.
// If form is invalid, prevent submission130.
if (!form.checkValidity() || !whipValid) {131.
e.preventDefault();132.
alert('Please fix form errors.');133.
}134.
});135.
136.
});137.
EVALUATION COPY: Not to be used in class.
### ❋
## 20.11. Giving the User a Chance
While it is great to capture errors early, so the user can fix them right away, some users might be a little
put off by errors that show up before they have had a chance to finish an individual entry. For example,
the way our ice cream form works now, as soon as the user starts entering an email address, an error
shows up:
One solution would be to listen for change events, which do not fire until the field loses focus, instead
of input events, which fire every time a character is added or removed. This solution works well the
first time the user enters data, but it is not as nice when the user is correcting a field that already has
an error as in the following scenario:
1. The user enters an invalid email address and moves on to the next field, causing an error to
show up.
2. The user returns to the email field and fixes the email address. The error will not go away
until the change event fires, which won’t occur until the user leaves the field.
LESSON 20: JavaScript Form Validation | 541
EVALUATION COPY: Not to be used in class.

---

In the above scenario, it would be nicer to hide the error as soon as the field is valid and then show it
again if the field becomes invalid again. We can do this by keeping track of which fields have been
“touched.” We will consider a field to have been touched if the user changes its value or if the user has
submitted the form and received validation errors.
Note that this will only apply to text-like input and textarea fields as we use change and click
events to initiate validation on other field types. We can get all input and textarea fields using:
const inputFields = document.querySelectorAll('input, textarea');
Take a look at the following code:
542 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

Demo 20.12: FormValidation/Demos/ice-cream-final.js
-------Lines 1 through 81 Omitted-------
// Get the input and textarea fields82.
const inputFields = document.querySelectorAll('input, textarea');83.
84.
// Loop through the input fields, marking them all "untouched"85.
for (field of inputFields) {86.
field.dataset.status = 'untouched';87.
}88.
89.
// When a user changes the value of a text-like input or textarea,90.
// mark the field "touched"91.
// validate the field92.
username.addEventListener("change", function(e) {93.
username.dataset.status = 'touched';94.
checkField(username);95.
});96.
97.
// When a user inputs data into a text-like input or textarea98.
// that has been touched, validate the field99.
username.addEventListener("input", function(e) {100.
if (username.dataset.status === 'touched') {101.
checkField(username);102.
}103.
});104.
105.
email.addEventListener("change", function(e) {106.
email.dataset.status = 'touched';107.
checkField(email);108.
});109.
email.addEventListener("input", function(e) {110.
if (email.dataset.status === 'touched') {111.
checkField(email);112.
}113.
});114.
115.
phone.addEventListener("change", function(e) {116.
phone.dataset.status = 'touched';117.
checkField(phone);118.
});119.
phone.addEventListener("input", function(e) {120.
if (phone.dataset.status === 'touched') {121.
checkField(phone);122.
}123.
});124.
LESSON 20: JavaScript Form Validation | 543
EVALUATION COPY: Not to be used in class.

---

125.
requests.addEventListener("change", function(e) {126.
requests.dataset.status = 'touched';127.
checkField(requests);128.
});129.
requests.addEventListener("input", function(e) {130.
if (requests.dataset.status === 'touched') {131.
checkField(requests);132.
}133.
});134.
-------Lines 135 through 155 Omitted-------
// Mark all fields touched156.
for (field of inputFields) {157.
field.dataset.status = 'touched';158.
}159.
-------Lines 160 through 177 Omitted-------
Code Explanation
The following code will not validate an input or textarea field on each input unless the user has
previously changed that field or submitted the form. Things to note:
1. We save all the input and textarea fields as a NodeList (similar to an array of elements)
called inputFields.
2. We loop through the input fields, setting the dataset.status property of each field to
“untouched.”
3. We add change event listeners to each text-like input and the “requests” textarea. When
the change event occurs, we set the dataset.status property of the field to “touched” and
we validate the field.
4. We modified the input event listeners to check if the dataset.status property is “touched”,
and if it is, we validate the field.
5. We added a for loop in the callback function of the submit event listener to set the
dataset.status property of all the input and textarea fields to “touched”.
Open FormValidation/Demos/ice-cream-final.html in your browser to try it out.
544 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

## Conclusion
In this lesson, you have learned to write clean, reusable form validation scripts.
LESSON 20: JavaScript Form Validation | 545
EVALUATION COPY: Not to be used in class.

---

546 | LESSON 20: JavaScript Form Validation
EVALUATION COPY: Not to be used in class.

---

# LESSON 21
# Regular Expressions
EVALUATION COPY: Not to be used in class.
Topics Covered
Regular expressions for advanced form validation.
Regular expressions and backreferences to clean up form entries.
## Introduction
Regular expressions are used to do sophisticated pattern matching, which can often be helpful in form
validation. For example, a regular expression can be used to check whether an email address entered
into a form field is syntactically correct. JavaScript supports Perl-compatible regular expressions.
EVALUATION COPY: Not to be used in class.
### ❋
## 21.1. Getting Started
There are two ways to create a regular expression in JavaScript:
1. Using literal syntax
const reExample = /pattern/;
2. Using the RegExp() constructor
const reExample = new RegExp("pattern");
There is no difference between the two.
LESSON 21: Regular Expressions | 547
EVALUATION COPY: Not to be used in class.

---

For example, we could create a regular expression for a social security number like this:
// literal syntax
const reSSN = /^[0-9]{3}[\- ]?[0-9]{2}[\- ]?[0-9]{4}$/;
// RegExp() contructor syntax
const reSSN = new RegExp("^[0-9]{3}[\- ]?[0-9]{2}[\- ]?[0-9]{4}$");
### 21.1.1. JavaScript’s Regular Expression test() Method
The test() method takes one argument, a string, and checks whether that string contains a match of
the pattern specified by the regular expression. It returns true if it does contain a match and false
if it does not. This method is very useful in form validation scripts. The following code sample shows
how it can be used for checking a social security number. Don’t worry about the syntax of the regular
expression itself. We’ll cover that shortly.
const reSSN = /^[0-9]{3}[\- ]?[0-9]{2}[\- ]?[0-9]{4}$/;
reSSN.test('555-55-5555');
reSSN.test('555-55-555'); // missing one digit
Here we show this code run in Chrome DevTools Console:
EVALUATION COPY: Not to be used in class.
### ❋
## 21.2. Regular Expression Syntax
A regular expression is a pattern that specifies a list of characters. In this section, we will look at how
those characters are specified.
548 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

Try These!
We encourage you to try these regular expressions in Google Chrome’s console.
### 21.2.1. Start and End ( ^ $ )
A caret (^) at the beginning of a regular expression indicates that the string being searched must start
with this pattern.
The pattern ^foo can be found in “food”, but not in “barfood”.
A dollar sign ($) at the end of a regular expression indicates that the string being searched must end
with this pattern.
The pattern foo$ can be found in “curfoo”, but not in “food”.
### 21.2.2. Number of Occurrences ( ? + * {} )
The following symbols affect the number of occurrences of the preceding character
56
: ?, +, *, and {}.
56. Or characters if parentheses are used.
LESSON 21: Regular Expressions | 549
EVALUATION COPY: Not to be used in class.

---

A question mark (?) indicates that the preceding character should appear zero or one times in the
pattern.
The pattern foo? can be found in “food” and “fod”, but not “faod”.
A plus sign (+) indicates that the preceding character should appear one or more times in the pattern.
The pattern fo+ can be found in “fod”, “food” and “foood”, but not “fd”.
An asterisk (*) indicates that the preceding character should appear zero or more times in the pattern.
The pattern fo*d can be found in “fd”, “fod” and “food”.
550 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

Curly brackets with one parameter ( {n} ) indicate that the preceding character should appear exactly
n times in the pattern.
The pattern fo{3}d can be found in “foood” , but not “food” or “fooood”.
Curly brackets with two parameters ( {n1, n2} ) indicate that the preceding character should appear
between n1 and n2 times in the pattern.
The pattern fo{2,4}d can be found in “food”, “foood”, and “fooood”, but not “fod” or
“foooood”.
LESSON 21: Regular Expressions | 551
EVALUATION COPY: Not to be used in class.

---

Curly brackets with one parameter and an empty second paramenter ( {n,} ) indicate that the preceding
character should appear at least n times in the pattern.
The pattern fo{2,}d can be found in “food” and “foooood”, but not “fod”.
### 21.2.3. Common Characters ( . \d \D \w \W \s \S )
A period ( . ) represents any character except a newline.
The pattern fo.d can be found in “food”, “foad”, “fo9d”, and “fo*d”.
552 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

Backslash-d ( \d ) represents any digit. It is the equivalent of [0-9] (see page 555).
The pattern fo\dd can be found in “fo1d”, “fo4d” and “fo0d”, but not in “food”.
Backslash-D ( \D ) represents any character except a digit. It is the equivalent of [^0-9] (see page 556).
The pattern fo\Dd can be found in “food” and “fo_d”, but not in “fo4d”.
LESSON 21: Regular Expressions | 553
EVALUATION COPY: Not to be used in class.

---

Backslash-w ( \w ) represents any word character (letters, digits, and the underscore ( _ ) ).
The pattern fo\wd can be found in “food”, “fo_d” and “fo4d”, but not in “fo*d”.
Backslash-W ( \W ) represents any character except a word character.
The pattern fo\Wd can be found in “fo*d”, “fo@d” and “fo.d”, but not in “food”.
Backslash-s ( \s) represents any whitespace character (e.g, space, tab, newline, etc.).
The pattern fo\sd can be found in “fo d”, but not in “food”.
554 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

Backslash-S ( \S ) represents any character except a whitespace character.
The pattern fo\Sd can be found in “fo*d”, “food” and “fo4d”, but it cannot be found in “fo
d”.
### 21.2.4. Grouping ( [] )
Square brackets ( [] ) are used to group options.
[aeiou] matches an “a”, an “e”, an “i”, an “o”, or a “u”.
The pattern f[aeiou]d can be found in “fad” and “fed”, but not in “fyd”, “food”
or “fd”.
Number of occurrence characters can be used with groups.
LESSON 21: Regular Expressions | 555
EVALUATION COPY: Not to be used in class.

---

The pattern f[aeiou]{2}d can be found in "food“, ”faed“ and ”feod“, but not in
”faeod“, ”fed“ or ”fd".
Ranges can be created using a dash:
[A-Z] matches any upper case letter.
[a-z] matches any lower case letter.
[A-Za-z] matches any letter, regardless if it is lower case or upper case.
### 21.2.5. Negation ( ^ )
When used as the first character within square brackets, the caret ( ^ ) is used for negation.
The pattern f[^aeiou]d can be found in “fqd” and “f4d”, but not in “fad” or “fed”.
556 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

### 21.2.6. Subpatterns ( () )
Parentheses ( () ) are used to capture subpatterns.
The pattern f(oo)?d indicates that the subpattern oo can show up zero or one time. The
pattern can be found in “food” and “fd”, but not in “fod”.
### 21.2.7. Alternatives ( | )
The pipe ( | ) is used to create optional patterns.
The pattern foo$|^bar can be found in “foo” and “bar”, but not “foobar”.
### 21.2.8. Escape Character ( \ )
The backslash ( \ ) is used to escape special characters, such as periods (.), dashes (-), forward slashes
(/) and backslashes (\).
The pattern fo\.d can be found in “fo.d”, but not in “food” or “fo4d”.
LESSON 21: Regular Expressions | 557
EVALUATION COPY: Not to be used in class.

---

### 21.2.9. Case-Insensitive Matches
The i flag makes a whole pattern match case insensitive.
Literal Syntax: Flags are added after the end slash. For example, /aeiou/i matches all
lowercase and uppercase vowels.
RegExp() Constructor Syntax: Flags are added as the second argument. For example,
RegExp('abcde','i') matches all lowercase and uppercase vowels.
The pattern /f[aeiou]d/i or RegExp('f[aeiou]d', 'i') can be found in “fad”, “FAD”, “FaD”,
and “fAd”.
EVALUATION COPY: Not to be used in class.
### ❋
558 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

## 21.3. Backreferences
Backreferences are special wildcards that refer back to a subpattern within a pattern. They can be used
to make sure that two subpatterns match. The first subpattern in a pattern is referenced as \1, the
second is referenced as \2, and so on.
For example, the pattern /^([bmpw])o\1$/ matches “bob”, “mom”, “pop”, and “wow”, but not “bop”
or “pow”.
A more practical example has to do with matching the delimiter in social security numbers, which are
9 digits long and separated into three parts: three digits, then two digits, then four digits. Examine the
following regular expression:
/^\d{3}([\- ]?)\d{2}([\- ]?)\d{4}$/
Within the caret (^) and dollar sign ($), which are used to specify the beginning and end of the pattern,
there are three sequences of digits, optionally separated by a hyphen or a space. Note that the hyphen
needs to be escaped with a backslash because dashes are special characters in regular expressions. This
pattern will be matched in all of the following strings (and more):
1. 123-45-6789
2. 123 45 6789
3. 123456789
4. 123-45 6789
LESSON 21: Regular Expressions | 559
EVALUATION COPY: Not to be used in class.

---

5. 123 45-6789
6. 123-456789
The last three strings are not ideal, but they do match the pattern.
Backreferences can be used to make sure that the second delimiter matches the first delimiter. The
regular expression would look like this:
/^\d{3}([\- ]?)\d{2}\1\d{4}$/
The \1 refers back to the first subpattern. Only the first three strings listed above match this regular
expression.
560 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 21.4. Form Validation with Regular Expressions
Regular expressions are often used to create stronger form validation. This can often be done using the
pattern attribute in form fields. Consider the HTML email type. While it does force the user to
enter a syntactically valid email address, it is not very restrictive. For example, the following would be
considered valid “a@a” and would pass as a valid email address. You may wish to have your validation
be a little stricter than that. For example, you might require the following sequence. The regular
expression matching each sequence part is shown in parentheses:
1. One or more of any of the following characters: letters, numbers, underscores, dashes, and
periods.
Matching regular expression: ([\w\-\.])+
2. An @ sign.
Matching regular expression: @
3. One or more of any of the following characters: letters, numbers, underscores, dashes, and
periods.
Matching regular expression: ([\w\-\.])+
LESSON 21: Regular Expressions | 561
EVALUATION COPY: Not to be used in class.

---

4. A period followed by two to four letters.
Matching regular expression: \.([A-Za-z]{2,4})
The full regular expression looks like this:
([\w\-\.])+@([\w\-\.])+\.([A-Za-z]{2,4})
Email Regular Expression
Note that the regular expression shown above prevents some syntactically valid email addresses
and allows for some invalid ones. Creating a robust pattern for an email address is quite complex.
The site https://emailregex.com offers the following regular expression, which it claims
works 99.99% of the time:
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-
9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
As mentioned earlier, you can use regular expressions to validate email addresses, zip codes, usernames,
passwords, or any number of other fields simply by using the pattern attribute in your HTML input
fields, like this:
<input type="email"
pattern="([\w\-\.])+@([\w\-\.])+\.([A-Za-z]{2,4})">
EVALUATION COPY: Not to be used in class.
### ❋
## 21.5. Cleaning Up Form Entries
Regular expressions can also be used to clean up user entries immediately after they are entered. This
can be done using a combination of regular expressions and the replace() method of a string object.
562 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

The replace() Method
The replace() method of a string takes two arguments: a regular expression and a replacement string.
It replaces the first regular expression match in the string with the replacement string. If the g flag (for
global) is used in the regular expression, it replaces all matches with the string.
"Webucator".replace(/cat/, "dog"); //returns Webudogor
"Webucator".replace(/[aeiou]/g, "x"); //returns Wxbxcxtxr
And here it is in the Google Chrome console:
With the replace() method, it is also possible to replace a matched pattern with a new string made
up of submatches from the pattern. The following example illustrates this.
LESSON 21: Regular Expressions | 563
EVALUATION COPY: Not to be used in class.

---

Demo 21.1: RegularExpressions/Demos/ssn-cleaner.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<title>SSN Cleaner</title>8.
<script>9.
function cleanSSN(ssn) {10.
const reSSN = /^(\d{3})[\- ]?(\d{2})[\- ]?(\d{4})$/;11.
if (reSSN.test(ssn)) {12.
const cleanedSsn = ssn.replace(reSSN, "$1-$2-$3");13.
return cleanedSsn;14.
} else {15.
alert("INVALID SSN");16.
return ssn;17.
}18.
}19.
20.
window.addEventListener('load', function(e) {21.
const btn = document.getElementById('clean');22.
const ssn = document.getElementById('ssn');23.
btn.addEventListener('click', function(e) {24.
ssn.value = cleanSSN(ssn.value);25.
e.preventDefault(); // prevent form submission26.
});27.
});28.
</script>29.
</head>30.
<body>31.
<form>32.
<input id="ssn" name="ssn" size="20">33.
<button id="clean">Clean SSN</button>34.
</form>35.
</body>36.
</html>37.
Code Explanation
The cleanSSN() function is used to “clean up” a social security number. The regular expression
contained in reSSN contains three subexpressions, denoted with parentheses:
564 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

^(\d{3})[\- ]?(\d{2})[\- ]?(\d{4})$
1. (\d{3})
2. (\d{2})
3. (\d{4})
Within the second argument of the replace() method, these subexpressions can be referenced as $1,
$2, and $3, respectively.
When the user clicks the “Clean SSN” button, the cleanSSN() function is called. This function first
uses a regular expression to test that the user-entered value is a valid social security number. If it is, it
then cleans it up with the following line of code, which dash-delimits the three substrings matching
the subexpressions.
const cleanedSsn = ssn.replace(reSSN, "$1-$2-$3");
It then returns the cleaned-up social security number.
For example, in the following form, the social security number is entered with one space and one dash:
After clicking the Clean SSN button, the social security number gets formatted with two dashes:
LESSON 21: Regular Expressions | 565
EVALUATION COPY: Not to be used in class.

---

566 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

# Exercise 40: Cleaning Up Form Entries
### 15 to 25 minutes
In this exercise, you will create a function for validating and formatting a phone number. The phone
number should have the following format:
1. An optional open parentheses.
2. Three digits.
3. An optional close parentheses.
4. An optional dash, dot or space.
5. Three digits.
6. An optional dash, dot or space.
7. Four digits.
Here are some examples of valid phone numbers:
1. 5551234567
2. (555) 123 4567
3. 555-123-4567
4. 555 123 4567
You are to do the following:
1. Open RegularExpressions/Exercises/phone-cleaner.html for editing.
2. Add a pattern attribute to the phone field with a regular expression matching the pattern
described above.
3. Write a cleanPhone() function that takes one argument: the field containing a phone
number. It should check to see that the field contains a valid phone number.
A. If it does, it should return a cleaned-up version of the phone number in the format:
(555) 123-4567.
B. If it does not, it should alert “INVALID PHONE” and return the current unchanged
invalid phone value.
4. Test your solution in a browser.
LESSON 21: Regular Expressions | 567
EVALUATION COPY: Not to be used in class.

---

Solution: RegularExpressions/Solutions/phone-cleaner.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<title>Phone Cleaner</title>8.
<script>9.
function cleanPhone(phone) {10.
const rePhone = RegExp(phone.pattern);11.
const phoneNum = phone.value;12.
const cleanedPhone = phoneNum.replace(rePhone, "($1) $2-$3");13.
if (rePhone.test(phoneNum)) {14.
return cleanedPhone;15.
} else {16.
alert("INVALID PHONE");17.
return phoneNum;18.
}19.
}20.
21.
window.addEventListener('load', function(e) {22.
const btn = document.getElementById('clean');23.
const phone = document.getElementById('phone');24.
btn.addEventListener('click', function(e) {25.
phone.value = cleanPhone(phone);26.
e.preventDefault(); // prevent form submission27.
});28.
});29.
</script>30.
</head>31.
<body>32.
<form>33.
<input type="tel" id="phone" name="phone" size="20"34.
pattern="^\(?(\d{3})\)?[\-\. ]?(\d{3})[\-\. ]?(\d{4})$">35.
<button id="clean">Clean Phone</button>36.
</form>37.
</body>38.
</html>39.
568 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

EVALUATION COPY: Not to be used in class.
### ❋
## 21.6. A Slightly More Complex Example
Some phone numbers are given as a combination of numbers and letters (e.g, 877-WEBUCATE). As
is the case with 877-WEBUCATE, such numbers often have an extra character just to make the word
complete.
In the following demo, we will:
1. Add a function called convertPhone() that:
Strips all characters that are not numbers or letters.
Converts all letters to numbers using the following rules:
ABC -> 2
DEF -> 3
GHI -> 4
JKL -> 5
MNO -> 6
PQRS -> 7
TUV -> 8
WXYZ -> 9
Notice that the regular expressions used in the conversions include both the g flag
(for global) so that all matches get replaced, and the i flag, so that the search is
case-insensitive.
Passes the first 10 characters of the resulting string, and the pattern to use to the
cleanPhone() function.
Returns the resulting string.
2. Modify the form, so that it calls convertPhone() rather than cleanPhone().
LESSON 21: Regular Expressions | 569
EVALUATION COPY: Not to be used in class.

---

Demo 21.2: RegularExpressions/Demos/phone-converter.html
<!DOCTYPE html>1.
<html lang="en">2.
<head>3.
<meta charset="UTF-8">4.
<meta name="viewport" content="width=device-width,initial-scale=1">5.
<link rel="stylesheet" href="../normalize.css">6.
<link rel="stylesheet" href="../styles.css">7.
<title>Phone Converter</title>8.
<script>9.
function cleanPhone(phone, pattern) {10.
const cleanedPhone = phone.replace(pattern, "($1) $2-$3");11.
return cleanedPhone;12.
}13.
14.
function convertPhone(phone) {15.
const rePhone = /^\(?(\d{3})\)?[\-\. ]?([A-Za-z\d]{3})[\-\. ]?([A-Za-z\d]{4})/;16.
if (!rePhone.test(phone.value)) {17.
alert("INVALID PHONE");18.
return phone.value;19.
}20.
let convertedPhone = phone.value.replace(/[^A-Za-z\d]/g, "");21.
convertedPhone = convertedPhone.replace(/[ABC]/gi, "2");22.
convertedPhone = convertedPhone.replace(/[DEF]/gi, "3");23.
convertedPhone = convertedPhone.replace(/[GHI]/gi, "4");24.
convertedPhone = convertedPhone.replace(/[JKL]/gi, "5");25.
convertedPhone = convertedPhone.replace(/[MNO]/gi, "6");26.
convertedPhone = convertedPhone.replace(/[PQRS]/gi, "7");27.
convertedPhone = convertedPhone.replace(/[TUV]/gi, "8");28.
convertedPhone = convertedPhone.replace(/[WXYZ]/gi, "9");29.
phone.value = convertedPhone.substring(0, 10);30.
31.
return cleanPhone(phone.value, rePhone);32.
}33.
34.
window.addEventListener('load', function(e) {35.
const btn = document.getElementById('clean');36.
const phone = document.getElementById('phone');37.
btn.addEventListener('click', function(e) {38.
phone.value = convertPhone(phone);39.
e.preventDefault(); // prevent form submission40.
});41.
});42.
</script>43.
</head>44.
570 | LESSON 21: Regular Expressions
EVALUATION COPY: Not to be used in class.

---

<body>45.
<form novalidate>46.
<input type="tel" id="phone" name="phone" size="20">47.
<button id="clean">Clean Phone</button>48.
</form>49.
</body>50.
</html>51.
## Conclusion
In this lesson, you have learned to work with regular expressions to validate and to clean up form
entries.
LESSON 21: Regular Expressions | 571
EVALUATION COPY: Not to be used in class.