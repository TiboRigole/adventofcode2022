import { readInput } from "./InputReader";
import { NoOp } from "./Instruction";
import TubeState from "./TubeState";


const instructions = readInput('./input/realinput.txt')

const tubeStates: TubeState[] = []
tubeStates.push(new TubeState(0, 1, 1, new NoOp()))

instructions.forEach((instruction, index) => {

    const lastTubeState = tubeStates[tubeStates.length-1]

    if(lastTubeState == undefined) {
        throw new Error('tubestate not found in map!')
    }
    
    const states = instruction.execute(lastTubeState);
    tubeStates.push(...states)
})

const sum = 
    (tubeStates[20].registerBefore * 20) +
    (tubeStates[60].registerBefore * 60) +
    (tubeStates[100].registerBefore * 100) +
    (tubeStates[140].registerBefore * 140) +
    (tubeStates[180].registerBefore * 180) +
    (tubeStates[220].registerBefore * 220) 

console.log(sum)