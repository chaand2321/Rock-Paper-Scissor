let playerScore=0;
let compScore=0;

let roundWinner='';


let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let playerScoreDisplay = document.getElementById("p-s")
let computerScoreDisplay = document.getElementById("c-s");
let roundWinDisplay = document.getElementById("roundAns");
let compChooseDisplay = document.getElementById("ansDiv");


let endgameModal = document.getElementById('endgameModal')
let endgameMsg = document.getElementById('endgameMsg')
let overlay = document.getElementById('overlay')
let restartBtn = document.getElementById('restartBtn')

function handlingValue(playerSelection){
   
    if (isGameOver()) {
        openEndgameModal()
        return
      }

      const computerSelection = getRandomChoice()
      compChooseDisplay.textContent=computerSelection;
      playRound(playerSelection, computerSelection)
    if (isGameOver()) {
        openEndgameModal()
        setFinalMessage()
       }
}



  


let playerSelection = '';


//SELECTING PLAYER MODE
rock.addEventListener('click' , ( )=>handlingValue('ROCK') );

paper.addEventListener('click' , ( )=>handlingValue('PAPER'));
    
scissor.addEventListener('click' , ( )=>handlingValue('SCISSOR'));
    
reset.addEventListener('click' ,resetGame);


restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)
 


function isGameOver() {
    return playerScore === 5 || compScore === 5
  }

//SELECTING COMPUTER MODE
// let compSelection = getRandomChoice();

function getRandomChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
        case 0:
            return 'ROCK';
        case 1 :
            return 'PAPER'
        case 2 :
            return 'SCISSOR';        
    } 
}

//RESULT CHECKING
function playRound( playerSelection , computerSelection){
    playerScoreDisplay.textContent=playerScore;
    computerScoreDisplay.textContent=compScore;

    if(playerSelection === computerSelection){
          roundWinner = "TIE";
    }

    if( 
        (playerSelection === 'ROCK' && computerSelection === 'SCISSOR') ||
    (playerSelection === 'SCISSOR' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK') 
    ){
        playerScore++;        
        roundWinner="PLAYER WON";
    }

    if(
        (computerSelection === 'ROCK' && playerSelection === 'SCISSOR') ||
    (computerSelection === 'SCISSOR' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    )
    {
        compScore++;
        roundWinner="COMPUTER WON";
    }
    
    roundWinDisplay.textContent=roundWinner;
    playerScoreDisplay.textContent=playerScore;
    computerScoreDisplay.textContent=compScore;
    // if (isGameOver()) {
    //     displayScore()
    //     return
    //   }
}



function openEndgameModal() {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
  }
  
  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }
  function setFinalMessage(){
    return playerScore > compScore
    ? (endgameMsg.textContent = 'You won!')
    : (endgameMsg.textContent = 'You lost...')
}


function restartGame(){
    playerScore = 0 ;
    compScore = 0;
    roundWinner='';
    playerScoreDisplay.textContent=playerScore;
    computerScoreDisplay.textContent=compScore;
    roundWinDisplay.textContent=roundWinner;
    ans.textContent='';
    computerSelection='';
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}
    


