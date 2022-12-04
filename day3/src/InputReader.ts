import * as fs from 'fs';
import {RuckSack} from './RuckSack'

export default function readInput(fileName: string): RuckSack[] {
    const allContents = fs.readFileSync(fileName, 'utf-8');

    const ruckSacks: RuckSack[] = [];

    allContents.split(/\r?\n/).forEach((line) => {
        ruckSacks.push(new RuckSack(line))
    });


    return ruckSacks;
}