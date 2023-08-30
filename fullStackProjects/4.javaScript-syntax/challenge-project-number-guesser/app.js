let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Computer generated target
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

//comparing the guesses
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const compareHuman = Math.abs(targetGuess - humanGuess);
  const compareComputer = Math.abs(targetGuess - computerGuess);
  if (humanGuess === computerGuess) {
    return true;
  } else if (compareHuman <= compareComputer) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
