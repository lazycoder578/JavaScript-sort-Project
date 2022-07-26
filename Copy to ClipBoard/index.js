//copy section start here

var copyText=document.getElementById("copyText");
var copyBTN=document.getElementById("copyBTN")

copyBTN.addEventListener("click",function(){
    navigator.clipboard.writeText(copyText.value)
    // alert("Copy success");
})

//copy section end here 


//copy section start here

var cut=document.getElementById("cut");
var cutBTN=document.getElementById("cutBTN");

cutBTN.addEventListener("click",function(){
    navigator.clipboard.writeText(cut.value)
    // alert("Cut success");
    cut.value=" ";
})

//copy section end here 


//copy section start here

var past=document.getElementById("past");
var pastBTN=document.getElementById("pastBTN");

pastBTN.addEventListener("click",function(){
    past.value=" ";
    navigator.clipboard.readText()
    .then(function(text){
        past.value=text;
        // alert="Past successfully";
    })
})

//copy section end here 