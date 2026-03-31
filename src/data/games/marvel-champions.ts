import type { GameDefinition } from '../types'

// Core set heroes: Iron Man, Spider-Man, Captain Marvel, Black Panther, She-Hulk
// Core set scenarios: Rhino, Klaw, Ultron
// Recommended modular sets: Rhino→Bomb Scare, Klaw→Masters of Evil, Ultron→Under Attack
// Heroic uses harder modular sets to increase pressure: Rhino→Under Attack, Klaw→Legions of Hydra, Ultron→The Doomsday Chair

const HEROES = ['Iron Man', 'Spider-Man', 'Captain Marvel', 'Black Panther', 'She-Hulk'] as const
type Hero = (typeof HEROES)[number]

type VillainConfig = {
  villain: string
  modularStandard: string
  modularHeroic: string
}

const VILLAINS: VillainConfig[] = [
  { villain: 'Rhino', modularStandard: 'Bomb Scare', modularHeroic: 'Under Attack' },
  { villain: 'Klaw', modularStandard: 'Masters of Evil', modularHeroic: 'Legions of Hydra' },
  { villain: 'Ultron', modularStandard: 'The Doomsday Chair', modularHeroic: 'The Doomsday Chair' },
]

type HintMap = Record<Hero, Record<string, { standard: string; expert: string; heroic: string }>>

const HINTS: HintMap = {
  'Iron Man': {
    Rhino: {
      standard:
        'Iron Man starts slow — prioritise getting your tech upgrades out. Rhino is forgiving enough to let you set up your board.',
      expert:
        'Expert Rhino accelerates fast. Have your upgrades online by turn 3 or threat will snowball before your armour matters.',
      heroic:
        'Heroic Rhino with Under Attack punishes every gap. Build Arc Reactor and Stark Tower immediately — you have no time to ease in.',
    },
    Klaw: {
      standard:
        'Klaw\'s side schemes drain resources. Iron Man\'s steady tech engine handles the flood once online — stay patient in the setup phase.',
      expert:
        'Expert Klaw cycles his upgrades fast. Prioritise destroying his Vibranium Rifle early or your damage ceiling gets capped.',
      heroic:
        'Legions of Hydra + Expert Klaw is relentless. Use Iron Man\'s ranged attacks to chip Hydra Soldiers without wasting actions.',
    },
    Ultron: {
      standard:
        'Iron Man vs Ultron is thematic. Get your armor upgrades fast — drones outpace a slow start and Ultron\'s ranged attacks shred you.',
      expert:
        'Expert Ultron\'s drone generation is brutal. Repulsor Blast is your friend: exhaust your upgrades to clear the board efficiently.',
      heroic:
        'The hardest pairing in the core. Doomsday Chair + Expert Ultron = infinite drones. Every action must count. Prioritise burst damage.',
    },
  },
  'Spider-Man': {
    Rhino: {
      standard:
        'Learn the core turn structure. Rhino schemes steadily — prioritise keeping threat low before swinging for big damage.',
      expert:
        'Expert Rhino hits harder and schemes faster. Spidey\'s thwart + attack split is ideal here — keep both threat and HP in check.',
      heroic:
        'Under Attack means encounter cards pile up fast. Use Peter Parker\'s alter-ego flip strategically — the tempo swing can save a bad round.',
    },
    Klaw: {
      standard:
        'Klaw\'s side scheme flood can overwhelm fast. Experiment with ally support to juggle multiple threats at once.',
      expert:
        'Expert Klaw adds punishing encounter cards. Spider-Man\'s readying ability from Backflip is crucial — save it for Klaw\'s attack phase.',
      heroic:
        'Legions of Hydra swarms the board. Webshot is essential — stun Klaw to create safe turns where you can clear Hydra Soldiers.',
    },
    Ultron: {
      standard:
        'Drone tokens pile up relentlessly. Keep the board clear; falling behind is very hard to recover from even with Spidey\'s mobility.',
      expert:
        'Expert Ultron drones are tougher. Peter\'s alter-ego healing becomes critical — flip when you\'re below half HP rather than at death\'s door.',
      heroic:
        'Doomsday Chair + Expert Ultron is peak difficulty. Prioritise drone removal above all else — Spider-Man\'s kit handles it better than most.',
    },
  },
  'Captain Marvel': {
    Rhino: {
      standard:
        'Learn Captain Marvel\'s binary form mechanic. Rhino\'s slow pace gives you space to practise timing your form change for maximum effect.',
      expert:
        'Expert Rhino schemes quickly. Captain Marvel\'s built-in readying when she takes damage is invaluable — lean into it rather than avoiding hits.',
      heroic:
        'Under Attack drains your hand fast. Captain Marvel thrives with a lean deck — rely on her innate toughness over over-prepared hands.',
    },
    Klaw: {
      standard:
        'Klaw generates side schemes constantly. Energy Channel lets Captain Marvel juggle threat AND damage in one action — practice that here.',
      expert:
        'Expert Klaw is faster. Binary Form is your pressure valve — trigger it when threat spikes rather than saving it for damage.',
      heroic:
        'Legions of Hydra + Expert Klaw means constant side schemes. Captain Marvel\'s damage potential is high enough to close the game fast — play aggressively.',
    },
    Ultron: {
      standard:
        'Captain Marvel\'s ranged damage is perfect for drones. Focus on keeping the drone count below 3 at all times — above that it spirals.',
      expert:
        'Expert Ultron drones have more HP. Captain Marvel\'s energy counters are precious — spend them on Photonic Blast for efficient drone clear.',
      heroic:
        'Doomsday Chair ensures constant drone pressure. Captain Marvel\'s readying ability means she can attack twice in a turn — use it for burst wins.',
    },
  },
  'Black Panther': {
    Rhino: {
      standard:
        'Focus on building your event chain. Rhino\'s slow pace gives you time to stack Wakandan tech upgrades before going aggro.',
      expert:
        'Expert Rhino punishes slow setups. Black Panther\'s Ancestral Knowledge helps cycle to upgrades faster — prioritise the Vibranium Suit.',
      heroic:
        'Under Attack with Expert Rhino is aggressive. Black Panther\'s high-cost events are harder to finance — keep a tighter hand and use allies for tempo.',
    },
    Klaw: {
      standard:
        'Event-based burst damage is ideal against Klaw. Save Wakanda Forever for when multiple side schemes are in play — clear them all at once.',
      expert:
        'Expert Klaw\'s threat is relentless. Mantis or Shuri allies are essential — you can\'t solo-thwart and still deal meaningful damage.',
      heroic:
        'Legions of Hydra overwhelms single-target builds. Black Panther\'s multi-hit events shine here — plan your event order to clear Hydra Soldiers efficiently.',
    },
    Ultron: {
      standard:
        'Black Panther\'s burst potential can spike Ultron down quickly. Save your biggest events for the final phase push — patience wins this one.',
      expert:
        'Expert Ultron\'s drones punish greedy board states. Keep at most 2 upgrades in play — more and Ultron\'s discard effects gut your hand.',
      heroic:
        'Hardest BP scenario. Doomsday Chair drones arrive fast. Play Black Panther\'s events reactively rather than holding for the perfect burst window.',
    },
  },
  'She-Hulk': {
    Rhino: {
      standard:
        'She-Hulk hits hard but draws aggro. Balance flipping between alter-ego recovery and hero attacks — Rhino\'s pace lets you learn the rhythm.',
      expert:
        'Expert Rhino hits harder than She-Hulk can sustain. Time your Jennifer Walters flips before big Rhino activations to absorb damage for free.',
      heroic:
        'Under Attack means constant pressure. She-Hulk\'s raw HP and damage make her a good Heroic hero — tank hits and punch back hard.',
    },
    Klaw: {
      standard:
        'Push your damage ceiling — Klaw has high HP. Learn when brute force beats board control; She-Hulk can often just race to the finish.',
      expert:
        'Expert Klaw\'s attack doubles. She-Hulk absorbs it better than most — flip to recover just before big attacks and flip back to deal burst damage.',
      heroic:
        'Legions of Hydra tests She-Hulk\'s tempo. She can\'t clear the board efficiently — use her high ATK to kill key Hydra minions and ignore the rest.',
    },
    Ultron: {
      standard:
        'The hardest core pairing. Go aggressive — She-Hulk can burst Ultron down before drones spiral. Healing is secondary to winning fast.',
      expert:
        'Expert Ultron drones plus She-Hulk\'s low thwart is punishing. You need 1-2 dedicated thwart allies or the drone count will end your run.',
      heroic:
        'Peak difficulty. Doomsday Chair + Expert Ultron + She-Hulk\'s weak thwart = near-impossible without tight play. One mission per hero action. No wasted turns.',
    },
  },
}

