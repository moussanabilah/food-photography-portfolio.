# Nabila Moussa — Portfolio

Static website (HTML, CSS, JavaScript). No build step.

## Structure

```
index.html        main page (entry point)
css/styles.css    all styles
js/main.js        menu, lightbox, scroll effects, contact form
images/           food photography and analytics screenshot
vercel.json       Vercel settings (optional)
```

## Before publishing

Open `js/main.js` and replace the placeholder email on the line `const EMAIL = "..."` with your real address. The contact form opens the visitor's email app addressed to it.

## Run locally

Open `index.html` in a browser, or from this folder run `python3 -m http.server 8000` and visit http://localhost:8000.

## Deploy

See `DEPLOY.md`.
