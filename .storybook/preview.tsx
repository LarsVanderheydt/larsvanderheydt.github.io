import '@fontsource-variable/fraunces/opsz.css';
import '@fontsource-variable/inter';
import type { Preview } from '@storybook/react-vite';

import { cvs } from '../src/content/cv';
import { CvContext } from '../src/i18n/CvContext';
import { isLang } from '../src/i18n/lang';
import '../src/styles/tokens.css';
import '../src/styles/base.css';

const preview: Preview = {
    globalTypes: {
        theme: {
            description: 'Colour theme',
            toolbar: { icon: 'mirror', items: ['dark', 'light'], dynamicTitle: true },
        },
        lang: {
            description: 'Language',
            toolbar: { icon: 'globe', items: ['en', 'nl'], dynamicTitle: true },
        },
    },
    initialGlobals: { theme: 'dark', lang: 'en' },
    decorators: [
        (Story, { globals }) => {
            document.documentElement.dataset.theme = globals.theme === 'light' ? 'light' : 'dark';
            const lang = isLang(globals.lang) ? globals.lang : 'en';
            document.documentElement.lang = lang;
            return (
                <CvContext value={cvs[lang]}>
                    <Story />
                </CvContext>
            );
        },
    ],
    parameters: {
        // Fail tests on accessibility violations, not just report them.
        a11y: { test: 'error' },
    },
};

export default preview;
