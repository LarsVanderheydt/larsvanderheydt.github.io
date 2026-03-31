export type GameTheme = {
  /** Matches the `data-theme` attribute applied to <html> for this game's page. */
  id: string
}

export type SetupItem = {
  /** Role label, e.g. "Hero", "Villain", "Scenario", "Difficulty" */
  label: string
  /** Specific value, e.g. "Spider-Man", "Rhino", "Breakout", "Standard" */
  value: string
}

export type PlaythroughStep = {
  id: string
  /** Contextual title, e.g. "Spider-Man vs Rhino" */
  label: string
  /** What to focus on or learn during this specific play */
  hint?: string
  /** What needs to be set up for this play */
  setup: SetupItem[]
}

export type Achievement = {
  id: string
  title: string
  description?: string
  steps: PlaythroughStep[]
}

export type GameDefinition = {
  id: string
  name: string
  theme: GameTheme
  achievements: Achievement[]
}
