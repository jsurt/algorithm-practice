//Linked list to use for practice:
class LinkedListClass {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new LinkedListClass(6);
head.next = new LinkedListClass(23);
head.next.next = new LinkedListClass(14);
head.next.next.next = new LinkedListClass(44);
head.next.next.next.next = new LinkedListClass(32);
head.next.next.next.next.next = new LinkedListClass(23);
head.next.next.next.next.next.next = new LinkedListClass(22);

console.log(head);
