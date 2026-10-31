import { useState } from 'react';
import { Aurora, FilmGrain, Shader } from 'shaders/react';

import type { Theme } from '../../theme/theme';
import { useReducedMotion } from '../useReducedMotion';
import './HeroAurora.css';

const palette: Record<Theme, { colors: [string, string, string]; intensity: number }> = {
    dark: { colors: ['#2dd4bf', '#6366f1', '#0ea5e9'], intensity: 70 },
    light: { colors: ['#7dd3c8', '#a5b4fc', '#93c5fd'], intensity: 55 },
};

// Default export so the hero can lazy-load the shader library off the critical path.
export default function HeroAurora({ theme }: { theme: Theme }) {
    const still = useReducedMotion();
    const [unavailable, setUnavailable] = useState(false);
    const { colors, intensity } = palette[theme];

    if (unavailable) {
        return null;
    }

    return (
        <Shader disableTelemetry className="hero-aurora" onUnavailable={() => setUnavailable(true)}>
            <Aurora
                colorA={colors[0]}
                colorB={colors[1]}
                colorC={colors[2]}
                intensity={intensity}
                height={160}
                speed={still ? 0 : 1.5}
            />
            <FilmGrain strength={0.04} animated={false} />
        </Shader>
    );
}
