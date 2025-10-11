import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const serviceCardAnimation = () => {
const cards = gsap.utils.toArray<HTMLElement>(".flip-card")
const innerCards = gsap.utils.toArray<HTMLElement>(".flip-card-inner")

console.log(cards,innerCards)
  // continueous move animation
    const tlr = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0 });

    tlr.to(cards[0], { y: 15, duration: 1, ease: "none" })
      .to(cards[1], { y: 15, duration: 1, ease: "none" }, "<.4")
      .to(cards[2], { y: 15, duration: 1, ease: "none" }, "<-.4")

      //section 3 card animaiton
    gsap.timeline({
      scrollTrigger: {
        trigger: ".service-container",
        start: "top top",
        endTrigger: ".cards-flip-container",
        end: "top top-=800",
        pin: true,
        // markers: true,
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-flip-container",
        start: "top 50%",
        end: "top top-=500",
        // markers: true,
        scrub: true
      }
    });
    gsap.set(cards[0], {scale:.4,xPercent: 120});
    gsap.set(cards[1], {scale: .4});
    gsap.set(cards[2], {scale:.4, xPercent: -120});

    tl.from(cards[0], { yPercent: -100,rotation: -20, duration: 5 })
      .from(cards[1], { yPercent: -100,duration: 5 }, "<.2")
      .from(cards[2], { yPercent: -100,rotation: 20, duration: 5 }, "<.3")

      .to(cards[0], { scale: 1, duration: 5 }, "<2")
      .to(cards[1], { scale: 1, duration: 5 }, "<")
      .to(cards[2], { scale: 1, duration: 5 }, "<")

      .to(cards[0], {xPercent:0, duration: 3 }, )
      .to(cards[2], {xPercent:0, duration: 3 }, "<")

      .to(innerCards[0], { rotationY: 180, duration: 3 }, "<")
      .to(innerCards[1], { rotationY: 180, duration: 3 }, "<")
      .to(innerCards[2], { rotationY: 180, duration: 3}, "<")

}