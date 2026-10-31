import { useCv } from '../../i18n/CvContext';
import type { Theme } from '../../theme/theme';
import './ThemeToggle.css';

type Props = { theme: Theme; onToggle: () => void };

// Names the mode it switches to, like LanguageToggle names the language it switches to.
export function ThemeToggle({ theme, onToggle }: Props) {
    const { labels } = useCv();
    const isDark = theme === 'dark';

    return (
        <button type="button" className="pill-button theme-toggle" onClick={onToggle} data-print="hide">
            <span aria-hidden="true">{isDark ? '☀' : '☾'}</span>
            {isDark ? labels.lightMode : labels.darkMode}
        </button>
    );
}
