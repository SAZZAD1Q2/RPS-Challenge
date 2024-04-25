import chalk from 'chalk';
import GameManager from "../GameManager";
import InvalidInputError from '../InvalidInputError';

describe("gameEngine", () => {
  // Test case for a draw
  test("should return draw when userMove equals computerMove", () => {
    const moves = ["Rock", "Paper", "Scissors"];
    const gameEngine = new GameManager(moves);
    const result = gameEngine.determineWinner("Rock", "Rock");
    expect(result).toMatch(chalk.yellow("It's a draw!"));
  });

  // Test case for user winning
  test('should return "You won!" when userMove is a winning move', () => {
    const moves = ["Rock", "Paper", "Scissors"];
    const gameManager = new GameManager(moves);
    const result = gameManager.determineWinner("Rock", "Scissors");
    expect(result).toMatch(chalk.green("You won!"));
  });

  // Test case for computer winning
  test('should return "Computer won!" when computerMove is a winning move', () => {
    const moves = ["Rock", "Paper", "Scissors"];
    const gameManager = new GameManager(moves);
    const result = gameManager.determineWinner("Rock", "Paper");
    expect(result).toMatch(chalk.red("Computer won!"));
  });

  test("determineWinner should throw InvalidInputError for invalid moves", () => {
    const moves = ["Rock", "Paper", "Scissors"];
    const gameLogic = new GameLogic(moves);

    expect(() => gameLogic.determineWinner("InvalidMove", "Rock")).toThrow(
      InvalidInputError
    );
  });
});
