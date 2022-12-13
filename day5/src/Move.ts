export class Move {
    readonly amount: number
    readonly fromStack: number
    readonly toStack: number

    constructor(amount: number, fromStack: number, toStack: number) {
        this.amount = amount;
        this.fromStack = fromStack;
        this.toStack = toStack;
    }


}