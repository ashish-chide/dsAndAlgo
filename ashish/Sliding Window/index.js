// sliding window

// Max Sum Subarray of size K

// Input:
// N = 4, K = 2
// Arr = [100, 200, 300, 400]
// Output:
// 700
// Explanation:
// Arr3  + Arr4 =700,
// which is maximum.

function maxSubArr(array, k) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
    if (i >= k - 1) {
      maxSum = Math.max(currentSum, maxSum);
      currentSum -= array[i - k + 1];
    }
  }
  return maxSum;
}

// maxSubArr([100, 200, 300, 400], 2); // 700

// Subarray with 0 sum

// Input:
// 5
// 4 2 -3 1 6
// 4 6 3 4 6
// 0 1 2 3 4
// Output:
// Yes

// Explanation:
// 2, -3, 1 is the subarray
// with sum 0.

function subArrayWithZero(array) {
  let sum = 0;
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (sum == 0) return [0, i];

    if (map.has(sum)) {
      return [map.get(sum) + 1, i];
    }

    map.set(sum, i);
  }
  return -1;
}

// console.log(subArrayWithZero([4, 2, -3, 1, 6]));

// Maximum of all subarrays of size k
// Given an array arr[] of size N and an integer K. Find the maximum for each and every contiguous subarray of size K.

// Example 1:

// Input:
// N = 9, K = 3
// arr[] = 1 2 3 1 4 5 2 3 6
// Output:
// 3 3 4 5 5 5 6
// Explanation:
// 1st contiguous subarray = {1 2 3} Max = 3
// 2nd contiguous subarray = {2 3 1} Max = 3
// 3rd contiguous subarray = {3 1 4} Max = 4
// 4th contiguous subarray = {1 4 5} Max = 5
// 5th contiguous subarray = {4 5 2} Max = 5
// 6th contiguous subarray = {5 2 3} Max = 5
// 7th contiguous subarray = {2 3 6} Max = 6

function maxOfAllSubArr(array, k) {
  let current = -Infinity;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    current = Math.max(current, array[i]);
    if (i >= k - 1) {
      result.push(current);
      current = Math.max(current, array[i - 1]);
    }
  }
  console.log(result);
}

// maxOfAllSubArr([1, 2, 3, 1, 4, 5, 2, 3, 6], 3);
// maxOfAllSubArr([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4);

// Count distinct elements in every window
// Given an array of integers and a number K. Find the count of distinct elements in every window of size K in the array.

function countDistinct(array, k) {
  let map = new Map();
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (map.has(element)) {
      map.set(element, map.has(element) + 1);
    } else {
      map.set(element, 1);
    }

    if (i >= k - 1) {
      result.push(map.size);
      if (map.get(array[i - k + 1]) == 1) {
        map.delete(array[i - k + 1]);
      } else {
        map.set(array[i - k + 1], map.get(array[i - k + 1]) - 1);
      }
    }
  }

  return result;
}

// countDistinct([1, 2, 1, 3, 4, 2, 3], 4);

// Count ways to reach the n'th stair

// Input:
// n = 4
// Output: 5
// Explanation:
// You can reach 4th stair in 5 ways.
// Way 1: Climb 2 stairs at a time.
// Way 2: Climb 1 stair at a time.
// Way 3: Climb 2 stairs, then 1 stair
// and then 1 stair.
// Way 4: Climb 1 stair, then 2 stairs
// then 1 stair.
// Way 5: Climb 1 stair, then 1 stair and
// then 2 stairs.

//DP -- memoisation
function countStairs(n, table = []) {
  if (n == 0) return 1;
  if (n < 0) return 0;

  if (table[n] > 0) return table[n];

  const first = countStairs(n - 1, table);
  const second = countStairs(n - 2, table);
  let result = first + second;
  table[n] = result;
  return result;
}

// function countStairsTabulation(n) {
//   let result = 0;
//   let curr = 1;

//   for (let i = 0; i < n; i++) {
//     curr += i;
//     if (i >= 1) {
//       result += curr;
//       curr = curr - (i - 1);
//     }
//   }
//   return result;
// }

// console.log(countStairs(10));
// console.log(countStairsTabulation(10));

// console.log(countStairs(4));
// console.log(countStairsTabulation(4));

// console.log(countStairs(2));
// console.log(countStairsTabulation(2));

// z o o m l a z a p z o
// oza

function hasSubString(sub, str) {
  return sub.split("").every((el) => str.includes(el));
}

function smallestWindow(s, p) {
  let curr = "";
  let min = Infinity;
  let minStr = "";
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    curr += s[j];

    while (hasSubString(p, curr)) {
      if (min > curr.length) {
        minStr = curr;
      }
      min = Math.min(curr.length, min);
      i++;
      curr = s.slice(i, j + 1);
    }
  }

  console.log(minStr);
}

// smallestWindow("zoomlazapzo", "oza");
// smallestWindow("timetopractice", "toc");

// z o o m l a z a p z o
//                     j
//               i
// curr = omlaz,  min = 5

// Subarray with given sum

// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements
// from 2nd position to 4th position
// is 12.

