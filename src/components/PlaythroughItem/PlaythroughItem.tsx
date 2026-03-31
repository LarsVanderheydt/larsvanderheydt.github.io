import type { PlaythroughStep } from '@/data/types'
import {CheckIcon} from "@/components/PlaythroughItem/CheckIcon.tsx";

type Props = {
  step: PlaythroughStep
  completed: boolean
  onToggle: (completed: boolean) => void
}

export function PlaythroughItem({ step, completed, onToggle }: Props) {
  return (
    <li>
      <button
        role="checkbox"
        aria-checked={completed}
        aria-label={`${step.label} — ${completed ? 'completed, click to undo' : 'mark as complete'}`}
        onClick={() => onToggle(!completed)}
        className={`flex items-start justify-between gap-4 w-full border-l-[3px] bg-[var(--color-surface)] p-4 text-left transition-all active:brightness-125 ${
          completed ? 'border-[var(--color-primary)]' : 'border-transparent'
        }`}
      >
          <div className="flex-1 min-w-0">
            <p
              className={`text-sm font-semibold transition-colors ${
                completed
                  ? 'text-[var(--color-text-muted)] line-through'
                  : 'text-[var(--color-text)]'
              }`}
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

            {step.hint && (
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)] italic">
                {step.hint}
              </p>
            )}
          </div>

          <div
            className="mt-0.5 shrink-0 transition-opacity"
            style={{ opacity: completed ? 1 : 0 }}
            aria-hidden="true"
          >
              <CheckIcon />
          </div>
      </button>
    </li>
  )
}
