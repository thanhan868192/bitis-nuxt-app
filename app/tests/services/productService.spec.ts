import { beforeEach, describe, expect, it } from "vitest";
import { ProductService } from "~/services/productService";
import productData from '../../../data/products.json';
import productSliderData from '../../../data/slide.json';

const mockProduct = productData
const mockProductSliderData = productSliderData

describe('ProductService', () => {
    let service: ProductService

    beforeEach(() => {
        service = new ProductService()
    })

    it('getProductCategories successfully', () => {
        const getProductCategories = service.getProductCategories()
        expect(getProductCategories).toEqual(mockProduct)
    })

    it('getProductSliders successfully', () => {
        const getProductSliders = service.getProductSliders()
        expect(getProductSliders).toEqual(mockProductSliderData)
    })
})