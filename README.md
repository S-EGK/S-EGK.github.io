
# Srikanth EGK — GitHub Pages Portfolio

Custom Jekyll site with:
- Auto dark mode + theme toggle
- Single-page Home **and** multi-page (Projects, Resume, Contact, Blog)
- Projects feed from GitHub API (or `_data/projects.yml`)
- Resume page (HTML) + downloadable PDF
- Spam-safe contact form (Formspree)
- SEO (`jekyll-seo-tag`), OpenGraph, JSON-LD, sitemap, robots
- Analytics toggles (Plausible and/or GA4)

## Quick Start

1. Create (or reuse) a repo named **s-egk.github.io**.
2. Copy these files in, or upload the ZIP.
3. Commit and push to `main`.
4. In the repo settings → Pages, set source to `GitHub Actions` or `main` (if no build needed).

### Optional tweaks
- Turn blog on/off: `_config.yml` → `blog_enabled: true|false`
- Switch projects source: `_config.yml` → `projects_source: "github" | "data"`
- Add Formspree endpoint: `_config.yml` → `contact.formspree_endpoint: "https://formspree.io/f/xxxxxxx"`
- Analytics: set `plausible_domain` or `ga4_measurement_id`.
- Edit About text: `index.md` → About section.
- Curate projects: `_data/projects.yml`.

## Local preview
Install Ruby + Bundler, then:
```bash
bundle init
bundle add jekyll jekyll-seo-tag jekyll-sitemap jekyll-feed
bundle exec jekyll serve
```
Open http://127.0.0.1:4000

## Blog
Create posts in `_posts/` named `YYYY-MM-DD-title.md`.

## License
Content © {YOUR NAME}. Code under MIT.
