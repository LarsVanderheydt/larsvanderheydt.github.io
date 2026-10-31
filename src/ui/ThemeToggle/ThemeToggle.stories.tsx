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
        await userEvent.click(canvas.getByRole('button', { name: 'Light mode' }));
        await expect(args.onToggle).toHaveBeenCalledOnce();
    },
};

export const Light: Story = {
    args: { theme: 'light' },
    play: async ({ canvas }) => {
        await expect(canvas.getByRole('button', { name: 'Dark mode' })).toBeVisible();
    },
};
