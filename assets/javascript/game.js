//Instructions

$(".info").on("click", function() {
	alert ("You will be given a random number at the start of the game. There are four crystals below. By clicking on a crystal you will add a specific amount of points to your score. You win the game by matching your total sore to random number chosen. You lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time the game restarts, the game will change values of each crystal.");
});

// Sets the music
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/backgroundmusic.mp3");

      // Theme Button
      $(".setMood").on("click", function() {
        audioElement.play();
      });

      $(".killMood").on("click", function() {
        audioElement.pause();
      });

//Variables 
var computerChoice = Math.floor(Math.random() * 110) + 10;
var crystalVal = [Math.floor(Math.random() * 12) + 1];
var crystalTotal = [];
var yourScore = 0;
var wins = 0;
var losses = 0;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var audio = new Audio("assets/coin-sound.wav");
var audioLose = new Audio("assets/you-lose.wav");
var audioWin = new Audio("assets/you-win.mp3");
var audioWin2 = new Audio("assets/you-win2.wav");

console.log(computerChoice);



$(document).ready(function() { 

	//Instructions

/* MODAL JQUERY CODE - REVISIT

 	$('#modalButton').click(function (event) {
        $('#exampleModalLong').modal('show')
    });

*/

	function startOver() {

			//Computer chooses random number between 10-120

			computerChoice = Math.floor(Math.random() * 110) + 10;
			computerChoice = parseInt(computerChoice);

			$("#score-chosen").html(computerChoice);

			//Adding between 1-12 to score when clicked

			for (var i = 1; i < 5; i++) {
				crystalVal = [Math.floor(Math.random() * 12) + 1];
			    console.log("crystalVal = " + crystalVal);

			    // Push random CrystalVal into Crystal Vals array
			    crystalTotal.push(crystalVal);
			    console.log("crystalTotal = " + crystalTotal);

			    };
	
	}; //startOver function

	//Button functions

	$("#crystalOne").on("click", function() {
		crystalOne = parseInt(crystalTotal[0]);
		yourScore += crystalOne;
		console.log("crystalOne = " + crystalOne);
	    console.log("yourScore = " + yourScore);
	    $("#total-score").html(yourScore);
	    winloss();
	    audio.play();
	});

	$("#crystalTwo").on("click", function() {
		crystalTwo = parseInt(crystalTotal[1]);
		yourScore += crystalTwo;
		console.log("crystalTwo = " + crystalTwo);
	    console.log("yourScore = " + yourScore);
	    $("#total-score").html(yourScore);
	    winloss();
	    audio.play();
	});

	$("#crystalThree").on("click", function() {
		crystalThree = parseInt(crystalTotal[2]);
		yourScore += crystalThree;
		console.log("crystalThree = " + crystalThree);
	    console.log("yourScore = " + yourScore);
	    $("#total-score").html(yourScore);
	    winloss();
	    audio.play();
	});

	$("#crystalFour").on("click", function() {
		crystalFour = parseInt(crystalTotal[3]);
		yourScore += crystalFour;
		console.log("crystalThree = " + crystalFour);
	    console.log("yourScore = " + yourScore);
	    $("#total-score").html(yourScore);
	    winloss();
	    audio.play();
	});

	//Game reset. Sees new random number. User's score will reset to 0. All 4 crystals will have new hidden values. 

	function reset() {
		yourScore = 0;
		crystalVal = 0;
		crystalTotal = [];
	};

	//WINS AND LOSSES
	function winloss() {
		if (yourScore === computerChoice) {
			wins++; 
			$("#total-wins").html(wins);
			audioWin.play();
			audioWin2.play();
			reset();

			startOver();

		} else if (yourScore > computerChoice) {
			losses++;
			$("#total-losses").html(losses);
			audioLose.play();
			reset();

			startOver();
		}
	};

startOver(); 

}); //. Document Ready

