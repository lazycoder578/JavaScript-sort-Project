var submit = document.getElementById("submit");

submit.addEventListener("click",function(){
    var q1=document.getElementById("q1").checked;
    var q2=document.getElementById("q2").checked;
    var q3=document.getElementById("q3").checked;
    var q4=document.getElementById("q4").checked;
    var q5=document.getElementById("q5").checked;

    var count=0;
    if(q1){
        count++;
    }

    if(q2){
        count++;
    }

    if(q3){
        count++;
    }

    if(q4){
        count++;
    }

    if(q5){
        count++;
    }
    alert('Your result is ' +count);
})