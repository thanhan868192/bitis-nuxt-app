<script setup lang="ts">

</script>

<template>
    <section class="pt-16 items-center">
        <a class="banner-effect">
            <NuxtImg src="/images/banner_stitch_.jpg" class="w-full h-3/4 object-cover" alt="banner" loading="lazy" />
        </a>
    </section>
</template>

<style scoped>
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
    transition: transform 2000ms cubic-bezier(.2, .8, .2, 1);
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