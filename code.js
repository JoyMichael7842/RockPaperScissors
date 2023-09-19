function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function getComputerChoice(){
    randomNumber = getRandomInt(3)
    return moves[randomNumber]
}

function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection){
        return 'Its a Draw!'
    }
    if(playerSelection=='rock'){
        if(computerSelection == 'scissors'){
            return 'you Win! Rock beats scissors'
        }
        else{
            return 'you Lose! paper beats rock'
        }
    }
    if(playerSelection=='paper'){
        if(computerSelection == 'rock'){
            return 'you Win! paper beats rock'
        }
        else{
            return 'you Lose! scissors beats rock'
        }
    }
    if(playerSelection=='scissors'){
        if(computerSelection == 'paper'){
            return 'you Win! scissors beats paper'
        }
        else{
            return 'you Lose! rock beats scissors'
        }
    }
}

function game(){
    for(let i=1;i<=5;i++){
        playerSelection = prompt('make your choice:')
      
        if((moves.includes(playerSelection)) == false){
            console.log('Choose between rock, paper, scissors')
        } 
        else{
            console.log(playRound(playerSelection,getComputerChoice()))
        }
        
    }
}

const moves = ["rock", 'paper', 'scissors']
game()

/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/