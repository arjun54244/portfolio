import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {
    const socials = [
        {
            Link: "https://www.linkedin.com/in/arjun-sharma-b1b50a259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            Lable: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            Link: "https://github.com/arjun54244",
            Lable: "Github",
            Icon: SiGithub,
        },
        {
            Link: "https://www.instagram.com/as_code54244/",
            Lable: "Instagram",
            Icon: SiInstagram,
        },
    ]

    return (
        <nav className={cn('py-10 px-5 flex justify-between items-center' ,className)}>
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
                Arjun Sharma👨‍💻👨🏻
                </h1>
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon
                    return <Link href={social.Link} key={index} aria-label={social.Lable}>
                        <Icon className='h-5 w-5 hover:scale-125 transition-all'/>
                    </Link>
                })}
            </div>
        </nav>
    )
}
