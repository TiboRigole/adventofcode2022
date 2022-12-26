import Point from "./Point";
import Move from "./Move";
import {ArrowDirection} from "./ArrowDirection";
import {Direction} from "./Direction";

export default class Rope {
    headCo: Point
    tailCo: Point
    visitedTailCoordinates: Point[];

    constructor() {
        this.headCo = new Point(0, 0)
        this.tailCo = new Point(0, 0)
        this.visitedTailCoordinates = []
    }

    getVisitedCoordinates(): Point[] {
        return this.visitedTailCoordinates
    }

    setCos(hx: number, hy: number, tx: number, ty: number) {
        this.headCo.setXY(hx, hy)
        this.tailCo.setXY(tx, ty)
    }

    executeMove(move: Move) {

        console.log('new move: ', move)

        for (let i = 0; i < move.amount; i++) {
            this.moveTo(move.direction)
            this.visitedTailCoordinates.push(Point.fromPoint(this.tailCo));
        }
    }

    private getArrowDirection(): ArrowDirection {
        if (this.headCo.equals(this.tailCo)) {
            return ArrowDirection.HEADS_ON_TAILS
        } else if (this.headCo.getX() == this.tailCo.getX() + 1 && this.headCo.getY() == this.tailCo.getY()) {
            return ArrowDirection.RIGHT
        } else if (this.headCo.getX() == this.tailCo.getX() - 1 && this.headCo.getY() == this.tailCo.getY()) {
            return ArrowDirection.LEFT
        } else if (this.headCo.getX() == this.tailCo.getX() && this.headCo.getY() == this.tailCo.getY() + 1) {
            return ArrowDirection.UP
        } else if (this.headCo.getX() == this.tailCo.getX() && this.headCo.getY() == this.tailCo.getY() - 1) {
            return ArrowDirection.DOWN
        } else if (this.headCo.getX() == this.tailCo.getX() + 1 && this.headCo.getY() == this.tailCo.getY() + 1) {
            return ArrowDirection.UP_RIGHT
        } else if (this.headCo.getX() == this.tailCo.getX() - 1 && this.headCo.getY() == this.tailCo.getY() + 1) {
            return ArrowDirection.UP_LEFT
        } else if (this.headCo.getX() == this.tailCo.getX() + 1 && this.headCo.getY() == this.tailCo.getY() - 1) {
            return ArrowDirection.DOWN_RIGHT
        } else if (this.headCo.getX() == this.tailCo.getX() - 1 && this.headCo.getY() == this.tailCo.getY() - 1) {
            return ArrowDirection.DOWN_LEFT
        } else {
            throw new Error("this was not expected")
        }
    }

    moveTo(direction: Direction) {
        const arrowDirection = this.getArrowDirection()
        switch (arrowDirection) {
            case ArrowDirection.HEADS_ON_TAILS:
                this.moveWhenHeadsOnTails(direction);
                break;
            case ArrowDirection.UP:
                this.moveWhenFacingUp(direction)
                break
            case ArrowDirection.DOWN:
                this.moveWhenFacingDown(direction)
                break
            case ArrowDirection.LEFT:
                this.moveWhenFacingLeft(direction)
                break
            case ArrowDirection.RIGHT:
                this.moveWhenFacingRight(direction)
                break
            case ArrowDirection.UP_RIGHT:
                this.moveWhenFacingUpRight(direction)
                break
            case ArrowDirection.DOWN_RIGHT:
                this.moveWhenFacingDownRight(direction)
                break
            case ArrowDirection.DOWN_LEFT:
                this.moveWhenFacingDownLeft(direction)
                break
            case ArrowDirection.UP_LEFT:
                this.moveWhenFacingUpLeft(direction)
                break
            default:
                throw new Error('this direction is not supported')
        }
    }

    private moveWhenHeadsOnTails(direction: Direction) {
        switch(direction) {
            case Direction.DOWN:
                this.headCo.setY(this.headCo.getY()-1)
                return;
            case Direction.UP:
                this.headCo.setY(this.headCo.getY()+1)
                return;
            case Direction.LEFT:
                this.headCo.setX(this.headCo.getX()-1)
                return;
            case Direction.RIGHT:
                this.headCo.setX(this.headCo.getX()+1)
                return;
        }
    }

    private moveWhenFacingUp(direction: Direction) {
        switch (direction) {
            case Direction.DOWN:
                this.headCo.setY(this.tailCo.getY())
                return;
            case Direction.UP:
                this.headCo.setY(this.headCo.getY() + 1)
                this.tailCo.setY(this.tailCo.getY() + 1)
                return;
            case Direction.LEFT:
                this.headCo.setX(this.headCo.getX() - 1)
                return;
            case Direction.RIGHT:
                this.headCo.setX(this.headCo.getX() + 1)
                return;
        }
    }


