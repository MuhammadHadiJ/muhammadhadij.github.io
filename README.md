# Portfolio Site

Personal portfolio for Muhammad Hadi Jiwani. Static HTML/CSS/JS, no build step, no framework — deploys
directly to GitHub Pages.

**Status:** v1 built, needs a placeholder pass before publishing (see below).

## Structure

```
index.html          all page content and sections
assets/css/style.css
assets/js/main.js   mobile nav toggle + scroll-based active nav highlighting
assets/img/         optimized webp/jpg images + brand mark
assets/video/       compressed webm demo clip
assets/favicon.*    favicon files (cropped from the Illustrator MH logo)
```

## Before publishing

- [ ] Fill in the `[ add repo link ]` placeholders on the Business Review Aggregator, Wi-Fi Password
      Viewer, and RightClick Pro project cards (`index.html`) with real repo URLs once confirmed.
- [ ] Double check `Verland` repo link still points to the right place if the repo gets renamed/moved.
- [ ] Optional: swap the CS50/HackerRank entries in the Now section once status changes.

## Running locally

No build step needed — any static file server works:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying to GitHub Pages

This is built to drop straight into `muhammadhadij.github.io` (or any repo with Pages enabled) — just
push the contents of this folder to the repo root (or `docs/`) and enable Pages in repo settings.

## Content sourcing

Content pulled from `documents/resume.md` and `documents/portfolio-guide.md` in the J.A.R.V.I.S repo, with
real values substituted where confirmed (email, location) and placeholders left where not (repo links for
projects other than Verland). Media assets pulled from `~/Developer/Blender`, `~/Developer/unity`,
`~/Developer/Python`, and `~/Developer/illustrator` and reprocessed (resized/compressed to webp, cropped,
video trimmed and transcoded to a small muted webm loop) — originals were left untouched in place.
