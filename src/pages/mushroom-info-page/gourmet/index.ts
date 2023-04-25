import { CommonStoreInfo } from './common-store-info';
import { EnokiInfo } from './enoki-info';
import { MaitakeInfo } from './maitake-info';
import { OysterInfo } from './oyster-info';
import { ShiitakeInfo } from './shiitake-info';

export * from './common-store-info';
export * from './enoki-info';
export * from './maitake-info';
export * from './oyster-info';
export * from './shiitake-info';

export const gourmetMushroomInfoList = [
    CommonStoreInfo,
    EnokiInfo,
    MaitakeInfo,
    OysterInfo,
    ShiitakeInfo
]