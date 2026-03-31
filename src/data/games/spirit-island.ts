import type { GameDefinition } from '../types'

// Designer: R. Eric Reuss | Publisher: Greater Than Games | 2017
// 8 base spirits, 3 adversaries (Brandenburg-Prussia, England, Sweden each with Base + Levels 1–6),
// 4 scenarios (Blitz, Guard the Isle's Heart, Rituals of Terror, Dahan Insurrection)
// Solo: single island board, all rules identical to multiplayer — no rule changes
// Difficulty rating = adversary level + scenario modifier (range 0–10 in base game)
// Victory: fill the Fear track (Terror Victory) or meet the Fear card win condition
// Scoring: Difficulty − Invader Cards remaining in bag; adjusted for Dahan/Blight

export const spiritIsland: GameDefinition = {
  id: 'spirit-island',
  name: 'Spirit Island',
  theme: { id: 'spirit-island' },
  achievements: [
    {
      id: 'spirit-mastery',
      title: 'Spirit Mastery',
      description:
        'Win solo with each of the eight base game spirits. No adversary, Blitz scenario (fastest win condition) — the goal is to learn how each spirit plays, not to maximise difficulty.',
      steps: [
        {
          id: 'spirit-river',
          label: 'River Surges in Sunlight',
          hint: 'The recommended first spirit. River can push Invaders away from populated lands and heal Blight — the most forgiving kit to learn on. Focus on setting up push chains before the Ravage phase so damage never lands.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Spirit', value: 'River Surges in Sunlight' },
            { label: 'Complexity', value: 'Low' },
            { label: 'Scenario', value: 'Blitz' },
            { label: 'Adversary', value: 'None' },
          ],
        },
        {
          id: 'spirit-green',
          label: 'A Spread of Rampant Green',
          hint: 'Presence spreads fast and Wilds tokens prevent Builds. Race to claim land before Invaders settle — the goal is to be everywhere before they arrive. You win by occupying, not by fighting.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Spirit', value: 'A Spread of Rampant Green' },
            { label: 'Complexity', value: 'Low' },
            { label: 'Scenario', value: 'Blitz' },
            { label: 'Adversary', value: 'None' },
          ],
        },
        {
          id: 'spirit-shadows',
          label: 'Shadows Flicker Like Flame',
          hint: 'Wins through Fear rather than direct combat — stay deep inland and stack Fear cards. Every Explorer killed is a free Fear token. Prioritise Explorer removal over attacking Cities; Fear victory arrives faster than you expect.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Spirit', value: 'Shadows Flicker Like Flame' },
            { label: 'Complexity', value: 'Low' },
            { label: 'Scenario', value: 'Blitz' },
            { label: 'Adversary', value: 'None' },
          ],
        },
        {
          id: 'spirit-earth',
          label: 'Vital Strength of the Earth',
          hint: 'Slow to start but nearly unstoppable at peak power. Endure the early Invader push and come online around round 4–5. Sacred Sites are your engine — protect them first and let power accumulate before going on the offensive.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Spirit', value: 'Vital Strength of the Earth' },
            { label: 'Complexity', value: 'Moderate' },
            { label: 'Scenario', value: 'Blitz' },
            { label: 'Adversary', value: 'None' },
          ],
        },
        {
          id: 'spirit-thunderspeaker',
          label: 'Thunderspeaker',
          hint: 'The Dahan are your weapons. Move them adjacent to Invader concentrations before Ravage triggers, then use your powers to force counterattacks. Requires planning 2–3 turns ahead; the payoff when it clicks is enormous.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Spirit', value: 'Thunderspeaker' },
            { label: 'Complexity', value: 'Moderate' },
            { label: 'Scenario', value: 'Blitz' },
            { label: 'Adversary', value: 'None' },
          ],
        },
        {
          id: 'spirit-keeper',
          label: 'Keeper of the Forbidden Wilds',
          hint: 'Wilds delay Builds and Beasts kill Invaders indirectly. A control/tempo game rather than direct combat — you slow the Invaders rather than eliminate them. Position Beasts carefully; they move when Invaders Ravage adjacent lands.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Spirit', value: 'Keeper of the Forbidden Wilds' },
            { label: 'Complexity', value: 'Moderate' },
            { label: 'Scenario', value: 'Blitz' },
            { label: 'Adversary', value: 'None' },
          ],
        },
        {
          id: 'spirit-lightning',
          label: "Lightning's Swift Strike",
          hint: 'All Fast powers means you act before Invaders damage the island. The goal is to kill Explorers before they trigger a Build. Maximum efficiency requires knowing your power card options well; every turn is a puzzle of ordering and targeting.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Spirit', value: "Lightning's Swift Strike" },
            { label: 'Complexity', value: 'High' },
            { label: 'Scenario', value: 'Blitz' },
            { label: 'Adversary', value: 'None' },
          ],
        },
        {
          id: 'spirit-ocean',
          label: "Ocean's Hungry Grasp",
          hint: 'Drowns Invaders off the coast — only effective near the shoreline. Play on a coastal-heavy board (Northeast or West). The pull-into-ocean combo is devastating but requires careful setup; inland Invaders are entirely outside your reach.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Spirit', value: "Ocean's Hungry Grasp" },
            { label: 'Complexity', value: 'High' },
            { label: 'Scenario', value: 'Blitz' },
            { label: 'Adversary', value: 'None' },
          ],
        },
      ],
    },
    {
      id: 'the-colonizers',
      title: 'The Colonizers',
      description:
        'Defeat each of the three base game adversaries at Level 1. Each adversary has a unique mechanic that changes how the Invaders behave — learn them before climbing their difficulty ladder.',
      steps: [
        {
          id: 'adversary-bp-1',
          label: 'Brandenburg-Prussia — Level 1',
          hint: 'The recommended first adversary. B-P Explores earlier and from more land types — the island fills faster than usual. Accelerate your power growth and prioritise clearing Explorers before they trigger a Build chain.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Adversary', value: 'Brandenburg-Prussia — Level 1' },
            { label: 'Difficulty', value: '2' },
            { label: 'Scenario', value: 'None' },
          ],
        },
        {
          id: 'adversary-sweden-1',
          label: 'Sweden — Level 1',
          hint: 'Sweden\'s Ravagers are more dangerous and their military makes some Invader actions deadlier. Dahan-focused spirits (Thunderspeaker) suffer here as the Dahan take heavier casualties — pick a spirit that does not rely on Dahan survivability.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Adversary', value: 'Sweden — Level 1' },
            { label: 'Difficulty', value: '3' },
            { label: 'Scenario', value: 'None' },
          ],
        },
        {
          id: 'adversary-england-1',
          label: 'England — Level 1',
          hint: 'England Builds relentlessly — structures multiply before you can respond. Spirits that rely on killing Explorers to prevent builds (Shadows Flicker Like Flame) are weakened here. Defensive spirits that handle a crowded board perform better.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Adversary', value: 'England — Level 1' },
            { label: 'Difficulty', value: '4' },
            { label: 'Scenario', value: 'None' },
          ],
        },
      ],
    },
    {
      id: 'difficulty-ascension',
      title: 'Difficulty Ascension',
      description:
        'Beat increasingly difficult combinations of adversary levels and scenarios. Difficulty is the sum of the adversary level modifier and the scenario modifier — see the Adversary & Scenario Difficulty Chart (rulebook p. 28).',
      steps: [
        {
          id: 'difficulty-3',
          label: 'Difficulty 3',
          hint: 'First real challenge. Try Brandenburg-Prussia Level 2 or Sweden Level 1 with no scenario. The Invaders are no longer forgiving — a missed Ravage costs you lands permanently. Build your power progression with intent from round 1.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Target Difficulty', value: '3' },
            { label: 'Example', value: 'Sweden Level 1 (no scenario)' },
          ],
        },
        {
          id: 'difficulty-5',
          label: 'Difficulty 5',
          hint: 'The midpoint. England Level 2 or Brandenburg-Prussia Level 4. You need a spirit with reliable access to both damage and defence. Casual plays at low difficulty do not prepare you for the simultaneous pressure here.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Target Difficulty', value: '5' },
            { label: 'Example', value: 'England Level 2 (no scenario)' },
          ],
        },
        {
          id: 'difficulty-7',
          label: 'Difficulty 7',
          hint: 'High difficulty. England Level 4 or Sweden Level 5. Deep knowledge of your spirit\'s power progression is required. Every turn demands precise prioritisation — one wasted action in the mid-game can cascade into a loss by round 8.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Target Difficulty', value: '7' },
            { label: 'Example', value: 'England Level 4 (no scenario)' },
          ],
        },
        {
          id: 'difficulty-10',
          label: 'Difficulty 10',
          hint: 'The maximum in the base game: England Level 6. Invader numbers reach overwhelming levels. Only a handful of spirits have reliable paths to victory here — expect multiple failed runs before winning. That is the design intent.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Target Difficulty', value: '10' },
            { label: 'Example', value: 'England Level 6 (no scenario)' },
          ],
        },
      ],
    },
  ],
}
