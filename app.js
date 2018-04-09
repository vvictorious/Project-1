let background = document.getElementById("background_for_click");
let target= document.getElementById("target");


 background.onmouseover= function() {
 	this.style.cursor="crosshair";
}; 




background.onmouseover= function myMove(){
	 background.onmouseover= 
 	this.style.cursor="crosshair";
 	// var elem =document.getElementById("target");
	var pos = 0;
	var id = setInterval(frame, 10);
	function frame () {
		if (pos ==350) {
			clearInterval(id);
	} else {
		pos++;
		target.style.top = pos + 'px';
		target.style.left = pos + 'px';
	}
	}
}

//check out tween max




















