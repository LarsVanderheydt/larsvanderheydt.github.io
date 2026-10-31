import './ProposalPicker.css';

type Props = {
    current: string;
    options: { id: string; label: string }[];
};

// Spike-only navigation between proposals; not part of any design.
export function ProposalPicker({ current, options }: Props) {
    return (
        <nav className="picker" aria-label="Design proposals">
            {options.map(({ id, label }) => (
                <a key={id} href={`?p=${id}`} aria-current={id === current ? 'page' : undefined}>
                    {label}
                </a>
            ))}
        </nav>
    );
}
