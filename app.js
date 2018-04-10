

let background = document.getElementById("background_for_click");
// let target= document.getElementsByClassName("target");
let score = document.getElementById("score");  //when I add.value; the target stops moving
// console.log(target);

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
	var random_margin_top = 650 * Math.random();
	var random_margin_left = 650 * Math.random();
	dart.style.marginTop =  random_margin_top + 'px';
	dart.style.marginLeft = random_margin_left + 'px';
}




//this is my function that turns my mouse into a crosshair		
// background.onmouseover= function myMove(){
// 	this.style.cursor="crosshair";
//  }


//this is the function that makes the target move
//called frame 
function frame() {
	let firstTarget = createTarget();
	//my play area is 700 by 700 pixels
	randomize(firstTarget);
	setInterval(randomize, 2000, firstTarget);
	//thereore, these variables make the dimensions for 
	//the targets to move around randomly in
	// var random_margin_top = 650 * Math.random();
	// var random_margin_left = 650 * Math.random();
	// //these 2 lines assigning the dimensions to the CSS
	// //and adding pixels so that it will actually work.
	// firstTarget.style.marginTop =  random_margin_top + 'px';
	// firstTarget.style.marginLeft = random_margin_left + 'px';
	console.log(firstTarget);
}


//this is calling the frame function every how ever many milliseconds

frame()
//this is what's "destroying the target"
// target.onclick = function destroy() {

// 	target.style.visibility = 'hidden';
// 	//the setTimeout is the function that makes the target reappear
// 	//every how ever many seconds.
// 	setTimeout(makeVisible, 1000);
// 	if (target.onclick=true) {
// 		score += 10;
// 	}
// 		var lblScore = document.getElementById('score_tracker');
// 		score_tracker.innerHTML=score;
// };

function addScore() {
	let oldTarget = document.getElementById("targetObject")
	oldTarget.parentNode.removeChild(oldTarget);
	score += 10;
	var lblScore = document.getElementById('score_tracker');
	score_tracker.innerHTML=score;
	frame();
}




//I am calling to the makeVisible function to make its 
//CSS style visible.  This part was confusing to me, but I get it 
//now.  I made the makeVisible function with the two arguments
//in the destroy function.  I need to call for it in another 
//function with what it is going to do.
function makeVisible(){
	target.style.visibility = "visible"
	console.log(target);
}








// function addScore() {
// 	if(target.onclick=true) {
//      	score += 10;
//      	var lblScore = document.getElementById('score_tracker');
// 		score_tracker.innerHTML=score;
//  	}
// };








// let score = document.getElementById("lblscore").value;
// function updatescore (value) {
// 	if(target.onclick = true) {
// 		score += 10;
// 	}

// };

// if (target.onclick=true){
// 	score += 10;
// }
// var lblScore = document.getElementById('lblScore');
// lblScore.innerHTML=score;



















































