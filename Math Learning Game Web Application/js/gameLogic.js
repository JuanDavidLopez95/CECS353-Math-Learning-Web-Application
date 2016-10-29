/* Get Dynamic Elements */

//Holds the value of the input box where the player types in his name
var playerName = document.getElementById("nameInput").value;

//Get the the option chosen for the diffulty level
//var difficultyLevel = document.querySelector("input[name='level-options']:checked").value;

/* Get the type of math buttons */
var mathTypeButton = document.getElementsByClassName("mathType-button");
var additionButton = document.getElementById("addition-Button");
var subtractionButton = document.getElementById("subtraction-Button");
var multiplicationButton = document.getElementById("multiplication-Button");
var divisionButton = document.getElementById("division-Button");

/* Call the initializeGame() method when any of the math-Type buttons are clicked. 
	This code has to be utilized for the mathTypeButton variable returns a NodeList 
	object which does not work in an eventListener. An eventListener requires 
	a Node, and not a NodeList which the document.getElementsByClassName returns.
	This is a workaround for this, converting the NodeList to a Node. 

		Syntax: [].forEach.call(nodeList,function(e){e.addEventListener('click',callback,false)})
		Source: https://stackoverflow.com/questions/12362256/addeventlistener-on-nodelist
*/
[].forEach.call(mathTypeButton, function(e) {
							  	e.addEventListener('click',initializeGame,false)
							  } //end function(e)
				);

//mathTypeButton.addEventListener("click", initializeGame);

function initializeGame() {
	console.log("A Math Type Button Was Clicked.");
    validateInputs(); 
} //end initializeGame() button

/* Check to see if the player name input box is empty and/or
   a difficulty level hasn't been selected. Returns an error
   prompting the user to do select the said options.  */
function validateInputs() {
	if (checkPlayerName() == false) {
		document.getElementById("nameInput-errorMessage").style.display = "inline-block";
	}  //end if statement

	if (checkPlayerName() == true) {
		document.getElementById("nameInput-errorMessage").style.display = "none";
	} //end if statement

	if (checkDifficultyLevel() == false) {
		console.log("Please choose a difficulty level");
		document.getElementById("difficultyLevel-errorMessage").style.display = "inline-block";
	} //end if-statement

	if (checkDifficultyLevel() == true) {
		document.getElementById("difficultyLevel-errorMessage").style.display = "none";
	} //end if-statement

	if (checkPlayerName() == true && checkDifficultyLevel() == true) {
		console.log("Push state");
		window.location.href = "/gameRun.html";
	} //end if-statement

} //end validateInputs() function

/* Checks to see if there is whitespace in an element
   like an input field. Returns true if the field is empty.
*/
function isEmpty(str){
    return !str.replace(/^\s+/g, '').length; 
}

function checkPlayerName() {
	if (playerName == "" || playerName === null || 
		playerName.length == 0 || isEmpty(playerName) == true ) {
		return false;
	} //end if statement
	if (playerName !== "" || playerName !== null || 
		playerName.length != 0 || isEmpty(playerName) == false ) {
		return true;
	} 
} //end checkPlayerName() function

/* Checks if a difficulty level has been selected or not. */
function checkDifficultyLevel() {
	var diffLevelRadioButton = document.forms["difficutyLevelForm"]["level-options"];
	var diffLevelFormLength = diffLevelRadioButton.length;
	var levelChosen = null;

	for (var i = 0; i < diffLevelFormLength; i++) {
		if (diffLevelRadioButton[i].checked) {
			levelChosen = diffLevelRadioButton[i].value;
		} //end if-statement
	} //end for loop

	if (levelChosen == null) {
		return false;
	} //end if-statement

	else {
		return true;
	} //end else-statement
} //end checkDifficultyLevel() option