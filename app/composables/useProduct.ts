import type { ProductCategory } from '../../types/product'

export const useProduct = () => {
    const { $productService, $loggerService } = useNuxtApp()

    const productCategories = useState<ProductCategory[]>(
        'getProductCategories',
        () => $productService.getProductCategories()
    )

    if (productCategories.value) {
        $loggerService.info('Get Product Categories', productCategories.value)
    }
    return { productCategories }
}