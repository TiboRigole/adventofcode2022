import { stringify } from "querystring";

export function calculateStartSignal(input: string) : number {
    return calculateFirstDistinct(input, 4)
}

export function calculateStartOfMessage(input: string) : number {
    return calculateFirstDistinct(input, 14)
}

function calculateFirstDistinct(inputString: string, partLength: number) {
    for(let i = partLength -1; i < inputString.length ; i++) {
        const partToCheck = inputString.substring(i - partLength + 1, i + 1)

        if(isDistinct(partToCheck)){

            return i + 1;
        }
    }
    return -1;
}

function isDistinct(inputString: string) : boolean {
    const list : string[] = [];

    for(let i = 0 ; i < inputString.length ; i++) {
        list.push(inputString.charAt(i))
    }

    let unique = [...new Set(list)];

    return unique.length == inputString.length
}