"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  front: React.ReactNode
  back: React.ReactNode
}

export function ServiceCard({ front, back }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-full w-full cursor-pointer perspective-1000 min-h-[500px] max-w-[420px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          isFlipped && "rotate-y-180",
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full bg-stone-50 rounded-lg p-8 border border-stone-200 shadow-sm">{front}</div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-stone-800 text-stone-100 rounded-lg shadow-lg">{back}</div>
        </div>
      </div>
    </div>
  )
}
