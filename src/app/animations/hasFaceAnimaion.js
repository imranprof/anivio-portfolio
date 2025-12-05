import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const hasFaceAnimation = () => {
  const svgMainContainer = document.querySelector("#svgMainContainer");

  const fTopContainer = document.querySelector("#FGTop");
  const fTopParts = gsap.utils.toArray("[id^='Group']", fTopContainer);
  const fBottomContainer = document.querySelector("#FGBottom");
  const fBottomParts = gsap.utils.toArray("[id^='Group']", fBottomContainer);

  const fAllTexts = gsap.utils.toArray("g[id^='FGTitle']", svgMainContainer);

  // console.log(allParts)
  // console.log("parts-- ", allParts.length)

  const mm = gsap.matchMedia();
  ScrollTrigger.refresh();
  mm.add("(min-width: 1024px)", () => {
    ScrollTrigger.refresh();
    ScrollTrigger.create({
      trigger: svgMainContainer,
      start: "top top",
      end: "+=900px",
      pin: true,
      //  markers: true,
      scrub: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgMainContainer,
        start: "clamp(top 85%)",
        end: "+=1600px",
        scrub: true,
        // markers: true,
      },
    });

    tl.from(
      fTopParts,
      {
        x: (i) => (i % 2 === 0 ? 4850 : -4850),
        y: -2624,
        duration: 5,
        stagger: 0.8,
      },
      0
    );
    tl.from(
      fBottomParts,
      {
        x: (i) => (i % 2 === 0 ? 2000 : -2000),
        y: 2000,
        duration: 5,
        stagger: 0.9,
      },
      8
    );

    tl.to(fAllTexts, {
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "expo",
    });

    //
  });
  ///
};
