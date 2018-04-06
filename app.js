let background = document.getElementById("background_for_click");


background.onmouseover= function() {
	this.style.cursor="crosshair";
};

background.onclick = function() {
	// console.log('ya did it!');
	document.getElementById("explosion").style.display = "block";
}


// function shoot_animation(){
// let shots_fired = document.getElementById("animation_for_click")
// let pos = 0;
// let id =setInterval(frame, 10);
// 	function frame() {
// 		background.addEventListener("")
// 		if (background.)
// 	}
// }



// background.addEventListener("click", )