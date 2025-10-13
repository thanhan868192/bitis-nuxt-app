<script setup lang="ts">
import type { Product } from '../../types/product'

defineProps<{ product: Product, i: number }>()
const VNDUnit = new Intl.NumberFormat('vi-VN')
</script>

<template>
    <div
        class="group relative bg-white border border-gray-300 shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300">
        <div class="relative aspect-[4/5] overflow-hidden">
            <NuxtImg :src="product.image" alt="Product" width="600" height="750" format="webp" quality="65"
                :loading="i === 0 ? 'eager' : 'lazy'" :preload="i === 0" :fetchpriority="i === 0 ? 'high' : 'low'"
                decoding="async" placeholder
                class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
            <NuxtImg :src="product.hoverImage" alt="Product hover" width="600" height="750" format="webp" quality="65"
                loading="lazy" decoding="async" placeholder
                class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span v-if="product.isNew"
                class="absolute top-2 left-2 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded">
                Mới
            </span>
        </div>

        <div class="p-3">
            <div class="flex flex-row justify-between">
                <p class="text-sm font-semibold text-gray-900">{{ product.sizes }} Size</p>
                <p class="text-sm font-semibold text-gray-900">{{ product.colors }} Màu sắc</p>
            </div>

            <h3
                class="text-sm lg:text-[16px] font-semibold text-gray-900 mt-1 line-clamp-2 leading-snug min-h-[3.25rem]">
                {{ product.title }}
            </h3>

            <div class="mt-2 flex flex-wrap justify-between">
                <div class="flex gap-2 items-center ">
                    <p class="price-item text-red-600 font-bold">{{ VNDUnit.format(product.price) }} ₫</p>
                    <p v-if="product.oldPrice" class="text-gray-900 line-through text-sm">
                        {{ VNDUnit.format(product.oldPrice) }} ₫
                    </p>
                    <p v-if="product.discount" class="discount text-xs font-medium">
                        -{{ product.discount }}%
                    </p>
                </div>
                <div class="items-center">
                    <div class="text-[#c52322] font-medium tabular-nums">Đã bán: 132</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.discount {
    border: 1px solid #e71a3c;
    color: #e71a3c;
    border-radius: 3px;
    padding: 1px 3px;
    background: #ffe9ea;
}
</style>