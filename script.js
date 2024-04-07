const btn=document.querySelector(".btn");
function soundPlay(){
	let audio=document.getElementById("audio")
	audio.src= "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
	audio.play();
	if(audio){
		stop.addEventListener("click",()=>{
			audio.pause();
		});
	}
}
btn.addEventListener("click",soundPlay);
const stop=document.querySelector(".stop");


