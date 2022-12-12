import { Item, findOverlap } from "./Item";
import { RuckSack } from "./RuckSack";

export class Group {

    private readonly amountInGroup: number;
    private readonly ruckSacks: Array<RuckSack>

    constructor(amountInGroup: number, rucksacks: Array<RuckSack>) {
        this.amountInGroup = amountInGroup;
        this.ruckSacks = rucksacks;
    }

    getRuckSacks() : Array<RuckSack> {
        return this.ruckSacks;
    }
    
    getDuplicateItem() : Array<Item> {

        let duplicates: Array<Item> = [];

        duplicates = findOverlap(this.ruckSacks[0].merged, this.ruckSacks[1].merged)
        for(let i = 2 ; i < this.amountInGroup ; i++) {
            duplicates = findOverlap(duplicates, this.ruckSacks[i].merged)
        }

        return duplicates
    }
}