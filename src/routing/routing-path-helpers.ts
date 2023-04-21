
export const stringToPath = (val: string): string => {
    return val.toLowerCase().replace(/ /g, '-');
}


export const isLocalHost = (): boolean => {
    return !window.location.hostname.includes('clustermush');
}



export const inShop = (): boolean => {
  return window.location.host.includes("shop");
}