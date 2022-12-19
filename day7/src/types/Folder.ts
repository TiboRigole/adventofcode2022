import { File } from "./File";

export class Folder {
    readonly name: string;
    private readonly files: File[];
    private readonly subFolders: Folder[];
    private parentFolder?: Folder;
    private totalSize?: number;

    constructor(name: string) {
        this.name = name;
        this.files = [];
        this.subFolders = [];
        this.parentFolder = undefined
        this.totalSize = 0
    }

    addFile(file: File) {
        this.files.push(file);
    }

    getFiles(): File[] {
        return this.files;
    }

    setParentFolder(folder: Folder) {
        this.parentFolder = folder;
    }

    getParentFolder() : Folder | undefined {
        return this.parentFolder
    }

    addSubFolder(folder: Folder) {
        folder.setParentFolder(this)
        this.subFolders.push(folder)
    }

    getSubFolders(): Folder[] {
        return this.subFolders;
    }

    calculateFolderSize(): number {
        let countingSize = 0

        for(let i = 0 ; i < this.files.length ; i++) {
            countingSize += this.files[i].getSize()
        }

        for(let i = 0 ; i < this.subFolders.length ; i++) {
            countingSize += this.subFolders[i].calculateFolderSize()
        }

        return countingSize
    }

    setTotalSize(foundSize : number) {
        this.totalSize = foundSize
    }

    getTotalSize() : number {
        return this.totalSize!!;
    }
}