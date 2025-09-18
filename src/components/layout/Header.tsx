import Link from "next/link"

const Header = () => {
  return (
    <header className="h-[120px] w-full flex  items-center justify-between px-4 mx-auto">
      <div className="text-3xl font-sofia uppercase font-bold">AniVio</div>
      <nav className="flex gap-4 font-medium font-sofia text-2xl">
        <Link href={"#"} className="uppercase">Service</Link>
        <Link href={"#"} className="uppercase">Project</Link>
        <Link href={"#"} className="uppercase">About</Link>
        <Link href={"#"} className="uppercase">Contact</Link>
      </nav>
      <div>Button</div>

    </header>
  )
}

export default Header