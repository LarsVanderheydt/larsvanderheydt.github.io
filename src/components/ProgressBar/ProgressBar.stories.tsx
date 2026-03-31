import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof ProgressBar>

export const Empty: Story = {
  args: { completed: 0, total: 9 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const bar = canvas.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '0')
  },
}

export const HalfDone: Story = {
  args: { completed: 4, total: 9 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const bar = canvas.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '44')
    expect(canvas.getByText('44%')).toBeInTheDocument()
  },
}

export const Complete: Story = {
  args: { completed: 9, total: 9 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const bar = canvas.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '100')
    expect(canvas.getByText('100%')).toBeInTheDocument()
  },
}
