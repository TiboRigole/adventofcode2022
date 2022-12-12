import * as fs from 'fs';
import { Elve } from './Elve';
import { ElvePair } from './ElvePair';

export function readInput(textFile: string) : ElvePair[] {
    const allContents = fs.readFileSync(textFile, 'utf-8');
 
    const elvePairs: ElvePair[] = [];

    allContents.split(/\r?\n/).forEach((line, index) => {
        const elveStrings: string[] = line.split(',')

        if(elveStrings.length != 2) {
            console.log('we found a problem here, a line should only be 2 entries')
        }

        const numbersForFirstElve : number[] = parseToNumbers(elveStrings[0])
        const numbersForSecondElve : number[] = parseToNumbers(elveStrings[1]);

        const firstElve: Elve = new Elve(numbersForFirstElve[0], numbersForFirstElve[1])
        const secondElve: Elve = new Elve(numbersForSecondElve[0], numbersForSecondElve[1])
        elvePairs.push(new ElvePair(firstElve, secondElve));
    });

    return elvePairs;
}

function parseToNumbers(entry: string) : number[] {
    const numbersAsStringList : string[] = entry.split('-');
    return [parseInt(numbersAsStringList[0]), parseInt(numbersAsStringList[1])];
}