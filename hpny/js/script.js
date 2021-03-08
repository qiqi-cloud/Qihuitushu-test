window.onload = function(){
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    var music = document.getElementById('music');
    var shouba = document.getElementById('shouba');
    var audio = document.getElementsByTagName('audio')[0];
    //音乐播放停止，自动停止光盘旋转(添加监听事件)
    audio.addEventListener("enden",function(event){
        music.setAttribute("class","");
        shouba.setAttribute("class","shouba");
    },false)
    //点击音乐图标，控制音乐播放(PC端点击事件)
    // music.onclick = function(){
    //     if(audio.paused){
    //         audio.play();
    //         this.setAttribute("class","play");
    //         // this.style.animationPlayState = "running";
    //         // this.style.webkitanimationPlayState = "running";

    //     }else{
    //         audio.pause();    
    //         this.setAttribute("class","");                    //js方法
    //         // this.style.animationPlayState = "paused";        //css方法
    //         // this.style.webkitanimationPlayState = "paused"; //兼容ios

    //     }
    // }
    //点击音乐图标，控制音乐播放(手机端触摸事件)
    music.addEventListener("touchstart",function(event){
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
            shouba.setAttribute("class","");
            // this.style.animationPlayState = "running";
            // this.style.webkitanimationPlayState = "running";

        }else{
            audio.pause();    
            this.setAttribute("class","");
            shouba.setAttribute("class","shouba");    //js方法
            // this.style.animationPlayState = "paused";    //css方法
            // this.style.webkitanimationPlayState = "paused"; //兼容ios

        }
    },false)
    //点击屏幕，开启2016好运(手机端触摸事件)
    page1.addEventListener("touchstart",function(event){
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top     = "100%";
        setTimeout(function(){
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn");
        },5500)
    },false)
}