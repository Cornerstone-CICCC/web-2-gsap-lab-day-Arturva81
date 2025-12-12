gsap.registerPlugin(ScrollTrigger);

gsap.set(".section2 h2 span", { y: "-100%", opacity: 0 });
gsap.set(".section2 p", { scale: 0.8, opacity: 0 });
gsap.set(".section3 h2", { x: "-100%", opacity: 0 });
gsap.set(".section3 p span", { y: "100%", opacity: 0 });
gsap.set(".section5 h2", { y: -50, opacity: 0 });
gsap.set(".section5 p", { y: 20, opacity: 0 });
gsap.set(".section5 .contact-btn", { scale: 0.8, opacity: 0 });
gsap.set(".section5 img", { x: "100vw", opacity: 0 });

const firstSectionTimeline = gsap.timeline();

firstSectionTimeline
  .from(".content h1 span:nth-child(2)", { duration: 1, x: "100vw" })
  .from(".content h1 span:nth-child(1)", { duration: 1, x: "-100vw" }, "-=0.5")
  .from(".content p", { duration: 1, y: "100vh" }, "-=0.5")
  .from(".content img", { duration: 1, y: "100vh" }, "-=0.5");

const aboutMeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});

aboutMeTimeline
  .to(".section2 h2 span:nth-child(1)", { duration: 1, y: 0, opacity: 1 })
  .to(".section2 h2 span:nth-child(2)", { duration: 1, y: 0, opacity: 1 }, "-=0.3")
  .to(".section2 p", { duration: 1, scale: 1, opacity: 1 });

const horizontalSections = gsap.utils.toArray(".horizontal-sections section");

gsap.to(horizontalSections, {
  xPercent: -100 * (horizontalSections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections",
    pin: true,
    scrub: 1,
    end: "+=3000"
  }
});

const skillsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top 60%",
    toggleActions: "play none none reverse"
  }
});

skillsTimeline
  .to(".section3 h2", { duration: 1, x: 0, opacity: 1 })
  .to(".section3 p span", { duration: 1, y: 0, opacity: 1, stagger: 0.1 }, "-=0.5");

const contactTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top 70%",
    toggleActions: "play none none reverse"
  }
});

contactTimeline
  .to(".section5 h2", { duration: 1, y: 0, opacity: 1 })
  .to(".section5 p", { duration: 1, y: 0, opacity: 1 }, "-=0.3")
  .to(".section5 .contact-btn", { duration: 1, scale: 1, opacity: 1 }, "-=0.3")
  .to(".section5 img", { duration: 2, x: "80vw", opacity: 1 }, "-=0.3");