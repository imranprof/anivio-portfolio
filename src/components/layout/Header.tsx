import Link from "next/link"

const Header = () => {
  return (
    <header className="h-[120px] w-full flex  items-center justify-between px-4 mx-auto">
      <div className="text-3xl font-sofia uppercase font-bold">AniVio</div>
      <nav className="flex gap-4 font-medium font-sofia text-xl">
        <Link href={"#"} className="nav-menu-item"><span className="relative  z-[2]">
          Service</span></Link>
        <Link href={"#"} className="nav-menu-item"><span className="relative  z-[2]">Project</span></Link>
        <Link href={"#"} className="nav-menu-item"><span className="relative  z-[2]">About</span></Link>
        <Link href={"#"} className="nav-menu-item"><span className="relative  z-[2]">Contact</span></Link>
      </nav>
      <div>Button</div>

    </header>
  )
}

export default Header