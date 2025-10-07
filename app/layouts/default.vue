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
            href: "//theme.hstatic.net/1000230642/1001205219/14/favicon-new.png?v=9181",
        },
    ],
})
</script>

<template>
    <div>
        <TopBar />
        <BaseNavigation />
        <slot />
    </div>
</template>
