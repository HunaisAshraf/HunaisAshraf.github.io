var typed = new Typed("#element", {
  strings: ["Front-End Developer", " Web Developer"],
  typeSpeed: 80,
});

// scroll reveal

ScrollReveal({
  reset: true,
  distance: "30px",
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".hero,.hero-link,.abt-head,.project-head", {
  origin: "top",
});
ScrollReveal().reveal(".skills,.contact", { origin: "bottom" });
ScrollReveal().reveal(
  ".about,.about-me,.education,.contact form,.projects h3",
  { origin: "left" }
);
ScrollReveal().reveal(".project", { origin: "right" });

// active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let phoneNav = document.querySelectorAll(".phone-nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }

    if (top >= offset && top < offset + height) {
      phoneNav.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".phone-nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};


