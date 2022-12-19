import { File } from "../File";
import { FileSystem } from "../FileSystem";
import { Folder } from "../Folder";
import { Command } from "./Command";

export class ListCommand extends Command {
    private expectedFiles : File[];
    private expectedFolderNames: string[];

    constructor() {
        super();
        this.expectedFiles = [];
        this.expectedFolderNames = [];
    }

    setProperties(expectedFiles: File[], expectedFolderNames: string[]) {
        this.expectedFiles = expectedFiles;
        this.expectedFolderNames = expectedFolderNames
    }

    addLine(line: string) {
        if(line.startsWith('dir')) {
            const expectedFolderName = line.substring(4)
            this.expectedFolderNames.push(expectedFolderName)
        } else {
            const parts = line.split(' ');
            const fileSize = parseInt(parts[0])
            
            const file = new File(parts[1], fileSize);
            this.expectedFiles.push(file)
        }
    }

    execute(fileSystem: FileSystem) {
        const foundFilesAndFolders : [File[], Folder[]]= fileSystem.ls()
        const foundFiles : File[] = foundFilesAndFolders[0]
        const foundFolders : Folder[] = foundFilesAndFolders[1]

        this.expectedFiles.forEach(expectedFile => {
            if(!this.fileAlreadyExists(foundFiles, expectedFile)) {
                fileSystem.createFile(expectedFile);
            }
        })

        this.expectedFolderNames.forEach(folderName => {
            if(!this.folderAlreadyExists(foundFolders, folderName)) {
                fileSystem.createFolder(folderName)
            }
        })
    }

    private folderAlreadyExists(folders: Folder[], folderName: string): boolean {
        return folders.some(folder => folder.name === folderName)
    }

    private fileAlreadyExists(files: File[], expectedFile: File) : boolean {
        return files.some(file => file.getName() === expectedFile.getName());
    }
}