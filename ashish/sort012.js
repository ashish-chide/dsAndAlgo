// Sort an array of 0s, 1s, and 2s

// An array of size ‘N’ is given. The test is to sort the arrays in ascending order.

// A possible input is:
// N = 5
// Arr[]= 	{ 0 2  1 2 0}
// Answer:
// Output: 0 0 1 2 2

function sort(array) {
  let low = 0;
  let mid = 0;
  let high = array.length - 1;

  while (mid <= high) {
    if (array[mid] === 0) {
      temp = array[mid];
      array[mid] = array[low];
      array[low] = temp;
      low++;
      mid++;
    } else if (array[mid] == 1) {
      mid++;
    } else {
      temp = array[mid];
      array[mid] = array[high];
      array[high] = temp;
      high--;
    }
  }
  console.log(array);
  return;
}
sort([0, 1, 2, 0, 1, 2, 0, 2, 2, 0, 1]);
