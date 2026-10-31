export type Lang = 'en' | 'nl';
export const langStorageKey = 'lang';

export const isLang = (value: unknown): value is Lang => value === 'en' || value === 'nl';

// A ?lang= link wins, then a stored choice; English otherwise, whatever the browser's language.
export const resolveLang = (param: string | null, stored: string | null): Lang => {
    if (isLang(param)) return param;
    if (isLang(stored)) return stored;
    return 'en';
};

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'nl' : 'en');
