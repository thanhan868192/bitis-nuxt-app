import { EffectFade, Pagination, Autoplay, Navigation, A11y } from "swiper/modules";

export const useSwiper = () => {
    const modules = [EffectFade, Pagination, Autoplay, Navigation, A11y]
    const breakpoints = {
        0: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
        1280: { slidesPerView: 4, spaceBetween: 26 }
    }

    const speed = ref(0)
    const isReady = ref(false)

    const onAfterInit = () => {
        requestAnimationFrame(() => {
            speed.value = 600
            isReady.value = true
        })
    }
    return { modules, breakpoints, onAfterInit };
}