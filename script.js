// Get references to the three buttons and the result div
const buttons = document.getElementsByClassName("myButton");
const resultDiv = document.getElementById("result");

// Initialize player scores
let userScore = 0;
let computerScore = 0;

// Function to handle the game logic
function playGame(userChoice) {
    // Generate a random choice for the computer
    const choices = ["Pierre", "Feuille", "Ciseaux"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the result of the game
    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Pierre" && computerChoice === "Ciseaux") ||
        (userChoice === "Feuille" && computerChoice === "Pierre") ||
        (userChoice === "Ciseaux" && computerChoice === "Feuille")
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    // Display the results
    resultDiv.textContent = `You chose ${userChoice}, and the computer chose ${computerChoice}. ${result}`;

    // Check for a winner
    if (userScore === 3) {
        resultDiv.textContent = "Congratulations! You win the game!";
        disableButtons();
    } else if (computerScore === 3) {
        resultDiv.textContent = "Computer wins the game. Try again!";
        disableButtons();
    }
}

// Function to disable buttons after the game is over
function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

// Add click event listeners to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        const userChoice = event.target.value;
        playGame(userChoice);
    });
}




