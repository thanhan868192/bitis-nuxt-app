import menuItems from '../../public/data/menu.json';
import type { MenuItem } from '../../types/menu'

export const useHeader = () => {
    const items = ref(menuItems);
    const mobileOpen = ref(false)
    const menuLevel = ref<0 | 1>(0)
    const menuItem = ref<MenuItem | null>(null)

    const isOpen = ref(false)
    function toggleTranslate() {
        isOpen.value = !isOpen.value
    }

    const openChildren = (item: MenuItem) => {
        if (item.children?.length) {
            menuItem.value = item
            menuLevel.value = 1
        }
    }
    const backToPrevious = () => {
        menuLevel.value = 0
        menuItem.value = null
    }

    const closeMenu = () => {
        mobileOpen.value = false;
    }

    return {
        items,
        mobileOpen,
        menuLevel,
        menuItem,
        isOpen,
        toggleTranslate,
        openChildren,
        backToPrevious,
        closeMenu
    };
};