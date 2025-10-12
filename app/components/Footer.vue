<script setup lang="ts">
type ExpandKey = 'col1' | 'col2' | 'col3' | 'col4'
const expend = ref<Record<ExpandKey, boolean>>({
    col1: false,
    col2: false,
    col3: false,
    col4: false
})

function onToggle(key: ExpandKey) {
    expend.value[key] = !expend.value[key]
}
</script>

<template>
    <footer class="bg-white leading-6">
        <div class="footer-container">
            <div class="footer-main-content pt-10">
                <div class="container mx-auto lg-padding flex ">

                    <div class="w-full lg:w-8/12 mx-3.5">
                        <div class="grid grid-cols-1 lg:grid-cols-3">
                            <div class="footer-widget">
                                <button
                                    class="w-full lg:hidden flex items-center justify-between py-3 border-t border-gray-200"
                                    @click="onToggle('col1')" :aria-expanded="expend.col1">
                                    <span class="title-footer text-lg font-semibold text-gray-900">VỀ BITI'S</span>
                                    <svg :class="[expend.col1 ? 'rotate-180' : 'rotate-0',
                                        'h-5 w-5 transition-transform font-semibold text-gray-900']"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                                    </svg>
                                </button>

                                <h4 class="title-footer hidden lg:block mb-4 text-lg font-semibold text-gray-900">VỀ
                                    BITI'S</h4>
                                <div class="footer-content hidden lg:block">
                                    <ul class="space-y-2 text-gray-700">
                                        <li><a class="hover:text-blue-700 " href="#">Câu chuyện Biti's</a>
                                        </li>
                                        <li><a class="hover:text-blue-700 " href="#">Hoạt động</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Liên hệ</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Câu chuyện Biti's</a>
                                        </li>

                                    </ul>
                                </div>

                                <div :class="[
                                    expend.col1 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                                    'lg:hidden grid transition-[grid-template-rows] duration-500 ease-in-out'
                                ]">
                                    <div class="overflow-hidden pt-2">
                                        <ul class="space-y-2 text-gray-700">
                                            <li><a class="hover:text-blue-700" href="#">Câu chuyện Biti's</a></li>
                                            <li><a class="hover:text-blue-700" href="#">Hoạt động</a></li>
                                            <li><a class="hover:text-blue-700" href="#">Liên hệ</a></li>
                                            <li><a class="hover:text-blue-700" href="#">Câu chuyện Biti's</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-widget">
                                <button
                                    class="w-full lg:hidden flex items-center justify-between py-3 border-t border-gray-200"
                                    @click="onToggle('col2')" :aria-expanded="expend.col2">
                                    <span class="title-footer text-lg font-semibold text-gray-900">THÔNG TIN</span>
                                    <svg :class="[expend.col2 ? 'rotate-180' : 'rotate-0',
                                        'h-5 w-5 transition-transform font-semibold text-gray-900']"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                                    </svg>
                                </button>

                                <h4 class="title-footer hidden lg:block mb-4 text-lg font-semibold text-gray-900">THÔNG
                                    TIN</h4>
                                <div class="footer-content hidden lg:block">
                                    <ul class="space-y-2 text-gray-700">
                                        <li><a class="hover:text-blue-700 " href="#">Trạng thái đơn hàng</a>
                                        </li>
                                        <li><a class="hover:text-blue-700 " href="#">Hình thức giao hàng</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Hình thức thanh toán</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Hướng dẫn cách chọn Size</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Chính sách đổi Size</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Chính sách đổi trả</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Chính sách bảo hành</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Chính sách khách hàng thân
                                                thiết</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Chính sách bảo vệ thông tin khách
                                                hàng</a></li>
                                    </ul>
                                </div>

                                <div :class="[
                                    expend.col2 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                                    'lg:hidden grid transition-[grid-template-rows] duration-500 ease-in-out'
                                ]">
                                    <div class="overflow-hidden pt-2">
                                        <ul class="space-y-2 text-gray-700">
                                            <li><a class="hover:text-blue-700 " href="#">Trạng thái đơn hàng</a>
                                            </li>
                                            <li><a class="hover:text-blue-700 " href="#">Hình thức giao hàng</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">Hình thức thanh toán</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">Hướng dẫn cách chọn Size</a>
                                            </li>
                                            <li><a class="hover:text-blue-700 " href="#">Chính sách đổi Size</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">Chính sách đổi trả</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">Chính sách bảo hành</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">Chính sách khách hàng thân
                                                    thiết</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">Chính sách bảo vệ thông tin
                                                    khách hàng</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-widget">
                                <button
                                    class="w-full lg:hidden flex items-center justify-between py-3 border-t border-gray-200"
                                    @click="onToggle('col3')" :aria-expanded="expend.col3">
                                    <span class="title-footer text-lg font-semibold text-gray-900">TRỢ GIÚP</span>
                                    <svg :class="[expend.col3 ? 'rotate-180' : 'rotate-0',
                                        'h-5 w-5 transition-transform font-semibold text-gray-900']"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                                    </svg>
                                </button>

                                <h4 class="title-footer hidden lg:block mb-4 text-lg font-semibold text-gray-900">TRỢ
                                    GIÚP</h4>
                                <div class="footer-content hidden lg:block">
                                    <ul class="space-y-2 text-gray-700">
                                        <li><a class="hover:text-blue-700 " href="#">Tuyển Dụng</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Hệ thống cửa hàng</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Liên hệ hợp tác</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">Q&A</a></li>
                                        <li><a class="hover:text-blue-700 " href="#">
                                                <NuxtImg src="/images/b2b_161ba831bf784bd3b60d4787af503cb2.jpg"
                                                    alt="B2B action footer" width="150" height="33" loading="lazy"
                                                    decoding="async" class="rounded-[40px]" />
                                            </a></li>
                                    </ul>
                                </div>

                                <div :class="[
                                    expend.col3 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                                    'lg:hidden grid transition-[grid-template-rows] duration-500 ease-in-out'
                                ]">
                                    <div class="overflow-hidden pt-2">
                                        <ul class="space-y-2 text-gray-700">
                                            <li><a class="hover:text-blue-700 " href="#">Tuyển Dụng</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">Hệ thống cửa hàng</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">Liên hệ hợp tác</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">Q&A</a></li>
                                            <li><a class="hover:text-blue-700 " href="#">
                                                    <NuxtImg src="/images/b2b_161ba831bf784bd3b60d4787af503cb2.jpg"
                                                        alt="B2B action footer" width="150" height="33" loading="lazy"
                                                        class="rounded-[40px]" />
                                                </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-widget">
                                <button
                                    class="w-full lg:hidden flex items-center justify-between py-3 border-t border-gray-200"
                                    @click="onToggle('col4')" :aria-expanded="expend.col4">
                                    <span class="title-footer text-lg font-semibold text-gray-900">Thông tin địa
                                        chỉ</span>
                                    <svg :class="['h-5 w-5 transition-transform font-semibold text-gray-900', expend.col4 ? 'rotate-180' : 'rotate-0']"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                                    </svg>
                                </button>

                                <div :class="[expend.col4 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                                    'lg:hidden grid transition-[grid-template-rows] duration-500 ease-in-out']">
                                    <div class="overflow-hidden pt-2">
                                        <div class="logo-footer">
                                            <NuxtImg class="brand-img" src="/images/brand.svg" alt="Brand" width="120"
                                                height="36" />
                                        </div>
                                        <div>
                                            <div class="line-item-address">
                                                <b class=" mb-2 text-gray-900">CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG
                                                    BÌNH TIÊN</b>
                                                <p class="text-gray-700 "> <b>Địa chỉ: </b>
                                                    22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh<br></p>
                                            </div>
                                            <div class="line-item-address">
                                                <p class="text-gray-700 ">
                                                    <b>Điện thoại: </b> <a class="text-blue-700 hover:underline"
                                                        href="tel:02838753443">(028) 38 753
                                                        443</a><br>
                                                    <b>Email:Liên hệ các vấn đề về đơn hàng Online, kênh cửa hàng, đại
                                                        lý
                                                        (offline)
                                                        :</b> <a class="text-blue-700 hover:underline"
                                                        href="mailto:chamsockhachhang@bitis.com.vn">chamsockhachhang@bitis.com.vn</a>

                                                </p>
                                            </div>
                                            <div class="line-item-address">
                                                <p class="text-gray-700 ">

                                                    <b>Hotline:</b> <a class="text-blue-700 hover:underline"
                                                        href="tel:0966158666">0966
                                                        158666</a><br>
                                                    <b>Thời gian tư vấn: </b> 8h – 21h30 (trừ Lễ, Tết)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 -mt-7 px-2.5 hidden lg:block">
                        <div class="logo-footer">
                            <NuxtImg class="brand-img" src="/images/brand.svg" alt="Brand" width="120" height="36" />
                        </div>
                        <div>
                            <div class="line-item-address">
                                <b class=" mb-2 text-gray-900">CÔNG TY TNHH SẢN XUẤT HÀNG TIÊU DÙNG
                                    BÌNH TIÊN</b>
                                <p class="text-gray-700 "> <b>Địa chỉ: </b>
                                    22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP. Hồ Chí Minh<br></p>
                            </div>
                            <div class="line-item-address">
                                <p class="text-gray-700 ">
                                    <b>Điện thoại: </b> <a class="text-blue-700 hover:underline"
                                        href="tel:02838753443">(028) 38 753
                                        443</a><br>
                                    <b>Email:Liên hệ các vấn đề về đơn hàng Online, kênh cửa hàng, đại lý (offline)
                                        :</b> <a class="text-blue-700 hover:underline"
                                        href="mailto:chamsockhachhang@bitis.com.vn">chamsockhachhang@bitis.com.vn</a>

                                </p>
                            </div>
                            <div class="line-item-address">
                                <p class="text-gray-700 ">

                                    <b>Hotline:</b> <a class="text-blue-700 hover:underline" href="tel:0966158666">0966
                                        158666</a><br>
                                    <b>Thời gian tư vấn: </b> 8h – 21h30 (trừ Lễ, Tết)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copy-right">
                    <div class="container mx-auto flex">
                        <div class="w-full">
                            <div class="grid grid-cols-1 lg:grid-cols-12">
                                <div class="footer-bottom-left lg:col-span-4">
                                    <div>
                                        <ul class="flex flex-wrap justify-between">
                                            <li class="font-semibold text-gray-900"><a class="hover:text-blue-700 "
                                                    href="#">Điều khoản</a></li>
                                            <li class="font-semibold text-gray-900"><a class="hover:text-blue-700 "
                                                    href="#">Chính sách bảo
                                                    mật</a></li>
                                            <li class="font-semibold text-gray-900"><a class="hover:text-blue-700 "
                                                    href="#">Hướng dẫn sử
                                                    dụng</a></li>
                                        </ul>
                                    </div>
                                    <div class="copy-right-footer font-semibold text-gray-900">
                                        Copyright © 2025
                                        <a class="hover:text-blue-700 " href="#"> Biti's</a>.
                                        <a class="hover:text-blue-700 " target="_blank" href="#" rel="noreferrer">
                                            Powered by Haravan Enterprise
                                        </a>
                                    </div>
                                </div>
                                <div class="footer-bottom-logo flex justify-center lg:col-span-2">
                                    <a href="#" target="_blank" rel="noreferrer">
                                        <NuxtImg width="120" height="45" alt="Bộ Công Thương" loading="lazy"
                                            decoding="async"
                                            src="/images/bocongthuong_f866573d7d9d4e7fb16d09817459d3cb_medium.png" />
                                    </a>
                                </div>
                                <div class="footer-bottom-right block font-semibold text-gray-900 lg:col-span-6">
                                    Giấy CNĐKDN: 0301340497 được cấp ngày 20/01/1992,
                                    được sửa đổi lần thứ 25 ngày 27/01/2022 bởi Sở Kế hoạch và Đầu tư TPHCM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-copy-right {
    margin-top: 20px;
    border-top: 1px solid #e7e7e7;
    padding: 15px 0;
    background: #dfdfdf;
    color: #333333;
}

.footer-container .line-item-address~.line-item-address {
    margin-top: 20px;
}

.logo-footer {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-footer .brand-img {
    width: 110px;
}

@media (max-width: 991px) {
    .footer-copy-right .footer-bottom-left {
        order: 3;
    }

    .footer-copy-right .footer-bottom-left ul {
        gap: 12px;
        justify-content: center;
    }

    .footer-copy-right .footer-bottom-left .copy-right-footer {
        text-align: center;
        margin: 15px 0 0 0;
    }

    .footer-copy-right .footer-bottom-left a~a {
        display: block;
    }

    .footer-copy-right .footer-bottom-logo {
        order: 2;
        margin: 10px 0;
    }

    .footer-copy-right .footer-bottom-right {
        order: 1;
    }
}
</style>