import { BlogService } from "~/services/blogService"
import { GalleryService } from "~/services/galleryService"
import { LoggerService } from "~/services/loggerService"
import { ProductService } from "~/services/productService"
import { StoreLocatorService } from "~/services/storeLocatorService"

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