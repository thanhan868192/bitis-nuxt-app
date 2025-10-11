import blogData from '../../data/blogs.json'
import type { BlogPost } from '../../types/blog-post'

export class BlogService {
    getBlogs(): BlogPost[] {
        return blogData as BlogPost[]
    }
}