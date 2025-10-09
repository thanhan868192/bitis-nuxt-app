<script setup lang="ts">
import type { BlogPost } from '../../types/blog-post'

defineProps<{ post: BlogPost }>()
</script>

<template>
    <article
        class="group h-full flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
        <div class="relative overflow-hidden aspect-[16/10] md:aspect-[16/7]">
            <NuxtImg :src="post.image" alt=""
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />
            <span
                class="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-6 group-hover:translate-x-full transition-transform duration-700" />
        </div>

        <div class="flex flex-col grow p-5">
            <h3 class="text-lg md:text-xl font-semibold leading-snug uppercase line-clamp-2">
                {{ post.title }}
            </h3>

            <p class="mt-2 text-sm text-gray-600 line-clamp-2">
                {{ post.excerpt }}
            </p>

            <div class="mt-4 flex items-center justify-between">
                <time class="text-sm text-gray-500">
                    {{ new Date(post.date).toLocaleDateString('vi-VN') }}
                </time>

                <div class="flex items-center gap-3">
                    <span class="text-[12px] border border-[#e71a3c] text-[#e71a3c] rounded px-2 py-0.5 bg-[#ffe9ea]">
                        Tin tức
                    </span>
                </div>
            </div>
        </div>

    </article>
</template>
