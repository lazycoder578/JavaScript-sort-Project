var title=document.querySelector("h1");
var text="Learn with Md. Abdul Kader"

var index=0;

setInterval(fun,100);
function fun(){
        title.innerHTML=text.slice(0,index++);
        if(index>text.length){
                index=0;
        }
}