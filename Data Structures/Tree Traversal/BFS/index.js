class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traversePreOrder = (node, visited) => {
  visited.push(node.value);
  if (node.left) traversePreOrder(node.left, visited);
  if (node.right) traversePreOrder(node.right, visited);
};

const traversePostOrder = (node, visited) => {
  if (node.left) traversePostOrder(node.left, visited);
  if (node.right) traversePostOrder(node.right, visited);
  visited.push(node.value);
};

const traverseInOrder = (node, visited) => {
  if (node.left) traverseInOrder(node.left, visited);
  visited.push(node.value);
  if (node.right) traverseInOrder(node.right, visited);
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (value == null) return undefined;
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return "Value already eixists !!";

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (value == null || !this.root) return undefined;
    let current = this.root;
    while (current) {
      if (value === current.value) return current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }
  BFS() {
    let data = [];
    let node = this.root;
    const queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let visited = [];
    let current = this.root;

    traversePreOrder(current, visited);
    return visited;
  }
  DFSPostOrder() {
    let visited = [];
    let current = this.root;

    traversePostOrder(current, visited);
    return visited;
  }
  DFSInOrder() {
    let visited = [];
    let current = this.root;
    traverseInOrder(current, visited);
    return visited;
  }
}

const newBST = new BinarySearchTree();
newBST.insert(10);
newBST.insert(6);
newBST.insert(15);
newBST.insert(3);
newBST.insert(8);
newBST.insert(20);

console.log("test bst", newBST.BFS());
console.log("test DFSPreOrder", newBST.DFSPreOrder());
console.log("test DFSPostOrder", newBST.DFSPostOrder());
console.log("test DFSInOrder", newBST.DFSInOrder());
