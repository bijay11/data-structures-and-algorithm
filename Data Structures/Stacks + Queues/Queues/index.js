class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    if (val == null) return "Value is required";
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }
  dequeue() {
    if (!this.first) return undefined;
    if (this.size === 1) {
      this.last = null;
      this.size--;
      return temp.val;
    }
    let nodeToRemove = this.first;
    this.first = this.first.next;
    this.size--;
    return nodeToRemove.val;
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(20);
console.log("test queue", queue);
