import { File } from "./File";
import { Folder } from "./Folder"

export class FileSystem {
    private readonly rootFolder: Folder;
    private currentFolder: Folder;

    constructor() {
        this.rootFolder = new Folder('/');
        this.currentFolder = this.rootFolder;
    }

    goToRootFolder() {
        this.currentFolder = this.rootFolder;
    }

    getRootFolder() : Folder{
        return this.rootFolder;
    }

    moveUp() {
        const parentFolder = this.currentFolder.getParentFolder();

        if(parentFolder == undefined) {
            console.log(`found no parentFolder for ${this.currentFolder}!`)
            return;
        }
        this.currentFolder = parentFolder;
    }

    moveDownTo(folderWithName: string) {
        const subFolders = this.currentFolder.getSubFolders();
        const subFolderExists : boolean = subFolders.some(subFolder => subFolder.name === folderWithName)
        if(!subFolderExists) {
            const newFolder = this.createFolder(folderWithName)
            this.currentFolder = newFolder;
        } else {
            const subFolder = subFolders.find(subFolder => subFolder.name == folderWithName)
            if(subFolder == undefined) {
                console.log('a problem happened here!')
            } else {
                this.currentFolder = subFolder;
            }
        }
    }

    ls() : [File[], Folder[]] {
        return [this.currentFolder.getFiles(), this.currentFolder.getSubFolders()]
    }

    listFoldersRecursive() : Folder[] {
        const folders : Folder[] = [];
        folders.push(this.rootFolder);

        let newFolderFound = true
        let currentFolder = this.rootFolder;
        
        for(let i = 0 ; i< folders.length ; i++) {
            const foundFolders = folders[i].getSubFolders();
            folders.push(...foundFolders)
        }

        return folders;
    }



    createFile(file: File) {
        this.currentFolder.addFile(file);
    }

    createFolder(folderName: string) : Folder {
        const newFolder = new Folder(folderName);
        newFolder.setParentFolder(this.currentFolder);
        this.currentFolder.addSubFolder(newFolder);
        return newFolder;
    }

    calculateFolderSizes() {
        // this.rootFolder.calculateFolderSize();
        // this.rootFolder.getSubFolders().forEach(folder => {
            // folder.calculateFolderSize();
        // });
    }
}