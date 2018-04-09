let background = document.getElementById("background_for_click");
let target= document.getElementById("target");




background.onmouseover= function myMove(){
	 background.onmouseover= 
 	this.style.cursor="crosshair";
 	// var elem =document.getElementById("target");
	var pos = 1000 * Math.random();
	// Math.random(pos)
	var id = setInterval(frame, 1000);
	function frame () {
		if (pos ==350) {
			clearInterval(id);
	} else {
		pos++;
		target.style.top = Math.round(Math.random() * pos) + 'px';
		target.style.left = Math.round(Math.random() * pos) + 'px';
	}
	}
}

target.onclick = function destroy() {
	target.parentNode.removeChild(target);
};






// function Init(){
// 	spaceW = screen.height - picture.height;
// 	spaceH = screen.width - picture.width;

// 	setInterval(moveIt, 500);
// }
// function moveIt() {
// 	picture.style.top = Math.round(Math.random() * spaceW) + 'px';
// 	picture.style.left = Math.round(Math.random() * spaceH) + 'px';
// }
























