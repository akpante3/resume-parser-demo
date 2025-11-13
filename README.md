# 🧩 React Resume Parser — Playground Demo

This is a **React demo application** that showcases how to use the [`react-resume-parser`](https://www.npmjs.com/package/react-resume-parser) library to extract structured JSON data from resumes in **PDF** and **DOCX** formats — right inside the browser.

It demonstrates both a simple file upload and how to render the parsed JSON beautifully on-screen.

---

## 🚀 Overview

**React Resume Parser** is a TypeScript-powered library that can read and structure resume data into JSON for easy display or API integration.

This playground app helps you:
- ✅ Test parsing resumes (PDF, DOCX, or TXT)
- ✅ Inspect the extracted JSON result live
- ✅ Experiment with your own resume files
- ✅ Understand how to integrate the parser in any React app

---

## 📦 Setup

Clone your main repository (if not already done):

```bash
git clone https://github.com/yourusername/react-resume-parser.git

npm i
npm run dev

```

## 🧠 Notes
🗂 Supported file types

✅ PDF — parsed using pdfjs-dist

✅ DOCX — parsed using jszip
 + mammoth

✅ TXT — plain text parsing fallback

⚠️ .doc (legacy) — not supported; please convert to .docx or .pdf

🖥 Browser compatibility

The parser works in any modern browser that supports:

- Web Workers (used by pdf.js)

- ES2020+ JavaScript features


## 🤝 Contributing

If you’d like to improve the demo or fix an issue:

- Fork the repo

- Create your feature branch

- Run the playground locally to test

- Submit a PR 🚀

## ❤️ Built to make resume parsing simple, transparent, and developer-friendly.


### ✅ Before you publish to GitHub:
- Replace `yourusername` and author links.  
- Commit this file as `playground/react-demo/README.md`.  
- Optional: Add a screenshot or GIF of the playground in action right under the title for visual appeal.  

Would you like me to include a short Markdown snippet with a **screenshot section** (so you can drop a `demo.png` or GIF later)? It makes your GitHub README really pop.


# resume-parser-demo
