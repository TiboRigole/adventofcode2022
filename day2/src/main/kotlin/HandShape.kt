import java.lang.IllegalArgumentException

enum class HandShape(public val supportedLetters: List<Char>, public val score: Int) {
    

    ROCK(listOf('A', 'X'), 1),
    PAPER(listOf('B', 'Y'), 2),
    SCISSORS(listOf('C', 'Z'), 3);

    companion object {
        fun readFromLetterForOpponent(letter: Char): HandShape {
            return when (letter) {
                'A' -> ROCK
                'B' -> PAPER
                'C' -> SCISSORS
                else -> throw IllegalArgumentException("letter $letter not supported!")
            }
        }
        
        fun readChoiceForMe(letter: Char, oppenentsShape: HandShape): HandShape {
            return when (letter) {
                'X' -> oppenentsShape.getChoiceForLoss()
                'Y' -> oppenentsShape.getChoiceForDraw()
                'Z' -> oppenentsShape.getChoiceForWin()
                else -> throw IllegalArgumentException("letter $letter not supported!")
            }
        }
    }

    private fun getChoiceForWin(): HandShape {
        
        val oppenentsShape = this;
        
        return when(oppenentsShape) {
            ROCK -> PAPER
            PAPER -> SCISSORS
            SCISSORS -> ROCK
        }
    }

    private fun getChoiceForDraw() : HandShape {
        return this;
    }

    private fun getChoiceForLoss(): HandShape {
        val oppenentsShape = this;
        
        return when(oppenentsShape) {
            ROCK -> SCISSORS
            PAPER -> ROCK
            SCISSORS -> PAPER
        }
    }
}