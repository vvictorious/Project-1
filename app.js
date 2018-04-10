

let background = document.getElementById("background_for_click");
// let target= document.getElementsByClassName("target");
let score = document.getElementById("score");  //when I add.value; the target stops moving
// console.log(target);

var timeleft = 30;
var downloadTimer = setInterval(function(){
	timeleft--;
 	document.getElementById("countdown").textContent = timeleft;
  	if(timeleft <= 0)
    	clearInterval(downloadTimer);
},1000);

function createTarget(){
	let target =document.createElement("img")
	target.setAttribute("id", "targetObject")
	target.setAttribute("src", "dart-board.png")	
	target.addEventListener("click", addScore)
	let targetContainer = document.getElementById("target_container");
	targetContainer.appendChild(target);
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




//this is my function that turns my mouse into a crosshair		
background.onmouseover= function myMove(){
	this.style.cursor="crosshair";
 }


//this is the function that makes the target respawn called frame
//this is storing the create target function from above as a variable while calling that function
//then we are calling the randomize function with the first target variable as a parameter
//then we are setting the interval which is taking randomize, 1500 milliseconds, and first target as arguments.
function frame() {
	let firstTarget = createTarget();
	randomize(firstTarget);
	setInterval(randomize, 1500, firstTarget);
	// console.log(firstTarget);
}


//this is calling frame right above
frame()

function addScore() {
	let oldTarget = document.getElementById("targetObject")
	oldTarget.parentNode.removeChild(oldTarget);
	score += 10;
	var lblScore = document.getElementById('score_tracker');
	score_tracker.innerHTML=score;
	frame();
}

//this is me making my timer

































































