import { ElvePair } from "./ElvePair";
import { readInput } from "./InputReader";

const elvePairs: ElvePair[] = readInput('./input/realInput.txt')
const amountTrue = elvePairs.map(elvePair => elvePair.hasSomeOverlap())
    .filter(bool => bool == true)
    .length;

console.log(amountTrue)
