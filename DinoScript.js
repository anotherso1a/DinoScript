var canvas = document.getElementsByClassName('runner-canvas')[0]
var ctx = canvas.getContext('2d')
var flag = true//跳跃与下降单步执行的flag

//定义三个键盘事件，上方向键、下方向键按下、下方向键抬起
var s = document.createEvent('UIEvents')
s.initUIEvent('keydown',true,true,window,0)
s.keyCode=38
var d = document.createEvent('UIEvents')
d.initUIEvent('keydown',true,true,window,0)
d.keyCode=40
var u = document.createEvent('UIEvents')
u.initUIEvent('keyup',true,true,window,0)
u.keyCode=40

//使用两个程序对恐龙的行为进行处理
var change = new Date().getTime()+70000
var now//现在时间
//第一阶段的恐龙行为
var scp = setInterval(function(){
    if(Math.max.apply(null,ctx.getImageData(110,112,50,1).data)>0){
        document.dispatchEvent(s)
    }else if(Math.max.apply(null,ctx.getImageData(110,90,50,1).data)>0){
        document.dispatchEvent(s)
    }
},5)
//设置定时器，用于清空第一阶段行为，重新定义第二阶段行为
var timer = setInterval(function(){
	now = new Date().getTime()
	if(now>change){
		clearInterval(scp)//清除第一阶段行为
		var sec = setInterval(function(){//开始第二阶段行为
		    if(Math.max.apply(null,ctx.getImageData(100,112,30,1).data)>0){
			if(flag){
			    flag=false
			    document.dispatchEvent(s)
			    setTimeout(function(){
				if(!flag){
				    flag=true
				    document.dispatchEvent(d)
				    setTimeout(function(){document.dispatchEvent(u)},110)
				}
			    },200)
			}
		    }else if(Math.max.apply(null,ctx.getImageData(100,90,30,1).data)>0){
			if(flag){
			    flag=false
			    document.dispatchEvent(s)
			    setTimeout(function(){
				if(!flag){
				    flag=true
				    document.dispatchEvent(d)
				    setTimeout(function(){document.dispatchEvent(u)},110)
				}
			    },200)
			}
		    }
		},5)
		clearInterval(timer)//清除定时器
	}
},500)
