import { calculateStartOfMessage, calculateStartSignal } from "./StartSignalCalculator";

describe('test different inputs', () => {
    it('should return 5 for bvwbjplbgvbhsrlpgdmjqwftvncz', async () => {
        const input: string ='bvwbjplbgvbhsrlpgdmjqwftvncz';
        const number = calculateStartSignal(input);
        expect(number).toBe(5);
    }),
    it('should return 6 for nppdvjthqldpwncqszvftbrmjlhg', async () => {
        const input: string ='nppdvjthqldpwncqszvftbrmjlhg';
        const number = calculateStartSignal(input);
        expect(number).toBe(6);
    }),
    it('should return 10 for nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', async () => {
        const input: string ='nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
        const number = calculateStartSignal(input);
        expect(number).toBe(10);
    }),
    it('should return 11 for zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', async () => {
        const input: string ='zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';
        const number = calculateStartSignal(input);
        expect(number).toBe(11);
    })

    it('four items in list are distinct', () => {
        const list = ['a', 'b', 'c', 'd'];
        let unique = [...new Set(list)];
        
        const amountDistinct = unique.length;

        expect(amountDistinct).toBe(4);
    })

    it('four items in list are not', () => {
        const list = ['a', 'b', 'a', 'd'];
        let unique = [...new Set(list)];
        
        const amountDistinct = unique.length;

        expect(amountDistinct).toBe(3);
    })

    it('check borders of substring', () => {
        const example = 'aabbcc';
        const subString = example.substring(0, 4);

        expect(subString).toBe('aabb')
    })

    it('should return 19 for startOfMessage', () => {
        const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
        const output = calculateStartOfMessage(input);
        expect(output).toBe(19)
    })

    it('should return 19 for startOfMessage', () => {
        const input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
        const output = calculateStartOfMessage(input);
        expect(output).toBe(19)
    })

})
