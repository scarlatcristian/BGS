"use strict";
const particles = document.getElementById("cursor-overlay");

const btnStart = document.querySelector(".btn-start-animation");
const btnBorder = document.querySelector(".rotate-container");
const video = document.getElementById("video");
const videoLoop = document.getElementById("video-loop");

const text = document.querySelector(".text-about");
const title = document.querySelectorAll(".title");
const btnFadeText = document.querySelector(".btn__text-about");

const cards = document.querySelectorAll(".card");
const bntShopping = document.querySelector(".btn-shopping");
const btnSecurity = document.querySelector(".btn-security");
const btnMonitoring = document.querySelector(".btn-monitoring");

const infoSecurity = document.querySelector(".info-security");
const infoShopping = document.querySelector(".info-shopping");
const infoMonitoring = document.querySelector(".info-monitoring");

let timer = 350;
let intervalId;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Animate the span elements in title
const addClassInterval = () => {
  title.forEach((titleSpan) => {
    let counter = 0;
    intervalId = setInterval(() => {
      if (counter >= title.length) {
        clearInterval(intervalId);
        return;
      }
      titleSpan.style.transition = "all 0.5s ease";
      titleSpan.classList.add("color-change");
      counter++;
    }, timer);
    timer += 350;
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
    text.classList.remove("text-invisible");

    addClassInterval();
  }, 700);
});

// After text arrow-right btn click
btnFadeText.addEventListener("click", () => {
  text.classList.add("text-fade-out");

  let counterCard = 0;

  let cardInterval = setInterval(() => {
    if (counterCard >= cards.length) {
      clearInterval(cardInterval);
    } else {
      const card = cards[counterCard];

      card.style.transitionDelay = "0.2s";
      card.style.transition = "all 1s ease";
      card.classList.remove("card-invisible");

      counterCard++;
    }
  }, 300);

  setTimeout(() => {
    text.remove();
  }, 2000);
});

// After Security Technical or Monitoring button
const hideBtn = () => {
  cards.forEach((card) => {
    card.classList.add("fade-out");
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
      card.classList.remove("fade-out");
    });

    infoSecurity.classList.remove("active");
    infoShopping.classList.remove("active");
    infoMonitoring.classList.remove("active");
  })
);
