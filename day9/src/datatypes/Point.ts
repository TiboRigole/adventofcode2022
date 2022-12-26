export default class Point {
    private x: number
    private y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    static fromPoint(point: Point): Point {
        return new this(point.x, point.y);
    }

    getX(): number {
        return this.x
    }

    getY(): number {
        return this.y;
    }

    setX(number: number) {
        this.x = number
    }

    setY(number: number) {
        this.y = number
    }

    setXY(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    equals(point: Point) {
        return this.x == point.getX() && this.y == point.getY();
    }

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }
}