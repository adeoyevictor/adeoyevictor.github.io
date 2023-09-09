const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".service", {
  duration: 1.5,
  opacity: 0,
  y: "random(-400, 400)",
  stagger: 0.25,
  ease: "back",
  scale: 0.3,
  scrollTrigger: {
    trigger: ".service",
    toggleActions: "restart pause resume pause",
    // start: "top center",
    end: "bottom 100px",
  },
  //   repeat: 1
});
gsap.from(".portfolio .portfolio__item", {
  duration: 1.5,
  opacity: 0,
  y: "random(-400, 400)",
  stagger: 0.25,
  scale: 0.3,
  ease: "back",
  scrollTrigger: {
    trigger: ".portfolio .portfolio__item",
    toggleActions: "restart pause resume pause",
    // start: "top center",
    end: "bottom 100px",
  },
  //   repeat: 3
});
