function lightBtn(match){
    var pic;
    for(var i=1;i<=5;i++){
        if(match==0){
        pic="bulboff.jpg";
    }
    else{
        pic="bulbone.jpg";
    }
    var light = document.getElementById('light'+(i));
    light.src=pic;
}
}