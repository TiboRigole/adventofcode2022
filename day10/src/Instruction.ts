import TubeState from "./TubeState"

export class Instruction {

    readonly amountCycles: number
    readonly op1: number

    constructor(amountCycles: number, op1: number) {
        this.amountCycles = amountCycles;
        this.op1 = op1;
    }

    execute(currentTubeState: TubeState) : TubeState[] {
        return [];
    }

    
    print() : string {
        return "base "
    }
}

export class NoOp extends Instruction {
    constructor() {
        super(1, 0)
    }

    execute(currentTubeState: TubeState) : TubeState[] {
        return [new TubeState(currentTubeState.cycle + 1, currentTubeState.registerAfter, currentTubeState.registerAfter, this)]
    }

    
    print() : string {
        return "no-op "
    }
}

export class Add extends Instruction {
    constructor(op1: number) {
        super(2, op1)
    }

    execute(ts: TubeState) : TubeState[] {
        const list : TubeState[] = []
        
        list.push(new TubeState(ts.cycle + 1, ts.registerAfter, ts.registerAfter, this))
        list.push(new TubeState(ts.cycle + 2, ts.registerAfter, ts.registerAfter + this.op1, this))

        return list;
    
    }

    print() : string {
        return "Add " + this.op1
    }
}