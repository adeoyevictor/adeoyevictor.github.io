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
  duration: 0.5,
  opacity: 0,
  y: "random(-200, 200)",
  stagger: 0.25,
  ease: "back",
  scale: 0.3,
  scrollTrigger: {
    trigger: ".services",
    toggleActions: "play pause restart pause",
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
    toggleActions: "play pause resume restart",
  },
});

// play pause resume reverse restart reset complete none
// 1 enter screen
// 2 when it goes forward past endpoint

gsap.from(".my__name", {
  duration: 2,
  y: 300,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".my__name",
    toggleActions: "play pause restart restart",
  },
});
gsap.from(".section__title--about", {
  duration: 2,
  y: 300,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".section__title--about",
    toggleActions: "play pause restart restart",
  },
});

gsap.from(".section__subtitle--intro", {
  duration: 2,
  y: -300,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".section__subtitle--intro",
    toggleActions: "play pause restart restart",
  },
});

gsap.from(".section__subtitle--about", {
  duration: 2,
  y: 300,
  ease: "bounce",
  scrollTrigger: {
    trigger: ".section__subtitle--about",
    toggleActions: "play pause restart restart",
  },
});

gsap.set(".intro__img", {
  transformOrigin: "50% 50%",
});

gsap.to(".intro__img", {
  duration: 2,
  rotation: 360,
  scrollTrigger: {
    trigger: ".intro__img",
    toggleActions: "play pause restart restart",
  },
});

gsap.set(".about-me__img", {
  transformOrigin: "50% 50%",
});

gsap.to(".about-me__img", {
  duration: 2,
  rotation: 360,
  scrollTrigger: {
    trigger: ".about-me__img",
    toggleActions: "play pause restart restart",
  },
});
