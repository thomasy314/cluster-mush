// @ts-ignore - need to have .ts for some reason
import EcologicalGroup from "../DataClasses/EcologicalGroup.ts";
// @ts-ignore - need to have .ts for some reason
import MushroomInfo from "../DataClasses/MushroomInfo.ts";

import shiitakePhoto from '../Photos/Shiitake/TOM02800.jpg';

const historyAndCultureFacts: string[] = [
    'The cultivation of Shiitake mushrooms date back to the Sung Dynasty in China, around 960-1127 C.E.',
    'The technique for cultivating Shiitake was first writen down in 1313 by the Chinese author Wang Zhen in his book "Nong Shu" (農書) or "Book of Agriculture".'
];

const scienceFacts: string[] = [
    'Shiitake mushrooms have shown to improve the quality of life and efficacy of chemotherapy and radiation therapy.',
    'Shiitake contain a special type of polysacharide (carbohydrate) called Lentinan which helps stimulate the immune system. For this reason, scientists are exploring its potential to help people with acquired immunodeficiency syndrome (AIDS).',
    'The health benefits of Shiitake mushrooms can be obtained through eating them or through brewing a tea and letting the mushrooms soak in the hot water.'
];

const agricultureFacts: string[] = [
    'Shiitake mushrooms are the second most cultivated mushroom in the world',
    'The traditional method of cultivation practiced in China and Japan is called "Soak and Strike". This had cultivators lean logs against already infects trees and let the spores inoculate the fresh logs. These logs would then be buried for a year to allow for colonization of the mycelium throughout the log. Finally, after unburing the log, you strike it with other sticks. Once struck, this told the fungus to start fruiting.',
];

const ShiitakeInfo = new MushroomInfo(
    "Shiitake",
    [shiitakePhoto],
    'Lentinula edodes',
    ['Shiitake', 'Dongo (China)', 'Shanku (China)', 'black forest mushroom', 'golden oak mushroom', 'sawtooth oak mushroom'],
    'Shii comes from the Shii tree which was often used for cultivation. "Take" is the Japanese word for mushroom.',
    "East Asia, very common on Japan and China",
    EcologicalGroup.SAPROPHYTIC,
    "Yes! The mushroom cap has a meaty texture and a woodsy flavor that intensifies as it is cooked. The stem is very tough so it is commonly used for making broth",
    historyAndCultureFacts,
    scienceFacts,
    agricultureFacts 
)

export default ShiitakeInfo;
