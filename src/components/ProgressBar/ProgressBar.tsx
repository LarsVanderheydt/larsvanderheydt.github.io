type Props = {
  completed: number
  total: number
}

export function ProgressBar({ completed, total }: Props) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div className="flex items-center gap-3">
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${completed} of ${total} completed`}
        className="h-2 flex-1 overflow-hidden rounded-full bg-white/10"
      >
        <div
          className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="min-w-[3rem] text-right text-sm font-medium tabular-nums text-[var(--color-text-muted)]">
        {pct}%
      </span>
    </div>
  )
}
