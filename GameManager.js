import chalk from 'chalk';
import InvalidInputError from './InvalidInputError.js';

class GameManager {
  constructor(moves) {
    this.moves = moves;
  }

  determineWinner(userMove, computerMove) {
    const n = this.moves.length;
    const half = Math.floor(n / 2);
    const userIndex = this.moves.indexOf(userMove);
    const computerIndex = this.moves.indexOf(computerMove);

    if (userIndex === -1 || computerIndex === -1) {
      throw new InvalidInputError(chalk.red('Invalid move: Please choose a valid move by entering an Available number'));
    }

    const winningMoves = this.moves.slice(computerIndex + 1, computerIndex + 1 + half)
      .concat(this.moves.slice(0, computerIndex - half));

    if (userMove === computerMove) {
      return chalk.yellow('It\'s a draw!');
    }
    if (winningMoves.includes(userMove)) {
      return chalk.green('You won!');
    }
    return chalk.red('Computer won!');
  }
}

export default GameManager;