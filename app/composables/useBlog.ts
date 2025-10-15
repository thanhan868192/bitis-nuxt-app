import { useNuxtApp } from '#app'
import { useState } from '#imports'
import type { BlogPost } from '../../types/blog-post'

export const useBlog = async () => {
    const { $blogServices, $loggerService } = useNuxtApp()

    const blogs = useState<BlogPost[]>('getBlogs', () => [])

    const fetchBlogs = async () => {
        try {
            const data = await $blogServices.getBlogs()
            blogs.value = data
        } catch (error) {
            $loggerService.error('Failed to get blogs', error)
        }
    }

    watch(blogs, (newVal) => {
        if (newVal && newVal.length) {
            $loggerService.info('Get Blogs successfully', newVal)
        }
    })

    return {
        blogs,
        fetchBlogs
    }
}