import {Item} from "./Item";

export class RuckSack {
    private readonly leftHalf: Item[];
    private readonly rightHalf: Item[];
    
    constructor(fullString: string) {

        this.leftHalf = [];
        this.rightHalf = [];
        
        const middle: number = Math.floor(fullString.length / 2);
        const leftHalfString : string = fullString.substr(0, middle);
        const rightHalfString : string = fullString.substr(middle);

        for (let i = 0; i < leftHalfString.length; i++) {
            const char = leftHalfString.charAt(i);
            this.leftHalf.push(new Item(char))
        }

        for (let i = 0; i < rightHalfString.length; i++) {
            const char = rightHalfString.charAt(i);
            this.rightHalf.push(new Item(char))
        }
        if(this.leftHalf.length != this.rightHalf.length) {
            console.log(`value was: ${fullString}`)
            console.log(`divided into: ${this.leftHalf} <-> ${this.rightHalf}`)
            throw Error(`the length is not equal : ${this.leftHalf.length} != ${this.rightHalf.length}`)
        }
    }

    findItemInBothHalves(): Item|undefined {
        for (let i = 0; i < this.leftHalf.length; i++) {
            const itemToCheckInOtherHalve: Item = this.leftHalf[i];
            const foundValue: Item|undefined = this.rightHalf.find((item) => item.getValue() == itemToCheckInOtherHalve.getValue())
            
            if(foundValue != undefined) {
                return foundValue
            }
        }
        
        return undefined;
    }
}