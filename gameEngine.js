import readline from 'node:readline';
import chalk from 'chalk';

import RPSHelper from './Helper.js';
import InvalidInputError from './InvalidInputError.js';

class GameEngine {
  constructor(game, moves) {
    this.game = game;
    this.moves = moves;
  }

  async playGame() {
    try {
      const computerMove = this.moves[Math.floor(Math.random() * this.moves.length)];
      const hmac = this.game.generateHMAC(computerMove);
      this.printGameIntro(hmac);
      this.printAvailableMoves();

      const userInput = await this.promptUser('Enter your move: ');

      if (userInput === '?') {
        this.displayHelp();
        return;
      }
      if (userInput === '0') {
        console.log(chalk.bold('See You Again!'));
        return;
      }

      const userMoveIndex = Number(userInput);
      const userMove = this.moves[userMoveIndex - 1];

      this.validateUserInput(userMoveIndex);

      console.log(chalk.bold(`Your move: ${userMove}`));
      console.log(chalk.bold(`Computer move: ${computerMove}`));
      console.log(this.game.determineWinner(userMove, computerMove));
      console.log(chalk.bold(`HMAC key: ${this.game.hmacKey}`));
    } catch (error) {
      this.handleError(error);
    }
  }

  printGameIntro(hmac) {
    console.log(chalk.greenBright('*************************** CriptoRPS ****************************'));
    console.log(chalk.yellow('Welcome Back! Please select a move by entering a number'));
    console.log(chalk.redBright(`HMAC: ${hmac}`));
    console.log(chalk.greenBright('******************************************************************'));
  }

  printAvailableMoves() {
    console.log(chalk.cyan('Available moves:'));
    this.moves.forEach((move, index) => console.log(chalk.cyan(`${index + 1} - ${move}`)));
    console.log(chalk.cyan('0 - Exit'));
    console.log(chalk.cyan('? - Help'));
  }

  async promptUser(question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => rl.question(chalk.bold(question), (answer) => {
      rl.close();
      resolve(answer.trim());
    }));
  }

  displayHelp() {
    console.log(chalk.blue('Help Menu:'));
    RPSHelper.displayHelpTable(this.moves);
  }

  validateUserInput(userMoveIndex) {
    if (Number.isNaN(userMoveIndex) || userMoveIndex < 0 || userMoveIndex > this.moves.length) {
      throw new InvalidInputError(chalk.red('Invalid move: Please choose a valid move by entering an Available number'));
    }
  }

  handleError(error) {
    console.error(chalk.red(`Error: ${error.message}`));
  }
}

export default GameEngine;