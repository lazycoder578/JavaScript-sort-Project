var carimg=document.getElementById("carimg");
var carstart;
var startBtn=document.getElementById("startBtn");
var stopBtn=document.getElementById("stopBtn");


var m=0;
startBtn.addEventListener("click",function(){
    carstart=setInterval(run,100);

    function run(){
        if(m==1300){
            clearInterval(carstart);
            m=0;
        }
        else{
            m+=10;
            carimg.style.marginLeft=m+'px';
        }
    }
  
})
stopBtn.addEventListener("click",function(){
    clearInterval(carstart);
})
