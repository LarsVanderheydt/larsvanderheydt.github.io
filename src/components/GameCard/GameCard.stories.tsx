import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from '@storybook/test'
import { GameCard } from './GameCard'
import type { GameDefinition } from '@/data/types'

const game: GameDefinition = {
  id: 'marvel-champions',
  name: 'Marvel Champions',
  theme: { id: 'marvel-champions' },
  achievements: [
    {
      id: 'core-set-playthrough',
      title: 'Core Set Playthrough',
      steps: [
        { id: 's1', label: 'Play #1', setup: [{ label: 'Hero', value: 'Spider-Man' }] },
        { id: 's2', label: 'Play #2', setup: [{ label: 'Hero', value: 'Captain America' }] },
        { id: 's3', label: 'Play #3', setup: [{ label: 'Hero', value: 'She-Hulk' }] },
      ],
    },
  ],
}

const meta: Meta<typeof GameCard> = {
  component: GameCard,
  parameters: { layout: 'padded' },
  args: { game },
}
export default meta

type Story = StoryObj<typeof GameCard>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Marvel Champions')).toBeInTheDocument()
    expect(canvas.getByRole('progressbar')).toBeInTheDocument()
  },
}
