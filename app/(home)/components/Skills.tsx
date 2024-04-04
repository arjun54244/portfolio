"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiSupabase, SiSvelte, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {
  const skills = [
    { text: "React", items: SiReact },
    { text: "Next.js", items: SiNextdotjs },
    { text: "Tailwind", items: SiTailwindcss },
    { text: "Git", items: SiGit },
    { text: "JavaScript", items: SiJavascript },
    { text: "TypeScript", items: SiTypescript },
    { text: "Node.js", items: SiNodedotjs },
    { text: "Supabase", items: SiSupabase },
    { text: "Vite.js", items: SiSvelte },
  ];
  
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title className='flex flex-col items-center justify-center' text='Skills🔪' />

      <HoverEffect items={skills} />
    </div>
  )
}
