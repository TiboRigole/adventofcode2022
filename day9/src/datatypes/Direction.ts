export enum Direction {
    UP,
    LEFT,
    RIGHT,
    DOWN,
}

export function directionFromString(string: string) : Direction {
    switch(string) {
        case 'U': return Direction.UP;
        case 'D': return Direction.DOWN;
        case 'L': return Direction.LEFT;
        case 'R': return Direction.RIGHT;
    }
    throw new Error(`found no matching direction for ${string}`)
}

export function directionToString(direction: Direction) : string{
    switch(direction) {
        case Direction.UP: return 'U'; break;
        case Direction.DOWN: return 'D'; break;
        case Direction.LEFT: return 'L'; break;
        case Direction.RIGHT: return 'R'; break;
    }
}