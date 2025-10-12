import { describe, expect, it, vi } from "vitest"

const mockBlogs = [{
    id: 'b1',
    title: 'BITI’S LÀ ĐẠI DIỆN VIỆT NAM DUY NHẤT ĐƯỢC VINH DANH...',
    image: '/images/hinh_1.jpg',
    date: '2025-07-07'
}]

const getBlogsSpy = vi.fn(() => mockBlogs)
const infoSpy = vi.fn()

vi.mock('#app', () => ({
    useNuxtApp: () => ({
        $blogServices: { getBlogs: getBlogsSpy },
        $loggerService: { info: infoSpy },
    })
}))

import { useBlog } from '~/composables/useBlog'

describe('useBlog', () => {
    it('getBlogs successfully with logger', () => {
        const { blogs } = useBlog()
        expect(blogs.value).toEqual(mockBlogs)
        expect(getBlogsSpy).toHaveBeenCalledTimes(1)
        expect(infoSpy).toHaveBeenCalledWith('Get Blogs successfully', mockBlogs)

    })
})