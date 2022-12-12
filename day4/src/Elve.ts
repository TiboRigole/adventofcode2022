export class Elve {
    private readonly lower : number
    private readonly upper: number

    constructor(lower: number, upper: number) {
        this.lower = lower;
        this.upper = upper;
    }

    public hasFullOverlap(otherElve: Elve) : boolean {
        if(this.lower <= otherElve.lower && otherElve.upper <= this.upper) {
            return true;
        }
        if(this.lower >= otherElve.lower && otherElve.upper >= this.upper) {
            return true;
        }
        return false;
    }
}