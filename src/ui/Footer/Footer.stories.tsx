import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { cvs } from '../../content/cv';
import { Footer } from './Footer';

const cv = cvs.en;

const meta: Meta<typeof Footer> = { title: 'UI/Footer', component: Footer };
export default meta;

export const Default: StoryObj<typeof Footer> = {
    play: async ({ canvas }) => {
        await expect(canvas.getByRole('link', { name: cv.email })).toHaveAttribute('href', `mailto:${cv.email}`);
        await expect(canvas.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', cv.links[0].href);
    },
};
