// locomotive
// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".pro-main"),
//   smooth: true,
// });

// var circle = document.querySelector(".circle"); //let const var
// var page = document.querySelector(".point");
// const lerp = (x, y, a) => x * (1 - a) + y * a;

// dark mord themes
// var icon = document.getElementById("icon");

// loader function

var loader = gsap.timeline();

const scrollBtn = document.querySelector("#go-top");

loader
  .to(".fs", {
    height: "100%",
    duration: 2.5,
    ease: Expo.easeInOut,
  })
  .to(".elem", {
    height: "100%",
    duration: 2,
    delay: -2.3,
    esae: Expo.easeInOut,
  })
  .to(".ele", {
    height: "100%",
    duration: 2,
    delay: -2,
    esae: Expo.easeInOut,
  })
  .to(".el", {
    height: "100%",
    duration: 2,
    delay: -1.8,
    esae: Expo.easeInOut,
  })
  .to(".mainpage", {
    height: "100%",
    duration: 2,
    delay: -1.8,
    esae: Expo.easeInOut,
  });

/* Pre Loader */
//

//  circle function
// window.addEventListener("mousemove", function (dets) {
//   gsap.to(circle, {
//     x: dets.clientX,
//     y: dets.clientY,
//     // duration: .3,
//     // ease: Expo
//   });
// });

// page.addEventListener("mousemove", function (dets) {
//   var dims = page.getBoundingClientRect();
//   console.log(dims);

//   var xstart = dims.x;
//   var xend = dims.x + dims.width;

//   var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

//   gsap.to(circle, {
//     scale: 7,
//   });
//   gsap.to(".maintext h3 span", {
//     color: "#a607f6f8",
//     duration: 0.3,
//     // y: "-4vw"
//   });

//   gsap.to(".maintext h3 span", {
//     x: lerp(-50, 50, zeroone),
//     duration: 0.3,
//     // y: "-4vw"
//   });
// });

// page.addEventListener("mouseleave", function (dets) {
//   gsap.to(circle, {
//     scale: 1,
//   });
//   gsap.to(".maintext h3 span", {
//     color: "#f9cf8d",
//     duration: 0.3,
//     // y:0                                                                                                                                                                                                                                            0
//   });
//   gsap.to(".maintext h3 span", {
//     x: 0,
//     duration: 0.3,
//     // y: "-4vw"
//   });
// });

// document
//   .querySelector(".ftext button")
//   .addEventListener("mouseover", function () {
//     gsap.to(".future video", {
//       opacity: 1,
//       duration: 1,
//       // ease: power3
//     });
//   });

// document
//   .querySelector(".ftext button")
//   .addEventListener("mouseleave", function () {
//     gsap.to(".future video", {
//       opacity: 0,
//       duration: 1,
//       // ease: power3
//     });
//   });

var icon = document.getElementById("icon");
let heroImage = document.querySelector(".hero-pic img");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.style = "color: white";
    heroImage.src = "./assets/img/hero.jpg";
  } else {
    icon.style = "color: black";
    heroImage.src = "./assets/img/heroo.gif";
  }
};

// const scrollBtn = document.querySelector('#go-top');

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavir: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 800) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

const audio = document.getElementById("background-music");
const playPauseButton = document.getElementById("play-pause-button");
const playIcon = document.getElementById("play-music");
const pauseIcon = document.getElementById("pause-music");

let isPlaying = false;

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
  } else {
    audio.play();
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
  }
  isPlaying = !isPlaying;
}

// Add an event listener for when the music ends
audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  audio.play();
});

playPauseButton.addEventListener("click", togglePlayPause);
