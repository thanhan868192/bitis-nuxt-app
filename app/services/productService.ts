import productData from '../../data/products.json';
import productSliderData from '../../data/slide.json';
import type { ProductCategory, ProductSlider } from '../../types/product'

export class ProductService {
    getProductCategories(): ProductCategory[] {
        return productData as ProductCategory[]
    }

    getProductSliders(): ProductSlider[] {
        return productSliderData as ProductSlider[]
    }
}