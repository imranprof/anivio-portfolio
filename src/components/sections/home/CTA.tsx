'use client'

import { horizontalScrollAnimation } from "@/app/animations/horizontalScrollAnimation";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"


const CTA = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    horizontalScrollAnimation();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="overflow-hidden">
      <div className="h-scroll-container h-[500px]">
        <h2 className="has-horizontal-scroll text-[clamp(64px,15vw,300px)] whitespace-nowrap">
          Let your brand evolve with Anivio
        </h2>
      </div>
    </section>
  )
}

export default CTA