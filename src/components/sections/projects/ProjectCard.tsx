import Image from "next/image";
import Link from "next/link";


type projectProps = {
  data: {
    id: number;
    title: string;
    main_img: string;
    thumb_img: string;
    year: number;
    tag: string;
    slug: string;
  }
}

const ProjectCard = ({ data }: projectProps) => {
  const { id, title, main_img, thumb_img, year, tag, slug } = data
  return (
    <Link href={`/projects/${slug}`} className="relative w-full aspect-square">
      <div className="main_img_thumb w-full h-full rounded-md overflow-hidden">
        <Image src={main_img}
          alt="ani-addons"
          height={1280}
          width={1920}
          className="w-full h-full object-cover" />
      </div>

      <div className="inside_img_thumb w-[40%] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src={thumb_img}
          alt="thumb"
          width={1000}
          height={1000}
          className="w-full h-full object-cover" />
      </div>

      <div className="description">
        <div className="date absolute top-[2%] left-[2%] bg-black rounded-md p-1">{year}</div>
        <div className="absolute top-1/2 flex justify-between w-full px-[20px]">
          <div className="title ">
            {title}
          </div>
          <div className="tag">{tag}</div>
        </div>
      </div>


    </Link>
  )
}

export default ProjectCard