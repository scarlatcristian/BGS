"use strict";
const particles = document.getElementById("particles-js");

const btnStart = document.querySelector(".btn-start-animation");
const btnBorder = document.querySelector(".rotate-container");

const text = document.querySelector(".text-about");
const title = document.querySelectorAll(".title");
const btnArrow = document.querySelector(".btn-arrow");

const cards = document.querySelectorAll(".card");
const bntShopping = document.querySelector(".bnt-shopping");
const btnSecurity = document.querySelector(".bnt-security");
const btnMonitoring = document.querySelector(".bnt-monitoring");

const infoShopping = document.querySelector(".info-shopping");
const infoSecurity = document.querySelector(".info-security");
const infoMonitoring = document.querySelector(".info-monitoring");

let counter = 0;
let timer = 700;
let intervalId;

const addClassInterval = () => {
  title.forEach((t) => {
    intervalId = setInterval(() => {
      if (counter >= 5) {
        clearInterval(intervalId);
        return;
      }
      t.classList.add("color-change");
      counter++;
    }, timer);
    timer += 700;
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

// After arrow btn click
btnArrow.addEventListener("click", () => {
  text.style.transform = "translateY(-25rem)";
  text.style.opacity = "0";

  let counterCard = 0;

  let cardInterval = setInterval(() => {
    if (counterCard >= cards.length) {
      clearInterval(cardInterval);
    } else {
      const card = cards[counterCard];

      card.style.visibility = "visible";
      card.style.transform = "translateX(0)";
      card.style.opacity = "1";

      counterCard++;
    }
  }, 300);

  setTimeout(() => {
    text.remove();
  }, 2000);
});

// After Technical and online shop button

const hideBtn = () => {
  cards.forEach((card) => {
    card.style.transform = "TranslateX(-20rem)";
    card.style.opacity = "0";
    card.style.visibility = "hidden";
  });
};

bntShopping.addEventListener("click", () => {
  hideBtn();

  infoShopping.style.transform = "translateX(0)";
  infoShopping.style.opacity = "1";
  infoShopping.style.visibility = "visible";
});

btnMonitoring.addEventListener("click", () => {
  hideBtn();

  infoShopping.style.transform = "translateX(0)";
  infoShopping.style.opacity = "1";
  infoShopping.style.visibility = "visible";
});

btnSecurity.addEventListener("click", () => {
  hideBtn();

  infoShopping.style.transform = "translateX(0)";
  infoShopping.style.opacity = "1";
  infoShopping.style.visibility = "visible";
});
