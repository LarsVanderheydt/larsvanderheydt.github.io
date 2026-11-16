import { useCv } from '../../i18n/CvContext';
import { Section } from '../Section/Section';
import './PersonalSection.css';

export function PersonalSection() {
    const cv = useCv();

    return (
        <Section id="personal" title={cv.sections.personal.title}>
            <dl className="personal">
                {cv.personal.map((p) => (
                    <div key={p.label}>
                        <dt>{p.label}</dt>
                        <dd>{p.value}</dd>
                    </div>
                ))}
            </dl>
        </Section>
    );
}
