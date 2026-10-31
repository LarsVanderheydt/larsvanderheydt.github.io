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

export const useLang = (): { lang: Lang; toggle: () => void } => {
    const [lang, setLang] = useState<Lang>(() => resolveLang(readStored(), navigator.languages));

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const toggle = (): void => {
        const next = otherLang(lang);
        writeStored(next);
        setLang(next);
    };

    return { lang, toggle };
};
