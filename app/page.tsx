"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen relative">     
      <main className="px-4 sm:px-8 pt-8 sm:pt-16 pb-12 sm:pb-24 max-w-4xl mx-auto">
        <div className="space-y-4">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between w-full">
            <div className="flex flex-col mb-2 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl font-medium">Rahul Hoque</h1>
              <p className="font-mono text-xs sm:text-sm text-gray-500">[rɔːˈhul ˈhɔːk]</p>
            </div>
            <div className="flex items-center gap-3 sm:self-end mt-2 sm:mt-0">
              <a href="https://github.com/HoqueUM/" target="_blank" className="hover:text-gray-800 transition-colors">
                <FaGithub size={16} />
              </a> 
              <a href="https://www.linkedin.com/in/rahul-hoque/" target="_blank" className="hover:text-gray-800 transition-colors">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          <div className='w-full h-[.01rem] bg-black mt-2'></div> 
          
          <div className="prose max-w-none">
            <p className="text-sm sm:text-base">
              Hi👋 I&apos;m Rahul, a junior at the University of Michigan studying computer science. I am passionate
              about software development, data science, and machine learning. I usually work in React, Python, and C++.
            </p>
          </div>

          <div className='w-full h-[.01rem] bg-black mt-2'></div> 

          {/* Navigation Links - Stacked on mobile, horizontal on larger screens */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full text-gray-500 font-mono text-xs sm:text-sm">
            <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
              <a href="/projects/" className="hover:text-gray-800 transition-colors pb-2 sm:pb-0">projects</a>
              <div className="hidden sm:block bullet"></div>
              <a href="https://drive.google.com/file/d/1-Kkd105lWaRqflDbkSNRE-_fVm_iPPsF/view" target="_blank" className="hover:text-gray-800 transition-colors pb-2 sm:pb-0">resume</a>
              <div className="hidden sm:block bullet"></div>
              <a href="mailto:rhoque@umich.edu" className="hover:text-gray-800 transition-colors pb-2 sm:pb-0">email</a>
              <div className="hidden sm:block bullet"></div>
              <a href="/wordscapes-solver/" className="hover:text-gray-800 transition-colors pb-2 sm:pb-0">wordscape solver</a>
              <div className="hidden sm:block bullet"></div>
              <div className="text-gray-500 pt-1 sm:pt-0">rahulhoque [dot] com</div>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}