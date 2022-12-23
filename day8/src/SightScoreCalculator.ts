import Matrix from "./Matrix";

export default function calculateScore(matrix: Matrix, row: number, column :number) : number {
    return lookUp(matrix, row, column)
        * lookDown(matrix, row, column)
        * lookLeft(matrix, row, column)
        * lookRight(matrix, row, column)
}


// look up
export function lookUp(matrix: Matrix, row: number, column: number): number {
    const currentValue = matrix.at(row, column)
    let currentScore = 0
    for (let i = row - 1; i >= 0; i--) {
        currentScore++
        const height = matrix.at(i, column)
        if (currentValue <= height) {
            return currentScore;
        }
    }
    return currentScore;
}

// look down
export function lookDown(matrix: Matrix, row: number, column: number): number {
    const currentValue = matrix.at(row, column)
    let currentScore = 0
    for (let i = row + 1; i < matrix.rows; i++) {
        currentScore++
        if (currentValue <= matrix.at(i, column)) {
            return currentScore
        }
    }
    return currentScore
}

// look left
export function lookLeft(matrix: Matrix, row: number, column: number): number {
    const currentValue = matrix.at(row, column)
    let currentScore = 0;
    for (let i = column - 1; i >= 0; i--) {
        currentScore++
        if (currentValue <= matrix.at(row, i)) {
            return currentScore;
        }
    }
    return currentScore
}

// look right
export function lookRight(matrix: Matrix, row: number, column: number): number {
    const currentValue = matrix.at(row, column)
    let currentScore = 0;
    for (let i = column + 1; i < matrix.columns; i++) {
        currentScore++
        if (currentValue <= matrix.at(row, i)) {
            return currentScore;
        }
    }
    return currentScore
}