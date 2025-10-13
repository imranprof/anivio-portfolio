import About from "@/components/sections/home/About";
import CTA from "@/components/sections/home/CTA";
import Hero from "@/components/sections/home/Hero";
import { Service } from "@/components/sections/home/service/Service";





export default function Home() {
  return (
    <main className="bg-stone-100">
      <Hero />
      <About />
      <Service />
      <CTA />
    </main>
  );
}
