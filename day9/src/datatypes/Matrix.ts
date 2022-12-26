export default class Matrix {
    /** Number of rows of the matrix */
    private _rows: number;
    /** Number of columns of the matrix */
    private _columns: number;
    /** Values of the matrix as a two dimensional array */
    private _values: number[][];

    constructor(xLength: number, yLength: number) {
        this._rows = Math.max(yLength, 1);
        this._columns = Math.max(xLength, 1);
        // Create matrix filled with 0 by default
        this._values = new Array<number[]>(this._rows).fill([]).map(() => new Array<number>(this._columns).fill(0));
    }

    get rows() {
        return this._rows;
    }
    get columns() {
        return this._columns;
    }
    get values() {
        return this._values;
    }

    /**
     * Get a matrix value, from its position
     * @param row Matrix line, from 0 to `rows`
     * @param col Matric column, from 0 to `columns`
     */
    at(x: number, y: number): number {
        return this.values[y][x];
    }

    setAt(x: number, y: number, value: number) {
        this.values[y][x] = value
    }

    print() {
        for(let y = this._rows - 1 ; y >= 0 ; y--) {
            let string = '';
            for(let x = 0 ; x < this._columns ; x ++) {
                const value = this.at(x, y) 
                let formattedValue = '';
                if(value == 100) {
                    formattedValue = 'H'
                } else if(value == 0) {
                    formattedValue = '.'
                } else {
                    formattedValue = value+''
                }
                string += formattedValue
            }
            console.log(string)
        }
        console.log('------')
    }
}