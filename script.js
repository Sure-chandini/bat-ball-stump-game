let score = JSON.parse(localStorage.getItem('Score')) || {
  win: 0,
  lost: 0,
  tie: 0
};

function playBat() {
  let computerChoice = generateComputerChoice();
  let result = getResult('Bat', computerChoice);
  showResult('Bat', computerChoice, result);
}

function playBall() {
  let computerChoice = generateComputerChoice();
  let result = getResult('Ball', computerChoice);
  showResult('Ball', computerChoice, result);
}

function playStump() {
  let computerChoice = generateComputerChoice();
  let result = getResult('Stump', computerChoice);
  showResult('Stump', computerChoice, result);
}

function generateComputerChoice() {
  let random = Math.random();

  if (random < 0.33) return 'Bat';
  else if (random < 0.66) return 'Ball';
  else return 'Stump';
}

function getResult(user, computer) {

  if (user === computer) {
    score.tie++;
    return "It's a tie";
  }

  if (
    (user === 'Bat' && computer === 'Ball') ||
    (user === 'Ball' && computer === 'Stump') ||
    (user === 'Stump' && computer === 'Bat')
  ) {
    score.win++;
    return 'User won.';
  } else {
    score.lost++;
    return 'Computer has won';
  }
}

function showResult(user, computer, result) {

  localStorage.setItem('Score', JSON.stringify(score));

  document.querySelector('#user-move').innerText =
    "You chose: " + user;

  document.querySelector('#computer-move').innerText =
    "Computer chose: " + computer;
  document.querySelector('#result').innerText = result;

  let resultElement = document.querySelector('#result');


  // 🔥 COLOR FIX (FINAL)//

  if (result === 'User won.') {
    resultElement.style.color='green';
  }
  else if (result === 'Computer has won') {
    resultElement.style.color='red';
  } 
  else {
    resultElement.style.color='orange';
  }

  document.querySelector('#score').innerText =
    `Wins: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
}

function resetScore() {
  score = { win: 0, lost: 0, tie: 0 };
  localStorage.setItem('Score', JSON.stringify(score));

  document.querySelector('#user-move').innerText = '';
  document.querySelector('#computer-move').innerText = '';
  document.querySelector('#result').innerText = '';
  document.querySelector('#score').innerText = '';
}