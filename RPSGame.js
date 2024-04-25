class RPSGame {
  constructor(moves, hmacGenerator, gameLogic) {
    this.moves = moves;
    this.hmacGenerator = hmacGenerator;
    this.gameLogic = gameLogic;
    this.hmacKey = hmacGenerator.generateKey();
  }

  generateHMAC(move) {
    return this.hmacGenerator.generateHMAC(move, this.hmacKey);
  }

  determineWinner(userMove, computerMove) {
    return this.gameLogic.determineWinner(userMove, computerMove);
  }
}

export default RPSGame;