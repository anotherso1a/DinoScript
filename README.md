# dino自动跳跃脚本

## 更新说明

DinoScript这个文件是以前在windows电脑上尝试的，Chrome也经历过数次更新，现在也在用mac，发现以前的代码在mac不管用了。

于是整了新活，翻了下Dino的源码，依据源码写了个直接起飞

### 直接起飞使用说明：

1. 地址栏输入 chrome://dino

2. 打开控制台

3. 复制粘贴以下内容

```js
// 直接起飞
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
```

4. 使用 up 或者 down 方向键控制小恐龙上下位置

5. 起飞！

--------------

### 以下是原readme：


1、打开Chrome

2、地址栏输入 chrome://dino

3、回车

4、全选复制DenoScript中的内容

5、调到浏览器，按F12

6、在控制台粘贴复制的代码，回车

7、按空格或上方向键启动游戏

8、看着……

附上教程链接：

https://www.zhihu.com/question/275611095/answer/482027676
