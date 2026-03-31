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
          label: 'Play #1',
          setup: [
            { label: 'Scenario', value: 'Rhino' },
            { label: 'Hero', value: 'Spider-Man' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'rhino-captainamerica',
          label: 'Play #2',
          setup: [
            { label: 'Scenario', value: 'Rhino' },
            { label: 'Hero', value: 'Captain America' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'rhino-shehulk',
          label: 'Play #3',
          setup: [
            { label: 'Scenario', value: 'Rhino' },
            { label: 'Hero', value: 'She-Hulk' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'klaw-spiderman',
          label: 'Play #4',
          setup: [
            { label: 'Scenario', value: 'Klaw' },
            { label: 'Hero', value: 'Spider-Man' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'klaw-captainamerica',
          label: 'Play #5',
          setup: [
            { label: 'Scenario', value: 'Klaw' },
            { label: 'Hero', value: 'Captain America' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'klaw-shehulk',
          label: 'Play #6',
          setup: [
            { label: 'Scenario', value: 'Klaw' },
            { label: 'Hero', value: 'She-Hulk' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'ultron-spiderman',
          label: 'Play #7',
          setup: [
            { label: 'Scenario', value: 'Ultron' },
            { label: 'Hero', value: 'Spider-Man' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'ultron-captainamerica',
          label: 'Play #8',
          setup: [
            { label: 'Scenario', value: 'Ultron' },
            { label: 'Hero', value: 'Captain America' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
        {
          id: 'ultron-shehulk',
          label: 'Play #9',
          setup: [
            { label: 'Scenario', value: 'Ultron' },
            { label: 'Hero', value: 'She-Hulk' },
            { label: 'Difficulty', value: 'Standard' },
          ],
        },
      ],
    },
  ],
}
