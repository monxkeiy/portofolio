import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'

interface ProjectCardProps {
  title: string
  description: string
  img: string
  tech: Array<string>
  linkGithub: string
}

const ProjectCard = ({title, description, img,tech, linkGithub} : ProjectCardProps ) => {
  return (
    <CardContainer className="inter-var m-0 p-0">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gradient-to-r from-[rgba(4,7,29,1)] to-[rgba(12,14,35,1)] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[35rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-extrabold tracking-wide text-neutral-600 dark:text-white mt-3 font-roboto"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-start text-md tracking-wider  mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        <div className='flex flex-row justify-between items-center'>
          <CardItem
            translateZ={20}
            className="px-4 py-2 text-xs font-normal flex flex-wrap mt-4"
          >
            {
              tech.map((tech, idx) => (
                <button key={idx} className='p-3 rounded-full border border-slate-600 bg-slate-900 -ml-3'>
                  <Image src={`/${tech}.png`} alt={tech} width={20} height={20}/>
                </button>
              ))
            }
          </CardItem>
          <CardItem
            translateZ={50}
            as={Link}
            href={linkGithub}
            target="__blank"
            className="mt-3 flex items-center justify-center px-6 rounded-xl text-xs font-normal text-white border gap-1 border-slate-500 h-9"
          >
            Visit<MdArrowOutward className='text-xl'/>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default ProjectCard
