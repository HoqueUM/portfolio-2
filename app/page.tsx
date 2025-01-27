"use client";
import Navbar from "@/components/Navbar";
import { FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <main className="px-4 sm:px-8 pt-16 pb-24 max-w-4xl mx-auto">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h1 className="text-3xl font-medium">Rahul Hoque</h1>
            <div className="text-right flex flex-row gap-2">
              <a href="https://github.com/HoqueUM/" target="_blank"><FaGithub /></a> 
              <a href="https://www.linkedin.com/in/rahul-hoque/" target="blank"><FaLinkedin /></a> 
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
            <p className="font-medium text-xl">Contact:</p> <a href="mailto:rhoque@umich.edu" target="_blank"><p className="text-xs">rhoque [at] umich [dot] edu</p></a>         
          </div>
      </main>

      <footer className="fixed bottom-0 w-full px-4 sm:px-8 pb-8 pt-4 bg-gradient-to-t from-white">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <div></div>
          <div className="font-mono">rahulhoque [dot] com</div>
        </div>
      </footer>
    </div>
  );
}