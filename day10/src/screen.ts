import TubeState from "./TubeState";

export default function drawScreen(tubeStates: TubeState[]) : string[] {
    const screen : string[] = []

    let spritePosition = 1

    for(let i = 1 ; i < tubeStates.length ; i++) {
        const tubeState = tubeStates[i]
        
        if(true) {
            console.log('-')
        }

        // drax pixel at position i - 1
        const position = (i - 1)%40 
        let char = '.'
        if(tubeState.registerBefore + 1 == position) {
            char = "#"
        } else if(tubeState.registerBefore - 1 == position) {
            char = "#"
        } else if (tubeState.registerBefore == position) {
            char = "#"
        }

        screen.push(char)
    }


    return screen
}