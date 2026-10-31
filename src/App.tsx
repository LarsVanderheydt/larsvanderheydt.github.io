import { ProposalPicker } from './proposals/ProposalPicker/ProposalPicker';
import { Split } from './proposals/Split/Split';
import type { Theme } from './proposals/Split/Split';

const options: { id: Theme; label: string }[] = [
    { id: 'night', label: 'Night' },
    { id: 'day', label: 'Day' },
];

const systemTheme = (): Theme => (window.matchMedia('(prefers-color-scheme: light)').matches ? 'day' : 'night');

export function App() {
    const param = new URLSearchParams(window.location.search).get('p');
    const theme = options.find((o) => o.id === param)?.id ?? systemTheme();

    return (
        <>
            <Split theme={theme} />
            <ProposalPicker current={theme} options={options} />
        </>
    );
}