    private moveWhenFacingDown(direction: Direction) {
        switch (direction) {
            case Direction.DOWN:
                this.headCo.setY(this.headCo.getY() - 1)
                this.tailCo.setY(this.tailCo.getY() - 1)
                return;
            case Direction.UP:
                this.headCo.setY(this.tailCo.getY())
                return;
            case Direction.LEFT:
                this.headCo.setX(this.headCo.getX() - 1)
                return;
            case Direction.RIGHT:
                this.headCo.setX(this.headCo.getX() + 1)
                return;
        }
    }


    private moveWhenFacingLeft(direction: Direction) {
        switch (direction) {
            case Direction.DOWN:
                this.headCo.setY(this.headCo.getY()-1)
                return;
            case Direction.UP:
                this.headCo.setY(this.headCo.getY()+1)
                return;
            case Direction.LEFT:
                this.headCo.setX(this.headCo.getX() - 1)
                this.tailCo.setX(this.tailCo.getX() - 1)
                return;
            case Direction.RIGHT:
                this.headCo.setX(this.tailCo.getX())
                this.headCo.setY(this.tailCo.getY())
                return;
        }
    }


    private moveWhenFacingRight(direction: Direction) {
        switch (direction) {
            case Direction.DOWN:
                this.headCo.setY(this.headCo.getY() - 1)
                return;
            case Direction.UP:
                this.headCo.setY(this.headCo.getY() + 1)

                return;
            case Direction.LEFT:
                this.headCo.setX(this.tailCo.getX())
                this.headCo.setY(this.tailCo.getY())
                return;
            case Direction.RIGHT:
                this.headCo.setX(this.headCo.getX() + 1)
                this.tailCo.setX(this.tailCo.getX() + 1)
                return;
        }
    }


    private moveWhenFacingUpRight(direction: Direction) {
        switch (direction) {
            case Direction.DOWN:
                this.headCo.setY(this.headCo.getY() - 1)
                return;
            case Direction.UP:
                this.tailCo.setXY(this.headCo.getX(), this.headCo.getY())
                this.headCo.setXY(this.tailCo.getX(), this.tailCo.getY() + 1)
                return;
            case Direction.LEFT:
                this.headCo.setX(this.tailCo.getX())
                return;
            case Direction.RIGHT:
                this.tailCo.setXY(this.headCo.getX(), this.headCo.getY())
                this.headCo.setX(this.headCo.getX() + 1)
                return;
        }
    }


    private moveWhenFacingDownRight(direction: Direction) {
        switch (direction) {
            case Direction.DOWN:
                this.headCo.setY(this.headCo.getY() - 1)
                this.tailCo.setXY(this.tailCo.getX() + 1, this.tailCo.getY() - 1)
                return;
            case Direction.UP:
                this.headCo.setY(this.headCo.getY() + 1)
                return;
            case Direction.LEFT:
                this.headCo.setX(this.headCo.getX() - 1)
                return;
            case Direction.RIGHT:
                this.headCo.setX(this.headCo.getX() + 1)
                this.tailCo.setXY(this.tailCo.getX() + 1, this.tailCo.getY() -1)
                return;
        }
    }


    private moveWhenFacingDownLeft(direction: Direction) {
        switch (direction) {
            case Direction.DOWN:
                this.headCo.setY(this.headCo.getY() - 1)
                this.tailCo.setXY(this.tailCo.getX() -1, this.tailCo.getY() - 1)
                return;
            case Direction.UP:
                this.headCo.setY(this.headCo.getY() + 1)
                return;
            case Direction.LEFT:
                this.headCo.setX(this.headCo.getX() - 1)
                this.tailCo.setXY(this.tailCo.getX() -1, this.tailCo.getY() -1)
                return;
            case Direction.RIGHT:
                this.headCo.setX(this.headCo.getX() + 1)
                return;
        }
    }


    private moveWhenFacingUpLeft(direction: Direction) {
        switch (direction) {
            case Direction.DOWN:
                this.headCo.setY(this.headCo.getY() - 1)
                return;
            case Direction.UP:
                this.tailCo.setXY(this.headCo.getX(), this.headCo.getY())
                this.headCo.setY(this.headCo.getY() + 1)
                return;
            case Direction.LEFT:
                this.headCo.setX(this.headCo.getX() - 1)
                this.tailCo.setXY(this.tailCo.getX() - 1, this.tailCo.getY() + 1)
                return;
            case Direction.RIGHT:
                this.headCo.setX(this.headCo.getX() + 1)
                return;
        }
    }
}