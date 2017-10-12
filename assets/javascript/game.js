//Instructions

$(".info").on("click", function() {
	alert ("You will be given a random number at the start of the game. There are four crystals below. By clicking on a crystal you will add a specific amoutn of points to your score. You win the game by matching your total sore to random number, you lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time when the game starts, the game will change values of each crystal.");
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

console.log(computerChoice);



$(document).ready(function() { 

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
	});

	$("#crystalTwo").on("click", function() {
		crystalTwo = parseInt(crystalTotal[1]);
		yourScore += crystalTwo;
		console.log("crystalTwo = " + crystalTwo);
	    console.log("yourScore = " + yourScore);
	    $("#total-score").html(yourScore);
	    winloss();
	});

	$("#crystalThree").on("click", function() {
		crystalThree = parseInt(crystalTotal[2]);
		yourScore += crystalThree;
		console.log("crystalThree = " + crystalThree);
	    console.log("yourScore = " + yourScore);
	    $("#total-score").html(yourScore);
	    winloss();
	});

	$("#crystalFour").on("click", function() {
		crystalFour = parseInt(crystalTotal[3]);
		yourScore += crystalFour;
		console.log("crystalThree = " + crystalFour);
	    console.log("yourScore = " + yourScore);
	    $("#total-score").html(yourScore);
	    winloss();
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
			reset();

			startOver();

		} else if (yourScore > computerChoice) {
			losses++;
			$("#total-losses").html(losses);
			reset();

			startOver();
		}
	};

startOver(); 

}); //. Document Ready

