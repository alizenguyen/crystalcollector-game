//Instructions

$(".button").on("click", function() {
	alert ("You will be given a random number at the start of the game. There are four crystals below. By clicking on a crystal you will add a specific amoutn of points to your score. You win the game by matching your total sore to random number, you lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time when the game starts, the game will change values of each crystal.");
});

//Computer chooses random number between 10-120

var computerChoice = Math.floor(Math.random() * 110) + 10;

console.log(computerChoice);

//Computer chooses random number between 10-120

function computerGuess() { 
	return computerChoice
};

$("#score-chosen").html(computerChoice);

//When crystal is clicked - add number between 1-12 to score

//Player wins if total score matches random number. RESET.

//Player loses if scor goes above random number. RESET.

//Game reset. Sees new random number. User's score will reset to 0. All 4 crystals will have new hidden values. 