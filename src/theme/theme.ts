export type Theme = 'light' | 'dark';

export const themeStorageKey = 'theme';

export const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark';

// Mirrored by the inline script in index.html, which runs before React to avoid a flash of the wrong theme.
export const resolveTheme = (stored: string | null, prefersDark: boolean): Theme => {
    if (isTheme(stored)) {
        return stored;
    }
    return prefersDark ? 'dark' : 'light';
};

export const otherTheme = (theme: Theme): Theme => (theme === 'dark' ? 'light' : 'dark');
