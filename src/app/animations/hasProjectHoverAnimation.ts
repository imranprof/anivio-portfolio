import { gsap } from "gsap";
import { RefObject } from "react";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin) 

export const hasProjectHoverAnimation = (cardRef: RefObject<HTMLElement | null>) => {
  const card = cardRef.current;
  const img = card?.querySelector<HTMLElement>(".thumb-clip-anim");
  const scramTexts = card?.querySelectorAll<HTMLElement>(".has-scramble");

  if (!card || !img) return;

  // Create a timeline for hover animation
  const tl = gsap.timeline({ paused: true });
  tl.to(img, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 0.45,
    ease: "cubic-bezier(0.1, 0.8, 0.2, 1)",
  });

  scramTexts?.forEach((text)=>{
    const orginalText = text.dataset.text;
    tl.to(text, {
    opacity: 1,
    duration: .3,
      scrambleText: {
      text: `${orginalText}`, 
      // chars: "THIS IS NEW TEXT", 
    }
  }, "<");

  })


  // Play forward on hover
  card.addEventListener("mouseenter", () => {
    tl.timeScale(1).play();
  });

  // Reverse smoothly on hover out
  card.addEventListener("mouseleave", () => {
    tl.timeScale(tl.duration() / 0.3).reverse();
  });
};
