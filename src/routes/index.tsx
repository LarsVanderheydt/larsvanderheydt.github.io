import { createFileRoute } from '@tanstack/react-router'
import { games } from '@/data/games'
import { GameCard } from '@/components/GameCard/GameCard'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col gap-6 bg-[var(--color-bg)] p-6">
      <h1 className="text-2xl font-bold text-[var(--color-text)]">Board Game Achievements</h1>
      <ul className="flex flex-col gap-4">
        {games.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </main>
  )
}
