"strict";
// Navbar
// const navBar = document.querySelectorAll(".navbar");
const menu = document.querySelector(".menu");

// const showMenu = (e) => {
//   navBar.style.top = "0rem";
//   menu.style.top = "7rem";
// };

const showMenu = (e) => {
  document.querySelectorAll(".target").forEach((el) => {
    el.classList.toggle("change");
  });

  console.log("clicked!");
};

menu.addEventListener("click", showMenu);

// Section 1 slide show of images
const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector(".section-1-icons .change");

  icon.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);
