import { useCv } from '../../i18n/CvContext';
import { Section } from '../Section/Section';
import './AiSection.css';

export function AiSection() {
    const cv = useCv();

    return (
        <Section id="ai" title={cv.sections.ai.title}>
            <p className="ai__intro">{cv.ai.intro}</p>
            <ol className="ai__practices">
                {cv.ai.practices.map((p) => (
                    <li key={p.title}>
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
