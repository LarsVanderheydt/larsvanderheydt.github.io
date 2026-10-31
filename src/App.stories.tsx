import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { App } from './App';

const meta: Meta<typeof App> = {
    title: 'Page',
    component: App,
    parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default: StoryObj<typeof App> = {
    play: async ({ canvas, userEvent }) => {
        await expect(canvas.getByRole('main')).toBeVisible();
        await expect(canvas.getByRole('navigation', { name: 'Sections' })).toBeVisible();

        const before = document.documentElement.dataset.theme;
        await userEvent.click(canvas.getByRole('button', { name: 'Dark mode' }));
        await expect(document.documentElement.dataset.theme).not.toBe(before);
    },
};
