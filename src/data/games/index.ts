import type { GameDefinition } from '../types'
import { arkhamHorrorLcg } from './arkham-horror-lcg'
import { duneImperiumUprising } from './dune-imperium-uprising'
import { harmonies } from './harmonies'
import { marvelChampions } from './marvel-champions'
import { spiritIsland } from './spirit-island'

export const games: GameDefinition[] = [marvelChampions, harmonies, arkhamHorrorLcg, spiritIsland, duneImperiumUprising]

export const gamesById: Record<string, GameDefinition> = Object.fromEntries(
  games.map((g) => [g.id, g]),
)
