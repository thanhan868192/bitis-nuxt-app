<script setup lang="ts">
import type { BlogPost } from '../../types/blog-post'

defineProps<{ post: BlogPost }>()
</script>

<template>
    <article class="group overflow-hidden bg-white shadow-sm ring-1 hover:shadow-md transition">
        <NuxtImg :src="post.image" :alt="post.title" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            format="webp" loading="lazy" decoding="async" fetchpriority='low' placeholder
            class="w-full aspect-[4/4] object-scale-down" />

        <div class="p-4 md:p-5">
            <h3 class="text-base text-gray-900 md:text-lg font-semibold leading-snug ">
                {{ post.title }}
            </h3>

            <p class="text-sm text-gray-500 mt-2 ">[...]</p>

            <div class="mt-4 flex items-center justify-between pt-2.5 border-t border-gray-300">
                <time class="text-sm text-gray-500 italic">
                    {{ new Date(post.date).toLocaleDateString('vi-VN') }}
                </time>

                <button class="text-sm font-medium text-gray-500 items-center">
                    Xem thêm
                </button>
            </div>
        </div>
    </article>
</template>
