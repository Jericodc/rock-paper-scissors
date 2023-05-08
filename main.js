const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  return ['rock', 'paper', 'scissors', 'bomb'].includes(userInput)
    ? userInput
    : console.log('Error! Enter a valid input between "rock", "paper" or "scissors"');
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Is a tie'
  };

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } return 'You won!';
  };

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } return 'You won!';
  };

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } return 'You won!';
  };

  if (userChoice === 'bomb') {
    return 'WooW you destroy everything so I guess you won...'
  }
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You choice: ${userChoice}.`);
  console.log(`The computer choice: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()