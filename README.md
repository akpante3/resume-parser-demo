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
git clone https://github.com/akpante3/resume-parser-demo.git

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


## ❤️ Built to make resume parsing simple, transparent, and developer-friendly.


