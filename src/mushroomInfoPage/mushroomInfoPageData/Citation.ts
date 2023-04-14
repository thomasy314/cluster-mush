
class Citation {
    citation: string;
    link: URL;

    constructor(citation: string, link: string) {
        this.citation = citation;
        this.link = new URL(link);
    }

    static compare(a: Citation, b: Citation) {
    }
}

export default Citation;