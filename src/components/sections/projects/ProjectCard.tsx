

type projectProps = {
  id: number;
  title: string;
  main_img: string;
  thumb_img: string;
  year: number;
  tag: string;
  slug: string;
}

const ProjectCard = () => {
  return (
    <div className="relative ">
      <div className="main_img_thumb">

      </div>

      <div className="inside_img_thumb">

      </div>

      <div className="description">
        <div className="date">2025</div>
        <div className="title">
          Animation Addons
        </div>
        <div className="tag">Web Animation</div>
      </div>


    </div>
  )
}

export default ProjectCard