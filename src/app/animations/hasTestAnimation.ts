import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const hasTestAnimation = () => {
  const mapContainer = document.querySelector<HTMLElement>("#svgContainer")

  const topContainer = document.querySelector<SVGAElement>("#GTop");
  const topParts = gsap.utils.toArray<SVGElement>("[id^='Group']", topContainer);

  // const allParts = gsap.utils.toArray<SVGElement>("[id^='Group']", topContainer);

  // const allParts = gsap.utils.toArray<SVGElement>("[id^='Group']", mapContainer);
  const allTexts = gsap.utils.toArray<SVGElement>("g[id^='GTitle']", mapContainer);

  // console.log(allParts)
  // console.log("parts-- ", allParts.length)

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {

    ScrollTrigger.create({
      trigger: mapContainer,
      start: "top top",
      end: "+=1100px",
      pin: true,
      // markers: true,
      scrub: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mapContainer,
        start: "top 70%",
        end: "+=1600px",
        scrub: true,
        // markers: true,
      },
    });

    tl.from(topParts, {
      x: i => i % 2 === 0 ? 800 : -800,
      y: -800,
      duration: 5,
      stagger: .5
    })

    // tl.from(allParts, {
    //   x: i => {
    //     const group = i % 4;
    //     if (group === 0) return "-800"; // left-top
    //     if (group === 1) return "800";  // right-top
    //     if (group === 2) return "-800"; // left-bottom
    //     return "800";                   // right-bottom
    //   },
    //   y: i => {
    //     const group = i % 4;
    //     if (group === 0) return "-1100"; // left-top
    //     if (group === 1) return "-1100"; // right-top
    //     if (group === 2) return "1100";  // left-bottom
    //     return "1100";                   // right-bottom
    //   },
    //   duration: 5,
    //   ease: "power1.inOut",
    //   stagger: 0.4
    // });



    tl.to(allTexts, {
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "expo"
    });


  });



}