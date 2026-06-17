# agents-101

> A storybook series on enterprise AI agent development — by [nop-station](https://www.nop-station.com)

**Live site → [jiteshsureka.github.io/agents-101](https://jiteshsureka.github.io/agents-101/)**

HTML slide decks for engineering teams learning to build with AI agents. Navigate with arrow keys. Bilingual: English / বাংলা.

---

## Season 1 — Parallel Development with Agents

| Episode | Title | Status |
|---------|-------|--------|
| Ep 1 | [Why Parallel? The Throughput Argument](https://jiteshsureka.github.io/agents-101/seasons/season-1/ep-1-why-parallel.html) | ✅ Live |
| Ep 2 | [Multiple Sessions — The Basics](https://jiteshsureka.github.io/agents-101/seasons/season-1/ep-2-multiple-sessions-basics.html) | ✅ Live |
| Ep 3 | Spawning Subagents — Inside One Session | 🔜 Coming soon |
| Ep 4 | Cross-Session Coordination | 🔜 Coming soon |
| Ep 5 | Claude Workflows & Scheduled Agents | 🔜 Coming soon |
| Ep 6 | Enterprise Safety & Cost Controls | 🔜 Coming soon |

---

## Using the Decks

- **Arrow keys / swipe** — navigate slides
- **Space** — advance fragments
- **বাংলা / English** button — toggle language (top-right of each deck)

---

## Repo Structure

```
index.html                     — landing page
seasons/season-N/index.html    — season overview
seasons/season-N/ep-N-*.html   — episode slide decks
skills/index.html              — community Claude skills directory
vlogs/index.html               — vlogs & blogs index
resources/index.html           — curated agent resource links
contribute/index.html          — how to contribute
assets/storybook.css           — shared design system
assets/deck.js                 — deck controller (keyboard, touch, language toggle)
.claude/skills/new-episode/    — skill for creating new episodes
```

---

## Contributing

Contributions welcome — skills, vlogs, resources, and new episode ideas.

- **Bug or feature idea** → [Open an issue](https://github.com/jiteshsureka/agents-101/issues/new)
- **Add a skill / vlog / resource** → [Open a pull request](https://github.com/jiteshsureka/agents-101/pulls)

See [contribute/](https://jiteshsureka.github.io/agents-101/contribute/) for full guidelines.

---

## Creating a New Episode

Use the built-in Claude skill:

```
/new-episode
```

It will prompt for season, episode number, and title — then scaffold the file.

---

## Tech

- Pure HTML + CSS + vanilla JS — no build step, no dependencies
- Hosted on GitHub Pages, auto-deploys on push to `main`
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Work Sans](https://fonts.google.com/specimen/Work+Sans), [Caveat](https://fonts.google.com/specimen/Caveat)

---

Made with ❤️ by [nop-station](https://www.nop-station.com)
