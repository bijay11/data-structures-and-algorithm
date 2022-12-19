class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return undefined;
    if (this.size === 1) {
      let temp = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return temp.val;
    }

    let removeHead = this.first;
    this.first = removeHead.next;
    removeHead.next = null;
    this.size--;
    return removeHead.val;
  }
}

const stack = new Stack();
stack.push(2);
stack.push(20);
console.log("test stack", stack);
