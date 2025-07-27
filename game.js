let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
// To draw
const gameDraw = () => {
   msg.innerText = "Game DRAW , Play Again ";
     msg.style.backgroundColor = "grey";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win!");
    msg.innerText = `YOU WIN! . your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `YOU Lost. ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};
const playGame = (userChoice) => {
  console.log("User choice =", userChoice);
  const computerChoice = genComputerChoice();
  console.log(" Computer choice =", computerChoice);

  if (userChoice === computerChoice) {
    gameDraw();
  } else {
    let userWin;
if (userChoice === "rock") {
  userWin = computerChoice === "scissors";
} else if (userChoice === "paper") {
  userWin = computerChoice === "rock";
} else {
  userWin = computerChoice === "paper";
}


    showWinner(userWin , userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});
