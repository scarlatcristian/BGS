"use strict";

const btn = document.querySelector(".btn");
const btnBorder = document.querySelector(".rotate-container");
const text = document.querySelector(".text-about");
const title = document.querySelectorAll(".title");

document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
});

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

addClassInterval();

btn.addEventListener("click", () => {
  btn.classList.add("scale-down");
  btnBorder.classList.add("scale-down");
  setTimeout(() => {
    btnBorder.style.border = "none";
    btn.remove();
    btnBorder.remove();
  }, 400);

  setTimeout(() => {
    text.classList.add("transition");
  }, 500);
});

particlesJS.load("particles-js", "particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});
