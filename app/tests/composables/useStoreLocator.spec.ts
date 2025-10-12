import { describe, expect, it, vi } from "vitest"

const mockStoreLocators = [{
    id: '1',
    name: 'CH Chợ Lớn - Quận 6 - HCM',
    address: '56-58-60-62 Tháp Mười, P.2, Q.6, TP.HCM',
    region: 'HCM'
}]

const getStoreLocatorsSpy = vi.fn(() => mockStoreLocators)
const infoSpy = vi.fn()

vi.mock('#app', () => ({
    useNuxtApp: () => ({
        $storeLocatorService: { getStoreLocators: getStoreLocatorsSpy },
        $loggerService: { info: infoSpy },
    })
}))

import { useStoreLocator } from '~/composables/useStoreLocator'

describe('useStoreLocator', () => {
    it('getStoreLocators successfully with logger', () => {
        const { stores } = useStoreLocator()
        expect(stores.value).toEqual(mockStoreLocators)
        expect(getStoreLocatorsSpy).toHaveBeenCalledTimes(1)
        expect(infoSpy).toHaveBeenCalledWith('Get Stores successfully', mockStoreLocators)

    })
})