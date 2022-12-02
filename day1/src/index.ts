import readFileContent from './inputReader';

const calories : number[] = readFileContent('./input/realinput.txt')
const sortedCaloriesDescending : number[] = calories.sort((n1,n2) => n1 - n2);

const lastIndex: number = sortedCaloriesDescending.length - 1;

const total: number = sortedCaloriesDescending[lastIndex] + sortedCaloriesDescending[lastIndex - 1] + sortedCaloriesDescending[lastIndex - 2]

console.log(`highest item: ${sortedCaloriesDescending.slice(-1)[0] }`)
console.log(`total of biggest 3: ${total}`)