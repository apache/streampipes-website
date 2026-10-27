# Apache StreamPipes website: design and content improvement plan

Status: draft, 2026-10-27. Scope: streampipes.apache.org (Docusaurus site in `website-v2/`, docs in `docs/`).

## Goal

More of the right people find StreamPipes, understand within a minute what it does and who it is for, and get to a running instance or a GitHub star. The site should look like a maintained, production-grade open-source platform, on par with Confluent, Tiger Data or Astronomer, while staying honest: no invented customers, testimonials or performance claims.

## Where we are

- The homepage still uses the 2019-era design: Roboto, navy `#1B1464`, Bootstrap 4, jQuery, slick carousels, FontAwesome, 13 global stylesheets and 6 legacy scripts loaded on every page.
- The docs were refactored in 2026 and are in good shape content-wise, but the chrome (navbar, sidebar with emoji labels, footer) is dated.
- The product shown in screenshots is the "Next" version while the download page ships 0.98.0.
- Blog: 20 posts in five years, last one March 2026. It is the main organic channel.
- Findability basics were missing (no description on the homepage, favicon as share image, no robots.txt, no structured data, old doc versions in the sitemap). These are fixed in this change, see "Done" below.

## Done in this change

- Homepage title and meta description, site tagline "Open-source industrial IoT data platform".
- Global metadata (description, keywords, Open Graph type and site name, Twitter handle).
- Social share card `static/img/streampipes-social-card.png` (1200x630) used as `og:image`.
- JSON-LD structured data (SoftwareApplication, Organization, WebSite) in `docusaurus.config.js`.
- `static/robots.txt` with sitemap reference.
- Explicit `description` frontmatter on all 39 hand-written docs pages.
- Docs 0.97.0 and 0.95.1 set to `noIndex` and excluded from the sitemap so the current docs are not diluted.

## Phase 1: ship a modern homepage (2 to 3 weeks)

Status 2026-10-27: implemented, third iteration (light theme). Brand tokens (navy `#1B1464`, green `#39B54A`) in `customTheme.css`; a reusable component library in `src/components/ui` (Section, Container, SectionHead, Eyebrow, Badge, Headline, Accent, Lead, Button, Card, Bento, FeatureList, Stats, LogoWall, Tabs, CodePanel, ScreenshotFrame, FlowDiagram, Steps) that use-case and integrations pages can reuse; homepage composed from it in `src/components/home/Homepage.tsx`; shared footer rebuilt in `src/theme/Footer`; kapa launcher replaced by a navbar "Ask AI" button; announcement bar removed; reviewed at 1440 and 375 px. GitHub stars are fetched client-side (plain label when rate-limited).

Direction: white and pale-grey surfaces, navy buttons, solid green accents, 900-weight headlines, hairline dividers, real screenshots in plain frames. No glow, gradients, status dots, fake browser chrome or marquees. Homepage order: hero with a module switcher (Connect, Pipelines, Datasets, Charts, Dashboards, Assets), connector chips, stats and feature grid, signal-to-insight flow, architecture overview with layer list, OT/IT deployment diagram (SVG `DeploymentDiagram` in the library) with principles, enterprise readiness grid (SSO via OpenID Connect, roles and permissions, audit log, dataset retention and archival, secured connections, operations; checked against the StreamPipes source on 2026-10-27), developer code tabs, install command and community links. Work in `website-v2/src/pages/index.tsx` and a new scoped CSS module so the rest of the site is untouched.

1. Design tokens. Define one set in `src/css/customTheme.css` and map them to Infima variables so the navbar, buttons and docs pick them up for free:
   - Ink `#171d35` for headings, muted `#525e69` for body, green `#246d39` for actions (hover `#17512a`), paper `#f3f6f2` for alternating sections, line `#d9e0dc` for dividers.
   - Heebo (already in `static/fonts/`) for headings and body, tight tracking on display sizes, 1.65 line height on body.
   - Radii 4 px controls, 6 px panels. One diffuse shadow on the hero screenshot, none elsewhere.
2. Hero. Two columns: headline plus one sentence, "Get started" (quickstart) and "Explore the platform" buttons; on the right a real product screenshot in a thin frame. Add the single-command Docker install below the buttons so a developer can start without leaving the page.
3. Proof strip under the hero, real numbers only: Apache top-level project, GitHub stars fetched live, latest release and date, number of adapters, processors and sinks counted from the extensions reference.
4. Product explorer. Tabs for Connectivity, Data management, Assets and sites, Pipelines, Charts, Dashboards, each with a title, three bullets, a doc link and a WebP screenshot from `static/img/2026/`. Replace the slick carousels.
5. Deployment section (dark). OT zone, broker, IT zone. Link to the deployment docs.
6. Developer section. Tabs for Python client, Java client, Functions, Extension SDK with a short code sample each.
7. Final call to action and a four-column footer (Platform, Build and learn, Community, Apache) with the ASF trademark line.
8. Fix the kapa.ai "Ask AI" button so it does not overlap content; offset it or move it into the navbar.
9. Retire the stale "0.98.0 is available" announcement bar or make it time-bound.
10. Review at 1280, 996 and 375 px, with keyboard navigation and reduced motion.

