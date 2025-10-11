<script setup lang="ts">
</script>

<template>
    <section class="main-banner-home">
        <div class="container mx-auto px-4">
            <div class="section-head items-center mb-11 flex justify-center">
                <h4>
                    CHÚNG TÔI CÓ GÌ MỚI
                </h4>
            </div>
            <div class="max-w-[1400px] mx-auto px-6">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <a class="banner-effect">
                        <NuxtImg src="/images/banner_giaytennis.avif" width="1024" height="576"
                            class="w-full h-56 md:h-64 object-cover" alt="Giày tennis" />
                    </a>
                    <a class="banner-effect">
                        <NuxtImg src="/images/banner_giaytay.avif" width="1024" height="576"
                            class="w-full h-56 md:h-64 object-cover" alt="Giày tây" />
                    </a>
                    <a class="banner-effect">
                        <NuxtImg src="/images/banner_gauchuatam_510x275.avif" width="1024" height="552"
                            class="w-full h-56 md:h-64 object-cover" alt="Gấu chữa tâm" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.main-banner-home {
    padding: 50px 0 30px 0;
    background: url('/images/bg_banner_center_e500361972e84b9c8cb5aa4950919c46.avif');
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

.banner-effect {
    position: relative;
    display: block;
    overflow: hidden;
}

.banner-effect::after {
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

.banner-effect img {
    transition: transform 700ms cubic-bezier(.2, .8, .2, 1);
    transform-origin: center center;
}

.banner-effect:hover img {
    transform: scale(1.06);
}

.banner-effect:hover::after {
    transform: translateX(120%) rotate(8deg);
}
</style>