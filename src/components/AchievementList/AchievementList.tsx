import type { Achievement } from '@/data/types'
import { useCompletedSteps, toggleStep } from '@/db/hooks'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { PlaythroughItem } from '../PlaythroughItem/PlaythroughItem'

type Props = {
  gameId: string
  achievement: Achievement
}

export function AchievementList({ gameId, achievement }: Props) {
  const completedSteps = useCompletedSteps(gameId, achievement.id)

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text)]">{achievement.title}</h2>
        {achievement.description && (
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{achievement.description}</p>
        )}
        <div className="mt-3">
          <ProgressBar completed={completedSteps.size} total={achievement.steps.length} />
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {achievement.steps.map((step) => (
          <PlaythroughItem
            key={step.id}
            step={step}
            completed={completedSteps.has(step.id)}
            onToggle={(done) => toggleStep(gameId, achievement.id, step.id, done)}
          />
        ))}
      </ul>
    </section>
  )
}
