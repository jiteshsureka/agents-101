# agents-101

> Enterprise AI Agent Development — a storybook series by [nop-station](https://www.nop-station.com)

**Live site → [jiteshsureka.github.io/agents-101](https://jiteshsureka.github.io/agents-101/)**

Illustrated HTML slide decks for engineering teams learning to build with AI agents — parallel development, multi-session workflows, Claude skills, context engineering, and production delivery. Arrow through each episode in minutes. Every episode is bilingual: **English / বাংলা**.

---

## Seasons

### Season 1 — Parallel Development with Agents · Complete ✓
*Multiply throughput without multiplying chaos.*

| Episode | Title |
|---------|-------|
| Ep 1 | [Why Parallel? The Throughput Argument](https://jiteshsureka.github.io/agents-101/seasons/season-1/ep-1-why-parallel.html) |
| Ep 2 | [Multiple Sessions: The Basics](https://jiteshsureka.github.io/agents-101/seasons/season-1/ep-2-multiple-sessions-basics.html) |
| Ep 3 | [Spawning Subagents](https://jiteshsureka.github.io/agents-101/seasons/season-1/ep-3-spawning-subagents.html) |
| Ep 4 | [Cross-Session Coordination](https://jiteshsureka.github.io/agents-101/seasons/season-1/ep-4-cross-session-coordination.html) |
| Ep 5 | [Claude Workflows & Scheduled Agents](https://jiteshsureka.github.io/agents-101/seasons/season-1/ep-5-claude-workflows.html) |
| Ep 6 | [Enterprise Safety & Cost Controls](https://jiteshsureka.github.io/agents-101/seasons/season-1/ep-6-enterprise-safety.html) |
| Bonus | [Agent Swarms](https://jiteshsureka.github.io/agents-101/seasons/season-1/ep-bonus-agent-swarms.html) |

### Season 2 — The Apprentice's Workshop (Skills & Context) · In production 🔥
*Teaching Claude your craft.*

| Episode | Title |
|---------|-------|
| Ep 1 | [Skills 101](https://jiteshsureka.github.io/agents-101/seasons/season-2/ep-1-skills-101.html) |
| Ep 2 | [Context Engineering](https://jiteshsureka.github.io/agents-101/seasons/season-2/ep-2-context-engineering.html) |
| Ep 3 | [Building a Skill: The First Lesson](https://jiteshsureka.github.io/agents-101/seasons/season-2/ep-3-building-a-skill.html) |
| Ep 4 | [Progressive Disclosure — Tools of the Trade](https://jiteshsureka.github.io/agents-101/seasons/season-2/ep-4-progressive-disclosure.html) |
| Ep 5 | [MCP & Tools: Reaching Beyond](https://jiteshsureka.github.io/agents-101/seasons/season-2/ep-5-mcp-and-tools.html) |
| Ep 6 | [Skills at Team Scale](https://jiteshsureka.github.io/agents-101/seasons/season-2/ep-6-skills-team-scale.html) |
| Ep 7 | [Skills in Practice: Master at Work](https://jiteshsureka.github.io/agents-101/seasons/season-2/ep-7-skills-in-practice.html) |
| Bonus | [The Autonomous Workshop](https://jiteshsureka.github.io/agents-101/seasons/season-2/ep-bonus-autonomous-workshop.html) |

---

## Explore

- **[Seasons](https://jiteshsureka.github.io/agents-101/seasons/)** — all seasons & episodes
- **[Skills Directory](https://jiteshsureka.github.io/agents-101/skills/)** — Claude Code skills, what they do, when to use them
- **[Vlogs & Blogs](https://jiteshsureka.github.io/agents-101/vlogs/)** — deep-dives and lessons from shipping AI-assisted software
- **[Resources](https://jiteshsureka.github.io/agents-101/resources/)** — curated docs, MCP servers, and community tools
- **[Contribute](https://jiteshsureka.github.io/agents-101/contribute/)** — how to add skills, vlogs, resources, or episode ideas

---

## Using the decks

- **Arrow keys / spacebar / swipe** — navigate slides
- **Spacebar** — advance step reveals within a slide
- **English / বাংলা button** — toggle language (top of each deck)
- **Deep links** — every slide is addressable via the `#/N` hash in the URL

---

## Repo structure

```
index.html                     — landing page
seasons/index.html             — seasons hub
seasons/season-N/index.html    — season landing + episode list
seasons/season-N/ep-*.html     — episode slide decks
skills/index.html              — Claude Code skills directory
vlogs/index.html               — vlogs & blogs index
resources/index.html           — curated agent resource links
contribute/index.html          — contribution guide
assets/storybook.css           — shared deck design system
assets/site.css                — shared styles for non-deck pages
assets/deck.js                 — deck controller (keyboard, touch, language toggle, sprites)
.claude/skills/new-episode/    — Claude skill that scaffolds a new episode
.github/workflows/pages.yml    — GitHub Pages auto-deploy
```

---

## Creating a new episode

Use the built-in Claude Code skill:

```
/new-episode
```

It prompts for season, episode number, and title — then scaffolds the deck file.

---

## Contributing

Contributions welcome — skills, vlogs, resources, and new episode ideas.

- **Bug or feature idea** → [Open an issue](https://github.com/jiteshsureka/agents-101/issues/new)
- **Add a skill / vlog / resource** → [Open a pull request](https://github.com/jiteshsureka/agents-101/pulls)

See the [contribute page](https://jiteshsureka.github.io/agents-101/contribute/) for full guidelines.

---

## Tech

- Pure HTML + CSS + vanilla JS — no build step, no dependencies
- Hosted on GitHub Pages, auto-deploys on push to `main`
- Bilingual: English / বাংলা on every episode
- Privacy-friendly, cookieless analytics via GoatCounter
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Work Sans](https://fonts.google.com/specimen/Work+Sans), [Caveat](https://fonts.google.com/specimen/Caveat)

---

## License

[MIT](./LICENSE) — free to learn from, fork, and build on.

---

Made by [nop-station](https://www.nop-station.com)
