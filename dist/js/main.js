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

let cards = document.querySelectorAll(".card");
let slideBtn = document.querySelectorAll(".line");
let container = document.querySelector("#skills .flex_container div");

skills.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName !== "SPAN") return;
  let width = cards[0].offsetWidth;
  let id = target.id;
  let amount = -width * id;

  container.style.transform = `translate3d(${amount}px, 0px, 0px)`;
  Array.from(slideBtn).forEach((el) => {
    if (el.classList.contains("activeSlide"))
      el.classList.remove("activeSlide");
  });

  target.classList.add("activeSlide");
});
