import java.lang.IllegalArgumentException

enum class HandShape(public val supportedLetters: List<Char>, public val score: Int) {
    

    ROCK(listOf('A', 'X'), 1),
    PAPER(listOf('B', 'Y'), 2),
    SCISSORS(listOf('C', 'Z'), 3);

    companion object {
        fun readFromLetter(letter: Char): HandShape {
            return when (letter) {
                'A', 'X' -> ROCK
                'B', 'Y' -> PAPER
                'C', 'Z' -> SCISSORS
                else -> throw IllegalArgumentException("letter $letter not supported!")
            }
        }
    }
}