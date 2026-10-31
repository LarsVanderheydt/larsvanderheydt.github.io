import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Section } from './Section';

const meta: Meta<typeof Section> = {
    title: 'UI/Section',
    component: Section,
    args: { id: 'work', title: 'Selected work', children: <p>Section content</p> },
};
export default meta;

export const Default: StoryObj<typeof Section> = {
    play: async ({ canvas }) => {
        await expect(canvas.getByRole('region', { name: 'Selected work' })).toHaveAttribute('id', 'work');
    },
};
