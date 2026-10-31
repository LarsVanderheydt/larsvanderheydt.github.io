/// <reference types="vitest/config" />
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    build: {
        // The lazy shader chunk is large by nature and loads after first paint.
        chunkSizeWarningLimit: 3000,
    },
    test: {
        projects: [
            {
                extends: true,
                test: { name: 'unit', include: ['src/**/*.test.ts'], environment: 'node' },
            },
            {
                extends: true,
                plugins: [storybookTest({ configDir: '.storybook' })],
                test: {
                    name: 'storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright(),
                        instances: [{ browser: 'chromium' }],
                    },
                },
            },
        ],
    },
});
