import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { cv } from '../../content/cv';
import { WorkSection } from './WorkSection';

const meta: Meta<typeof WorkSection> = { title: 'Sections/Work', component: WorkSection };
export default meta;

export const Default: StoryObj<typeof WorkSection> = {
    play: async ({ canvas, userEvent }) => {
        const [first] = cv.work;
        await expect(canvas.getAllByRole('group')).toHaveLength(cv.work.length);

        await userEvent.click(canvas.getByText(first.title));
        await expect(canvas.getByText(first.details[0])).toBeVisible();
    },
};
