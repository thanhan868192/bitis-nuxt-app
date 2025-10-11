import { EffectFade, Pagination, Autoplay } from 'swiper/modules'
import type { ProductCategory, ProductSlider } from '../../types/product'

export const useProduct = () => {
    const modules = [EffectFade, Pagination, Autoplay]

    const { $productService, $loggerService } = useNuxtApp()

    const productCategories = useState<ProductCategory[]>(
        'getProductCategories',
        () => $productService.getProductCategories()
    )

    if (productCategories.value) {
        $loggerService.info('Get Product Categories', productCategories.value)
    }

    const productSliders = useState<ProductSlider[]>(
        'getProductSliders',
        () => $productService.getProductSliders()
    )

    if (productSliders.value) {
        $loggerService.info('Get Product Categories', productCategories.value)
    }
    return { productCategories, productSliders, modules }
}