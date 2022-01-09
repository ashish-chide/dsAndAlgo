// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = this.root;
    if (!node) {
      this.root = new Node(data);
      return;
    }
    const search = function (node) {
      if (data < node.data) {
        if (node.left == null) {
          node.left = new Node(data);
          return;
        } else {
          return search(node.left);
        }
      } else if (data > node.data) {
        if (node.right == null) {
          node.right = new Node(data);
          return;
        } else {
          return search(node.right);
        }
      } else {
        return null;
      }
    };
    return search(node);
  }

  findMin() {
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  findMax() {
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

  find(data) {
    let node = this.root;

    while (node.data !== data) {
      if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
      if (node === null) {
        return null;
      }
    }
    return node;
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (node === null) return node;
      if (node.data === data) {
        if (node.left === null && node.right === null) {
          return null;
        } else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        } else {
          let tempNode = kSmallestNode(node.right);
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        }
      } else {
        if (node.data > data) {
          node.left = removeNode(node.left, data);
          return node;
        }
        if (node.data < data) {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
    }
    function kSmallestNode(node) {
      let temp = node;
      while (node.left) {
        node = node.left;
      }
      return temp;
    }
  }

  inOrder() {
    let node = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      console.log(node.data);
      if (node.right) traverse(node.right);
    };

    traverse(node);
    return;
  }

  postOrder() {
    let node = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      console.log(node.data);
    };

    traverse(node);
    return;
  }

  preOrder() {
    let node = this.root;

    const traverse = (node) => {
      console.log(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(node);
    return;
  }

  invert(node) {
    if (node === null) return;

    const right = this.invert(node.right);
    const left = this.invert(node.left);
    if (node) node.right = left;
    if (node) node.left = right;
    return node;
  }
}

// const tree = new BST();
// tree.insert(20);
// tree.insert(14);
// tree.insert(57);
// tree.insert(9);
// tree.insert(19);
// tree.insert(31);
// tree.insert(62);
// tree.insert(3);
// tree.insert(11);
// tree.insert(72);

// console.log(tree.findMin());
// console.log(tree.findMax());

// console.log(tree.find(10));
// console.log(JSON.stringify(tree, null, 7));
// console.log(JSON.stringify(tree.invert(), null, 7));

// tree.postOrder();
// console.log("-----------");
// tree.preOrder();
// console.log("-----------");

// findMinNode()
// getRootNode()
// inorder(node)
// preorder(node)
// postorder(node)
// search(node, data)

module.exports = { Node, BST };
