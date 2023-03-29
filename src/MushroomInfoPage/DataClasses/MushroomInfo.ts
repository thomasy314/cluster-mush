import EcologicalGroup from "./EcologicalGroup";
import ValueWithReference from "./ValueWithReference";

class MushroomInfo {
    name: string | ValueWithReference<string>; 
    images: File[];
    latinName: string | ValueWithReference<string>; 
    commonNames: (string | ValueWithReference<string>)[]; 
    etymology: string | ValueWithReference<string>; 
    location: string | ValueWithReference<string>;
    ecologicalGroup: EcologicalGroup | ValueWithReference<EcologicalGroup>;
    edible: string | ValueWithReference<string>;
    historyAndCulture: ValueWithReference<string>[];
    science: ValueWithReference<string>[];
    agriculture: ValueWithReference<string>[];

    constructor(
        name: string | ValueWithReference<string>, 
        images: File[],
        latinName: string | ValueWithReference<string>, 
        commonNames: (string | ValueWithReference<string>)[], 
        etymology: string | ValueWithReference<string>, 
        location: string | ValueWithReference<string>,
        ecologicalGroup: EcologicalGroup | ValueWithReference<EcologicalGroup>,
        edible: string | ValueWithReference<string>,
        historyAndCulture: ValueWithReference<string>[],
        science: ValueWithReference<string>[],
        agriculture: ValueWithReference<string>[]
        ) {
            this.name = name;
            this.images = images;
            this.latinName = latinName;
            this.commonNames = commonNames;
            this.etymology = etymology;
            this.location = location;
            this.ecologicalGroup = ecologicalGroup;
            this.edible = edible;
            this.historyAndCulture = historyAndCulture;
            this.science = science;
            this.agriculture = agriculture

        }

    getCommonNamesString = (): string => {
        return this.commonNames.join(', ');
    }
}

export default MushroomInfo;