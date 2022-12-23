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