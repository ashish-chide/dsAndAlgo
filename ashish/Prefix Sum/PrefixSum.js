function prefixSum(arr, k) {
  let sum = 0;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element;
    result.push(sum);
  }
  return result;
}

console.log(prefixSum([1, 2, 3, 4, 5, 6, 7], 8));

// prefix sum

// 1. Equilibrium index of an array -- easy

function equilibrium(array) {
  let totalSum = array.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    totalSum = totalSum - element;
    if (totalSum == leftSum) return index;
    leftSum += element;
  }
  return -1;

  // using two arrays

  //   let prefixForward = [];
  //   let prefixRev = [];

  //   let sum = 0;

  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     sum = sum + element;
  //     prefixForward.push(sum);
  //   }
  //   sum = 0;
  //   for (let index = array.length - 1; index >= 0; index--) {
  //     const element = array[index];
  //     sum = sum + element;
  //     prefixRev.unshift(sum);
  //   }
  //   console.log(prefixForward, prefixRev);
  //   for (let index = 0; index < prefixForward.length; index++) {
  //     const element = prefixForward[index];
  //     if (element == prefixRev[index]) return index;
  //   }
}

// console.log(equilibrium([-7, 1, 5, 2, -4, 3, 0]));

// Find subarray with given sum | Set 2 (Handles Negative Numbers)
// https://www.geeksforgeeks.org/find-subarray-with-given-sum-in-array-of-integers/?ref=leftbar-rightbar
// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4
// Explanation: Sum of elements between indices
// 2 and 4 is 20 + 3 + 10 = 33

// Input: arr[] = {10, 2, -2, -20, 10}, sum = -10
// Output: Sum found between indexes 0 to 3
// Explanation: Sum of elements between indices
// 0 and 3 is 10 + 2 - 2 - 20 = -10

// Input: arr[] = {-10, 0, 2, -2, -20, 10}, sum = 20
// Output: No subarray with given sum exists
// Explanation: There is no subarray with the given sum

// function subArraySum(array, k) {
//   let sum = 0;
//   let result = new Map();

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     sum = sum + element;
//     if (sum == k) return [0, i];
//     if (result.has(sum - k)) return [result.get(sum - k), i];
//     result.set(sum, i);
//   }
//   return -1;
// }

// console.log(subArraySum([1, 4, 20, 3, 10, 5], 33));

// console.log(subArraySum([10, 2, -2, -20, 10], -10));
// console.log(subArraySum([-10, 0, 2, -2, -20, 10], 20));

// Find an element in array such that sum of left array is equal to sum of right array

// Given, an array of size n. Find an element that divides the array into two sub-arrays with equal sums.
// Examples:

// Input: 1 4 2 5
// Output: 2
// Explanation: If 2 is the partition,
//       subarrays are : {1, 4} and {5}

// Input: 2 3 4 1 4 5
// Output: 1
// Explanation: If 1 is the partition,
//  Subarrays are : {2, 3, 4} and {4, 5}

function equalSubArr(arr) {
  let sum = 0;
  let prefix = [];
  let suffix = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum = sum + element;
    prefix.push(sum);
  }
  sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    sum = sum + element;
    suffix.unshift(sum);
  }
  for (let k = 0; k < prefix.length; k++) {
    const element = prefix[k];
    if (element === suffix[k]) return arr[k];
  }
}

// console.log(equalSubArr([1, 4, 2, 5]));
// console.log(equalSubArr([2, 3, 4, 1, 4, 5]));

// Find if there is a subarray with 0 sum
// Given an array of positive and negative numbers,
// find if there is a subarray (of size at-least one) with 0 sum.

// Input: {4, 2, -3, 1, 6}
// Output: true
// Explanation:
// There is a subarray with zero sum from index 1 to 3.

// Input: {4, 2, 0, 1, 6}
// Output: false

// Input: {-3, 2, 3, 1, 6}
// Output: false

function solve(array) {
  let sum = 0;
  let result = new Map();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum + element;
    if (sum == 0) return [0, i];
    if (result.has(sum) && result.get(sum) + 1 != i)
      return [result.get(sum) + 1, i];
    result.set(sum, i);
  }

  return -1;
}

// console.log(solve([4, 2, -3, 1, 6]));
// console.log(solve([4, 2, 0, 1, 6]));
// console.log(solve([-3, 2, 3, 1, 6]));

