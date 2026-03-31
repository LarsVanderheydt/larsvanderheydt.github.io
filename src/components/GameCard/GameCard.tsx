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
    // data-theme makes CSS vars resolve to this game's palette inside the card
    <div data-theme={game.theme.id}>
      <Link
        to="/$gameId"
        params={{ gameId: game.id }}
        className="flex flex-col bg-[var(--color-surface)] transition-all active:brightness-125"
      >
        {/* Coloured header strip */}
        <div
          className="h-1.5 w-full"
          style={{ background: 'var(--color-primary)' }}
        />

        <div className="flex flex-col gap-3 p-5">
          <h2 className="text-base font-bold text-[var(--color-text)]">{game.name}</h2>
          <ProgressBar completed={completedSteps} total={totalSteps} />
          <p className="text-xs text-[var(--color-text-muted)]">
            {completedSteps} / {totalSteps} plays completed
          </p>
        </div>
      </Link>
    </div>
  )
}
