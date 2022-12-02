import java.io.File

class InputReader {

    fun readInput(fileName: String) : List<Round> {

        val rounds = mutableListOf<Round>()

        File(fileName).forEachLine {
            val opponentChoice: HandShape = HandShape.readFromLetter(it[0])
            val myChoice: HandShape = HandShape.readFromLetter(it[2])

            rounds.add(Round(opponentChoice, myChoice))
        }
        
        return rounds.toList()
    }
}