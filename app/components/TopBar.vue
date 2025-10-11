<script setup lang="ts">
const { isOpen, toggleTranslate } = useHeader();

</script>

<template>
    <div class="topbar fixed top-0 left-0 z-[1001]">
        <div class="w-full px-9">
            <div class="topbar-content flex items-center justify-between">
                <div class="left-topbar flex flex-wrap items-center">
                    <div class="hotline-left flex gap-1">
                        <span>Hotline:</span>
                        <span><a href="tel:0966158666">0966158666</a></span>
                        <span>(8h – 21h30)</span>
                    </div>
                    <div class="aff-left">
                        <a href="#" data-vn="Liên hệ hợp tác"><span>Liên hệ hợp tác</span></a>
                    </div>
                </div>
                <div class="right-topbar flex">
                    <ul class="flex items-center">
                        <li>
                            <a href="#" data-vn="Tìm cửa hàng"><span>Tìm cửa hàng</span></a>
                        </li>
                        <li>
                            <a href="#" data-vn="Kiểm tra đơn hàng"><span>Kiểm tra đơn
                                    hàng</span></a>
                        </li>
                        <li>
                            <div class="module_translate">
                                <div class="module_translate_mask" @click="toggleTranslate">
                                    <span>VN</span> <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>
                                <div :class="['module_translate_main', { open: isOpen }]">
                                    <a href="#" data-pick="">VN</a>
                                    <a href="#" data-pick="en">EN</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" aria-label="B2B action" target="_blank">
                                <NuxtImg style="width: 120px; height: 28px;"
                                    src="https://file.hstatic.net/1000230642/file/b2b_161ba831bf784bd3b60d4787af503cb2.jpg"
                                    alt="B2B action" width="120" height="28" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.topbar {
    text-align: center;
    font-weight: 500;
    font-size: 13px;
    padding: 8px 0;
    position: relative;
    display: block;
    background: #212026;
    color: #ffffff;
}

.aff-left {
    padding: 0 0 0 15px;
    margin: 0 0 0 15px;
    border-left: 1px solid #FFF;
}

.topbar .topbar-content .left-topbar .hotline-left a {
    font-weight: 700;
}

.topbar a {
    color: #ffffff;
}

.topbar .topbar-content .right-topbar ul li a {
    display: block;
}

.topbar .topbar-content .right-topbar ul li~li {
    padding: 0 0 0 10px;
    margin: 0 0 0 10px;
    border-left: 1px solid #FFF;
}

.topbar .module_translate_main a {
    color: #000;
}

@media (max-width: 991px) {
    .topbar {
        display: none;
    }
}
</style>