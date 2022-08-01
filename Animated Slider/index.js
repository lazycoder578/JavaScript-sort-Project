var Image=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.webp'];
var my_img=document.getElementById("MyImg");
var count=-1;

function MyImg_change(){
    count++;
    if(count>=Image.length){
        count=0;
        my_img.src=Image[count];

    }
    else{
        my_img.src=Image[count];
    }
    setTimeout("MyImg_change()",1000);
}
window.onload=MyImg_change();
