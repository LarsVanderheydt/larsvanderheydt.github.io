import type { GameDefinition } from '../types'

// Core box: The Night of the Zealot campaign — 3 scenarios
//   1. The Gathering  2. The Midnight Masks  3. The Devourer Below
// Core investigators: Roland Banks (Guardian), Daisy Walker (Seeker),
//   "Skids" O'Toole (Rogue), Agnes Baker (Mystic), Wendy Adams (Survivor)
// Difficulty: Easy / Standard / Hard / Expert — sets chaos bag composition
// Solo (true solo): fully supported, 1 investigator handles everything alone
// XP earned between scenarios; trauma (physical/mental) carries over

export const arkhamHorrorLcg: GameDefinition = {
  id: 'arkham-horror-lcg',
  name: 'Arkham Horror: The Card Game',
  theme: { id: 'arkham-horror-lcg' },
  achievements: [
    {
      id: 'night-of-the-zealot',
      title: 'The Night of the Zealot',
      description:
        'The core campaign — three scenarios played as a connected story. Decisions carry over: trauma accumulates, XP upgrades persist, and narrative choices in one scenario affect the next. Played true solo (1 investigator).',
      steps: [
        {
          id: 'scenario-1-the-gathering',
          label: 'Scenario 1 — The Gathering',
          hint: 'Your introduction to the core loop: action economy, chaos token pulls, and the agenda clock. In true solo you handle clues and enemies alone — don\'t overcommit to one location early. Clear the immediate threat in your starting room before exploring.',
          setup: [
            { label: 'Mode', value: 'True Solo (1 investigator)' },
            { label: 'Scenario', value: 'The Gathering' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'scenario-2-the-midnight-masks',
          label: 'Scenario 2 — The Midnight Masks',
          hint: 'The hardest of the three scenarios solo. The doom clock advances every round and Arkham is large — you cannot visit every location. Plan your route before round 1 based on revealed cultist locations. Prioritise clue sites over unexplored ones.',
          setup: [
            { label: 'Mode', value: 'True Solo (1 investigator)' },
            { label: 'Scenario', value: 'The Midnight Masks' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'scenario-3-the-devourer-below',
          label: 'Scenario 3 — The Devourer Below',
          hint: 'The climactic confrontation. Enter this scenario with as much health and sanity intact as possible — trauma from earlier scenarios compounds here. Aggression beats caution; stalling lets the encounter deck wear you down.',
          setup: [
            { label: 'Mode', value: 'True Solo (1 investigator)' },
            { label: 'Scenario', value: 'The Devourer Below' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
      ],
    },
    {
      id: 'all-five-investigators',
      title: 'All Five Investigators',
      description:
        'Complete the Night of the Zealot campaign true solo with each of the five core investigators. Each plays fundamentally differently — the same scenarios demand entirely different strategies depending on who you bring.',
      steps: [
        {
          id: 'investigator-roland-banks',
          label: 'Roland Banks — The Fed',
          hint: 'The best solo starter. Roland\'s special ability lets him collect a clue from his location when he defeats an enemy — fighting and investigating at the same time. His balanced stats mean you can handle whatever the scenario throws at you.',
          setup: [
            { label: 'Mode', value: 'True Solo' },
            { label: 'Investigator', value: 'Roland Banks (Guardian)' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'investigator-daisy-walker',
          label: 'Daisy Walker — The Librarian',
          hint: 'The most powerful clue-gatherer in the core set — but fragile in a fight. Solo with Daisy means managing enemies through evasion and allies rather than combat. Her extra action with Tomes is her engine; build around it from the start.',
          setup: [
            { label: 'Mode', value: 'True Solo' },
            { label: 'Investigator', value: 'Daisy Walker (Seeker)' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'investigator-skids-otool',
          label: '"Skids" O\'Toole — The Ex-Con',
          hint: 'Skids\'s extra-action ability is his greatest solo asset — but it costs resources. Build a resource engine early and spend it on actions, not cards. Use his high agility to evade rather than fight; every wound matters when you\'re alone.',
          setup: [
            { label: 'Mode', value: 'True Solo' },
            { label: 'Investigator', value: '"Skids" O\'Toole (Rogue)' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'investigator-agnes-baker',
          label: 'Agnes Baker — The Waitress',
          hint: 'Agnes deals damage when she takes horror — sanity damage becomes a weapon. Solo Agnes leans heavily into spells; her combat and intellect outside of willpower checks are weak. Manage spell charges carefully and keep her sane enough to keep firing.',
          setup: [
            { label: 'Mode', value: 'True Solo' },
            { label: 'Investigator', value: 'Agnes Baker (Mystic)' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'investigator-wendy-adams',
          label: 'Wendy Adams — The Urchin',
          hint: 'Wendy\'s Amulet lets her cancel any chaos token once — the most powerful solo ability in the core set. She struggles early (low combat, deck-dependent) but becomes nearly unkillable once her engine is running. Master her card cycling to unlock her potential.',
          setup: [
            { label: 'Mode', value: 'True Solo' },
            { label: 'Investigator', value: 'Wendy Adams (Survivor)' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
      ],
    },
    {
      id: 'difficulty-ascension',
      title: 'Difficulty Ascension',
      description:
        'Complete the Night of the Zealot campaign true solo at each difficulty level. The chaos bag is the only thing that changes — but it changes everything. Higher difficulties punish all skill tests and demand tighter deck construction.',
      steps: [
        {
          id: 'difficulty-easy',
          label: 'Easy',
          hint: 'Best for learning the campaign. The bag contains more +1 and 0 tokens — failed checks are rare. Focus on understanding card interactions, encounter deck behaviour, and the campaign narrative without the pressure of brutal pulls.',
          setup: [
            { label: 'Mode', value: 'True Solo' },
            { label: 'Difficulty', value: 'Easy' },
            { label: 'Chaos Bag', value: 'Easy/Standard side of scenario reference card' },
          ],
        },
        {
          id: 'difficulty-standard',
          label: 'Standard',
          hint: 'The intended experience. The bag is balanced — you will pass and fail in roughly equal measure. Campaign decisions start to matter: accumulated trauma between scenarios and XP upgrades become significant. A failed run is a learning run.',
          setup: [
            { label: 'Mode', value: 'True Solo' },
            { label: 'Difficulty', value: 'Standard' },
            { label: 'Chaos Bag', value: 'Easy/Standard side of scenario reference card' },
          ],
        },
        {
          id: 'difficulty-hard',
          label: 'Hard',
          hint: 'The bag punishes all tests. You must commit more cards to checks you\'d normally pass for free. Solo on Hard demands tight deck construction — dead cards and inefficient actions cost entire scenarios. Commit aggressively and never take a test naked.',
          setup: [
            { label: 'Mode', value: 'True Solo' },
            { label: 'Difficulty', value: 'Hard' },
            { label: 'Chaos Bag', value: 'Hard/Expert side of scenario reference card' },
          ],
        },
        {
          id: 'difficulty-expert',
          label: 'Expert',
          hint: 'The bag is almost entirely negative tokens. Only Elder Signs and cancel effects offer relief. Expert solo rewards perfect knowledge of your deck and the encounter deck. Expect multiple failed campaigns before completing Expert — that is the design intent.',
          setup: [
            { label: 'Mode', value: 'True Solo' },
            { label: 'Difficulty', value: 'Expert' },
            { label: 'Chaos Bag', value: 'Hard/Expert side of scenario reference card' },
          ],
        },
      ],
    },
  ],
}
