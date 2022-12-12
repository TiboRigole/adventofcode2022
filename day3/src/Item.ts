export class Item {
    private readonly value: string;

    constructor(value: string) {
        if(value.length != 1) {
            throw new Error(`item length is not 1 but: ${value.length}`)
        }
        this.value = value
    }
    
    getValue() : string {
        return this.value
    }
    
    toScore() : number {
        console.log(`value is : ${this.value}`)
        const score: number = parseInt(this.value)
        console.log(`score is : ${score}`)
        return 0
    }

    insideOf(duplicates: Item[]): boolean {
        let result = false;
        for(let i = 0 ; i < duplicates.length ; i++) {
            const duplicatesItem = duplicates[i];

            if(duplicatesItem.getValue() === this.getValue()) {
                result = true;
            }
        }
        return result;
    }
}

export function findOverlap(thisItems: Array<Item>, otherItems: Array<Item>): Array<Item> {
    const duplicates: Item[] = [];
    
    thisItems.forEach(thisItem => {

        otherItems.forEach(otherItem => {
            if(!otherItem.insideOf(duplicates) && thisItem.getValue() === otherItem.getValue()) {
                duplicates.push(thisItem)
            }
        })
    })

    return duplicates;
}