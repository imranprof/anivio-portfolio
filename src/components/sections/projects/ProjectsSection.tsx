import ProjectCard from "@/components/sections/projects/ProjectCard"


const ProjectsSection = () => {
  return (
    <section className="inner-container grid grid-cols-1 md:grid-cols-2 gap-5">

      <ProjectCard />
      <ProjectCard />
    </section>
  )
}

export default ProjectsSection