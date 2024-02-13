// Rock Paper Scissors: refactored with functions (overkill). My attempt.
//------------------------------------------------------------------------------------------//

const initGame = () => {
    const startGame = confirm("Do you want to play Rock, Paper, Scissors?");
    startGame ? playGame() : endedGame();
}

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        if (playerChoice === null) {
            endedGame();
            break;
        }
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        let result = determineWinner(playerChoice, computerChoice);
        alert(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            endedGame();
            break;
        }
    }
}

const getPlayerChoice = () => prompt("Pick Rock, Paper or Scissors!")

const formatPlayerChoice = (playerChoice) => {
    const choice = playerChoice.trim().toLowerCase();
    return (choice === "rock" || choice === "paper" || choice === "scissors")
        ? choice
        : "";
}

const invalidChoice = () => alert("Invalid choice! Try again.")

const endedGame = () => alert("OK, come back soon!")

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[computerChoice];
}

const determineWinner = (playerChoice, computerChoice) => {
    let result = "";
    computer = ["rock", "paper", "scissors"];
    player = ["paper", "scissors", "rock"];
    return playerChoice === computerChoice 
        ? `player: ${playerChoice}\ncomputer: ${computerChoice}\nIt's a Tie!`
        : computer.indexOf(computerChoice) === player.indexOf(playerChoice)
        ? `player: ${playerChoice}\ncomputer: ${computerChoice}\nYou Win!`
        : `player: ${playerChoice}\ncomputer: ${computerChoice}\ncomputer Wins!`
}

const askToPlayAgain = () => confirm("Would you like to play again?")

initGame();

    /* const result = playerChoice === computerChoice
        ? `player: ${playerChoice}\ncomputer: ${computerChoice}\nIt's a Tie!`
        : playerChoice === "rock" && computerChoice === "paper"
        ? `player: ${playerChoice}\ncomputer: ${computerChoice}\ncomputer Wins!`
        : playerChoice === "paper" && computerChoice === "scissors"
        ? `player: ${playerChoice}\ncomputer: ${computerChoice}\ncomputer Wins!`
        : playerChoice === "scissors" && computerChoice === "rock"
        ? `player: ${playerChoice}\ncomputer: ${computerChoice}\ncomputer Wins!`
        : `player: ${playerChoice}\ncomputer: ${computerChoice}\nYou Win!`;
    return result; */

    /* if (computer.indexOf(computerChoice) === player.indexOf(playerChoice)) {
        result = `player: ${playerChoice}\ncomputer: ${computerChoice}\nYou Win!`;
    } else if (computerChoice === playerChoice)
        result = `player: ${playerChoice}\ncomputer: ${computerChoice}\nIt's a Tie!`;
    else {
        result = `player: ${playerChoice}\ncomputer: ${computerChoice}\ncomputer Wins!`;
    } */
    