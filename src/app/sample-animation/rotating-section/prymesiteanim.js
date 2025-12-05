// SVG animation.

gsap.registerPlugin(ScrollTrigger);
// URL of your uploaded SVG
const svgUrl =
  "https://cdn.prod.website-files.com/68a37480edb8d42763220789/691e115345220d21264fb8bf_testani%20(1).svg";

// Load SVG file
fetch(svgUrl)
  .then((response) => response.text())
  .then((svgData) => {
    // Inject inline SVG into div
    document.getElementById("svg-container").innerHTML = svgData;
    ScrollTrigger.refresh();

    // Now we can animate using GSAP

    const mapContainer = document.querySelector("#svgContainer");

    const topContainer = document.querySelector("#GTop");
    const topParts = gsap.utils.toArray("[id^='Group']", topContainer);
    const bottomContainer = document.querySelector("#GBottom");
    const bottomParts = gsap.utils.toArray("[id^='Group']", bottomContainer);

    const allTexts = gsap.utils.toArray("g[id^='GTitle']", mapContainer);

    // console.log(allParts)
    // console.log("parts-- ", allParts.length)

    const mm = gsap.matchMedia();
    ScrollTrigger.refresh();
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.refresh();
      ScrollTrigger.create({
        trigger: mapContainer,
        start: "top top",
        end: "+=1500px",
        pin: true,
        // markers: true,
        scrub: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mapContainer,
          start: "top 80%",
          end: "+=2000px",
          scrub: true,
          // markers: true,
        },
      });

      tl.from(
        topParts,
        {
          x: (i) => (i % 2 === 0 ? 1500 : -1500),
          y: -800,
          duration: 15,
          stagger: 1,
        },
        0
      );
      tl.from(
        bottomParts,
        {
          x: (i) => (i % 2 === 0 ? 800 : -800),
          y: 1000,
          duration: 15,
          stagger: 1,
        },
        12
      );

      tl.to(allTexts, {
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "expo",
      });

      //step animation start
      const rotatingMainCon = document.querySelector("#rotateParentContainer");
      const rotateSection = document.querySelector("#rotatingContainer");
      const rotateCard = gsap.utils.toArray(".rotate-card");

      const tl2 = gsap.timeline({
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
      const startAt = length * 0.3;

      // base setup: hide path
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: -(length - startAt),
      });

      for (let i = 1; i <= 2; i++) {
        // console.log("i----- ", i);
        const offset = -length * ((2 - i) / 2);

        tl2.to(path, {
          strokeDashoffset: offset,
          duration: 0.3,
          ease: "none",
        });

        tl2.to(rotateSection, {
          rotate: 90 * i,
          // ease: "cubic-bezier(.445, .05, .55, .95)",
          duration: 0,
        });
        tl2.to(rotateCard[i], {
          opacity: 1,
          duration: 0,
        });

        tl2.to(rotateCard[i - 1], {
          opacity: 0,
          duration: 0,
        });
      }
      tl2.to({}, { duration: 0.3 });
    });

    //text reveal animation
    const anim_reveal = document.querySelectorAll(".has_text_reveal_anim");

    anim_reveal.forEach((areveal) => {
      var duration_value = 1;
      var onscroll_value = 1;
      var stagger_value = 0.02;
      var data_delay = 0.05;

      if (areveal.getAttribute("data-duration")) {
        duration_value = areveal.getAttribute("data-duration");
      }
      if (areveal.getAttribute("data-on-scroll")) {
        onscroll_value = areveal.getAttribute("data-on-scroll");
      }
      if (areveal.getAttribute("data-stagger")) {
        stagger_value = areveal.getAttribute("data-stagger");
      }
      if (areveal.getAttribute("data-delay")) {
        data_delay = areveal.getAttribute("data-delay");
      }

      areveal.split = new SplitText(areveal, {
        type: "lines,words,chars",
        linesClass: "anim-reveal-line",
      });

      if (onscroll_value == 1) {
        areveal.anim = gsap.from(areveal.split.words, {
          scrollTrigger: {
            trigger: areveal,
            start: "top 85%",
            toggleActions: "restart none none reverse",
            //markers: true,
          },
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 80,
          stagger: stagger_value,
          opacity: 0,
        });
      } else {
        areveal.anim = gsap.from(areveal.split.words, {
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 80,
          stagger: stagger_value,
          opacity: 0,
        });
      }
    });

    const element = document.querySelector(".fade-line-anim");

    // split into words
    const split = new SplitText(element, { type: "lines" });

    gsap.from(split.lines, {
      yPercent: 100,
      autoAlpha: 0,
      duration: 1,
      ease: "circ.out",
      stagger: 0.02,

      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        // toggleActions: "restart none none reverse"
      },
    });
  })
  .catch((error) => console.error(error));