function makeSteps(
  difficulty: 'Standard' | 'Expert' | 'Heroic',
  modularKey: 'modularStandard' | 'modularHeroic',
  hintKey: 'standard' | 'expert' | 'heroic',
) {
  return VILLAINS.flatMap((v) =>
    HEROES.map((hero) => ({
      id: `${v.villain.toLowerCase()}-${hero.toLowerCase().replace(/\s/g, '')}-${difficulty.toLowerCase()}`,
      label: `${hero} vs ${v.villain}`,
      hint: HINTS[hero][v.villain][hintKey],
      setup: [
        { label: 'Mode', value: 'Solo' },
        { label: 'Modular Set', value: v[modularKey] },
        { label: 'Difficulty', value: difficulty },
      ],
    })),
  )
}

export const marvelChampions: GameDefinition = {
  id: 'marvel-champions',
  name: 'Marvel Champions',
  theme: { id: 'marvel-champions' },
  achievements: [
    {
      id: 'core-standard',
      title: 'Core Set — Standard',
      description:
        'Complete the full core set solo at Standard difficulty. One hero per session — work through all five heroes against all three villains.',
      steps: makeSteps('Standard', 'modularStandard', 'standard'),
    },
    {
      id: 'core-expert',
      title: 'Core Set — Expert',
      description:
        'Replay the full core set solo with villains on their Expert side. Includes the Expert Encounter Set for tougher treacheries.',
      steps: makeSteps('Expert', 'modularStandard', 'expert'),
    },
    {
      id: 'core-heroic',
      title: 'Core Set — Heroic',
      description:
        'Extreme difficulty solo. Harder modular sets push each villain to its limit. One additional encounter card per villain phase.',
      steps: makeSteps('Heroic', 'modularHeroic', 'heroic'),
    },
  ],
}
