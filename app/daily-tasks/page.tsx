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
            <a href="https://www.techinterviewhandbook.org/grind75/?weeks=26&hours=6" target="_blank" className="trace w-min"><p>Leetcode</p></a>
            <a href="https://www.joinleland.com/library/a/top-free-resources-for-gmat-gre-practice" target="_blank" className="trace w-min">GMAT</a>
            <div><a href="https://www.linkedin.com/jobs/search/?currentJobId=4002613588&keywords=2026%20summer%20software%20engineer&origin=SWITCH_SEARCH_VERTICAL" target="_blank" className="trace w-min">Internships</a> and <a href="https://www.linkedin.com/jobs/search/?currentJobId=4112827224&geoId=103644278&keywords=new%20grand%20software%20engineer&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true" target=" _blank" className="trace w-min">Jobs</a></div>
            <a href="https://docs.google.com/document/d/1MOeS2PZ4F2gF3IpguIPBLX0nctTQjfLS1A0CoHiQZcs/edit?tab=t.0" target="_blank" className="trace w-min">Scripts</a>
            <div><a href="https://github.com/HoqueUM/deepseek-market" target="_blank" className="trace w-min">Projects</a> and <a href="https://www.codecademy.com/profiles/script0959629902" target="_blank" className="trace w-min">Javascript</a></div>
        </div>
        </div>
      </main>
    </div>
  );
}