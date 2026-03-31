import Dexie, { type EntityTable } from 'dexie'

export type Completion = {
  /** Composite key: `${gameId}:${achievementId}:${stepId}` */
  id: string
  gameId: string
  achievementId: string
  stepId: string
  completedAt: number
}

export const db = new Dexie('BoardGameAchievements') as Dexie & {
  completions: EntityTable<Completion, 'id'>
}

db.version(1).stores({
  // id is the primary key; gameId + achievementId are indexed for efficient lookups
  completions: 'id, gameId, achievementId',
})
