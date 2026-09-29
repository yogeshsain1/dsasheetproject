import { DSA_DATA, LAST_MINUTE_100 } from '@/data/dsaData'
import type { Problem, Topic, LMProblem } from '@/types/dsa'

export interface ProblemDetail {
  id: string
  name: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  topic: string
  subtopic: string
  lc?: string
  gfg?: string
  companies: string[]
  description: string
  examples: {
    input: string
    output: string
    explanation?: string
  }[]
  constraints: string[]
  starterCode: {
    cpp: string
    java: string
    python: string
    javascript: string
  }
  testCases: {
    id: number
    input: string
    expectedOutput: string
    description?: string
  }[]
  explanation: {
    pattern: string
    intuition: string
    bruteForce: {
      description: string
      timeComplexity: string
      spaceComplexity: string
      steps: string[]
    }
    optimal: {
      description: string
      timeComplexity: string
      spaceComplexity: string
      steps: string[]
    }
    dryRun: {
      step: number
      state: string
      action: string
      explanation: string
    }[]
    code: {
      cpp: string
      java: string
      python: string
      javascript: string
    }
    edgeCases: string[]
    similarProblems?: {
      id: string
      name: string
      difficulty: string
    }[]
  }
}

// Flatten and index all problems
export interface ProblemIndexEntry {
  problem: Problem
  topicName: string
  subtopicName: string
}

const problemIndex: Map<string, ProblemIndexEntry> = new Map()

// Build index
;(DSA_DATA as Topic[]).forEach(topic => {
  topic.subtopics.forEach(sub => {
    sub.problems.forEach(p => {
      if (!problemIndex.has(p.id)) {
        problemIndex.set(p.id, {
          problem: p,
          topicName: topic.name,
          subtopicName: sub.name,
        })
      }
    })
  })
})

;(LAST_MINUTE_100 as LMProblem[]).forEach(p => {
  if (!problemIndex.has(p.id)) {
    problemIndex.set(p.id, {
      problem: p,
      topicName: p.topic || 'Revision',
      subtopicName: 'Must Solve 100',
    })
  }
})

export const getAllProblemIds = (): string[] => {
  return Array.from(problemIndex.keys())
}

export const getAdjacentProblemIds = (currentId: string): { prevId: string | null; nextId: string | null } => {
  const ids = getAllProblemIds()
  const idx = ids.indexOf(currentId)
  if (idx === -1) return { prevId: null, nextId: null }
  return {
    prevId: idx > 0 ? ids[idx - 1] : null,
    nextId: idx < ids.length - 1 ? ids[idx + 1] : null,
  }
}

// Curated rich deep-dives for iconic interview questions
const CURATED_PROBLEMS: Record<string, Partial<ProblemDetail>> = {
  p001: {
    description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice. You can return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        explanation: 'nums[1] + nums[2] == 2 + 4 == 6, return [1, 2].',
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]',
        explanation: 'nums[0] + nums[1] == 3 + 3 == 6, return [0, 1].',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    starterCode: {
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
        return {};
    }
};`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        return new int[]{};
    }
}`,
      python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Write your code here
        return []`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Write your code here
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    },
    testCases: [
      { id: 1, input: 'nums = [2,7,11,15], target = 9', expectedOutput: '[0,1]', description: 'Standard array with target sum' },
      { id: 2, input: 'nums = [3,2,4], target = 6', expectedOutput: '[1,2]', description: 'Target with non-adjacent elements' },
      { id: 3, input: 'nums = [3,3], target = 6', expectedOutput: '[0,1]', description: 'Array with identical elements' },
    ],
    explanation: {
      pattern: 'Hash Map Lookup / Complement Matching',
      intuition: `Instead of checking every pair with nested loops, notice that for any number \`x\`, we are looking for its exact complement \`target - x\`.
By maintaining a Hash Map of numbers we have already seen alongside their indices, we can check if the complement was already visited in O(1) time.`,
      bruteForce: {
        description: 'Iterate through every pair of elements (i, j) where i < j and check if nums[i] + nums[j] equals target.',
        timeComplexity: 'O(N²)',
        spaceComplexity: 'O(1)',
        steps: [
          'Run outer loop from i = 0 to N-1',
          'Run inner loop from j = i+1 to N-1',
          'If nums[i] + nums[j] == target, return [i, j]',
        ],
      },
      optimal: {
        description: 'Single-pass Hash Map. For each element nums[i], calculate complement = target - nums[i]. Check if complement exists in the map. If yes, return stored index and current index. Otherwise, store nums[i] -> i in map.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)',
        steps: [
          'Initialize an empty hash map (value -> index).',
          'Traverse nums with index i.',
          'Calculate complement = target - nums[i].',
          'If complement is found in map, return [map.get(complement), i].',
          'Otherwise, store map.set(nums[i], i).',
        ],
      },
      dryRun: [
        { step: 1, state: 'i=0, num=2, map={}', action: 'complement = 9 - 2 = 7', explanation: '7 not in map. Store map[2]=0' },
        { step: 2, state: 'i=1, num=7, map={2:0}', action: 'complement = 9 - 7 = 2', explanation: '2 is in map! Return [map[2], 1] -> [0, 1]' },
      ],
      code: {
        cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen;
        for (int i = 0; i < (int)nums.size(); ++i) {
            int complement = target - nums[i];
            if (seen.find(complement) != seen.end()) {
                return {seen[complement], i};
            }
            seen[nums[i]] = i;
        }
        return {};
    }
};`,
        java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
        python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`,
        javascript: `function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}`,
      },
      edgeCases: [
        'Array contains negative numbers: complement math works without modifications.',
        'Target sum formed by two identical numbers (e.g. [3,3], target=6): the second 3 finds the first 3 in the map.',
        'Large arrays: Hash Map ensures linear O(N) runtime compared to timeout on O(N²).',
      ],
    },
  },
}

