import projectsData from "@/content/projects.json"

type PageProps = {
  params: {
    slug: string;
  };
};

interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
}

// ✅ Pre-generate all project pages
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: PageProps) {
  const project = (projectsData as Project[]).find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl text-gray-500">Project not found 😢</h2>
      </section>
    );
  }

  return (
    <section className="min-h-screen p-10 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 max-w-2xl mb-6">{project.description}</p>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl w-full max-w-2xl shadow-md"
        />
      )}
    </section>
  );
}
