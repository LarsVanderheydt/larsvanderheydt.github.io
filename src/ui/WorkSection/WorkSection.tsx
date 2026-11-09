import { useCv } from '../../i18n/CvContext';
import { Disclosure } from '../Disclosure/Disclosure';
import { Section } from '../Section/Section';
import { Timeline } from '../Timeline/Timeline';

export function WorkSection() {
    const cv = useCv();

    return (
        <Section id="work" title={cv.sections.work.title}>
            <Timeline
                entries={cv.work.map((w) => ({
                    key: w.title,
                    period: w.period,
                    content: (
                        <Disclosure title={w.title} meta={w.period} summary={w.summary}>
                            <ul>
                                {w.details.map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>
                            <ul className="tags" aria-label={cv.labels.topics}>
                                {w.tags.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                        </Disclosure>
                    ),
                }))}
            />
        </Section>
    );
}
