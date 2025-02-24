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
              <div>Sliding Window | Two Pointers | Fast & Slow Pointers</div>
              <div>Merge Intervals | Cyclic Sort | In-Place Reversal of a LinkedList</div>
              <div>Tree BFS | Tree DFS | Two Heaps | Subsets</div>
              <div>Modified Binary Search | Top K Elements</div>
              <div>K-way Merge | Knapsack | Topological Sort | Matrix Traversal</div>
            <br />
            <div>
              <h1>Sliding Window</h1>
            </div>
        </div>
        </div>
      </main>
    </div>
  );
}