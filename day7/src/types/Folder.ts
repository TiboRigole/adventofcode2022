import { File } from "./File";

export class Folder {
    private readonly name: string;
    private readonly files: File[];
    private readonly folders: Folder[];

    constructor(name: string) {
        this.name = name;
        this.files = [];
        this.folders = [];
    }

    addFile(file: File) {
        this.files.push(file);
    }

    addSubFolder(folder: Folder) {
        this.folders.push(folder)
    }
}