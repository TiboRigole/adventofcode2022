data class Round(val opponentChoice: HandShape, val myChoice: HandShape) {

    private fun determineOutcome(): Outcome {
        return when {
            myChoice == opponentChoice -> Outcome.DRAW
            myChoice == HandShape.SCISSORS && opponentChoice == HandShape.PAPER -> Outcome.WIN
            myChoice == HandShape.ROCK && opponentChoice == HandShape.SCISSORS -> Outcome.WIN
            myChoice == HandShape.PAPER && opponentChoice == HandShape.ROCK -> Outcome.WIN
            else -> Outcome.LOSS
        }
    }
    
    fun determineScore() = this.determineOutcome().score + this.myChoice.score
}