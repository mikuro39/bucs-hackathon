var rizzbutton = document.querySelector('.rizzbutton')
var rizzmsg = document.querySelector('.message');
var rizzsong = new Audio("rizzsong.mp3");

rizzbutton.addEventListener("click", function(){
    if (rizzsong.paused){
        document.body.style.backgroundImage = "url('gigachad.png')";

        rizzsong.currentTime = 0;
        rizzsong.play();
        rizzmsg.classList.toggle('reveal');
    }else{
        rizzsong.pause();
        document.body.style.backgroundImage='none';
    }
});

rizzbutton.addEventListener("click", function(){

});
