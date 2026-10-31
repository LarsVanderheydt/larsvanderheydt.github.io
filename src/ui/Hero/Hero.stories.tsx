import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { cvs } from '../../content/cv';
import { Hero } from './Hero';

const cv = cvs.en;

const meta: Meta<typeof Hero> = {
    title: 'UI/Hero',
    component: Hero,
    args: { theme: 'dark' },
    parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default: StoryObj<typeof Hero> = {
    play: async ({ canvas }) => {
        await expect(canvas.getByRole('heading', { level: 1, name: cv.name })).toBeVisible();
        await expect(canvas.getByRole('list', { name: 'Focus areas' }).children).toHaveLength(cv.focus.length);
    },
};
