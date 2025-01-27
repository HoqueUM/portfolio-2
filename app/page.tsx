"use client";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative"> 
      <nav className="fixed top-0 px-4 sm:px-8 pb-8 pt-4 bg-gradient-to-t from-white">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <div></div>
          <Link href="/"><div className="font-mono trace">rahulhoque [dot] com</div></Link>
        </div>
      </nav>     
      <main className="px-4 sm:px-8 pt-16 pb-24 max-w-4xl mx-auto">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h1 className="text-3xl font-medium">Rahul Hoque</h1>
            <div className="text-right flex flex-row gap-2">
              <a href="https://github.com/HoqueUM/" target="_blank"><FaGithub /></a> 
              <a href="https://www.linkedin.com/in/rahul-hoque/" target="blank"><FaLinkedin /></a> 
            </div>
          </div>

          <div className='w-full h-[.01rem] bg-black mt-2 trace-both element-to-animate'></div>            
          
          <div className="prose max-w-none trace-both-slow elment-to-animate">
            <p>
            Hi👋 I&apos;m Rahul, a junior at the University of Michigan studying computer science. I am passionate
            about software development, data science, and machine learning. I usually work in React, Python, and C++.
            </p>
          </div>

          <div className='w-full h-[.01rem] bg-black mt-2 trace-both element-to-animate'></div> 
            <div className="flex flex-row gap-4 font-mono">
                <a href="/projects/" className="trace"><p>projects</p></a>
                <a className="trace"><p>resume</p></a>
                <a href="mailto:rhoque@umich.edu" target="_blank" className="trace"><p>email</p></a>
            </div>  
          </div>
      </main>
    </div>
  );
}