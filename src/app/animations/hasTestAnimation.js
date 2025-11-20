import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const hasTestAnimation = () => {
  const mapContainer = document.querySelector("#svgContainer");

  const topContainer = document.querySelector("#GTop");
  const topParts = gsap.utils.toArray("[id^='Group']", topContainer);
  const bottomContainer = document.querySelector("#GBottom");
  const bottomParts = gsap.utils.toArray("[id^='Group']", bottomContainer);

  // const allParts = gsap.utils.toArray<SVGElement>("[id^='Group']", topContainer);

  // const allParts = gsap.utils.toArray<SVGElement>("[id^='Group']", mapContainer);
  const allTexts = gsap.utils.toArray("g[id^='GTitle']", mapContainer);

  // console.log(allParts)
  // console.log("parts-- ", allParts.length)

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    ScrollTrigger.create({
      trigger: mapContainer,
      start: "top top",
      end: "+=1500px",
      pin: true,
      // markers: true,
      scrub: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mapContainer,
        start: "top 80%",
        end: "+=2000px",
        scrub: true,
        // markers: true,
      },
    });

    tl.from(
      topParts,
      {
        x: (i) => (i % 2 === 0 ? 1500 : -1500),
        // y: -800,
        duration: 15,
        stagger: 1,
      },
      0
    );
    tl.from(
      bottomParts,
      {
        x: (i) => (i % 2 === 0 ? 800 : -800),
        y: 1000,
        duration: 15,
        stagger: 1,
      },
      12
    );

    tl.to(allTexts, {
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "expo",
    });
  });
};
