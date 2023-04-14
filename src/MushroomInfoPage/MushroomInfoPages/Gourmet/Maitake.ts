// @ts-ignore - need to have .ts for some reason
import Citation from "../../DataClasses/Citation.ts";
// @ts-ignore - need to have .ts for some reason
import EcologicalGroup from "../../DataClasses/EcologicalGroup.ts";
// @ts-ignore - need to have .ts for some reason
import MushroomInfo from "../../DataClasses/MushroomInfo.ts";
// @ts-ignore - need to have .ts for some reason
import ValueWithReference from "../../DataClasses/ValueWithCitation.ts";

import maitakePhoto from '../../../Photos/Maitake/maitake.jpg';

const name = 'Maitake'

const latinName = 'Grifola frondosa'

const commonNames = [
    '舞茸 (maitake) (dancing mushroom)',
    'Hen-of-the-woods',
    'Rams head',
    'Sheaps head'
];

const etymology = 'There seems to be two explanations for the name "Dancing Mushroom". The first is that this mushroom was so rare that finding it would make you dance with joy. The second is that the fluttering cap shape resembles a dancing motion.';

const location = 'Maitake are common in eastern North America and can also be found in europe and Eastern Asia'

const ecologicalGroup = EcologicalGroup.SAPROPHYTIC;

const edible = 'Yes! Maitake around known for their woodsy and meaty felavor that lends itself well as a meat substitute.'

// Citations
const historyOfMaitake = new Citation('Mushrooms, G. (2018). The History of Maitake Cultivation — Mycopia Mushrooms. Mycopia Mushrooms. https://www.mycopia.com/blog/2013/08/12/the-history-of-maitake-cultivation', 'https://www.mycopia.com/blog/2013/08/12/the-history-of-maitake-cultivation');
const hikersNotesbook = new Citation('Hen of the Woods – Grifola frondosa. (2018, August 10). Hiker’s Notebook. https://hikersnotebook.blog/fungi/polypores-and-puffballs/hen-of-the-woods-grifola-frondosa/', 'https://hikersnotebook.blog/fungi/polypores-and-puffballs/hen-of-the-woods-grifola-frondosa/');
const mushroomExpert = new Citation('MushroomExpert.Com. (n.d.). Grifola frondosa (MushroomExpert.Com). http://www.mushroomexpert.com/grifola_frondosa.html', 'http://www.mushroomexpert.com/grifola_frondosa.html');
const mushOfTheMonthMaitake = new Citation('Volk, T. (n.d.).Grifola frondosa, the hen of the woods, sheepshead or maitake-- Tom Volk’s Fungus of the Month for November 2006. (n.d.). http://botit.botany.wisc.edu/toms_fungi/nov2006.html', 'http://botit.botany.wisc.edu/toms_fungi/nov2006.html');

const historyAndCultureFacts = [
    new ValueWithReference('Due to difficulties in cultivation, maitakes only started being cultivated in the mid 1980\'s in Japan.', [historyOfMaitake]),
    new ValueWithReference('Maitake has been used in east Asian cultures as medicine for milennia. It is specifically used to improve spleen and stomach ailments, calm nerves, and boost general immune system.', mushOfTheMonthMaitake)
];

const scienceFacts = [
    new ValueWithReference('This mushroom is a polypore. This means that instead of having gills, it has small holes called pores which produce spores.', [mushroomExpert]),
    new ValueWithReference('The maitake is slightly parasitic to Oak trees, getting nutrients from the roots. The positive part of this relationship is that the Maitake tries to keep the tree alive for as long as possible in order to maximize its own life. Evently, the host tree dies due to a combination of the fungal infection and environmental stresses as as drought and wind.', [mushOfTheMonthMaitake])
];

const agricultureFacts = [
    new ValueWithReference('Maitake are a perennial fungus. This means it can continue to produce mushrooms during the proper season anywhere from 5 to 10 years!', [mushOfTheMonthMaitake]),
    new ValueWithReference('The fruiting body of the mushroom can grow up to 2 feet in diameter and weight upwards of 80 pounds (36kg).', [hikersNotesbook])
];

const learnMore = [
    new Citation('Maitake Wikipedia', 'https://en.wikipedia.org/wiki/Grifola_frondosa'),
    new Citation('Tom Volk\'s Fungus of the Month: Maitake', 'http://botit.botany.wisc.edu/toms_fungi/nov2006.html'),
    new Citation('Mycopia: The History of Maitake Cultivation', 'https://www.mycopia.com/blog/2013/08/12/the-history-of-maitake-cultivation')
];


const MaitakeInfo = new MushroomInfo(
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
)

export default MaitakeInfo;