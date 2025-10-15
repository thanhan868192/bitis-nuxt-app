import type { Store } from '../../types/store'
export class StoreLocatorService {
    async getStoreLocators(): Promise<Store[]> {
        const response = await fetch('/data/store-locator.json')
        return (await response.json()) as Store[]
    }
}