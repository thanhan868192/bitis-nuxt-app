<script setup lang="ts">
import type { BlogPost } from '../../types/blog-post.type'

defineProps<{ post: BlogPost }>()
</script>

<template>
    <article
        class="group rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
        <div class="relative aspect-[16/10] overflow-hidden">
            <NuxtImg :src="post.image" alt=""
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />
            <!-- simple shine -->
            <span class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent
               rotate-6 group-hover:translate-x-full transition-transform duration-700">
            </span>
        </div>

        <div class="p-4">
            <time class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString() }}</time>
            <p class="mt-2 text-sm text-gray-600 line-clamp-2">
                {{ post.excerpt }}
            </p>

            <div class="mt-4 flex items-center justify-between">
                <!-- soft label (optional) -->
                <span class="text-[12px] border border-[#e71a3c] text-[#e71a3c] rounded px-1.5 py-0.5 bg-[#ffe9ea]">
                    Tin tức
                </span>
            </div>
        </div>
    </article>
</template>
