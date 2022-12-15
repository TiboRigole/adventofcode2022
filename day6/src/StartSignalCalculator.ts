import { stringify } from "querystring";

export function calculateStartSignal(input: string) : number {
    for(let i = 3; i < input.length ; i++) {
        const firstChar: string = input.charAt(i-3);
        const secondChar: string = input.charAt(i-2);
        const thirdChar: string = input.charAt(i-1);
        const fourthChar: string = input.charAt(i);

        if(isDistinct(firstChar, secondChar, thirdChar, fourthChar)){
            return i + 1;
        }
    }

    return -1;
}

function isDistinct(a: string, b: string, c: string, d: string) : boolean {
    const list = [a, b, c, d]
    let unique = [...new Set(list)];

    const amountDistinct = unique.length;

    return amountDistinct === 4
}