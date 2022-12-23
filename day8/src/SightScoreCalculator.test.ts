import Matrix from "./Matrix";
import {lookDown, lookLeft, lookRight, lookUp} from "./SightScoreCalculator";

describe("calculate some sight scores", () => {
    it("calculate score for simple matrix to the left", () => {

        /*
                1 2 3
                4 5 10
                7 8 9
         */
        const matrix: Matrix = new Matrix(3,3);
        matrix.setAt(0,0, 1)
        matrix.setAt(0,1, 2)
        matrix.setAt(0,2, 3)
        matrix.setAt(1,0, 4)
        matrix.setAt(1,1, 5)
        matrix.setAt(1,2,10)
        matrix.setAt(2,0,7)
        matrix.setAt(2,1,8)
        matrix.setAt(2,2,9)

        expect(lookUp(matrix, 2, 0)).toBe(2)
        expect(lookUp(matrix, 2, 1)).toBe(2)
        expect(lookUp(matrix, 2, 2)).toBe(1)

        expect(lookDown(matrix, 0, 0)).toBe(1)
        expect(lookDown(matrix, 0, 1)).toBe(1)
        expect(lookDown(matrix, 0, 2)).toBe(1)

        expect(lookRight(matrix, 0, 0)).toBe(1)
        expect(lookRight(matrix, 1, 0)).toBe(1)
        expect(lookRight(matrix, 2, 0)).toBe(1)

        expect(lookLeft(matrix, 0, 2)).toBe(2)
        expect(lookLeft(matrix, 1, 2)).toBe(2)
        expect(lookLeft(matrix, 2, 2)).toBe(2)
    })
})