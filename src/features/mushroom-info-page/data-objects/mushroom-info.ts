import EcologicalGroup from "./ecological-group";
import ValueWithCitation from "./value-with-citation";
import Citation from "./citation";
import { stringToPath } from "../../../routing/routing-path-helpers";
import React from "react";

class MushroomInfo {
    name: string; 
    images: string[];
    latinName: string; 
    latinSubInfo?: string;
    commonNames: string[]; 
    etymology: React.ReactNode; 
    location: string;
    ecologicalGroup: EcologicalGroup;
    edible: string;
    historyAndCulture: ValueWithCitation<string>[];
    science: ValueWithCitation<string>[];
    agriculture: ValueWithCitation<string>[];
    learnMore: Citation[];
    // TODO: create whole shop page with shop items

    constructor(
        name: string, 
        images: string[],
        latinName: string, 
        commonNames: string[], 
        etymology: React.ReactNode, 
        location: string,
        ecologicalGroup: EcologicalGroup,
        edible: string,
        historyAndCulture: ValueWithCitation<string>[],
        science: ValueWithCitation<string>[],
        agriculture: ValueWithCitation<string>[],
        learnMore: Citation[],
        latinSubInfo?: string,
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
            this.learnMore = learnMore;
            this.latinSubInfo = latinSubInfo;
        }

    getHistoryAndCultureValues() : string[] {
        return this.historyAndCulture.map(valWithRef => valWithRef.value);
    }

    getScienceValues(): string[] {
        return this.science.map(valWithRef => valWithRef.value);
    }

    getAgricultureValues(): string[] {
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

        return [...new Set<Citation>(citations)];
    }

    getCommonNamePath = (): string => {
        return stringToPath(this.name);
    }

    getLatinNamePath = (): string => {
        return stringToPath(this.latinName);
    }
}

export default MushroomInfo;