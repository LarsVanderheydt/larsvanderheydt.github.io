import { describe, expect, it } from 'vitest';

import { isTheme, otherTheme, resolveTheme } from './theme';

describe('resolveTheme', () => {
    it('prefers a stored choice over the system setting', () => {
        expect(resolveTheme('light', true)).toBe('light');
        expect(resolveTheme('dark', false)).toBe('dark');
    });

    it('falls back to the system setting without a valid stored choice', () => {
        expect(resolveTheme(null, true)).toBe('dark');
        expect(resolveTheme('sepia', false)).toBe('light');
    });
});

describe('isTheme', () => {
    it('accepts only light and dark', () => {
        expect(isTheme('dark')).toBe(true);
        expect(isTheme('auto')).toBe(false);
        expect(isTheme(undefined)).toBe(false);
    });
});

describe('otherTheme', () => {
    it('flips between light and dark', () => {
        expect(otherTheme('light')).toBe('dark');
        expect(otherTheme('dark')).toBe('light');
    });
});
