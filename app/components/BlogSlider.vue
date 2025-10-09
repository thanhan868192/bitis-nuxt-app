<script setup lang="ts">
import { posts } from '../../types/blog-post'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const items = posts
</script>

<template>
    <section class="blog-slider mt-16">
        <div class="container">
            <div class="flex items-end justify-between mb-6">
                <h2 class="text-2xl md:text-3xl font-bold">TIN TỨC BITIS</h2>
            </div>
            <ClientOnly>
                <Swiper :modules="[Navigation, Pagination, Autoplay, A11y]" :slides-per-view="1" :space-between="24"
                    :loop="false" :autoplay="{ delay: 4000, disableOnInteraction: false }" :navigation="true"
                    :breakpoints="{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                        1280: { slidesPerView: 4, spaceBetween: 26 }
                    }" :observer="true" :observe-parents="true" class="!pb-10">
                    <SwiperSlide v-for="post in items" :key="post.id" class="!h-auto">
                        <div class="h-full">
                            <BlogCard :post="post" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </ClientOnly>
        </div>
    </section>
</template>

<style scoped>
:deep(.swiper-slide) {
    display: flex;
    height: auto;
}

:deep(.swiper-slide > div) {
    display: flex;
    width: 100%;
}
</style>