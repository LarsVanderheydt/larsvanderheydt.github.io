import { Dither, MeshGradient } from 'shaders/react';

import { cv } from '../../content/cv';
import { Backdrop } from '../../shaders/Backdrop';
import { useReducedMotion } from '../../shaders/useReducedMotion';
import './Dithered.css';

export function Dithered() {
    const still = useReducedMotion();

    return (
        <div className="dt">
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <header className="dt-hero">
                <div className="dt-wrap dt-hero__text">
                    <p className="dt-mono">
                        {cv.role} — {cv.location}
                    </p>
                    <h1>{cv.name}</h1>
                    <p className="dt-pitch">{cv.pitch}</p>
                    <a className="dt-cta" href={`mailto:${cv.email}`}>
                        {cv.email} ↗
                    </a>
                </div>
                <Backdrop className="dt-hero__art" fallback="linear-gradient(160deg, #ff5b1f, #111)">
                    <Dither pattern="bayer8" pixelSize={3} colorA="#111111" colorB="#ff5b1f">
                        <MeshGradient stops={[{ color: '#000000', position: 0 }, { color: '#ffffff', position: 1 }]} count={3} speed={still ? 0 : 0.3} />
                    </Dither>
                </Backdrop>
            </header>

            <main id="main" className="dt-wrap">
                <ul className="dt-facts" aria-label="At a glance">
                    {cv.facts.map((f) => (
                        <li key={f.label}>
                            <strong>{f.value}</strong> {f.label}
                        </li>
                    ))}
                </ul>

                <section aria-labelledby="dt-work" className="dt-section">
                    <h2 id="dt-work">
                        <span className="dt-mono">01</span> Work
                    </h2>
                    <ol className="dt-rows">
                        {cv.highlights.map((h) => (
                            <li key={h.title}>
                                <h3>{h.title}</h3>
                                <p>{h.result}</p>
                                <span className="dt-mono">{h.period}</span>
                            </li>
                        ))}
                    </ol>
                </section>

                <section aria-labelledby="dt-exp" className="dt-section">
                    <h2 id="dt-exp">
                        <span className="dt-mono">02</span> Experience
                    </h2>
                    <ol className="dt-rows">
                        {cv.roles.map((r) => (
                            <li key={r.title + r.period}>
                                <h3>
                                    {r.title}
                                    <small>{r.company}</small>
                                </h3>
                                <p>{r.summary}</p>
                                <span className="dt-mono">{r.period}</span>
                            </li>
                        ))}
                    </ol>
                </section>

                <section aria-labelledby="dt-skills" className="dt-section">
                    <h2 id="dt-skills">
                        <span className="dt-mono">03</span> Skills
                    </h2>
                    <dl className="dt-skills">
                        {cv.skills.map((s) => (
                            <div key={s.level}>
                                <dt className="dt-mono">{s.level}</dt>
                                <dd>{s.items.join(', ')}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </main>

            <footer className="dt-wrap dt-footer dt-mono">
                <a href={`mailto:${cv.email}`}>Email</a>
                <a href={cv.github}>GitHub</a>
                <span>{cv.languages.join(' · ')}</span>
            </footer>
        </div>
    );
}
