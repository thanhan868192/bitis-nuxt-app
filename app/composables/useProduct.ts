import { useNuxtApp } from '#app'
import { useState } from '#imports'
import type { ProductCategory, ProductSlider } from '../../types/product'

export const useProduct = async () => {
    const { $productService, $loggerService } = useNuxtApp()

    const productCategories = useState<ProductCategory[]>(
        'getProductCategories',
        () => []
    )

    const fetchProductCategories = async () => {
        try {
            const data = await $productService.getProductCategories()
            productCategories.value = data
        } catch (error) {
            $loggerService.error('Failed to Product Categories blogs', error)
        }
    }

    watch(productCategories, (newVal) => {
        if (newVal && newVal.length) {
            $loggerService.info('Get Product Categories successfully', newVal)
        }
    })


    const productSliders = useState<ProductSlider[]>(
        'getProductSliders',
        () => []
    )

    const fetchProductSliders = async () => {
        try {
            const data = await $productService.getProductSliders()
            productSliders.value = data
        } catch (error) {
            $loggerService.error('Failed to get blogs', error)
        }
    }

    watch(productSliders, (newVal) => {
        if (newVal && newVal.length) {
            $loggerService.info('Get Blogs successfully', newVal)
        }
    })


    return { productCategories, productSliders, fetchProductCategories, fetchProductSliders }
}