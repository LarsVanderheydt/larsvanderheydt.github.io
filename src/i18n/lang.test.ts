import { describe, expect, it } from 'vitest';

import { isLang, otherLang, resolveLang } from './lang';

describe('resolveLang', () => {
    it('lets a ?lang= link win over a stored choice', () => {
        expect(resolveLang('nl', 'en')).toBe('nl');
        expect(resolveLang('en', 'nl')).toBe('en');
    });

    it('falls back to a stored choice when ?lang= is missing or unknown', () => {
        expect(resolveLang(null, 'nl')).toBe('nl');
        expect(resolveLang('fr', 'nl')).toBe('nl');
    });

    it('defaults to English', () => {
        expect(resolveLang(null, null)).toBe('en');
        expect(resolveLang('fr', 'de')).toBe('en');
    });
});

describe('isLang and otherLang', () => {
    it('accepts only the two languages and swaps between them', () => {
        expect([isLang('en'), isLang('nl'), isLang('de'), isLang(null)]).toEqual([true, true, false, false]);
        expect([otherLang('en'), otherLang('nl')]).toEqual(['nl', 'en']);
    });
});
