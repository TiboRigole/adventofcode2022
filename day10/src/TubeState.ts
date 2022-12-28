import { Instruction } from "./Instruction"

export default class TubeState {

    cycle: number
    registerBefore: number
    registerAfter: number
    mutatedByInstruction: Instruction
    
    constructor(cycle: number, registerBefore: number, registerAfter: number, instruction: Instruction) {
        this.registerBefore = registerBefore
        this.registerAfter = registerAfter
        this.cycle = cycle
        this.mutatedByInstruction = instruction
    }
}