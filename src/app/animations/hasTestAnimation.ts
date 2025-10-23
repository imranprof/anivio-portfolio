import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const hasTestAnimation = () =>{
  const mapContainer = document.querySelector<HTMLElement>("#svgContainer")
  const allParts = gsap.utils.toArray<SVGElement>("path ", mapContainer);

  console.log(allParts)


  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: mapContainer,
      start: "top 20%",
      scrub: true,
      end: "+=2000px",
      pin: true,
      // markers: true

    }
  })

  allParts.forEach((part, i) => {
  tl.from(part, {
    x: i % 2 === 0 ? -1000 : 1000, // alternate direction
    // opacity: 0,
    autoAlpha: 0,
    duration: 3,
    ease: "power3.out",
  });
});




}