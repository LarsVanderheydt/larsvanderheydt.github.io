import { describe, expect, it } from 'vitest';

import { isLang, otherLang, resolveLang } from './lang';

describe('resolveLang', () => {
    it('lets a ?lang= link win over a stored choice and the browser locale', () => {
        expect(resolveLang('nl', 'en', ['en-US'])).toBe('nl');
        expect(resolveLang('en', 'nl', ['nl-BE'])).toBe('en');
    });

    it('ignores an unknown ?lang= value', () => {
        expect(resolveLang('fr', 'nl', ['en-US'])).toBe('nl');
    });

    it('keeps a stored choice over the browser locale', () => {
        expect(resolveLang(null, 'en', ['nl-BE'])).toBe('en');
        expect(resolveLang(null, 'nl', ['en-US'])).toBe('nl');
    });

    it('picks Dutch for any Dutch browser locale', () => {
        expect(resolveLang(null, null, ['nb-NO', 'nl-BE'])).toBe('nl');
        expect(resolveLang(null, null, ['NL'])).toBe('nl');
    });

    it('falls back to English for other locales or a bad stored value', () => {
        expect(resolveLang(null, null, ['nb-NO', 'en'])).toBe('en');
        expect(resolveLang(null, 'fr', [])).toBe('en');
    });
});

describe('isLang and otherLang', () => {
    it('accepts only the two languages and swaps between them', () => {
        expect([isLang('en'), isLang('nl'), isLang('de'), isLang(null)]).toEqual([true, true, false, false]);
        expect([otherLang('en'), otherLang('nl')]).toEqual(['nl', 'en']);
    });
});
