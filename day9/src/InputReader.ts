import * as fs from "fs";

export function readInput(textFile: string) {
    const allContents = fs.readFileSync(textFile, 'utf-8');
    const lines: string[] = allContents.split(/\r?\n/)


}