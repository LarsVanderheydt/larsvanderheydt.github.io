import { useCv } from '../../i18n/CvContext';
import { Section } from '../Section/Section';
import './SkillsSection.css';

export function SkillsSection() {
    const cv = useCv();

    return (
        <Section id="skills" title={cv.sections.skills.title}>
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
                        <dt>{cv.labels.education}</dt>
                        <dd>
                            {e.degree}, {e.school}
                        </dd>
                    </div>
                ))}
                <div>
                    <dt>{cv.labels.languages}</dt>
                    <dd>{cv.languages.join(' · ')}</dd>
                </div>
            </dl>
        </Section>
    );
}
