import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
    test: {
        environment: 'happy-dom',
        globals: true,
        setupFiles: ['./app/test/setupTests.ts'],
        include: ['app/test/**/*.{spec,test}.ts']
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './app'),
            '@': path.resolve(__dirname, './app'),
            '#app': path.resolve(__dirname, './app/test/setupTests.ts'),
            '#imports': path.resolve(__dirname, './app/test/mocks/nuxt-imports.ts'),
        },
    },
})
