

let background = document.getElementById("background_for_click");
let score = document.getElementById("score");  //when I add.value; the target stops moving
// console.log(target);
let start =document.getElementById("startButton");
let title = document.getElementById("title");
let description = document.getElementById("description");
// console.log(start);
let timeleft = 30;

background.onmouseover= function myMove(){  //this is my function that turns my mouse into a crosshair		
	this.style.cursor="crosshair";
 }

//this is where I do the majority of my on click functions

 start.onclick = function (){
 	// console.log('start button');
 	let centerBox =document.getElementById("gameInfo");  //parent div that holds instruction
 	centerBox.style.display = "none";  //on click make that parent div invisible
 	document.getElementById("target_container").style.display = 'inline-block';  //on click make the container that holds the target visible/appear
 	var downloadTimer = setInterval(function(){  //this is the timer function
	timeleft--;  //telling the function to increment downwards
 	document.getElementById("countdown").textContent = timeleft;  //getting the text content in my paragraph tag
  	if(timeleft <= 0){
  		alert("You scored " + score + " points");  //this is what happens when time reaches zero
    	clearInterval(downloadTimer);  //stops the timer
    	document.getElementById('target_container').style.display='none';  //this hides the target
    	centerBox.removeChild(description);  //this removes the instructions
    	centerBox.removeChild(start);  //this removes the start button
    	centerBox.style.display = "block";  //this makes my box come back


    }
},1000);  //this is for the timer 
 	
 }


//this is where the target gets made
function createTarget(){
	let target =document.createElement("img")  //setting target
	target.setAttribute("id", "targetObject")  //setting the id to targetObject
	target.setAttribute("src", "dart-board.png")  //getting the photo that will be the target
	target.addEventListener("click", addScore)  //adding an on click event listener to add score
	let targetContainer = document.getElementById("target_container");  
	targetContainer.appendChild(target);   //appending the target 
	return target;
}


function randomize(dart){
	//these methods make the dimensions for 
	//the targets to move around randomly in
	var random_margin_top = 650 * Math.random();
	var random_margin_left = 650 * Math.random();
	// //these 2 lines assigning the dimensions to the CSS
	// //and adding pixels so that it will actually work.
	dart.style.marginTop =  random_margin_top + 'px';
	dart.style.marginLeft = random_margin_left + 'px';

}


//this is the function that makes the target respawn called frame
//this is storing the create target function from above as a variable while calling that function
//then we are calling the randomize function with the first target variable as a parameter
//then we are setting the interval which is taking randomize, 1500 milliseconds, and first target as arguments.
function frame() {
	let firstTarget = createTarget();
	randomize(firstTarget);
	setInterval(randomize, 950, firstTarget);  //this is where I control the speed of the target
	// console.log(firstTarget);
}


frame()  //this is calling frame right above


function addScore() {
	let oldTarget = document.getElementById("targetObject")  //setting old target within scope
	oldTarget.parentNode.removeChild(oldTarget); //targetcontainer is the parent node, thereforeremove child removes the target object 
	score += 10;  //when this happens add ten points
	var lblScore = document.getElementById('score_tracker');  //get score tracker and store as variable in scope
	score_tracker.innerHTML=score; //put that score to the inner html
	frame();  //call frame again to make another target
}

































































