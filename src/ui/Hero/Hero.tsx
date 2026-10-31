import { Suspense, lazy } from 'react';
import type { ReactNode } from 'react';

import { cv } from '../../content/cv';
import type { Theme } from '../../theme/theme';
import './Hero.css';

const HeroAurora = lazy(() => import('../../shaders/HeroAurora/HeroAurora'));

type Props = { theme: Theme; actions?: ReactNode };

export function Hero({ theme, actions }: Props) {
    return (
        <header className="hero">
            <div className="hero__backdrop" aria-hidden="true" data-print="hide">
                <Suspense>
                    <HeroAurora theme={theme} />
                </Suspense>
            </div>
            {actions && <div className="hero__actions page">{actions}</div>}
            <div className="hero__inner page">
                <p className="hero__eyebrow">
                    {cv.role} · {cv.location}
                </p>
                <h1 className="hero__name">{cv.name}</h1>
                <p className="hero__pitch">{cv.pitch}</p>
                <ul className="hero__focus" aria-label="Focus areas">
                    {cv.focus.map((f) => (
                        <li key={f.title}>
                            <strong>{f.title}</strong>
                            <span>{f.body}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
