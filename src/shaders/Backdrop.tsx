import { useState } from 'react';
import type { ReactNode } from 'react';
import { Shader } from 'shaders/react';

import './Backdrop.css';

type Props = {
    className?: string;
    // CSS shown when WebGPU/WebGL is unavailable, so the layout never depends on the GPU.
    fallback: string;
    children: ReactNode;
};

export function Backdrop({ className = '', fallback, children }: Props) {
    const [unavailable, setUnavailable] = useState(false);

    return (
        <div className={`backdrop ${className}`} aria-hidden="true" style={{ background: fallback }}>
            {!unavailable && (
                <Shader disableTelemetry className="backdrop__canvas" onUnavailable={() => setUnavailable(true)}>
                    {children}
                </Shader>
            )}
        </div>
    );
}
