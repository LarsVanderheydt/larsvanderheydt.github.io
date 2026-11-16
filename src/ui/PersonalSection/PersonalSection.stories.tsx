import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { cvs } from '../../content/cv';
import { PersonalSection } from './PersonalSection';

const cv = cvs.en;

const meta: Meta<typeof PersonalSection> = { title: 'Sections/Personal', component: PersonalSection };
export default meta;

export const Default: StoryObj<typeof PersonalSection> = {
    play: async ({ canvas }) => {
        await expect(canvas.getByRole('heading', { level: 2, name: cv.sections.personal.title })).toBeVisible();
        await expect(canvas.getByText(cv.personal[1].value)).toBeVisible();
    },
};
