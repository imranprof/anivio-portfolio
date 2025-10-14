"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {

  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={cn("h-[120px] w-full flex  items-center justify-between px-4 mx-auto", pathname === "/projects" && "bg-black")}>
      <Link className={cn("text-3xl font-sofia uppercase font-bold", pathname === "/projects" && "text-white")} href={"/"}>AniVio</Link>
      <nav className="flex gap-4 font-medium font-poppin text-[16px]">
        {/* <Link href={"/"} className="nav-menu-item"><span className="relative  z-[2]">
          Service</span></Link>
        <Link href={"/projects"} className="nav-menu-item"><span className="relative  z-[2]">Projects</span></Link>
        <Link href={"#"} className="nav-menu-item"><span className="relative  z-[2]">About</span></Link>
        <Link href={"/contact"} className="nav-menu-item"><span className="relative  z-[2]">Contact</span></Link> */}

        {
          navItems.map(({ href, label }) => (
            <Link key={href} href={href} className={cn("nav-menu-item", pathname === href &&
              "text-white before:!opacity-100")}><span className="relative  z-[2]">{label}</span></Link>
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