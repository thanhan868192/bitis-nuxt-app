export interface BlogPost {
    id: string
    title: string
    excerpt: string
    image: string
    date: string
}

export const posts: BlogPost[] = [
    {
        id: '1',
        title: "BITI’S LÀ ĐẠI DIỆN VIỆT NAM DUY NHẤT...",
        excerpt: "Biti’s vinh danh tại hạng mục Investment in People...",
        image: '/images/banner_giaytennis.jpg',
        date: '2025-07-07'
    },
    {
        id: '2',
        title: "Biti’s “tiết lộ” bí mật vận hành tinh gọn...",
        excerpt: "Hành trình 43 năm cùng nhà máy...",
        image: '/images/banner_giaytennis.jpg',
        date: '2025-07-07'
    },
    {
        id: '3',
        title: "Biti’s được vinh danh là Doanh nghiệp tiêu biểu...",
        excerpt: "Vinh danh thương hiệu TP.HCM...",
        image: '/images/banner_giaytennis.jpg',
        date: '2025-07-07'
    },
    {
        id: '4',
        title: "Biti's giữ vững Danh hiệu Hàng Việt Nam chất lượng cao",
        excerpt: "29 năm liên tiếp...",
        image: '/images/banner_giaytennis.jpg',
        date: '2025-07-07'
    },
]