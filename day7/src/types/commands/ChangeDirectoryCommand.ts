import { FileSystem } from "../FileSystem";
import { Command } from "./Command";

export enum Direction {
    UP,
    TO_ROOT,
    DOWN,
}

export class ChangeDirectoryCommand extends Command {
    private readonly direction: Direction;
    private readonly toFolderWithName?: string;

    constructor(direction : Direction, toFolderWithName?: string) {
        super();
        this.direction = direction;
        this.toFolderWithName = toFolderWithName;
    }

    execute(fileSystem: FileSystem) {
        switch(this.direction) {
            case Direction.DOWN:
                fileSystem.moveDownTo(this.toFolderWithName!!)
                return;
            case Direction.UP:
                fileSystem.moveUp();
                return;
            case Direction.TO_ROOT:
                fileSystem.goToRootFolder()
                return;
        }
    }
}

