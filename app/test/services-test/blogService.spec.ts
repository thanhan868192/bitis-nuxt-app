import { beforeEach, describe, expect, it, vi } from "vitest";

const mockBlogs = {
    "id": "b1",
    "title": "BITI’S LÀ ĐẠI DIỆN VIỆT NAM DUY NHẤT ĐƯỢC VINH DANH...",
    "image": "/images/hinh_1_-_cac_be_tham_gia_hoat_dong_tai_me_green_biti_s_bc5f67153a554efcb96a8bf475ec5fe1_large.jpg",
    "date": "2025-07-07"
}

vi.mock('~/data/blogs.json', () => ({
    default: mockBlogs
}))

import { BlogService } from "~/services/blogService";

describe('BlogService', () => {
    let service: BlogService

    beforeEach(() => {
        service = new BlogService()
    })

    it('getBlogs successfully', () => {
        const blogs = service.getBlogs()
        expect(blogs[0]).toMatchObject(mockBlogs)
    })
})