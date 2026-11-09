import type { ReactNode } from 'react';

import './Timeline.css';

export type TimelineEntry = { key: string; period: string; content: ReactNode };

type Props = { entries: TimelineEntry[] };

// Periods are validated as "YYYY", "YYYY–YYYY" or "YYYY–now/nu", so an open end is anything not ending in a year.
const isOngoing = (period: string): boolean => !/\d$/.test(period);

export function Timeline({ entries }: Props) {
    return (
        <ol className="timeline">
            {entries.map((e) => (
                <li key={e.key} className="timeline__entry" data-ongoing={isOngoing(e.period) || undefined}>
                    {e.content}
                </li>
            ))}
        </ol>
    );
}
