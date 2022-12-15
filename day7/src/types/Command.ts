import { File } from "./File";

export class Command {
}

export class ChangeDirectoryCommand extends Command {
    private readonly direction: Direction;
    private readonly toFolderWithName?: string;

    constructor(direction : Direction, toFolderWithName?: string) {
        super();
        this.direction = direction;
        this.toFolderWithName = toFolderWithName;
    }
}

export enum Direction {
    UP,
    TO_ROOT,
    DOWN,
}

export class ListCommand extends Command {
    private readonly expectedFiles : File[];
    private readonly expectedFolderNames: string[];

    constructor() {
        super();
        this.expectedFiles = [];
        this.expectedFolderNames = [];
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
        this.expectedFolderNames.push(line)
    }
}
