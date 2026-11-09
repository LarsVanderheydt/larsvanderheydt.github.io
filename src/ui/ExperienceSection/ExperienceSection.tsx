import { useCv } from '../../i18n/CvContext';
import { Disclosure } from '../Disclosure/Disclosure';
import { Section } from '../Section/Section';
import { Timeline } from '../Timeline/Timeline';
import './ExperienceSection.css';

export function ExperienceSection() {
    const cv = useCv();

    return (
        <Section id="experience" title={cv.sections.experience.title}>
            <Timeline
                entries={cv.roles.map((r) => ({
                    key: r.title + r.period,
                    period: r.period,
                    content: (
                        <Disclosure
                            title={
                                <>
                                    {r.title} <span className="experience__company">· {r.company}</span>
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
                    ),
                }))}
            />
        </Section>
    );
}
