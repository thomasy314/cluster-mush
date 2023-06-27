import { 
    Citation,
    EcologicalGroup,
    MushroomInfo,
    ValueWithCitation
} from '../../../features/mushroom-info-page/data-objects';

import portobelloPhoto from '../../../assets/photos/commonStore/portobello.jpg';
import React from 'react';

const name: string = 'Common Store Mushroom'

const latinName: string = 'Agaricus bisporus'

const commonNames: string[] = [
    '(Immature White) Button Mushroom',
    '(Immature White) Champignon',
    '(Immature Brown) Baby Bella',
    '(Immature Brown) Cremini',
    '(Fully Grown) Portobello'
];

const etymology: React.ReactNode = <><br/><br/><u>Portobello</u>:  It is unclear where the name Portobello comes from. Many say it is named after a famous road in London, some say it is the Italian word “pratarolo” meaning meadow mushroom, and some say that it is just a marketing name.</>

const location: string = 'The common store mushroom is native to Europe, Asia, and North America.'

const ecologicalGroup: EcologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible: string = 'Yes! The mushroom has a rich and savory umami flavor and dense, firm texture. This flavor is intensified when cooked. Some people remove the gills from the Portobello as they can be bitter and cause a slimy texture, while others prefer keeping the gills intact for a stronger flavor.'

// Citations
const mushOfTheMonthAgric: Citation = new Citation('Volk, T., & Ivors, K. (n.d.). Agaricus bisporus, the white button pizza mushroom,  portabella, portobello, portabello, portobella, crimini, Tom Volk’s Fungus of the Month for April 2001. https://botit.botany.wisc.edu/toms_fungi/apr2001.html', 'https://botit.botany.wisc.edu/toms_fungi/apr2001.html');
const usda2022Report: Citation = new Citation('United State Department of Agriculture. (2022) mushrooms: National Agricultural Statistics Service (ISSN: 1949-1530)', 'https://downloads.usda.library.cornell.edu/usda-esmis/files/r781wg03d/j6732c00q/9p291j65f/mush0822.txt');
const usda1996Report: Citation = new Citation('United State Department of Agriculture. (1996) mushrooms: National Agricultural Statistics Service', 'https://downloads.usda.library.cornell.edu/usda-esmis/files/r781wg03d/xs55mf820/b8515q77c/Mush-08-16-1996.txt');
const washingtonPostMushBoom: Citation = new Citation('Sagon, C., & Sagon, Y. (1997, June 25). A MUSHROOM BOOM. Washington Post. Retrieved April 13, 2023, from https://www.washingtonpost.com/archive/lifestyle/food/1997/06/25/a-mushroom-boom/47922ff2-88d4-40f1-8f9d-6d2d9204f661/', 'https://www.washingtonpost.com/archive/lifestyle/food/1997/06/25/a-mushroom-boom/47922ff2-88d4-40f1-8f9d-6d2d9204f661/');
const nyTimesAfterThePortobello: Citation = new Citation('O’Neill, M. (1998, November 4). After the Portobello, It’s Mushroom Mania. The New York Times. Retrieved April 13, 2023, from https://www.nytimes.com/1998/11/04/dining/after-the-portobello-it-s-mushroom-mania.html', 'https://www.nytimes.com/1998/11/04/dining/after-the-portobello-it-s-mushroom-mania.html');
const wildAboutMushroomSf: Citation = new Citation('Wild About Mushrooms: Button Mushroom. (n.d.). https://www.mssf.org/cookbook/button.html', 'https://www.mssf.org/cookbook/button.html');

const historyAndCultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('The Common Store mushroom was first cultivated in the early 1700\'s in France.', [wildAboutMushroomSf]),
    new ValueWithCitation('Up until the mid 1990s, the only variety of the Common Store mushroom consumers wanted were Champignon, the immature white variety, because of their elegant, white aesthetic.', [usda1996Report, washingtonPostMushBoom, nyTimesAfterThePortobello]),
];

const scienceFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('The Common Store mushroom refers to the three mushrooms you will most likely find in a western grocery store: Cremini, Champignon, and Portobello.', [mushOfTheMonthAgric]),
    new ValueWithCitation('The Common Store mushroom is a secondary decomposer, meaning it consumes already decomposed materials, such as compost or the material broken down by other mushrooms.', [mushOfTheMonthAgric]),
];

const agricultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('In 1926, A Pennsylvania mushroom farmer found a clump of mushrooms with white caps growing in their mushroom bed. This fungi would later be given the name "Champignon" or "Button mushroom." Cultures were grown from this mutation, and now most Champignon grown today are descendants of those mushrooms.', [wildAboutMushroomSf]),
    new ValueWithCitation('As of 2022, The Common Store mushroom accounts for 91% of the mushrooms grown in the United States, but only 40% worldwide.', [usda2022Report, mushOfTheMonthAgric])
];

const learnMore: Citation[] = [
    new Citation('Common Store Mushroom Wikipedia', 'https://en.wikipedia.org/wiki/Agaricus_bisporus'),
    new Citation('Tom Volk\'s Fungus of the Month: Agaricus bisporus', 'https://botit.botany.wisc.edu/toms_fungi/apr2001.html'),
    new Citation('Wild About Mushrooms Cookbook: Common Store Mushroom', 'https://www.mssf.org/cookbook/button.html'),
    new Citation('Mushroom Revival Podcast: Commercial Button Mushroom Production & Myco-Materials with William Goss', 'https://www.mushroomrevival.com/blogs/podcast/commercial-button-mushroom-production-myco-materials-william-goss')
];


export const CommonStoreInfo: MushroomInfo = new MushroomInfo(
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