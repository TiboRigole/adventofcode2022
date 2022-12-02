import java.io.File

class InputReader {

    fun readInput(fileName: String) : List<Round> {

        val rounds = mutableListOf<Round>()

        File(fileName).forEachLine {
            val opponentChoice: HandShape = HandShape.readFromLetterForOpponent(it[0])
            val myChoice: HandShape = HandShape.readChoiceForMe(it[2], opponentChoice)

            rounds.add(Round(opponentChoice, myChoice))
        }
        
        return rounds.toList()
    }
}