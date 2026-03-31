import { createContext, useContext } from 'react'
import type { ComponentType } from 'react'
import type { Decorator, Preview } from '@storybook/react-vite'
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'
import '../src/styles/index.css'

// RouterProvider renders matched routes, not its React children.
// We pass the current Story via context so the root route component can render it.
const StorySlot = createContext<ComponentType>(() => null)

const rootRoute = createRootRoute({
  component: () => {
    const Story = useContext(StorySlot)
    return <Story />
  },
})

const router = createRouter({
  routeTree: rootRoute.addChildren([]),
  history: createMemoryHistory(),
})

const RouterDecorator: Decorator = (Story) => (
  <StorySlot.Provider value={Story}>
    <RouterProvider router={router} />
  </StorySlot.Provider>
)

const preview: Preview = {
  decorators: [RouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
