import readInput, { readInputInGroups } from "./InputReader";
import {RuckSack} from "./RuckSack";
import {Item} from "./Item";
import {ScoreCalculator} from "./ScoreCalculator";
import { Group } from "./Group";

const scoreCalculator = new ScoreCalculator();

const groups :Array<Group>  = readInputInGroups('./res/realinput.txt', 3)

const scores = groups.map(group => group.getDuplicateItem()).map(items  => items[0]).map(item => scoreCalculator.getScoreOfValue(item))

const totalScore : number = scores.reduce((accumulator: any, value: any) => {
    return accumulator + value;
  }, 0);

console.log(totalScore)