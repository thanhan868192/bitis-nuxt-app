<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation';

const slides = [
    {
        image: '/images/1920x750__3__7dd4671de2a4436bb84c7f25b0bda4f9.jpg',
    },
    {
        image: '/images/1920x750__4__1ef2b72b0e6c4a0da8fe711571c6309b.jpg',
    },
    {
        image: '/images/1920x750__3__7dd4671de2a4436bb84c7f25b0bda4f9.jpg',
    },
    {
        image: '/images/1920x750__4__1ef2b72b0e6c4a0da8fe711571c6309b.jpg',
    },
    {
        image: '/images/1920x750__3__7dd4671de2a4436bb84c7f25b0bda4f9.jpg',
    },
    {
        image: '/images/1920x750__4__1ef2b72b0e6c4a0da8fe711571c6309b.jpg',
    },
]
</script>

<template>
    <div class="product-slider">
        <section class="relative w-full overflow-hidden">
            <!-- <Swiper :modules="[EffectFade, Navigation, Pagination, Autoplay]" :slides-per-view="1" :loop="true"
                :autoplay="{ delay: 4000, disableOnInteraction: false }" :effect="'fade'"
                :fade-effect="{ crossFade: true }" :navigation="true" :pagination="{ clickable: true, }"
                :spaceBetween="30" class="h-[450px] md:h-[550px]">
                <SwiperSlide v-for="(slide, i) in slides" :key="i">
                    <div class="h-full bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
                        :style="{ backgroundImage: `url(${slide.image})` }">
                    </div>
                </SwiperSlide>
            </Swiper> -->
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