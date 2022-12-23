import { rootCertificates } from "tls";
import { readInput } from "./InputReader";
import { Command } from "./types/commands/Command";
import { FileSystem } from "./types/FileSystem";
import { Folder } from "./types/Folder"

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

// const smallFolders = folders.filter(folder => {
//     const totalSize = folder.getTotalSize() 
//     return totalSize !== undefined && totalSize < 100000
// })

// const totalSizesOfSmallFolders = smallFolders.reduce((prev, current) => {return prev + current.getTotalSize()}, 0)
// console.log(totalSizesOfSmallFolders)

const totalDiskSize = 70000000
const minimumFreeDiskSize = 30000000
const totalOccupiedSize = fileSystem.getRootFolder().getTotalSize()
const unusedSpace = totalDiskSize - totalOccupiedSize;
const amountToBeFreedAtMinimum = minimumFreeDiskSize - unusedSpace;

const bigEnoughFolders = folders.filter(folder => {
    return folder.getTotalSize() > amountToBeFreedAtMinimum
});

let smallestFolder = bigEnoughFolders[0];
for(let i = 0 ; i < bigEnoughFolders.length ; i++) {
    if(bigEnoughFolders[i].getTotalSize() < smallestFolder.getTotalSize()) {
        smallestFolder = bigEnoughFolders[i]
    }
} 

console.log(smallestFolder.getTotalSize())