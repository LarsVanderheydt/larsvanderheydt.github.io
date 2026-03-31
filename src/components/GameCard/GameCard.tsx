import { Link } from '@tanstack/react-router'
import type { GameDefinition } from '@/data/types'
import { useCompletions } from '@/db/hooks'
import { ProgressBar } from '../ProgressBar/ProgressBar'

type Props = {
  game: GameDefinition
}

export function GameCard({ game }: Props) {
  const completions = useCompletions(game.id)
  const totalSteps = game.achievements.reduce((sum, a) => sum + a.steps.length, 0)
  const completedSteps = completions.length

  return (
    <Link
      to="/$gameId"
      params={{ gameId: game.id }}
      className="flex flex-col gap-3 rounded-2xl bg-[var(--color-surface)] p-5 transition-opacity active:opacity-70"
    >
      <h2 className="text-base font-bold text-[var(--color-text)]">{game.name}</h2>
      <ProgressBar completed={completedSteps} total={totalSteps} />
      <p className="text-xs text-[var(--color-text-muted)]">
        {completedSteps} / {totalSteps} plays completed
      </p>
    </Link>
  )
}
