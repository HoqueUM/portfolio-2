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
    left = 0
    right = 0
    ans = list/value
    tracker = set/hasmap

    while right < len(arr):
        # do logic here to add arr[right] to tracker

        while WINDOW_CONDITION_BROKEN:
            # remove arr[left] from curr
            left += 1

        # update ans
        right += 1
    
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
            <h2 className="font-bold">Splitting a linked list</h2>
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
{`

`}
            </SyntaxHighlighter>
            </div>
            <div>
              <h1 className="font-bold">Intervals</h1>
              <br />
              Honestly this one kinda hard so we just gonna skip it for now.
              Going to move on to cyclic sort, which seems a bit more approachable.
        </div>
        <div>
            <h1 className="font-bold">Cyclic Sort</h1>
            <br />
            <h2 className="font-bold">Problem Statement: </h2>
            <p>Given an array of values [0/1, n] (VERY IMPORTANT) sort/arrange them.</p>
            <br />
            The cyclic sort technique is a method of sorting an array in linear time. The key difference
            from other sorting algorithms is that the constraints of the values in the array are known (sequential).
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`
def fn(arr):
    i = 0
    while i < len(arr):
      if arr[i] != i: # condition can be changed given the problem
        arr[arr[i]], arr[i] = arr[i], arr[arr[i]]
      else:
        i += 1

    return arr
            `}
            </SyntaxHighlighter>
            <h2 className="font-bold">Alternative: Negative Marking</h2>
            <br />
            A lot of the problems that were labeled cyclic sort by Grok could also be solved using negative marking.
            This made the problem a lot easier to solve, and it is a good alternative to ones that are not
            as clear when solving with cyclic sort.
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`
            
def fn(arr):
    ans = # list/value
    for i in range(len(arr)):
        index = abs(arr[i])
        if arr[index] >= 0:
              # mark
    for i in range(len(arr)):
        if arr[i] > 0:
          # update ans

            `}
            </SyntaxHighlighter> 

        <h2 className="font-bold">Some helpful facts</h2>
        An array can be represented as a graph, with each index being a node and the value being the edge.
        Al ways fix the current index, do not move on until it is correct.  
        </div>
        </div>
        <div>
            <h1 className="font-bold">Reversing a linked list</h1>
            <br />
            <h2 className="font-bold">Problem Statement: </h2>
            <p>Sort a linked list at any point.</p>
            <br />
            A technique of sorting a linked list in place and in linear time.
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`
def fn(head):
  curr = head
  prev = None

  while curr:
      tmp = curr.next
      curr.next = prev
      prev = curr
      curr = tmp
  
  return prev

            `}
            </SyntaxHighlighter>
            This does not mean that it will be the whole list everytime. It could be
            half, or a certain amount etc.
            These are your &apos;required&apos; variables:
            <ul>
              <li>curr: the current node to be reversed</li>
              <li>prev: the next next node of the current pointer.</li>
              <li>tmp: a holder for the next pointer while it is being swapped with prev.</li>
            </ul>
            </div>
        </div>
      </main>
    </div>
  );
}