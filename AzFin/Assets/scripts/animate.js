// get the element to animate
var element = document.querySelector(".why-choose-head-flex");
var wheelEl = document.querySelectorAll(".wheel");
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener("scroll", animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
    // element is in view, add class to element
    element.classList.add("animate");
    wheelEl.forEach((wheel) => {
      wheel.classList.add("animate-rotate");
    });
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const typesEl = document.querySelectorAll(".cargo-expertise-box");
const overlayEl = document.querySelector(".overlay");
const modalEl = document.querySelector(".modal");
const crossEl = document.querySelector(".cross");
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

// typesEl.forEach((each) => {
//   each.addEventListener("click", function (e) {
//     e.preventDefault();
//     overlayEl.classList.remove("hidden");
//     modalEl.classList.remove("hidden");
//     disableScroll();
//   });
// });

// overlayEl.addEventListener("click", function (e) {
//   overlayEl.classList.add("hidden");
//   modalEl.classList.add("hidden");
//   enableScroll();
// });

// crossEl.addEventListener("click", function (e) {
//   overlayEl.classList.add("hidden");
//   modalEl.classList.add("hidden");
//   enableScroll();
// });

// window.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     overlayEl.classList.add("hidden");
//     modalEl.classList.add("hidden");
//     enableScroll();
//   }
// });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".header-menu");
const mobileDiv = document.querySelector(".mobile-back-div");
const mobileSec = document.querySelector(".mobile-nav");
const links = document.querySelectorAll(".mobile-nav-ul li");
const clicked = document.querySelectorAll(".mobile-nav-ul li a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("toggle");
  mobileDiv.classList.toggle("active");
  if (hamburger.classList.contains("toggle")) {
    disableScroll();
  } else {
    enableScroll();
  }
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

clicked.forEach((a) => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("toggle");
    mobileDiv.classList.remove("active");
    enableScroll();
    console.log("yes");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const langP = document.querySelectorAll(".lang p");
  const langDiv = document.querySelectorAll(".lang div");

  langP[0].addEventListener("click", () => {
    langDiv[0].classList.toggle("hidden");
  });

  langP[1].addEventListener("click", () => {
    langDiv[1].classList.toggle("hidden");
  });
});
