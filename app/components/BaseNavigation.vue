<script setup lang="ts">
import menuItems from '../../data/menu.json';
import { onMounted, onUnmounted } from 'vue';

const items = ref(menuItems);
onMounted(() => {
    const header = document.getElementById('main-header')

    const handleScroll = () => {
        if (window.scrollY > 40) {
            header!.style.top = '0px'
        } else {
            header!.style.top = '40px'
        }
    }

    window.addEventListener('scroll', handleScroll)
    onUnmounted(() => {
        if (handleScroll) window.removeEventListener('scroll', handleScroll)
    })
})

</script>

<template>
    <div>
        <header id="main-header" class="mainHeader w-full fixed top-10 left-0 z-[1000]">
            <div class="bg-white min-h-16 flex items-center">
                <div class="w-full px-4">
                    <div class="flex items-center justify-between flex-nowrap">
                        <div class="header-wrap-logo px-4">icon</div>

                        <div class="header-wrap-menu flex-1 flex justify-center">
                            <nav class="navbar-mainmenu">
                                <ul class="menuList-primary flex flex-row items-center gap-2 text-[14px]">
                                    <li v-for="(item, index) in items" :key="index" class="has-submenu">
                                        <span>{{ item.label }}</span>

                                        <i v-if="item.children.length" class="fa fa-chevron-down text-sm"
                                            aria-hidden="true"></i>

                                        <ul v-if="item.children.length" class="menuList-submain">
                                            <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                                {{ child.label }}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div class="header-wrap-action px-4">
                            <div class="header-action flex gap-6">
                                <div class="header-action-item"></div>
                                <div class="header-action-item header-action-account">
                                    <div class="header-action-text">
                                        <span class="box-icon">
                                            <svg class="svg-ico-account" xmlns="http://www.w3.org/2000/svg"
                                                version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0"
                                                y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"
                                                xml:space="preserve">
                                                <g>
                                                    <g xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path
                                                                d="M510.702,438.722c-2.251-10.813-12.84-17.754-23.657-15.503c-10.814,2.251-17.755,12.843-15.503,23.656 c1.297,6.229-0.248,12.613-4.236,17.519c-2.31,2.841-7.461,7.606-15.999,7.606H60.693c-8.538,0-13.689-4.766-15.999-7.606 c-3.989-4.905-5.533-11.29-4.236-17.519c20.756-99.695,108.691-172.521,210.24-174.977c1.759,0.068,3.526,0.102,5.302,0.102 c1.782,0,3.556-0.035,5.322-0.103c71.532,1.716,137.648,37.947,177.687,97.66c6.151,9.175,18.574,11.625,27.75,5.474 c9.174-6.151,11.625-18.575,5.473-27.749c-32.817-48.944-80.47-84.534-134.804-102.417C370.538,220.036,392,180.477,392,136 C392,61.01,330.991,0,256,0S120,61.01,120,136c0,44.504,21.488,84.084,54.633,108.911c-30.368,9.998-58.863,25.555-83.803,46.069 c-45.732,37.617-77.529,90.086-89.532,147.742c-3.762,18.067,0.745,36.623,12.363,50.909C25.222,503.847,42.365,512,60.693,512 h390.613c18.329,0,35.472-8.153,47.032-22.369C509.958,475.345,514.464,456.789,510.702,438.722z M160,136 c0-52.935,43.065-96,96-96s96,43.065,96,96c0,51.305-40.455,93.339-91.141,95.878c-1.617-0.03-3.237-0.045-4.859-0.045 c-1.614,0-3.228,0.016-4.84,0.046C200.465,229.35,160,187.312,160,136z"
                                                                fill="#000000" data-original="#000000"></path>
                                                        </g>
                                                    </g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                    <g xmlns="http://www.w3.org/2000/svg"></g>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="header-action-item">
                                    <div class="header-action-item header-action-cart">
                                        <div class="header-action-text">
                                            <span class="box-icon">
                                                <svg class="svg-ico-cart" xmlns="http://www.w3.org/2000/svg"
                                                    version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                                                    xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0"
                                                    y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512"
                                                    xml:space="preserve">
                                                    <g>
                                                        <g xmlns="http://www.w3.org/2000/svg" id="Layer_2"
                                                            data-name="Layer 2">
                                                            <path
                                                                d="m16 17.82a6 6 0 0 1 -5.89-4.82 1 1 0 0 1 1-1.15 1 1 0 0 1 1 .83 4 4 0 0 0 7.83 0 1 1 0 0 1 1-.83 1 1 0 0 1 1 1.15 6 6 0 0 1 -5.94 4.82z"
                                                                fill="#000000" data-original="#000000" class=""></path>
                                                            <path
                                                                d="m24.9 31h-17.8a3 3 0 0 1 -3-3.15l.81-17.24a3 3 0 0 1 3-2.87h16.18a3 3 0 0 1 3 2.87l.81 17.24a3 3 0 0 1 -3 3.15zm-16.99-21.25a1 1 0 0 0 -1 1l-.81 17.2a1 1 0 0 0 1 1.05h17.8a1 1 0 0 0 1-1.05l-.81-17.24a1 1 0 0 0 -1-1z"
                                                                fill="#000000" data-original="#000000" class=""></path>
                                                            <path
                                                                d="m22 8.75h-2v-1.75a4 4 0 0 0 -8 0v1.75h-2v-1.75a6 6 0 0 1 12 0z"
                                                                fill="#000000" data-original="#000000" class=""></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style>
.mainHeader .header-wrap-menu ul.menuList-primary>li {
    display: inline-block;
    margin: 0 10px;
    position: relative;
    color: #000000;
}

.mainHeader .header-wrap-menu ul.menuList-primary li.has-submenu .menuList-submain {
    background: #fff;
    min-width: 240px;
    max-width: 180%;
    position: absolute;
    z-index: 99;
    top: 150%;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.mainHeader .header-wrap-menu ul.menuList-primary li.has-submenu:hover>.menuList-submain {
    pointer-events: auto;
    visibility: visible;
    top: 200%;
    opacity: 1;
    color: #252a2b;
}

.mainHeader .header-wrap-menu ul.menuList-submain li:not(:first-child) {
    border-top: 1px solid #ecf0f1;
}

.mainHeader .header-wrap-menu ul.menuList-submain li {
    padding: 9px 18px;
    text-align: left;
    display: block;
    font-size: 14px;
    color: var(--shop-color-text);
    opacity: 0.85;
}

.mainHeader .header-wrap-menu ul.menuList-primary>li>i {
    display: inline-block;
    vertical-align: middle;
    font-size: 8px;
    margin-left: 2px;
    transition: transform .2s;
}

.mainHeader .header-wrap-menu ul.menuList-primary>li:hover>i {
    opacity: 1;
    transform: rotate(180deg);
}

.mainHeader .header-wrap-action .header-action .header-action-item .header-action-text {
    position: relative;
    height: 100%;
}

.mainHeader .header-wrap-action .header-action .header-action-item .header-action-text .box-icon svg.svg-ico-account {
    width: 22px;
    height: 40px;
}

.mainHeader .header-wrap-action .header-action .header-action-item .header-action-text .box-icon svg.svg-ico-cart {
    width: 22px;
    height: 40px;
}
</style>