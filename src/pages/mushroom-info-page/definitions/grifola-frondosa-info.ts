import { 
    Citation,
    EcologicalGroup,
    MushroomInfo,
    ValueWithCitation
} from '../../../features/mushroom-info-page/data-objects';

import maitakePhoto from '../../../assets/photos/maitake/maitake.jpg';

const name: string = 'Maitake';

const latinName: string = 'Grifola frondosa';

const commonNames: string[] = [
    '(Japan) 舞茸 (Maitake, dancing mushroom)',
    'Hen-of-the-woods',
    'Ram\'s head',
    'Sheep\'s head'
];

const etymology: string = 'In Japanese, the name Maitake translates to "Dancing mushroom." According to legend, encountering this mushroom would fill people with such happiness and excitement that they would joyfully dance around. Another theory behind its name suggests that the fluttering pattern of the fronds or caps resembles a dancing motion.';

const location: string = 'Maitake are common in eastern North America and can also be found in Europe and East Asia.'

const ecologicalGroup: EcologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible: string = 'Yes! Maitake mushrooms are renowned for their rich and earthy flavor, which makes them an excellent choice as a meat substitute.'

// Citations
const historyOfMaitake: Citation = new Citation('Mushrooms, G. (2018). The History of Maitake Cultivation — Mycopia Mushrooms. Mycopia Mushrooms. https://www.mycopia.com/blog/2013/08/12/the-history-of-maitake-cultivation', 'https://www.mycopia.com/blog/2013/08/12/the-history-of-maitake-cultivation');
const hikersNotebook: Citation = new Citation('Hen of the Woods – Grifola frondosa. (2018, August 10). Hiker’s Notebook. https://hikersnotebook.blog/fungi/polypores-and-puffballs/hen-of-the-woods-grifola-frondosa/', 'https://hikersnotebook.blog/fungi/polypores-and-puffballs/hen-of-the-woods-grifola-frondosa/');
const mushroomExpert: Citation = new Citation('MushroomExpert.Com. (n.d.). Grifola frondosa (MushroomExpert.Com). http://www.mushroomexpert.com/grifola_frondosa.html', 'http://www.mushroomexpert.com/grifola_frondosa.html');
const mushOfTheMonthMaitake: Citation = new Citation('Volk, T. (n.d.).Grifola frondosa, the hen of the woods, sheepshead or maitake-- Tom Volk’s Fungus of the Month for November 2006. (n.d.). http://botit.botany.wisc.edu/toms_fungi/nov2006.html', 'http://botit.botany.wisc.edu/toms_fungi/nov2006.html');

const historyAndCultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Due to a more challenging cultivation process, Maitakes only started being cultivated in the mid 1980\'s in Japan.', [historyOfMaitake, mushOfTheMonthMaitake]),
    new ValueWithCitation('Maitake have been used in East Asian cultures as medicine for millennia. Specifically, it is employed to improve spleen and stomach ailments, calm nerves, and bolster the immune system.', [mushOfTheMonthMaitake])
];

const scienceFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Maitake are polypore fungus. This means that instead of having gills, they have small holes called pores which produce spores.', [mushroomExpert]),
    new ValueWithCitation('The Maitake mushroom is slightly parasitic to trees, obtaining nutrients from their roots. It is only “slightly” parasitic because this relationship is semi-beneficial to the tree, as the fungus strives to prolong the tree\'s life for its own benefit. However, over time, the host tree succumbs to a combination of fungal infection and other environmental stresses, ultimately leading to its demise.', [mushOfTheMonthMaitake])
];

const agricultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('The Maitake is a perennial fungus, meaning it will continue to produce mushrooms anywhere from 5 to 10 years', [mushOfTheMonthMaitake]),
    new ValueWithCitation('The Maitake fruiting body (aka mushroom) can grow up to 2 feet (0.6 m) in diameter and weigh upwards of 80 pounds. (36 kg).', [hikersNotebook])
];

const learnMore: Citation[] = [
    new Citation('Maitake Wikipedia', 'https://en.wikipedia.org/wiki/Grifola_frondosa'),
    new Citation('Tom Volk\'s Fungus of the Month: Maitake', 'http://botit.botany.wisc.edu/toms_fungi/nov2006.html'),
    new Citation('Mycopia: The History of Maitake Cultivation', 'https://www.mycopia.com/blog/2013/08/12/the-history-of-maitake-cultivation')
];

export const MaitakeInfo: MushroomInfo = new MushroomInfo(
    name,
    [maitakePhoto],
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