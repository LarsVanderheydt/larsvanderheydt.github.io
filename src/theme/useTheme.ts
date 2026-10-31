import { useEffect, useState } from 'react';

import { isTheme, otherTheme, resolveTheme, themeStorageKey } from './theme';
import type { Theme } from './theme';

const darkQuery = '(prefers-color-scheme: dark)';

const readStored = (): string | null => {
    try {
        return localStorage.getItem(themeStorageKey);
    } catch {
        return null;
    }
};

const writeStored = (theme: Theme): void => {
    try {
        localStorage.setItem(themeStorageKey, theme);
    } catch {
        // Private mode or blocked storage: the choice simply lasts for this visit.
    }
};

const initialTheme = (): Theme => {
    const fromDocument = document.documentElement.dataset.theme;
    return isTheme(fromDocument) ? fromDocument : resolveTheme(readStored(), window.matchMedia(darkQuery).matches);
};

export const useTheme = (): { theme: Theme; toggle: () => void } => {
    const [theme, setTheme] = useState<Theme>(initialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    useEffect(() => {
        const media = window.matchMedia(darkQuery);
        const follow = (event: MediaQueryListEvent): void => {
            if (readStored() === null) {
                setTheme(event.matches ? 'dark' : 'light');
            }
        };
        media.addEventListener('change', follow);
        return () => media.removeEventListener('change', follow);
    }, []);

    const toggle = (): void => {
        const next = otherTheme(theme);
        writeStored(next);
        setTheme(next);
    };

    return { theme, toggle };
};
