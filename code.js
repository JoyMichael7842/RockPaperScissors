

const playerScoretext = document.querySelector('#player_score') 
const computerScoretext = document.querySelector('#computer_score') 
const resultText = document.querySelector('#result') 
const buttons= document.querySelectorAll('.button')
console.log(buttons)
buttons.forEach(button=>button.addEventListener('click',getPlayerChoice))
let playerscore = 0
let computerscore = 0
let result=''
function getPlayerChoice(e){
    console.log(e.target.textContent)
    result = playRound(e.target.textContent,getComputerChoice())
    console.log(result)
    updateScores(result)
    
}

const moves = ["rock", 'paper', 'scissors']

function updateScores(result){
    if(result=='Win'){
        playerscore +=1
        console.log(playerscore)
        if(playerscore==5){
            resultText.textContent = 'You got to 5, You Win!'
            playerscore = 0
            computerscore = 0
            playerScoretext.textContent = 'Player Score: '+playerscore.toString()
            computerScoretext.textContent = 'Computer Score: '+computerscore.toString()
            return
        }
        playerScoretext.textContent = 'Player Score: '+playerscore.toString()
        resultText.textContent = 'Result: You Win'
    }
    if(result=='Lose'){
        computerscore +=1
        console.log(computerscore)
        if(computerscore==5){
            resultText.textContent = 'Computer got to 5, You Lose!'
            playerscore = 0
            computerscore = 0
            playerScoretext.textContent = 'Player Score: '+playerscore.toString()
            computerScoretext.textContent = 'Computer Score: '+computerscore.toString()
            return
        }
        computerScoretext.textContent = 'Computer Score: '+computerscore.toString()
        resultText.textContent = 'Result: You lose'
    }
    if(result=='Draw'){
         resultText.textContent = 'Result: Its a Draw'
    }
}

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
        return 'Draw'
    }
    if(playerSelection=='rock'){
        if(computerSelection == 'scissors'){
            return 'Win'
        }
        else{
            return 'Lose'
        }
    }
    if(playerSelection=='paper'){
        if(computerSelection == 'rock'){
            return 'Win'
        }
        else{
            return 'Lose'
        }
    }
    if(playerSelection=='scissors'){
        if(computerSelection == 'paper'){
            return 'Win'
        }
        else{
            return 'Lose'
        }
    }
}
/*
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
*/







/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/