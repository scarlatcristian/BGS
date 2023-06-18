"use strict";
const particles = document.getElementById("particles-js");

const btnStart = document.querySelector(".btn-start-animation");
const btnBorder = document.querySelector(".rotate-container");
const video = document.getElementById("video");
const videoLoop = document.getElementById("video-loop");

const text = document.querySelector(".text-about");
const title = document.querySelectorAll(".title");
const btnArrowUp = document.querySelector(".btn-arrow-up");

const cards = document.querySelectorAll(".card");
const bntShopping = document.querySelector(".btn-shopping");
const btnSecurity = document.querySelector(".btn-security");
const btnMonitoring = document.querySelector(".btn-monitoring");

const infoSecurity = document.querySelector(".info-security");
const infoShopping = document.querySelector(".info-shopping");
const infoMonitoring = document.querySelector(".info-monitoring");

let counter = 0;
let timer = 700;
let intervalId;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const addClassInterval = () => {
  title.forEach((t) => {
    intervalId = setInterval(() => {
      if (counter >= 5) {
        clearInterval(intervalId);
        return;
      }
      t.style.transition = "all 0.5s ease";
      t.classList.add("color-change");
      counter++;
    }, timer);
    timer += 700;
  });
};

// After first btn click
btnStart.addEventListener("click", () => {
  setTimeout(() => {
    particles.style.opacity = 1;
  }, 600);

  video.style.visibility = "visible";
  video.play();

  if (isMobile) {
    video.setAttribute("autoplay", "autoplay");
    video.setAttribute("playsinline", "playsinline");
    video.setAttribute("muted", "muted");

    videoLoop.setAttribute("autoplay", "autoplay");
    videoLoop.setAttribute("playsinline", "playsinline");
    videoLoop.setAttribute("muted", "muted");

    video.style.visibility = "visible";
    video.play();

    setTimeout(() => {
      document.querySelector(".bg-video-loop").style.visibility = "visible";
      videoLoop.style.visibility = "visible";
      videoLoop.play();
      document.querySelector(".bg-video-loop").style.opacity = "0.6";
    }, 1890);
  } else {
    video.style.visibility = "visible";
    video.play();

    setTimeout(() => {
      document.querySelector(".bg-video-loop").style.visibility = "visible";
      videoLoop.play();
      document.querySelector(".bg-video-loop").style.opacity = "0.6";
    }, 1300);
  }

  btnStart.classList.add("scale-down");
  btnBorder.classList.add("scale-down");

  setTimeout(() => {
    btnBorder.style.border = "none";
    btnStart.remove();
    btnBorder.remove();
  }, 700);

  setTimeout(() => {
    text.style.transition = "all 1s ease";
    text.style.visibility = "visible";
    text.classList.add("transition");

    addClassInterval();
  }, 700);
});

// After arrow btn click
btnArrowUp.addEventListener("click", () => {
  text.style.transform = "translateY(-25rem)";
  text.style.opacity = "0";

  let counterCard = 0;

  let cardInterval = setInterval(() => {
    if (counterCard >= cards.length) {
      clearInterval(cardInterval);
    } else {
      const card = cards[counterCard];

      card.style.transition = "all 1s ease";
      card.style.transitionDelay = "0.3s";
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

if (btnSecurity !== null) {
  btnSecurity.addEventListener("click", () => {
    hideBtn();

    infoSecurity.style.transition = "all 2s ease";
    infoSecurity.classList.add("active");
  });
}

if (bntShopping !== null) {
  bntShopping.addEventListener("click", () => {
    hideBtn();
    infoShopping.style.transition = "all 2s ease";
    infoShopping.classList.add("active");
  });
}

if (btnMonitoring !== null) {
  btnMonitoring.addEventListener("click", () => {
    hideBtn();
    infoMonitoring.style.transition = "all 2s ease";
    infoMonitoring.classList.add("active");
  });
}

document.querySelectorAll(".btn-arrow-right").forEach((btn) =>
  btn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.style.transform = "TranslateX(0)";
      card.style.opacity = "1";
      card.style.visibility = "visible";
    });

    infoSecurity.classList.remove("active");
    infoShopping.classList.remove("active");
    infoMonitoring.classList.remove("active");
  })
);
