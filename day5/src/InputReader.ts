import * as fs from 'fs';
import { Move } from './Move';
import { Stack } from './stack/Stack';

export function readInput(textFile: string) : void {
    const allContents = fs.readFileSync(textFile, 'utf-8');
    const lines: string[] = allContents.split(/\r?\n/)

    const whiteLine = determineWhitelineIndex(lines);

    const moves: Move[] = [];
    for(let i = whiteLine + 1 ; i<lines.length; i++) {
        const line = lines[i];
        const move: Move = parseMoveLine(line)
        moves.push(move);
    }

    const stackArray: Stack<string>[] = []
    const amountOfStacks = calculateAmountOfStacks(moves);

    const matrix : string[][] = setupMatrix(lines, whiteLine);

    const stacks = fillInStacks(amountOfStacks, matrix);

    console.log('matrix parsed!');
}

export function determineWhitelineIndex(lines: string[]) : number {
    
    let emptyLineIndex : number = 0;

    lines.forEach((line, index) => {
        if(line == '') {
            emptyLineIndex = index;
        }
    });

    return emptyLineIndex
}

export function parseMoveLine(line: string) : Move {

    const pieces: string[] = line.split(' ');
    const amount: number = parseInt(pieces[1])
    const fromStack : number = parseInt(pieces[3]) - 1
    const toStack : number = parseInt(pieces[5]) - 1

    return new Move(amount, fromStack, toStack)
}

export function calculateAmountOfStacks(moves: Move[]) {
    let maximumStackNumber = 0;

    moves.forEach(move => {
        if(move.fromStack > maximumStackNumber) {
            maximumStackNumber = move.fromStack
        }
        if(move.toStack > maximumStackNumber) {
            maximumStackNumber = move.toStack
        }
    })
    
    return maximumStackNumber;
}

function setupMatrix(lines: string[], whiteLineBorder: number) : string[][] {
    const matrix : string[][] = [];


    for(let i = 0 ; i < whiteLineBorder ; i++) {
        
        matrix[i] = [];

        const line = lines[i]
        for(let j = 0; j < line.length; j++) {
            matrix[i][j] = line.charAt(j);    
        }
    }

    return matrix;
}

function fillInStacks(amountOfStacks: number, matrix: string[][]) : Stack<string>[] {
    const stackArray: Stack<string>[] = []

    const matrixWidth = matrix[0].length
    const matrixHeight = matrix.length

    const lastRow = matrix[matrixHeight - 1]

    for(let rowIndex = 0 ; rowIndex < lastRow.length ; rowIndex ++) {
        const lastRowValue = lastRow[rowIndex]
        if(lastRowValue !== ' ') {
            const stack = new Stack<string>();

            for(let columnIndex = matrixHeight - 2 ; columnIndex >= 0 ; columnIndex --) {
                const itemForStack = matrix[columnIndex][rowIndex]
                if(itemForStack !== ' ') {
                    stack.push(itemForStack)
                }
            }

            stackArray.push(stack)
        }
    }

 

    return stackArray;
}