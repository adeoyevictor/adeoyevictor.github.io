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

gsap.from(".services .service", {
  duration: 1,
  opacity: 0,
  y: "random(-200, 200)",
  stagger: 0.25,
  ease: "back",
  scale: 0.3,
  scrollTrigger: {
    trigger: ".services",
    toggleActions: "play pause resume pause",
  },
});

gsap.from(".portfolio .portfolio__item", {
  duration: 1,
  opacity: 0,
  y: "random(-200, 200)",
  stagger: 0.25,
  scale: 0.3,
  ease: "back",
  scrollTrigger: {
    trigger: ".portfolio",
    toggleActions: "play pause restart pause",
  },
});

// play pause resume reverse restart reset complete none
// 1 enter screen
// 2 when it goes forward past endpoint
