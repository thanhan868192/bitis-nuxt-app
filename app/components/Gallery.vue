<script setup lang="ts">
const gallerys = [
    {
        image: '/images/240x240_8_bfbc1f9a56f24921979f053befbb7d67.jpg',
        alt: 'Gallery 1'
    },
    {
        image: '/images/balo__1_.png',
        alt: 'Gallery 2'
    },
    {
        image: '/images/efffortless__1_.png',
        alt: 'Gallery 3'

    },
    {
        image: '/images/embrace__1_.png',
        alt: 'Gallery 4'

    },
    {
        image: '/images/gosto__1_.png',
        alt: 'Gallery 5'

    },
    {
        image: '/images/helio__1_.png',
        alt: 'Gallery 6'

    },
    {
        image: '/images/litebound__1_.png',
        alt: 'Gallery 7'

    },
    {
        image: '/images/ucare__1_.png',
        alt: 'Gallery 8'

    },
]
</script>

<template>
    <section class="gallery relative">
        <div class="flex flex-wrap">
            <div v-for="(gallery, i) in gallerys" :key="i" class="gallrey-item md:w-[calc(100%/8)] mobile-width">
                <a class="group-banner-hover" href="#" target="_blank" rel="noreferrer">
                    <NuxtImg :src="gallery.image" :alt="gallery.alt" width="320" height="320"
                        sizes="(max-width: 640px) 100vw, 320px" class="block w-full h-auto" placeholder />
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.group-banner-hover:hover:before {
    background: rgba(255, 255, 255, 0.5) none repeat scroll 0 0;
    bottom: 50%;
    top: 50%;
}

.group-banner-hover:hover:after {
    background: rgba(255, 255, 255, 0.5) none repeat scroll 0 0;
    left: 51%;
    right: 50%;
}

.group-banner-hover::after,
.group-banner-hover::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.5s ease-out 0s;
}

.group-banner-hover {
    display: block;
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
}

.gallrey-item {
    position: relative;
    overflow: hidden;
    float: left;
}
</style>