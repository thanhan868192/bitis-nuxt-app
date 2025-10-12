import galleryData from '../../data/galleries.json';
import type { Gallery } from '../../types/gallery'

export class GalleryService {
    getGalleries(): Gallery[] {
        return galleryData as Gallery[]
    }
}