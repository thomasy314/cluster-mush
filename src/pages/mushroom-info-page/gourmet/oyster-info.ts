import { 
    Citation,
    EcologicalGroup,
    MushroomInfo,
    ValueWithCitation
} from '../../../features/mushroom-info-page/data-objects';

import oysterPhoto from '../../../assets/photos/oyster/oyster.jpg';

const name: string = 'Oyster Mushroom';

const latinName: string = 'Pleurotus ostreatus';

const commonNames: string[] = [
    '(Japan) Hiratake',
    'Pearl Oyster Mushroom'
];

const etymology: string = 'This mushroom’s name refers to the shape of the cap resembling that of an oyster.';

const location: string = 'Occurs throughout Britain and Ireland as well as in most parts of mainland Europe. It is also widely distributed throughout much of Asia, including Japan, and is present in parts of North America.';

const ecologicalGroup: EcologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible: string = 'Yes! Has a meaty texture and an earthy flavor with anise notes.'

// Citations
const nematodesAttackedByMush: Citation = new Citation('Lee, C., Chang, H., Yang, C., Wali, N., Shie, J., & Hsueh, Y. (2020). Sensory cilia as the Achilles heel of nematodes when attacked by carnivorous mushrooms. Proceedings of the National Academy of Sciences of the United States of America, 117(11), 6014–6022. https://doi.org/10.1073/pnas.1918473117', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7084146/');
const growingGourmetAndMedicinalMush: Citation = new Citation('Stamets, P. (2000). Growing Gourmet and Medicinal Mushrooms. National Geographic Books.', 'https://fungi.com/products/growing-gourmet-and-medicinal-mushrooms');
const growToCleanEarth: Citation = new Citation('Rhodes, C. J. (2014). Mycoremediation (bioremediation with fungi) – growing mushrooms to clean the earth. Chemical Speciation and Bioavailability, 26(3), 196–198. https://doi.org/10.3184/095422914x14047407349335', 'https://doi.org/10.3184/095422914x14047407349335');
const mushOfTheMonthOyster: Citation = new Citation('Volk, T. (n.d.). Pleurotus ostreatus, the Oyster mushroom, Tom Volk’s Fungus of the Month for October 1998. https://botit.botany.wisc.edu/toms_fungi/oct98.html', 'https://botit.botany.wisc.edu/toms_fungi/oct98.html');
const breedingPotential: Citation = new Citation('Eger, G., Eden, G., & Wissig, E. T. (1976). Pleurotus Ostreatus ? breeding potential of a new cultivated mushroom. Theoretical and Applied Genetics, 47(4), 155–163. https://doi.org/10.1007/bf00278373', 'https://doi.org/10.1007/BF00278373');

// eslint-disable-next-line
const oxoBiodiodegradable: Citation = new Citation('Da Luz, J. M. R., Paes, S. A., Nunes, M. D., De Cássia Soares Da Silva, M., & Kasuya, M. C. M. (2013). Degradation of Oxo-Biodegradable Plastic by Pleurotus ostreatus. PLOS ONE, 8(8), e69386. https://doi.org/10.1371/journal.pone.0069386', 'https://doi.org/10.1371/journal.pone.0069386');
// eslint-disable-next-line
const degradeGreenBag: Citation = new Citation('Da Luz, J. M. R., Paes, S. A., Ribeiro, K. C. S., Mendes, I. C., & Kasuya, M. C. M. (2015). Degradation of Green Polyethylene by Pleurotus ostreatus. PLOS ONE, 10(6), e0126047. https://doi.org/10.1371/journal.pone.0126047', 'https://doi.org/10.1371/journal.pone.0126047');


export const historyAndCultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('First cultivated for human consumption during World War 1 by the Germans as a subsistence measure.', [breedingPotential])
];

const scienceFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Often found on living trees, appearing to be parasitic but in reality it is only eating the dead parts of the tree.', [growingGourmetAndMedicinalMush]),
    new ValueWithCitation('Oyster Mushrooms have been shown to be able to break down various types of oil, such as petroleum and diesel, into non-toxic compounds. It does this by producing enzymes that are normally used to break down the tough materials found in wood. Additionally, when analyzed after, the mushroom bodies were free of any oil residue.', [growingGourmetAndMedicinalMush, growToCleanEarth]),
];

const agricultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Oyster mushrooms are carnivores and will consume nematodes. This is beneficial for farmers and gardeners as the fungus can be mulched into garden soil to help reduce costly nematode populations', [nematodesAttackedByMush, growingGourmetAndMedicinalMush]),
    new ValueWithCitation('Soaking leftover Oyster mushroom substrate in water can produce various agricultural teas. Soaking in cold water can produce a nutritious fertilizer and insecticide, while hot water creates an herbicide.', [growingGourmetAndMedicinalMush]),
    new ValueWithCitation('One of the easier mushrooms to cultivate and is often recommended to first time growers.', [mushOfTheMonthOyster])
];

const learnMore: Citation[] = [
    new Citation('Oyster Mushroom Wikipedia', 'https://en.wikipedia.org/wiki/Pleurotus_ostreatus '),
    new Citation('Tom Volk\'s Fungus of the Month: Oyster Mushroom', 'https://botit.botany.wisc.edu/toms_fungi/oct98.html'),
    new Citation('Wild About Mushrooms Cookbook: Oyster Mushroom', 'https://www.mssf.org/cookbook/oyster.html'),
    new Citation('INaturalist Oyster Mushrooms', 'https://www.inaturalist.org/guide_taxa/498744#:~:text=Summary&text=Pleurotus%20ostreatus%2C%20the%20oyster%20mushroom,documented%20cultivation%20was%20by%20Kaufert'),
    new Citation('First Nature: Oyster Mushroom', 'https://www.first-nature.com/fungi/pleurotus-ostreatus.php')
];


export const OysterInfo: MushroomInfo = new MushroomInfo(
    name,
    [oysterPhoto],
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