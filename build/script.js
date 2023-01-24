let win = 0
let lose = 0
let tie = 0

const options = ["Rock", "Paper", "Scissor"]

$("#play").on("click",playGame);

$("#clear").on("click", clearScores);

function playGame() {
    let playerChoice = prompt("Rock, Paper, Scissor").toLowerCase()

    let computerChoice = options[Math.floor(Math.random() * options.length)].toLowerCase()
    
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissor"){
        alert("Invalid selection. Please press play again.")
        return
    }

    $("#game").removeClass("hide");
    $("#score").removeClass("hide");
    $("#rematch-clear").removeClass("hide");

    $("#player-choice").text(playerChoice)
    $("#computer-choice").text(computerChoice)

    if (playerChoice === computerChoice){
        tie++
        $("#result").text("It's a tie!")
    }
    if ((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "scissor" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "scissor")) {
        lose++
        $("#result").text("Computer wins!")
    }
    if ((playerChoice === "rock" && computerChoice === "scissor") || (playerChoice === "scissor" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")) {
        win++
        $("#result").text("Player wins!")
    } 

    $("#player-score").text(win)
    $("#computer-score").text(lose)
    $("#ties").text(tie)
}

function clearScores() {
    $("#player-score").text("")
    $("#computer-score").text("")
    $("#ties").text("")
}
