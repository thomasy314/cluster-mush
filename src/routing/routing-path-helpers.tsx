import { Navigate, Route } from "react-router";

export const stringToPath = (val: string): string => {
    return val.toLowerCase().replace(/ /g, '-');
}

export const pathToString = (val: string): string => {
    return val.split('-').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

export const isLocalHost = (): boolean => {
    return !window.location.hostname.includes('clustermush');
}



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