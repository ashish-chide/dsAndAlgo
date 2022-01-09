// prefix sum Algorithm

function arrayManipulation(n, queries) {
  // Write your code here
  const array = Array(n).fill(0);
  queries.forEach((el) => {
    const [left, right, summand] = el;
    array[left - 1] += summand;
    if (right <= array.length) {
      array[right] -= summand;
    }
  });

  let current = 0;
  let max = -Infinity;

  array.forEach((el) => {
    current += el;
    if (max < current) {
      max = current;
    }
  });
  return max;
}

const queries1 = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];

const queries = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];

console.log(arrayManipulation(10, queries));
console.log(arrayManipulation(5, queries1));
//[ 100 100 -100 0 0]
//[ 100 200 0 0 100]
//[ 100 100 200 100 -200]
