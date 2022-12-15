export class File {
    private readonly name: string;
    private readonly size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}