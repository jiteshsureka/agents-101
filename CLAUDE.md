# agents-101 — CLAUDE.md

Enterprise AI Agent Development storybook series by BrainStation 23.
HTML slide decks, navigated with arrow keys. Hosted on GitHub Pages at jiteshsureka.github.io/agents-101.

## Repo structure

```
index.html                     — main landing page
seasons/season-N/index.html    — season landing + episode list
seasons/season-N/ep-N-*.html   — episode slide decks
skills/index.html              — skills directory
vlogs/index.html               — vlogs & blogs index
resources/index.html           — curated agent resource links
assets/storybook.css           — shared BS23-themed CSS (edit here → all decks change)
assets/deck.js                 — deck controller + character sprites
.claude/skills/new-episode/    — skill for creating new episode decks
.github/workflows/pages.yml    — auto-deploys main branch to GitHub Pages
```

## Brand tokens (BS23 palette)

```
--amber:  #FBAF32   primary CTA / accent
--blue:   #4992C1   secondary blue
--navy:   #11172C   headings / dark backgrounds
--sky:    #1A9ED7   logo blue / links
--light:  #F5F8FB   page backgrounds
--paper:  #FFFFFF   cards / panels
```

Fonts: Fraunces (serif titles), Work Sans (body), Caveat (kickers/labels).

## Creating a new episode

Use the skill: `/new-episode`

It will prompt for season number, episode number, and title, then copy the template and open it.

Episode files live at: `seasons/season-N/ep-N-slug.html`

## Episode deck conventions

- `<body data-ep-label="S1·E1 · Episode Title" data-index-path="../../index.html">`
- `<link rel="stylesheet" href="../../assets/storybook.css">`
- Last `<body>` child: `<script src="../../assets/deck.js"></script>`
- `<div id="bar" class="progress"></div>` and `<div id="counter" class="counter"></div>` at bottom
- Slides: `<section class="slide">` — arrow keys / swipe to navigate
- Step reveals: add class `frag` (fade-up), `frag pop` (scale in), `frag slam` (slam in)
- Characters: `<svg class="char bob"><use href="#ch-agent"/></svg>` or `#ch-dev`

## Seasons

| Season | Theme                              | Status       |
|--------|------------------------------------|--------------|
| 1      | Parallel Development with Agents   | In production |

## Adding a new season

1. Create `seasons/season-N/index.html` (copy season-1 as template)
2. Update `index.html` sections grid to link to the new season
3. Add season to the table above

## GitHub Pages

URL: https://jiteshsureka.github.io/agents-101/
Auto-deploys on push to `main` via `.github/workflows/pages.yml`.
Requires GitHub Pages enabled in repo Settings → Pages → Source: GitHub Actions.

## DO NOT

- Put personal names / Tahmid Khan references anywhere in this repo
- Commit secrets, API keys, or credentials
- Modify `assets/storybook.css` for episode-specific rules — use inline `<style>` in the episode file
