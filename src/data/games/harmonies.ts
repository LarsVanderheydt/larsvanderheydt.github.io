import type { GameDefinition } from '../types'

// Terrain types: Fields (yellow), Mountains (grey), Trees (green+brown), Buildings (red), Water (blue)
// Board sides: A (standard scoring layout) and B (different terrain scoring profiles)
// Nature's Spirit: 10 expert-mode cards, each adding a unique bonus scoring condition
// Solo mode: 1–10 Sun rating derived from raw score × board side × Nature's Spirit card chosen
// Melodies: fan-made solo campaign by Lovelace (Peter Schmähler). 15 scenarios, each starts with
//   a preset Nature's Spirit card + 2–3 animal cards that must all be completed to qualify.
//   Scenario 5 exception: no starting cards, end triggered by emptying the bag.
//   Scenario 13 exception: 4 animal cards, filling all slots (no free pick during play).
//   Bronze 90 / Silver 110 / Gold 130 pts applies to all scenarios.
//   The specific Nature's Spirit card per scenario is shown as a card image in the PDF —
//   refer to the Melodies PDF for which NS card is assigned to each scenario.

export const harmonies: GameDefinition = {
  id: 'harmonies',
  name: 'Harmonies',
  theme: { id: 'harmonies' },
  achievements: [
    {
      id: 'learning-the-land',
      title: 'Learning the Land',
      description:
        'One focused play per terrain type. Use Side A without Nature\'s Spirit so you can observe each scoring mechanism in isolation.',
      steps: [
        {
          id: 'fields-study',
          label: 'Fields Study',
          hint: 'Cluster yellow tokens into connected groups of 2+. A lone yellow token scores nothing — every isolated field is a wasted turn. Observe how quickly small gaps kill your score.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Terrain Focus', value: 'Fields' },
            { label: 'Nature\'s Spirit', value: 'None' },
          ],
        },
        {
          id: 'mountain-builder',
          label: 'Mountain Builder',
          hint: 'Stacking rewards exponentially: height 1 = 1pt, height 2 = 3pt, height 3 = 7pt — but only adjacent to another mountain. Plan your grey adjacency before stacking; an isolated peak scores nothing.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Terrain Focus', value: 'Mountains' },
            { label: 'Nature\'s Spirit', value: 'None' },
          ],
        },
        {
          id: 'forest-canopy',
          label: 'Forest Canopy',
          hint: 'Trees need a brown base before the green top can go on. Tall trees score identically to mountains (1/3/7) but require two token placements per tree. Pre-place brown bases early to keep your options open.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Terrain Focus', value: 'Trees' },
            { label: 'Nature\'s Spirit', value: 'None' },
          ],
        },
        {
          id: 'city-planner',
          label: 'City Planner',
          hint: 'Each building scores 5 points only if surrounded by at least 3 different token colours. Place red tokens where your existing terrain already provides variety — don\'t drop buildings into empty space.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Terrain Focus', value: 'Buildings' },
            { label: 'Nature\'s Spirit', value: 'None' },
          ],
        },
        {
          id: 'river-mapper',
          label: 'River Mapper',
          hint: 'Water scoring depends on your board side — longest consecutive line on Side A. Plan your river as one continuous path from the start; blue tokens placed in isolation are nearly impossible to connect later.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Terrain Focus', value: 'Water' },
            { label: 'Nature\'s Spirit', value: 'None' },
          ],
        },
      ],
    },
    {
      id: 'expert-naturalist',
      title: 'Expert Naturalist',
      description:
        'All four combinations of board side and Nature\'s Spirit mode. Each pairing demands a different strategy — map your Nature\'s Spirit card\'s condition against the board\'s terrain layout before placing anything.',
      steps: [
        {
          id: 'side-a-pure',
          label: 'Side A — Pure',
          hint: 'Baseline run on the standard side. Note where terrain scoring clusters naturally on Side A\'s layout. This is your reference point for every subsequent comparison.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Nature\'s Spirit', value: 'None' },
          ],
        },
        {
          id: 'side-a-expert',
          label: 'Side A — Expert',
          hint: 'Add one Nature\'s Spirit card for a bonus scoring condition. Draw two, pick one. Your NS condition may conflict with Side A\'s natural terrain paths — identify the overlap before committing to a strategy.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Nature\'s Spirit', value: 'Your choice (draw 2, keep 1)' },
          ],
        },
        {
          id: 'side-b-pure',
          label: 'Side B — Pure',
          hint: 'Side B has a different scoring profile — strategies that scored high on A may underperform here. Build fresh intuition rather than copying your Side A approach.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'B' },
            { label: 'Nature\'s Spirit', value: 'None' },
          ],
        },
        {
          id: 'side-b-expert',
          label: 'Side B — Expert',
          hint: 'Two simultaneous scoring objectives on the less familiar board side. Evaluate your NS card\'s condition against Side B\'s layout specifically — a card that was weak on A may be your strongest play here.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'B' },
            { label: 'Nature\'s Spirit', value: 'Your choice (draw 2, keep 1)' },
          ],
        },
      ],
    },
    {
      id: 'solo-ascension',
      title: 'Solo Ascension',
      description:
        'Progressive Sun targets in solo mode. Each Sun rating reflects your raw score converted via the board-side and Nature\'s Spirit table in the rulebook (p. 11). Token scarcity accelerates faster than in multiplayer — plan accordingly.',
      steps: [
        {
          id: 'solo-3-suns',
          label: '3 Suns',
          hint: 'First solo run. The solo board has only 3 token spaces and discards 6 tokens per turn — scarcity hits fast. Focus on completing at least one animal card per game and keeping your largest terrain group connected.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Nature\'s Spirit', value: 'None' },
            { label: 'Target', value: '3 Suns' },
          ],
        },
        {
          id: 'solo-5-suns',
          label: '5 Suns',
          hint: 'Mid-range target. Efficient animal card scoring is the fastest path upward — each card you complete adds its highest revealed value. Prioritise cards whose patterns overlap with your terrain strategy.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Nature\'s Spirit', value: 'None' },
            { label: 'Target', value: '5 Suns' },
          ],
        },
        {
          id: 'solo-7-suns',
          label: '7 Suns',
          hint: 'Advanced target. Add a Nature\'s Spirit card — the right one adds 15–25 bonus points when your strategy aligns with it. Draw two and pick the card whose condition matches the terrain you\'re already planning to build.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'A' },
            { label: 'Nature\'s Spirit', value: 'Your choice (draw 2, keep 1)' },
            { label: 'Target', value: '7 Suns' },
          ],
        },
        {
          id: 'solo-9-suns',
          label: '9 Suns',
          hint: 'Near-perfect play. Every token placement must serve at least two scoring purposes. Decline animal cards whose patterns would force you off your terrain strategy — a misaligned card costs more than it earns.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'B' },
            { label: 'Nature\'s Spirit', value: 'Your choice (draw 2, keep 1)' },
            { label: 'Target', value: '9 Suns' },
          ],
        },
        {
          id: 'solo-10-suns',
          label: '10 Suns',
          hint: 'Perfect score. Side B with a synergistic Nature\'s Spirit card. Zero wasted placements. Every token must contribute to at least two scoring conditions simultaneously — animals, terrain groups, and the NS bonus.',
          setup: [
            { label: 'Mode', value: 'Solo' },
            { label: 'Board Side', value: 'B' },
            { label: 'Nature\'s Spirit', value: 'Your choice (draw 2, keep 1)' },
            { label: 'Target', value: '10 Suns' },
          ],
        },
      ],
    },
    {
      id: 'melodies-campaign',
      title: 'Melodies Campaign',
      description:
        'Fan-made solo campaign by Lovelace (Peter Schmähler). 15 scenarios — each starts with a preset Nature\'s Spirit card and 2–3 animal cards that you must all complete to qualify. Thresholds are the same across every scenario: Bronze 90 / Silver 110 / Gold 130 pts. Check the Melodies PDF for which Nature\'s Spirit card each scenario assigns.',
      steps: [
        {
          id: 'melodies-1',
          label: 'Scenario 1 — Air, Land and Sea',
          hint: 'Three cards spanning sky, land, and water habitats. Expect varied token requirements — plan a board that satisfies all three terrain types rather than specialising in one.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Vulture, Wolf, Fish' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-2',
          label: 'Scenario 2 — Wingspan',
          hint: 'All three animals are birds. Their habitat patterns likely share token types — look for overlapping placement opportunities to satisfy multiple cards with the same tokens.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Raven, Duck, Peacock' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-3',
          label: 'Scenario 3 — Up in the Trees',
          hint: 'Forest-dwelling animals suggest tree-heavy patterns. Prioritise building tall trees early — brown bases before green tops, and height matters for scoring.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Koala, Panther, Snow Fox' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-4',
          label: 'Scenario 4 — Mixed Bag',
          hint: 'Three animals from different environments. No obvious terrain specialisation — read all three card patterns carefully at the start and find the one terrain type that threads through all of them.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Alpaca, Bat, Squirrel' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-5',
          label: 'Scenario 5 — The Sky is the Limit',
          hint: 'No starting animal cards — the game ends only when the bag empties. With the bag as the clock, play the solo board to exhaustion. Pick up animal cards freely each turn and aim to chain completions deep into the late game.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'None' },
            { label: 'End Trigger', value: 'Empty the bag (not board spaces)' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-6',
          label: 'Scenario 6 — Welcome to the Jungle',
          hint: 'Dragonfly, Parrot, and Frog all point to lush, mixed-terrain habitats — expect water and forest tokens to feature heavily. Don\'t let water placements drift away from your river line.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Dragonfly, Parrot, Frog' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-7',
          label: 'Scenario 7 — Calm Mountains',
          hint: 'Mountain animals (Capricorn, Baboon, Bear) strongly suggest grey-token patterns. Stack mountains to height 3 for 7 pts each — but adjacency is required, so cluster your grey tokens tightly.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Capricorn, Baboon, Bear' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-8',
          label: 'Scenario 8 — Islands in the Sun',
          hint: 'Butterfly, Raccoon, and Flamingo suggest open terrain and water. Flamingo in particular likely needs water adjacency — plan a blue token path early and let the other two cards wrap around it.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Butterfly, Raccoon, Flamingo' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-9',
          label: 'Scenario 9 — Town in the Woods',
          hint: 'Cat, Hedgehog, and Boar hint at forest-edge and settled terrain — possibly a mix of trees and buildings. If any card needs a building, remember it scores only when surrounded by 3+ different token colours.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Cat, Hedgehog, Boar' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-10',
          label: 'Scenario 10 — Lush Green',
          hint: 'Owl, Rabbit, and Otter live across forests and waterways — expect tree and water tokens in the patterns. Otter almost certainly needs blue tokens; plan your river before placing anything else.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Owl, Rabbit, Otter' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-11',
          label: 'Scenario 11 — Hiding in the Rubble',
          hint: 'Marmot, Desert Fox, and Meerkat are dry-terrain animals — expect fields or mountain patterns with little to no water. A focused yellow or grey build may satisfy all three cards simultaneously.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Marmot, Desert Fox, Meerkat' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-12',
          label: 'Scenario 12 — Fields of Gold',
          hint: 'Lion, Bumblebee, and Ladybug all live in open meadows — a strong signal that yellow field tokens dominate the patterns. Build large connected field groups; each 2+ group scores 5 pts.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Lion, Bumblebee, Ladybug' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-13',
          label: 'Scenario 13 — Alternative Reality',
          hint: 'Four preset cards fill all your slots — you cannot pick up additional animals during play. Every placement must serve at least one of the four card patterns. Read all four cards at the start and find your single unifying strategy before placing anything.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Amazonas, Deer, Crocodile, Kingfisher' },
            { label: 'Note', value: 'All 4 slots used — no free card pick during play' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-14',
          label: 'Scenario 14 — Splish Splash Waterhome',
          hint: 'Tortoise, Ray, and Penguin are all aquatic or semi-aquatic. Expect blue-heavy patterns. Commit to a single continuous river early — water scoring on Side A rewards the longest consecutive line.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Tortoise, Ray, Penguin' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
        {
          id: 'melodies-15',
          label: 'Scenario 15 — Dorfromantik',
          hint: 'Named after the tile-placement game about building a village landscape. Stork, Mouse, and Lizard suggest a mixed rural environment — likely a combination of fields, trees, and buildings. The final scenario: aim for Gold.',
          setup: [
            { label: 'Mode', value: 'Solo (Melodies)' },
            { label: 'Starting Cards', value: 'Stork, Mouse, Lizard' },
            { label: 'Bronze / Silver / Gold', value: '90 / 110 / 130 pts' },
          ],
        },
      ],
    },
  ],
}
