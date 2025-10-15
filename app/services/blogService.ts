import type { BlogPost } from '../../types/blog-post'
export class BlogService {
    async getBlogs(): Promise<BlogPost[]> {
        const response = await fetch('/data/blogs.json')
        return (await response.json()) as BlogPost[]
    }
}