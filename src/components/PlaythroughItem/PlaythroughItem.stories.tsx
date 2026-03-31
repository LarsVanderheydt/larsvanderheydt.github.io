import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { PlaythroughItem } from './PlaythroughItem'

const step = {
  id: 'rhino-spiderman',
  label: 'Play #1',
  setup: [
    { label: 'Scenario', value: 'Rhino' },
    { label: 'Hero', value: 'Spider-Man' },
    { label: 'Difficulty', value: 'Standard' },
  ],
}

const meta: Meta<typeof PlaythroughItem> = {
  component: PlaythroughItem,
  parameters: { layout: 'padded' },
  args: { step, onToggle: fn() },
}
export default meta

type Story = StoryObj<typeof PlaythroughItem>

export const Incomplete: Story = {
  args: { completed: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-checked', 'false')
    expect(canvas.getByText('Rhino')).toBeInTheDocument()
    expect(canvas.getByText('Spider-Man')).toBeInTheDocument()
  },
}

export const Completed: Story = {
  args: { completed: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-checked', 'true')
  },
}

export const ToggleInteraction: Story = {
  args: { completed: false, onToggle: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    await userEvent.click(checkbox)
    expect(args.onToggle).toHaveBeenCalledWith(true)
  },
}
