"use client";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
  <div>
    <Navbar />
    <div className="fixed bottom-0 right-0 p-8 font-mono pb-12">
      rahulhoque [dot] com      
    </div>
    <div className="fixed bottom-0 left-0 p-8">
        <div className="fixed top-1/3 left-0 transform -translate-y-1/2 p-8">
          <div className="flex flex-col space-y-2 text-wrap w-[45rem]">
            <div className="flex flex-row">
              <h1 className='text-3xl leading-none'>
                Rahul Hoque
              </h1>
              <p className="fixed right-0">GH+LI</p>
            </div>
            <div className='w-full h-[.01rem] bg-black mt-2'></div>            
            <p>This is the about section so it will keep going and going and going</p>
            <div className='w-full h-[.01rem] bg-black mt-2'></div>
          </div>
        </div>
      </div>
  </div>
  );
}
