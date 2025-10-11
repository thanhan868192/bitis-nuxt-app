import productData from '../../data/products.json';
import type { ProductCategory } from '../../types/product'

export class ProductService {
    getProductCategories(): ProductCategory[] {
        return productData as ProductCategory[]
    }
}