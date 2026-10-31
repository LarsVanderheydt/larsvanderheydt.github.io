import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { cvs } from '../../content/cv';
import { AiSection } from './AiSection';

const cv = cvs.en;

const meta: Meta<typeof AiSection> = { title: 'Sections/AI', component: AiSection };
export default meta;

export const Default: StoryObj<typeof AiSection> = {
    play: async ({ canvas }) => {
        await expect(canvas.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)).toEqual(
            cv.ai.practices.map((p) => p.title),
        );
    },
};
