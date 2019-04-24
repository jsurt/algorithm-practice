//Linked list practice. No cheat sheets allowed here

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  addToEnd(node) {
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }
  addToStart(node) {
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Creating a list with a cycle
const listWithCycle = new LinkedList();
const node1 = new Node(5);
const node2 = new Node(8);
const node3 = new Node(2);
const node4 = new Node(40);
const node5 = new Node(6);
listWithCycle.addToEnd(node1);
listWithCycle.addToEnd(node2);
listWithCycle.addToEnd(node3);
listWithCycle.addToStart(node4);
listWithCycle.addToEnd(node5);
listWithCycle.addToEnd(node2);
//Writing a function to detect a cycle
const detectCycle = list => {
  if (!list.head || !list.head.next) {
    return false;
  }
  let slow = list.head;
  let fast = list.head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

detectCycle(listWithCycle);

//Reverse a linked list
const listToReverse = new LinkedList();
let nodeOne = new Node(19);
let nodeTwo = new Node(32);
let nodeThree = new Node(44);
let nodeFour = new Node(17);
let nodeFive = new Node(23);
let nodeSix = new Node(30);
listToReverse.addToEnd(nodeOne);
listToReverse.addToEnd(nodeTwo);
listToReverse.addToEnd(nodeThree);
listToReverse.addToEnd(nodeFour);
listToReverse.addToEnd(nodeFive);
listToReverse.addToEnd(nodeSix);
console.log(listToReverse);

const reverse = list => {};

reverse(listToReverse.head);
console.log(reverse(listToReverse.head));

console.log(listToReverse);
