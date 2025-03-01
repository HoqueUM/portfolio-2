"use client";
import Link from "next/link";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Home() {
  return (
    <div className="min-h-screen relative">     
      <main className="px-4 sm:px-8 pt-16 pb-24 max-w-4xl mx-auto">
      <nav className="top-0 pb-4 pt-4">
        <div className="flex">
            <Link href="/daily-tasks"><div className="trace"><BsArrowReturnLeft /></div></Link>
        </div>
      </nav> 
        <div className="flex">
            <div className="flex flex-col gap-4">
              <div>Sliding Window | Two Pointers | Fast & Slow Pointers</div>
              <div>Merge Intervals | Cyclic Sort | In-Place Reversal of a LinkedList</div>
              <div>Tree BFS | Tree DFS | Two Heaps | Subsets</div>
              <div>Modified Binary Search | Top K Elements</div>
              <div>K-way Merge | Knapsack | Topological Sort | Matrix Traversal</div>
            <br />
            <div>
              <h1 className="font-bold">Sliding Window</h1>
              The sliding window technique is a method of extracting information from a subarray.
              Depending on the problem, this could either require you to expand or contract the window.
              A really good &apos;pesudocode&apos; I found <a href="https://medium.com/@timpark0807/leetcode-is-easy-sliding-window-c44c11cc33e1" target="blank" className="underline">here</a> gave this:
              <SyntaxHighlighter language="python" style={vscDarkPlus}>
              {
                
`def sliding_window(nums):
  # Iterate over elements in our input, this is usually while right < len(nums)...SOME PROBLEMS REQUIRE DOUBLE LOOP
      # Expand the window
      # Meet the condition to stop expansion
          # Process the current window   
          # Contract the window`}
              </SyntaxHighlighter> 
              The code filled in will depend on the problem (of course), but &apos;required&apos; variables are as follows:
              <ul>
                <li>left: the left boundary of our window</li>
                <li>right: the right boundary of our window</li>
                <li>result (or final return value): the result we are looking for</li>
                <li>counter (or tracker): a counter that we can use to keep track of the window&apos;s state</li>
              </ul>        
            </div>
        </div>
        </div>
      </main>
    </div>
  );
}