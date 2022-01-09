// Construct Special Binary Tree from given Inorder traversal
// Input: inorder[] = {5, 10, 40, 30, 28}
// Output: root of following tree
//          40
//        /   \
//       10     30
//      /         \
//     5          28

const { BST, Node } = require("../exercises/bst");

// Input: inorder[] = {1, 5, 10, 40, 30,
//                     15, 28, 20}
// Output: root of following tree
//           40
//         /   \
//        10     30
//       /         \
//      5          28
//     /          /  \
//    1         15    20
// not done *******************
function convertInorderToTree(arr) {
  const maxNode = arr.reduce((a, b) => {
    if (b > a) return b;
    return a;
  }, 0);
  const maxNodeIndex = arr.indexOf(maxNode);

  if (arr.length === 1) return arr;
  if (arr.length === 0) return arr;

  let root = new Node(maxNode);

  const left = arr.slice(0, maxNodeIndex);
  const right = arr.slice(maxNodeIndex);
  if (left.length > 0) root.left = convertInorderToTree(left);
  if (right.length > 0) root.right = convertInorderToTree(right);

  return root;
}

console.log(convertInorderToTree([1, 5, 10, 40, 30, 15, 28, 20]));
