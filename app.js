let background = document.getElementById("background_for_click");
let target= document.getElementById("target");



//this is my function that turns my mouse into a crosshair		
background.onmouseover= function myMove(){
	this.style.cursor="crosshair";
 }


//this is the function that makes the target move 
function frame() {
	
	//by play area is 700 by 700 pixels
	//thereore, these variables make the dimensions for 
	//the targets to move around randomly in
	var random_margin_top = 670 * Math.random();
	var random_margin_left = 670 * Math.random();
	//these 2 lines assigning the dimensions to the CSS
	//and adding pixels so that it will actually work.
	target.style.marginTop =  random_margin_top + 'px';
	target.style.marginLeft = random_margin_left + 'px';
}


//this is calling the frame function every 1000 milliseconds
setInterval(frame, 900);

//this is what's "destroying the target"
target.onclick = function destroy() {
	target.style.visibility = 'hidden';
	setTimeout(makeVisible, 1000);
};

function makeVisible(){
	target.style.visibility = "visible"
}






// function respawn(){
// 	setTimeout(target.style.visibility = 'block', 1000);
// };


















// setTimeout(respawn, 3000){
// 	target.style.display = 'block';
// };




// target.onclick = function destroy() {
// 	target.parentNode.removeChild(target);
// };










































