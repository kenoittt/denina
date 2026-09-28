# denina

Portfolio site for a student artist: **Home**, **Portfolio** (each piece opens as an article), and **About**.
Built with React + Vite, with a few [React Bits](https://reactbits.dev) components.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

Pushing to `main` builds and deploys to GitHub Pages (`.github/workflows/static.yml`).
The site uses hash URLs (`#/portfolio`) so it works on any host path without server rewrites.

## Editing content

Everything the artist will want to change lives in two files. No component edits needed.

| File | What's in it |
| --- | --- |
| `src/content/site.js` | Name, tagline, hero headline, intro, bio, statement, portrait, highlights, email, socials |
| `src/content/works.js` | Portfolio entries: title, year, category, medium, cover image, summary, article body |

Images go in `public/images/…` and are referenced without a leading slash, e.g. `images/works/clay-relief.jpg`.
A missing image shows a placeholder instead of a broken icon. Empty lists (`highlights`, `socials`) and `null`
values hide their section.

### Mature (18+) work

Set `nsfw: true` on a work. It is then:

- blurred on its portfolio card with an 18+ label,
- behind an age confirmation on its article page (remembered for the browser session),
- never shown on the home page carousel.

This is a content warning, not age verification: the image files are still publicly reachable by URL.

## Structure

```
src/
  content/            site copy + portfolio data
  pages/              Home, Portfolio, WorkDetail (article), About, NotFound
  components/         Layout, Header, Footer, WorkCard, Artwork, MatureGate, …
  components/reactbits/
    Balatro           home hero background
    WarpText          home hero headline
    GooeyNav          main navigation (one addition: follows the current route)
    FlexCarousel      home page art showcase
  styles/global.css   theme tokens + layout
```
