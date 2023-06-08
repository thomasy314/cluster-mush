import { Navigate, Route } from "react-router";

export const stringToPath = (val: string): string => {
    return val.toLowerCase().replace(/ /g, '-');
}

export const pathToString = (val: string): string => {
    return val.split('-').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

export const isLocalHost = (): boolean => {
    return !window.location.hostname.includes('clustermush') && !window.location.hostname.includes('cluster-mush');
}

export const completeMainUrl = isLocalHost() ? 'http://www.localhost:3000' : 'https://www.clustermush.com';
export const completeShopUrl = isLocalHost() ? 'http://shop.localhost:3000' : 'https://shop.clustermush.com';

export const inShop = (): boolean => {
    return window.location.host.includes("shop");
}

export const createUnknownPathRedirect = () => {
    return (
        <Route
            path='*'
            element={<Navigate to='/' replace />}
        />
    )
}