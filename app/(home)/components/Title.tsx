import React from 'react'

export default function Title({ text, className }: { text: string, className?: string }) {
    return (

        // <div className={className}>
        //     <h1 className='text-3xl font-bold -rotate-2 group-hover:text-green-400 transition-all'>Contact Me 📭</h1>
        //     <div className="w-40 h-2 bg-green-500 rounded-full "></div>
        //     <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
        // </div>
        <div className={className}>
            <div className="inline-block group hover:scale-105 transition-all hover:-rotate-2 cursor-pointer">
                <div className="-rotate-2 group-hover:text-green-500 transition-all">
                    <h1 className='text-3xl font-bold'>{text}</h1>
                    <div className="w-40 h-2 bg-green-500 rounded-full "></div>
                    <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
                </div>
            </div>
        </div>
    )
}
