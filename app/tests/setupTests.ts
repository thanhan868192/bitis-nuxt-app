import { afterEach, vi } from 'vitest'
import { config } from '@vue/test-utils'

afterEach(() => {
    vi.clearAllMocks()
    vi.resetModules()
})

config.global.stubs = {
    NuxtLink: { template: '<a><slot /></a>' }
}
