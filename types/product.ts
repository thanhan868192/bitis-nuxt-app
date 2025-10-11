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


export interface ProductCategory {
    categoryName: string
    products: Product[]
}

export interface ProductSlider {
    image: string
    alt: string
}