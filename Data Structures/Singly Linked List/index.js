class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // if there are no nodes in the list, return undefined
    if (!this.head) return undefined;
    // Set the head to current
    let current = this.head;
    // Set the new tail to current
    let newTail = current;

    // Loop through the list until you reach the tail
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // set the next property of the 2nd to last node to be null
    this.tail = newTail;

    // set the tail to be the 2nd to last node

    this.tail.next = null;

    // decrement the length of the list by 1
    this.length--;

    // return the value of the node removed

    // if length  is 0
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  shift() {
    // If there are no nodes, return undefined
    if (!this.head) return undefined;

    // Store the current head property in a variable
    let currentHead = this.head;

    // Set the head property to be the current head's next property
    this.head = currentHead.next;

    // Decrement the length by 1
    this.length--;
    if (!this.length) {
      this.tail = null;
    }

    // Return the value of the node removed.
    return currentHead;
  }
  unshift(val) {
    // Store the current head property in a variable
    let newNode = new Node(val);
    if (!this.head) {
      // If there is no node, set the head and tail to be the newly created node.
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    // If the index is les than zero or greater than or equal to the length of the list, return null
    if (
      typeof index !== "number" ||
      index < 0 ||
      index >= this.length ||
      !this.head
    )
      return null;
    // Set the counter variable
    let counter = 0;
    let current = this.head;

    // loop through the node
    while (counter !== index) {
      counter++;
      current = current.next;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }
  insert(index, val) {
    // if the index is less than zero or greater than the length, return false
    if (index < 0 || index > this.length) return false;

    // if the index is 0, unshift a new node to the start of the list
    if (index === 0) return !!this.unshift(val);

    // if the index is the same as the length, push a new node to the end of the list
    if (index === this.length) return !!this.push(val);

    // if the index is nor 0 nor this.length
    let foundNode = this.get(index - 1);
    if (!foundNode) return false;

    // store next of the foundNode to the temp variable
    let tempNode = foundNode.next;

    // create the new Node
    let newNode = new Node(val);

    // set newNode as the next of foundNode
    foundNode.next = newNode;

    // set tempNode as the next of new Node
    newNode.next = tempNode;

    //increment the length
    this.length++;

    return true;
  }
  remove(index) {
    // if the index is less than zero or greater than the length, return undefined
    if (index < 0 || index >= this.length) return undefined;

    // if the index is 0, remove the first node
    if (index === 0) return this.shift();

    // if the index is the same as the length, remove the last node
    if (index === this.length - 1) return this.pop();

    // if none of above is true, get the previous element to index
    let previousNode = this.get(index - 1);
    // find the next of the previous element and set it to temp delete
    let nodeToDelete = previousNode.next;
    // get the next of temp delete
    let newNext = nodeToDelete.next;
    // set next of previous element to temp delete
    previousNode.next = newNext;
    this.length--;
    return nodeToDelete;
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      // it is the next of the current node
      next = node.next;

      // set node.next to prev which is null the first time since it will be the tail
      node.next = prev;

      //previous node now is the current node
      prev = node;

      // make current node as next
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("hi");
list.push("what");
list.push("is");
list.push("your");
list.push("name");
