<script setup lang="ts">
import { useStoreLocator } from '~/composables/useStoreLocator';

const { regions, region, filtered, fetchStoreLocators } = await useStoreLocator()

onMounted(() => {
    fetchStoreLocators()
})
</script>

<template>
    <div class="shops-wrap">
        <div class="choose-address">
            <select v-model="region" name="" id="">
                <option v-for="opt in regions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
            </select>
        </div>
        <div class="wrapper-show-address">
            <div class="show-shops address-detail">
                <ul>
                    <li v-for="s in filtered" :key="s.id" class="item-line-address flex cursor-pointer">
                        <div class="icon-address">
                            <NuxtImg class="mt-[5px]" src="/images/location-icon.svg" alt="Brand" width="14"
                                height="14" />
                        </div>
                        <div class="pl-2.5">
                            <div class="font-medium text-[#1b4ea0]">{{ s.name }}</div>
                            <div class="text-[13px] text-[#757575]">{{ s.address }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.show-shops .item-line-address~.item-line-address {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #f2f2f2;
}

.shops-wrap {
    color: #252a2b;
    line-height: 1.45;
    font-size: 14px;
    height: 100%;
}

.shops-wrap .choose-address select {
    width: 100%;
    border: none;
    cursor: pointer;
    box-shadow: none;
    outline: none;
}

.shops-wrap .choose-address {
    background: white;
    padding: 5px;
    box-shadow: 0 0px 3px 0px #cfc7c7;
}

.shops-wrap .wrapper-show-address {
    background: #FFF;
    box-shadow: 0 0px 3px 0px #cfc7c7;
    margin: 10px 0 0 0;
    height: calc(100% - 40px);
    padding: 10px;
}

.shops-wrap .wrapper-show-address .show-shops {
    max-height: 560px;
    overflow: auto;
}
</style>