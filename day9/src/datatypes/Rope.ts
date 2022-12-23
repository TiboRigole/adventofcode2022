import Point from "./Point";
import {Direction} from "./Direction";

export default class Rope {
    headCo: Point
    tailCo: Point
    visitedTrailCoordinates : Point[];

    constructor() {
        this.headCo = new Point(0, 0)
        this.tailCo = new Point(0, 0)
        this.visitedTrailCoordinates = []
    }

    moveTo(direction: Direction) {
        
    }
}