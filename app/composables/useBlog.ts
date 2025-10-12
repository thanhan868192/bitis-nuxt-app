import type { BlogPost } from '../../types/blog-post'

export const useBlog = () => {
    const { $blogServices, $loggerService } = useNuxtApp()

    const blogs = useState<BlogPost[]>('getBlogs', () => $blogServices.getBlogs())

    if (blogs.value) {
        $loggerService.info('Get Blogs successfully', blogs.value)
    }

    return { blogs }
}