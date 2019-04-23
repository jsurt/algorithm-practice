class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (this.value === null) {
      return (this.value = value);
    } else if (this.value > value) {
      if (this.left === null) {
        this.left = new BinaryTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinaryTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  dfs(values = []) {
    console.log(values);
    //debugger;
    if (this.left) {
      console.log(this.left);
      values = this.left.dfs(values);
    }
    values.push(this.value);
    console.log(values);
    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }
  bfs(values = []) {
    const queue = [this];
    while (queue.length) {
      const node = queue.shift();
      values.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return values;
  }
}

const tree = new BinaryTree(10);
tree.insert(5);
tree.insert(12);
tree.insert(4);
tree.insert(11);
tree.insert(9);
tree.insert(3);
tree.insert(6);
tree.insert(14);
//tree.dfs();
// console.log(tree.bfs());
// console.log(tree);
