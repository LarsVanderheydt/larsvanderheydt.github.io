import type { Theme } from '../../theme/theme';
import './ThemeToggle.css';

type Props = { theme: Theme; onToggle: () => void };

export function ThemeToggle({ theme, onToggle }: Props) {
    const isDark = theme === 'dark';

    return (
        <button type="button" className="theme-toggle" aria-pressed={isDark} onClick={onToggle} data-print="hide">
            <span aria-hidden="true">{isDark ? '☾' : '☀'}</span>
            Dark mode
        </button>
    );
}
