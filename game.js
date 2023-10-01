let headingText = document.getElementsByClassName("title");
let player1dice = document.getElementById("player1dice");
let player2dice = document.getElementById("player2dice");
let player1number = Math.floor(Math.random() * 6 + 1);
let player2number = Math.floor(Math.random() * 6 + 1);

function commenceGame() {
  if (player1number > player2number) {
    headingText[0].innerHTML = "🚩Player 1 Wins";
    changeDiceImage1();
    changeDiceImage2();
  } else if (player1number == player2number) {
    headingText[0].innerHTML = "Draw";
    changeDiceImage1();
    changeDiceImage2();
  } else {
    headingText[0].innerHTML = "Player 2 Wins 🚩";
    changeDiceImage1();
    changeDiceImage2();
  }
}

function changeDiceImage1() {
  if (player1number === 1) {
    player1dice.src = "./images/dice1.png";
  } else if (player1number === 2) {
    player1dice.src = "./images/dice2.png";
  } else if (player1number === 3) {
    player1dice.src = "./images/dice3.png";
  } else if (player1number === 4) {
    player1dice.src = "./images/dice4.png";
  } else if (player1number === 5) {
    player1dice.src = "./images/dice5.png";
  } else if (player1number === 6) {
    player1dice.src = "./images/dice6.png";
  }
}

function changeDiceImage2() {
  if (player2number === 1) {
    player2dice.src = "./images/dice1.png";
  } else if (player2number === 2) {
    player2dice.src = "./images/dice2.png";
  } else if (player2number === 3) {
    player2dice.src = "./images/dice3.png";
  } else if (player2number === 4) {
    player2dice.src = "./images/dice4.png";
  } else if (player2number === 5) {
    player2dice.src = "./images/dice5.png";
  } else if (player2number === 6) {
    player2dice.src = "./images/dice6.png";
  }
}

function askForOption() {
  let answer = prompt("Start Game? (Y/N)");
  while (answer === "Y" || answer === "y") {
    onload(commenceGame());
  }
}

setTimeout(askForOption, 2000);

// commenceGame();
