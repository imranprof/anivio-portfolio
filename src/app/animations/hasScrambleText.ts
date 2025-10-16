import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


gsap.registerPlugin(ScrambleTextPlugin);

export function hasScrambleText(selector = "button, a") {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  elements.forEach((el) => {
    const textEl = el.querySelector<HTMLElement>(".has-scramble-text");
    if (!textEl) return;

    if (!textEl.dataset.text) {
      textEl.dataset.text = textEl.textContent || "";
    }

    const tl = gsap.timeline({
      paused: true,
      onStart: () => {
        // Fix width before scramble starts
        const width = textEl.offsetWidth;
        textEl.style.display = "inline-block";
        textEl.style.width = `${width}px`;
      },
      onComplete: () => {
        // Restore width after animation
        textEl.style.width = "";
      },
    });

    tl.to(textEl, {
      duration: 0.3,
      scrambleText: {
        text: textEl.dataset.text!,
      },
      ease: "none",
    });

    // Play on hover
    el.addEventListener("mouseenter", () => {
      tl.restart();
    });
  });
}
