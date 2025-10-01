import { ServiceCard } from "./ServiceCard"


const services = [
  {
    title: "STRATEGY",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-foreground">
        <rect x="3" y="3" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="15" y="3" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="3" y="15" width="6" height="6" rx="1" fill="currentColor" />
        <rect x="15" y="15" width="6" height="6" rx="1" fill="currentColor" />
      </svg>
    ),
    services: ["Visual Research", "Mitbewerber Analyse", "Wireframes", "Content Mapping", "User Flow", "Konzepte"],
    description:
      "We develop comprehensive strategies that form the foundation of successful digital products. From market research and competitor analysis to user flow optimization and concept development, we ensure every project starts with a solid strategic foundation.",
  },
  {
    title: "DESIGN",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-foreground">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" fill="currentColor" />
      </svg>
    ),
    services: [
      "Unternehmenswebsites",
      "Marketing Websites",
      "Design System",
      "Animation",
      "Design Support",
      "Barrierefreies Design",
    ],
    description:
      "Our design expertise spans from corporate websites to comprehensive design systems. We create visually stunning, accessible designs that not only look great but also drive business results and provide exceptional user experiences.",
  },
  {
    title: "BUILD",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-foreground">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="7" y="7" width="10" height="10" rx="1" fill="currentColor" />
      </svg>
    ),
    services: [
      "Webflow Entwicklung",
      "Web Animation",
      "Webflow CMS",
      "Barrierefreie Entwicklung",
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 w-full h-full max-h-[600px]">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              front={
                <div className="h-full flex flex-col">
                  {/* Top Icon and Title */}
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
                    {service.icon}
                  </div>

                  {/* Service List */}
                  <div className="flex-1 space-y-4">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="bg-stone-200 rounded-lg p-4 text-center font-medium text-foreground">
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Icon and Title (Rotated) */}
                  <div className="flex items-center justify-between mt-8 rotate-180">
                    <span className="text-xl font-semibold text-foreground">{service.title}</span>
                    {service.icon}
                  </div>
                </div>
              }
              back={
                <div className="h-full flex flex-col justify-center items-center text-center p-8">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-6">{service.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{service.description}</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
