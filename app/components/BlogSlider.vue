<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { BlogPost } from '../../types/blog-post'
import data from '../../data/blogs.json'
const posts = ref(data as BlogPost[]);

const modules = [Navigation, A11y]
const breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 16 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
    1280: { slidesPerView: 4, spaceBetween: 26 }
}
</script>

<template>
    <ClientOnly>
        <section class="blog-slider relative pt-16">
            <div class="container mx-auto px-4">
                <header class="flex items-center justify-between mb-4 pb-1 border-b border-gray-200">
                    <h3 class="text-black font-medium text-[18px]">Tin tức &amp; Sự kiện</h3>
                </header>
                <Swiper :modules="modules" :breakpoints="breakpoints" :loop="false" :navigation="true" :observer="true"
                    :observe-parents="true" class="!pb-10">
                    <SwiperSlide v-for="p in posts" :key="p.id">
                        <BlogCard :post="p" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </ClientOnly>
</template>

<style scoped>
:deep(.swiper-button-prev) {
    margin-left: 15px;
}

:deep(.swiper-button-next) {
    margin-right: 15px;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
    color: black;
    width: 20px;
    height: 20px;
}
</style>
