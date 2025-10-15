import ProjectCard from "@/components/sections/projects/ProjectCard"
import projectsData from "@/content/projectList.json"


const ProjectsSection = () => {
  return (
    <section className="inner-container grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
      {
        projectsData.map((item) => (
          <ProjectCard data={item} key={item.id} />
        ))
      }
    </section>
  )
}

export default ProjectsSection