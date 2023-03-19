var rizzbutton = document.querySelector('.rizzbutton')
var rizzmsg = document.querySelector('#message');
var rizzsong = new Audio("rizzsong.mp3");

const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
const pauseInput = document.getElementById('pause-button')
const stopInput = document.getElementById('stop-button')
const playButton = document.getElementById('play-button')

rizzbutton.addEventListener("click", function () {
    if (rizzsong.paused) {
        document.body.style.backgroundImage = "url('gigachad.png')";
        rizzsong.currentTime = 0;
        rizzsong.volume = 0.20;
        rizzsong.play();
        playText(textInput.value);
        rizzmsg.classList.toggle('reveal');
    } else {
        rizzsong.pause();
        document.body.style.backgroundImage = 'none';
        rizzmsg.classList.toggle('reveal');
    }
});

rizzbutton.addEventListener("click", function () {

});

/*
rizzbutton.addEventListener('click', () =>{
   
})
*/

function playText(text) {
    const utterance = new SpeechSynthesisUtterance('Hey Troy, are you 5 cans of Monster? Because you make me shake uncontrollably and keep me up all night.')
    speechSynthesis.speak(utterance);
}
