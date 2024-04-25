import chalk from "chalk";
import HMACGenerator from "./HMACGenerator.js";
import GameManager from "./GameManager.js";
import RPSGame from "./RPSGame.js";
import CryptoProvider from "./CryptoService.js";
import GameEngine from "./gameEngine.js";
import InvalidInputError from "./InvalidInputError.js";

function validateMoves(moves) {
  if (
    moves.length < 3 ||
    moves.length % 2 !== 1 ||
    new Set(moves).size !== moves.length
  ) {
    throw new InvalidInputError(
      chalk.red(
        `Invalid arguments: Please provide an odd number (at least 3) of unique moves.
      \nExample Valid Moves:
      - node app.js MOVE1 MOVE2 MOVE3
      - node app.js STONE PAPER SCISSORS
      - node app.js Rock Paper STONE LIZARD SPOCK
      \nExamples of Invalid Moves:
      - node app.js
      - node app.js Rock
      - node app.js A A A
      - node app.js Rock Paper Paper`
      )
    );
  }
}

async function app() {
  const moves = process.argv.slice(2);

  try {
    validateMoves(moves);

    const cryptoProvider = new CryptoProvider();
    const hmacGenerator = new HMACGenerator(cryptoProvider);
    const gameManager = new GameManager(moves);
    const game = new RPSGame(moves, hmacGenerator, gameManager);
    const gameEngine = new GameEngine(game, moves);

    await gameEngine.playGame();
  } catch (error) {
    console.error(chalk.red(`Error: ${error.message}`));
  }
}

app();

