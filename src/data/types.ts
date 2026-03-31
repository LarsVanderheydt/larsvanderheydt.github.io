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
  /** Short label shown in the checklist, e.g. "Play #1" */
  label: string
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
