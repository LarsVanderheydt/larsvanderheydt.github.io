import type { ReactNode } from 'react';

import './Disclosure.css';

type Props = {
    title: ReactNode;
    meta: string;
    summary: string;
    children?: ReactNode;
};

// Native <details> keeps keyboard and screen-reader behaviour for free; without children it renders static.
export function Disclosure({ title, meta, summary, children }: Props) {
    const head = (
        <>
            <span className="disclosure__head">
                <span className="disclosure__title">{title}</span>
                <span className="disclosure__meta">{meta}</span>
            </span>
            <span className="disclosure__summary">{summary}</span>
        </>
    );

    if (!children) {
        return (
            <div className="disclosure">
                <div className="disclosure__trigger">{head}</div>
            </div>
        );
    }

    return (
        <details className="disclosure">
            <summary className="disclosure__trigger">{head}</summary>
            <div className="disclosure__body">{children}</div>
        </details>
    );
}
