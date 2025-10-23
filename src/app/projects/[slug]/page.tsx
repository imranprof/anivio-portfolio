import projectsData from "@/content/projects.json"
import Link from "next/link";


interface Project {
  slug: string;
  title: string;
  description: string;
  main_img: string;
  thumb_img: string;
  year: number;
  tag: string;
  techs: string;
  live_link: string;
}

// ✅ Pre-generate all project pages
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: any }) {
  console.log(params)
  const resolvedParams = await params;
  const project = projectsData.find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl text-gray-500">Project not found 😢</h2>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden rounded-b-3xl">
        <img
          src={project.main_img}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-16 left-6 md:left-16 z-10">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4 tracking-tight">
            {project.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-300">
            <span className="px-4 py-1 text-sm rounded-full bg-white/10 backdrop-blur">
              {project.tag}
            </span>
            <span className="text-sm font-medium text-gray-400">
              {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        {/* Description */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            {project.description || (
              <>
                The{" "}
                <span className="font-medium text-white">{project.title}</span>{" "}
                is a visually engaging portfolio project built using{" "}
                <span className="font-medium text-white">{project.tag}</span>.
                It highlights advanced animations, smooth interactions, and
                modern layout practices that reflect high-end creative design.
              </>
            )}
          </p>
        </div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white/90">Year</h4>
            <p className="text-gray-400">{project.year}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white/90">
              Technologies
            </h4>
            <p className="text-gray-400">{project.techs}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-white/90">
              Category
            </h4>
            <p className="text-gray-400">Creative Portfolio</p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div className="relative h-[450px] rounded-2xl overflow-hidden group">
            <img
              src={project.thumb_img}
              alt="Project Thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative h-[450px] rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center text-gray-400 text-sm">
            <p className="max-w-xs text-center leading-relaxed">
              No Preview Now
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6">
          <Link href={"/projects"} className="px-8 py-3 rounded-full border border-white/20 hover:border-white/60 transition-all duration-300">
            ← Back to Projects
          </Link>
          <Link href={project.live_link} className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300">
            View Live Project
          </Link>
        </div>
      </section>
    </div>
  );
}
