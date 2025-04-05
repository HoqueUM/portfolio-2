"use client";

// TODO: add "problem statement": which is basically just a description of how to identify what kind of problem is it.

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
              <a href="https://leetcode.com/explore/interview/card/cheatsheets/720/resources/4723/" target="_blank" className="w-min trace">Templates</a>
            </div>
            <div>
              <h1 className="font-bold">Sliding Window</h1>
              <br />
              <h2 className="font-bold">Problem Statement: </h2>
              <p>given an array/string find some minimum/maximum (or target) of it.</p>
              <br />
              The sliding window technique is a method of extracting information from a subarray.
              Depending on the problem, this could either require you to expand or contract the window.
              A really good &apos;pesudocode&apos; I found on the wonderful leetcode templates website gave this:
              <SyntaxHighlighter language="python" style={vscDarkPlus}>
              {
                
`def fn(arr):
    left = ans = curr = 0

    for right in range(len(arr)):
        # do logic here to add arr[right] to curr

        while WINDOW_CONDITION_BROKEN:
            # remove arr[left] from curr
            left += 1

        # update ans
    
    return ans`}
              </SyntaxHighlighter> 
              The code filled in will depend on the problem (of course), but &apos;required&apos; variables are as follows:
              <ul>
                <li>left: the left boundary of our window</li>
                <li>right: the right boundary of our window</li>
                <li>result (or final return value): the result we are looking for</li>
                <li>counter (or tracker): a counter that we can use to keep track of the window&apos;s state (can also be a dict, or list, or set)</li>
              </ul>        
            </div>
            <div>
            <h1 className="font-bold">Two Pointers (left and right)</h1>
            <br />
            <h2 className="font-bold">Problem Statement: </h2>
            <p>Given a sorted array, find an array/amount/minimum/maximum of goal such that it satisfies some constraint.</p>
            <br />
            The two pointer technique is a method of using two pointers to traverse a list or array.
            It allows you to do this in linear time. It requires a sorted array.
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`
def fn(arr):
    left = ans = 0
    right = len(arr) - 1
    
    # this could be nested in a loop (this keeps values locked while left and right are moving)
    while left < right:
        # do some logic here with left and right
        # could be a while loop, or if statement
        if CONDITION:
            left += 1
        else:
            right -= 1
    
    return ans

            `}
            </SyntaxHighlighter>
            This does not mean it will always be one loop every time. It can be nested loops as well.
            Most of the higher-level problems will require nested loops, with this pattern being in the inner loop.
            These are your &apos;required&apos; variables:
            <ul>
              <li>left: the left pointer</li>
              <li>right: the right pointer</li>
              <li>result (or final return value): the result we are looking for</li>
            </ul>
            </div>
            <div>
            <h1 className="font-bold">Two Pointers (fast and slow)</h1>
            <br />
            <h2 className="font-bold">Problem Statement: </h2>
            <p>Given a sequential data structure (like a linked list or array), determine a cycle, find cyclic properties, or locate position.</p>
            <br />
            The fast and slow pointer technique is a method of using two pointers to traverse a linked list or array.
            It allows you to do this in linear time.
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`
def fn(head):
    slow = head
    fast = head
    ans = 0

    while fast and fast.next:
        # do logic
        slow = slow.next
        fast = fast.next.next
    
    return ans

            `}
            </SyntaxHighlighter>
            This does not mean it will always be one loop every time. It can have multiple loops as well.
            Most of the higher-level problems will require multiple loops, with the help of a secondary DS.
            These are your &apos;required&apos; variables:
            <ul>
              <li>slow: the slow pointer</li>
              <li>fast: the fast pointer</li>
              <li>result (or final return value): the result we are looking for</li>
            </ul>
            </div>
            <div>
              <h1 className="font-bold">Intervals</h1>
              <br />
              Honestly this one kinda hard so we just gonna skip it for now.
              Going to move on to cyclic sort, which seems a bit more approachable.
        </div>
        </div>
        </div>
      </main>
    </div>
  );
}