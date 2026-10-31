import { cv } from '../../content/cv';
import { Disclosure } from '../Disclosure/Disclosure';
import { Section } from '../Section/Section';
import './WorkSection.css';

export function WorkSection() {
    return (
        <Section id="work" title="Selected work">
            <ul className="work-list">
                {cv.work.map((w) => (
                    <li key={w.title}>
                        <Disclosure title={w.title} meta={w.period} summary={w.summary}>
                            <ul>
                                {w.details.map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>
                            <ul className="tags" aria-label="Topics">
                                {w.tags.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                        </Disclosure>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
