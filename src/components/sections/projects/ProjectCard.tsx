"use client"
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { hasProjectHoverAnimation } from "@/app/animations/hasProjectHoverAnimation";



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

  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    hasProjectHoverAnimation(cardRef);
  });

  return (
    <div ref={cardRef} className="relative w-full aspect-square group">
      <Link href={`/projects/${slug}`} className="">
        <div className="main_img_thumb w-full h-full rounded-md overflow-hidden">
          <Image src={main_img}
            alt="ani-addons"
            height={1280}
            width={1920}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
        </div>

        <div className="thumb-clip-anim [clip-path:inset(0%_100%_0%_0%)] w-[40%] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src={thumb_img}
            alt="thumb"
            width={1000}
            height={1000}
            className="w-full h-full object-cover" />
        </div>

        <div className="description">
          <div className="date absolute top-[5%] left-[5%] bg-black rounded-md py-1 px-2 font-sofia text-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300">{year}</div>
          <div className="absolute top-1/2 flex justify-between w-full px-[20px]">
            <div className="title ">
              {title}
            </div>
            <div className="tag">{tag}</div>
          </div>
        </div>


      </Link>
    </div>
  )
}

export default ProjectCard