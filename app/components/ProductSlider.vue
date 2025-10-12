<script setup lang="ts">
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiper } from '~/composables/useSwiper'

const { productSliders } = useProduct()
const { modules, speed, eagerIndex, onAfterInit } = useSwiper()

useHead(() => ({
    link: productSliders.value?.[0]
        ? [{
            rel: 'preload',
            as: 'image',
            href: productSliders.value[0].image,
            imagesizes: '100vw',
            fetchpriority: 'high'
        }]
        : []
}))
</script>

<template>
    <section class="product-slider relative w-full overflow-hidden">
        <Swiper :modules="modules" :slides-per-view="1" :spaceBetween="30" :loop="true" :speed="speed"
            :autoplay="{ delay: 4000, disableOnInteraction: false }" :effect="'fade'" :fade-effect="{ crossFade: true }"
            :pagination="{ clickable: true, }" @afterInit="onAfterInit">
            <SwiperSlide v-for="(slide, i) in productSliders" :key="i">
                <NuxtImg :src="slide.image" :loading="i === eagerIndex ? 'eager' : 'lazy'" :alt="slide.alt"
                    :preload="i === eagerIndex" :fetchpriority="i === eagerIndex ? 'high' : 'low'" decoding="sync"
                    width="1920" height="750" class="h-full w-full object-cover" quality="65" sizes="100vw sm:100vw"
                    format="webp" placeholder />
            </SwiperSlide>
        </Swiper>
    </section>
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