import { 
    Citation,
    EcologicalGroup,
    MushroomInfo,
    ValueWithCitation
} from '../../../features/mushroom-info-page/data-objects';

import portobelloPhoto from '../../../assets/photos/commonTable/portobello.png';

const name: string = 'Common Table Mushroom'

const latinName: string = 'Agaricus bisporus'

const commonNames: string[] = [
    '(Immature White) Button Mushroom',
    '(Immature White) Champignon',
    '(Immature Brown) Baby Bella',
    '(Immature Brown) Cremini',
    '(Fully Grown) Portobello'
];

const etymology: string = '(Portobello) It is unclear where the name Portobello comes from. Many say it is named after a famous road in london, some say it is named after the Italian word “pratarolo” meaning meadow, and some say that it means “Beautiful Door” in Italian.';

const location: string = 'This mushroom is native to Europe, Asia, and North America.'

const ecologicalGroup: EcologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible: string = 'that of aitake are common in eastern North America and can also be found in europe and Eastern Asia.'

// Citations
const mushOfTheMonthAgric: Citation = new Citation('Volk, T., & Ivors, K. (n.d.). Agaricus bisporus, the white button pizza mushroom,  portabella, portobello, portabello, portobella, crimini, Tom Volk’s Fungus of the Month for April 2001. https://botit.botany.wisc.edu/toms_fungi/apr2001.html', 'https://botit.botany.wisc.edu/toms_fungi/apr2001.html');
const usda2022Report: Citation = new Citation('United State Department of Agriculture. (2022) mushrooms: National Agricultural Statistics Service (ISSN: 1949-1530)', 'https://downloads.usda.library.cornell.edu/usda-esmis/files/r781wg03d/j6732c00q/9p291j65f/mush0822.txt');
const usda1996Report: Citation = new Citation('United State Department of Agriculture. (1996) mushrooms: National Agricultural Statistics Service', 'https://downloads.usda.library.cornell.edu/usda-esmis/files/r781wg03d/xs55mf820/b8515q77c/Mush-08-16-1996.txt');
const washingtonPostMushBoom: Citation = new Citation('Sagon, C., & Sagon, Y. (1997, June 25). A MUSHROOM BOOM. Washington Post. Retrieved April 13, 2023, from https://www.washingtonpost.com/archive/lifestyle/food/1997/06/25/a-mushroom-boom/47922ff2-88d4-40f1-8f9d-6d2d9204f661/', 'https://www.washingtonpost.com/archive/lifestyle/food/1997/06/25/a-mushroom-boom/47922ff2-88d4-40f1-8f9d-6d2d9204f661/');
const nyTimesAfterThePortobello: Citation = new Citation('O’Neill, M. (1998, November 4). After the Portobello, It’s Mushroom Mania. The New York Times. Retrieved April 13, 2023, from https://www.nytimes.com/1998/11/04/dining/after-the-portobello-it-s-mushroom-mania.html', 'https://www.nytimes.com/1998/11/04/dining/after-the-portobello-it-s-mushroom-mania.html');
const wildAboutMushroomSf: Citation = new Citation('Wild About Mushrooms: Button Mushroom. (n.d.). https://www.mssf.org/cookbook/button.html', 'https://www.mssf.org/cookbook/button.html');

const historyAndCultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Up until the mid 1990s, the only variety of Agricus bisporus consumers wanted were the immature what ones (aka Champignon)', [usda1996Report, washingtonPostMushBoom, nyTimesAfterThePortobello]),
    new ValueWithCitation('Agricus bisporus was first cultivated in the early 1700s in France', [wildAboutMushroomSf]),
    new ValueWithCitation('n 1926, a Pennsylvania mushroom farmer found a clump of Agaricus with white caps in his mushroom bed. Cultures were grown from this mutation and now most cream-colored store mushrooms are ancestors of those mushrooms.', [wildAboutMushroomSf])
];

const scienceFacts: ValueWithCitation<string>[] = [
];

const agricultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Agaricus Bisporus is a secondary decomposer which means it consumes already decomposed material. This could be from another mushroom or compost.', [mushOfTheMonthAgric]),
    new ValueWithCitation('As of 2022, Agaricus Bisporus accounts for 91% of the mushrooms grown in the United States, but only 40% worldwide.', [usda2022Report, mushOfTheMonthAgric])
];

const learnMore: Citation[] = [
    new Citation('Common Table Mushroom Wikipedia', 'https://en.wikipedia.org/wiki/Agaricus_bisporus'),
    new Citation('Tom Volk\'s Fungus of the Month: Agaricus bisporus', 'https://botit.botany.wisc.edu/toms_fungi/apr2001.html'),
    new Citation('Wild About Mushrooms Cookbook: Common Store Mushroom', 'https://www.mssf.org/cookbook/button.html'),
    new Citation('Mushroom Revival Podcast: Commercial Button Mushroom Production & Myco-Materials with William Goss', 'https://www.mushroomrevival.com/blogs/podcast/commercial-button-mushroom-production-myco-materials-william-goss')
];


export const CommonTableInfo: MushroomInfo = new MushroomInfo(
    name,
    [portobelloPhoto],
    latinName,
    commonNames,
    etymology,
    location,
    ecologicalGroup,
    edible,
    historyAndCultureFacts,
    scienceFacts,
    agricultureFacts,
    learnMore
);