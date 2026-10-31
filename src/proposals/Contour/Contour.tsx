import { ContourLines, SimplexNoise } from 'shaders/react';

import { cv } from '../../content/cv';
import { Backdrop } from '../../shaders/Backdrop';
import { useReducedMotion } from '../../shaders/useReducedMotion';
import './Contour.css';

export function Contour() {
    const still = useReducedMotion();

    return (
        <div className="ct">
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <header className="ct-side">
                <Backdrop fallback="#12261f">
                    <ContourLines levels={10} lineWidth={1} colorMode="custom" lineColor="#2f5b4a" backgroundColor="#12261f">
                        <SimplexNoise scale={1} speed={still ? 0 : 0.1} />
                    </ContourLines>
                </Backdrop>
                <div className="ct-side__inner">
                    <h1>{cv.name}</h1>
                    <p className="ct-role">{cv.role}</p>
                    <p className="ct-pitch">{cv.pitch}</p>
                    <nav aria-label="Sections">
                        <ul className="ct-nav">
                            <li>
                                <a href="#work">Work</a>
                            </li>
                            <li>
                                <a href="#experience">Experience</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                        </ul>
                    </nav>
                    <ul className="ct-links">
                        <li>
                            <a href={`mailto:${cv.email}`}>Email</a>
                        </li>
                        <li>
                            <a href={cv.github}>GitHub</a>
                        </li>
                    </ul>
                </div>
            </header>

            <main id="main" className="ct-main">
                <section id="work" aria-labelledby="ct-work">
                    <h2 id="ct-work">Work</h2>
                    <ol>
                        {cv.highlights.map((h) => (
                            <li key={h.title} className="ct-item">
                                <span className="ct-when">{h.period}</span>
                                <div>
                                    <h3>{h.title}</h3>
                                    <p>{h.result}</p>
                                    <p className="ct-tags">{h.tags.join(' / ')}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                <section id="experience" aria-labelledby="ct-exp">
                    <h2 id="ct-exp">Experience</h2>
                    <ol>
                        {cv.roles.map((r) => (
                            <li key={r.title + r.period} className="ct-item">
                                <span className="ct-when">{r.period}</span>
                                <div>
                                    <h3>
                                        {r.title} · {r.company}
                                    </h3>
                                    <p>{r.summary}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                <section id="skills" aria-labelledby="ct-skills">
                    <h2 id="ct-skills">Skills</h2>
                    <dl className="ct-skills">
                        {cv.skills.map((s) => (
                            <div key={s.level}>
                                <dt>{s.level}</dt>
                                <dd>{s.items.join(', ')}</dd>
                            </div>
                        ))}
                        <div>
                            <dt>Languages</dt>
                            <dd>{cv.languages.join(', ')}</dd>
                        </div>
                    </dl>
                </section>
            </main>
        </div>
    );
}
