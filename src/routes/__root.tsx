import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { gamesById } from '@/data/games'

function Root() {
  const location = useRouterState({ select: (s) => s.location })

  useEffect(() => {
    // Extract gameId from paths like /$gameId
    const match = location.pathname.match(/^\/([^/]+)$/)
    const gameId = match?.[1]
    const game = gameId ? gamesById[gameId] : undefined
    document.documentElement.dataset.theme = game?.theme.id ?? ''
  }, [location.pathname])

  return <Outlet />
}

export const Route = createRootRoute({
  component: Root,
})
