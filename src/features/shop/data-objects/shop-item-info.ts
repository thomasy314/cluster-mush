export interface ShopItemInfo {
    name: string;
    price: number;
    image: string;
    available: boolean;
    id: string;
}

export const compareShopItemInfo = (first: ShopItemInfo, second: ShopItemInfo): boolean => {
    return first.name === second.name &&
            first.price === second.price &&
            first.image === second.image;
}