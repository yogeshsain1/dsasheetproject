// ============================================================
// DSA Mastery Sheet — Full Data
// Extracted & expanded from risingbrain.org/sheet
// ============================================================

const DSA_DATA = [
  {
    id: "topic_0001",
    name: "Array",
    icon: "📦",
    colorIdx: 0,
    desc: "Fundamental collection of elements stored at contiguous memory locations.",
    subtopics: [
      {
        id: "sub_0001",
        name: "Two-Pointer",
        desc: "Use two indices that move towards or away from each other to reduce redundant comparisons.",
        problems: [
          { id:"p001", name:"Two Sum II – Input Array Is Sorted", difficulty:"Easy",   lc:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
          { id:"p002", name:"3Sum",                                difficulty:"Medium", lc:"https://leetcode.com/problems/3sum/" },
          { id:"p003", name:"Container With Most Water",           difficulty:"Medium", lc:"https://leetcode.com/problems/container-with-most-water/" },
          { id:"p004", name:"Trapping Rain Water",                 difficulty:"Hard",   lc:"https://leetcode.com/problems/trapping-rain-water/" },
          { id:"p005", name:"Remove Duplicates from Sorted Array", difficulty:"Easy",   lc:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
          { id:"p006", name:"Move Zeroes",                         difficulty:"Easy",   lc:"https://leetcode.com/problems/move-zeroes/" },
        ]
      },
      {
        id: "sub_0002",
        name: "Sliding Window",
        desc: "Maintain a window of fixed size or expand/shrink it to satisfy a condition.",
        problems: [
          { id:"p007", name:"Best Time to Buy and Sell Stock",               difficulty:"Easy",   lc:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
          { id:"p008", name:"Maximum Sum Subarray of Size K",                difficulty:"Easy",   lc:"https://www.geeksforgeeks.org/window-sliding-technique/" },
          { id:"p009", name:"Longest Subarray with Sum K (positives)",       difficulty:"Medium", lc:"https://www.geeksforgeeks.org/longest-sub-array-sum-k/" },
          { id:"p010", name:"Count Occurrences of Anagram",                  difficulty:"Medium", lc:"https://www.geeksforgeeks.org/count-occurrences-of-anagram/" },
          { id:"p011", name:"Maximum of all subarrays of size k",            difficulty:"Hard",   lc:"https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/" },
          { id:"p012", name:"Variable Size Sliding Window",                  difficulty:"Medium", lc:"https://leetcode.com/problems/minimum-size-subarray-sum/" },
          { id:"p013", name:"Fruit Into Baskets",                            difficulty:"Medium", lc:"https://leetcode.com/problems/fruit-into-baskets/" },
          { id:"p014", name:"Longest Subarray with At Most K Distinct chars",difficulty:"Medium", lc:"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/" },
        ]
      },
      {
        id: "sub_0003",
        name: "Prefix Sum",
        desc: "Precompute cumulative sums so any subarray or range sum can be answered in O(1).",
        problems: [
          { id:"p015", name:"Range Sum Query – Immutable",       difficulty:"Easy",   lc:"https://leetcode.com/problems/range-sum-query-immutable/" },
          { id:"p016", name:"Find Pivot Index",                  difficulty:"Easy",   lc:"https://leetcode.com/problems/find-pivot-index/" },
          { id:"p017", name:"Subarray Sum Equals K",             difficulty:"Medium", lc:"https://leetcode.com/problems/subarray-sum-equals-k/" },
          { id:"p018", name:"Product of Array Except Self",      difficulty:"Medium", lc:"https://leetcode.com/problems/product-of-array-except-self/" },
          { id:"p019", name:"Continuous Subarray Sum",           difficulty:"Medium", lc:"https://leetcode.com/problems/continuous-subarray-sum/" },
          { id:"p020", name:"Number of Ways to Split Array",     difficulty:"Medium", lc:"https://leetcode.com/problems/number-of-ways-to-split-array/" },
        ]
      },
      {
        id: "sub_0004",
        name: "Kadane's Algorithm",
        desc: "Track the best subarray sum ending at each index and update the global maximum.",
        problems: [
          { id:"p021", name:"Maximum Subarray",                         difficulty:"Medium", lc:"https://leetcode.com/problems/maximum-subarray/" },
          { id:"p022", name:"Maximum Product Subarray",                 difficulty:"Medium", lc:"https://leetcode.com/problems/maximum-product-subarray/" },
          { id:"p023", name:"Maximum Sum Circular Subarray",            difficulty:"Medium", lc:"https://leetcode.com/problems/maximum-sum-circular-subarray/" },
          { id:"p024", name:"Subarray with Maximum Sum (print subarray)",difficulty:"Medium", lc:"https://www.geeksforgeeks.org/print-subarray-with-maximum-sum/" },
          { id:"p025", name:"Longest Turbulent Subarray",              difficulty:"Medium", lc:"https://leetcode.com/problems/longest-turbulent-subarray/" },
        ]
      },
    ]
  },
  {
    id: "topic_0002",
    name: "Strings",
    icon: "🔤",
    colorIdx: 1,
    desc: "Sequence of characters and common string manipulation patterns.",
    subtopics: [
      {
        id: "sub_0005",
        name: "Two-Pointer (Palindrome)",
        desc: "Compare characters from both ends and move inward until the condition fails.",
        problems: [
          { id:"p026", name:"Valid Palindrome",                        difficulty:"Easy",   lc:"https://leetcode.com/problems/valid-palindrome/" },
          { id:"p027", name:"Palindrome Number",                       difficulty:"Easy",   lc:"https://leetcode.com/problems/palindrome-number/" },
          { id:"p028", name:"Valid Palindrome II",                     difficulty:"Easy",   lc:"https://leetcode.com/problems/valid-palindrome-ii/" },
          { id:"p029", name:"Longest Palindromic Substring (expand)", difficulty:"Medium", lc:"https://leetcode.com/problems/longest-palindromic-substring/" },
          { id:"p030", name:"Palindromic Substrings (count)",          difficulty:"Medium", lc:"https://leetcode.com/problems/palindromic-substrings/" },
        ]
      },
      {
        id: "sub_0006",
        name: "Sliding Window (String)",
        desc: "Maintain a moving window and adjust its size to satisfy character constraints.",
        problems: [
          { id:"p031", name:"Longest Substring Without Repeating Chars",  difficulty:"Medium", lc:"https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
          { id:"p032", name:"Minimum Window Substring",                    difficulty:"Hard",   lc:"https://leetcode.com/problems/minimum-window-substring/" },
          { id:"p033", name:"Permutation in String",                       difficulty:"Medium", lc:"https://leetcode.com/problems/permutation-in-string/" },
          { id:"p034", name:"Find All Anagrams in a String",               difficulty:"Medium", lc:"https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
          { id:"p035", name:"Longest Repeating Character Replacement",     difficulty:"Medium", lc:"https://leetcode.com/problems/longest-repeating-character-replacement/" },
          { id:"p036", name:"Minimum Window Subsequence",                  difficulty:"Hard",   lc:"https://leetcode.com/problems/minimum-window-subsequence/" },
        ]
      },
    ]
  },
  {
    id: "topic_0003",
    name: "Binary Search",
    icon: "🔍",
    colorIdx: 2,
    desc: "Efficient search algorithm that divides the search interval in half.",
    subtopics: [
      {
        id: "sub_0007",
        name: "Classic Binary Search",
        desc: "Divide-and-conquer → narrow search space in sorted array.",
        problems: [
          { id:"p037", name:"Binary Search",                                         difficulty:"Easy",   lc:"https://leetcode.com/problems/binary-search/" },
          { id:"p038", name:"Search Insert Position",                                difficulty:"Easy",   lc:"https://leetcode.com/problems/search-insert-position/" },
          { id:"p039", name:"First Bad Version",                                     difficulty:"Easy",   lc:"https://leetcode.com/problems/first-bad-version/" },
          { id:"p040", name:"Search in Rotated Sorted Array",                        difficulty:"Medium", lc:"https://leetcode.com/problems/search-in-rotated-sorted-array/" },
          { id:"p041", name:"Find Minimum in Rotated Sorted Array",                  difficulty:"Medium", lc:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
          { id:"p042", name:"Find Peak Element",                                     difficulty:"Medium", lc:"https://leetcode.com/problems/find-peak-element/" },
        ]
      },
      {
        id: "sub_0008",
        name: "Lower / Upper Bound",
        desc: "Find first/last occurrence or smallest/largest index satisfying a condition.",
        problems: [
          { id:"p043", name:"Find First and Last Position of Element", difficulty:"Medium", lc:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
          { id:"p044", name:"Count occurrences in sorted array",       difficulty:"Easy",   lc:"https://www.geeksforgeeks.org/count-number-of-occurrences-or-frequency-in-a-sorted-array/" },
          { id:"p045", name:"Floor and Ceil in sorted array",          difficulty:"Easy",   lc:"https://www.geeksforgeeks.org/floor-and-ceil-from-a-bst/" },
          { id:"p046", name:"Last position of an element",             difficulty:"Easy",   lc:"https://www.geeksforgeeks.org/find-last-occurrence-of-a-character-in-a-string/" },
          { id:"p047", name:"Next Greater Letter",                     difficulty:"Medium", lc:"https://leetcode.com/problems/find-smallest-letter-greater-than-target/" },
        ]
      },
      {
        id: "sub_0009",
        name: "Binary Search on Answers",
        desc: "Treat answer space as sorted → binary search to find minimum/maximum feasible value.",
        problems: [
          { id:"p048", name:"Koko Eating Bananas",                    difficulty:"Medium", lc:"https://leetcode.com/problems/koko-eating-bananas/" },
          { id:"p049", name:"Capacity To Ship Packages Within D Days",difficulty:"Medium", lc:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
          { id:"p050", name:"Aggressive Cows",                        difficulty:"Hard",   lc:"https://www.geeksforgeeks.org/aggressive-cows/" },
          { id:"p051", name:"Split Array Largest Sum",                difficulty:"Hard",   lc:"https://leetcode.com/problems/split-array-largest-sum/" },
          { id:"p052", name:"Minimum Number of Days to Make Bouquets",difficulty:"Medium", lc:"https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/" },
          { id:"p053", name:"Magnetic Force Between Two Balls",       difficulty:"Medium", lc:"https://leetcode.com/problems/magnetic-force-between-two-balls/" },
          { id:"p054", name:"Find the Smallest Divisor",              difficulty:"Medium", lc:"https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/" },
          { id:"p055", name:"Minimise Maximum Distance to Gas Station",difficulty:"Hard",  lc:"https://www.geeksforgeeks.org/minimize-the-maximum-distance-to-a-gas-station/" },
        ]
      },
      {
        id: "sub_0010",
        name: "Search in 2D Matrix",
        desc: "Apply binary search row-wise / column-wise or flattened array.",
        problems: [
          { id:"p056", name:"Search a 2D Matrix",               difficulty:"Medium", lc:"https://leetcode.com/problems/search-a-2d-matrix/" },
          { id:"p057", name:"Search a 2D Matrix II",            difficulty:"Medium", lc:"https://leetcode.com/problems/search-a-2d-matrix-ii/" },
          { id:"p058", name:"Row with maximum 1s",              difficulty:"Easy",   lc:"https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/" },
          { id:"p059", name:"Find Kth Smallest Element in BST", difficulty:"Medium", lc:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
        ]
      },
    ]
  },
  {
    id: "topic_0004",
    name: "Stack",
    icon: "📚",
    colorIdx: 3,
    desc: "LIFO (Last In First Out) data structure patterns.",
    subtopics: [
      {
        id: "sub_0011",
        name: "Monotonic Stack",
        desc: "Maintain a monotonic increasing/decreasing stack to find next/prev greater/smaller, histogram ranges, or collisions.",
        problems: [
          { id:"p060", name:"Next Greater Element I",                    difficulty:"Easy",   lc:"https://leetcode.com/problems/next-greater-element-i/" },
          { id:"p061", name:"Next Greater Element II (circular)",        difficulty:"Medium", lc:"https://leetcode.com/problems/next-greater-element-ii/" },
          { id:"p062", name:"Daily Temperatures",                        difficulty:"Medium", lc:"https://leetcode.com/problems/daily-temperatures/" },
          { id:"p063", name:"Largest Rectangle in Histogram",            difficulty:"Hard",   lc:"https://leetcode.com/problems/largest-rectangle-in-histogram/" },
          { id:"p064", name:"Maximal Rectangle",                         difficulty:"Hard",   lc:"https://leetcode.com/problems/maximal-rectangle/" },
          { id:"p065", name:"Asteroid Collision",                        difficulty:"Medium", lc:"https://leetcode.com/problems/asteroid-collision/" },
          { id:"p066", name:"Sum of Subarray Minimums",                  difficulty:"Medium", lc:"https://leetcode.com/problems/sum-of-subarray-minimums/" },
        ]
      },
      {
        id: "sub_0012",
        name: "Expression Evaluation",
        desc: "Use two stacks or postfix evaluation to handle numbers and operators efficiently.",
        problems: [
          { id:"p067", name:"Basic Calculator",         difficulty:"Hard",   lc:"https://leetcode.com/problems/basic-calculator/" },
          { id:"p068", name:"Basic Calculator II",      difficulty:"Medium", lc:"https://leetcode.com/problems/basic-calculator-ii/" },
          { id:"p069", name:"Evaluate Reverse Polish Notation", difficulty:"Medium", lc:"https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
          { id:"p070", name:"Decode String",            difficulty:"Medium", lc:"https://leetcode.com/problems/decode-string/" },
        ]
      },
      {
        id: "sub_0013",
        name: "Stack Simulation / Undo Operation",
        desc: "Simulate operations using a stack → pop on undo, remove adjacent duplicates, collapse characters.",
        problems: [
          { id:"p071", name:"Remove All Adjacent Duplicates In String",   difficulty:"Easy",   lc:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },
          { id:"p072", name:"Remove All Adjacent Duplicates II",          difficulty:"Medium", lc:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/" },
          { id:"p073", name:"Backspace String Compare",                   difficulty:"Easy",   lc:"https://leetcode.com/problems/backspace-string-compare/" },
          { id:"p074", name:"Simplify Path",                              difficulty:"Medium", lc:"https://leetcode.com/problems/simplify-path/" },
        ]
      },
      {
        id: "sub_0014",
        name: "Parenthesis & Scoring",
        desc: "Push opening symbols and validate closing ones; sometimes track count or score.",
        problems: [
          { id:"p075", name:"Valid Parentheses",                          difficulty:"Easy",   lc:"https://leetcode.com/problems/valid-parentheses/" },
          { id:"p076", name:"Minimum Remove to Make Valid Parentheses",   difficulty:"Medium", lc:"https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/" },
          { id:"p077", name:"Score of Parentheses",                       difficulty:"Medium", lc:"https://leetcode.com/problems/score-of-parentheses/" },
          { id:"p078", name:"Longest Valid Parentheses",                  difficulty:"Hard",   lc:"https://leetcode.com/problems/longest-valid-parentheses/" },
        ]
      },
      {
        id: "sub_0015",
        name: "Stack-Based Design",
        desc: "Use two stacks to implement another data structure or maintain extra info.",
        problems: [
          { id:"p079", name:"Min Stack",                                  difficulty:"Medium", lc:"https://leetcode.com/problems/min-stack/" },
          { id:"p080", name:"Implement Queue using Stacks",               difficulty:"Easy",   lc:"https://leetcode.com/problems/implement-queue-using-stacks/" },
          { id:"p081", name:"Implement Stack using Queues",               difficulty:"Easy",   lc:"https://leetcode.com/problems/implement-stack-using-queues/" },
          { id:"p082", name:"Maximum Frequency Stack",                    difficulty:"Hard",   lc:"https://leetcode.com/problems/maximum-frequency-stack/" },
          { id:"p083", name:"Online Stock Span",                          difficulty:"Medium", lc:"https://leetcode.com/problems/online-stock-span/" },
        ]
      },
    ]
  },
  {
    id: "topic_0009",
    name: "Recursion",
    icon: "🔄",
    colorIdx: 4,
    desc: "Solving problems by breaking them down into smaller, self-similar subproblems.",
    subtopics: [
      {
        id: "sub_r1",
        name: "Linear Recursion",
        desc: "Solve problems by reducing them to a simpler instance of the same problem.",
        problems: [
          { id:"p084", name:"Fibonacci Number",                difficulty:"Easy",   lc:"https://leetcode.com/problems/fibonacci-number/" },
          { id:"p085", name:"Climbing Stairs",                 difficulty:"Easy",   lc:"https://leetcode.com/problems/climbing-stairs/" },
          { id:"p086", name:"Pow(x, n)",                       difficulty:"Medium", lc:"https://leetcode.com/problems/powx-n/" },
          { id:"p087", name:"Reverse Linked List (Recursive)", difficulty:"Easy",   lc:"https://leetcode.com/problems/reverse-linked-list/" },
        ]
      },
      {
        id: "sub_r2",
        name: "Non-Linear Recursion",
        desc: "Make multiple recursive calls at each step to explore different branches and combine their results.",
        problems: [
          { id:"p088", name:"Flood Fill",                      difficulty:"Easy",   lc:"https://leetcode.com/problems/flood-fill/" },
          { id:"p089", name:"Number of Islands",               difficulty:"Medium", lc:"https://leetcode.com/problems/number-of-islands/" },
          { id:"p090", name:"Binary Tree Inorder Traversal",   difficulty:"Easy",   lc:"https://leetcode.com/problems/binary-tree-inorder-traversal/" },
          { id:"p091", name:"Symmetric Tree",                  difficulty:"Easy",   lc:"https://leetcode.com/problems/symmetric-tree/" },
        ]
      },
      {
        id: "sub_r3",
        name: "Divide & Conquer",
        desc: "Divide the problem into smaller subproblems, solve them recursively, and combine results.",
        problems: [
          { id:"p092", name:"Merge Sort",                      difficulty:"Medium", lc:"https://www.geeksforgeeks.org/merge-sort/" },
          { id:"p093", name:"Quick Sort",                      difficulty:"Medium", lc:"https://www.geeksforgeeks.org/quick-sort/" },
          { id:"p094", name:"Median of Two Sorted Arrays",     difficulty:"Hard",   lc:"https://leetcode.com/problems/median-of-two-sorted-arrays/" },
          { id:"p095", name:"Maximum Subarray (D&C)",          difficulty:"Medium", lc:"https://leetcode.com/problems/maximum-subarray/" },
          { id:"p096", name:"Count Inversions in an Array",    difficulty:"Medium", lc:"https://www.geeksforgeeks.org/counting-inversions/" },
        ]
      },
      {
        id: "sub_r4",
        name: "Subsequences",
        desc: "Explore all possible subsets by choosing to include or exclude each element.",
        problems: [
          { id:"p097", name:"Subsets",                                        difficulty:"Medium", lc:"https://leetcode.com/problems/subsets/" },
          { id:"p098", name:"Subsets II (with duplicates)",                   difficulty:"Medium", lc:"https://leetcode.com/problems/subsets-ii/" },
          { id:"p099", name:"Print all subsequences with sum K",              difficulty:"Medium", lc:"https://www.geeksforgeeks.org/print-subsequences-string/" },
        ]
      },
    ]
  },
  {
    id: "topic_0005",
    name: "Linked List",
    icon: "🔗",
    colorIdx: 5,
    desc: "Linear data structure where elements are not stored at contiguous memory locations.",
    subtopics: [
      {
        id: "sub_0017",
        name: "Basic Operations",
        desc: "Directly manipulate pointers to insert, delete, traverse, and get length.",
        problems: [
          { id:"p100", name:"Reverse Linked List",                      difficulty:"Easy",   lc:"https://leetcode.com/problems/reverse-linked-list/" },
          { id:"p101", name:"Merge Two Sorted Lists",                   difficulty:"Easy",   lc:"https://leetcode.com/problems/merge-two-sorted-lists/" },
          { id:"p102", name:"Linked List Cycle",                        difficulty:"Easy",   lc:"https://leetcode.com/problems/linked-list-cycle/" },
          { id:"p103", name:"Remove Nth Node From End of List",         difficulty:"Medium", lc:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
          { id:"p104", name:"Intersection of Two Linked Lists",         difficulty:"Easy",   lc:"https://leetcode.com/problems/intersection-of-two-linked-lists/" },
          { id:"p105", name:"Delete Node in a Linked List",             difficulty:"Medium", lc:"https://leetcode.com/problems/delete-node-in-a-linked-list/" },
        ]
      },
      {
        id: "sub_0018",
        name: "Fast and Slow Pointers",
        desc: "Use two pointers at different speeds to detect cycles, middle node, or duplicates.",
        problems: [
          { id:"p106", name:"Middle of the Linked List",            difficulty:"Easy",   lc:"https://leetcode.com/problems/middle-of-the-linked-list/" },
          { id:"p107", name:"Linked List Cycle II",                 difficulty:"Medium", lc:"https://leetcode.com/problems/linked-list-cycle-ii/" },
          { id:"p108", name:"Happy Number",                         difficulty:"Easy",   lc:"https://leetcode.com/problems/happy-number/" },
          { id:"p109", name:"Find the Duplicate Number",            difficulty:"Medium", lc:"https://leetcode.com/problems/find-the-duplicate-number/" },
        ]
      },
      {
        id: "sub_0019",
        name: "Reversal Pattern",
        desc: "Reverse entire list, partial list, or groups to reorder nodes.",
        problems: [
          { id:"p110", name:"Reverse Linked List II",                             difficulty:"Medium", lc:"https://leetcode.com/problems/reverse-linked-list-ii/" },
          { id:"p111", name:"Reverse Nodes in k-Group",                           difficulty:"Hard",   lc:"https://leetcode.com/problems/reverse-nodes-in-k-group/" },
          { id:"p112", name:"Palindrome Linked List",                             difficulty:"Easy",   lc:"https://leetcode.com/problems/palindrome-linked-list/" },
          { id:"p113", name:"Swap Nodes in Pairs",                                difficulty:"Medium", lc:"https://leetcode.com/problems/swap-nodes-in-pairs/" },
          { id:"p114", name:"Rotate List",                                        difficulty:"Medium", lc:"https://leetcode.com/problems/rotate-list/" },
          { id:"p115", name:"Odd Even Linked List",                               difficulty:"Medium", lc:"https://leetcode.com/problems/odd-even-linked-list/" },
          { id:"p116", name:"Reorder List",                                       difficulty:"Medium", lc:"https://leetcode.com/problems/reorder-list/" },
        ]
      },
      {
        id: "sub_0020",
        name: "Merge / Sort",
        desc: "Merge sorted lists, sort list using merge sort, or reorder using middle + reverse + merge.",
        problems: [
          { id:"p117", name:"Merge K Sorted Lists",                     difficulty:"Hard",   lc:"https://leetcode.com/problems/merge-k-sorted-lists/" },
          { id:"p118", name:"Sort List",                                difficulty:"Medium", lc:"https://leetcode.com/problems/sort-list/" },
          { id:"p119", name:"Insertion Sort List",                      difficulty:"Medium", lc:"https://leetcode.com/problems/insertion-sort-list/" },
          { id:"p120", name:"Add Two Numbers",                          difficulty:"Medium", lc:"https://leetcode.com/problems/add-two-numbers/" },
          { id:"p121", name:"Add Two Numbers II",                       difficulty:"Medium", lc:"https://leetcode.com/problems/add-two-numbers-ii/" },
          { id:"p122", name:"Partition List",                           difficulty:"Medium", lc:"https://leetcode.com/problems/partition-list/" },
          { id:"p123", name:"Copy List with Random Pointer",            difficulty:"Medium", lc:"https://leetcode.com/problems/copy-list-with-random-pointer/" },
        ]
      },
    ]
  },
  {
    id: "topic_0007",
    name: "HashMap",
    icon: "🗺️",
    colorIdx: 6,
    desc: "Key-value pair data structure for O(1) average time complexity lookups.",
    subtopics: [
      {
        id: "sub_0024",
        name: "Frequency Map / Counting",
        desc: "Count elements to find majority, top-k frequent, or sort by frequency.",
        problems: [
          { id:"p124", name:"Top K Frequent Elements",       difficulty:"Medium", lc:"https://leetcode.com/problems/top-k-frequent-elements/" },
          { id:"p125", name:"Majority Element",              difficulty:"Easy",   lc:"https://leetcode.com/problems/majority-element/" },
          { id:"p126", name:"Group Anagrams",                difficulty:"Medium", lc:"https://leetcode.com/problems/group-anagrams/" },
          { id:"p127", name:"Sort Characters By Frequency",  difficulty:"Medium", lc:"https://leetcode.com/problems/sort-characters-by-frequency/" },
        ]
      },
      {
        id: "sub_0025",
        name: "Prefix-Sum with Map",
        desc: "Track cumulative sums; map stores first occurrence → solve subarray sum problems.",
        problems: [
          { id:"p128", name:"Subarray Sum Equals K",                    difficulty:"Medium", lc:"https://leetcode.com/problems/subarray-sum-equals-k/" },
        ]
      },
    ]
  },
  {
    id: "topic_0010",
    name: "Binary Tree",
    icon: "🌳",
    colorIdx: 7,
    desc: "Hierarchical data structure with a root value and subtrees of children.",
    subtopics: [
      {
        id: "sub_0036",
        name: "DFS Traversals",
        desc: "Standard DFS → used for max depth, path sums, subtree calculations.",
        problems: [
          { id:"p129", name:"Binary Tree Inorder Traversal",          difficulty:"Easy",   lc:"https://leetcode.com/problems/binary-tree-inorder-traversal/" },
          { id:"p130", name:"Binary Tree Preorder Traversal",         difficulty:"Easy",   lc:"https://leetcode.com/problems/binary-tree-preorder-traversal/" },
          { id:"p131", name:"Binary Tree Postorder Traversal",        difficulty:"Easy",   lc:"https://leetcode.com/problems/binary-tree-postorder-traversal/" },
          { id:"p132", name:"Maximum Depth of Binary Tree",           difficulty:"Easy",   lc:"https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
          { id:"p133", name:"Diameter of Binary Tree",                difficulty:"Easy",   lc:"https://leetcode.com/problems/diameter-of-binary-tree/" },
          { id:"p134", name:"Balanced Binary Tree",                   difficulty:"Easy",   lc:"https://leetcode.com/problems/balanced-binary-tree/" },
          { id:"p135", name:"Path Sum",                               difficulty:"Easy",   lc:"https://leetcode.com/problems/path-sum/" },
          { id:"p136", name:"Path Sum II",                            difficulty:"Medium", lc:"https://leetcode.com/problems/path-sum-ii/" },
          { id:"p137", name:"Binary Tree Maximum Path Sum",           difficulty:"Hard",   lc:"https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
          { id:"p138", name:"Sum Root to Leaf Numbers",               difficulty:"Medium", lc:"https://leetcode.com/problems/sum-root-to-leaf-numbers/" },
          { id:"p139", name:"Invert Binary Tree",                     difficulty:"Easy",   lc:"https://leetcode.com/problems/invert-binary-tree/" },
          { id:"p140", name:"Merge Two Binary Trees",                 difficulty:"Easy",   lc:"https://leetcode.com/problems/merge-two-binary-trees/" },
          { id:"p141", name:"Same Tree",                              difficulty:"Easy",   lc:"https://leetcode.com/problems/same-tree/" },
          { id:"p142", name:"Subtree of Another Tree",                difficulty:"Easy",   lc:"https://leetcode.com/problems/subtree-of-another-tree/" },
          { id:"p143", name:"Count Good Nodes in Binary Tree",        difficulty:"Medium", lc:"https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
          { id:"p144", name:"Flatten Binary Tree to Linked List",     difficulty:"Medium", lc:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
          { id:"p145", name:"Morris Traversal",                       difficulty:"Medium", lc:"https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/" },
          { id:"p146", name:"Boundary of Binary Tree",                difficulty:"Medium", lc:"https://leetcode.com/problems/boundary-of-binary-tree/" },
        ]
      },
      {
        id: "sub_0037",
        name: "BFS / Level-Order",
        desc: "Use queue → traverse level by level → calculate sums, averages, or side views.",
        problems: [
          { id:"p147", name:"Binary Tree Level Order Traversal",      difficulty:"Medium", lc:"https://leetcode.com/problems/binary-tree-level-order-traversal/" },
          { id:"p148", name:"Binary Tree Zigzag Level Order Traversal",difficulty:"Medium",lc:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
          { id:"p149", name:"Average of Levels in Binary Tree",       difficulty:"Easy",   lc:"https://leetcode.com/problems/average-of-levels-in-binary-tree/" },
          { id:"p150", name:"Binary Tree Right Side View",            difficulty:"Medium", lc:"https://leetcode.com/problems/binary-tree-right-side-view/" },
          { id:"p151", name:"Left / Right View of Binary Tree",       difficulty:"Easy",   lc:"https://www.geeksforgeeks.org/print-left-view-binary-tree/" },
          { id:"p152", name:"Maximum Width of Binary Tree",           difficulty:"Medium", lc:"https://leetcode.com/problems/maximum-width-of-binary-tree/" },
          { id:"p153", name:"Binary Tree Level Order Traversal II",   difficulty:"Medium", lc:"https://leetcode.com/problems/binary-tree-level-order-traversal-ii/" },
          { id:"p154", name:"Populating Next Right Pointers",         difficulty:"Medium", lc:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node/" },
          { id:"p155", name:"Vertical Order Traversal",               difficulty:"Hard",   lc:"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
          { id:"p156", name:"Bottom View of Binary Tree",             difficulty:"Medium", lc:"https://www.geeksforgeeks.org/bottom-view-binary-tree/" },
          { id:"p157", name:"Top View of Binary Tree",                difficulty:"Medium", lc:"https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/" },
        ]
      },
      {
        id: "sub_0038",
        name: "Lowest Common Ancestor",
        desc: "DFS recursion or parent-pointer mapping → find common ancestor efficiently.",
        problems: [
          { id:"p158", name:"LCA of Binary Tree",                     difficulty:"Medium", lc:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
          { id:"p159", name:"LCA of BST",                             difficulty:"Medium", lc:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
          { id:"p160", name:"Distance Between Two Nodes",             difficulty:"Medium", lc:"https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/" },
        ]
      },
      {
        id: "sub_0039",
        name: "Serialization / Construction",
        desc: "Preorder / level-order encode-decode → reconstruct tree or flatten.",
        problems: [
          { id:"p161", name:"Serialize and Deserialize Binary Tree",  difficulty:"Hard",   lc:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
          { id:"p162", name:"Construct Binary Tree from Preorder and Inorder",difficulty:"Medium",lc:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
          { id:"p163", name:"Construct Binary Tree from Inorder and Postorder",difficulty:"Medium",lc:"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" },
          { id:"p164", name:"Convert Sorted Array to BST",            difficulty:"Easy",   lc:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
          { id:"p165", name:"Flatten Binary Tree to Linked List",     difficulty:"Medium", lc:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
          { id:"p166", name:"All Paths From Source to Target",        difficulty:"Medium", lc:"https://leetcode.com/problems/all-paths-from-source-to-target/" },
        ]
      },
      {
        id: "sub_0040",
        name: "BST",
        desc: "Leverage BST property (left < root < right) for search, insertion, deletion, and range queries.",
        problems: [
          { id:"p167", name:"Validate Binary Search Tree",            difficulty:"Medium", lc:"https://leetcode.com/problems/validate-binary-search-tree/" },
          { id:"p168", name:"Kth Smallest Element in a BST",          difficulty:"Medium", lc:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
          { id:"p169", name:"Convert BST to Greater Tree",            difficulty:"Medium", lc:"https://leetcode.com/problems/convert-bst-to-greater-tree/" },
          { id:"p170", name:"Delete Node in a BST",                   difficulty:"Medium", lc:"https://leetcode.com/problems/delete-node-in-a-bst/" },
          { id:"p171", name:"Insert into a Binary Search Tree",       difficulty:"Medium", lc:"https://leetcode.com/problems/insert-into-a-binary-search-tree/" },
          { id:"p172", name:"Two Sum IV – Input is a BST",            difficulty:"Easy",   lc:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/" },
          { id:"p173", name:"Recover Binary Search Tree",             difficulty:"Medium", lc:"https://leetcode.com/problems/recover-binary-search-tree/" },
          { id:"p174", name:"Trim a Binary Search Tree",              difficulty:"Medium", lc:"https://leetcode.com/problems/trim-a-binary-search-tree/" },
          { id:"p175", name:"Merge Two BSTs",                         difficulty:"Hard",   lc:"https://www.geeksforgeeks.org/merge-two-bsts-with-limited-extra-space/" },
          { id:"p176", name:"Floor/Ceil in BST",                      difficulty:"Medium", lc:"https://www.geeksforgeeks.org/floor-and-ceil-from-a-bst/" },
          { id:"p177", name:"Largest BST in Binary Tree",             difficulty:"Medium", lc:"https://www.geeksforgeeks.org/largest-bst-in-a-binary-tree/" },
          { id:"p178", name:"Range Sum of BST",                       difficulty:"Easy",   lc:"https://leetcode.com/problems/range-sum-of-bst/" },
          { id:"p179", name:"BST Iterator",                           difficulty:"Medium", lc:"https://leetcode.com/problems/binary-search-tree-iterator/" },
          { id:"p180", name:"Inorder Successor in BST",               difficulty:"Medium", lc:"https://leetcode.com/problems/inorder-successor-in-bst/" },
          { id:"p181", name:"Count BST Nodes in Range",               difficulty:"Easy",   lc:"https://www.geeksforgeeks.org/count-bst-nodes-that-lie-in-a-given-range/" },
          { id:"p182", name:"Unique BSTs",                            difficulty:"Medium", lc:"https://leetcode.com/problems/unique-binary-search-trees/" },
        ]
      },
    ]
  },
  {
    id: "topic_0012",
    name: "Graph",
    icon: "🕸️",
    colorIdx: 8,
    desc: "Non-linear data structure consisting of nodes and edges.",
    subtopics: [
      {
        id: "sub_0042",
        name: "BFS (Unweighted Path)",
        desc: "Standard BFS → track distance/levels → queue-based traversal → multi-source if needed.",
        problems: [
          { id:"p183", name:"Number of Islands",               difficulty:"Medium", lc:"https://leetcode.com/problems/number-of-islands/" },
          { id:"p184", name:"Rotting Oranges",                 difficulty:"Medium", lc:"https://leetcode.com/problems/rotting-oranges/" },
          { id:"p185", name:"Shortest Path in Binary Matrix",  difficulty:"Medium", lc:"https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
          { id:"p186", name:"Word Ladder",                     difficulty:"Hard",   lc:"https://leetcode.com/problems/word-ladder/" },
          { id:"p187", name:"01 Matrix",                       difficulty:"Medium", lc:"https://leetcode.com/problems/01-matrix/" },
          { id:"p188", name:"Walls and Gates",                 difficulty:"Medium", lc:"https://leetcode.com/problems/walls-and-gates/" },
        ]
      },
      {
        id: "sub_0043",
        name: "DFS (Connectivity)",
        desc: "DFS recursion or stack → track visited → identify connected components or detect cycles.",
        problems: [
          { id:"p189", name:"Number of Connected Components",         difficulty:"Medium", lc:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
          { id:"p190", name:"Pacific Atlantic Water Flow",            difficulty:"Medium", lc:"https://leetcode.com/problems/pacific-atlantic-water-flow/" },
          { id:"p191", name:"Course Schedule (Detect Cycle)",         difficulty:"Medium", lc:"https://leetcode.com/problems/course-schedule/" },
          { id:"p192", name:"Clone Graph",                            difficulty:"Medium", lc:"https://leetcode.com/problems/clone-graph/" },
          { id:"p193", name:"Surrounded Regions",                    difficulty:"Medium", lc:"https://leetcode.com/problems/surrounded-regions/" },
          { id:"p194", name:"Max Area of Island",                     difficulty:"Medium", lc:"https://leetcode.com/problems/max-area-of-island/" },
          { id:"p195", name:"Is Graph Bipartite?",                    difficulty:"Medium", lc:"https://leetcode.com/problems/is-graph-bipartite/" },
          { id:"p196", name:"Detect Cycle in Directed Graph",        difficulty:"Medium", lc:"https://www.geeksforgeeks.org/detect-cycle-in-a-graph/" },
          { id:"p197", name:"Detect Cycle in Undirected Graph",      difficulty:"Medium", lc:"https://www.geeksforgeeks.org/detect-cycle-undirected-graph/" },
          { id:"p198", name:"Strongly Connected Components (Kosaraju)", difficulty:"Hard",lc:"https://www.geeksforgeeks.org/strongly-connected-components/" },
          { id:"p199", name:"Articulation Points",                   difficulty:"Hard",   lc:"https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/" },
          { id:"p200", name:"Bridges in Graph",                      difficulty:"Hard",   lc:"https://leetcode.com/problems/critical-connections-in-a-network/" },
        ]
      },
      {
        id: "sub_0044",
        name: "Topological Sort",
        desc: "DFS postorder or BFS (Kahn's algorithm) → order nodes respecting dependencies.",
        problems: [
          { id:"p201", name:"Course Schedule II",                     difficulty:"Medium", lc:"https://leetcode.com/problems/course-schedule-ii/" },
          { id:"p202", name:"Alien Dictionary",                       difficulty:"Hard",   lc:"https://leetcode.com/problems/alien-dictionary/" },
          { id:"p203", name:"Find All Possible Recipes",              difficulty:"Medium", lc:"https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/" },
          { id:"p204", name:"Parallel Courses",                       difficulty:"Medium", lc:"https://leetcode.com/problems/parallel-courses/" },
          { id:"p205", name:"Sequence Reconstruction",                difficulty:"Medium", lc:"https://leetcode.com/problems/sequence-reconstruction/" },
          { id:"p206", name:"Minimum Height Trees",                   difficulty:"Medium", lc:"https://leetcode.com/problems/minimum-height-trees/" },
          { id:"p207", name:"Sort Items by Groups Respecting Deps",   difficulty:"Hard",   lc:"https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/" },
        ]
      },
      {
        id: "sub_0045",
        name: "MST / Union-Find",
        desc: "Use Kruskal's / Prim's algorithm or Union-Find → find MST, minimum cost connections, or detect cycles.",
        problems: [
          { id:"p208", name:"Number of Provinces",                    difficulty:"Medium", lc:"https://leetcode.com/problems/number-of-provinces/" },
          { id:"p209", name:"Accounts Merge",                         difficulty:"Medium", lc:"https://leetcode.com/problems/accounts-merge/" },
          { id:"p210", name:"Min Cost to Connect All Points (Prim's)",difficulty:"Medium", lc:"https://leetcode.com/problems/min-cost-to-connect-all-points/" },
          { id:"p211", name:"Redundant Connection",                   difficulty:"Medium", lc:"https://leetcode.com/problems/redundant-connection/" },
          { id:"p212", name:"Number of Operations to Make Network Connected",difficulty:"Medium",lc:"https://leetcode.com/problems/number-of-operations-to-make-network-connected/" },
          { id:"p213", name:"Most Stones Removed",                    difficulty:"Medium", lc:"https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/" },
          { id:"p214", name:"Swim in Rising Water",                   difficulty:"Hard",   lc:"https://leetcode.com/problems/swim-in-rising-water/" },
        ]
      },
      {
        id: "sub_0046",
        name: "Dijkstra (Weighted)",
        desc: "Use priority queue → relax edges → track shortest distances.",
        problems: [
          { id:"p215", name:"Network Delay Time",                     difficulty:"Medium", lc:"https://leetcode.com/problems/network-delay-time/" },
          { id:"p216", name:"Cheapest Flights Within K Stops",        difficulty:"Medium", lc:"https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
          { id:"p217", name:"Path with Minimum Effort",               difficulty:"Medium", lc:"https://leetcode.com/problems/path-with-minimum-effort/" },
          { id:"p218", name:"K Closest Points to Origin",             difficulty:"Medium", lc:"https://leetcode.com/problems/k-closest-points-to-origin/" },
          { id:"p219", name:"Minimum Cost to Reach Destination in Time",difficulty:"Hard",lc:"https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/" },
          { id:"p220", name:"Path with Maximum Probability",          difficulty:"Medium", lc:"https://leetcode.com/problems/path-with-maximum-probability/" },
          { id:"p221", name:"Find the City With Smallest Number of Neighbors",difficulty:"Medium",lc:"https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" },
        ]
      },
      {
        id: "sub_0047",
        name: "Bellman-Ford",
        desc: "Relax all edges V-1 times → detect negative cycles.",
        problems: [
          { id:"p222", name:"Bellman-Ford Basic",                     difficulty:"Medium", lc:"https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/" },
          { id:"p223", name:"Cheapest Flights Within K Stops (BF variant)",difficulty:"Medium",lc:"https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
          { id:"p224", name:"Negative Cycle Detection",               difficulty:"Hard",   lc:"https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/" },
        ]
      },
      {
        id: "sub_0048",
        name: "Floyd-Warshall",
        desc: "DP over adjacency matrix → shortest paths between all pairs of nodes.",
        problems: [
          { id:"p225", name:"All Pairs Shortest Path",                difficulty:"Hard",   lc:"https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/" },
          { id:"p226", name:"Find the City With Smallest Number of Neighbors",difficulty:"Medium",lc:"https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" },
          { id:"p227", name:"Evaluate Division",                      difficulty:"Medium", lc:"https://leetcode.com/problems/evaluate-division/" },
        ]
      },
    ]
  },
  {
    id: "topic_0008",
    name: "Heap",
    icon: "⛰️",
    colorIdx: 9,
    desc: "Priority Queue data structure for efficient retrieval of highest/lowest priority elements.",
    subtopics: [
      {
        id: "sub_0027",
        name: "Top-K Elements",
        desc: "Use min-heap for top-k largest, max-heap for top-k smallest → maintain heap of size k.",
        problems: [
          { id:"p228", name:"Kth Largest Element in an Array",        difficulty:"Medium", lc:"https://leetcode.com/problems/kth-largest-element-in-an-array/" },
          { id:"p229", name:"Top K Frequent Elements",                difficulty:"Medium", lc:"https://leetcode.com/problems/top-k-frequent-elements/" },
          { id:"p230", name:"K Closest Points to Origin",             difficulty:"Medium", lc:"https://leetcode.com/problems/k-closest-points-to-origin/" },
          { id:"p231", name:"Find K Pairs with Smallest Sums",        difficulty:"Medium", lc:"https://leetcode.com/problems/find-k-pairs-with-smallest-sums/" },
          { id:"p232", name:"Kth Largest Element in a Stream",        difficulty:"Easy",   lc:"https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
          { id:"p233", name:"Task Scheduler",                         difficulty:"Medium", lc:"https://leetcode.com/problems/task-scheduler/" },
        ]
      },
      {
        id: "sub_0028",
        name: "Merge K Sorted",
        desc: "Use min-heap to merge multiple sorted arrays/lists efficiently.",
        problems: [
          { id:"p234", name:"Merge K Sorted Lists",                   difficulty:"Hard",   lc:"https://leetcode.com/problems/merge-k-sorted-lists/" },
          { id:"p235", name:"Smallest Range Covering Elements from K Lists",difficulty:"Hard",lc:"https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/" },
          { id:"p236", name:"Find K-th Smallest Element in a Sorted Matrix",difficulty:"Medium",lc:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/" },
        ]
      },
      {
        id: "sub_0029",
        name: "Heap with Sliding Window",
        desc: "Maintain a heap of elements in the window → pop outdated elements → track maximum.",
        problems: [
          { id:"p237", name:"Sliding Window Maximum",                 difficulty:"Hard",   lc:"https://leetcode.com/problems/sliding-window-maximum/" },
          { id:"p238", name:"Find Median from Data Stream",           difficulty:"Hard",   lc:"https://leetcode.com/problems/find-median-from-data-stream/" },
          { id:"p239", name:"Maximum Sum of Almost Unique Subarray",  difficulty:"Medium", lc:"https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/" },
        ]
      },
    ]
  },
  {
    id: "topic_0013",
    name: "Backtracking",
    icon: "↩️",
    colorIdx: 10,
    desc: "Algorithmic technique for solving problems recursively by trying to build a solution incrementally.",
    subtopics: [
      {
        id: "sub_0049",
        name: "Choice-Based Backtracking",
        desc: "Generate all possible combinations, subsets, or permutations.",
        problems: [
          { id:"p240", name:"Permutations",                           difficulty:"Medium", lc:"https://leetcode.com/problems/permutations/" },
          { id:"p241", name:"Permutations II",                        difficulty:"Medium", lc:"https://leetcode.com/problems/permutations-ii/" },
          { id:"p242", name:"Combinations",                           difficulty:"Medium", lc:"https://leetcode.com/problems/combinations/" },
          { id:"p243", name:"Combination Sum",                        difficulty:"Medium", lc:"https://leetcode.com/problems/combination-sum/" },
          { id:"p244", name:"Combination Sum II",                     difficulty:"Medium", lc:"https://leetcode.com/problems/combination-sum-ii/" },
          { id:"p245", name:"Combination Sum III",                    difficulty:"Medium", lc:"https://leetcode.com/problems/combination-sum-iii/" },
          { id:"p246", name:"Letter Combinations of a Phone Number",  difficulty:"Medium", lc:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
          { id:"p247", name:"Generate Parentheses",                   difficulty:"Medium", lc:"https://leetcode.com/problems/generate-parentheses/" },
          { id:"p248", name:"Palindrome Partitioning",                difficulty:"Medium", lc:"https://leetcode.com/problems/palindrome-partitioning/" },
        ]
      },
      {
        id: "sub_0050",
        name: "Constraint-Based Backtracking",
        desc: "At each step, choose whether to include an element → explore all subsets/choices recursively.",
        problems: [
          { id:"p249", name:"N-Queens",                               difficulty:"Hard",   lc:"https://leetcode.com/problems/n-queens/" },
          { id:"p250", name:"N-Queens II",                            difficulty:"Hard",   lc:"https://leetcode.com/problems/n-queens-ii/" },
          { id:"p251", name:"Sudoku Solver",                          difficulty:"Hard",   lc:"https://leetcode.com/problems/sudoku-solver/" },
          { id:"p252", name:"Expression Add Operators",               difficulty:"Hard",   lc:"https://leetcode.com/problems/expression-add-operators/" },
          { id:"p253", name:"The Knight's Tour",                      difficulty:"Hard",   lc:"https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/" },
          { id:"p254", name:"M Coloring Problem",                     difficulty:"Medium", lc:"https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/" },
        ]
      },
      {
        id: "sub_0051",
        name: "Grid / Path Backtracking",
        desc: "Move in grid recursively → explore all valid paths → backtrack after each move.",
        problems: [
          { id:"p255", name:"Word Search",                            difficulty:"Medium", lc:"https://leetcode.com/problems/word-search/" },
          { id:"p256", name:"Word Search II",                         difficulty:"Hard",   lc:"https://leetcode.com/problems/word-search-ii/" },
          { id:"p257", name:"Rat in a Maze",                          difficulty:"Medium", lc:"https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/" },
          { id:"p258", name:"Unique Paths III",                       difficulty:"Hard",   lc:"https://leetcode.com/problems/unique-paths-iii/" },
          { id:"p259", name:"Restore IP Addresses",                   difficulty:"Medium", lc:"https://leetcode.com/problems/restore-ip-addresses/" },
        ]
      },
    ]
  },
  {
    id: "topic_0014",
    name: "Greedy",
    icon: "💰",
    colorIdx: 11,
    desc: "Algorithm paradigm that follows the problem solving heuristic of making the locally optimal choice.",
    subtopics: [
      {
        id: "sub_0053",
        name: "Intervals & Reach",
        desc: "Sort intervals or extend reach as far as possible from current position → maximize tasks done / minimize steps.",
        problems: [
          { id:"p260", name:"Jump Game",                              difficulty:"Medium", lc:"https://leetcode.com/problems/jump-game/" },
          { id:"p261", name:"Jump Game II",                          difficulty:"Medium", lc:"https://leetcode.com/problems/jump-game-ii/" },
          { id:"p262", name:"Merge Intervals",                       difficulty:"Medium", lc:"https://leetcode.com/problems/merge-intervals/" },
          { id:"p263", name:"Non-overlapping Intervals",             difficulty:"Medium", lc:"https://leetcode.com/problems/non-overlapping-intervals/" },
          { id:"p264", name:"Meeting Rooms II",                      difficulty:"Medium", lc:"https://leetcode.com/problems/meeting-rooms-ii/" },
          { id:"p265", name:"Insert Interval",                       difficulty:"Medium", lc:"https://leetcode.com/problems/insert-interval/" },
          { id:"p266", name:"Minimum Number of Arrows",              difficulty:"Medium", lc:"https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/" },
          { id:"p267", name:"Car Fleet",                             difficulty:"Medium", lc:"https://leetcode.com/problems/car-fleet/" },
          { id:"p268", name:"Partition Labels",                      difficulty:"Medium", lc:"https://leetcode.com/problems/partition-labels/" },
          { id:"p269", name:"Gas Station",                           difficulty:"Medium", lc:"https://leetcode.com/problems/gas-station/" },
        ]
      },
      {
        id: "sub_0054",
        name: "Sorting / Local Choice",
        desc: "Sort array or select elements → make locally optimal choice → achieve global optimum.",
        problems: [
          { id:"p270", name:"Assign Cookies",                        difficulty:"Easy",   lc:"https://leetcode.com/problems/assign-cookies/" },
          { id:"p271", name:"Lemonade Change",                       difficulty:"Easy",   lc:"https://leetcode.com/problems/lemonade-change/" },
          { id:"p272", name:"Minimum Cost to Move Chips",            difficulty:"Easy",   lc:"https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/" },
          { id:"p273", name:"Maximum Units on a Truck",              difficulty:"Easy",   lc:"https://leetcode.com/problems/maximum-units-on-a-truck/" },
          { id:"p274", name:"Largest Number",                        difficulty:"Medium", lc:"https://leetcode.com/problems/largest-number/" },
          { id:"p275", name:"Candy",                                 difficulty:"Hard",   lc:"https://leetcode.com/problems/candy/" },
          { id:"p276", name:"Fractional Knapsack",                   difficulty:"Medium", lc:"https://www.geeksforgeeks.org/fractional-knapsack-problem/" },
          { id:"p277", name:"Activity Selection Problem",            difficulty:"Medium", lc:"https://www.geeksforgeeks.org/greedy-algorithms-set-1-activity-selection-problem/" },
        ]
      },
    ]
  },
  {
    id: "topic_0015",
    name: "Dynamic Programming",
    icon: "⚡",
    colorIdx: 12,
    desc: "Optimization method involving breaking down problems into simpler subproblems and storing their solutions.",
    subtopics: [
      {
        id: "sub_0055",
        name: "1D / Linear DP",
        desc: "Track optimal solution using a 1D array → sequences, sums, or counts.",
        problems: [
          { id:"p278", name:"Climbing Stairs",                        difficulty:"Easy",   lc:"https://leetcode.com/problems/climbing-stairs/" },
          { id:"p279", name:"House Robber",                           difficulty:"Medium", lc:"https://leetcode.com/problems/house-robber/" },
          { id:"p280", name:"House Robber II",                        difficulty:"Medium", lc:"https://leetcode.com/problems/house-robber-ii/" },
        ]
      },
      {
        id: "sub_0056",
        name: "2D / Grid DP",
        desc: "Use 2D array → track states for row/column → movement or path constraints.",
        problems: [
          { id:"p281", name:"Unique Paths",                           difficulty:"Medium", lc:"https://leetcode.com/problems/unique-paths/" },
          { id:"p282", name:"Minimum Path Sum",                       difficulty:"Medium", lc:"https://leetcode.com/problems/minimum-path-sum/" },
          { id:"p283", name:"Triangle",                               difficulty:"Medium", lc:"https://leetcode.com/problems/triangle/" },
          { id:"p284", name:"Maximal Square",                         difficulty:"Medium", lc:"https://leetcode.com/problems/maximal-square/" },
          { id:"p285", name:"Unique Paths II",                        difficulty:"Medium", lc:"https://leetcode.com/problems/unique-paths-ii/" },
          { id:"p286", name:"Dungeon Game",                           difficulty:"Hard",   lc:"https://leetcode.com/problems/dungeon-game/" },
          { id:"p287", name:"Cherry Pickup",                          difficulty:"Hard",   lc:"https://leetcode.com/problems/cherry-pickup/" },
          { id:"p288", name:"Minimum Falling Path Sum",               difficulty:"Medium", lc:"https://leetcode.com/problems/minimum-falling-path-sum/" },
        ]
      },
      {
        id: "sub_0057",
        name: "DP on Strings",
        desc: "Use 2D DP → index i,j represent substrings/subsequences → solve LCS, palindrome, or edit distance.",
        problems: [
          { id:"p289", name:"Longest Common Subsequence",             difficulty:"Medium", lc:"https://leetcode.com/problems/longest-common-subsequence/" },
          { id:"p290", name:"Edit Distance",                          difficulty:"Medium", lc:"https://leetcode.com/problems/edit-distance/" },
          { id:"p291", name:"Longest Palindromic Subsequence",        difficulty:"Medium", lc:"https://leetcode.com/problems/longest-palindromic-subsequence/" },
          { id:"p292", name:"Minimum ASCII Delete Sum",               difficulty:"Medium", lc:"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/" },
          { id:"p293", name:"Distinct Subsequences",                  difficulty:"Hard",   lc:"https://leetcode.com/problems/distinct-subsequences/" },
          { id:"p294", name:"Interleaving String",                    difficulty:"Medium", lc:"https://leetcode.com/problems/interleaving-string/" },
          { id:"p295", name:"Longest Increasing Subsequence",         difficulty:"Medium", lc:"https://leetcode.com/problems/longest-increasing-subsequence/" },
          { id:"p296", name:"Number of Longest Increasing Subsequences",difficulty:"Medium",lc:"https://leetcode.com/problems/number-of-longest-increasing-subsequence/" },
          { id:"p297", name:"Delete Operation for Two Strings",       difficulty:"Medium", lc:"https://leetcode.com/problems/delete-operation-for-two-strings/" },
          { id:"p298", name:"Wildcard Matching",                      difficulty:"Hard",   lc:"https://leetcode.com/problems/wildcard-matching/" },
        ]
      },
      {
        id: "sub_0060",
        name: "Knapsack / Subset Sum",
        desc: "Track states based on weight/value → classic 0-1 / bounded / unbounded variants.",
        problems: [
          { id:"p299", name:"0/1 Knapsack",                           difficulty:"Medium", lc:"https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },
          { id:"p300", name:"Partition Equal Subset Sum",             difficulty:"Medium", lc:"https://leetcode.com/problems/partition-equal-subset-sum/" },
          { id:"p301", name:"Coin Change",                            difficulty:"Medium", lc:"https://leetcode.com/problems/coin-change/" },
          { id:"p302", name:"Coin Change II",                         difficulty:"Medium", lc:"https://leetcode.com/problems/coin-change-ii/" },
          { id:"p303", name:"Target Sum",                             difficulty:"Medium", lc:"https://leetcode.com/problems/target-sum/" },
          { id:"p304", name:"Last Stone Weight II",                   difficulty:"Medium", lc:"https://leetcode.com/problems/last-stone-weight-ii/" },
          { id:"p305", name:"Ones and Zeroes",                        difficulty:"Medium", lc:"https://leetcode.com/problems/ones-and-zeroes/" },
          { id:"p306", name:"Count of Subset Sum",                    difficulty:"Medium", lc:"https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/" },
        ]
      },
      {
        id: "sub_stocks",
        name: "DP on Stocks",
        desc: "State machine DP to track whether you are holding a stock or not.",
        problems: [
          { id:"p307", name:"Best Time to Buy and Sell Stock",        difficulty:"Easy",   lc:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
          { id:"p308", name:"Best Time to Buy and Sell Stock II",     difficulty:"Medium", lc:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
          { id:"p309", name:"Best Time to Buy and Sell Stock III",    difficulty:"Hard",   lc:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" },
          { id:"p310", name:"Best Time to Buy and Sell Stock IV",     difficulty:"Hard",   lc:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/" },
          { id:"p311", name:"Best Time with Cooldown",                difficulty:"Medium", lc:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
          { id:"p312", name:"Best Time with Transaction Fee",         difficulty:"Medium", lc:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/" },
        ]
      },
    ]
  },
  {
    id: "topic_0016",
    name: "Trie",
    icon: "🌐",
    colorIdx: 13,
    desc: "Tree-based data structure used for efficiently storing and retrieving keys in a dataset of strings.",
    subtopics: [
      {
        id: "sub_0061",
        name: "Basic Trie Operations",
        desc: "Build Trie → insert words → search full word or prefix efficiently → collect suggestions in lexicographic order.",
        problems: [
          { id:"p313", name:"Implement Trie (Prefix Tree)",           difficulty:"Medium", lc:"https://leetcode.com/problems/implement-trie-prefix-tree/" },
          { id:"p314", name:"Design Add and Search Words Data Structure",difficulty:"Medium",lc:"https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
          { id:"p315", name:"Search Suggestions System",              difficulty:"Medium", lc:"https://leetcode.com/problems/search-suggestions-system/" },
          { id:"p316", name:"Replace Words",                          difficulty:"Medium", lc:"https://leetcode.com/problems/replace-words/" },
          { id:"p317", name:"Longest Word in Dictionary",             difficulty:"Medium", lc:"https://leetcode.com/problems/longest-word-in-dictionary/" },
        ]
      },
      {
        id: "sub_0062",
        name: "Word Break / Segmentation",
        desc: "Use Trie for fast lookup → combine with DP or backtracking for word segmentation and concatenation.",
        problems: [
          { id:"p318", name:"Word Break",                             difficulty:"Medium", lc:"https://leetcode.com/problems/word-break/" },
          { id:"p319", name:"Word Break II",                          difficulty:"Hard",   lc:"https://leetcode.com/problems/word-break-ii/" },
          { id:"p320", name:"Concatenated Words",                     difficulty:"Hard",   lc:"https://leetcode.com/problems/concatenated-words/" },
        ]
      },
      {
        id: "sub_0063",
        name: "Bitwise Trie / XOR",
        desc: "Use Trie for binary representation of numbers → efficiently find maximum/minimum XOR or subset XOR.",
        problems: [
          { id:"p321", name:"Maximum XOR of Two Numbers",             difficulty:"Medium", lc:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
          { id:"p322", name:"Maximum XOR With an Element From Array", difficulty:"Hard",   lc:"https://leetcode.com/problems/maximum-xor-with-an-element-from-array/" },
          { id:"p323", name:"Sum of All Subset XOR Totals",           difficulty:"Easy",   lc:"https://leetcode.com/problems/sum-of-all-subset-xor-totals/" },
        ]
      },
    ]
  },
  {
    id: "topic_0017",
    name: "Bit Manipulation",
    icon: "💡",
    colorIdx: 14,
    desc: "Techniques that perform operations on data at the bit level.",
    subtopics: [
      {
        id: "sub_0064",
        name: "Basic Bit Operations",
        desc: "Use XOR / AND / OR / shift operations → detect single/missing numbers or count bits efficiently.",
        problems: [
          { id:"p324", name:"Single Number",                          difficulty:"Easy",   lc:"https://leetcode.com/problems/single-number/" },
          { id:"p325", name:"Single Number II",                       difficulty:"Medium", lc:"https://leetcode.com/problems/single-number-ii/" },
          { id:"p326", name:"Single Number III",                      difficulty:"Medium", lc:"https://leetcode.com/problems/single-number-iii/" },
          { id:"p327", name:"Number of 1 Bits",                       difficulty:"Easy",   lc:"https://leetcode.com/problems/number-of-1-bits/" },
          { id:"p328", name:"Counting Bits",                          difficulty:"Easy",   lc:"https://leetcode.com/problems/counting-bits/" },
          { id:"p329", name:"Missing Number",                         difficulty:"Easy",   lc:"https://leetcode.com/problems/missing-number/" },
          { id:"p330", name:"Reverse Bits",                           difficulty:"Easy",   lc:"https://leetcode.com/problems/reverse-bits/" },
          { id:"p331", name:"Power of Two",                           difficulty:"Easy",   lc:"https://leetcode.com/problems/power-of-two/" },
          { id:"p332", name:"Find the Duplicate Number (bit)",        difficulty:"Medium", lc:"https://leetcode.com/problems/find-the-duplicate-number/" },
        ]
      },
      {
        id: "sub_0065",
        name: "Subsets / Bitmask",
        desc: "Iterate through all subsets using bits → solve combinatorial or DP counting problems.",
        problems: [
          { id:"p333", name:"Subsets (Bitmask approach)",             difficulty:"Medium", lc:"https://leetcode.com/problems/subsets/" },
          { id:"p334", name:"Sum of All Subset XOR Totals",           difficulty:"Easy",   lc:"https://leetcode.com/problems/sum-of-all-subset-xor-totals/" },
          { id:"p335", name:"Minimum Number of Work Sessions (bitmask DP)",difficulty:"Medium",lc:"https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/" },
        ]
      },
      {
        id: "sub_0066",
        name: "Advanced XOR",
        desc: "Use XOR properties → maximize/minimize XOR over array/subarray or ranges.",
        problems: [
          { id:"p336", name:"Maximum XOR of Two Numbers",             difficulty:"Medium", lc:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
          { id:"p337", name:"XOR Queries of a Subarray",              difficulty:"Medium", lc:"https://leetcode.com/problems/xor-queries-of-a-subarray/" },
          { id:"p338", name:"Find XOR of numbers from L to R",        difficulty:"Medium", lc:"https://www.geeksforgeeks.org/find-xor-of-numbers-from-the-range-l-r/" },
          { id:"p339", name:"Decode XORed Array",                     difficulty:"Easy",   lc:"https://leetcode.com/problems/decode-xored-array/" },
        ]
      },
    ]
  },
];

// ============================================================
// LAST MINUTE 100 — Most critical interview problems
// ============================================================
const LAST_MINUTE_100 = [
  { id:"lm001",  name:"Two Sum",                                 difficulty:"Easy",   topic:"Array",              lc:"https://leetcode.com/problems/two-sum/" },
  { id:"lm002",  name:"Best Time to Buy and Sell Stock",         difficulty:"Easy",   topic:"Array",              lc:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { id:"lm003",  name:"Maximum Subarray (Kadane's)",             difficulty:"Medium", topic:"Array",              lc:"https://leetcode.com/problems/maximum-subarray/" },
  { id:"lm004",  name:"Product of Array Except Self",            difficulty:"Medium", topic:"Array",              lc:"https://leetcode.com/problems/product-of-array-except-self/" },
  { id:"lm005",  name:"Container With Most Water",               difficulty:"Medium", topic:"Array",              lc:"https://leetcode.com/problems/container-with-most-water/" },
  { id:"lm006",  name:"3Sum",                                    difficulty:"Medium", topic:"Array",              lc:"https://leetcode.com/problems/3sum/" },
  { id:"lm007",  name:"Trapping Rain Water",                     difficulty:"Hard",   topic:"Array",              lc:"https://leetcode.com/problems/trapping-rain-water/" },
  { id:"lm008",  name:"Valid Palindrome",                        difficulty:"Easy",   topic:"String",             lc:"https://leetcode.com/problems/valid-palindrome/" },
  { id:"lm009",  name:"Longest Substring Without Repeating",     difficulty:"Medium", topic:"String",             lc:"https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { id:"lm010",  name:"Minimum Window Substring",                difficulty:"Hard",   topic:"String",             lc:"https://leetcode.com/problems/minimum-window-substring/" },
  { id:"lm011",  name:"Group Anagrams",                          difficulty:"Medium", topic:"HashMap",            lc:"https://leetcode.com/problems/group-anagrams/" },
  { id:"lm012",  name:"Top K Frequent Elements",                 difficulty:"Medium", topic:"Heap",               lc:"https://leetcode.com/problems/top-k-frequent-elements/" },
  { id:"lm013",  name:"Valid Parentheses",                       difficulty:"Easy",   topic:"Stack",              lc:"https://leetcode.com/problems/valid-parentheses/" },
  { id:"lm014",  name:"Min Stack",                               difficulty:"Medium", topic:"Stack",              lc:"https://leetcode.com/problems/min-stack/" },
  { id:"lm015",  name:"Daily Temperatures",                      difficulty:"Medium", topic:"Stack",              lc:"https://leetcode.com/problems/daily-temperatures/" },
  { id:"lm016",  name:"Largest Rectangle in Histogram",          difficulty:"Hard",   topic:"Stack",              lc:"https://leetcode.com/problems/largest-rectangle-in-histogram/" },
  { id:"lm017",  name:"Binary Search",                           difficulty:"Easy",   topic:"Binary Search",      lc:"https://leetcode.com/problems/binary-search/" },
  { id:"lm018",  name:"Search in Rotated Sorted Array",          difficulty:"Medium", topic:"Binary Search",      lc:"https://leetcode.com/problems/search-in-rotated-sorted-array/" },
  { id:"lm019",  name:"Koko Eating Bananas",                     difficulty:"Medium", topic:"Binary Search",      lc:"https://leetcode.com/problems/koko-eating-bananas/" },
  { id:"lm020",  name:"Median of Two Sorted Arrays",             difficulty:"Hard",   topic:"Binary Search",      lc:"https://leetcode.com/problems/median-of-two-sorted-arrays/" },
  { id:"lm021",  name:"Reverse Linked List",                     difficulty:"Easy",   topic:"Linked List",        lc:"https://leetcode.com/problems/reverse-linked-list/" },
  { id:"lm022",  name:"Merge Two Sorted Lists",                  difficulty:"Easy",   topic:"Linked List",        lc:"https://leetcode.com/problems/merge-two-sorted-lists/" },
  { id:"lm023",  name:"Linked List Cycle",                       difficulty:"Easy",   topic:"Linked List",        lc:"https://leetcode.com/problems/linked-list-cycle/" },
  { id:"lm024",  name:"Reorder List",                            difficulty:"Medium", topic:"Linked List",        lc:"https://leetcode.com/problems/reorder-list/" },
  { id:"lm025",  name:"Remove Nth Node From End",                difficulty:"Medium", topic:"Linked List",        lc:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
  { id:"lm026",  name:"Merge K Sorted Lists",                    difficulty:"Hard",   topic:"Linked List",        lc:"https://leetcode.com/problems/merge-k-sorted-lists/" },
  { id:"lm027",  name:"Invert Binary Tree",                      difficulty:"Easy",   topic:"Binary Tree",        lc:"https://leetcode.com/problems/invert-binary-tree/" },
  { id:"lm028",  name:"Maximum Depth of Binary Tree",            difficulty:"Easy",   topic:"Binary Tree",        lc:"https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
  { id:"lm029",  name:"Diameter of Binary Tree",                 difficulty:"Easy",   topic:"Binary Tree",        lc:"https://leetcode.com/problems/diameter-of-binary-tree/" },
  { id:"lm030",  name:"Binary Tree Level Order Traversal",       difficulty:"Medium", topic:"Binary Tree",        lc:"https://leetcode.com/problems/binary-tree-level-order-traversal/" },
  { id:"lm031",  name:"Binary Tree Right Side View",             difficulty:"Medium", topic:"Binary Tree",        lc:"https://leetcode.com/problems/binary-tree-right-side-view/" },
  { id:"lm032",  name:"LCA of Binary Tree",                      difficulty:"Medium", topic:"Binary Tree",        lc:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
  { id:"lm033",  name:"Binary Tree Maximum Path Sum",            difficulty:"Hard",   topic:"Binary Tree",        lc:"https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
  { id:"lm034",  name:"Serialize and Deserialize Binary Tree",   difficulty:"Hard",   topic:"Binary Tree",        lc:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
  { id:"lm035",  name:"Validate Binary Search Tree",             difficulty:"Medium", topic:"Binary Tree",        lc:"https://leetcode.com/problems/validate-binary-search-tree/" },
  { id:"lm036",  name:"Kth Smallest Element in a BST",          difficulty:"Medium", topic:"Binary Tree",        lc:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
  { id:"lm037",  name:"Number of Islands",                       difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/number-of-islands/" },
  { id:"lm038",  name:"Pacific Atlantic Water Flow",             difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/pacific-atlantic-water-flow/" },
  { id:"lm039",  name:"Course Schedule",                         difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/course-schedule/" },
  { id:"lm040",  name:"Course Schedule II",                      difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/course-schedule-ii/" },
  { id:"lm041",  name:"Word Ladder",                             difficulty:"Hard",   topic:"Graph",              lc:"https://leetcode.com/problems/word-ladder/" },
  { id:"lm042",  name:"Network Delay Time",                      difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/network-delay-time/" },
  { id:"lm043",  name:"Clone Graph",                             difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/clone-graph/" },
  { id:"lm044",  name:"Rotting Oranges",                         difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/rotting-oranges/" },
  { id:"lm045",  name:"Kth Largest Element in an Array",         difficulty:"Medium", topic:"Heap",               lc:"https://leetcode.com/problems/kth-largest-element-in-an-array/" },
  { id:"lm046",  name:"Find Median from Data Stream",            difficulty:"Hard",   topic:"Heap",               lc:"https://leetcode.com/problems/find-median-from-data-stream/" },
  { id:"lm047",  name:"Task Scheduler",                          difficulty:"Medium", topic:"Heap",               lc:"https://leetcode.com/problems/task-scheduler/" },
  { id:"lm048",  name:"Sliding Window Maximum",                  difficulty:"Hard",   topic:"Heap",               lc:"https://leetcode.com/problems/sliding-window-maximum/" },
  { id:"lm049",  name:"Permutations",                            difficulty:"Medium", topic:"Backtracking",       lc:"https://leetcode.com/problems/permutations/" },
  { id:"lm050",  name:"Combination Sum",                         difficulty:"Medium", topic:"Backtracking",       lc:"https://leetcode.com/problems/combination-sum/" },
  { id:"lm051",  name:"Word Search",                             difficulty:"Medium", topic:"Backtracking",       lc:"https://leetcode.com/problems/word-search/" },
  { id:"lm052",  name:"N-Queens",                                difficulty:"Hard",   topic:"Backtracking",       lc:"https://leetcode.com/problems/n-queens/" },
  { id:"lm053",  name:"Generate Parentheses",                    difficulty:"Medium", topic:"Backtracking",       lc:"https://leetcode.com/problems/generate-parentheses/" },
  { id:"lm054",  name:"Palindrome Partitioning",                 difficulty:"Medium", topic:"Backtracking",       lc:"https://leetcode.com/problems/palindrome-partitioning/" },
  { id:"lm055",  name:"Jump Game",                               difficulty:"Medium", topic:"Greedy",             lc:"https://leetcode.com/problems/jump-game/" },
  { id:"lm056",  name:"Jump Game II",                            difficulty:"Medium", topic:"Greedy",             lc:"https://leetcode.com/problems/jump-game-ii/" },
  { id:"lm057",  name:"Non-overlapping Intervals",               difficulty:"Medium", topic:"Greedy",             lc:"https://leetcode.com/problems/non-overlapping-intervals/" },
  { id:"lm058",  name:"Gas Station",                             difficulty:"Medium", topic:"Greedy",             lc:"https://leetcode.com/problems/gas-station/" },
  { id:"lm059",  name:"Partition Labels",                        difficulty:"Medium", topic:"Greedy",             lc:"https://leetcode.com/problems/partition-labels/" },
  { id:"lm060",  name:"Climbing Stairs",                         difficulty:"Easy",   topic:"Dynamic Programming",lc:"https://leetcode.com/problems/climbing-stairs/" },
  { id:"lm061",  name:"House Robber",                            difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/house-robber/" },
  { id:"lm062",  name:"Longest Common Subsequence",              difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/longest-common-subsequence/" },
  { id:"lm063",  name:"Edit Distance",                           difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/edit-distance/" },
  { id:"lm064",  name:"Coin Change",                             difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/coin-change/" },
  { id:"lm065",  name:"Partition Equal Subset Sum",              difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/partition-equal-subset-sum/" },
  { id:"lm066",  name:"Longest Increasing Subsequence",          difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/longest-increasing-subsequence/" },
  { id:"lm067",  name:"Unique Paths",                            difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/unique-paths/" },
  { id:"lm068",  name:"Maximal Square",                          difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/maximal-square/" },
  { id:"lm069",  name:"Target Sum",                              difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/target-sum/" },
  { id:"lm070",  name:"Implement Trie (Prefix Tree)",            difficulty:"Medium", topic:"Trie",               lc:"https://leetcode.com/problems/implement-trie-prefix-tree/" },
  { id:"lm071",  name:"Word Search II",                          difficulty:"Hard",   topic:"Trie",               lc:"https://leetcode.com/problems/word-search-ii/" },
  { id:"lm072",  name:"Design Add and Search Words",             difficulty:"Medium", topic:"Trie",               lc:"https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
  { id:"lm073",  name:"Single Number",                           difficulty:"Easy",   topic:"Bit Manipulation",   lc:"https://leetcode.com/problems/single-number/" },
  { id:"lm074",  name:"Number of 1 Bits",                        difficulty:"Easy",   topic:"Bit Manipulation",   lc:"https://leetcode.com/problems/number-of-1-bits/" },
  { id:"lm075",  name:"Counting Bits",                           difficulty:"Easy",   topic:"Bit Manipulation",   lc:"https://leetcode.com/problems/counting-bits/" },
  { id:"lm076",  name:"Missing Number",                          difficulty:"Easy",   topic:"Bit Manipulation",   lc:"https://leetcode.com/problems/missing-number/" },
  { id:"lm077",  name:"Reverse Bits",                            difficulty:"Easy",   topic:"Bit Manipulation",   lc:"https://leetcode.com/problems/reverse-bits/" },
  { id:"lm078",  name:"Subsets",                                 difficulty:"Medium", topic:"Backtracking",       lc:"https://leetcode.com/problems/subsets/" },
  { id:"lm079",  name:"Subsets II",                              difficulty:"Medium", topic:"Backtracking",       lc:"https://leetcode.com/problems/subsets-ii/" },
  { id:"lm080",  name:"Letter Combinations of a Phone Number",   difficulty:"Medium", topic:"Backtracking",       lc:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
  { id:"lm081",  name:"Find the Duplicate Number",               difficulty:"Medium", topic:"Linked List",        lc:"https://leetcode.com/problems/find-the-duplicate-number/" },
  { id:"lm082",  name:"LRU Cache",                               difficulty:"Medium", topic:"Linked List",        lc:"https://leetcode.com/problems/lru-cache/" },
  { id:"lm083",  name:"Copy List with Random Pointer",           difficulty:"Medium", topic:"Linked List",        lc:"https://leetcode.com/problems/copy-list-with-random-pointer/" },
  { id:"lm084",  name:"Subarray Sum Equals K",                   difficulty:"Medium", topic:"HashMap",            lc:"https://leetcode.com/problems/subarray-sum-equals-k/" },
  { id:"lm085",  name:"Longest Consecutive Sequence",            difficulty:"Medium", topic:"HashMap",            lc:"https://leetcode.com/problems/longest-consecutive-sequence/" },
  { id:"lm086",  name:"Find All Anagrams in a String",           difficulty:"Medium", topic:"String",             lc:"https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
  { id:"lm087",  name:"Decode String",                           difficulty:"Medium", topic:"Stack",              lc:"https://leetcode.com/problems/decode-string/" },
  { id:"lm088",  name:"Accounts Merge",                          difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/accounts-merge/" },
  { id:"lm089",  name:"Alien Dictionary",                        difficulty:"Hard",   topic:"Graph",              lc:"https://leetcode.com/problems/alien-dictionary/" },
  { id:"lm090",  name:"Split Array Largest Sum",                 difficulty:"Hard",   topic:"Binary Search",      lc:"https://leetcode.com/problems/split-array-largest-sum/" },
  { id:"lm091",  name:"House Robber III",                        difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/house-robber-iii/" },
  { id:"lm092",  name:"Burst Balloons",                          difficulty:"Hard",   topic:"Dynamic Programming",lc:"https://leetcode.com/problems/burst-balloons/" },
  { id:"lm093",  name:"Distinct Subsequences",                   difficulty:"Hard",   topic:"Dynamic Programming",lc:"https://leetcode.com/problems/distinct-subsequences/" },
  { id:"lm094",  name:"Best Time to Buy Stock III",              difficulty:"Hard",   topic:"Dynamic Programming",lc:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" },
  { id:"lm095",  name:"Regular Expression Matching",             difficulty:"Hard",   topic:"Dynamic Programming",lc:"https://leetcode.com/problems/regular-expression-matching/" },
  { id:"lm096",  name:"Minimum Cost to Connect All Points",      difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/min-cost-to-connect-all-points/" },
  { id:"lm097",  name:"Sort List",                               difficulty:"Medium", topic:"Linked List",        lc:"https://leetcode.com/problems/sort-list/" },
  { id:"lm098",  name:"Maximum XOR of Two Numbers",              difficulty:"Medium", topic:"Trie",               lc:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
  { id:"lm099",  name:"Cheapest Flights Within K Stops",         difficulty:"Medium", topic:"Graph",              lc:"https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
  { id:"lm100",  name:"Word Break",                              difficulty:"Medium", topic:"Dynamic Programming",lc:"https://leetcode.com/problems/word-break/" },
];
