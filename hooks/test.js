const nav = document.querySelector(".nav")
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden")
    console.log("down");
  } else {
    nav.classList.remove("nav--hidden")
    console.log("up");
  }

  lastScrollY = window.scrollY;
})