// Largest subarray with equal number of 0s and 1s
// Given an array containing only 0s and 1s, find the largest subarray which contains equal no of 0s and 1s. The expected time complexity is O(n).

// Examples:

// Input: arr[] = {1, 0, 1, 1, 1, 0, 0} // 1 1 2 3 4 4 4
// Output: 1 to 6
// (Starting and Ending indexes of output subarray)

// Input: arr[] = {1, 1, 1, 1}
// Output: No such subarray

// Input: arr[] = {0, 0, 1, 1, 0}
// Output: 0 to 3 Or 1 to 4

function largestSubArr(arr) {
  let sum = 0;
  let result = new Map();
  let max = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    element = element == 0 ? -1 : element;

    sum = sum + element;
    if (sum === 0) {
      max = i + 1;
      right = i;
    }

    if (result.has(sum)) {
      max = Math.max(max, i - result.get(sum));
      right = i;
    } else {
      result.set(sum, i);
    }
    console.log(right - max + 1, right);
  }
  console.log("-----");
}
// largestSubArr([1, 0, 1, 1, 1, 0, 0]); // 1 -1 1 1 1 -1 -1 // 1 0 1 2 3 2 1
// largestSubArr([1, 1, 1, 1]);
// largestSubArr([0, 0, 1, 1, 0]);
// largestSubArr([1, 0, 0, 1, 0, 1, 1]);

// Maximum occurred integer in n ranges
// Input : L1 = 1 R1 = 15
//         L2 = 4 R2 = 8
//         L3 = 3 R3 = 5
//         L3 = 1 R3 = 4
// Output : 4

// Input : L1 = 1 R1 = 15
//         L2 = 5 R2 = 8
//         L3 = 9 R3 = 12
//         L4 = 13 R4 = 20
//         L5 = 21 R5 = 30
// Output : 5
// Numbers having maximum occurrence i.e 2  are 5, 6,
// 7, 8, 9, 10, 11, 12, 13, 14, 15. The smallest number
// among all are 5.

// function prefix(arr) {
//   let sum = 0;
//   let result = [];
//   let max = -Infinity;
//   let maxInd = 0;
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     sum = sum + element;
//     if (sum > max) {
//       max = sum;
//       maxInd = index;
//     }
//     result.push(sum);
//   }
//   console.log(result);
//   return maxInd;
// }
function maximumOccurredElement(L, R) {
  let max = Math.max(...L, ...R);
  let array = Array(max + 2).fill(0);

  for (let i = 0; i < L.length; i++) {
    array[L[i]] += 1;
    array[R[i] + 1] -= 1;
  }
  console.log(prefix(array));
  return prefix(array);
}

// let L = [1, 4, 9, 13, 21];
// let R = [15, 8, 12, 20, 30];
// maximumOccurredElement([1, 2, 3], [3, 5, 7]);
// maximumOccurredElement(L, R);

// Prefix Sum of Matrix (Or 2D Array)

//     Difficulty Level : Easy

// Given a matrix (or 2D array) a[][] of integers, find prefix sum matrix for it. Let prefix sum matrix be psa[][]. The value of psa[i][j] contains sum of all values which are above it or on left of it.
function prefix(arr) {
  let sum = 0;
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum = sum + element;
    result.push(sum);
  }
  return result;
}

function prefixMatrix(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      const subArray = prefix(array[i]);
      result.push(subArray);
    } else {
      const subArray = prefix(array[i]).map((e, j) => e + result[i - 1][j]);
      result.push(subArray);
    }
  }
  console.log(result);
}

// let array = [
//   [10, 20, 30],
//   [5, 10, 20],
//   [2, 4, 6],
// ];
// prefixMatrix(array);

// Total numbers with no repeated digits in a range

// Given a range L, R find total such numbers in the given range such that they have no repeated digits.
// For example:
// 12 has no repeated digit.
// 22 has repeated digit.
// 102, 194 and 213 have no repeated digit.
// 212, 171 and 4004 have repeated digits.

// Input : 10 12
// Output : 2
// Explanation : In the given range
// 10 and 12 have no repeated digit
// where as 11 has repeated digit.

// Input : 1 100
// Output : 90
// not done
function repeatedDigits(l, r) {
  const right = Array.from(Array(r), (_, i) => i + 1);
  const left = Array.from(Array(l), (_, i) => i + 1);
  const prefixR = prefix(right);
  const prefixL = prefix(left);
  console.log(prefixR, prefixL);
}

repeatedDigits(1, 90);
