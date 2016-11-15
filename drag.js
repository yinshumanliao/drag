function drag(id){
	var disX = 0;
	var disY = 0;
	var obj = document.getElementById(id);
	obj.onmousedown = function(ev){
		disX = ev.pageX - obj.offsetLeft;
		disY = ev.pageY - obj.offsetTop;
	}
}
