# Add Game — Board Game Achievement Tracker

Adds a new board game to the achievement tracker app. This tracker is
**solo-play only** — all achievements and steps must be designed around
the solo mode of the game. Researches the solo ruleset, solo-specific
challenges, picks a colour palette, and wires everything up end-to-end.

## Usage

```
/add-game <Game Name>
```

---

## Step 1: Research the game

**BoardGameGeek is the primary source.** All research starts there. Only fall back to external searches if BGG does not have what you need.

### 1a. Find the BGG game page

Search BGG for the game: `boardgamegeek.com/search?q=<Game+Name>&type=boardgame`

From the game page, collect:
- BGG game ID (from the URL: `boardgamegeek.com/boardgame/<ID>/...`)
- Designer, publisher, year
- Player count, solo support confirmation

### 1b. Read the rulebook from BGG Files

Go to the BGG Files section: `boardgamegeek.com/boardgame/<ID>/files`

Look for the official English rulebook PDF. Fetch and read it. Focus entirely on:
- **Solo mode rules** — setup differences, turn structure, end condition
- **Solo scoring system** — how the final score is calculated or rated (e.g. star/sun/tier table)
- **Solo-specific difficulty options** — board sides, difficulty cards, challenge variants
- **Any official solo campaigns or scenario packs** listed in the rulebook

Only if the rulebook is not on BGG Files, search elsewhere:
- Publisher's resources page
- `"<Game Name>" rulebook PDF filetype:pdf`

### 1c. Check BGG for solo challenges and achievements

Search BGG forums and files for community solo content:
- `boardgamegeek.com/boardgame/<ID>/forums` — search for "solo", "challenge", "achievement"
- `boardgamegeek.com/boardgame/<ID>/files` — look for solo scenario PDFs, challenge sheets

Also search: `"<Game Name>" solo challenge OR achievement OR campaign site:boardgamegeek.com`

### 1d. Visual identity for the colour palette

Search: `"<Game Name>" board game box art`

Note the dominant colours: primary landscape/theme colour, accent/highlight, background (dark base), surface (card colour).

---

**Solo focus:** If the game has no solo mode, stop and inform the user — this tracker is solo-only. Do not design multiplayer achievements.

---

## Step 2: Design the achievement structure

Map findings to the `GameDefinition` type from `src/data/types.ts`:

```ts
type PlaythroughStep = {
  id: string
  label: string      // contextual: "Hero vs Villain", "Chapter 1", "Mission: X"
  hint?: string      // tactical tip or focus for this specific play
  setup: SetupItem[] // what to set up: Scenario, Hero, Difficulty, Module, etc.
}

type Achievement = {
  id: string
  title: string
  description?: string
  steps: PlaythroughStep[]
}
```

Rules:
- **Solo only** — every step must be playable alone. No multiplayer steps.
- `label` must be contextual, not generic ("Play #1") — e.g. "Heroic Difficulty Run", "Chapter 3: The Betrayal", "5 Suns Target"
- `hint` should advise what to focus on or learn during this specific solo play
- `setup` should list only the fields relevant to this game's solo setup (Difficulty, Board Side, Scenario, Module, Target Score, etc.)
- Create separate `Achievement` entries for distinct solo modes (solo campaign, difficulty tiers, score targets, challenge variants, etc.)
- Steps should be ordered as the recommended solo progression

---

## Step 3: Determine the colour palette

Pick 4 CSS custom property values inspired by the game's visual identity:

| Variable | Role | Guidance |
|---|---|---|
| `--color-bg` | Page background | Very dark — near-black tinted with the game's dominant hue |
| `--color-surface` | Card backgrounds | Slightly lighter than bg, same hue family |
| `--color-primary` | Progress bars, accents, left border | The game's most iconic colour |
| `--color-accent` | Setup item values, highlights | Secondary or complementary colour |
| `--color-text` | Body text | Near-white, optionally tinted |
| `--color-text-muted` | Labels, hints, secondary text | Muted version of text, same hue |
| `--gradient-bg` | Full-page background gradient | `radial-gradient(ellipse 120% 60% at 50% 0%, <darkened-primary> 0%, <mid-bg> 45%, <color-bg> 100%)` |

Example (Marvel Champions):
```css
--color-bg: #080810;
--color-surface: #12182e;
--color-primary: #e23636;
--color-accent: #f0c040;
--color-text: #f0f0f5;
--color-text-muted: #8888aa;
--gradient-bg: radial-gradient(ellipse 120% 60% at 50% 0%, #2a0e0e 0%, #0d0d24 45%, #080810 100%);
```

Explain your palette choice before writing it — name the game element each colour references (e.g. "primary is the red from the Marvel logo").

---

## Step 4: Create the game data file

Create `src/data/games/<kebab-case-name>.ts`:

```ts
import type { GameDefinition } from '../types'

export const <camelCaseName>: GameDefinition = {
  id: '<kebab-case-name>',
  name: '<Full Game Name>',
  theme: { id: '<kebab-case-name>' },
  achievements: [
    // ... achievements with steps
  ],
}
```

---

## Step 5: Register in the game index

Edit `src/data/games/index.ts` — add the import and push to `games[]`:

```ts
import { <camelCaseName> } from './<kebab-case-name>'

export const games: GameDefinition[] = [marvelChampions, <camelCaseName>]
```

---

## Step 6: Add the CSS theme

Edit `src/styles/index.css` — add a new theme block after the existing ones:

```css
:root[data-theme='<kebab-case-name>'] {
  --color-bg: ...;
  --color-surface: ...;
  --color-primary: ...;
  --color-accent: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --gradient-bg: radial-gradient(...);
}
```

---

## Step 7: Verify

Run the following and confirm all pass:

```bash
pnpm typescript
pnpm lint
pnpm build
```

Fix any errors before finishing.

---

## Step 8: Summary

After all files are written and checks pass, output a summary:

- Game name and ID
- Number of achievements and total steps
- Colour palette with a one-line rationale for each colour
- Files created/modified
- Any caveats (unofficial sources used, incomplete data, assumptions made)
