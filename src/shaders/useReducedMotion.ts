import { useSyncExternalStore } from 'react';

const query = '(prefers-reduced-motion: reduce)';

const subscribe = (onChange: () => void): (() => void) => {
    const media = window.matchMedia(query);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
};

export const useReducedMotion = (): boolean => useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);
