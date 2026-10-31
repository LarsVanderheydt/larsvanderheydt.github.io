import { describe, expect, it } from 'vitest';

import { isLang, otherLang, resolveLang } from './lang';

describe('resolveLang', () => {
    it('keeps a stored choice over the browser locale', () => {
        expect(resolveLang('en', ['nl-BE'])).toBe('en');
        expect(resolveLang('nl', ['en-US'])).toBe('nl');
    });

    it('picks Dutch for any Dutch browser locale', () => {
        expect(resolveLang(null, ['nb-NO', 'nl-BE'])).toBe('nl');
        expect(resolveLang(null, ['NL'])).toBe('nl');
    });

    it('falls back to English for other locales or a bad stored value', () => {
        expect(resolveLang(null, ['nb-NO', 'en'])).toBe('en');
        expect(resolveLang('fr', [])).toBe('en');
    });
});

describe('isLang and otherLang', () => {
    it('accepts only the two languages and swaps between them', () => {
        expect([isLang('en'), isLang('nl'), isLang('de'), isLang(null)]).toEqual([true, true, false, false]);
        expect([otherLang('en'), otherLang('nl')]).toEqual(['nl', 'en']);
    });
});
