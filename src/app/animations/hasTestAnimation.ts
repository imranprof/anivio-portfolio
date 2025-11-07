import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const hasTestAnimation = () =>{
  const mapContainer = document.querySelector<HTMLElement>("#svgContainer")
  // const allParts = gsap.utils.toArray<SVGElement>("g ", mapContainer);
  const allParts = gsap.utils.toArray<SVGElement>("g[id^='Group']", mapContainer);
  const allTexts = gsap.utils.toArray<SVGElement>("g[id^='GTitle']", mapContainer);

  console.log(allParts)


ScrollTrigger.create({
  trigger: mapContainer,
  start: "top top", // pin starts when top hits 10%
  end: "+=300px",
  pin: true,
  // markers: true,
  scrub: true,
});

// Then: Animate elements separately (start later)
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: mapContainer,
    start: "top 50%", // animation starts when top hits 50%
    end: "+=600px",
    scrub: true,
    // markers: true,
  },
});

  allParts.forEach((part, i) => {
  tl.from(part, {
    x: i % 2 === 0 ? -1000 : 1000, // alternate direction
    // opacity: 0,
    autoAlpha: 0,
    duration: 3,
    ease: "power3.out",
  });
});

  allTexts.forEach((text, i) => {
  tl.to(text, {
    autoAlpha: 0,
    duration: 0.5,
  }, );
});




}