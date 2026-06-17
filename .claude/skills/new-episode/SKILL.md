# new-episode skill

Creates a new episode HTML file for agents-101.

## Usage

```
/new-episode
```

Prompts for:
- Season number (e.g. 1)
- Episode number within the season (e.g. 3)
- Episode slug (e.g. `cross-session-coordination`)
- Episode title (e.g. "Cross-Session Coordination")
- Episode subtitle / description (one sentence)

Then:
1. Copies `template.html` to `seasons/season-N/ep-N-slug.html`
2. Replaces placeholders with provided values
3. Reports the new file path

## Notes

- File path: `seasons/season-{N}/ep-{N}-{slug}.html`
- The template already links to `../../assets/storybook.css` and `../../assets/deck.js`
- Add your slides inside `<main id="deck">` — each slide is `<section class="slide">`
- Update `seasons/season-N/index.html` to add the new episode card
