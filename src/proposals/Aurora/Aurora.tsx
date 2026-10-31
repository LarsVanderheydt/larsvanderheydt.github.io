import { Aurora as AuroraShader, FilmGrain } from 'shaders/react';

import { cv } from '../../content/cv';
import { Backdrop } from '../../shaders/Backdrop';
import { useReducedMotion } from '../../shaders/useReducedMotion';
import './Aurora.css';

export function Aurora() {
    const still = useReducedMotion();

    return (
        <div className="au">
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <header className="au-hero">
                <Backdrop className="au-hero__bg" fallback="radial-gradient(80% 60% at 50% 0%, #1d3a5f, #0a0d14)">
                    <AuroraShader
                        colorA="#2dd4bf"
                        colorB="#6366f1"
                        colorC="#0ea5e9"
                        intensity={70}
                        height={160}
                        speed={still ? 0 : 1.5}
                    />
                    <FilmGrain strength={0.04} animated={false} />
                </Backdrop>
                <div className="au-wrap au-hero__inner">
                    <p className="au-badge">{cv.role}</p>
                    <h1 className="au-name">{cv.name}</h1>
                    <p className="au-pitch">{cv.pitch}</p>
                    <div className="au-actions">
                        <a className="au-btn au-btn--primary" href={`mailto:${cv.email}`}>
                            Contact me
                        </a>
                        <a className="au-btn" href="#work">
                            See the work
                        </a>
                    </div>
                </div>
            </header>

            <main id="main" className="au-wrap">
                <ul className="au-facts" aria-label="At a glance">
                    {cv.facts.map((f) => (
                        <li key={f.label}>
                            <strong>{f.value}</strong>
                            <span>{f.label}</span>
                        </li>
                    ))}
                </ul>

                <section id="work" aria-labelledby="au-work" className="au-section">
                    <h2 id="au-work">Impact</h2>
                    <ul className="au-cards">
                        {cv.highlights.map((h) => (
                            <li key={h.title} className="au-card">
                                <span className="au-period">{h.period}</span>
                                <h3>{h.title}</h3>
                                <p>{h.result}</p>
                                <ul className="au-tags" aria-label="Topics">
                                    {h.tags.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>

                <section aria-labelledby="au-exp" className="au-section">
                    <h2 id="au-exp">Experience</h2>
                    <ol className="au-timeline">
                        {cv.roles.map((r) => (
                            <li key={r.title + r.period}>
                                <h3>{r.title}</h3>
                                <p className="au-period">
                                    {r.company}, {r.location} · {r.period}
                                </p>
                                <p>{r.summary}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section aria-labelledby="au-skills" className="au-section">
                    <h2 id="au-skills">Toolbox</h2>
                    <ul className="au-tags au-tags--lg">
                        {cv.skills.flatMap((s) => s.items).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            </main>

            <footer className="au-wrap au-footer">
                <p>{cv.location}</p>
                <a href={`mailto:${cv.email}`}>{cv.email}</a>
                <a href={cv.github}>GitHub</a>
            </footer>
        </div>
    );
}
