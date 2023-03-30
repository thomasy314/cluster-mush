import EcologicalGroup from "./EcologicalGroup";
import ValueWithCitation from "./ValueWithReference";
import Citation from "./Citation";

class MushroomInfo {
    name: String; 
    images: File[];
    latinName: String; 
    commonNames: String; 
    etymology: String; 
    location: String;
    ecologicalGroup: EcologicalGroup;
    edible: String;
    historyAndCulture: ValueWithCitation<String>[];
    science: ValueWithCitation<String>[];
    agriculture: ValueWithCitation<String>[];
    wikiPage: Citation;

    constructor(
        name: String, 
        images: File[],
        latinName: String, 
        commonNames: String, 
        etymology: String, 
        location: String,
        ecologicalGroup: EcologicalGroup,
        edible: String,
        historyAndCulture: ValueWithCitation<String>[],
        science: ValueWithCitation<String>[],
        agriculture: ValueWithCitation<String>[],
        wikiPage: Citation
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
            this.wikiPage = wikiPage;
        }

    getHistoryAndCultureValues() : String[] {
        return this.historyAndCulture.map(valWithRef => valWithRef.value);
    }

    getScienceValues(): String[] {
        return this.science.map(valWithRef => valWithRef.value);
    }

    getAgricultureValues(): String[] {
        return this.agriculture.map(valWithRef => valWithRef.value);
    }

    getCitations(): Citation[] {
        const citations = [...this.historyAndCulture, ...this.science, ...this.agriculture]
            .flatMap(valWithCit => valWithCit.citations)
            .filter(cit => cit)
            .sort((a, b) => {
                    if ( a.citation < b.citation ){
                        return -1;
                    }
                    if ( a.citation > b.citation ){
                        return 1;
                    }
                    return 0; 
                })

        return [...new Set<Citation>([this.wikiPage, ...citations])];
    }
}

export default MushroomInfo;