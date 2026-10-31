export type Lang = 'en' | 'nl';
export const langStorageKey = 'lang';

export const isLang = (value: unknown): value is Lang => value === 'en' || value === 'nl';

// A stored choice wins; otherwise Dutch for any Dutch browser locale (nl, nl-BE, nl-NL), English for the rest.
export const resolveLang = (stored: string | null, browser: readonly string[]): Lang => {
    if (isLang(stored)) return stored;
    return browser.some((locale) => locale.toLowerCase().startsWith('nl')) ? 'nl' : 'en';
};

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'nl' : 'en');
