"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"


type ServiceProps = {
  id: number;
  title: string;
  icon: React.ReactNode; // JSX element
  services: string[];
  description: string;
};

export function ServiceCard({ id, title, icon, services, description }: ServiceProps) {
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
          "rotate-y-180",
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full bg-stone-50 rounded-lg p-8 border border-stone-200 shadow-sm">
            <div className="h-full flex flex-col">
              {/* Top Icon and Title */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-foreground">{title}</h2>
                <div className="w-8 h-8">{icon}</div>
              </div>

              {/* Service List */}
              <div className="flex-1 space-y-4">
                {services.map((item, idx) => (
                  <div key={idx} className="bg-stone-200 rounded-lg p-4 text-center font-medium text-foreground">
                    {item}
                  </div>
                ))}
              </div>

              {/* Bottom Icon and Title (Rotated) */}
              <div className="flex items-center justify-between mt-8 rotate-180">
                <span className="text-xl font-semibold text-foreground">{title}</span>
                <div className="w-8 h-8">{icon}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className={cn("w-full h-full text-stone-100 rounded-lg shadow-lg p-8",
            id === 1 && "bg-purple-200", id === 2 && "bg-orange-100",
            id === 3 && "bg-blue-200"
          )}>
            <div className="h-full flex flex-col text-black justify-between">
              {/* Top Icon and Title */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-foreground">{title}</h2>
                <div className="w-8 h-8">{icon}</div>
              </div>

              {/* Service List */}
              <div className="flex items-center justify-center">
                <div className="w-[108px] h-[108px]">
                  {icon}
                </div>
              </div>

              {/* Bottom Icon and Title (Rotated) */}
              <div className="flex items-center justify-between mt-8 rotate-180">
                <span className="text-xl font-semibold text-foreground">{title}</span>
                <div className="w-8 h-8">{icon}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
