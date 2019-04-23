"use strict";
/* Review suggestions from Ali */

/* Coding */
// Reverse a linked list
// Detect a cycle in a linked list
// Reverse the second half of a linked list and re-attach the segment to the first half
/* Technical Questions */
// Hashmaps and collisions
// Binary tree, binary search tree, and traversals
// Compare linked lists and arrays

//Linked list to use for drill
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Index error");
    }
    const newNode = {
      value
    };
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const node = this._find(index - 1);
      newNode.next = node.next;
      node.next = newNode;
    }
    this.length++;
  }
  _find(index) {
    let node = this.head;
    if (index < 0 || index > this.length) {
      throw new Error("Index error");
    }
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
  get(index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index error");
    }
    return this._find(index).value;
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index error");
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      const node = this._find(index - 1);
      node.next = node.next.next;
    }
    this.length--;
  }
}

const linkedList = new LinkedList();
linkedList.insert(0, 12);
linkedList.insert(1, 24);
linkedList.insert(2, 65);
linkedList.insert(3, 23);
linkedList.insert(4, 9);
linkedList.insert(5, 7);
linkedList.insert(6, 13);
linkedList.insert(7, 65);
linkedList.insert(8, 20);
console.log(linkedList);

//Reverse a linked list:
const reverse = list => {
  if (!list.head || !list.head.next) {
    return list;
  }
  let currentHead = list.head.next;
  let reversedHead = list.head;
  reversedHead.next = null;
  while (currentHead) {
    let temp = currentHead;
    currentHead = currentHead.next;
    temp.next = reversedHead;
    reversedHead = temp;
  }
  return reversedHead;
};

//console.log(reverse(linkedList));

// Detect a cycle in a linked list:
function containsCycle(firstNode) {
  // Start both at beginning
  let slow = firstNode;
  let fast = firstNode;
  console.log(slow);
  console.log(fast);
  // Until end of the list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    console.log(slow, fast);
    // fast is about to "lap" slow
    if (fast === slow) {
      return true;
    }
  }
  // fast hit the end of the list
  return false;
}

containsCycle(linkedList.head);
console.log(containsCycle(linkedList.head));

// Reverse the second half of a linked list and re-attach the segment to the first half
const reverseAndAttach = list => {
  if (!list.head || !list.head.next) {
    return list;
  }
};

console.log(linkedList);
