
export const stringToPath = (val: string): string => {
    return val.toLowerCase().replace(' ', '-');
}


export const isLocalHost = (): boolean => {
    return window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1');
}