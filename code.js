function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function getComputerChoice(){
    randomNumber = getRandomInt(3)
    return moves[randomNumber]
}

const moves = ['rock', 'paper', 'scissors']

console.log(getComputerChoice())