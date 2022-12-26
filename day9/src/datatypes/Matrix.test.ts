import Matrix from "./Matrix"

describe('matrix tests', () => {
    it('matrix with 3 rows and 2 columns', () => {
        const matrix = new Matrix(2, 3);

        matrix.setAt(0,0,1)
        matrix.setAt(1,0,2)
    
        matrix.print()

        // expecting 
        /**
         * x x
         * x x 
         * 1 2
         */
    })
})