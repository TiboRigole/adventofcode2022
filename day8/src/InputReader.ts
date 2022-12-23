import * as fs from 'fs';
import {Matrix} from "ts-matrix";

export function readInput(textFile: string) : Matrix {
    const allContents = fs.readFileSync(textFile, 'utf-8');
    const lines: string[] = allContents.split(/\r?\n/)

    const columns = lines.length;
    const rows = lines[0].length


    const values: number[][] = [];

    for(let column = 0 ; column < lines.length ; column++) {
        values[column] = []
        for(let row = 0 ; row < lines[column].length ; row++) {
            values[column][row] = parseInt(lines[column].charAt(row))
        }
    }

    const matrix = new Matrix(rows, columns, values);
    return matrix;
}