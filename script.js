console.log("bonjour");
let computerSelection;
let playerSelection;
let playerCount = 0;
let computerCount = 0;



function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNumber == 0) {
        computerChoice = "Pierre";
    } else if (randomNumber == 1) {
        computerChoice = "Feuille"
    } else{
        computerChoice = "Ciseaux"
    }

    return computerChoice;
} 


function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = ""


    if ((playerSelection == "Pierre" && computerSelection == "Ciseaux") || 
        (playerSelection == "Feuille" && computerSelection == "Pierre") || 
        (playerSelection == "Ciseaux" && computerSelection == "Feuille")) {
        playerCount ++;    
        return 'Bravo, ' + playerSelection + " bat " + computerSelection
    } else if (playerSelection == computerSelection) {
        computerCount ++;
        return 'match nul, ' + playerSelection + " est sorti 2 fois!"
    } else {
        return 'Aïe, ' + playerSelection + " est battu par " + computerSelection
    }
}

function game(){
    while ((playerCount != 5) || (computerCount != 5)) {
        playRound();
        console.log("Score joueur = " + playerCount + " et score ordinateur = " + computerCount);
    }
}

let btn2 = document.getElementById("feuille");
let val2 = btn2.value;
console.log(val2);