document.addEventListener("DOMContentLoaded", function () {
  // GSAP Animations with ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".banner-text").forEach(function (element) {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  });

  // Target timeline items for animation
  gsap.utils.toArray(".timeline-item").forEach(function (element) {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  });

  // DISCOUNT ANIMATION - 30%

  const discountText = document.querySelector(".discount");
  const text = discountText.textContent;
  discountText.innerHTML = "";

  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`;
    discountText.appendChild(span);
  });

  // Counter-Up functionality - Banner

  var counterElements = document.querySelectorAll('[data-toggle="counter-up"]');
  counterElements.forEach(function (el) {
    var countTo = parseInt(el.innerText, 10);
    var increment = countTo / 200;
    var current = 0;

    var countUp = function () {
      current += increment;
      if (current > countTo) {
        current = countTo;
      }
      el.innerText = Math.floor(current) + "+";
      if (current < countTo) {
        requestAnimationFrame(countUp, "+");
      }
    };
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: countUp,
    });
  });
});

// Training Content

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  var tagListItems = document.querySelectorAll(".tag-list li");
  var textScroller = document.querySelector(".tag-list .scroller__inner");

  // Add event listeners for list items
  tagListItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      textScroller.style.animationPlayState = "paused";
    });

    item.addEventListener("mouseout", function () {
      textScroller.style.animationPlayState = "running";
    });
  });

  textScroller.addEventListener("mouseover", function () {
    textScroller.style.animationPlayState = "running";
  });

  textScroller.addEventListener("mouseout", function () {
    textScroller.style.animationPlayState = "running";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var imageScroller = document.querySelector(".scroller__inner");
  var images = document.querySelectorAll(".scroller__inner img");

  images.forEach(function (img) {
    img.addEventListener("mouseover", function () {
      imageScroller.style.animationPlayState = "paused";
    });

    img.addEventListener("mouseout", function () {
      imageScroller.style.animationPlayState = "running";
    });
  });

  imageScroller.addEventListener("mouseover", function () {
    imageScroller.style.animationPlayState = "running";
  });

  imageScroller.addEventListener("mouseout", function () {
    imageScroller.style.animationPlayState = "running";
  });
});

// Particle JS - Code

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "lib/particles/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

// Navbar Style - NavBar

const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
body.addEventListener("click", (e) => {
  let clickedElm = e.target;
  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

document.querySelector(".dark-light").addEventListener("click", function () {
  document.querySelector(".moon").classList.toggle("d-none");
  document.querySelector(".sun").classList.toggle("d-none");
});

document.querySelector(".searchToggle").addEventListener("click", function () {
  document.querySelector(".searchBox").classList.toggle("active");
});
