import { useCv } from '../../i18n/CvContext';
import './Footer.css';

export function Footer() {
    const cv = useCv();

    return (
        <footer className="footer page">
            <p>
                {cv.name} · {cv.location}
            </p>
            <ul className="footer__links">
                <li>
                    <a href={`mailto:${cv.email}`}>{cv.email}</a>
                </li>
                {cv.links.map((l) => (
                    <li key={l.label}>
                        <a href={l.href}>{l.label}</a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
