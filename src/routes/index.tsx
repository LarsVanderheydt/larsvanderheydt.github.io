import { createFileRoute } from '@tanstack/react-router'
import { games } from '@/data/games'
import { GameCard } from '@/components/GameCard/GameCard'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const totalGames = games.length

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[1920px] flex-col gap-10 p-6 sm:p-10">
      <header className="flex flex-col gap-2 pt-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          {totalGames} {totalGames === 1 ? 'game' : 'games'}
        </p>
        <h1 className="text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl">
          Achievements
        </h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Track your plays, complete the journey.
        </p>
      </header>

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
