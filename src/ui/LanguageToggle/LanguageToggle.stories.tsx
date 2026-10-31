import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

import { LanguageToggle } from './LanguageToggle';

const meta: Meta<typeof LanguageToggle> = {
    title: 'UI/LanguageToggle',
    component: LanguageToggle,
    args: { onToggle: fn() },
};
export default meta;

type Story = StoryObj<typeof LanguageToggle>;

export const OffersDutch: Story = {
    args: { lang: 'en' },
    play: async ({ canvas, userEvent, args }) => {
        const button = canvas.getByRole('button', { name: 'Nederlands' });
        await expect(button).toHaveAttribute('lang', 'nl');

        await userEvent.click(button);
        await expect(args.onToggle).toHaveBeenCalledOnce();
    },
};

export const OffersEnglish: Story = {
    args: { lang: 'nl' },
    play: async ({ canvas }) => {
        await expect(canvas.getByRole('button', { name: 'English' })).toHaveAttribute('lang', 'en');
    },
};
