var hexanumber=document.getElementById("hexaNumber");
var color=document.getElementById("color");

color.addEventListener('input',function(){

    var inputColor=color.value;
    hexanumber.value=inputColor;
    document.getElementById("learn").style.color=inputColor;
    // document.body.style.backgroundColor=inputColor;
})