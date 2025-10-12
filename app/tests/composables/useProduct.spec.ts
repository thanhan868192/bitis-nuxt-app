import { describe, expect, it, vi } from "vitest"

const mockProductCategories = [{
    categoryName: 'QUÀ TẶNG PHÁI ĐẸP',
    products: [
        {
            image: "/images/hsw002800kem__2__bc38e7de44b3451a98348058e0471663_a7d7cb258e594eae992c32ef55e0f832_large.jpg",
            hoverImage: "/images/hsw002800kem__10__ea3eecfd52284ae8bef96178e96c2aee_5426df713b85492e8298a176b8b163f6_large.jpg",
            title: "Giày Thể Thao Biti's Hunter Nữ Màu Xám Lợt",
            price: 882570,
            oldPrice: 949000,
            discount: 7,
            sizes: "5",
            colors: "1",
            isNew: true
        },
    ],
}]

const mockProductSliders = [{
    image: '/images/1920x750__3__7dd4671de2a4436bb84c7f25b0bda4f9.jpg',
    alt: 'Slider 1',
}]

const getProductCategoriesSpy = vi.fn(() => mockProductCategories)
const getProductSlidersSpy = vi.fn(() => mockProductSliders)
const infoSpy = vi.fn()

vi.mock('#app', () => ({
    useNuxtApp: () => ({
        $productService: {
            getProductCategories: getProductCategoriesSpy,
            getProductSliders: getProductSlidersSpy
        },
        $loggerService: { info: infoSpy },
    })
}))

import { useProduct } from '~/composables/useProduct'

describe('useProduct', () => {

    it('getProduct successfully with logger', () => {
        const { productCategories, productSliders } = useProduct()
        expect(productCategories.value).toEqual(mockProductCategories)
        expect(getProductCategoriesSpy).toHaveBeenCalledTimes(1)
        expect(infoSpy).toHaveBeenCalledWith('Get Product Categories', mockProductCategories)
        expect(productSliders.value).toEqual(mockProductSliders)
        expect(getProductSlidersSpy).toHaveBeenCalledTimes(1)
        expect(infoSpy).toHaveBeenCalledWith('Get Product Sliders', mockProductSliders)
    })
})