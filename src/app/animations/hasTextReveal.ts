import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export const hasTextReveal = () => {
  const revealTexts = gsap.utils.toArray<HTMLElement>(".has-text-reveal");

  revealTexts.forEach((text)=>{
    const duration = parseFloat(text.dataset.duration || "0.5");
    const staggerAmount = parseFloat(text.dataset.stagger || "0.5");
    const splitText = SplitText.create(text,{type: "lines, chars", mask: "lines", linesClass: "line"});
    gsap.set(".has-text-reveal", { opacity: 1 });

    gsap.from(splitText.chars, {yPercent:-100, duration: duration, ease:"power4",
      stagger: {
        amount: staggerAmount,
        from: "center"
    }
  })

  })

}