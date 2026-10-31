import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Disclosure } from './Disclosure';

const meta: Meta<typeof Disclosure> = {
    title: 'UI/Disclosure',
    component: Disclosure,
    args: {
        title: 'One frontend monorepo',
        meta: '2025–2026',
        summary: 'Every micro-frontend moved into one monorepo.',
    },
};
export default meta;

type Story = StoryObj<typeof Disclosure>;

export const Expandable: Story = {
    args: {
        children: (
            <ul>
                <li>25 apps and 14 packages migrated.</li>
            </ul>
        ),
    },
    play: async ({ canvas, userEvent }) => {
        const detail = canvas.getByText('25 apps and 14 packages migrated.');
        await expect(detail).not.toBeVisible();

        await userEvent.click(canvas.getByText('One frontend monorepo'));
        await expect(detail).toBeVisible();
    },
};

export const Static: Story = {
    play: async ({ canvasElement, canvas }) => {
        await expect(canvas.getByText('One frontend monorepo')).toBeVisible();
        await expect(canvasElement.querySelector('details')).toBeNull();
    },
};