// Programmatic fallback generator for any problem from dsaData
function inferPattern(topic: string, subtopic: string, name: string): string {
  const text = `${topic} ${subtopic} ${name}`.toLowerCase()
  if (text.includes('two pointer') || text.includes('2 pointer')) return 'Two Pointers'
  if (text.includes('sliding window')) return 'Sliding Window'
  if (text.includes('binary search')) return 'Binary Search & Monotonic Condition'
  if (text.includes('stack') || text.includes('parenthes')) return 'Monotonic Stack / LIFO'
  if (text.includes('queue') || text.includes('sliding window max')) return 'Monotonic Queue / FIFO'
  if (text.includes('linked list') || text.includes('cycle') || text.includes('reverse list')) return 'Fast & Slow Pointers / Pointer Manipulation'
  if (text.includes('tree') || text.includes('bst') || text.includes('traversal')) return 'Tree DFS / BFS & Recursion'
  if (text.includes('graph') || text.includes('island') || text.includes('cycle')) return 'Graph Traversal (BFS / DFS / Union-Find)'
  if (text.includes('dp') || text.includes('dynamic programming') || text.includes('knapsack') || text.includes('subsequence')) return 'Dynamic Programming (State Transitions)'
  if (text.includes('backtrack') || text.includes('combination') || text.includes('permutation') || text.includes('n-queen')) return 'Backtracking / Pruning Search Tree'
  if (text.includes('trie') || text.includes('prefix')) return 'Trie / Prefix Tree'
  if (text.includes('heap') || text.includes('priority queue') || text.includes('kth')) return 'Min/Max Heap & Priority Queue'
  if (text.includes('bit') || text.includes('xor')) return 'Bit Manipulation'
  if (text.includes('greedy') || text.includes('interval')) return 'Greedy Choice Property'
  return 'Pattern-Based Algorithmic Traversal'
}

