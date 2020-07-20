// 新活，直接起飞
Trex.prototype.__up = function(){
    this.yPos -= 10
}
Trex.prototype.__down = function(){
    this.yPos += 10
}
document.addEventListener('keydown',e=>{
    if(Runner.keycodes.JUMP[e.keyCode]){
        Runner.instance_.tRex.__up()
    }
    if(Runner.keycodes.DUCK[e.keyCode]){
        Runner.instance_.tRex.__down()
    }
})
oj = Trex.prototype.startJump.bind(Runner.instance_.tRex)
Trex.prototype.startJump = function(speed){
    oj(speed)
    setTimeout(()=>{
        Trex.prototype.startJump = () => {}
    },1000)
}
