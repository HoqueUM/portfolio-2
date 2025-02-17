"use client";
import Link from "next/link";
import { BsArrowReturnLeft } from "react-icons/bs";

export default function Home() {
  return (
    <div className="min-h-screen relative">     
      <main className="px-4 sm:px-8 pt-16 pb-24 max-w-4xl mx-auto">
      <nav className="top-0 pb-4 pt-4">
        <div className="flex">
            <Link href="/"><div className="font-mono trace"><BsArrowReturnLeft /></div></Link>
        </div>
      </nav> 
        <div className="flex font-mono">
            <div className="flex flex-col gap-4">
            <div><a href="https://gist.github.com/tykurtz/3548a31f673588c05c89f9ca42067bc4" target="_blank" className="trace w-min">Leetcode</a> | <a href="/dsa-notes" target="_blank" className="trace w-min">Notes</a> | <a href="https://docs.google.com/spreadsheets/d/1ZBXHpM3EIJHg3o8dX95TKBTbIu6gsLxU83aF-Aap4oA/edit?gid=0#gid=0" target="_blank" className="trace w-min">Spreadsheet</a> | Slides 109, 111, 113, and 114</div>
            <a href="https://docs.google.com/document/d/1MOeS2PZ4F2gF3IpguIPBLX0nctTQjfLS1A0CoHiQZcs/edit?tab=t.0" target="_blank" className="trace w-min">Scripts</a>
            <a href="https://rahulhoque.substack.com/publish/home" target="_blank" className="trace w-min">Substack</a>
        </div>
        </div>
      </main>
    </div>
  );
}