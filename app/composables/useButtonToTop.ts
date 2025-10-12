
import { ref } from 'vue'
export const useButton = () => {
    const isVisible = ref(false)
    let raf = 0

    const onScroll = () => {
        if (typeof window === 'undefined') return

        if (raf) cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
            const doc = document.documentElement
            const y = window.scrollY || doc.scrollTop
            isVisible.value = y > 240
        })
    }

    const onToTop = () => {
        if (typeof window === 'undefined') return
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return { isVisible, onScroll, onToTop }
}