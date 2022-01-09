// Given a 2D Array,

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// An hourglass in
// is a subset of values with indices falling in this pattern in
// 's graphical representation:

// a b c
//   d
// e f g

// There are
// hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be

// Example

// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0

// hourglass sums are:

// -63, -34, -9, 12,
// -10,   0, 28, 23,
// -27, -11, -2, 10,
//   9,  17, 25, 18

// The highest hourglass sum is
// from the hourglass beginning at row , column :

function hourglassSum(arr) {
  // Write your code here
  let currentRow = 0;
  let subMatrix = arr.length / 2;
  let result = [];
  while (currentRow <= subMatrix) {
    let currentCol = 0;
    while (currentCol <= subMatrix) {
      let sum = 0;
      for (let row = currentRow; row < currentRow + subMatrix; row++) {
        for (let col = currentCol; col < currentCol + subMatrix; col++) {
          const element = arr[row][col];
          if (row != currentRow && row != currentRow + subMatrix - 1) {
            if (col != currentCol && col != currentCol + subMatrix - 1) {
              sum = sum + element;
            }
          } else {
            sum = sum + element;
          }
        }
      }
      currentCol++;
      result.push(sum);
    }
    currentRow++;
  }
  return Math.max(...result);
}

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0],
];

const arr2 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(arr));
console.log(hourglassSum(arr2));
