import { useEffect, useState } from 'react';

import { langStorageKey, otherLang, resolveLang } from './lang';
import type { Lang } from './lang';

const readStored = (): string | null => {
    try {
        return localStorage.getItem(langStorageKey);
    } catch {
        return null;
    }
};

const writeStored = (lang: Lang): void => {
    try {
        localStorage.setItem(langStorageKey, lang);
    } catch {
        // Private mode or blocked storage: the choice simply lasts for this visit.
    }
};

const readParam = (): string | null => new URLSearchParams(location.search).get(langStorageKey);

// Keeps the address bar a shareable link to what the visitor is reading.
const writeParam = (lang: Lang): void => {
    const url = new URL(location.href);
    url.searchParams.set(langStorageKey, lang);
    history.replaceState(history.state, '', url);
};

export const useLang = (): { lang: Lang; toggle: () => void } => {
    const [lang, setLang] = useState<Lang>(() => resolveLang(readParam(), readStored()));

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const toggle = (): void => {
        const next = otherLang(lang);
        writeStored(next);
        writeParam(next);
        setLang(next);
    };

    return { lang, toggle };
};
