"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiAppwrite, SiBootstrap, SiFirebase, SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiReact, SiSupabase, SiSvelte, SiTailwindcss, SiTypescript, SiVite, SiSpring, SiLaravel } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { text: "React", items: SiSpring },
    { text: "React", items: SiReact },
    { text: "Next.js", items: SiNextdotjs },
    { text: "Laravel", items: SiLaravel },
    { text: "Vite.js", items: SiVite },
    { text: "Tailwind", items: SiTailwindcss },
    { text: "Bootstrap", items: SiBootstrap },
    { text: "Git", items: SiGit },
    { text: "JavaScript", items: SiJavascript },
    { text: "TypeScript", items: SiTypescript },
    { text: "Node.js", items: SiNodedotjs },
    { text: "MongoDB", items: SiMongodb },
    { text: "Supabase", items: SiSupabase },
    { text: "Firebase", items: SiFirebase },
    { text: "Appwrite", items: SiAppwrite },
    { text: "PHP", items: SiPhp },
    { text: "MySql", items: SiMysql },
  ];
  
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title className='flex flex-col items-center justify-center' text='Skills🔪' />

      <HoverEffect items={skills} />
    </div>
  )
}
