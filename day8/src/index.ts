import {readInput} from "./InputReader";
import Matrix from "./Matrix";
import calculateScore from "./SightScoreCalculator";

const matrix: Matrix = readInput('./inputs/realinput.txt')
const scoreMatrix: Matrix = new Matrix(matrix.rows, matrix.columns)

for (let row = 1; row < matrix.rows - 1; row++) {
    for (let column = 1; column < matrix.columns - 1; column++) {
        const score = calculateScore(matrix, row, column);
        scoreMatrix.setAt(row, column, score);
    }
}

let max = 0;
for (let row = 1; row < matrix.rows - 1; row++) {
    for (let column = 1; column < matrix.columns - 1; column++) {
        if(scoreMatrix.at(row, column) > max) {
            max = scoreMatrix.at(row, column)
        }
    }
}

console.log(max)