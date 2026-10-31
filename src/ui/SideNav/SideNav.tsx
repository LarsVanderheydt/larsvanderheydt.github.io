import { useCv } from '../../i18n/CvContext';
import './SideNav.css';

export function SideNav() {
    const cv = useCv();

    return (
        <aside className="side-nav" aria-label={cv.labels.introduction}>
            <p className="side-nav__intro">{cv.intro}</p>
            <nav aria-label={cv.labels.sections} data-print="hide">
                <ul className="side-nav__links">
                    {Object.entries(cv.sections).map(([id, s]) => (
                        <li key={id}>
                            <a href={`#${id}`}>{s.nav}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
