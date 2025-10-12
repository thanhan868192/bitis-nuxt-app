<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useBlog } from '~/composables/useBlog'
import { useSwiper } from '~/composables/useSwiper'

const { blogs } = useBlog()
const { modules, breakpoints } = useSwiper()
</script>

<template>
    <section class="blog-slider relative pt-16">
        <div class="container mx-auto px-4">
            <header class="flex items-center justify-between mb-4 pb-1 border-b border-gray-200">
                <h3 class="text-black font-medium text-[18px]">Tin tức &amp; Sự kiện</h3>
            </header>
            <Swiper :modules="modules" :breakpoints="breakpoints" :loop="false" :navigation="true" :observer="true"
                :observe-parents="true" class="!pb-10">
                <SwiperSlide v-for="p in blogs" :key="p.id">
                    <BlogCard :post="p" />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
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
