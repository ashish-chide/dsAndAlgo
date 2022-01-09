// function minimumBribes(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] - (i + 1) > 2) {
//       console.log("Too chaotic");
//       return;
//     }
//     for (let j = Math.max(0, arr[i] - 2); j < i; j++) {
//       console.log(arr[i], arr[j]);
//       if (arr[i] > arr[j]) {
//         count++;
//       }
//     }
//   }
//   console.log(count);
//   return arr;
// }
minimumBribes([2, 5, 1, 3, 4]);
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

// [2, 5, 1, 3, 4]
// 1+

//

function minimumBribes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      return;
    }

    for (let j = Math.max(0, arr[i] - 2); j < i; j++) {
      if (arr[j] > arr[i]) count++;
    }
  }
  console.log(count);
  return;
}
