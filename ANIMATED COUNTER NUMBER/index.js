// for project

var count=0;
var project=setInterval(project,10);

function project(){
    count++;
    var num1=document.getElementById("num1").innerHTML=count;
    if(count==200)
    {
        clearInterval(project);
    }
}

// for client

var count1=0;
var client=setInterval(client,10);

function client(){
    count1++;
    var num2=document.getElementById("num2").innerHTML=count1;
    if(count1==300)
    {
        clearInterval(client);
    }
}

// total Achive

var count2=0;
var achive=setInterval(achive,10);

function achive(){
    count2++;
    var num3=document.getElementById("num3").innerHTML=count2;
    if(count2==400)
    {
        clearInterval(achive);
    }
}