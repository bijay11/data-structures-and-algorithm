class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    if (val == null) return undefined;

    // Create a new node with the value passed to the function
    const newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    let poppedNode = this.tail;
    this.tail = poppedNode.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }
  unshift(val) {
    if (val == null) return undefined;
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    const middle = this.length / 2;
    // counter = this.length +1
    // counter--
    //if index === counter
    if (index >= middle) {
      let counter = this.length - 1;
      let current = this.tail;
      while (index !== counter) {
        current = current.prev;
        counter--;
      }
      return current;
    } else {
      let counter = 0;
      let current = this.head;
      while (index !== counter) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  set(index, value) {
    if (value == null) return undefined;
    let foundNode = this.get(index);

    if (!foundNode) return false;

    foundNode.val = value;
    return true;
  }
  insert(index, value) {
    if (value == null) return undefined;
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);

    let beforeNode = this.get(index - 1);
    if (!beforeNode) return false;

    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    // let foundNode = this.get(index - 1);
    // if (!foundNode) return undefined;

    // // foundNode.next => NodeToBeRemoved
    // let removeNode = foundNode.next;

    // // NodeToBeRemoved.next = newNextNode
    // let newNextNode = removeNode.next;

    // foundNode.next = newNextNode;
    // newNextNode.prev = foundNode;

    // another approach
    let removeNode = this.get(index);
    if (!removeNode) return undefined;

    removeNode.prev.next = removeNode.next;
    removeNode.next.prev = removeNode.prev;

    removeNode.next = null;
    removeNode.prev = null;

    this.length--;
    return removeNode;

    // newNextNode.prev = foundNode
  }
}

const newList = new DoublyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
console.log(newList);
