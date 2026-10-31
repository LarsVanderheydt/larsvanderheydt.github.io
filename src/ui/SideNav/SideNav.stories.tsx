import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { SideNav } from './SideNav';

const meta: Meta<typeof SideNav> = {
    title: 'UI/SideNav',
    component: SideNav,
    args: {
        sections: [
            { id: 'work', label: 'Work' },
            { id: 'skills', label: 'Skills' },
        ],
    },
};
export default meta;

export const Default: StoryObj<typeof SideNav> = {
    play: async ({ canvas }) => {
        await expect(canvas.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
        await expect(canvas.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills');
    },
};
