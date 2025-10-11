import type { BlogPost } from '../../types/blog-post'
import { A11y, Navigation } from 'swiper/modules'

export const useBlog = () => {
    const { $blogServices, $loggerService } = useNuxtApp()

    const modules = [Navigation, A11y]
    const breakpoints = {
        0: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
        1280: { slidesPerView: 4, spaceBetween: 26 }
    }

    const blogs = useState<BlogPost[]>('getBlogs', () => $blogServices.getBlogs())

    if (blogs.value) {
        $loggerService.info('Get Blogs successfully', blogs.value)
    }

    return { blogs, modules, breakpoints }
}