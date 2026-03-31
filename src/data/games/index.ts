import type { GameDefinition } from '../types'
import { marvelChampions } from './marvel-champions'

export const games: GameDefinition[] = [marvelChampions]

export const gamesById: Record<string, GameDefinition> = Object.fromEntries(
  games.map((g) => [g.id, g]),
)
