import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { cv } from '../../content/cv';
import { SkillsSection } from './SkillsSection';

const meta: Meta<typeof SkillsSection> = { title: 'Sections/Skills', component: SkillsSection };
export default meta;

export const Default: StoryObj<typeof SkillsSection> = {
    play: async ({ canvas }) => {
        await expect(canvas.getByText('Claude Code')).toBeVisible();
        await expect(canvas.getByText(cv.languages.join(' · '))).toBeVisible();
    },
};
