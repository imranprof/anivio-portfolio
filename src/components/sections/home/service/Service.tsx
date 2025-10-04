import { ServiceCard } from "./ServiceCard"


const services = [
  {
    title: "STRATEGY",
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="w-full h-full"><path fill="currentColor" d="M10 0h10v10H10zM0 10h10v10H0z"></path></svg>

    ),
    services: ["Visual Research", "Mitbewerber Analyse", "Wireframes", "Content Mapping", "User Flow"],
    description:
      "We develop comprehensive strategies that form the foundation of successful digital products. From market research and competitor analysis to user flow optimization and concept development, we ensure every project starts with a solid strategic foundation.",
  },
  {
    title: "DESIGN",
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true" className="w-full h-full"><path d="M20 0H6v2h2v4h2v2h2v2h2V8h2V6h2V2h2V0ZM6 10v2H4v2H2v4H0v2h14v-2h-2v-4h-2v-2H8v-2H6Z" fill="currentColor"></path></svg>

    ),
    services: [
      "Unternehmenswebsites",
      "Marketing Websites",
      "Design System",
      "Animation",
      "Design Support",
    ],
    description:
      "Our design expertise spans from corporate websites to comprehensive design systems. We create visually stunning, accessible designs that not only look great but also drive business results and provide exceptional user experiences.",
  },
  {
    title: "BUILD",
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true" className="w-full h-full"><path fill="currentColor" fillRule="evenodd" d="M0 0h20v20H0V0Zm4 16v-2H2V6h2V4h2V2h8v2h2v2h2v8h-2v2h-2v2H6v-2H4Z" clipRule="evenodd"></path></svg>
    ),
    services: [
      "Webflow Entwicklung",
      "Web Animation",
      "Webflow CMS",
      "Technisches SEO",
      "Frontend Support",
    ],
    description:
      "We bring designs to life with cutting-edge development techniques. From custom Webflow development and advanced animations to accessible coding and technical SEO, we build digital products that perform flawlessly across all devices.",
  },
]

export function Service() {
  return (
    <section className="container h-screen bg-stone-100 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
        <h1 className="text-4xl font-bold text-foreground">Service</h1>
        <p className="text-lg text-foreground max-w-md text-right font-medium">
          Wenn alles gleich ist, ist es die größte Chance, anders zu sein.
        </p>
      </div>

      {/* Main Content - 3 Large Cards */}
      <div className="h-full w-full flex items-center justify-center px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 w-full h-full ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
