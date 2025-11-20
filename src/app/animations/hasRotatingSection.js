import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const hasRotatingSections = () => {
  const rotatingMainCon = document.querySelector("#rotateParentContainer");
  const rotateSection = document.querySelector("#rotatingContainer");
  const stepsCard = gsap.utils.toArray(".step-card");
  const rotateCard = gsap.utils.toArray(".rotate-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: rotatingMainCon,
      start: "bottom bottom",
      end: "+=1200",
      pin: true,
      // toggleActions: "play none none reverse",
      scrub: true,
      // markers: true,
    },
  });

  const path = document.querySelector("#rotateSvgPath");
  const length = path.getTotalLength();

  // base setup: hide path
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: -length,
  });

  for (let i = 1; i <= 2; i++) {
    // console.log("i----- ", i);
    const offset = -length * ((2 - i) / 2);

    tl.to(path, {
      strokeDashoffset: offset,
      duration: 0.3,
      ease: "none",
    });

    tl.to(rotateSection, {
      rotate: 90 * i,
      // ease: "cubic-bezier(.445, .05, .55, .95)",
      duration: 0,
    });
    tl.to(rotateCard[i], {
      opacity: 1,
      duration: 0,
    });

    tl.to(rotateCard[i - 1], {
      opacity: 0,
      duration: 0,
    });
  }
  tl.to({}, { duration: 0.3 });

  //
};
