import * as fs from "fs";
import {Direction, directionFromString} from "./datatypes/Direction";
import Move from "./datatypes/Move";

export function readInput(textFile: string) : Move[] {
    const allContents = fs.readFileSync(textFile, 'utf-8');
    const lines: string[] = allContents.split(/\r?\n/)

    const moves : Move[] = [];

    lines.forEach(line => {
        const pieces: string[] = line.split(' ')

        const direction : Direction = directionFromString(pieces[0])
        const amount : number = parseInt(pieces[1])

        moves.push(new Move(amount, direction))
    })

    return moves;
}