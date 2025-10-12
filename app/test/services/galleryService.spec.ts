import { beforeEach, describe, expect, it } from "vitest";
import { GalleryService } from "~/services/galleryService";

const mockGallery = {
    image: "/images/240x240_8_bfbc1f9a56f24921979f053befbb7d67.jpg",
    alt: "Gallery 1"
}

describe('GlleryService', () => {
    let service: GalleryService

    beforeEach(() => {
        service = new GalleryService()
    })

    it('getGalleries successfully', () => {
        const getGalleries = service.getGalleries()
        expect(getGalleries[0]).toMatchObject(mockGallery)
    })
})