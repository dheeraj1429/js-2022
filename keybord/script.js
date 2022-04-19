"use strict";

const key = document.querySelectorAll(".key");
const audio = document.querySelector("audio");

// for styling the string
const str = (str) => str[0].toUpperCase() + str.slice(1);

const sound = "./key.mp3";

audio.src = sound;

// remove styling with grab element
const removeElmStyle = function () {
  key.forEach((item) => {
    item.style.border = "2px solid #000";
  });
};

window.addEventListener("keydown", (e) => {
  // get the window keys
  const key = str(e.key);
  removeElmStyle();

  // Grab the element from the dom
  const tag = document.getElementById(`tab-${key}`);
  tag.style.border = "1px solid #eeeeee";
  audio.play();
});