function subarraySum(array, n) {
  let curr = 0;
  let j = 0;

  for (let i = 0; i < array.length; i++) {
    curr += array[i];

    while (curr > n) {
      curr -= array[j];
      j++;
    }

    if (curr == n) return [j, i];
  }
  return -1;
}
// console.log(
//   subarraySum([1, 2, 3, 7, 5], 12),
//   subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)
// );
// 1 2 3 7 5
//       i
//   j

function largestSubArr(array) {
  let map = new Map();
  let curr = 0;
  let max = -Infinity;
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i] == 0 ? -1 : 1;
    curr += element;

    if (curr == 0) {
      max = i + 1;
      j = i;
    }
    if (map.has(curr)) {
      max = Math.max(i - map.get(curr), max);
      j = i;
    } else {
      map.set(curr, i);
    }
  }
  console.log(max);
}

// largestSubArr([1, 0, 1, 1, 1, 0, 0]);
// largestSubArr([0, 1, 0, 1]);
// largestSubArr([0, 0, 1, 0, 0]);

// Count the number of subarrays
// Hard Accuracy: 59.71% Submissions: 2868 Points: 8

// Given an array A[] of N integers and a range(L, R). The task is to find the number of subarrays having sum in the range L to R (inclusive).

function countSubarray(arr, L, R) {
  let curr = 0;
  let count = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    curr += arr[i];
    if (curr >= L && curr <= R) {
      if (i == arr.length - 1) {
        i = j;
      }
      count++;
    } else if (curr > R) {
      curr = 0;
      i = j;
      j++;
    }
  }
  console.log(count);
  return count;
}
// countSubarray([2, 3, 5, 8], 4, 13)
// [128] [28] [8] [9]

// Equivalent Sub-Arrays
// Medium Accuracy: 56.03% Submissions: 1302 Points: 4

// Given an array arr[] of n integers. Count the total number of sub-array having total distinct elements same as that of total distinct elements of the original array.

// Example 1:

// Input:
// N=5
// arr[] = {2, 1, 3, 2, 3}
// Output: 5
// Explanation:
// Total distinct elements in array is 3
// Total sub-arrays that satisfy the condition
// are:
// Subarray from index 0 to 2
// Subarray from index 0 to 3
// Subarray from index 0 to 4
// Subarray from index 1 to 3
// Subarray from index 1 to 4

function countDistinctSubarray(array) {
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      map.set(array[i], map.get(array[i]) + 1);
    } else {
      map.set(array[i], 1);
    }
  }

  let k = map.size;
  let count = 0;
  map.clear();
  let j = 0;

  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], 1);
    }
    if (map.size == k) {
      count++;
    }
    if (j < i && i == array.length - 1) {
      i = j;
      j++;
      map.clear();
    }
  }

  console.log(count);
}

// countDistinctSubarray([2, 1, 3, 2, 3]);
// countDistinctSubarray([2, 4, 4, 2, 4]);

// Length of the longest substring
// Medium Accuracy: 50.99% Submissions: 27202 Points: 4

// Given a string S, find the length of the longest substring without repeating characters.

// Example 1:

// Input:
// S = "geeksforgeeks"
// Output:
// 7
// Explanation:
// Longest substring is
// "eksforg".

function LongestSubString(str) {
  const array = str.split("");
  let charMap = new Map();
  let longestSubstring = "";
  let maxLength = -Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    if (!charMap.has(array[windowEnd])) {
      charMap.set(array[windowEnd], 1);
    } else {
      while (charMap.has(array[windowEnd])) {
        charMap.delete(array[windowStart]);
        windowStart++;
      }
      charMap.set(array[windowEnd], 1);
    }
    if (maxLength < windowEnd - windowStart + 1) {
      longestSubstring = str.slice(windowStart, windowEnd + 1);
      maxLength = windowEnd - windowStart + 1;
    }
  }
  return longestSubstring;
}
// console.log(
//   LongestSubString("geeksforgeeks"),
//   LongestSubString("aaabcd"),
//   LongestSubString("assdfg"),
//   LongestSubString("lkjlkh"),
//   LongestSubString("jhajgadsgdagdajhgdas")
// );

// g e e k s f o r g e e k s
//                     i
//       j

// Count Occurences of Anagrams
// Medium Accuracy: 50.78% Submissions: 16261 Points: 4

// Given a word pat and a text txt. Return the count of the occurences of anagrams of the word in the text.

// Example 1:

// Input:
// txt = forxxorfxdofr
// pat = for
// Output: 3
// Explanation: for, orf and ofr appears
// in the txt, hence answer is 3.

function hasItem(sub, curr) {
  const a = sub.split("").sort().join("");

  const b = curr.split("").sort().join("");
  return a == b;
}

function search(str, sub) {
  let window = sub.length;
  let curr = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    curr += str[i];

    if (i >= window - 1) {
      if (hasItem(sub, curr)) {
        count++;
      }
      curr = curr.slice(1);
    }
  }
  return count;
}
// console.log(search("forxxorfxdofr", "for"), search("aabaabaa", "aaba"));
