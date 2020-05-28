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
