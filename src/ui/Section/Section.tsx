import type { ReactNode } from 'react';

import './Section.css';

type Props = { id: string; title: string; children: ReactNode };

export function Section({ id, title, children }: Props) {
    const headingId = `${id}-title`;

    return (
        <section id={id} aria-labelledby={headingId} className="section">
            <h2 id={headingId} className="section__title">
                {title}
            </h2>
            {children}
        </section>
    );
}
