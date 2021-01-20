function computerPlay(){
    let moves = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return moves[index];
}

function play(playerMove,computerMove){
    playerMove = playerMove.toLowerCase();
    if(playerMove == computerMove){
        return("Its a tie!");
    }else if(playerMove == "rock" && computerMove == "paper" || playerMove == "scissors" && computerMove == "rock" || playerMove == "paper" && computerMove == "scissors"){
       if(playerMove=="rock")return("You lose!Paper beats rock");
       if(playerMove=="paper")return("You lose!Scissors beats paper");
       if(playerMove=="scissors")return("You lose!Rock beats scissors");

    }
    else{
        if(playerMove=="rock")return("You Win!rock beats scissors");
       if(playerMove=="paper")return("You Win!paper beats rock");
       if(playerMove=="scissors")return("You Win!scissors beats paper");
    }
}
function game(){
   let playerScore = computerScore = 0;
   for(let i=0;i<5;i++){
       let playerMove = prompt("Enter your Move");
       let computerMove = computerPlay();
       playerMove = playerMove.toLowerCase();
       console.log("Player move:"+playerMove);
       console.log("Compter Move:"+computerMove);
       let res = play(playerMove,computerMove);
       console.log(res);
       if(res.search("Win")!=-1){
           playerScore++;
       }if(res.search("lose")!=-1){
           computerScore++;
       }
   }
   if(playerScore>computerScore){
       console.log(`You Won! player score: ${playerScore} and computerScore:${computerScore}`);
   }
   else{
       console.log(`You lost! player score: ${playerScore} and computerScore:${computerScore}`);
   }
}
game();