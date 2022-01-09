// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(data);
  }

  getAt(index) {
    if (!this.head) return null;
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
  }

  removeAt(index) {
    if (!this.head) return null;
    if (index == 0) {
      this.head = this.head.next;
      return;
    }
    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data, this.head.next);
    }
  }
}

const list = new LinkedList();
list.insertFirst("1");
list.insertFirst("2");
list.insertFirst("3");
list.insertFirst("4");
list.removeAt(3);
console.log(JSON.stringify(list));
