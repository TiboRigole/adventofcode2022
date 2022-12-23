import {readInput} from "./InputReader";
import Move from "./datatypes/Move";
import Rope from "./datatypes/Rope";

const moves : Move[] = readInput('./input/testinput.txt')
const rope = new Rope();

moves.forEach(move => {
    rope.executeMove(move);
})

const coordinates = rope.getVisitedCoordinates();

console.log('finish')
