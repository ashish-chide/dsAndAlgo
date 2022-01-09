// smallest subarray with sum >= 8, dynamic sliding window
function SlidingDynamicWindow(arr, k) {
  let minWindowSize = Infinity;
  let windowStart = 0;
  let currWindowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currWindowSum += arr[windowEnd];
    while (currWindowSum >= k) {
      minWindowSize = Math.min(minWindowSize, windowEnd + 1 - windowStart);
      currWindowSum -= arr[windowStart];
      windowStart++;
    }
  }

  console.log(minWindowSize);
  return minWindowSize;
}

SlidingDynamicWindow([4, 2, 2, 7, 8, 1, 2, 8, 10], 8);
