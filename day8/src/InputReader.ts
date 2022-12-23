import * as fs from 'fs';
import Matrix from "./Matrix";

export function readInput(textFile: string) : Matrix {
    const allContents = fs.readFileSync(textFile, 'utf-8');
    const lines: string[] = allContents.split(/\r?\n/)

    const columns = lines.length;
    const rows = lines[0].length

    const matrix = new Matrix(rows, columns);
    for(let column = 0 ; column < lines.length ; column++) {
        for(let row = 0 ; row < lines[column].length ; row++) {
            matrix.setAt(row, column, parseInt(lines[column].charAt(row)))
        }
    }

    return matrix;
}