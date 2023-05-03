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
    'Rams head',
    'Sheep\'s head'
];

const etymology: string = '“Dancing Mushroom” from legend which says those who found this mushroom were so happy and excited that they would dance with joy when they came across it. The second theory is that due to the fluttering pattern on the fronds/caps, the mushroom resembled dancing.';

const location: string = 'Maitake are common in eastern North America and can also be found in europe and Eastern Asia'

const ecologicalGroup: EcologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible: string = 'Yes! Maitake around known for their woodsy and meaty felavor that lends itself well as a meat substitute.'

// Citations
const historyOfMaitake: Citation = new Citation('Mushrooms, G. (2018). The History of Maitake Cultivation — Mycopia Mushrooms. Mycopia Mushrooms. https://www.mycopia.com/blog/2013/08/12/the-history-of-maitake-cultivation', 'https://www.mycopia.com/blog/2013/08/12/the-history-of-maitake-cultivation');
const hikersNotesbook: Citation = new Citation('Hen of the Woods – Grifola frondosa. (2018, August 10). Hiker’s Notebook. https://hikersnotebook.blog/fungi/polypores-and-puffballs/hen-of-the-woods-grifola-frondosa/', 'https://hikersnotebook.blog/fungi/polypores-and-puffballs/hen-of-the-woods-grifola-frondosa/');
const mushroomExpert: Citation = new Citation('MushroomExpert.Com. (n.d.). Grifola frondosa (MushroomExpert.Com). http://www.mushroomexpert.com/grifola_frondosa.html', 'http://www.mushroomexpert.com/grifola_frondosa.html');
const mushOfTheMonthMaitake: Citation = new Citation('Volk, T. (n.d.).Grifola frondosa, the hen of the woods, sheepshead or maitake-- Tom Volk’s Fungus of the Month for November 2006. (n.d.). http://botit.botany.wisc.edu/toms_fungi/nov2006.html', 'http://botit.botany.wisc.edu/toms_fungi/nov2006.html');

const historyAndCultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Due to a more challenging cultivation process, Maitakes only started being cultivated in the mid 1980\'s in Japan.', [historyOfMaitake, mushOfTheMonthMaitake]),
    new ValueWithCitation('Maitake have been used in east Asian cultures as medicine for millennia. It is specifically used to improve spleen and stomach ailments, calm nerves, and generally boost the immune system.', [mushOfTheMonthMaitake])
];

const scienceFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('Maitake are polypore fungus. This means that instead of having gills, they have small holes called pores which produce spores.', [mushroomExpert]),
    new ValueWithCitation('The Maitake is slightly parasitic to Oak trees, getting nutrients from the roots. This relationship is semi-positive for the tree as the fungus will try to keep the tree alive for as long as possible to maximize its own life. That being said, the host tree eventually dies due to a combination of fungal infection and other environmental stresses.', [mushOfTheMonthMaitake])
];

const agricultureFacts: ValueWithCitation<string>[] = [
    new ValueWithCitation('The Maitake is a perennial fungus, meaning it will continue to produce mushrooms anywhere from 5 to 10 years.', [mushOfTheMonthMaitake]),
    new ValueWithCitation('The Maitake fruiting body (aka mushroom) can grow up to 2 feet (0.6 m) in diameter and weigh upwards of 80 pounds.', [hikersNotesbook])
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