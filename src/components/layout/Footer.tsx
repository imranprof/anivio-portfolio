"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      setCurrentTime(now)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer-container bg-black text-white min-h-[50vh] flex flex-col justify-between p-8 md:p-12 lg:p-16 font-mono">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left: CTA Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-mono uppercase text-sm"
          >
            How does it work?
          </Button>
          <Button className="bg-[#d4ff00] text-black hover:bg-[#c4ef00] rounded-full px-6 font-mono uppercase text-sm">
            <ArrowRight className="w-4 h-4 mr-2" />
            Process
          </Button>
        </div>

        {/* Right: Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16">
          {/* Column 1: Main Links */}
          <nav className="flex flex-col gap-4">
            <Link href="/service" className="uppercase text-sm hover:text-[#d4ff00] transition-colors">
              Service
            </Link>
            <Link href="/process" className="uppercase text-sm hover:text-[#d4ff00] transition-colors">
              Process
            </Link>
            <Link href="/pricing" className="uppercase text-sm hover:text-[#d4ff00] transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="uppercase text-sm hover:text-[#d4ff00] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Column 2: Social Links */}
          <nav className="flex flex-col gap-4">
            <Link
              href="https://webflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-sm hover:text-[#d4ff00] transition-colors inline-flex items-center gap-2"
            >
              Webflow
              <ExternalLink className="w-3 h-3" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-sm hover:text-[#d4ff00] transition-colors inline-flex items-center gap-2"
            >
              LinkedIn
              <ExternalLink className="w-3 h-3" />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-sm hover:text-[#d4ff00] transition-colors inline-flex items-center gap-2"
            >
              X.com
              <ExternalLink className="w-3 h-3" />
            </Link>
            <Link
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-sm hover:text-[#d4ff00] transition-colors inline-flex items-center gap-2"
            >
              Dribbble
              <ExternalLink className="w-3 h-3" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-sm hover:text-[#d4ff00] transition-colors inline-flex items-center gap-2"
            >
              Instagram
              <ExternalLink className="w-3 h-3" />
            </Link>
          </nav>

          {/* Column 3: Legal Links */}
          <nav className="flex flex-col gap-4">
            <Link href="/imprint" className="uppercase text-sm hover:text-[#d4ff00] transition-colors">
              Imprint
            </Link>
            <Link href="/privacy" className="uppercase text-sm hover:text-[#d4ff00] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="uppercase text-sm hover:text-[#d4ff00] transition-colors">
              Terms
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-sm uppercase">
        {/* Left: Copyright */}
        <div className="flex items-center gap-3">
          <span>©2025 Anivio</span>
          <span className="text-[#d4ff00]">✦</span>
          <span className="text-xs text-gray-500">Y2K Design</span>
        </div>

        {/* Center: Time & Location */}
        <div className="flex items-center gap-3">
          <span className="text-[#d4ff00]">✦</span>
          <span>{currentTime ? currentTime : "00:00"} Dhaka</span>
          <span className="text-[#d4ff00]">✦</span>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-3">
          <button onClick={scrollToTop} className="hover:text-[#d4ff00] transition-colors uppercase">
            Back to top
          </button>
          <span>♪ ♪ ♪</span>
          <span className="text-[#d4ff00]">✦</span>
          <span className="text-xs text-gray-500">3D2Y</span>
        </div>
      </div>
    </footer>
  )
}
