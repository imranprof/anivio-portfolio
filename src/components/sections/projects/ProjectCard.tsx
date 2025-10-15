import Image from "next/image";


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
    <div className="relative w-full aspect-square">
      <div className="main_img_thumb w-full h-full rounded-md overflow-hidden">
        <Image src={"/imgs/projects/01hero.jpg"}
          alt="ani-addons"
          height={1280}
          width={1920}
          className="w-full h-full object-cover" />
      </div>

      <div className="inside_img_thumb w-[40%] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src={"/imgs/projects/01hero1.jpg"}
          alt="thumb"
          width={1000}
          height={1000}
          className="w-full h-full object-cover" />
      </div>

      <div className="description">
        <div className="date absolute top-[2%] left-[2%] bg-black rounded-md p-1">2025</div>
        <div className="absolute top-1/2 flex justify-between w-full px-[20px]">
          <div className="title ">
            Animation Addons
          </div>
          <div className="tag">Web Animation</div>
        </div>
      </div>


    </div>
  )
}

export default ProjectCard