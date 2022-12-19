import { ChangeDirectoryCommand, Direction } from "./commands/ChangeDirectoryCommand";
import { Command } from "./commands/Command";
import { ListCommand } from "./commands/ListCommand";
import { File } from "./File";
import { FileSystem } from "./FileSystem"

describe('the following commands are executed', () => {
    it('a ls creates files when they aren`t found', () => {
        const fileSystem: FileSystem = new FileSystem();

        const listCommand = new ListCommand();
        listCommand.setProperties([
            new File('b.txt', 14848514),
            new File('c.dat', 8504156)
        ], ['a', 'd']);

        const commands: Command[] = [
            new ChangeDirectoryCommand(Direction.TO_ROOT),
            listCommand,
        ]

        // commands.executeAll()
    })
})