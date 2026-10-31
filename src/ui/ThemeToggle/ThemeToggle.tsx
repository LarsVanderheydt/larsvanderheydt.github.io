import { useCv } from '../../i18n/CvContext';
import type { Theme } from '../../theme/theme';
import './ThemeToggle.css';

type Props = { theme: Theme; onToggle: () => void };

export function ThemeToggle({ theme, onToggle }: Props) {
    const { labels } = useCv();
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            className="pill-button theme-toggle"
            aria-pressed={isDark}
            onClick={onToggle}
            data-print="hide"
        >
            <span aria-hidden="true">{isDark ? '☾' : '☀'}</span>
            {labels.darkMode}
        </button>
    );
}
