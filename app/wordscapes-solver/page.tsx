import { Inter } from "next/font/google";
import DisplayOutput from "@/components/DisplayOutput";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative min-h-screen${inter.className}`}
    >  
    <div className="px-4 sm:px-8 pt-16 pb-24 max-w-4xl mx-auto">
      <nav className="top-0 pb-4 pt-4">
        <div className="flex">
          <Link href="/"><div className="font-mono trace">rahulhoque [dot] com</div></Link>
        </div>
      </nav> 
      <div className="flex flex-col items-center justify-center ">
      <p className="z-30 p-4 text-4xl"> Wordscapes Solver</p>
      <DisplayOutput />
      </div>
      </div>
    </main>
  );
}