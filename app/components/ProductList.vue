<script setup lang="ts">
import { useProduct } from '~/composables/useProduct';

const { productCategories } = useProduct()
</script>

<template>
    <section v-for="(category, i) in productCategories" :key="i" class="product-list mt-16">
        <div class="container mx-auto px-4 lg-padding">
            <div class="section-heading-tab-new">
                {{ category.categoryName }}
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 lg:px-[15px]">
                <ProductCard v-for="(product, pIndex) in category.products" :key="pIndex" :product="product"
                    :i="pIndex" />
            </div>
            <div v-if="i !== productCategories.length - 1"
                class="view-more-collection flex justify-center items-center mt-11">
                <a href="#">CÒN NHIỀU LẮM, XEM THÊM</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-heading-tab-new {
    text-shadow: 0 0.1em 20px #ff0000, 0.05em -0.03em 0 #ff0000, 0.05em 0.005em 0 #ff0000, 0em 0.08em 0 #ff0000, 0.05em 0.08em 0 #ff0000, 0px -0.03em 0 #ff0000, -0.03em -0.03em 0 #ff0000, -0.03em 0.08em 0 #ff0000, -0.03em 0 0 #ff0000;
    color: #ff0000 !important;
    line-height: 2.2rem;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 0 10px 0;
    text-align: center;
}

.view-more-collection a {
    border-bottom: 2px solid #000;
    display: inline-block;
    color: #000;
    font-weight: bold;
}

.view-more-collection a:hover {
    background: #000;
    color: #fff;
}
</style>