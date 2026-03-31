import type { GameDefinition } from '../types'

export const marvelChampions: GameDefinition = {
  id: 'marvel-champions',
  name: 'Marvel Champions',
  theme: { id: 'marvel-champions' },
  achievements: [
    {
      id: 'core-set-playthrough',
      title: 'Core Set Playthrough',
      description:
        'Complete the recommended core set experience: defeat each villain with each hero at standard difficulty.',
      steps: [
        {
          id: 'rhino-spiderman',
          label: 'Spider-Man vs Rhino',
          hint: 'Learn the core turn structure. Rhino schemes steadily — prioritise keeping threat low before swinging.',
          setup: [
            { label: 'Scenario', value: 'Rhino' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'rhino-captainamerica',
          label: 'Captain America vs Rhino',
          hint: 'Lean into Cap\'s defensive kit. Practice blocking reliably and building a stable resource engine.',
          setup: [
            { label: 'Scenario', value: 'Rhino' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'rhino-shehulk',
          label: 'She-Hulk vs Rhino',
          hint: 'She-Hulk hits hard but draws aggro. Balance flipping between alter-ego recovery and hero attacks.',
          setup: [
            { label: 'Scenario', value: 'Rhino' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'klaw-spiderman',
          label: 'Spider-Man vs Klaw',
          hint: 'Klaw\'s side scheme flood can overwhelm fast. Experiment with ally support to juggle multiple threats.',
          setup: [
            { label: 'Scenario', value: 'Klaw' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'klaw-captainamerica',
          label: 'Captain America vs Klaw',
          hint: 'Cap\'s thwarting ability shines here. Focus on disrupting Klaw\'s upgrade chain before it snowballs.',
          setup: [
            { label: 'Scenario', value: 'Klaw' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'klaw-shehulk',
          label: 'She-Hulk vs Klaw',
          hint: 'Push your damage ceiling — Klaw has high HP. Learn when brute force beats board control.',
          setup: [
            { label: 'Scenario', value: 'Klaw' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'ultron-spiderman',
          label: 'Spider-Man vs Ultron',
          hint: 'Drone tokens pile up relentlessly. Try to keep the board clear; falling behind is very hard to recover from.',
          setup: [
            { label: 'Scenario', value: 'Ultron' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'ultron-captainamerica',
          label: 'Captain America vs Ultron',
          hint: 'Use Cap\'s thwart efficiently against drone side schemes. A clean board early makes the final push manageable.',
          setup: [
            { label: 'Scenario', value: 'Ultron' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'ultron-shehulk',
          label: 'She-Hulk vs Ultron',
          hint: 'The hardest pairing in the core set. Go aggressive — She-Hulk can burst Ultron down before drones spiral.',
          setup: [
            { label: 'Scenario', value: 'Ultron' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
      ],
    },
  ],
}
