import { cvs } from '../../content/cv';
import { otherLang } from '../../i18n/lang';
import type { Lang } from '../../i18n/lang';

type Props = { lang: Lang; onToggle: () => void };

// Names the language it switches to, in that language, so the label reads right to anyone who needs it.
export function LanguageToggle({ lang, onToggle }: Props) {
    const target = otherLang(lang);

    return (
        <button type="button" className="pill-button" lang={target} onClick={onToggle} data-print="hide">
            {cvs[target].languageName}
        </button>
    );
}
