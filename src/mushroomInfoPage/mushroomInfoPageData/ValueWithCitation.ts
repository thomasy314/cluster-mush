import Citation from "./Citation";

class ValueWithCitation<Type> {
    value: Type;
    citations: Citation[];

    constructor(value: Type, citations: Citation[]) {
        this.value = value;
        this.citations = citations;
    }

}

export default ValueWithCitation;