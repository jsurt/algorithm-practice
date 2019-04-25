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
const detectCycle = head => {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

detectCycle(listWithCycle.head);

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

const reverse = head => {
  let node = head, previous, temp;
  while (node) {
    temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  return previous;
};

const reversedList = reverse(listToReverse.head);

//Reverse the second half of a linked list and attach to the first
const anotherList = new LinkedList();
let newNodeOne = new Node(7);
let newNodeTwo = new Node(2);
let newNodeThree = new Node(9);
let newNodeFour = new Node(8);
let newNodeFive = new Node(5);
let newNodeSix = new Node(10);
let newNodeSeven = new Node(4);
anotherList.addToEnd(newNodeOne);
anotherList.addToEnd(newNodeTwo);
anotherList.addToEnd(newNodeThree);
anotherList.addToEnd(newNodeFour);
anotherList.addToEnd(newNodeFive);
anotherList.addToEnd(newNodeSix);
anotherList.addToEnd(newNodeSeven);
console.log(anotherList);

const reverseAttach = list => {
  let length = 0; 
  let node = list.head;
  while(node) {
    length++;
    node = node.next;
  }
  let middle = Math.floor(length/2);
  console.log(middle);
  node = list.head;
  for(let i = 0; i < middle; i++) {
    console.log(node);
    node = node.next;
  }
  let temp;
  let previous;
  while(node) {
    temp = node.next;
    node.next = previous;
    previous = node;
    node = temp;
  }
  console.log(list.head);
  console.log(previous)
  return node;
}

reverseAttach(anotherList);