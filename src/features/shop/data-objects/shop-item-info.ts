export interface ShopItemInfo {
    name: string;
    description: string;
    price: number;
    image: string;
    available: boolean;
    id: string;
    stripeId: string;
}

export const compareShopItemInfo = (first: ShopItemInfo, second: ShopItemInfo): boolean => {
    return JSON.stringify(first) === JSON.stringify(second);
}