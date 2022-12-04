import {Item} from "./Item";

export class ScoreCalculator {
    
    private valueToScoreMap: Map<string, number> = new Map();
    
    constructor() {
        for (let i = 0; i < 26; i++) {
            this.valueToScoreMap.set((i+10).toString(36).toLowerCase(), i+1)
        }

        for (let i = 0; i < 26; i++) {
            this.valueToScoreMap.set((i+10).toString(36).toUpperCase(), i+27)
        }
    }
    
    getScoreOfValue(item: Item): number|undefined {
        return this.valueToScoreMap.get(item.getValue())
    }
}