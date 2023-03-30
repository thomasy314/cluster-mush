
class Citation {
    citation: string;
    link: String;

    constructor(citation: string, link: String) {
        this.citation = citation;
        this.link = link;
    }

    static compare(a: Citation, b: Citation) {
    }
}

export default Citation;