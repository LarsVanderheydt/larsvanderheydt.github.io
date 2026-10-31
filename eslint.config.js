import { configs as storybook } from 'eslint-plugin-storybook';
import tsEslint from 'typescript-eslint';

// oxlint covers the general rules; ESLint only runs plugins oxlint has no equivalent for.
export default tsEslint.config(
    { ignores: ['dist', 'storybook-static'] },
    { files: ['**/*.{ts,tsx}'], extends: [tsEslint.configs.base] },
    ...storybook['flat/recommended'],
);
