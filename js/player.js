
const audioPlayer1 = document.querySelector(".about-method.audio-player");
const audioPlayer2 = document.querySelector(".about-videomedit.audio-player");

const audio1 = new Audio(
  "./src/audio/about_method.m4a"
);
const audio2 = new Audio(
  "./src/audio/about_videomedit.m4a"
);


audio1.addEventListener(
  "loadeddata",
  () => {
    audio1.volume = .75;
  },
  false
);

audio2.addEventListener(
  "loadeddata",
  () => {
    audio2.volume = .75;
  },
  false
);


const playBtn1 = audioPlayer1.querySelector(".about-method.toggle-play");
playBtn1.addEventListener(
  "click",
  () => {
    if (audio1.paused) {
      playBtn1.classList.remove("play");
      playBtn1.classList.add("pause");

      playBtn2.classList.remove("pause");
      playBtn2.classList.add("play");
      audio2.pause();

      audio1.play();
    } else {
      playBtn1.classList.remove("pause");
      playBtn1.classList.add("play");
      audio1.pause();
    }
  },
  false
);

const playBtn2 = audioPlayer2.querySelector(".about-videomedit.toggle-play");
playBtn2.addEventListener(
  "click",
  () => {
    if (audio2.paused) {
      playBtn2.classList.remove("play");
      playBtn2.classList.add("pause");

      playBtn1.classList.remove("pause");
      playBtn1.classList.add("play");
      audio1.pause();

      audio2.play();
    } else {
      playBtn2.classList.remove("pause");
      playBtn2.classList.add("play");
      audio2.pause();
    }
  },
  false
);