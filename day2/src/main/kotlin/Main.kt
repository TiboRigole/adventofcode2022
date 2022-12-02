fun main(args: Array<String>) {
    val inputReader: InputReader = InputReader()

    val inputFile: String = InputReader::class.java.getResource("realInput.txt").file

    val rounds: List<Round> = inputReader.readInput(inputFile)

    val totalScore = rounds.map { it.determineScore() }.sum()

    println("total score is $totalScore")
}