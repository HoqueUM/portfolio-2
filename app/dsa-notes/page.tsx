"use client";
import Link from "next/link";
import { BsArrowReturnLeft } from "react-icons/bs";

export default function Home() {
  return (
    <div className="min-h-screen relative">     
      <main className="px-4 sm:px-8 pt-16 pb-24 max-w-4xl mx-auto">
      <nav className="top-0 pb-4 pt-4">
        <div className="flex">
            <Link href="/daily-tasks"><div className="font-mono trace"><BsArrowReturnLeft /></div></Link>
        </div>
      </nav> 
        <div className="flex font-mono">
            <div className="flex flex-col gap-4">
            work in progress...
        </div>
        </div>
      </main>
    </div>
  );
}