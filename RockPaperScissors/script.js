// create a function to randomly return Rock Paper or Scissors
function computerPlay() {
const options = ["Rock","Paper","Scissors"];
const random = Math.floor(Math.random()* options.length);
return options[random];
}

// write a function that plays a single round of Rock paper scissors that takes
// two selections, playerSelection and computerSelection

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scisButton = document.querySelector('#scisButton');

const body = document.body;
const div = document.createElement('div');
const divTwo = document.createElement('div');
let count = 0;


rockBtn.onclick = () => rockPlayRound();
paperBtn.onclick = () => paperPlayRound();
scisButton.onclick = () => scissorsPlayRound();


function rockPlayRound() {
    // const playerSelection = prompt("What do you choose?");
    const computerSelection = computerPlay();
    
      if(computerSelection === "Scissors") { 
        div.textContent = "You won!";
        count += 1;
        divTwo.textContent = "Your winning score: " + count;
        if(count === 5){ divTwo.textContent = "Congratulations you won the game!"};
    }

    else if(computerSelection === "Paper")
    {
      div.textContent = "You lose!";
    }
    else if(computerSelection === "Rock"){
      div.textContent = "You tied, you both selected the same option!";
    }
    else{
      div.textContent = "Invalid input, please try again";
    }
    body.append(div, divTwo);
  }

  function paperPlayRound() {
    // const playerSelection = prompt("What do you choose?");

    const computerSelection = computerPlay();
    
      if(computerSelection === "Rock") {
        div.textContent = "You won!";
        count += 1;
        divTwo.textContent = "Your winning score: " + count;
        if(count === 5){ divTwo.textContent = "Congratulations you won the game!"}
      }
    else if (computerSelection === "Scissors"){
      div.textContent = "You lose!";
    }
    else if(computerSelection === "Paper"){
      div.textContent = "You tied, you both selected the same option!";
    }
    else{
      div.textContent = "Invalid input, please try again";
    }
    body.append(div, divTwo);
  }

  function scissorsPlayRound() {
    // const playerSelection = prompt("What do you choose?");

    const computerSelection = computerPlay();
    
      if(computerSelection === "Paper") {
        div.textContent = "You won!";
        count += 1;
        divTwo.textContent = "Your winning score: " + count;
        if(count === 5){ divTwo.textContent = "Congratulations you won the game!"}
      }
    else if(computerSelection === "Rock"){
      div.textContent = "You lose!";
    }
    else if(computerSelection === "Scissors"){
      div.textContent = "You tied, you both selected the same option!";
    }
    else{
      div.textContent = "Invalid input, please try again";
    }
    body.append(div, divTwo);
  }
  








