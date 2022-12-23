import {readInput} from "./InputReader";
import Matrix from "./Matrix";

const matrix: Matrix = readInput('./inputs/realinput.txt')

let amountVisible = 0;

// count border items
amountVisible += ((matrix.rows * 2) + ((matrix.columns - 2) * 2))

for (let row = 1; row < matrix.rows - 1; row++) {
    for (let column = 1; column < matrix.columns - 1; column++) {

        if (isVisibleAt(matrix, row, column)) {
            amountVisible++
        }

    }
}

console.log(amountVisible)

function isVisibleAt(matrix: Matrix, row: number, column: number): boolean {
    return lookUp(matrix, row, column)
        || lookDown(matrix, row, column)
        || lookLeft(matrix, row, column)
        || lookRight(matrix, row, column)
}


// look up
function lookUp(matrix: Matrix, row: number, column: number): boolean {
    const currentValue = matrix.at(row, column)
    for (let i = column - 1; i >= 0; i--) {
        if (currentValue <= matrix.at(row, i)) {
            return false;
        }
    }
    return true;
}

// look down
function lookDown(matrix: Matrix, row: number, column: number): boolean {
    const currentValue = matrix.at(row, column)
    for (let i = column + 1; i < matrix.columns; i++) {
        if (currentValue <= matrix.at(row, i)) {
            return false;
        }
    }
    return true;
}

// look left
function lookLeft(matrix: Matrix, row: number, column: number): boolean {
    const currentValue = matrix.at(row, column)
    for (let i = row - 1; i >= 0; i--) {
        if (currentValue <= matrix.at(i, column)) {
            return false;
        }
    }
    return true;
}

// look right
function lookRight(matrix: Matrix, row: number, column: number): boolean {
    const currentValue = matrix.at(row, column)
    for (let i = row + 1; i < matrix.rows; i++) {
        if (currentValue <= matrix.at(i, column)) {
            return false;
        }
    }
    return true;
}