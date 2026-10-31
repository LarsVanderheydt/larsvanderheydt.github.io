import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource-variable/inter';
import type { Preview } from '@storybook/react-vite';

import '../src/styles/tokens.css';
import '../src/styles/base.css';

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Colour theme',
            toolbar: { icon: 'mirror', items: ['dark', 'light'], dynamicTitle: true },
        },
    },
    initialGlobals: { theme: 'dark' },
    decorators: [
        (Story, { globals }) => {
            document.documentElement.dataset.theme = globals.theme === 'light' ? 'light' : 'dark';
            return <Story />;
        },
    ],
    parameters: {
        // Fail tests on accessibility violations, not just report them.
        a11y: { test: 'error' },
    },
};

export default preview;
