var canvas = document.getElementsByClassName('runner-canvas')[0]
var ctx = canvas.getContext('2d')
var s = document.createEvent('UIEvents')
s.initUIEvent('keydown',true,true,window,0)
s.keyCode=38
var scp = setInterval(function(){
	if(Math.max.apply(null,ctx.getImageData(110,112,40,1).data)>0){
		document.dispatchEvent(s)
	}else if(Math.max.apply(null,ctx.getImageData(110,90,40,1).data)>0){
		document.dispatchEvent(s)
	}
},5)