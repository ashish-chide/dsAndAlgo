function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function nutsAndBolts(arr1, arr2) {
  arr1 = quickSort(arr1);
  arr2 = quickSort(arr2);
  console.log(arr1, arr2);
}

nutsAndBolts(["@", "#", "$", "%"], ["$", "@", "%", "#"]);
