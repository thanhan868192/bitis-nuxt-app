<script setup lang="ts">
import { useProduct } from '~/composables/useProduct';
const { productCategories, productSliders } = useProduct()
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