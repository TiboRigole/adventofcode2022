import { Folder } from "./Folder"

export class FileSystem {
    private readonly rootFolder: Folder;
    private currentFolder: Folder;

    constructor() {
        this.rootFolder = new Folder('/');
        this.currentFolder = this.rootFolder;
    }
}