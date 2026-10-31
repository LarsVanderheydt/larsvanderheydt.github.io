import { cv } from '../../content/cv';
import './SideNav.css';

type Props = { sections: { id: string; label: string }[] };

export function SideNav({ sections }: Props) {
    return (
        <aside className="side-nav" aria-label="Introduction">
            <p className="side-nav__intro">{cv.intro}</p>
            <nav aria-label="Sections" data-print="hide">
                <ul className="side-nav__links">
                    {sections.map((s) => (
                        <li key={s.id}>
                            <a href={`#${s.id}`}>{s.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
