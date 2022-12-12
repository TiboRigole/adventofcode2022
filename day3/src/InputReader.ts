import * as fs from 'fs';
import { Group } from './Group';
import {RuckSack} from './RuckSack'

export default function readInput(fileName: string): RuckSack[] {
    const allContents = fs.readFileSync(fileName, 'utf-8');

    const ruckSacks: RuckSack[] = [];

    allContents.split(/\r?\n/).forEach((line) => {
        ruckSacks.push(new RuckSack(line))
    });


    return ruckSacks;
}

export function readInputInGroups(fileName: string, amountPerGroup: number): Array<Group> {
    const allContents = fs.readFileSync(fileName, 'utf-8');

    const ruckSacks: RuckSack[] = [];

    allContents.split(/\r?\n/).forEach((line, index) => {
        ruckSacks.push(new RuckSack(line))
    });

    const groupedRuckSacks: Array<Group> = [];

    for(let i = 0 ; i <ruckSacks.length ; i++) {
        if(i%amountPerGroup == 0) {

            const subList:RuckSack[] = []
            for(let j = i; j< i+amountPerGroup; j++) {
                subList.push(ruckSacks[j]);
            }

            groupedRuckSacks.push(new Group(amountPerGroup, subList));
        }
    }


    return groupedRuckSacks;
}