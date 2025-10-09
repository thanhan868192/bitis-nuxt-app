export interface Product {
    image: string
    hoverImage?: string
    title: string
    price: number
    oldPrice?: number
    discount?: number
    sizes?: string
    colors?: string
    isNew?: boolean
}


export interface Category {
    categoryName: string
    products: Product[]
}