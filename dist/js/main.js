let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let navBar = document.getElementById("nav_bar");

  if (prevScrollPos > currentScrollPos) {
    navBar.style.transform = "translateY(0)";
  } else {
    navBar.style.transform = "translateY(-100%)";
  }
  prevScrollPos = currentScrollPos;
};

const isInViewport = (el) => {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

let cards = document.querySelectorAll(".card");
let slideBtn = document.querySelectorAll(".line");
const slider = document.querySelector("#skills .flex_container div");

$(".line").on("click", function (e) {
  let target = e.target;
  let width = cards[0].offsetWidth;
  let id = target.id;
  let amount = width * id;

  $(slider).animate({ scrollLeft: amount }, 900);

  Array.from(slideBtn).forEach((el) => {
    if (el.classList.contains("activeSlide"))
      el.classList.remove("activeSlide");
  });
});

slider.addEventListener("scroll", () => {
  Array.from(cards).forEach((el, index) => {
    if (typeof window.orientation === "undefined") item = el;
    else item = el.querySelector(".list_header");

    if (isInViewport(item)) {
      Array.from(slideBtn).forEach((btn) => {
        if (btn.classList.contains("activeSlide"))
          btn.classList.remove("activeSlide");
      });
      slideBtn[index].classList.add("activeSlide");
    }
  });
});

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
