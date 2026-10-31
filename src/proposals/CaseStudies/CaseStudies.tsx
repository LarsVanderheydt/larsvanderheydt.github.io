import { FilmGrain, MeshGradient } from 'shaders/react';

import { cv } from '../../content/cv';
import { Backdrop } from '../../shaders/Backdrop';
import { useReducedMotion } from '../../shaders/useReducedMotion';
import './CaseStudies.css';

export function CaseStudies() {
    const still = useReducedMotion();

    return (
        <div className="cs">
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <nav className="cs-wrap cs-nav" aria-label="Sections">
                <span className="cs-logo">LV</span>
                <ul>
                    <li>
                        <a href="#cases">Work</a>
                    </li>
                    <li>
                        <a href="#approach">Approach</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a className="cs-nav__cta" href={`mailto:${cv.email}`}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <header className="cs-wrap cs-hero">
                <Backdrop className="cs-hero__bg" fallback="linear-gradient(135deg, #1e3a8a, #0891b2)">
                    <MeshGradient stops={[{ color: '#0f1e4d', position: 0 }, { color: '#1d4ed8', position: 0.45 }, { color: '#38bdf8', position: 0.8 }, { color: '#e0f2fe', position: 1 }]} count={5} swirl={0.4} speed={still ? 0 : 0.25} />
                    <FilmGrain strength={0.05} animated={false} />
                </Backdrop>
                <div className="cs-hero__panel">
                    <h1>
                        {cv.name}
                        <span>{cv.role}</span>
                    </h1>
                    <p>{cv.pitch}</p>
                </div>
            </header>

            <main id="main" className="cs-wrap">
                <section id="cases" aria-labelledby="cs-cases" className="cs-section">
                    <h2 id="cs-cases">Selected work</h2>
                    <ul className="cs-cases">
                        {cv.highlights.map((h) => (
                            <li key={h.title}>
                                <article className="cs-case">
                                    <header>
                                        <h3>{h.title}</h3>
                                        <span>{h.period}</span>
                                    </header>
                                    <dl>
                                        <dt>Challenge</dt>
                                        <dd>{h.challenge}</dd>
                                        <dt>Result</dt>
                                        <dd>{h.result}</dd>
                                    </dl>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="approach" aria-labelledby="cs-approach" className="cs-section">
                    <h2 id="cs-approach">How I work</h2>
                    <ol className="cs-principles">
                        {cv.principles.map((p) => (
                            <li key={p.title}>
                                <h3>{p.title}</h3>
                                <p>{p.body}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section id="experience" aria-labelledby="cs-exp" className="cs-section cs-split">
                    <div>
                        <h2 id="cs-exp">Experience</h2>
                        <ol className="cs-roles">
                            {cv.roles.map((r) => (
                                <li key={r.title + r.period}>
                                    <div>
                                        <h3>{r.title}</h3>
                                        <p>{r.summary}</p>
                                    </div>
                                    <span>
                                        {r.company}
                                        <br />
                                        {r.period}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <aside aria-label="Skills and education" className="cs-aside">
                        {cv.skills.map((s) => (
                            <div key={s.level}>
                                <h3>{s.level}</h3>
                                <p>{s.items.join(' · ')}</p>
                            </div>
                        ))}
                        <div>
                            <h3>Education</h3>
                            <p>{cv.education[0].degree}</p>
                        </div>
                        <div>
                            <h3>Languages</h3>
                            <p>{cv.languages.join(' · ')}</p>
                        </div>
                    </aside>
                </section>
            </main>

            <footer className="cs-wrap cs-footer">
                <h2>Let’s talk.</h2>
                <a href={`mailto:${cv.email}`}>{cv.email}</a>
            </footer>
        </div>
    );
}