function generateProblemDetails(entry: ProblemIndexEntry): ProblemDetail {
  const { problem, topicName, subtopicName } = entry
  const curated = CURATED_PROBLEMS[problem.id]
  const pattern = inferPattern(topicName, subtopicName, problem.name)

  const cleanName = problem.name
  const fnName = cleanName
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .map((w, idx) => idx === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('')

  const isMathOrBasics = topicName.toLowerCase().includes('basic') || topicName.toLowerCase().includes('math')
  const defaultDesc = isMathOrBasics
    ? `Implement an efficient solution to solve **${problem.name}**.\n\nTake the input arguments, apply the required algorithmic logic, and return or output the expected result.`
    : `Given the input parameters corresponding to **${problem.name}**, design an optimal algorithm to find and return the expected result.\n\nAnalyze constraints, consider edge cases, and minimize both time and auxiliary space complexity.`

  const defaultConstraints = [
    `1 <= input.length <= 10^5`,
    `-10^9 <= value <= 10^9`,
    `Optimize for standard technical interview constraints (typically O(N) or O(N log N)).`,
  ]

  const starterCode = {
    cpp: `class Solution {
public:
    // Problem: ${problem.name}
    // Pattern: ${pattern}
    auto ${fnName || 'solve'}(/* arguments */) {
        // Write your solution here
        
    }
};`,
    java: `class Solution {
    // Problem: ${problem.name}
    // Pattern: ${pattern}
    public void ${fnName || 'solve'}() {
        // Write your solution here
        
    }
}`,
    python: `class Solution:
    # Problem: ${problem.name}
    # Pattern: ${pattern}
    def ${fnName || 'solve'}(self, *args):
        # Write your solution here
        pass`,
    javascript: `/**
 * Problem: ${problem.name}
 * Pattern: ${pattern}
 * Difficulty: ${problem.difficulty}
 */
function ${fnName || 'solve'}(...args) {
  // Write your solution here
  return true;
}`,
  }

  const solutionCode = {
    cpp: `class Solution {
public:
    // Optimal Solution for: ${problem.name}
    // Approach: ${pattern}
    auto ${fnName || 'solve'}(/* input */) {
        // 1. Handle edge cases
        // 2. Apply ${pattern}
        // 3. Return computed result
        return 0;
    }
};`,
    java: `class Solution {
    // Optimal Solution for: ${problem.name}
    // Approach: ${pattern}
    public void ${fnName || 'solve'}() {
        // 1. Validate inputs & edge cases
        // 2. Traverse / process data structure
        // 3. Return optimal answer
    }
}`,
    python: `class Solution:
    # Optimal Solution for: ${problem.name}
    # Approach: ${pattern}
    def ${fnName || 'solve'}(self, *args):
        # 1. Base / edge cases
        # 2. Implementation using ${pattern}
        return None`,
    javascript: `/**
 * Optimal Solution for: ${problem.name}
 * Approach: ${pattern}
 */
function ${fnName || 'solve'}(...args) {
  // 1. Guard clauses
  if (!args || args.length === 0) return null;
  // 2. Main algorithmic logic
  return true;
}`,
  }

  return {
    id: problem.id,
    name: problem.name,
    difficulty: problem.difficulty,
    topic: topicName,
    subtopic: subtopicName,
    lc: problem.lc,
    gfg: problem.gfg,
    companies: problem.companies || ['Amazon', 'Google', 'Microsoft'],
    description: curated?.description || defaultDesc,
    examples: curated?.examples || [
      {
        input: 'Sample input representation',
        output: 'Expected output value',
        explanation: `Demonstrates the core requirements for ${problem.name}.`,
      },
      {
        input: 'Boundary or secondary input scenario',
        output: 'Corresponding valid answer',
        explanation: 'Shows handling of non-trivial cases.',
      },
    ],
    constraints: curated?.constraints || defaultConstraints,
    starterCode: curated?.starterCode || starterCode,
    testCases: curated?.testCases || [
      { id: 1, input: 'Standard Test Case', expectedOutput: 'Expected Match', description: 'Primary test execution' },
      { id: 2, input: 'Edge Case Scenario', expectedOutput: 'Valid Result', description: 'Checks boundary input' },
    ],
    explanation: {
      pattern: curated?.explanation?.pattern || pattern,
      intuition: curated?.explanation?.intuition ||
        `To solve **${problem.name}**, break down the problem statement into its fundamental invariants.
Recognize that this problem maps directly to the **${pattern}** pattern.
By exploiting the structure of the input (e.g. sorted order, hash lookups, or recursive substructure), we avoid exhaustive search and achieve optimal complexity.`,
      bruteForce: curated?.explanation?.bruteForce || {
        description: `Examine all possible combinations or simulate every step directly without auxiliary state optimizations.`,
        timeComplexity: problem.difficulty === 'Easy' ? 'O(N²)' : 'O(2^N) or O(N³)',
        spaceComplexity: 'O(1) auxiliary space',
        steps: [
          'Generate all candidates or permutations.',
          'Validate each candidate against the problem criteria.',
          'Pick the best or first matching result.',
        ],
      },
      optimal: curated?.explanation?.optimal || {
        description: `Apply the **${pattern}** technique to reduce redundant computations and achieve linear or sub-linear execution.`,
        timeComplexity: problem.difficulty === 'Easy' ? 'O(N)' : problem.difficulty === 'Medium' ? 'O(N log N) or O(N)' : 'O(N)',
        spaceComplexity: 'O(1) to O(N) depending on storage requirements',
        steps: [
          'Preprocess input or initialize tracking pointers / hash tables.',
          'Iterate through the elements, maintaining running invariants.',
          'Directly produce the final result in a single or dual pass.',
        ],
      },
      dryRun: curated?.explanation?.dryRun || [
        { step: 1, state: 'Initialization', action: 'Set up pointers / tracking structures', explanation: 'Read inputs and initialize state.' },
        { step: 2, state: 'Main Loop Execution', action: 'Process current element with pattern logic', explanation: 'Evaluate condition and advance indices.' },
        { step: 3, state: 'Termination & Return', action: 'Finalize output', explanation: 'Return computed optimal answer.' },
      ],
      code: curated?.explanation?.code || solutionCode,
      edgeCases: curated?.explanation?.edgeCases || [
        'Empty or null input / length 0 or 1.',
        'Inputs with duplicate elements or negative values.',
        'Extremes: maximum or minimum integer boundaries.',
      ],
    },
  }
}

export function getProblemDetails(id: string): ProblemDetail | null {
  const entry = problemIndex.get(id)
  if (!entry) return null
  return generateProblemDetails(entry)
}
