import { useNuxtApp } from '#app'
import { useState } from '#imports'
import type { Gallery } from '../../types/gallery'

export const useGallery = async () => {
    const { $galleryService, $loggerService } = useNuxtApp()

    const galleries = useState<Gallery[]>('getGalleries', () => [])

    const fetchGalleries = async () => {
        try {
            const data = await $galleryService.getGalleries()
            galleries.value = data
        } catch (error) {
            $loggerService.error('Failed to get Galleries', error)
        }
    }
    watch(galleries, (newVal) => {
        if (newVal && newVal.length) {
            $loggerService.info('Get Galleries successfully', newVal)
        }
    })

    return { galleries, fetchGalleries }
}