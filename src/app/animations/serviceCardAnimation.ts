import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const serviceCardAnimation = () => {
const cards = gsap.utils.toArray<HTMLElement>(".flip-card")
const innerCards = gsap.utils.toArray<HTMLElement>(".flip-card-inner")

console.log(cards,innerCards)


      //section 3 card animaiton
    gsap.timeline({
      scrollTrigger: {
        trigger: ".service-container",
        start: "top top",
        end: "bottom 50%",
        pin: true,
        markers: true,
      }
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-flip-container",
        start: "top 50%",
        end: "top top",
        // markers: true,
        scrub: true
      }
    });

    tl2.from(cards[0], { autoAlpha: .5, yPercent: -200, scale:0, xPercent: 100, rotation: -20, duration: 5 })
      .from(cards[1], { autoAlpha: .5, yPercent: -200,scale:0, duration: 5 }, "<.03")
      .from(cards[2], { autoAlpha: .5, yPercent: -200,scale:0, xPercent: -100, rotation: 20, duration: 5 }, "<.04")
      .to(innerCards[0], { rotationY: 180 }, ">")
      .to(innerCards[1], { rotationY: 180 }, ">")
      .to(innerCards[2], { rotationY: 180 }, ">")

}