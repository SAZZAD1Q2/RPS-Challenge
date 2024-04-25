<a name="readme-top"></a>

<div align="center">
   <h3><b>RPS-Challenge</b></h3>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 RPS-Challenge <a name="about-project"></a>

Introducing RPS-Challenge - a command-line game that puts a cryptographic spin on the classic Rock, Paper, Scissors! Developed in JavaScript, this game elevates the traditional gameplay with the use of HMAC (Hash-based Message Authentication Code), ensuring both security and fair play. Enjoy a unique gaming experience with RPS-Challenge!

## 🛠 Built With <a name="built-with"></a>

## Tech Stack <a name="tech-stack"></a>

<details>
  <summary>BUILT WITH</summary>
  <ul>
    <li><a href=#>console app</a></li>
    <li>Node.js</li>
    <li>JavaScript.js</li>
  </ul>
</details>
<details>
  <summary>Run environment</summary>
  <ul>
    <li><a href=#>console app</a></li>
     <li>Node.js</li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
 <li>no Database</li>
  </ul>
</details>

### 🎮 Game Overview <a name="game-overview"></a>

RPS-Challenge brings a fresh twist to the classic Rock, Paper, Scissors game by securing each move with HMAC. Each game session is enhanced with a unique HMAC key, providing additional security and ensuring transparent gameplay.

### 🔑 HMAC Generation <a name="hmac-generation"></a>

The game employs cryptographic techniques to create HMAC keys and hash player moves, guaranteeing that the outcomes are both secure and verifiable.

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

### 🛠 Prerequisites <a name="prerequisites"></a>

To run RPS-Challenge, you need the following:

- Node.js installed on your machine

### 🚀 Installation <a name="installation"></a>

1. Clone the repository:

   ```bash
    https://github.com/SAZZAD1Q2/RPS-Challenge.git
    cd RPS-Challenge
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

<!-- GAMEPLAY -->

## 🎮 Gameplay <a name="gameplay"></a>

### 🔄 How to Play <a name="how-to-play"></a>

1. Run the game:

   ```bash

   node app.js MOVE1 MOVE2 MOVE3

   ```

   ## Example Valid Moves:

   - node app.js MOVE1 MOVE2 MOVE3
   - node app.js STONE PAPER SCISSORS
   - node app.js STONE SPOCK PAPER LIZARD SCISSORS
   - node app.js Rock Paper STONE LIZARD SPOCK
   - node app.js A B C D E F G
   - node app.js 1 2 3 4 5 6 7 8 9

   ## Examples of Invalid moves:

   - node app.js
   - node app.js Rock
   - node app.js A A A
   - node app.js Rock Paper Paper
   - node app.js Rock Paper Scissors Lizard Scissors
   - node app.js 1 2 3 4 5 6 7 8

2. Follow the on-screen instructions to make your move.

3. Enjoy the game and verify its transparency using HMAC!

### 📊 Game Logic <a name="game-logic"></a>

The game adheres to traditional Rock, Paper, Scissors rules but introduces an extra layer of cryptographic protection. Using an HMAC key, it ensures that all moves are tamper-proof and can be independently verified..

## HELP TABLE

Results are from the user's point of view:
which move would result in what? You Win / Lose / Draw

| v PC\User > | ROCK | STONE | LIZARD | SPOCK | PAPER | 6TH  | 7TH  |
| ----------- | ---- | ----- | ------ | ----- | ----- | ---- | ---- |
| ROCK        | Draw | Win   | Win    | Win   | Lose  | Lose | Lose |
| STONE       | Lose | Draw  | Win    | Win   | Win   | Lose | Lose |
| LIZARD      | Lose | Lose  | Draw   | Win   | Win   | Win  | Lose |
| SPOCK       | Lose | Lose  | Lose   | Draw  | Win   | Win  | Win  |
| PAPER       | Win  | Lose  | Lose   | Lose  | Draw  | Win  | Win  |
| 6TH         | Win  | Win   | Lose   | Lose  | Lose  | Draw | Win  |
| 7TH         | Win  | Win   | Win    | Lose  | Lose  | Lose | Draw |

<!-- AUTHOR -->

## 👥 Authors <a name="authors"></a>

## 👤 Md Sazzad Hossain

- GitHub: [SAZZAD1Q2](https://github.com/SAZZAD1Q2)
- Twitter: [Md Sazzad Hossain](https://twitter.com/sazzad2ysh)
- LinkedIn: [Md Sazzad Hossain](https://www.linkedin.com/in/sazzad3y/)

## Future Features

- UI LOOK
- INTERACTIVE GAME

## Contributing

Everyone is invited to contribute to this project, suggest modifications, report problems, and request new features. To get involved, simply fork this repository, create a new branch for your changes, and submit a pull request from your branch to initiate the review process.

Feel free to check the [issues page](../../issues/).

## Show Your Support

If you feel interest in this project, please give it a star ⭐️. You can use it following the [MIT License](./LICENSE).

## Acknowledgments

I would like to thank [Itransition-Group](https://www.itransition.com/) for the opportunity to learn and use their platform and services.

## License

This project is under the [MIT License](./LICENSE).
