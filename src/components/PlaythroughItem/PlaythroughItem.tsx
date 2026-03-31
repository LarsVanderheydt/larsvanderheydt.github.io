import type { PlaythroughStep } from '@/data/types'

type Props = {
  step: PlaythroughStep
  completed: boolean
  onToggle: (completed: boolean) => void
}

export function PlaythroughItem({ step, completed, onToggle }: Props) {
  return (
    <li className="flex items-start gap-3 rounded-xl bg-[var(--color-surface)] p-4">
      <button
        role="checkbox"
        aria-checked={completed}
        aria-label={`Mark ${step.label} as ${completed ? 'incomplete' : 'complete'}`}
        onClick={() => onToggle(!completed)}
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-primary)] transition-colors"
        style={{
          backgroundColor: completed ? 'var(--color-primary)' : 'transparent',
        }}
      >
        {completed && (
          <svg
            viewBox="0 0 12 12"
            fill="none"
            className="h-3 w-3"
            aria-hidden="true"
          >
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <div className="flex-1">
        <p
          className={`text-sm font-semibold ${completed ? 'text-[var(--color-text-muted)] line-through' : 'text-[var(--color-text)]'}`}
        >
          {step.label}
        </p>
        <dl className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
          {step.setup.map((item) => (
            <div key={item.label} className="flex items-center gap-1 text-xs">
              <dt className="text-[var(--color-text-muted)]">{item.label}</dt>
              <dd className="font-medium text-[var(--color-accent)]">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </li>
  )
}
