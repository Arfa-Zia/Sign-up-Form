
const button = document.querySelector("#audio-button");
const icon = document.querySelector("#audio-button > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});