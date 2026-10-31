import { useCv } from '../../i18n/CvContext';
import { Disclosure } from '../Disclosure/Disclosure';
import { Section } from '../Section/Section';
import './ExperienceSection.css';

export function ExperienceSection() {
    const cv = useCv();

    return (
        <Section id="experience" title={cv.sections.experience.title}>
            <ol className="experience-list">
                {cv.roles.map((r) => (
                    <li key={r.title + r.period}>
                        <Disclosure
                            title={
                                <>
                                    {r.title} <span className="experience-list__company">· {r.company}</span>
                                </>
                            }
                            meta={`${r.period} · ${r.location}`}
                            summary={r.summary}
                        >
                            {r.details.length > 0 && (
                                <ul>
                                    {r.details.map((d) => (
                                        <li key={d}>{d}</li>
                                    ))}
                                </ul>
                            )}
                        </Disclosure>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
