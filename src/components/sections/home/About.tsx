"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const circlesRef = useRef<HTMLDivElement[]>([])
  const textRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([headerRef.current, textRef.current], { opacity: 0, y: 30 })
      gsap.set(circlesRef.current, { scale: 0, opacity: 0 })
      gsap.set(linesRef.current, { scaleX: 0, opacity: 0 })

      // Create timeline
      const tl = gsap.timeline({ delay: 0.5 })

      // Animate header text
      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      })

      // Animate circles with stagger
      tl.to(
        circlesRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.5",
      )

      // Animate main text
      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3",
      )

      // Animate decorative lines
      tl.to(
        linesRef.current,
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.8",
      )

      // Continuous floating animation for circles
      gsap.to(circlesRef.current, {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const addToCirclesRef = (el: HTMLDivElement | null) => {
    if (el && !circlesRef.current.includes(el)) {
      circlesRef.current.push(el)
    }
  }


  return (
    <section ref={sectionRef} className="container relative w-full h-screen bg-black text-white overflow-hidden">

      {/* Header navigation */}
      <div ref={headerRef} className="absolute top-8 left-0 right-0 flex justify-between items-center px-8">
        <div className="text-sm font-mono tracking-wider">ONE CLICK WITH IMPACT</div>
        <div className="text-sm font-mono tracking-wider">STANDARD</div>
        <div className="text-sm font-mono tracking-wider">FEELING</div>
      </div>

      {/* Golden circles */}
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 flex space-x-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            ref={addToCirclesRef}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg"
            style={{
              background: "radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706)",
            }}
          />
        ))}
      </div>

      {/* Main content text */}
      <div ref={textRef} className="absolute bottom-32 left-8 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-balance">
          Good websites don't just look good - they feel good too. Small movements, thoughtful transitions, subtle
          reactions:
        </h1>
        <p className="text-xl text-gray-400 font-light">That's what turns a click into a good feeling.</p>
      </div>
    </section>
  )
}
