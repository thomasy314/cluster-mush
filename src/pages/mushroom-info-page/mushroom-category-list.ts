import { gourmetMushroomList } from "./gourmet"

export type MushroomCategory = {
    name: string,
    images: string[]
}

const gourmetMushroomCategory: MushroomCategory = {
    name: 'Gourmet Mushrooms',
    images: gourmetMushroomList.map(mush => mush.images[0]),
}

export const mushroomCategoryList: MushroomCategory[] = [
    gourmetMushroomCategory
]
