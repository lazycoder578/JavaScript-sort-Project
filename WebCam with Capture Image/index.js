var video=document.getElementById("video");
var webcam=navigator.mediaDevices.getUserMedia();
if(webcam){
    navigator.mediaDevices.getUserMedia({
        video:true,
        audio:true
    })
    .then(function(Live){
        video.srcObject=Live;

    })
    .catch(function(error){
         console.log("error please try again")
    })
}
var canvas=document.getElementById("canvas");
var takePhoto=document.getElementById("takePhoto");
var context=canvas.getContext('2d');
takePhoto.addEventListener("click",function(){
    context.drawImage(video,0,0,700,700);
})