<script setup lang="ts">
useSeoMeta({
    title: "Biti’s Official Website",
    description: "Biti’s Vietnam – Official Online Store",
    ogTitle: "Biti’s Official Website",
    ogDescription: "Discover premium footwear from Biti’s Vietnam",
})

useHead({
    link: [
        {
            rel: "shortcut icon",
            href: "/images/favicon-new.avif",
        },
    ],
})
</script>

<template>
    <div>
        <TopBar />
        <Navigation />
        <slot />
    </div>
</template>
