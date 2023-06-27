"use strict";

const body = document.querySelector("body");
const particles = document.getElementById("cursor-overlay");

const btnStart = document.querySelector(".btn-start-animation");
const logoBGS = document.querySelector(".logo-BGS");
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

// Hide logo when scrolling down, show when scrolling up
const hideLogo = () => {
  let lastScrollTop = 0;
  document.addEventListener(
    "scroll",
    function () {
      logoBGS.style.transition = "0.5s";
      // or window.addEventListener("scroll"....
      let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // down-scroll code
        logoBGS.classList.remove("fade-in");
      } else if (st < lastScrollTop) {
        // up-scroll code
        logoBGS.classList.add("fade-in");
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );
};

let timer = 350;

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Animate the title in about page
const addClassInterval = () => {
  title.forEach((titleSpan) => {
    let counter = 0;
    let intervalId = setInterval(() => {
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

setTimeout(() => {
  logoBGS.classList.add("fade-in");
}, 500);

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
const hideBtn = () => {
  // Calls function that hides logo on scroll
  hideLogo();

  // shows buttons with monitoring, security and shopping
  cards.forEach((card) => {
    card.classList.add("fade-out");
  });

  body.style.overflow = "hidden";
};

const ShowBtn = () => {
  cards.forEach((card) => {
    card.classList.remove("fade-out");
  });
};

btnFadeText.addEventListener("click", () => {
  text.classList.add("text-fade-out");

  ShowBtn();

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
});

// After Security Technical or Monitoring button
// SECURITY
btnSecurity.addEventListener("click", () => {
  hideBtn();

  body.style.overflowX = "hidden";
  body.style.overflowY = "visible";

  infoSecurity.style.transition = "all 1s ease";
  infoSecurity.classList.add("active");
});

// SHOPPING
bntShopping.addEventListener("click", () => {
  hideBtn();

  infoShopping.style.transition = "all 1s ease";
  infoShopping.classList.add("active");
});

// MONITORING
btnMonitoring.addEventListener("click", () => {
  hideBtn();

  infoMonitoring.style.transition = "all 1s ease";
  infoMonitoring.classList.add("active");
});

document.querySelectorAll(".btn-arrow-left").forEach((btn) => {
  btn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("fade-out");
    });

    body.style.overflow = "hidden";

    infoSecurity.classList.remove("active");
    infoShopping.classList.remove("active");
    infoMonitoring.classList.remove("active");

    if (!logoBGS.classList.contains("fade-in")) {
      logoBGS.classList.add("fade-in");
    }
  });
});

// going back to explore page when pressing the logo
logoBGS.addEventListener("click", () => {
  if (text.classList.contains("text-fade-out")) {
    text.classList.remove("text-fade-out");

    body.style.overflow = "hidden";

    hideBtn();

    if (infoSecurity.classList.contains("active")) {
      infoSecurity.classList.remove("active");
    }

    if (infoShopping.classList.contains("active")) {
      infoShopping.classList.remove("active");
    }

    if (infoMonitoring.classList.contains("active")) {
      infoMonitoring.classList.remove("active");
    }
  }
});

// Particles cursor
document.addEventListener("DOMContentLoaded", function () {
  const particleContainer = document.getElementById("cursor-overlay");

  // Generate a random number within a range
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // Create a new particle element with random velocities and append it to the container
  const createParticle = (x, y) => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.setProperty("--x", getRandomNumber(-50, 50) + "px");
    particle.style.setProperty("--y", getRandomNumber(-50, 50) + "px");
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particleContainer.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    }, 800);
  };

  // Create particles at the cursor position
  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    createParticle(x, y);
  });
});
