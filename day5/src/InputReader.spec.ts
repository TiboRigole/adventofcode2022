import * as fs from 'fs';
import { determineWhitelineIndex, parseMoveLine } from './InputReader';
import { Move } from './Move';

describe('input validation', () => {
    it('finds the white line at index 4', () => {
        const allContents = fs.readFileSync('./input/testinput.txt', 'utf-8');
        const lines: string[] = allContents.split(/\r?\n/)

        const index = determineWhitelineIndex(lines);

        expect(index).toBe(4);
    })

    it('parses a single digit move correctly', () => {
        const string = 'move 1 from 2 to 1'

        const move: Move = parseMoveLine(string)

        expect(move.fromStack).toBe(1)
        expect(move.toStack).toBe(0)
        expect(move.amount).toBe(1);
    })

    
    it('parses a double digit move correctly', () => {
        const string = 'move 15 from 23 to 19'

        const move: Move = parseMoveLine(string)
        
        expect(move.fromStack).toBe(22)
        expect(move.toStack).toBe(18)
        expect(move.amount).toBe(15);
    })
})