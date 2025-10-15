import { gsap } from "gsap";
import { RefObject } from "react";

export const hasProjectHoverAnimation = (cardRef: RefObject<HTMLElement | null>) => {
  const card = cardRef.current;
  const img = card?.querySelector<HTMLElement>(".thumb-clip-anim");

  if (!card || !img) return;

  // Create a timeline for hover animation
  const tl = gsap.timeline({ paused: true });
  tl.to(img, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 0.45,
    ease: "cubic-bezier(0.1, 0.8, 0.2, 1)",
  });

  // Play forward on hover
  card.addEventListener("mouseenter", () => {
    tl.timeScale(1).play();
  });

  // Reverse smoothly on hover out
  card.addEventListener("mouseleave", () => {
    tl.timeScale(tl.duration() / 0.3).reverse();
  });
};
