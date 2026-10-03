# Daisuke Shimada — Portfolio

This is a static Jekyll site published directly from the repository root through GitHub Pages. It uses Markdown, YAML front matter, HTML, CSS, and a small JavaScript file for the light/dark theme toggle. It has no backend, contact form, external trackers, or third-party front-end libraries.

## Publish with GitHub Pages

1. Push this repository to the `main` branch of `dshimada98/dshimada98.github.io`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, then choose **main** and **/(root)**.
4. Save. GitHub Pages will build the Jekyll site from the root; no manual build or deployment workflow is needed.

The site is configured as a GitHub user site, so `baseurl` is intentionally empty. Internal links and asset paths use Jekyll's `relative_url` filter.

## Update content

- Edit `index.md`, `about.md`, `work-experience.md`, and `contact.md`. Each page has YAML front matter at the top.
- Update shared navigation and footer markup in `_includes/`.
- Change layout and page structure in `_layouts/default.html`.
- Update colors, typography, and responsive rules in `assets/css/site.css`.
- The theme toggle and saved preference are in `assets/js/theme.js`.
- Update canonical URLs in `sitemap.xml` and `robots.txt` if the site URL changes.

## Preview locally

Install Ruby and Jekyll if they are not already available:

```sh
gem install jekyll
```

From the repository root, run:

```sh
jekyll serve
```

Open the local address printed by Jekyll (normally `http://127.0.0.1:4000`). Stop the server with `Ctrl+C`.

## Run Lighthouse

With the local preview running, use Chrome or Chromium and Lighthouse:

```sh
npx --yes lighthouse http://127.0.0.1:4000 \
  --only-categories=performance,accessibility,best-practices,seo \
  --chrome-flags="--headless --no-sandbox" \
  --view
```

The report checks Performance, Accessibility, Best Practices, and SEO. Check each of the four pages after content or layout changes, including a narrow mobile viewport.