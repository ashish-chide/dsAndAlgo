// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

// A possible input is:
//    1
//  / \
// 2    3
//    /   \
//   4     5
// Answer:
// Output: 1 3 5

const { BST } = require("../exercises/bst");

function rightView(root) {
  if (root == null) return null;
  if (root.right == null) return root;

  const result = [];

  let node = root;
  while (node) {
    result.push(node.data);
    node = node.right;
  }

  return result;
}

function leftView(root) {
  if (root == null) return null;
  if (root.left == null) return root;

  const result = [];

  let node = root;
  while (node) {
    result.push(node.data);
    node = node.left;
  }

  return result;
}
//[1,2,3,null,5,null,4]
const tree = new BST();
tree.insert(3);
tree.insert(1);
tree.insert(2);
tree.insert(4);
tree.insert(5);

const head = tree.root;

console.log(rightView(head));
console.log(leftView(head));
