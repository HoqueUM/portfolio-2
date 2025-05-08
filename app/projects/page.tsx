"use client";

import Project from '@/components/project';
import { BsArrowReturnLeft } from "react-icons/bs";
import Link from 'next/link';


export default function Projects() {

  return (
    <div className="min-h-screen relative">
      <main className="px-4 sm:px-8 pt-16 pb-24 max-w-4xl mx-auto">
      <nav className="top-0 pb-4 pt-4">
        <div className="flex">
          <Link href="/"><div className="font-mono trace"><BsArrowReturnLeft /></div></Link>
        </div>
      </nav> 
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Project name="NewDropz" image="/newdropz.png" description="A hub for new snack flavors." link="https://newdropz.com" />
              <Project name="RotKings" image="/rotkings_dark.png" description="Track and analyze Rotten Tomatoes Scores for Kalshi trading." link="https://rotkings.com" />
              <Project name="doomer.space" image="/doomer_dark.png" description="A collection of recent pessimistic headlines." link="https://doomer.space" />
          </div>
        </div>
      </main>
    </div>
  );
}