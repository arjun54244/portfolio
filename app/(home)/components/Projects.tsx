import React from 'react'
import { SiAppwrite, SiBootstrap, SiCss3, SiHtml5, SiMysql, SiNextdotjs, SiPhp, SiReacthookform, SiReactquery, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
  const projects = [
    {
      title: "Portfolio web site",
      tech: [SiNextdotjs, SiTypescript, SiReactquery, SiTailwindcss],
      link: "https://portfolio-arjun54244.vercel.app/",
      cover: "/poject-1.png",
      background: "bg-indigo-500"
    },
    {
      title: "Dr. Minakshisoni",
      tech: [SiPhp, SiMysql, SiCss3, SiBootstrap],
      link: "https://drminakshisoni.com/",
      cover: "/poject-2.png",
      background: "bg-green-500"
    },
    {
      title: "Food.iso",
      tech: [SiHtml5, SiCss3, SiBootstrap],
      link: "https://arjun54244.github.io/Foods.iso/",
      cover: "/poject-3.png",
      background: "bg-sky-500"
    },
    {
      title: "Snapgram",
      tech: [ SiReactquery, SiAppwrite, SiReacthookform, SiTailwindcss],
      link: "https://snapgram-git-main-arjun54244.vercel.app/",
      cover: "/poject-4.png",
      background: "bg-fuchsia-500"
    },
  ];

  return (
    <div className='py-10 p-5 sm:p-0'>
      <Title className='flex flex-col items-center justify-center rotate-6' text='Projects 🎨' />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => (
          <Link href={project.link} key={index}>
            <div className={cn("p-5 rounded-md", project.background)}>
              <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                <div>
                  <h1 className='text-2xl font-bold'>{project.title}</h1>
                  <div className='flex items-center gap-5'>
                    {project.tech.map((Icon, index) => {
                      return <Icon className='w-8 h-8' key={index} />
                    })}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
