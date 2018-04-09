let background = document.getElementById("background_for_click");
let target= document.getElementById("target");



		
background.onmouseover= function myMove(){
	this.style.cursor="crosshair";
 }

function frame () {
	//this is getting called every 1000 milliseconds
	var random_margin_top = 670 * Math.random();
	var random_margin_left = 670 * Math.random();
	//not entirely sure what clear Interval means
	target.style.marginTop =  random_margin_top + 'px';
	target.style.marginLeft = random_margin_left + 'px';
}

setInterval(frame, 1000);
target.onclick = function destroy() {
	target.parentNode.removeChild(target);
};


// id
//maybe make x and y variables with the math.floor/math.random methods
//make a variable that acknowledges distance from the center of the background
//

//margin






//this is the start to the timer

// let count = 0
// let intId = setInterval(counter, 1000);

// function counter(){
// 	console.log(++count);

// }

















// function Init(){
// 	spaceW = screen.height - picture.height;
// 	spaceH = screen.width - picture.width;

// 	setInterval(moveIt, 500);
// }
// function moveIt() {
// 	picture.style.top = Math.round(Math.random() * spaceW) + 'px';
// 	picture.style.left = Math.round(Math.random() * spaceH) + 'px';
// }


//deploy the game on surge or github pages























