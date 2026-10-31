export type Lang = 'en' | 'nl';
export const langStorageKey = 'lang';

export const isLang = (value: unknown): value is Lang => value === 'en' || value === 'nl';

// A ?lang= link wins, then a stored choice, then Dutch for any Dutch browser locale (nl, nl-BE, nl-NL).
export const resolveLang = (param: string | null, stored: string | null, browser: readonly string[]): Lang => {
    if (isLang(param)) return param;
    if (isLang(stored)) return stored;
    return browser.some((locale) => locale.toLowerCase().startsWith('nl')) ? 'nl' : 'en';
};

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'nl' : 'en');
