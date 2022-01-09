// Equilibrium index of an array
// Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

// Input: A[] = {-7, 1, 5, 2, -4, 3, 0}
// Output: 3
// 3 is an equilibrium index, because:
// A[0] + A[1] + A[2] = A[4] + A[5] + A[6]

// Input: A[] = {1, 2, 3}
// Output: -1

function equilibrium(array) {
  let leftSum = 0;
  let sum = array.reduce((a, b) => a + b, 0);

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    sum = sum - element;
    if (leftSum === sum) return i;
    leftSum += element;
  }

  return -1;
}

console.log(equilibrium([-7, 1, 5, 2, -4, 3, 0]));
console.log(equilibrium([1, 2, 3]));
