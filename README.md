# Programming with HTML, CSS and JavaScript — Learning Platform

Interactive learning website built from the **55320A Beginner Scheme of Work** and styled after the provided Designer PDF.

## Quick start

```bash
cd learning-platform
node server.js
```

Open **http://127.0.0.1:3000**

## What is included

### Curriculum (all 11 modules)
1. A Quick Overview of Web Development  
2. Introduction to HTML  
3. Paragraphs, Headings, and Text  
4. HTML Links  
5. HTML Images  
6. HTML Lists  
7. Crash Course in CSS  
8. CSS Fonts  
9. Color and Opacity  
10. CSS Text  
11. JavaScript Basics  

Every listed lesson and exercise from the Scheme of Work has a corresponding lesson page with:

- Learning objectives  
- Beginner-friendly explanation  
- Working code examples with line-by-line notes  
- Common mistakes + corrections  
- Guided practice steps  
- Knowledge-check quizzes with explanations  
- Live coding playground (where relevant)  
- Summary takeaways  

### Platform features
- **Dashboard** matching the Designer PDF layout (hero, progress ring, topic cards, learning path)
- **Sidebar** module navigation + overall progress
- **Search** lessons by keyword
- **Live Playground** — HTML / CSS / JS editors + sandboxed iframe preview
- **Projects** section with progressive briefs
- **Progress tracking** (localStorage)
- **Responsive** layout for mobile / tablet / desktop
- **REST-style API** (`/api/modules`, `/api/lessons/:id`) served by a zero-dependency Node HTTP server

### Design
- Colour palette, card style, header and sidebar inspired by the Designer PDF
- Inter + JetBrains Mono typography
- Subtle animations and clear visual hierarchy

## Architecture

```
learning-platform/
├── server.js              # Node HTTP server + /api routes
├── content/
│   ├── modules.json       # Course structure (source of truth for navigation)
│   └── lessons/           # Optional per-lesson JSON (extensible)
├── public/
│   ├── index.html
│   ├── css/styles.css
│   └── js/
│       ├── content-data.js  # Full lesson content
│       └── app.js           # SPA logic, playground, progress
└── README.md
```

Content is delivered dynamically via the API; the front-end falls back to embedded data if the API is unavailable.

## Extending lessons

Add or edit entries in `public/js/content-data.js` under `COURSE_CONTENT.lessons`.  
Update `content/modules.json` if you add new lesson IDs so navigation stays in sync.

## Next steps (optional production hardening)

- Persist progress with authentication (JWT + MongoDB) following the CSE 341 patterns in the Web Services materials
- Move lesson bodies into individual JSON files loaded by `/api/lessons/:id`
- Add Vitest tests for the API layer
- Deploy to Render with environment variables for `PORT`
