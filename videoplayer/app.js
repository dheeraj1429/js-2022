'use strict';

// Dom Elem
const playButton = document.querySelector('.playButton');
const video = document.querySelector('.video');
const progressBar = document.querySelector('.progress_bar');
const progress = document.querySelector('.progress');
const totalTime = document.querySelector('.total_time');
const currentTimeDiv = document.querySelector('.current_time');
const soundBar = document.querySelector('.sound_bar');
const soundBarInner = document.querySelector('.sound-bar-inner');
const soundButton = document.querySelector('.soundButton');
const videoPlayBackOptions = document.querySelector('.Select_Option');

// Play And Pause function
let isPlay = false;

// Mute and unMute
let isMuted = false;

// keep traking teh volume values
let volumeTargetVaueStore;

// Show video pause and pause
const showPlay = function () {
  playButton.classList.replace('fa-pause', 'fa-play');
  playButton.title = 'play';
  isPlay = false;
  video.pause();
};

const toggleButton = function () {
  if (!isPlay) {
    isPlay = true;
    playButton.classList.replace('fa-play', 'fa-pause');
    video.play();
    playButton.title = 'pause';
  } else {
    showPlay();
  }
};

// show to duraction into the dom
const showDuractionFuntion = function (duration) {
  const minute = Math.floor(duration / 60);
  const second = Math.floor(duration % 60);
  if (second < 10) {
    return `${minute}:0${second}`;
  } else {
    return `${minute}:${second}`;
  }
};

// update time function ( time and progress bar  )
const updateTimeFunction = function (e) {
  const currentTime = video.currentTime;
  const duration = video.duration;
  const widthValue = (currentTime / duration) * 100;

  // change the time and total duration
  totalTime.textContent = showDuractionFuntion(duration);
  currentTimeDiv.textContent = `${showDuractionFuntion(currentTime)} / `;

  // if current time and duration in equl then pause the video and change the button style
  if (currentTime === duration) {
    showPlay();
  }

  // change the progress bar width
  progress.style.width = `${widthValue}%`;
};

// Change the progress bar
const setProgressBar = function (e) {
  const { offsetX } = e;
  const { offsetWidth } = e.srcElement;
  const progressBarClickValue = (offsetX / offsetWidth) * 100;
  // change the progress bar width
  progress.style.width = `${progressBarClickValue}%`;
  const time = (offsetX / offsetWidth) * video.duration;
  video.currentTime = time;
};

// Sound bar funtion
const setShowBarFunction = function (e) {
  const targetValue = e.offsetX;
  const totalValue = e.srcElement.offsetWidth;
  const volumeValue = targetValue / totalValue;

  // set the sound bar style
  const soundBarValue = (targetValue / totalValue) * 100;
  soundBarInner.style.width = `${soundBarValue}%`;
  // chagne the video volume
  video.volume = volumeValue;
  volumeTargetVaueStore = volumeValue;
};

const muteAndUnMute = function () {
  // fa-volume-mute
  if (isMuted == false) {
    isMuted = true;
    soundButton.classList.replace('fa-volume-up', 'fa-volume-mute');
    video.volume = 0;
    soundBarInner.style.width = '0%';
  } else {
    isMuted = false;
    soundButton.classList.replace('fa-volume-mute', 'fa-volume-up');
    // change the video volume
    video.volume = volumeTargetVaueStore;
    // update the volume style
    soundBarInner.style.width = `${volumeTargetVaueStore * 100}%`;
  }
};

// Changin video speed
const changeVideoSpeed = function () {
  video.playbackRate = this.value;
};

// events
video.addEventListener('click', toggleButton);
// Play and pause button event
playButton.addEventListener('click', toggleButton);
// video event
video.addEventListener('timeupdate', updateTimeFunction);
// Progress bar event
progressBar.addEventListener('click', setProgressBar);
// Volume Button
soundBar.addEventListener('click', setShowBarFunction);
// sound button
soundButton.addEventListener('click', muteAndUnMute);
// Video Speed changin
videoPlayBackOptions.addEventListener('change', changeVideoSpeed);
