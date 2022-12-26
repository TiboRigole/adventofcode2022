import Rope from "./Rope";
import {Direction} from "./Direction";
import { report } from "process";

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

    describe("from diagonal up-right position", function () {
        it("move up", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 0, 0);

            rope.moveTo(Direction.UP)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(2)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move right", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 0, 0);

            rope.moveTo(Direction.RIGHT)

            expect(rope.headCo.getX()).toBe(2)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move left", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 0, 0);

            rope.moveTo(Direction.LEFT)

            expect(rope.headCo.getX()).toBe(0)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(0)
            expect(rope.tailCo.getY()).toBe(0)
        })

        it("move down", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 0, 0)

            rope.moveTo(Direction.DOWN)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(0)
            expect(rope.tailCo.getY()).toBe(0)
        })

    })

    describe("from diagonal down-right position", function () {
        it("move up", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 0, 2);

            rope.moveTo(Direction.UP)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(2)
            expect(rope.tailCo.getX()).toBe(0)
            expect(rope.tailCo.getY()).toBe(2)
        })

        it("move right", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 0, 2);

            rope.moveTo(Direction.RIGHT)

            expect(rope.headCo.getX()).toBe(2)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move left", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 0, 2);

            rope.moveTo(Direction.LEFT)

            expect(rope.headCo.getX()).toBe(0)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(0)
            expect(rope.tailCo.getY()).toBe(2)
        })

        it("move down", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 0, 2)

            rope.moveTo(Direction.DOWN)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

    })

    describe("from diagonal up-left position", function () {
        it("move up", function () {
            const rope = new Rope()
            rope.setCos(1, 2, 2, 1);

            rope.moveTo(Direction.UP)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(3)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(2)
        })

        it("move right", function () {
            const rope = new Rope()
            rope.setCos(1, 2, 2, 1);

            rope.moveTo(Direction.RIGHT)

            expect(rope.headCo.getX()).toBe(2)
            expect(rope.headCo.getY()).toBe(2)
            expect(rope.tailCo.getX()).toBe(2)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move left", function () {
            const rope = new Rope()
            rope.setCos(1, 2, 2, 1);

            rope.moveTo(Direction.LEFT)

            expect(rope.headCo.getX()).toBe(0)
            expect(rope.headCo.getY()).toBe(2)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(2)
        })

        it("move down", function () {
            const rope = new Rope()
            rope.setCos(1, 2, 2, 1);

            rope.moveTo(Direction.DOWN)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(2)
            expect(rope.tailCo.getY()).toBe(1)
        })
    })

    describe("from diagonal down-left position", function () {
        it("move up", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 2, 2);

            rope.moveTo(Direction.UP)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(2)
            expect(rope.tailCo.getX()).toBe(2)
            expect(rope.tailCo.getY()).toBe(2)
        })

        it("move right", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 2, 2);

            rope.moveTo(Direction.RIGHT)

            expect(rope.headCo.getX()).toBe(2)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(2)
            expect(rope.tailCo.getY()).toBe(2)
        })

        it("move left", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 2, 2);

            rope.moveTo(Direction.LEFT)

            expect(rope.headCo.getX()).toBe(0)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move down", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 2, 2);

            rope.moveTo(Direction.DOWN)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })
    })

    describe("from up-facing position", function () {
        it("move up", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 1, 0);

            rope.moveTo(Direction.UP)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(2)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move right", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 1, 0);

            rope.moveTo(Direction.RIGHT)

            expect(rope.headCo.getX()).toBe(2)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(0)
        })

        it("move left", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 1, 0);

            rope.moveTo(Direction.LEFT)

            expect(rope.headCo.getX()).toBe(0)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(0)
        })

        it("move down", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 1, 0);

            rope.moveTo(Direction.DOWN)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(0)
        })
    })

    describe("from down-facing position", function () {
        it("move up", function () {
            const rope = new Rope()
            rope.setCos(1, 0, 1, 1);

            rope.moveTo(Direction.UP)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move right", function () {
            const rope = new Rope()
            rope.setCos(1, 0, 1, 1);

            rope.moveTo(Direction.RIGHT)

            expect(rope.headCo.getX()).toBe(2)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move left", function () {
            const rope = new Rope()
            rope.setCos(1, 0, 1, 1);

            rope.moveTo(Direction.LEFT)

            expect(rope.headCo.getX()).toBe(0)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move down", function () {
            const rope = new Rope()
            rope.setCos(1, 0, 1, 1);

            rope.moveTo(Direction.DOWN)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(-1)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(0)
        })
    })

    describe("from right position", function () {
        it("move up", function () {
            const rope = new Rope()
            rope.setCos(2, 1, 1, 1);

            rope.moveTo(Direction.UP)

            expect(rope.headCo.getX()).toBe(2)
            expect(rope.headCo.getY()).toBe(2)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move right", function () {
            const rope = new Rope()
            rope.setCos(2, 1, 1, 1);

            rope.moveTo(Direction.RIGHT)

            expect(rope.headCo.getX()).toBe(3)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(2)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move left", function () {
            const rope = new Rope()
            rope.setCos(2, 1, 1, 1);

            rope.moveTo(Direction.LEFT)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move down", function () {
            const rope = new Rope()
            rope.setCos(2, 1, 1, 1);

            rope.moveTo(Direction.DOWN)

            expect(rope.headCo.getX()).toBe(2)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })
    })

    describe("from left position", function () {
        it("move up", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 2, 1);

            rope.moveTo(Direction.UP)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(2)
            expect(rope.tailCo.getX()).toBe(2)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move right", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 2, 1);

            rope.moveTo(Direction.RIGHT)

            expect(rope.headCo.getX()).toBe(2)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(2)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move left", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 2, 1);

            rope.moveTo(Direction.LEFT)

            expect(rope.headCo.getX()).toBe(0)
            expect(rope.headCo.getY()).toBe(1)
            expect(rope.tailCo.getX()).toBe(1)
            expect(rope.tailCo.getY()).toBe(1)
        })

        it("move down", function () {
            const rope = new Rope()
            rope.setCos(1, 1, 2, 1);

            rope.moveTo(Direction.DOWN)

            expect(rope.headCo.getX()).toBe(1)
            expect(rope.headCo.getY()).toBe(0)
            expect(rope.tailCo.getX()).toBe(2)
            expect(rope.tailCo.getY()).toBe(1)
        })
    })
});