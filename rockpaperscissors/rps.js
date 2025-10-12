const output = document.querySelector(".output");
const inputs = document.querySelectorAll(".move");
const result = document.querySelector(".result");
const wins = document.querySelector("#wins")
const losts = document.querySelector("#losts")
const ties = document.querySelector("#ties")
const min = 1;
const max = 3; 

let numOfWins = 0;
let numOfLosts = 0;
let numOfTies = 0;
function handleGame() {
    const random = Math.floor(Math.random() * (max - min + 1)) + min; 
    const move = this.value;
    let computerMove = null;
    switch(random){
        case 1: computerMove = "rock"; break;
        case 2: computerMove = "paper"; break;
        case 3: computerMove = "scissors"; break;
        default: alert("boom!"); break;
    }
    console.log(`Player: ${move}, Computer: ${computerMove}`);
    output.textContent = `Player chose: ${move},Computer chose: ${computerMove}`;

    if(move == "rock"){
        switch(computerMove){
            case "rock": result.textContent = 'Tied, try again';break;
            case "paper": result.textContent = 'Lost, try again';break;
            case "scissors": result.textContent = "Winner, congrats!";break;
        }
    }
    if(move == "paper"){
        switch(computerMove){
            case "rock": result.textContent = 'Winner, congrats!';break;
            case "paper": result.textContent = 'Tied, try again';break;
            case "scissors": result.textContent = "Lost, try again";break;
        }
    }
    if(move == "scissors"){
        switch(computerMove){
            case "rock": result.textContent = 'Winner, congrats!';break;
            case "paper": result.textContent = 'Lost, try again';break;
            case "scissors": result.textContent = "Tied, try again";break;
        }
    }

    switch(result.textContent){
        case 'Winner, congrats!': numOfWins++; wins.textContent = 'Wins: ' + numOfWins ; break;
        case "Lost, try again": numOfLosts++; losts.textContent = 'Losses: ' + numOfLosts; break;
        case "Tied, try again": numOfTies++; ties.textContent = 'Ties: ' + numOfTies; break;
    }
}

inputs.forEach(button => button.addEventListener('click', handleGame));
