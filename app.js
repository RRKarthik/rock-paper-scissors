let playerScore = 0;
let computerScore = 0;
const score = document.querySelector(".score-card");

function computerPlay(){
    let moves = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return moves[index];
}

function play(playerMove,computerMove){
    playerMove = playerMove.toLowerCase();
    if(playerMove == computerMove){
        return;
    }else if(playerMove == "rock" && computerMove == "paper" || playerMove == "scissors" && computerMove == "rock" || playerMove == "paper" && computerMove == "scissors"){
       computerScore++;

    }
    else{
        playerScore++;
    }
}

function setMove(){
   playerMove = this.getAttribute("data-choice");
   computerMove = computerPlay();
   const cpuSelect = document.querySelector(`[data-cpu=${computerMove}]`);
    cpuSelect.classList.toggle('hovering');  
    setTimeout(function(){
      cpuSelect.classList.toggle('hovering');  
    },700);
 
   play(playerMove,computerMove);
   updateScore();
   checkScore(); 
   
}

function checkScore(){
    if(playerScore == 5){
        const announcer = document.querySelector("#announcer-para");
        console.log(announcer);
        announcer.textContent = "You Won!";
        const container = document.getElementById("container");
   container.style.cssText = "display:none;"
    }
    if(computerScore == 5){
        const announcer = document.querySelector("#announcer-para");
        console.log(announcer);
        announcer.textContent = "You Lost!";
        const container = document.getElementById("container");
   container.style.cssText = "display:none;"
    }
   

}



function updateScore(){
    score.textContent = `${playerScore} - ${computerScore}`;  
}



score.textContent = `${playerScore} - ${computerScore}`;

const buttons = document.querySelectorAll(".player");
buttons.forEach(button => button.addEventListener("click",setMove) );










