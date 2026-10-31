import { cv } from '../../content/cv';
import { Section } from '../Section/Section';
import './AiSection.css';

export function AiSection() {
    return (
        <Section id="ai" title="How I work with AI">
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
