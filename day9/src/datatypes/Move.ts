import {Direction} from "./Direction";

export default class Move {
    readonly amount: number
    readonly direction: Direction

    constructor(amount: number, direction : Direction) {
        this.amount = amount;
        this.direction = direction
    }
}