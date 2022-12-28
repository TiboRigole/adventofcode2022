import { Add, Instruction, NoOp } from "./Instruction";
import * as fs from 'fs';

export function readInput(textFile: string) : Instruction[] {

    const instructions: Instruction[] = [];

    const allContents = fs.readFileSync(textFile, 'utf-8');
    const lines: string[] = allContents.split(/\r?\n/)

    lines.forEach(line => {
        if(line == 'noop') {
            instructions.push(new NoOp())
        } else {
            const pieces: string[] = line.split(' ')
            instructions.push(new Add(parseInt(pieces[1])))
        }
    })

    return instructions
}