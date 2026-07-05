# MedAI Summit archive

This is the static site that keeps the record of the MedAI Summit, our annual event
on artificial intelligence in medicine. It shows every edition, its speakers and its
talks, and it grows by one entry each year.

I built it as a plain static site on purpose. It has no backend, no database and no
server to run. GitHub Pages hosts it for free, and a push to `main` deploys it. The
main event website (registration, accounts, payments) lives elsewhere; this one is
just the open archive, so it stays fast and cheap to keep.

Live at https://medaisummit.github.io

## Adding a new year

Everything a year needs lives in one file: `src/data/editions.ts`. To add an edition,
append an entry to the `editions` array with its title, dates, format, stats, the
discipline breakdown, the countries and the speaker lineup. That is the only edit
required. The home page, the timeline, the archive list and the edition's own page
are all generated from that data, so nothing else has to change.

If you have speaker photos or other assets, drop them into `public/` and reference
them by path.

## Running it locally

```bash
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the built site
npm run check    # type and template checks
```

## How it deploys

The workflow in `.github/workflows/deploy.yml` builds the site with Astro and
publishes it to GitHub Pages on every push to `main`. GitHub runs it, so there is
nothing to trigger by hand.

One setting is needed the first time: in the repository, open Settings, then Pages,
and set the source to GitHub Actions. After that, every push deploys on its own.

## Layout

- `src/data/` holds the editions data and the site settings.
- `src/components/` has the timeline, cards, stat band and discipline bars.
- `src/pages/` has the home, editions archive, per-edition and about pages.
- `src/styles/global.css` is the design system (tokens, type, light and dark theme).

## Notes

The design is deliberately its own thing, warmer and more editorial than the main
event app. Speaker names are shown in English and Persian. The site works without
JavaScript; the small scripts only add the theme toggle, the mobile menu and a
scroll reveal.
