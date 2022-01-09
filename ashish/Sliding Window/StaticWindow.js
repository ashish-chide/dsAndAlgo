// subarray with largest sum, sliding window is fixed size
function SlidingWindow(arr, k) {
  let curr = 0;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    curr += arr[i];
    if (i >= k - 1) {
      max = Math.max(max, curr);
      curr -= arr[i - (k - 1)];
    }
  }
  return max;
}

SlidingWindow([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3);
