# Personal CV Website

A clean, responsive CV website with light/dark theme, accessible navigation, and simple customization.

## Structure

```
pomak.github.io/
  index.html      # Main page
  styles.css      # Styling (light/dark theme tokens)
  script.js       # Theme toggle + year update
  assets/
    favicon.svg   # Favicon
    og-image.png  # Social preview image
```

## Customize

- Replace placeholder text in `index.html`:
  - Name, title, summary, sections, links, and tags.
- Update initials in `assets/favicon.svg` (replace "YN").
- Optionally adjust colors in `styles.css` by editing CSS variables in `:root` and `.theme-light`.
- Update Open Graph meta tags in `index.html` and `assets/og-image.png`.

## Run locally

Just open `index.html` in a browser. For a local server (recommended), you can use:

```bash
# Python 3
python -m http.server 8000

# Or Node (npx)
npx serve . -l 8000 --yes
```

Then visit `http://localhost:8000`.

## Deploy

- GitHub Pages: push to `main` on a repo named `<username>.github.io` and enable Pages in Settings → Pages (root).
- Any static host (Vercel/Netlify): import the repo; framework preset: "Other"; output directory: `/`.

## Notes

- Theme persists via `localStorage`. Toggle is the moon/sun button in the header.
- Smooth scrolling is handled by CSS `scroll-behavior`.
- The layout is mobile-first and keyboard-accessible.

