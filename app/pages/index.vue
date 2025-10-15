<script setup lang="ts">
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css'
import 'swiper/css/navigation'
import { useProduct } from '~/composables/useProduct';
const { productCategories, productSliders, fetchProductCategories, fetchProductSliders } = await useProduct()

onMounted(() => {
    fetchProductCategories()
    fetchProductSliders()
})
</script>

<template>
    <NewHunter />
    <main>
        <ProductSlider :productSliders="productSliders" />
        <ProductList :productCategories="productCategories" />
        <MainBannerHome />
        <BannerHome />
        <BlogSlider />
    </main>
    <StoreHome />
    <NewsLetter />
    <Gallery />
    <Footer />
</template>

<style scoped></style>