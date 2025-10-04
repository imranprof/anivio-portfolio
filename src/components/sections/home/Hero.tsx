"use client"

import { hasTextReveal } from "@/app/animations/hasTextReveal";
import { heroCardAnimation } from "@/app/animations/heroCardAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Hero = () => {

  const containerRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    heroCardAnimation();
    hasTextReveal();
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-[clamp(20px,5vw,45px)]">
      <h1 className="has-text-reveal font-sofia text-[clamp(64px,15vw,300px)] uppercase font-bold text-center">
        Infinite Motion
      </h1>
      <div className="card-container card_section py-[clamp(20px,5vw,60px)]">
        <div className="flex items-center justify-center gap-4">
          <div className="card1-anim z-[1] card1 h-[182px] w-[132px] bg-purple-200 rounded-xl">
            <div className="wrapper w-full h-full px-[12px] py-[8px] flex flex-col justify-between">
              <div className="top w-full flex items-center justify-between">
                <span className="text-[5px] uppercase font-semibold">Strategy</span>
                <div className="h-[7px] w-[7px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-full w-full"><path fill="currentColor" d="M10 0h10v10H10zM0 10h10v10H0z"></path></svg>
                </div>
              </div>
              <div className="img-sec py-[5px] flex justify-center items-center ">
                <div className="img-wrapper w-[42px] h-[42px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-full w-full"><path fill="currentColor" d="M10 0h10v10H10zM0 10h10v10H0z"></path></svg>
                </div>
              </div>
              <div className="bottom-part w-full flex items-center justify-between">
                <div className="h-[7px] w-[7px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-full w-full"><path fill="currentColor" d="M10 0h10v10H10zM0 10h10v10H0z"></path></svg>
                </div>
                <span className="text-[5px] uppercase font-semibold rotate-y-180">Strategy</span>
              </div>
            </div>
          </div>
          <div className="card2-anim z-[3] card2 h-[182px] w-[132px] bg-orange-100 rounded-xl">
            <div className="wrapper w-full h-full px-[12px] py-[8px] flex flex-col justify-between">
              <div className="top w-full flex items-center justify-between">
                <span className="text-[5px] uppercase font-semibold">Design</span>
                <div className="h-[7px] w-[7px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true" className="w-full h-full"><path d="M20 0H6v2h2v4h2v2h2v2h2V8h2V6h2V2h2V0ZM6 10v2H4v2H2v4H0v2h14v-2h-2v-4h-2v-2H8v-2H6Z" fill="currentColor"></path></svg>
                </div>
              </div>
              <div className="img-sec py-[5px] flex justify-center items-center ">
                <div className="img-wrapper w-[42px] h-[42px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true" className="w-full h-full"><path d="M20 0H6v2h2v4h2v2h2v2h2V8h2V6h2V2h2V0ZM6 10v2H4v2H2v4H0v2h14v-2h-2v-4h-2v-2H8v-2H6Z" fill="currentColor"></path></svg>
                </div>
              </div>
              <div className="bottom-part w-full flex items-center justify-between">
                <div className="h-[7px] w-[7px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true" className="w-full h-full"><path d="M20 0H6v2h2v4h2v2h2v2h2V8h2V6h2V2h2V0ZM6 10v2H4v2H2v4H0v2h14v-2h-2v-4h-2v-2H8v-2H6Z" fill="currentColor"></path></svg>
                </div>
                <span className="text-[5px] uppercase font-semibold rotate-y-180">Design</span>
              </div>
            </div>
          </div>
          <div className="card3-anim z-[1] card3 h-[182px] w-[132px] bg-blue-200 rounded-xl">
            <div className="wrapper w-full h-full px-[12px] py-[8px] flex flex-col justify-between">
              <div className="top w-full flex items-center justify-between">
                <span className="text-[5px] uppercase font-semibold">Animation</span>
                <div className="h-[7px] w-[7px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true" className="w-full h-full"><path fill="currentColor" fillRule="evenodd" d="M0 0h20v20H0V0Zm4 16v-2H2V6h2V4h2V2h8v2h2v2h2v8h-2v2h-2v2H6v-2H4Z" clipRule="evenodd"></path></svg>
                </div>
              </div>
              <div className="img-sec py-[5px] flex justify-center items-center ">
                <div className="img-wrapper w-[42px] h-[42px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true" className="w-full h-full"><path fill="currentColor" fillRule="evenodd" d="M0 0h20v20H0V0Zm4 16v-2H2V6h2V4h2V2h8v2h2v2h2v8h-2v2h-2v2H6v-2H4Z" clipRule="evenodd"></path></svg>
                </div>
              </div>
              <div className="bottom-part w-full flex items-center justify-between">
                <div className="h-[7px] w-[7px]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true" className="w-full h-full"><path fill="currentColor" fillRule="evenodd" d="M0 0h20v20H0V0Zm4 16v-2H2V6h2V4h2V2h8v2h2v2h2v8h-2v2h-2v2H6v-2H4Z" clipRule="evenodd"></path></svg>
                </div>
                <span className="text-[5px] uppercase font-semibold rotate-y-180">Animation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_content container">
        <div className="w-full h-full flex justify-between">
          <div className="hero_description">
            <p className="max-w-[600px] text-[27px] font-medium">
              <span className="font-bold">At Anivio</span>, we craft websites that don’t just look good they move with life. Our designs blend modern aesthetics with smooth, meaningful <span className="font-bold">Animations</span>. Let’s turn your vision into an interactive story.
            </p>
          </div>
          <div className="flex flex-col-reverse">
            <span className="text-[20px] uppercase font-sofia font-semibold">Webdesign & Animation</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
