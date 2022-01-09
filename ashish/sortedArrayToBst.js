let { Node } = require("../exercises/bst");

function arrayToBst(arr, start, end) {
  if (start > end) return null;

  let mid = parseInt((start + end) / 2);

  let node = new Node(arr[mid]);
  node.left = arrayToBst(arr, start, mid - 1);
  node.right = arrayToBst(arr, mid + 1, end);

  return node;
}

const a = [1, 2, 3, 4];
const l = a.length - 1;
console.log(arrayToBst(a, 0, l));
