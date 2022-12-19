import * as fs from 'fs';
import { ChangeDirectoryCommand, Direction } from './types/commands/ChangeDirectoryCommand';
import { Command } from './types/commands/Command';
import { ListCommand } from './types/commands/ListCommand';

export function readInput(textFile: string) : Command[] {

    const commands: Command[] = [];

    const allContents = fs.readFileSync(textFile, 'utf-8');
    const lines: string[] = allContents.split(/\r?\n/)


    for(let i = 0 ; i < lines.length ; i++) {
        const line = lines[i]
        console.log(`startin with line: ${line}`)
        if(line.startsWith('$')) {
            if(line[2] === 'c' && line[3] === 'd') {
                
                if(line[5] === '/' ) {
                    const moveToRootFolderCommand = new ChangeDirectoryCommand(Direction.TO_ROOT, undefined)
                    commands.push(moveToRootFolderCommand);
                    // move to rootfolder
                } else if(line[5] === '.' && line[6] === '.') {
                    const moveUpFolderCommand = new ChangeDirectoryCommand(Direction.UP, undefined)
                    commands.push(moveUpFolderCommand);
                } else {
                    const toFolder = line.substring(5);
                    const changeToSubFolderCommand = new ChangeDirectoryCommand(Direction.DOWN, toFolder)
                    commands.push(changeToSubFolderCommand)
                }
            } else if(line[2] == 'l' && line[3] == 's') {
                const listCommand = new ListCommand();
            
                if(i+1 < lines.length && !lines[i+1].startsWith('$')) {
                    i = i+1;
                    while(i < lines.length && !lines[i].startsWith('$')) {
                        listCommand.addLine(lines[i])
                        i = i+1
                    }
                    i = i-1
                }
            

                commands.push(listCommand);
            } else {
                console.log('this command does not seem to be supported' + line[i])
            }
        }
    }

    return commands;
}
