import { defineConfig } from 'astro/config'

// This is an organisation page repo (medaisummit.github.io), so the site is served
// from the root path. No `base` is needed. The `site` value is used for canonical
// URLs, Open Graph tags and the generated sitemap.
export default defineConfig({
  site: 'https://medaisummit.github.io',
  trailingSlash: 'ignore',
})
