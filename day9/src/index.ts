import {readInput} from "./InputReader";
import Move from "./datatypes/Move";
import Rope from "./datatypes/Rope";
import Point from "./datatypes/Point";
import LongRope from "./LongRope";

const moves : Move[] = readInput('./input/reainput.txt')
const rope = new LongRope(10);

moves.forEach(move => {
    rope.executeMoveSet(move);
})

console.log(rope.getUniqueVisitedTailPoints())
// const coordinates = rope.getVisitedCoordinates();

// const uniqueCoordinates: Point[] = []

// coordinates.forEach(co => {
//     if(!containsCo(uniqueCoordinates, co)) {
//         uniqueCoordinates.push(co)
//     }
// })
// console.log(uniqueCoordinates)
// console.log(uniqueCoordinates.length)

// function containsCo(list: Point[], point: Point) {
//     return list.some(i => {
//         return i.getX() == point.getX() && i.getY() == point.getY()
//     })
// }