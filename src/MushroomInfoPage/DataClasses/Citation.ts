
class Citation {
    citation: string;
    link: String;

    constructor(citation: string, link: String) {
        if (!this.validateUrlString(link)) throw new Error(`Citation link is not a proper URL: ${link}`)
        this.citation = citation;
        this.link = link;
    }

    static compare(a: Citation, b: Citation) {
    }

    private validateUrlString(urlString) {
        try { 
            return Boolean(new URL(urlString)); 
        }
        catch(e){ 
            return false; 
        }
    }
}

export default Citation;