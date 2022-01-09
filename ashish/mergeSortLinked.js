function MergeSort(head) {
  if (head === null || head.next == null) return head;

  let center = midpoint(head);

  let centerNext = center.next;
  center.next = null;

  return Merge(MergeSort(head), MergeSort(centerNext));
}

function Merge(l1, l2) {
  let result = null;
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.data <= l2.data) {
    result = l1;
    result.next = Merge(l1.next, l2);
  }
  if (l1.data > l2.data) {
    result = l2;
    result.next = Merge(l1, l2.next);
  }
  return result;
}

function midpoint(node) {
  if (node == null) return node;

  let slow = node;
  let fast = node;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

const { LinkedList } = require("../exercises/linkedlist");

const l = new LinkedList();
l.insertLast(4);
l.insertLast(2);
l.insertLast(6);
l.insertLast(0);
l.insertLast(5);

const a = l.head;
console.log(JSON.stringify(MergeSort(a), null, 10));
