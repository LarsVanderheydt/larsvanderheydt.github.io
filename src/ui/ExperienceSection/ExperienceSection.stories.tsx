import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { cv } from '../../content/cv';
import { ExperienceSection } from './ExperienceSection';

const meta: Meta<typeof ExperienceSection> = { title: 'Sections/Experience', component: ExperienceSection };
export default meta;

export const Default: StoryObj<typeof ExperienceSection> = {
    play: async ({ canvas }) => {
        const expandable = cv.roles.filter((r) => r.details.length > 0);
        await expect(canvas.getAllByRole('group')).toHaveLength(expandable.length);
        await expect(canvas.getByText(cv.roles[cv.roles.length - 1].summary)).toBeVisible();
        await expect(canvas.getByText('2018 · Ghent, Belgium')).toBeVisible();
    },
};
