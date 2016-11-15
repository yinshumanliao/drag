function drag(id){
	var disx = 0;
	var disy = 0;
	var obj = document.getElementById(id);
	obj.onmousedown = function(ev){
		disx = ev.pageX - obj.offsetLeft;
		disx = ev.pageY - obj.offsetTop;
		document.onmousemove = function(ev){
			obj.style.left = ev.pageX - disx + 'px';
			obj.style.top = ev.pageY - disy + 'px';
		}
	}
}
