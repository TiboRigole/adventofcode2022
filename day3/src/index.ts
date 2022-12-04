import readInput from "./InputReader";
import {RuckSack} from "./RuckSack";
import {Item} from "./Item";
import {ScoreCalculator} from "./ScoreCalculator";

const ruckSacks :Array<RuckSack> = readInput('./res/realinput.txt')

const scoreCalculator = new ScoreCalculator();

const duplicateItems : Array<Item|undefined> = []
for (let i = 0; i < ruckSacks.length; i++) {
    const ruckSack = ruckSacks[i];

    duplicateItems.push(ruckSack.findItemInBothHalves())
}

let totalScore : number = 0

for (let i = 0; i < duplicateItems.length; i++) {
    const item : Item|undefined = duplicateItems[i]

    if(item != undefined) {
        const deltaScore = scoreCalculator.getScoreOfValue(item)
        totalScore += deltaScore ? deltaScore : 0
    }
}

console.log(totalScore)