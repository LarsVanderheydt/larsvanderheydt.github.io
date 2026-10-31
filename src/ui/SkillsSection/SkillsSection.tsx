import { cv } from '../../content/cv';
import { Section } from '../Section/Section';
import './SkillsSection.css';

export function SkillsSection() {
    return (
        <Section id="skills" title="Skills">
            <dl className="skills">
                {cv.skills.map((s) => (
                    <div key={s.group}>
                        <dt>{s.group}</dt>
                        <dd>
                            <ul className="tags">
                                {s.items.map((i) => (
                                    <li key={i}>{i}</li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                ))}
                {cv.education.map((e) => (
                    <div key={e.school}>
                        <dt>Education</dt>
                        <dd>
                            {e.degree}, {e.school}
                        </dd>
                    </div>
                ))}
                <div>
                    <dt>Languages</dt>
                    <dd>{cv.languages.join(' · ')}</dd>
                </div>
            </dl>
        </Section>
    );
}
