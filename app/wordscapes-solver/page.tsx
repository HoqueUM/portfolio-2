import { Inter } from "next/font/google";
import DisplayOutput from "@/components/DisplayOutput";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative min-h-screen${inter.className}`}
    >
        <nav className="top-0 px-4 sm:px-8 pb-8 pt-4">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <div></div>
          <Link href="/"><div className="font-mono trace">rahulhoque [dot] com</div></Link>
        </div>
      </nav> 
      <div className="flex flex-col items-center justify-center ">
      <p className="z-30 p-4 text-4xl"> Wordscapes Solver</p>
      <DisplayOutput />
      </div>
    </main>
  );
}