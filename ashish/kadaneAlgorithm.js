
// kadane's algorithm
function LongestSumSubArray(array) {
    let max = array[0];
    let currentSum = max;
  
    for (let index = 1; index < array.length; index++) {
      currentSum = Math.max(currentSum + array[index], array[index]);
      max = Math.max(max, currentSum);
    }
    return max;
  }
  
  console.log(LongestSumSubArray([-2, 2, 5, -11, 6])); // 3
  console.log(LongestSumSubArray([2, 2, 5, -11, 6])); // 3
  console.log(LongestSumSubArray([-1, 2, -1, -1, 6, 3, -1, 2])); // 3
  