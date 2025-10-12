import { beforeEach, describe, expect, it } from "vitest";
import { StoreLocatorService } from "~/services/storeLocatorService";

const mockStoreLocator = {
    id: "1",
    name: "CH Chợ Lớn - Quận 6 - HCM",
    address: "56-58-60-62 Tháp Mười, P.2, Q.6, TP.HCM",
    region: "HCM"
}

describe('StoreLocatorService', () => {
    let service: StoreLocatorService

    beforeEach(() => {
        service = new StoreLocatorService()
    })

    it('getStoreLocators successfully', () => {
        const getStoreLocators = service.getStoreLocators()
        expect(getStoreLocators[0]).toMatchObject(mockStoreLocator)
    })
})