<script setup lang="ts">

</script>

<template>
    <section class="mainBannerHome">
        <div class="container mx-auto px-4">
            <div class="section-head items-center mb-11 flex justify-center">
                <h4>
                    CHÚNG TÔI CÓ GÌ MỚI
                </h4>
            </div>
            <div class="max-w-[1400px] mx-auto px-6">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <a class="bannerEffect">
                        <NuxtImg src="/images/banner_giaytennis.jpg" class="w-full h-56 md:h-64 object-cover" alt=""
                            loading="lazy" />
                    </a>
                    <a class="bannerEffect">
                        <NuxtImg src="/images/banner_giaytay.jpg" class="w-full h-56 md:h-64 object-cover" alt=""
                            loading="lazy" />
                    </a>
                    <a class="bannerEffect">
                        <NuxtImg src="/images/banner_gauchuatam_510x275.jpg" class="w-full h-56 md:h-64 object-cover"
                            alt="" loading="lazy" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.mainBannerHome {
    padding: 50px 0 30px 0;
    background: url('/images/bg_banner_center_e500361972e84b9c8cb5aa4950919c46.jpg');
    background-position: center top;
}

.section-head h4 {
    font-size: 18px;
    color: #000;
    font-weight: 500;
    padding: 0 0 10px 0;
    margin: 0;
    display: inline-block;
}

.bannerEffect {
    position: relative;
    display: block;
    overflow: hidden;
}

.bannerEffect::after {
    content: "";
    position: absolute;
    inset: -40%;
    background: linear-gradient(75deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.342) 50%,
            rgba(255, 255, 255, 0) 60%);
    transform: translateX(-120%) rotate(120deg);
    pointer-events: none;
    transition: transform 1500ms cubic-bezier(.2, .8, .2, 1);
}

.bannerEffect img {
    transition: transform 700ms cubic-bezier(.2, .8, .2, 1);
    transform-origin: center center;
}

.bannerEffect:hover img {
    transform: scale(1.06);
}

.bannerEffect:hover::after {
    transform: translateX(120%) rotate(8deg);
}
</style>