import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
    title: 'UI/Timeline',
    component: Timeline,
    args: {
        entries: [
            { key: 'now', period: '2026–now', content: <p>Tech Lead, Platform Frontend</p> },
            { key: 'past', period: '2023–2026', content: <p>Tech Lead, Bank</p> },
        ],
    },
};
export default meta;

export const Default: StoryObj<typeof Timeline> = {
    play: async ({ canvas }) => {
        const [current, past] = canvas.getAllByRole('listitem');
        await expect(current).toHaveAttribute('data-ongoing');
        await expect(past).not.toHaveAttribute('data-ongoing');
    },
};
