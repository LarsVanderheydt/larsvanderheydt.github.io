import { useLiveQuery } from 'dexie-react-hooks'
import { db, type Completion } from './schema'

/** Returns all completions for a game, reactively updated on any DB change. */
export function useCompletions(gameId: string): Completion[] {
  return useLiveQuery(() => db.completions.where('gameId').equals(gameId).toArray(), [gameId]) ?? []
}

/** Returns a Set of completed stepIds for a specific achievement. */
export function useCompletedSteps(gameId: string, achievementId: string): Set<string> {
  const completions =
    useLiveQuery(
      () =>
        db.completions
          .where('achievementId')
          .equals(achievementId)
          .and((c) => c.gameId === gameId)
          .toArray(),
      [gameId, achievementId],
    ) ?? []

  return new Set(completions.map((c) => c.stepId))
}

/** Marks or unmarks a step as completed in the DB. Plain async function — not a hook. */
export async function toggleStep(
  gameId: string,
  achievementId: string,
  stepId: string,
  completed: boolean,
): Promise<void> {
  const id = `${gameId}:${achievementId}:${stepId}`
  if (completed) {
    await db.completions.put({ id, gameId, achievementId, stepId, completedAt: Date.now() })
  } else {
    await db.completions.delete(id)
  }
}
