<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const {
    items,
    mobileOpen,
    menuLevel,
    menuItem,
    isOpen,
    toggleTranslate,
    openChildren,
    backToPrevious,
    closeMenu
} = useHeader();

onMounted(() => {
    if (window.matchMedia('(max-width: 991px)').matches) return;

    const header = document.getElementById('main-header')

    const handleScroll = () => {
        if (window.scrollY > 40) {
            header!.style.top = '0px'
        } else {
            header!.style.top = '50px'
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
        <div :class="{ 'menu-open': mobileOpen }">
            <header id="main-header" class="main-header w-full fixed left-0 z-[1000]">
                <div class="bg-white min-h-16 flex items-center">
                    <div class="w-full px-4 header-padding">
                        <div class="flex items-center justify-between flex-nowrap">
                            <div class="header-wrap-action lg:hidden flex items-center">
                                <UButton class=" mr-2 text-gray-600" variant="ghost" aria-label="Open menu"
                                    @click="mobileOpen = true">
                                    <UIcon name="i-heroicons-bars-3-20-solid" class="w-6 h-6" />
                                </UButton>
                                <div class="module_translate">
                                    <div class="module_translate_mask flex items-center" @click="toggleTranslate">
                                        <span>VN</span> <svg
                                            class="fa-chevron-down h-5 w-5 transition-transform font-semibold text-gray-900"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                                        </svg>
                                    </div>
                                    <div :class="['module_translate_main', { open: isOpen }]">
                                        <a href="#" data-pick="">VN</a>
                                        <a href="#" data-pick="en">EN</a>
                                    </div>
                                </div>
                            </div>
                            <div class="header-wrap-logo px-4">
                                <NuxtImg class="brand-img" src="/images/brand.svg" alt="Brand" width="120"
                                    height="36" />
                            </div>

                            <div class="header-wrap-menu flex-1 hidden lg:flex justify-center">
                                <nav class="navbar-mainmenu">
                                    <ul class="menu-list-primary flex flex-row items-center gap-2 text-[14px]">
                                        <li v-for="(item, index) in items" :key="index" class="has-submenu">
                                            <span>{{ item.label }}</span>

                                            <svg v-if="item.children.length"
                                                class="fa-chevron-down h-5 w-5 transition-transform font-semibold text-gray-900"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                                            </svg>

                                            <ul v-if="item.children.length" class="menu-list-submain">
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
                                    <div class="header-action-item header-search-box">
                                        <div class="search-box">
                                            <form class="search-form" action="">
                                                <div>
                                                    <input type="hidden" name="type" value="product">
                                                    <input required="true" class="input-search" name="q" maxlength="40"
                                                        autocomplete="off" type="text" size="20"
                                                        data-vn="Bạn cần tìm gì..." placeholder="Bạn cần tìm gì...">
                                                </div>
                                                <button class="btn-search">
                                                    <svg version="1.1" class="svg search"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 24 27" style="enable-background:new 0 0 24 27;"
                                                        xml:space="preserve">
                                                        <path
                                                            d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z">
                                                        </path>
                                                        <rect x="17" y="17"
                                                            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)"
                                                            width="4" height="8"></rect>
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="header-action-item header-action-account">
                                        <div class="header-action-text">
                                            <span class="box-icon">
                                                <NuxtImg class="account-icon" src="/images/account.svg" alt="Brand"
                                                    width="22" height="40" />
                                            </span>
                                        </div>
                                    </div>
                                    <div class="header-action-item header-action-cart">
                                        <div class="header-action-text">
                                            <span class="box-icon">
                                                <NuxtImg class="cart-icon" src="/images/cart.svg" alt="Brand" width="22"
                                                    height="40" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

        <Transition name="menu-list">
            <div v-if="mobileOpen" class="mobile-menu lg:hidden">
                <div class="sticky top-0 z-10 bg-white border-b h-12 flex items-center">
                    <button v-if="menuLevel === 1" class="px-3 h-12 flex items-center gap-1 text-gray-700"
                        @click="backToPrevious" aria-label="Back">
                        <UIcon name="i-heroicons-chevron-left-20-solid" class="w-5 h-5" />
                        <span class="font-medium">QUAY VỀ</span>
                    </button>
                    <button class="px-3 h-12 ml-auto text-gray-700" @click="closeMenu" aria-label="Close">
                        <UIcon name="i-heroicons-x-mark-20-solid" class="w-6 h-6" />
                    </button>
                </div>

                <Transition name="slide-horizontal" mode="out-in">
                    <div v-if="menuLevel === 0" key="lvl1" class="divide-y text-gray-700">
                        <button v-for="(item, i) in items" :key="i"
                            class="w-full h-12 px-4 flex items-center justify-between text-[15px] border-b border-gray-200 font-medium"
                            @click="openChildren(item)">
                            <span class="truncate">{{ item.label }}</span>
                            <UIcon v-if="item.children?.length" name="i-heroicons-chevron-right-20-solid"
                                class="w-5 h-5 text-gray-500" />
                        </button>

                        <div class="p-4">
                            <a href="#" aria-label="B2B action" target="_blank">
                                <NuxtImg style="width: 120px; height: 28px; border-radius: 40px;"
                                    src="/images/b2b_161ba831bf784bd3b60d4787af503cb2.jpg" loading="lazy"
                                    decoding="async" alt="B2B action" width="120" height="28" />
                            </a>
                        </div>
                    </div>

                    <div v-else key="lvl2">
                        <button class="w-full text-left px-4 py-3 font-bold text-gray-700">
                            Xem tất cả "{{ menuItem?.label }}"
                        </button>

                        <ul class="divide-y text-gray-700">
                            <li v-for="(child, cIndex) in (menuItem?.children || [])" :key="cIndex"
                                class="border-b border-gray-200 font-medium">
                                <NuxtLink class="block px-4 py-3 text-[15px]" @click.native="mobileOpen = false">
                                    {{ child.label }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </Transition>
            </div>
        </Transition>

    </div>
</template>

<style>
.header-wrap-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-wrap-logo .brand-img {
    width: 90px;
}

.main-header .header-wrap-menu ul.menu-list-primary>li {
    display: inline-block;
    margin: 0 10px;
    position: relative;
    color: #000000;
}

.main-header .header-wrap-menu ul.menu-list-primary li.has-submenu .menu-list-submain {
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

.main-header .header-wrap-menu ul.menu-list-primary li.has-submenu:hover>.menu-list-submain {
    pointer-events: auto;
    visibility: visible;
    top: 200%;
    opacity: 1;
    color: #252a2b;
}

.main-header .header-wrap-menu ul.menu-list-submain li:not(:first-child) {
    border-top: 1px solid #ecf0f1;
}

.main-header .header-wrap-menu ul.menu-list-submain li {
    padding: 9px 18px;
    text-align: left;
    display: block;
    font-size: 14px;
    color: var(--shop-color-text);
    opacity: 0.85;
}

.main-header .header-wrap-menu ul.menu-list-primary>li>svg {
    display: inline-block;
    vertical-align: middle;
    font-size: 8px;
    margin-left: 2px;
    transition: transform .2s;
}

.main-header .header-wrap-menu ul.menu-list-primary>li:hover>svg {
    opacity: 1;
    transform: rotate(180deg);
}

.main-header .header-wrap-action .header-action .header-action-item .header-action-text {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
}

.main-header {
    top: 50px;
    transition: transform .2s ease, top .2s ease;
}

.main-header .module_translate_main a,
.main-header .module_translate_mask span,
.main-header .module_translate_mask i {
    color: #000;
}

.slide-horizontal-enter-active,
.slide-horizontal-leave-active {
    transition: transform .2s ease, opacity .2s ease;
}

.slide-horizontal-enter-from {
    transform: translateX(24px);
    opacity: 0;
}

.slide-horizontal-leave-to {
    transform: translateX(-24px);
    opacity: 0;
}

.main-header .header-search-box .search-box {
    max-width: 400px;
    margin-left: auto;
}

.main-header .header-search-box .search-box {
    border-radius: 4px;
    overflow: hidden;
}

.main-header .header-search-box .search-form {
    position: relative;
    padding: 0;
}

.main-header .header-wrap-action .search-form .input-search {
    line-height: 28px;
    padding: 3px 8px 3px 40px;
    color: #000;
    border-radius: 4px;
    width: 100%;
    background: #efefef;
    border: none;
    font-size: 13px;
    font-weight: 500;
    margin: 0;
    display: inline-block;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    height: 35px;
}

.main-header .header-search-box .search-form .btn-search {
    width: 40px;
    height: 35px;
    position: absolute;
    padding: 0;
    top: 0px;
    left: 0px;
    background: transparent;
    transition: opacity 150ms linear;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-header .header-search-box .search-form .btn-search svg {
    color: #000;
    width: 20px;
    height: 20px;
}

@media (max-width: 991px) {
    .main-header {
        top: 0;
        transition: transform .2s ease, top .2s ease;
        will-change: transform,
    }

    .menu-open {
        transform: translateY(-100%);
    }

    html:has(.menu-open),
    body:has(.menu-open) {
        overflow: hidden;
        height: 100%;
    }

    .mobile-menu {
        position: fixed;
        inset: 0;
        background: #fff;
        z-index: 99;
        overflow-y: auto;
        overscroll-behavior: contain;
    }

    .menu-list-enter-active,
    .menu-list-leave-active {
        transition: transform .25s ease, opacity .25s ease;
    }

    .menu-list-enter-from,
    .menu-list-leave-to {
        transform: translateY(-100%);
        opacity: 0;
        top: 50px;
    }

    .header-wrap-logo .brand-img {
        width: 65px;
    }

    .header-wrap-action .header-search-box {
        display: none;
    }
}
</style>
