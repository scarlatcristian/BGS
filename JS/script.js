"use strict";

const btnStart = document.querySelector(".btn-start-animation");
const btnBorder = document.querySelector(".rotate-container");
const text = document.querySelector(".text-about");
const title = document.querySelectorAll(".title");
const particles = document.getElementById("particles-js");

const btnArrow = document.querySelector(".arrow");

let counter = 0;
let timer = 2000;
let intervalId;

const addClassInterval = () => {
  title.forEach((t) => {
    intervalId = setInterval(() => {
      if (counter >= 4) {
        clearInterval(intervalId);
        return;
      }
      t.classList.add("color-change");
      counter++;
    }, timer);
    timer += 1000;
  });
};

// After first btn click
btnStart.addEventListener("click", () => {
  // Initialize the particles
  particlesJS.load("particles-js", "particlesjs-config.json");
  particles.style.opacity = 1;

  btnStart.classList.add("scale-down");
  btnBorder.classList.add("scale-down");
  setTimeout(() => {
    btnBorder.style.border = "none";
    btnStart.remove();
    btnBorder.remove();
  }, 700);

  setTimeout(() => {
    text.classList.add("transition");

    addClassInterval();
  }, 700);
});
