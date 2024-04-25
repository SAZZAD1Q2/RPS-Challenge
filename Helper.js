import chalk from "chalk";

class GameHelper {
  static generateOutcomeTable(moves) {
    return moves.map((move, i) => [
      move,
      ...moves.map((_, j) => this.getMatchResult(i, j, moves.length)),
    ]);
  }

  static getMatchResult(indexPlayer, indexOpponent, numMoves) {
    const difference = (indexOpponent - indexPlayer + numMoves) % numMoves;
    if (difference === 0) return "Draw";
    return difference <= Math.floor(numMoves / 2) ? "Win" : "Lose";
  }

  static printResultsTable(moves) {
    const outcomeTable = this.generateOutcomeTable(moves);
    const header = "v PC\\User >";
    const columnWidth = Math.max(...moves.map((move) => move.length)) + 4;
    const tableWidth = header.length + (columnWidth + 3) * moves.length;

    console.log(chalk.bold.blueBright("Results from the user's perspective:"));
    console.log(
      chalk.bold.blueBright(
        "What is the outcome if user chooses X against PC's Y? (Win/Lose/Draw)\n"
      )
    );
    this.printDivider(tableWidth);
    console.log(`| ${chalk.bold.red(header.padEnd(tableWidth - 2))}|`);

    outcomeTable.forEach((row) => {
      console.log(
        `| ${chalk.bold.blueBright(row[0].padEnd(header.length))} | ${row
          .slice(1)
          .map((result) => chalk.bold.blueBright(result.padEnd(columnWidth)))
          .join(" | ")}|`
      );
      this.printDivider(tableWidth);
    });
  }

  static printDivider(length) {
    console.log(chalk.greenBright(`+${"*".repeat(length - 2)}+`));
  }
}

export default GameHelper;
