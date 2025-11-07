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
  end: "+=900px",
  pin: true,
  // markers: true,
  scrub: true,
});

// Then: Animate elements separately (start later)
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: mapContainer,
    start: "top 50%", // animation starts when top hits 50%
    end: "+=1200px",
    scrub: true,
    // markers: true,
  },
});

//   allParts.forEach((part, i) => {
//   tl.from(part, {
//     x: i % 2 === 0 ? -800 : 800, // alternate direction
//     // opacity: 0,
//     // autoAlpha: 0,
//     duration: 5,
//     ease: "power1",
//   });
// });

tl.from(allParts, {
  x: i => i % 2 === 0 ? -800 : 800,
  duration: 5,
  ease: "power1",
  stagger: 0.8 // pairs animate at the same time
});

//   allTexts.forEach((text, i) => {
//   tl.to(text, {
//     autoAlpha: 0,
//     duration: 0.5,
//   }, );
// });

  tl.to(allTexts, {
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "expo"
  }, );




}