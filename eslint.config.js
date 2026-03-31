import tanstackRouter from '@tanstack/eslint-plugin-router'
import storybook from 'eslint-plugin-storybook'
import tsEslint from 'typescript-eslint'

export default tsEslint.config(
  { ignores: ['dist', 'src/routeTree.gen.ts'] },
  // TypeScript parser for all TS/TSX files — rules handled by oxlint
  {
    files: ['**/*.{ts,tsx}'],
    extends: [tsEslint.configs.base],
  },
  // TanStack Router rules
  ...tanstackRouter.configs['flat/recommended'],
  // Storybook rules (story files only)
  ...storybook.configs['flat/recommended'],
)
