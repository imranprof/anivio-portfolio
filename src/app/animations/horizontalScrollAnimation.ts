import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const horizontalScrollAnimation = () => {
  const mm = gsap.matchMedia();

  mm.add(
    {
      // Desktop and tablet
      isDesktop: "(min-width: 1024px)",
      // Mobile
      isMobile: "(max-width: 1023px)",
    },
    (context) => {
      const { conditions } = context;
      const triggers = document.querySelectorAll<HTMLElement>(".h-scroll-container");

      triggers.forEach((trigger) => {
        const heading = trigger.querySelector<HTMLElement>(".has-horizontal-scroll");

        if (!heading) return;

        const headingWidth = heading.scrollWidth;
        console.log(headingWidth);
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Responsive values
        const yStart = conditions?.isMobile ? 100 : 150;
        const yEnd = conditions?.isMobile ? 200 : -200;
        const charyStart = -60;

        function getScrollAmount() {
          let scrollWidth = headingWidth;
          return -(scrollWidth - window.innerWidth);
        }

        // Initial setup
        gsap.set(heading, {
          // y: yStart,
          x: windowWidth
        });

        // Horizontal scroll movement
        gsap.to(heading, {
          x: getScrollAmount,
          y: yEnd,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top 70%",
            end: () => `+=${getScrollAmount() * -1}`,
            scrub: true,
            invalidateOnRefresh: true,
            pin:true
            // markers: true
          },
        });


        // SplitText animation
        const splitText = new SplitText(heading, { type: "chars" });
        const chars = splitText.chars;

        gsap.set(chars, {
          yPercent: charyStart,
          rotate: 10,
        });

        gsap.to(chars, {
          yPercent: 0,
          rotate: 0,
          ease: "back.inOut(4)",
          stagger: 0.35,
          duration: 2.5,
          scrollTrigger: {
            trigger,
            start: "top 75%",
            end: "+=" + (headingWidth - windowWidth + windowHeight * 0.35),
            scrub: true,
          },
        });
        

      });
    }
  );
};
