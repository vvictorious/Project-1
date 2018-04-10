

let background = document.getElementById("background_for_click");
let target= document.getElementById("target");
let score = document.getElementById("score");  //when I add.value; the target stops moving








//this is my function that turns my mouse into a crosshair		
background.onmouseover= function myMove(){
	this.style.cursor="crosshair";
 }


//this is the function that makes the target move
//called frame 
function frame() {
	
	//my play area is 700 by 700 pixels
	//thereore, these variables make the dimensions for 
	//the targets to move around randomly in
	var random_margin_top = 650 * Math.random();
	var random_margin_left = 650 * Math.random();
	//these 2 lines assigning the dimensions to the CSS
	//and adding pixels so that it will actually work.
	target.style.marginTop =  random_margin_top + 'px';
	target.style.marginLeft = random_margin_left + 'px';
}


//this is calling the frame function every how ever many milliseconds
setInterval(frame, 2000);

//this is what's "destroying the target"
target.onclick = function destroy() {
	target.style.visibility = 'hidden';
	//the setTimeout is the function that makes the target reappear
	//every how ever many seconds.
	setTimeout(makeVisible, 1000);
	if (target.onclick=true) {
		score += 10;
	}
		var lblScore = document.getElementById('score_tracker');
		score_tracker.innerHTML=score;
	

};

//I am calling to the makeVisible function to make its 
//CSS style visible.  This part was confusing to me, but I get it 
//now.  I made the makeVisible function with the two arguments
//in the destroy function.  I need to call for it in another 
//function with what it is going to do.
function makeVisible(){
	target.style.visibility = "visible"
}







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



















































