import { BlogService } from "~/services/blog-service"
import { GalleryService } from "~/services/gallery-service"
import { LoggerService } from "~/services/logger-service"
import { ProductService } from "~/services/product-service"
import { StoreLocatorService } from "~/services/store-locator-service"

export default defineNuxtPlugin(() => {
    const loggerService = new LoggerService('info')
    const productService = new ProductService()
    const galleryService = new GalleryService()
    const blogServices = new BlogService()
    const storeLocatorService = new StoreLocatorService()

    return {
        provide: {
            loggerService,
            productService,
            galleryService,
            blogServices,
            storeLocatorService
        }
    }
})