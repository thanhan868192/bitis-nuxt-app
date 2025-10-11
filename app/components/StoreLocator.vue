<script setup lang="ts">
import { useStoreLocator } from '~/composables/useStoreLocator';

const { regions, region, filtered } = useStoreLocator()

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
                            <svg class="w-3.5 h-3.5 mt-[5px]" xmlns="http://www.w3.org/2000/svg" version="1.1"
                                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"
                                width="512" height="512" x="0" y="0" viewBox="0 0 512 512"
                                style="enable-background:new 0 0 512 512" xml:space="preserve">
                                <g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M256,0C166.035,0,91,72.47,91,165c0,35.202,10.578,66.592,30.879,96.006l121.494,189.58 c5.894,9.216,19.372,9.198,25.254,0l122.021-190.225C410.512,232.28,421,199.307,421,165C421,74.019,346.981,0,256,0z M256,240 c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75c41.353,0,75,33.647,75,75C331,206.353,297.353,240,256,240z"
                                                fill="#1b4ea0" data-original="#000000" class=""></path>
                                        </g>
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M373.264,344.695l-75.531,118.087c-19.551,30.482-64.024,30.382-83.481,0.029l-75.654-118.085 C72.034,360.116,31,388.309,31,422c0,58.462,115.928,90,225,90s225-31.538,225-90C481,388.285,439.909,360.077,373.264,344.695z"
                                                fill="#1b4ea0" data-original="#000000" class=""></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
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