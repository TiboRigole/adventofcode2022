import { readInput } from "./InputReader";
import { Command } from "./types/commands/Command";
import { FileSystem } from "./types/FileSystem";

const fileSystem = new FileSystem();

const commands: Command[] = readInput('./input/realInput.txt');
commands.forEach(command => {
    console.log('executing command', command)
    command.execute(fileSystem);
    console.log('done executing command', command)
})

const folders = fileSystem.listFoldersRecursive()
folders.forEach(folder => {
    const totalSize = folder.calculateFolderSize();
    folder.setTotalSize(totalSize)
})

const smallFolders = folders.filter(folder => {
    const totalSize = folder.getTotalSize() 
    return totalSize !== undefined && totalSize < 100000
})

const totalSizesOfSmallFolders = smallFolders.reduce((prev, current) => {return prev + current.getTotalSize()}, 0)

console.log(totalSizesOfSmallFolders)