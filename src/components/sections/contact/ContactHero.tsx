"use client"

import { ArrowDown, CircleChevronDown } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { hasTextReveal } from "@/app/animations/hasTextReveal"


const ContactHero = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    hasTextReveal();
  }, { scope: containerRef })
  return (
    <section ref={containerRef} className="container flex flex-col font-poppin relative">

      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center my-20 py-20">
          <span className="text-[18px] font-medium text-primary/80">Reach Out</span>
          <h1 className="has-text-reveal text-[clamp(64px,15vw,300px)] font-semibold px-[80px]" >
            Contact
          </h1>
          <span className="text-[18px] font-medium text-primary/80">Say Hello</span>
        </div>
        <p className="text-[24px] lg:max-w-[350px] xl:max-w-[350px] font-medium font-poppin text-center lg:absolute lg:bottom-0">Don’t let your vision wait <br /> <span className="font-sofia font-semibold">Let’s make it real</span></p>
      </div>
      <div className="hero_bottom text-center flex justify-between inner-container w-full mx-auto">
        <div className="flex justify-between items-center text-[18px] font-medium"> <ArrowDown className="pe-5 text-black h-10 w-10" /> Scroll To Explore </div>
        <div className="text-[18px] font-semibold font-poppin flex items-center">Imranpers@gmail.com</div>
      </div>
    </section>
  )
}

export default ContactHero