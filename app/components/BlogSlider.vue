<script setup lang="ts">
import { posts } from '../../types/blog-post.type'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const items = posts
</script>


<template>
    <section class="mt-16">
        <div class="container">
            <div class="flex items-end justify-between mb-4">
                <h2 class="text-2xl md:text-3xl font-bold">TIN TỨC BITIS</h2>
            </div>

            <ClientOnly>
                <Swiper :modules="[Navigation, Pagination, Autoplay, A11y]" :slides-per-view="1" :space-between="16"
                    :loop="true" :autoplay="{ delay: 4000, disableOnInteraction: false }"
                    :pagination="{ clickable: true }" :navigation="true" :breakpoints="{
                        640: { slidesPerView: 2, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1280: { slidesPerView: 4, spaceBetween: 24 }
                    }" class="!pb-10">
                    <SwiperSlide v-for="post in items" :key="post.id">
                        <BlogCard :post="post" />
                    </SwiperSlide>
                </Swiper>
            </ClientOnly>
        </div>
    </section>
</template>
<style scoped></style>