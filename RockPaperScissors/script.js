// create a function to randomly return Rock Paper or Scissors
function computerPlay() {
const options = ["Rock","Paper","Scissors"];
const random = Math.floor(Math.random()* options.length);
return options[random];
}

// write a function that plays a single round of Rock paper scissors that takes
// two selections, playerSelection and computerSelection

function playRound() {
    const playerSelection = prompt("What do you choose?");
    const computerSelection = computerPlay();
    
      if((playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors")||
         (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") ||
         (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")) {
        return "You won!";
      }
    else if((playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")||
         (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") ||
         (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors")){
      return "You lose!";
    }
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
      return "You tied, you both selected the same option!";
    }
    else{
      return "Invalid input, please try again";
    }
  }
  
  function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound());
    }
  }
  
  console.log(game());





