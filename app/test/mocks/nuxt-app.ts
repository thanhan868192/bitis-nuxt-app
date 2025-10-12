import { vi } from 'vitest'

export const useNuxtApp = () => ({
    $blogServices: { getBlogs: () => [] },
    $loggerService: { info: vi.fn() },
})
