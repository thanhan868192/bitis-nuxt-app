import { vi } from 'vitest'

export const useNuxtApp = () => ({
    $productService: { getProductCategories: () => [], getProductSliders: () => [] },
    $storeLocatorService: { getStoreLocators: () => [] },
    $galleryService: { getGalleries: () => [] },
    $blogServices: { getBlogs: () => [] },
    $loggerService: { info: vi.fn() },
})
