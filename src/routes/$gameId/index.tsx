import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { gamesById } from '@/data/games'
import { AchievementList } from '@/components/AchievementList/AchievementList'

export const Route = createFileRoute('/$gameId/')({
  loader: ({ params }) => {
    const game = gamesById[params.gameId]
    if (!game) throw notFound()
    return { game }
  },
  component: GamePage,
})

function GamePage() {
  const { game } = Route.useLoaderData()

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[1920px] flex-col gap-6 p-6 sm:p-10">
      <header className="flex items-center gap-3">
        <Link
          to="/"
          aria-label="Back to games"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[var(--color-text)]"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <h1 className="text-xl font-bold text-[var(--color-text)]">{game.name}</h1>
      </header>

      <div className="flex flex-col gap-8">
        {game.achievements.map((achievement) => (
          <AchievementList key={achievement.id} gameId={game.id} achievement={achievement} />
        ))}
      </div>
    </main>
  )
}
