"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen relative">     
      <main className="px-4 sm:px-8 pt-16 pb-24 max-w-4xl mx-auto">
        <div className="space-y-2">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col">
              <h1 className="text-3xl font-medium">Rahul Hoque</h1>
              <p className="font-mono text-sm text-gray-500 align-text-bottom">[rɔːˈhul ˈhɔːk]</p>
            </div>
            <div className="flex items-end self-end gap-4">
            </div>
          </div>

          <div className='w-full h-[.01rem] bg-black mt-2'></div>            
          
          <div className="prose max-w-none">
            <p>
              Hi👋 I&apos;m Rahul, a junior at the University of Michigan studying computer science. I am passionate
              about software development, data science, and machine learning. I usually work in React, Python, and C++.
            </p>
          </div>

          <div className='w-full h-[.01rem] bg-black mt-2'></div> 
          <div className="flex flex-row items-center justify-between w-full text-gray-500 font-mono text-sm">
          <div className="flex flex-row gap-4 items-center">
            <a href="/projects/" className="trace"><p>projects</p></a>
            <div className="bullet"></div>
            <a href="https://drive.google.com/file/d/1-Kkd105lWaRqflDbkSNRE-_fVm_iPPsF/view" target="_blank" className="trace text-gray-500"><p>resume</p></a>
            <div className="bullet"></div>
            <a href="mailto:rhoque@umich.edu" className="trace"><p>email</p></a>
            <div className="bullet"></div>
            <a href="/wordscapes-solver/" className="trace"><p>wordscape solver</p></a>
            <div className="bullet"></div>
            <div className="text-gray-500">rahulhoque [dot] com</div>
          </div>
          
          <div className="flex flex-row gap-3 items-center ml-auto">
            <a href="https://github.com/HoqueUM/" target="_blank" className=" hover:text-gray-800 transition-colors">
              <FaGithub size={16} />
            </a> 
            <a href="https://www.linkedin.com/in/rahul-hoque/" target="_blank" className=" hover:text-gray-800 transition-colors">
              <FaLinkedin size={16} />
            </a> 
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}