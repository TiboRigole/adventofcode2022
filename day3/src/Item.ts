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
}