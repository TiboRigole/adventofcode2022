import Rope from "./Rope";
import {Direction} from "./Direction";

describe('test moves', () => {
    describe("from above eachother", () => {
        it("move up", () => {
            const rope = new Rope()

            rope.moveTo(Direction.UP);

            expect(rope.headCo.getX()).toBe(0)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(0)
            expect(rope.tailCo.getY()).toBe(0)
        })
        it("move down", () => {
            const rope = new Rope();

            rope.moveTo(Direction.DOWN);

            expect(rope.headCo.getX()).toBe(0)
            expect(rope.headCo.getY()).toBe(-1)
            expect(rope.tailCo.getX()).toBe(0)
            expect(rope.tailCo.getY()).toBe(0)
        })
        it("move right", () => {
            const rope = new Rope();

            rope.moveTo(Direction.RIGHT);

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(0)
            expect(rope.tailCo.getY()).toBe(0)
        })
        it("move left", () => {
            const rope = new Rope();

            rope.moveTo(Direction.LEFT);

            expect(rope.headCo.getX()).toBe(-1)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(0)
            expect(rope.tailCo.getY()).toBe(0)
        })
    })


    // it("from start, move diagonally to top left", () => {
    //     const rope = new Rope();
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
    //
    // it("from horizontal position ->, move up", () => {
    //     const rope = new Rope()
    //     rope.setHeadAndTailCo(new Point(2, 3), new Point(1, 3))
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
    // it("from horizontal position -> move down", () => {
    //     const rope = new Rope()
    //     rope.setHeadAndTailCo(new Point(2, 3), new Point(1, 3))
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
    // it("from horizontal position ->, move diagonally to top right", () => {
    //     const rope = new Rope()
    //     rope.setHeadAndTailCo(new Point(2, 3), new Point(1, 3))
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
    // it("from horizontal position ->, move diagonally to top left", () => {
    //     const rope = new Rope()
    //     rope.setHeadAndTailCo(new Point(2, 3), new Point(1, 3))
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
    //
    // it("from vertical position (looking up), move up", () => {
    //     const rope = new Rope()
    //     rope.setHeadAndTailCo(new Point(2, 3), new Point(2, 2))
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
    // it("from vertical position (looking up), move down", () => {
    //     const rope = new Rope()
    //     rope.setHeadAndTailCo(new Point(2, 3), new Point(2, 2))
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
    // it("from vertical position (looking up), move diagonally to top right", () => {
    //     const rope = new Rope()
    //     rope.setHeadAndTailCo(new Point(2, 3), new Point(2, 2))
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
    // it("from vertical position (looking up), move diagonally to top left", () => {
    //     const rope = new Rope()
    //     rope.setHeadAndTailCo(new Point(2, 3), new Point(2, 2))
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
    // it("from vertical position (looking up), move two times down", () => {
    //     const rope = new Rope()
    //     rope.setHeadAndTailCo(new Point(2, 3), new Point(2, 2))
    //
    //     expect(rope.headCo.getX()).toBe(0)
    //     expect(rope.headCo.getY()).toBe(0)
    //     expect(rope.tailCo.getX()).toBe(0)
    //     expect(rope.tailCo.getY()).toBe(0)
    // })
});