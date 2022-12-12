import { Elve } from "./Elve"

export class ElvePair {

    private readonly firstElve: Elve
    private readonly secondElve: Elve

    constructor(first: Elve, second: Elve) {
        this.firstElve = first;
        this.secondElve = second;
    }

    public hasFullOverlap() : boolean {
        return this.firstElve.hasFullOverlap(this.secondElve)
    }

    public hasSomeOverlap() : boolean {
        return this.firstElve.hasSomeOverlap(this.secondElve);
    }

}