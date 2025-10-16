"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { hasScrambleText } from "@/app/animations/hasScrambleText";

const Header = () => {

  const pathname = usePathname();

  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    hasScrambleText();
  }, { scope: containerRef });

  const navItems = [
    { href: "/", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header ref={containerRef} className={cn("h-[120px] w-full flex  items-center justify-between px-4 container", pathname === "/projects" && "bg-black")}>
      <Link className={cn("text-3xl font-sofia uppercase font-bold", pathname === "/projects" && "text-white")} href={"/"}>AniVio</Link>
      <nav className="flex gap-4 font-medium font-poppin text-[16px]">
        {
          navItems.map(({ href, label }) => (
            <Link key={href} href={href} className={cn("nav-menu-item", pathname === href &&
              "text-white before:!opacity-100")}><span className="has-scramble-text relative  z-[2]" data-text={label}>{label}</span></Link>
          ))
        }
      </nav>
      <Button>
        Lets's Talk
      </Button>

    </header>
  )
}

export default Header