import { Direction, directionToString } from "./datatypes/Direction";
import Matrix from "./datatypes/Matrix";
import Move from "./datatypes/Move";
import Point from "./datatypes/Point";

export default class LongRope {
    readonly points: Point[]
    readonly length: number
    readonly visitedTailPoints: Point[];

    constructor(length: number) {
        this.length = length;
        this.points = []
        for(let i = 0 ; i <length; i++) {
            this.points.push(new Point(0,0))
        }
        this.visitedTailPoints = [new Point(0,0)]
    }

    executeMoveSet(move: Move) {
        console.log('executing move', move);

        for(let i = 0 ; i < move.amount; i++) {
            this.executeMove(move.direction);
        }

        console.log('finish executing move', move);
    }

    getUniqueVisitedTailPoints() : number {
        return this.visitedTailPoints.length
    }

    private executeMove(direction: Direction) {
        console.log('move to', directionToString(direction))
        this.moveHead(direction);
        for(let i = 1 ; i < this.length; i++) {
            this.adjustTailAt(i)
        }

        if(!this.alreadyVisitedPoint()) {
            this.visitedTailPoints.push(Point.fromPoint(this.points[this.length - 1]))
        }
    }

    private alreadyVisitedPoint() : boolean {
        
        const tailPoint = this.points[this.points.length - 1]

        for(let i = 0 ; i < this.visitedTailPoints.length ; i++) {
            const visitedPoint = this.visitedTailPoints[i]
            if(tailPoint.getX() == visitedPoint.getX() && tailPoint.getY() == visitedPoint.getY()) {
                return true
            }
        }
        return false;
    }

    private moveHead(direction: Direction) {
        switch(direction) {
            case Direction.UP: 
                this.points[0].move(0, 1)
                break;
            case Direction.DOWN:
                this.points[0].move(0, -1)
                break;
            case Direction.LEFT:
                this.points[0].move(-1, 0)
                break;
            case Direction.RIGHT:
                this.points[0].move(1, 0);
                break;
        }
    }

    /**
     * 
     * @param position index number of the tail, if 1 passed, its point at index 1 that should be adjusted 
     */
    private adjustTailAt(position: number) {
        const pointInFront = this.points[position - 1]
        const pointToMove = this.points[position]

        const dx = pointInFront.getX() - pointToMove.getX();
        const dy = pointInFront.getY() - pointToMove.getY();
        const absDx = Math.abs(dx)
        const absDy = Math.abs(dy)
        
        // ok situations
        // 0 0
        // 0 1
        // 1 0
        // 1 1

        // nok situations
        if(absDx == 2 && absDy == 0) { // 2 0 
            const diff = dx > 0 ? 1 : -1
            this.points[position].move(diff, 0)
        } else if(absDy == 2 && absDx == 0) { // 0 2
            const diff = dy > 0 ? 1 : -1
            this.points[position].move(0, diff)
        } else if (absDx + absDy == 3) { // 1 2
            const moveX = dx > 0 ? 1 : -1
            const moveY = dy > 0 ? 1 : -1
            this.points[position].move(moveX, moveY)
        } else if (absDx == 2 && absDy == 2) {
            const moveX = dx > 0 ? 1 : -1
            const moveY = dy > 0 ? 1 : -1
            this.points[position].move(moveX, moveY)
        }
    }

    printState() {
        let minX : number = 0
        let minY : number = 0
        let maxX : number = 10
        let maxY : number = 10

        this.points.forEach(point => {
            if(point.getX() > maxX) {
                maxX = point.getX();
            } else if(point.getX() < minX ) {
                minX = point.getX()
            }

            if(point.getY() > maxY) {
                maxY = point.getY()
            } else if (point.getY() > minY) {
                minY = point.getY()
            }
        })

        if(minX != 0 && minY != 0) {
            throw new Error('min x and min y are not zero, we can not print this')
        }

        const matrix: Matrix = new Matrix(maxX, maxY);

        for(let i = this.points.length - 1 ; i >= 0 ; i--) {
            const currentPoint = this.points[i]
            matrix.setAt(currentPoint.getX(), currentPoint.getY(), i == 0 ? 100 : i)
        }
        matrix.print();
    }
}