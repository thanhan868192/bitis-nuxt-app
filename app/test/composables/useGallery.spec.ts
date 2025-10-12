import { describe, expect, it, vi } from "vitest"

const mockGalleries = [{
    image: "/images/240x240_8_bfbc1f9a56f24921979f053befbb7d67.jpg",
    alt: "Gallery 1"
}]

const getGalleriesSpy = vi.fn(() => mockGalleries)
const infoSpy = vi.fn()

vi.mock('#app', () => ({
    useNuxtApp: () => ({
        $galleryService: { getGalleries: getGalleriesSpy },
        $loggerService: { info: infoSpy },
    })
}))

import { useGallery } from '~/composables/useGallery'

describe('useGallery', () => {
    it('getGalleries successfully with logger', () => {
        const { galleries } = useGallery()
        expect(galleries.value).toEqual(mockGalleries)
        expect(getGalleriesSpy).toHaveBeenCalledTimes(1)
        expect(infoSpy).toHaveBeenCalledWith('Get Galleries successfully', mockGalleries)

    })
})