import { CommonTableInfo } from './common-table-info';
import { EnokiInfo } from './enoki-info';
import { MaitakeInfo } from './maitake-info';
import { OysterInfo } from './oyster-info';
import { ShiitakeInfo } from './shiitake-info';

export * from './common-table-info';
export * from './enoki-info';
export * from './maitake-info';
export * from './oyster-info';
export * from './shiitake-info';

export const gourmetMushroomInfoList = [
    CommonTableInfo,
    EnokiInfo,
    MaitakeInfo,
    OysterInfo,
    ShiitakeInfo
]