<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { useButton } from '~/composables/useButtonToTop'

const { isVisible, onScroll, onToTop } = useButton()

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <client-only>
        <button id="btn-bt-top" :class="{ 'open': isVisible }" @click="onToTop" aria-label="Back to top">
            <NuxtImg class="brand-img" src="/images/arrow.svg" alt="arrow" width="90" height="90" />
        </button>
    </client-only>
</template>

<style scoped>
#btn-bt-top.open {
    opacity: 1;
    right: 0;
    transition: all 0.6s ease-in-out 0s;
}

#btn-bt-top {
    position: fixed;
    right: -100px;
    bottom: 13%;
    z-index: 99;
    cursor: pointer;
    width: auto;
    opacity: 0;
    transition: all 0.6s ease-in-out 0s;
}
</style>
