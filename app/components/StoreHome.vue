<script setup lang="ts"></script>

<template>
    <section class="store-home">
        <div class="container lg:mx-auto lg:px-20 sm:mx-auto sm:px-2 mobile-center">
            <div class="section-header flex items-center mb-7 ml-7">
                <h3 class="text-black font-medium text-[18px] m-0">
                    HỆ THỐNG CỬA HÀNG BITIS
                </h3>
            </div>
            <div class="section-content">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
                    <div class="lg:col-span-1">
                        <StoreLocator />
                    </div>
                    <div class="lg:col-span-2">
                        <NuxtImg
                            src="/images/map_biti_s_1024x1024_e7451fce602__1__dd3c94b0314e4ecbabbb0198510b97d3_1024x1024.jpg"
                            width="1024" height="758" class="w-full h-full max-w-full object-cover"
                            alt="Map map_biti_s_1024x1024_e7451fce602__1__dd3c94b0314e4ecbabbb0198510b97d3_1024x1024" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.store-home {
    margin-top: 20px;
    padding: 90px 0 30px 0;
    background: url('/images/bg_banner_center_e500361972e84b9c8cb5aa4950919c46.jpg');
    background-position: center top;
}
</style>