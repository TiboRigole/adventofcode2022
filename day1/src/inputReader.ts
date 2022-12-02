import * as fs from 'fs';

function readFileContent(inputFile: string) : number[] {

    const elvestWithCalories: number[] = []
    let uncompletedNumber: number = 0

    const allContents = fs.readFileSync(inputFile, 'utf-8');

    allContents.split(/\r?\n/).forEach(line =>  {

        if(line === '') {
            elvestWithCalories.push(Number(uncompletedNumber))
            uncompletedNumber = 0
        
        } else if(typeof(line == 'number')) {
            const delta: number = Number(line);
            uncompletedNumber += delta
        }

    });

    elvestWithCalories.push(uncompletedNumber)

    return elvestWithCalories
}

export default readFileContent;