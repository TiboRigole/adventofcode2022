import { readInput } from "./InputReader"
import { Move } from "./Move"
import { Stack } from "./stack/Stack"

const [ moves, stacks ] = readInput('./input/realInput.txt')

for(let i = 0 ; i < moves.length ; i++) {
    executeMoveOnStacks(moves[i], stacks)
}

const array : string[] = [];
for(let i = 0 ; i <stacks.length ; i++) {
    const item = stacks[i].peek()
    array.push(item)
}

const string = array.reduce((prev, current) => { return prev + current}, '')
console.log(string)


function executeMoveOnStacks(move: Move, stacks: Stack<string>[]) {
    const { fromStack, toStack, amount } = move
    
    const items = stacks[fromStack].popAll(amount);
    stacks[toStack].pushAll(items)
}
