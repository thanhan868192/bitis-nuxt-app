<script setup lang="ts">
import ProductCard from '~/components/ProductCard.vue'
import data from '../../data/product.json';
const datas = ref(data);
</script>

<template>
    <div class="new_hunter mt-[80px] bg-[#ff3D00] h-16">
        <div class="w-full px-4">
            <a class="flex text-4xl leading-[19.5px] items-center relative justify-center w-full h-full text-black">
                <svg class="absolute left-0 top-[10px]" width="127" height="41" viewBox="0 0 127 41" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M35.0821 0H61.3929L50.3446 10.6078C56.6096 9.05901 63.2146 8.10439 70.2766 7.5087L78.2494 0H105.814L96.7028 7.62784C109.573 8.34266 121.078 10.0121 127 11.9183C115.041 12.3949 101.031 12.7523 84.4005 15.2557C77.6801 16.2088 71.5305 17.1619 65.0378 18.593C71.5305 17.8782 79.1617 17.9974 84.4005 18.9505L58.659 41H38.4992L59.1158 20.1434C55.1294 21.2156 50.8015 22.5276 46.1305 24.3147C30.6403 30.0363 18.9088 41 18.9088 41H0L35.0821 0Z"
                        fill="#111111"></path>
                </svg>
            </a>
        </div>
    </div>
    <main>
        <ProductSlider />
        <section v-for="(data, i) in datas" :key="i" class=" mt-16">
            <div class="container">
                <div class="sectionHeading-tab-new">
                    {{ data.category }}
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-15">
                    <ProductCard v-for="(product, pIndex) in data.products" :key="pIndex" :product="product" />

                </div>
                <div v-if="i !== datas.length - 1" class="view-more-collection flex justify-center items-center mt-11">
                    <a href="/collections/20102025-san-pham-nu">CÒN NHIỀU LẮM, XEM THÊM</a>
                </div>
            </div>
        </section>
        <MainBannerHome />
        <BannerHome />
        <BlogSlider />
    </main>
    <section class="store-home text-red-600">store-home</section>
    <section class="footer-newsletter text-red-600">footer-newsletter</section>
    <section class="footer-gallery text-red-600">footer-gallery</section>
    <BaseFooter />
</template>

<style scoped>
.new_hunter {
    color: #e60909;
}

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