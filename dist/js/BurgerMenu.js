// Burger Menu
const navSlide = (() => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("toggle");
  });
})();
//navSlide();

$(".links a").on("click", function () {
  $(".links").removeClass("active");
  $(".burger").removeClass("toggle");
});

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
