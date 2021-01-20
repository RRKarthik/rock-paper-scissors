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
       if(playerMove=="rock")computerScore++;
       if(playerMove=="paper")computerScore++;
       if(playerMove=="scissors")computerScore++;

    }
    else{
        if(playerMove=="rock")playerScore++;
       if(playerMove=="paper")playerScore++;
       if(playerMove=="scissors")playerScore++;
    }
}

function setPlayerMove(){
   playerMove = this.getAttribute("data-choice");
   computerMove = computerPlay();
   const cpuSelect = document.querySelector(`[data-cpu=${computerMove}]`);
    cpuSelect.classList.toggle('hovering');  
    setTimeout(function(){
      cpuSelect.classList.toggle('hovering');  
    },700);
 
   play(playerMove,computerMove);
   updateScore();
       if(playerScore == 5){
           const playerDiv = document.querySelector("#player-div");
           console.log(playerDiv);
           setInterval(function(){
               playerDiv.classList.toggle("winner");
               setTimeout(function(){playerDiv.classList.toggle("winner");},1000);
           },2000);
           if(!alert("You Won!")){
            location.reload();
        }
       }
       if(computerScore == 5){
           const cpuDiv = document.querySelector("#cpu-div");
           console.log(cpuDiv);
           setInterval(function(){
            cpuDiv.classList.toggle("winner");
            setTimeout(function(){cpuDiv.classList.toggle("winner");},500);
        },2000);
        if(!alert("You Lost!")){
            location.reload();
        }
       
       }
   
}



function updateScore(){
    score.textContent = `${playerScore} - ${computerScore}`;  
}



score.textContent = `${playerScore} - ${computerScore}`;

const buttons = document.querySelectorAll(".player");
buttons.forEach(button => button.addEventListener("click",setPlayerMove) );










