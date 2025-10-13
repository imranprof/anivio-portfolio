"use client"

import { ArrowDown, CircleChevronDown } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { hasTextReveal } from "@/app/animations/hasTextReveal"


const ProjectHero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    hasTextReveal();
  }, { scope: containerRef })
  return (
    <section ref={containerRef} className="container flex flex-col font-poppin ">

      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center my-20 py-20">
          <span className="text-[18px] font-medium text-primary/80">Design</span>
          <h1 className="has-text-reveal text-[clamp(64px,15vw,300px)] font-semibold px-[80px]" >
            Projects
          </h1>
          <span className="text-[18px] font-medium text-primary/80">Animation</span>
        </div>
        <p className="text-[24px] lg:max-w-[450px] xl:max-w-[500px] font-medium text-center lg:absolute lg:bottom-0 lg:-translate-y-1/2">Designing digital experiences that leave a lasting impression</p>
      </div>
      <div className="hero_bottom text-center flex justify-between inner-container">
        <div className="flex justify-between items-center text-[18px] font-medium"> <ArrowDown className="pe-5 text-black h-10 w-10" /> Scroll To Explore </div>
        <div className="text-[18px] font-medium flex items-center">All Projects <CircleChevronDown className="ps-5 h-10 w-10" /></div>
      </div>
    </section>
  )
}

export default ProjectHero