import type { Gallery } from '../../types/gallery'

export const useGallery = () => {
    const { $galleryService, $loggerService } = useNuxtApp()

    const galleries = useState<Gallery[]>('getGalleries', () => $galleryService.getGalleries())

    if (galleries.value) {
        $loggerService.info('Get Galleries successfully', galleries.value)
    }

    return { galleries }
}