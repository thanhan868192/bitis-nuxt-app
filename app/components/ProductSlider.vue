<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';

const { productSliders, modules } = useProduct()
</script>

<template>
    <section class="product-slider relative w-full overflow-hidden">
        <ClientOnly>
            <Swiper :modules="modules" :slides-per-view="1" :spaceBetween="30" :loop="true"
                :autoplay="{ delay: 4000, disableOnInteraction: false }" :effect="'fade'"
                :fade-effect="{ crossFade: true }" :pagination="{ clickable: true, }" class="h-[750px] md:h-[850px]">
                <SwiperSlide v-for="(slide, i) in productSliders" :key="i">
                    <NuxtImg :src="slide.image" :loading="i === 0 ? 'eager' : 'lazy'" :alt="slide.alt"
                        :preload="i === 0" :fetchpriority="i === 0 ? 'high' : 'low'" decoding="async" width="1536"
                        height="750" class="h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out"
                        format="webp" quality="65" sizes="100vw" />
                </SwiperSlide>
            </Swiper>
        </ClientOnly>
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