import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
    test: {
        environment: 'happy-dom',
        globals: true,
        setupFiles: ['./app/tests/setupTests.ts'],
        include: ['app/tests/**/*.{spec,test}.ts']
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './app'),
            '@': path.resolve(__dirname, './app'),
            '#app': path.resolve(__dirname, './app/tests/setupTests.ts'),
            '#imports': path.resolve(__dirname, './app/tests/mocks/nuxt-imports.ts'),
        },
    },
})
