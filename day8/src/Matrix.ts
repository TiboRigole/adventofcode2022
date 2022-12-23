export default class Matrix {
    /** Number of rows of the matrix */
    private _rows: number;
    /** Number of columns of the matrix */
    private _columns: number;
    /** Values of the matrix as a two dimensional array */
    private _values: number[][];

    constructor(rows: number, columns: number) {
        this._rows = Math.max(rows, 1);
        this._columns = Math.max(columns, 1);
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
    at(row: number, col: number): number {
        return this.values[row][col];
    }

    setAt(row: number, col: number, value: number) {
        this.values[row][col] = value
    }
}