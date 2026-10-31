import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { ThemeToggle } from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
    title: 'UI/ThemeToggle',
    component: ThemeToggle,
    args: { onToggle: fn() },
};
export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Dark: Story = {
    args: { theme: 'dark' },
    play: async ({ canvas, userEvent, args }) => {
        const button = canvas.getByRole('button', { name: 'Dark mode' });
        await expect(button).toHaveAttribute('aria-pressed', 'true');

        await userEvent.click(button);
        await expect(args.onToggle).toHaveBeenCalledOnce();
    },
};

export const Light: Story = {
    args: { theme: 'light' },
    play: async ({ canvas }) => {
        await expect(canvas.getByRole('button', { name: 'Dark mode' })).toHaveAttribute('aria-pressed', 'false');
    },
};
