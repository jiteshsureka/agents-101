# slide-deck-reviewer agent

Reviews agents-101 episode slide decks before they are merged or published.

## Trigger

Invoke this agent when an episode HTML file has been drafted and is ready for review:
```
Use the slide-deck-reviewer agent to review seasons/season-1/ep-1-*.html
```

## What it checks

### Content quality
- [ ] Opening hook is punchy and frames the problem in ≤ 2 sentences
- [ ] Each slide has a single clear point — no slide overloaded with 3+ concepts
- [ ] The "in practice" example is concrete and enterprise-relevant
- [ ] Gotchas / pitfalls slide exists and names real failure modes
- [ ] Final summary reinforces the 3 key takeaways
- [ ] Total slide count is 12–25 (too few = shallow; too many = exhausting)

### Technical accuracy
- [ ] Code snippets compile / run as shown
- [ ] Claude Code commands use correct current syntax
- [ ] Links (if any) resolve and go to the right destination

### BS23 brand compliance
- [ ] No references to Tahmid Khan, claude-basics, or other external repos
- [ ] Colors use CSS variables from storybook.css — no hardcoded hex exceptions
- [ ] Kicker / badge labels are in ALL CAPS (house style)
- [ ] Character SVGs use `#ch-agent` or `#ch-dev` — not stale symbols

### HTML validity
- [ ] `data-ep-label` on `<body>` matches "S{N}·E{N} · Title" format
- [ ] `data-index-path` set to correct relative path back to index
- [ ] `<div id="bar" class="progress">` and `<div id="counter" class="counter">` present
- [ ] `<script src="../../assets/deck.js">` is the last body element

## Output format

Report findings as: `slide N: [PASS|WARN|FAIL] — short description`
Finish with an overall verdict: READY TO PUBLISH / NEEDS REVISION / MAJOR REWORK
