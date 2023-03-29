
class ValueWithReference<Type> {
    content: Type;
    link: string;

    constructor(content: Type, link: string) {
        this.content = content;
    }
}

export default ValueWithReference;