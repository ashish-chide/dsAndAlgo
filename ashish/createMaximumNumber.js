// leet code 321. Create Maximum Number
// You are given two integer arrays nums1 and nums2 of lengths m and n respectively. nums1 and nums2 represent the digits of two numbers. You are also given an integer k.

// Create the maximum number of length k <= m + n from digits of the two numbers. The relative order of the digits from the same array must be preserved.

// Return an array of the k digits representing the answer.

// Input: nums1 = [3,4,6,5], nums2 = [9,1,2,5,8,3], k = 5
// Output: [9,8,6,5,3]
/*
[3,4,6,5] , [9,1,2,5,8,3]  ===> [9]
[3,4,6,5] , [1,2,5,8,3]  ===> [9,8]
[3,4,6,5] , [3]  ===> [9,8,6]
[5] , [3]  ===> [9,8,6]
[] , [3]  ===> [9,8,6, 5]
[] , []  ===> [9,8,6, 5,3]
 */

// not done!
function createMax(nums1, nums, k) {
  let array1 = nums1;
  let array2 = nums;
  const result = [];

  while ((array1.length > 0 || array2.length > 0) && k > 0) {
    let maxArr1 = Math.max(...array1);
    let maxArr2 = Math.max(...array2);
    let max = Math.max(maxArr1, maxArr2);

    if (max == maxArr1) {
      array1 = array1.slice(array1.indexOf(maxArr1) + 1);
    } else {
      array2 = array2.slice(array2.indexOf(maxArr2) + 1);
    }
    result.push(max);
    k--;
  }
  return result;
}

console.log(createMax([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5));
console.log(createMax([6, 7], [5, 0, 4], 5)); // 6,7,5,0,4

/*
  [3,4,6,5] , [9,1,2,5,8,3]  ===> [9]
  [3,4,6,5] , [1,2,5,8,3]  ===> [9]
   */
