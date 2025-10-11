import storeLocatorData from '../../data/store-locator.json'
import type { Store } from '../../types/store'

export class StoreLocatorService {
    getStoreLocators(): Store[] {
        return storeLocatorData as Store[]
    }
}