Reference direction: product-led, white and pale-neutral surfaces, real screenshots, restrained accents. See Tiger Data, Confluent and Astronomer homepages.

## Phase 2: bring the rest of the site onto the same system (2 weeks)

1. Navbar: Platform (dropdown to feature docs), Developers (clients, Functions, SDK), Docs, Community (mailing lists, team, get involved, blog, issues), Apache, GitHub icon, green "Get started" button.
2. Docs chrome: apply the tokens, remove emoji from sidebar labels, keep the version dropdown but label the current version "Next (unreleased)" and 0.98.0 "Latest release".
3. Download page and the three community pages: rebuild with the same CSS module patterns, drop Bootstrap classes.
4. Blog: swizzle the list and post layouts for cover images, tags, author cards and a visible RSS link.
5. Remove `bootstrap.min.css`, jQuery, slick and `custom.js` from `docusaurus.config.js` once no page depends on them. Keep FontAwesome only if the team page still needs it; otherwise replace with inline SVG.
6. Lighthouse target after this phase: performance 90+, accessibility 95+ on home, docs and blog.

## Phase 3: content that answers "can it do my thing?" (ongoing, start in parallel with phase 2)

### Positioning

One line used everywhere (homepage, GitHub README, Docker Hub, PyPI, LinkedIn): "Apache StreamPipes is an open-source industrial IoT data platform: connect machines, process live data, store datasets and build charts and dashboards, on your own infrastructure."

Audience split on the homepage and docs overview: operators and process experts, data teams, platform engineers, extension developers.

### Use-case pages (new, `website-v2/src/pages/use-cases/` or MDX under docs)

Each page: the problem in two sentences, a real pipeline or dashboard screenshot, the adapters and processors involved, a link to the matching how-to, and the install command. Start with five:

1. Condition monitoring: OPC UA to dashboard with threshold alerts.
2. PLC data to Kafka or InfluxDB (Siemens S7, Modbus).
3. MQTT and unified namespace integration.
4. Anomaly detection with Python Functions.
5. Alarm and event handling (OPC UA Events, WinCC alarm archive).

### Integrations page (new, `/integrations/`)

Filterable catalog of all adapters, processors and sinks with logos, generated from `sidebars.json` and the `docs/pe/` reference pages so it stays in sync with releases. This is the largest search surface the project has: people search "Siemens S7 MQTT open source", not "StreamPipes".

### Comparison content

Factual "when to use StreamPipes vs" posts for Node-RED, ThingsBoard, and Telegraf plus InfluxDB plus Grafana. State clearly where the alternatives are the better choice.

### Quickstart and download

- Put the single `curl ... && docker compose up` command on the homepage hero.
- Make the Next vs 0.98.0 relationship explicit on the download page and docs overview.
- Add a "what you will have in 10 minutes" summary at the top of the quickstart with one screenshot.

### Blog cadence

One post per month, alternating between a connector how-to and a use case. Each post gets a cover image and is cross-posted to LinkedIn with the social card. Release posts list three user-facing improvements with screenshots before the changelog.

## Phase 4: findability beyond the site (1 week, then ongoing)

- Docs titles: make the `<title>` keyword-bearing where the H1 is generic, e.g. "Charts for industrial time-series data" instead of "Charts", using `title` plus `sidebar_label` in frontmatter.
- GitHub README: new hero screenshot, the one-line positioning, badges, and links to quickstart and use cases.
- Docker Hub and PyPI descriptions aligned with the positioning and linking back.
- Submit to curated lists (awesome-industrial-iot, awesome-opcua, awesome-mqtt) and the Apache project directory with the new description.
- Google Search Console: verify the property (the verification file already exists in `static/`), submit the sitemap, review which queries bring traffic and feed that into use-case and blog topics.
- Matomo goals: downloads page visits, quickstart completions (last step reached), GitHub outbound clicks, mailing list subscriptions.

## Success measures (review quarterly)

- Organic sessions to the homepage, docs and blog (Matomo, site 35 on analytics.apache.org).
- Click-through from homepage to quickstart or download.
- GitHub stars and new Discussions per month.
- Users mailing list subscriptions.
- Lighthouse performance and accessibility scores.

## Suggested order

| Order | Item | Effort |
|---|---|---|
| 1 | Phase 1 homepage | 2 to 3 weeks |
| 2 | Integrations page and first two use-case pages | 1 week |
| 3 | Phase 2 site-wide design, legacy asset removal | 2 weeks |
| 4 | Remaining use-case pages, comparison posts | 2 weeks |
| 5 | Phase 4 off-site and docs titles | 1 week |
| 6 | Monthly blog cadence | ongoing |
