function userInput() {
    let pick = prompt("Enter rock,paper or scissors");
    if (pick == null)
        return "Wrong input!";
    else
        return pick;
}

function computerPlay() { 
    const values = ["rock", "paper", "scissors"];
    const pickOne = Math.floor(Math.random() * values.length);
    var computerChose = values[pickOne];
    //console.log("Computer picked "+computerChose);
    return computerChose;
}

function singleRound(playerSelection, computerSelection) { 
    var playerSelection = playerSelection.toLowerCase();
    var computerSelection = computerPlay();
    var msg;
    //computer picks:rock   player has 3 choices  
    if (computerSelection == "rock" && playerSelection == "rock")
        msg = "Its a tie, play again!";
    else if (computerSelection == "rock" && playerSelection == "paper")
        msg = "You win! paper beats rock";
    else if (computerSelection == "rock" && playerSelection == "scissors")
        msg = "You lose! rock beats scissors";

    //computer picks:paper   player has 3 choices    
    else if (computerSelection == "paper" && playerSelection == "rock")
        msg = "You lose! paper beats rock";
    else if (computerSelection == "paper" && playerSelection == "paper")
        msg = "Its a tie, play again!";
    else if (computerSelection == "paper" && playerSelection == "scissors")
        msg = "You win! scissors beat paper"
    
    //computer picks:scissors  player had 3 choices
    else if (computerSelection == "scissors" && playerSelection == "rock")
        msg = "You win! rock beats scissors";
    else if (computerSelection == "scissors" && playerSelection == "paper")
        msg = "You lose! scissors beat paper";
    else if (computerSelection == "scissors" && playerSelection == "scissors")
        msg = "Its a tie, play again!";
    
    else
        msg = "Invalid choice! Acceptable inputs:rock,paper,scissors";
        console.log("You picked:" + playerSelection);
        console.log("Computer picked " + computerSelection);
        console.log(msg);
         return msg;
  
}

function game() {
    singleRound(userInput(), computerPlay());
    }
