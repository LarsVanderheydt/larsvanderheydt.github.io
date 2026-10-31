import { Aurora, FilmGrain } from 'shaders/react';

import { cv } from '../../content/cv';
import type { Role } from '../../content/cv';
import { Backdrop } from '../../shaders/Backdrop';
import { useReducedMotion } from '../../shaders/useReducedMotion';
import './Split.css';

export type Theme = 'night' | 'day';

const aurora: Record<Theme, { colors: [string, string, string]; intensity: number; fallback: string }> = {
    night: {
        colors: ['#2dd4bf', '#6366f1', '#0ea5e9'],
        intensity: 70,
        fallback: 'radial-gradient(80% 60% at 50% 0%, #1d3a5f, #0a0d14)',
    },
    day: {
        colors: ['#7dd3c8', '#a5b4fc', '#93c5fd'],
        intensity: 55,
        fallback: 'radial-gradient(80% 60% at 50% 0%, #dfe7f5, #faf7f1)',
    },
};

const sections = [
    { id: 'work', label: 'Work' },
    { id: 'ai', label: 'AI' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
];

export function Split({ theme }: { theme: Theme }) {
    const still = useReducedMotion();
    const { colors, intensity, fallback } = aurora[theme];

    return (
        <div className="sp" data-theme={theme}>
            <a className="skip-link" href="#main">
                Skip to content
            </a>

            <header className="sp-hero">
                <Backdrop className="sp-hero__bg" fallback={fallback}>
                    <Aurora
                        colorA={colors[0]}
                        colorB={colors[1]}
                        colorC={colors[2]}
                        intensity={intensity}
                        height={160}
                        speed={still ? 0 : 1.5}
                    />
                    <FilmGrain strength={0.04} animated={false} />
                </Backdrop>
                <div className="sp-wrap sp-hero__inner">
                    <p className="sp-eyebrow">
                        {cv.role} · {cv.location}
                    </p>
                    <h1 className="sp-name">{cv.name}</h1>
                    <p className="sp-pitch">{cv.pitch}</p>
                    <ul className="sp-focus" aria-label="Focus areas">
                        {cv.focus.map((f) => (
                            <li key={f.title}>
                                <strong>{f.title}</strong>
                                <span>{f.body}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>

            <div className="sp-wrap sp-body">
                <aside className="sp-side">
                    <p className="sp-intro">{cv.intro}</p>
                    <nav aria-label="Sections">
                        <ul className="sp-nav">
                            {sections.map((s) => (
                                <li key={s.id}>
                                    <a href={`#${s.id}`}>{s.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <main id="main" className="sp-main">
                    <section id="work" aria-labelledby="sp-work">
                        <h2 id="sp-work">Selected work</h2>
                        <ul className="sp-list">
                            {cv.work.map((w) => (
                                <li key={w.title}>
                                    <details className="sp-item">
                                        <summary>
                                            <span className="sp-item__head">
                                                <span className="sp-item__title">{w.title}</span>
                                                <span className="sp-meta">{w.period}</span>
                                            </span>
                                            <span className="sp-item__summary">{w.summary}</span>
                                        </summary>
                                        <ul className="sp-details">
                                            {w.details.map((d) => (
                                                <li key={d}>{d}</li>
                                            ))}
                                        </ul>
                                        <ul className="sp-tags" aria-label="Topics">
                                            {w.tags.map((t) => (
                                                <li key={t}>{t}</li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="ai" aria-labelledby="sp-ai">
                        <h2 id="sp-ai">How I work with AI</h2>
                        <p className="sp-lead">{cv.ai.intro}</p>
                        <ol className="sp-practices">
                            {cv.ai.practices.map((p) => (
                                <li key={p.title}>
                                    <h3>{p.title}</h3>
                                    <p>{p.body}</p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section id="experience" aria-labelledby="sp-exp">
                        <h2 id="sp-exp">Experience</h2>
                        <ol className="sp-list">
                            {cv.roles.map((r) => (
                                <li key={r.title + r.period}>
                                    {r.details.length > 0 ? (
                                        <details className="sp-item">
                                            <summary>
                                                <RoleHead role={r} />
                                            </summary>
                                            <ul className="sp-details">
                                                {r.details.map((d) => (
                                                    <li key={d}>{d}</li>
                                                ))}
                                            </ul>
                                        </details>
                                    ) : (
                                        <div className="sp-item">
                                            <RoleHead role={r} />
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section id="skills" aria-labelledby="sp-skills">
                        <h2 id="sp-skills">Skills</h2>
                        <dl className="sp-skills">
                            {cv.skills.map((s) => (
                                <div key={s.group}>
                                    <dt>{s.group}</dt>
                                    <dd>
                                        <ul className="sp-tags">
                                            {s.items.map((i) => (
                                                <li key={i}>{i}</li>
                                            ))}
                                        </ul>
                                    </dd>
                                </div>
                            ))}
                            <div>
                                <dt>Education</dt>
                                <dd>
                                    {cv.education[0].degree}, {cv.education[0].school}
                                </dd>
                            </div>
                            <div>
                                <dt>Languages</dt>
                                <dd>{cv.languages.join(' · ')}</dd>
                            </div>
                        </dl>
                    </section>
                </main>
            </div>

            <footer className="sp-wrap sp-footer">
                <p>
                    {cv.name} · {cv.location}
                </p>
                <ul>
                    <li>
                        <a href={`mailto:${cv.email}`}>{cv.email}</a>
                    </li>
                    {cv.links.map((l) => (
                        <li key={l.label}>
                            <a href={l.href}>{l.label}</a>
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    );
}

function RoleHead({ role }: { role: Role }) {
    return (
        <>
            <span className="sp-item__head">
                <span className="sp-item__title">
                    {role.title} <span className="sp-muted">· {role.company}</span>
                </span>
                <span className="sp-meta">{role.period}</span>
            </span>
            <span className="sp-item__summary">{role.summary}</span>
        </>
    );
}
