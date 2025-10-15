import type { ProductCategory, ProductSlider } from '../../types/product'

export class ProductService {
    async getProductCategories(): Promise<ProductCategory[]> {
        const response = await fetch('/data/products.json')
        return (await response.json()) as ProductCategory[]
    }

    async getProductSliders(): Promise<ProductSlider[]> {
        const response = await fetch('/data/slide.json')
        return (await response.json()) as ProductSlider[]
    }

}