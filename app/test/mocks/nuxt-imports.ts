import { ref } from 'vue'

const stateMap = new Map<string, any>()
export const useState = <T>(key: string, init: () => T) => {
    if (!stateMap.has(key)) stateMap.set(key, ref(init()))
    return stateMap.get(key) as { value: T }
}
export const __resetState = () => stateMap.clear()
