<script setup lang="ts">
import data from '../../data/product.json';

const datas = ref(data);
</script>

<template>
    <section v-for="(data, i) in datas" :key="i" class="mt-16">
        <div class="container mx-auto px-4">
            <div class="sectionHeading-tab-new">
                {{ data.category }}
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-15">
                <ProductCard v-for="(product, pIndex) in data.products" :key="pIndex" :product="product" />

            </div>
            <div v-if="i !== datas.length - 1" class="view-more-collection flex justify-center items-center mt-11">
                <a href="#">CÒN NHIỀU LẮM, XEM THÊM</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.sectionHeading-tab-new {
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