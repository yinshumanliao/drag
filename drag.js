function drag(id){
	var disx = 0;
	var disy = 0;
	var obj = document.getElementById(id);
	obj.onmousedown = function(ev){
		disx = ev.pagex - obj.offsetLeft;
		disx = ev.pagex - obj.offsetTop;
	}
}
