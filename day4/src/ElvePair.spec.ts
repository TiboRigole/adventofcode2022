import { Elve } from "./Elve"
import { ElvePair } from "./ElvePair"

describe("Check full overlap situations", () => {
    it("has full overlap when the first elve range is overlapping the second", () => {
        const elvePair: ElvePair = new ElvePair(new Elve(1, 10), new Elve(3, 9))

        expect(elvePair.hasFullOverlap()).toBeTruthy();
    })
    it("has full overlap when the second elve range is overlapping the first", () => {
        const elvePair: ElvePair = new ElvePair(new Elve(3, 9), new Elve(1, 10))

        expect(elvePair.hasFullOverlap()).toBeTruthy();
    })
    it("has no full overlap, even when some overlap", () => {
        const elvePair: ElvePair = new ElvePair(new Elve(3, 9), new Elve(5, 10))

        expect(elvePair.hasFullOverlap()).toBeFalsy();
    })

    it("has no full overlap, when distinct", () => {
        const elvePair: ElvePair = new ElvePair(new Elve(1, 2), new Elve(5, 10))

        expect(elvePair.hasFullOverlap()).toBeFalsy();
    })
})

describe("Check some overlap situations", () => {
    it("has some overlap when the first elve range is overlapping the second", () => {
        const elvePair: ElvePair = new ElvePair(new Elve(1, 10), new Elve(3, 9))

        expect(elvePair.hasSomeOverlap()).toBeTruthy();
    })
    it("has some overlap when the second elve range is overlapping the first", () => {
        const elvePair: ElvePair = new ElvePair(new Elve(3, 9), new Elve(1, 10))

        expect(elvePair.hasSomeOverlap()).toBeTruthy();
    })
    it("has overlap, even when some overlap", () => {
        const elvePair: ElvePair = new ElvePair(new Elve(3, 9), new Elve(5, 10))

        expect(elvePair.hasSomeOverlap()).toBeTruthy();
    })

    it("has no full overlap, when distinct", () => {
        const elvePair: ElvePair = new ElvePair(new Elve(1, 2), new Elve(5, 10))

        expect(elvePair.hasSomeOverlap()).toBeFalsy();
    })
})