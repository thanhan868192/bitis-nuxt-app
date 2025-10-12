import { useNuxtApp } from '#app'
import { useState } from '#imports'
import { ref, computed } from 'vue'
import type { Store } from '../../types/store'

export const useStoreLocator = () => {
    const { $storeLocatorService, $loggerService } = useNuxtApp()

    const stores = useState<Store[]>(
        'getStoreLocators',
        () => $storeLocatorService.getStoreLocators())

    if (stores.value) {
        $loggerService.info('Get Stores successfully', stores.value)
    }

    // dropdown list
    const regions = [
        { value: 'ALL', label: 'Tất cả' },
        { value: 'HCM', label: 'TP.HCM' },
        { value: 'HN', label: 'Hà Nội' },
        { value: 'DN', label: 'Đà Nẵng' },
        { value: 'KHAC', label: 'Khu vực khác' },
    ] as const

    type RegionValue = typeof regions[number]['value']
    const region = ref<RegionValue>('ALL')

    const filtered = computed(() =>
        region.value === 'ALL' ? stores.value : stores.value.filter(s => s.region === region.value))

    return { regions, region, filtered, stores }
}