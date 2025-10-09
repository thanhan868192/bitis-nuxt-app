<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const slides = [
    {
        image: '/images/1920x750__3__7dd4671de2a4436bb84c7f25b0bda4f9.jpg',
    },
    {
        image: '/images/1920x750__4_.png',
    },
    {
        image: '/images/1920x750__27__4581c6d4aa01400c8de10147f85a67aa.jpg',
    },
    {
        image: '/images/1920x750__3_.png',
    },
    {
        image: '/images/1920x750_ff370401f9444988914f88861bf73f60.png',
    },
    {
        image: '/images/1920x750__4__1ef2b72b0e6c4a0da8fe711571c6309b.jpg',
    },
]
</script>

<template>
    <div class="product-slider">
        <section class="relative w-full overflow-hidden">
            <ClientOnly>
                <Swiper :modules="[EffectFade, Pagination, Autoplay]" :slides-per-view="1" :loop="true"
                    :autoplay="{ delay: 4000, disableOnInteraction: false }" :effect="'fade'"
                    :fade-effect="{ crossFade: true }" :navigation="false" :pagination="{ clickable: true, }"
                    :spaceBetween="30" class="h-[450px] md:h-[550px]">
                    <SwiperSlide v-for="(slide, i) in slides" :key="i">
                        <NuxtImg :src="slide.image" alt="Slide image"
                            class="h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out"
                            format="webp" quality="100" preload sizes="100vw sm:100vw" placeholder loading="lazy" />
                    </SwiperSlide>
                </Swiper>
            </ClientOnly>
        </section>
    </div>
</template>

<style scoped>
.custom-nav {
    width: 40px;
    height: 40px;
    cursor: pointer;
}

.swiper-pagination-bullet {
    background-color: white !important;
    opacity: 0.6;
    transition: opacity 0.3s ease;
}

.swiper-pagination-bullet-active {
    background-color: #000 !important;
    opacity: 1;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 1.2s ease-in-out;
}
</style>