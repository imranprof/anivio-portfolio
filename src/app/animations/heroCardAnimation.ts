import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const heroCardAnimation = () => {

  const tlr = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0 });

    tlr.to(".card1-anim", { y: 15, duration: 1, ease: "none" })
      .to(".card2-anim", { y: 15, duration: 1, ease: "none" }, "<.4")
      .to(".card3-anim", { y: 15, duration: 1, ease: "none" }, "<-.4")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-container",
        start: "clamp(top 50%)",
        // end: "top top",
        scrub: true,
        // markers: true
      }
    });

    tl.to(".card1-anim", { xPercent: 20 })
      .to(".card3-anim", { xPercent: -20 }, "<")
      .to(".card1-anim", { yPercent: 300, opacity: .5, rotation: -15, duration: 2 }, ">-.5")
      .to(".card2-anim", { yPercent: 300, opacity: .5, duration: 2 }, "<.07")
      .to(".card3-anim", { yPercent: 300, opacity: .5, rotation: 15, duration: 2 }, "<.07");


}