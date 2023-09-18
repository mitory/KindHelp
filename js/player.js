
const audioPlayer1 = document.querySelector(".about-method.audio-player.about-method-desctop");
const audioPlayer2 = document.querySelector(".about-videomedit.audio-player");
const audioPlayer3 = document.querySelector(".about-method.audio-player.about-method-mobile");


const audio1 = new Audio(
  "./src/audio/about_method.m4a"
);
const audio2 = new Audio(
  "./src/audio/about_videomedit.m4a"
);
const audio3 = new Audio(
  "./src/audio/about_method.m4a"
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

audio3.addEventListener(
  "loadeddata",
  () => {
    audio3.volume = .75;
  },
  false
);


const playBtn1 = audioPlayer1.querySelector(".about-method.toggle-play.about-method-desctop");
playBtn1.addEventListener(
  "click",
  () => {
    if (audio1.paused) {
      playBtn1.classList.add("play");
      playBtn1.classList.remove("pause");

      playBtn2.classList.add("pause");
      playBtn2.classList.remove("play");
      audio2.pause();

      playBtn3.classList.add("pause");
      playBtn3.classList.remove("play");
      audio3.pause();

      audio1.play();
    } else {
      playBtn1.classList.add("pause");
      playBtn1.classList.remove("play");
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
      playBtn2.classList.add("play");
      playBtn2.classList.remove("pause");

      playBtn1.classList.add("pause");
      playBtn1.classList.remove("play");
      audio1.pause();

      playBtn3.classList.add("pause");
      playBtn3.classList.remove("play");
      audio3.pause();

      audio2.play();
    } else {
      playBtn2.classList.add("pause");
      playBtn2.classList.remove("play");
      audio2.pause();
    }
  },
  false
);

const playBtn3 = audioPlayer3.querySelector(".about-method.toggle-play.about-method-mobile");
playBtn3.addEventListener(
  "click",
  () => {
    if (audio3.paused) {
      playBtn3.classList.add("play");
      playBtn3.classList.remove("pause");

      playBtn2.classList.add("pause");
      playBtn2.classList.remove("play");
      audio2.pause();

      playBtn1.classList.add("pause");
      playBtn1.classList.remove("play");
      audio1.pause();

      audio3.play();
    } else {
      playBtn3.classList.add("pause");
      playBtn3.classList.remove("play");
      audio3.pause();
    }
  },
  false
);


const video = document.querySelector('.video');
const video_btn = document.querySelector('.play_video__btn')
const video_btn__wrapper = document.querySelector('.play_video')

video_btn.onclick = function() {
  video.play();
  video.controls = true;
  video_btn__wrapper.classList.add('hide');
}

video.onclick = function() {
  if(!video.paused) {
    video.pause();
    video_btn__wrapper.classList.remove('hide');
    video.controls = false;
  }
}

video.addEventListener('ended', videoHandler, false);

function videoHandler() {
  video_btn__wrapper.classList.remove('hide');
  video.controls = false;
}
