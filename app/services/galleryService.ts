import type { Gallery } from '../../types/gallery'

export class GalleryService {
    async getGalleries(): Promise<Gallery[]> {
        const response = await fetch('/data/blogs.json')
        return (await response.json()) as Gallery[]
    }
}