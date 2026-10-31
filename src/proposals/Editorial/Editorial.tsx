import { FilmGrain, MeshGradient } from 'shaders/react';

import { cv } from '../../content/cv';
import { Backdrop } from '../../shaders/Backdrop';
import { useReducedMotion } from '../../shaders/useReducedMotion';
import './Editorial.css';

export function Editorial() {
    const still = useReducedMotion();

    return (
        <div className="ed">
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <header className="ed-hero">
                <Backdrop fallback="linear-gradient(120deg, #f3ece0, #e9e4f5)">
                    <MeshGradient stops={[{ color: '#faf4ea', position: 0 }, { color: '#f1dfcf', position: 0.4 }, { color: '#dfe1f4', position: 0.75 }, { color: '#faf7f1', position: 1 }]} count={4} smoothness={0.9} speed={still ? 0 : 0.12} />
                    <FilmGrain strength={0.06} animated={false} />
                </Backdrop>
                <div className="ed-wrap ed-hero__inner">
                    <p className="ed-eyebrow">
                        {cv.role} · {cv.location}
                    </p>
                    <h1 className="ed-name">{cv.name}</h1>
                    <p className="ed-pitch">{cv.pitch}</p>
                    <a className="ed-cta" href={`mailto:${cv.email}`}>
                        Get in touch
                    </a>
                </div>
            </header>

            <main id="main" className="ed-wrap">
                <section aria-labelledby="ed-work" className="ed-section">
                    <h2 id="ed-work" className="ed-h2">
                        Selected work
                    </h2>
                    <ol className="ed-work">
                        {cv.highlights.map((h) => (
                            <li key={h.title}>
                                <h3>{h.title}</h3>
                                <p>{h.result}</p>
                                <span className="ed-meta">{h.period}</span>
                            </li>
                        ))}
                    </ol>
                </section>

                <section aria-labelledby="ed-exp" className="ed-section">
                    <h2 id="ed-exp" className="ed-h2">
                        Experience
                    </h2>
                    <ol className="ed-roles">
                        {cv.roles.map((r) => (
                            <li key={r.title + r.period}>
                                <span className="ed-meta">{r.period}</span>
                                <div>
                                    <h3>
                                        {r.title} <span className="ed-at">· {r.company}</span>
                                    </h3>
                                    <p>{r.summary}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                <section aria-labelledby="ed-skills" className="ed-section ed-columns">
                    <h2 id="ed-skills" className="ed-h2">
                        Skills & languages
                    </h2>
                    <dl>
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

            <footer className="ed-wrap ed-footer">
                <a href={`mailto:${cv.email}`}>{cv.email}</a>
                <a href={cv.github}>GitHub</a>
            </footer>
        </div>
    );
}
