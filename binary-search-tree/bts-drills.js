console.log("Hello");

class MyBinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new MyBinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new MyBinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  findHeight(node, height = 0) {
    console.log(node);
    if (!node.key) {
      return -1;
    }
    if (!node.left && !node.right) {
      return height;
    }
    if (node.left && node.right) {
      return Math.max(
        this.findHeight(node.left, height + 1),
        this.findHeight(node.right, height + 1)
      );
    } else if (!node.right) {
      return this.findHeight(node.left, height + 1);
    } else {
      return this.findHeight(node.right, height + 1);
    }
  }
}

let firstTree = new MyBinarySearchTree();

//Testing/Seeding tree
firstTree.insert(5, 5);
firstTree.insert(4, 4);
firstTree.insert(7, 7);
firstTree.insert(9, 9);
firstTree.insert(2, 2);
firstTree.insert(10, 10);
firstTree.insert(12, 12);
firstTree.insert(44, 44);
firstTree.insert(1, 1);
firstTree.insert(20, 20);

console.log(firstTree.findHeight(firstTree));

//const getHeight = (node, height) => {};
// const height = node => {
//   //let current = this;
//   console.log(node);
//   if (node == null) {
//     console.log(-1);
//     return -1;
//   }
//   let left = height(node.left);
//   let right = height(node.right);
//   if (left < right) {
//     //console.log(left);
//     return left + 1;
//   } else {
//     //console.log(right);
//     return right + 1;
//   }
// };

function checkBST(node) {
  //console.log(node.right);
  return isValidBST(node, null, null);
}

function isValidBST(node, min, max) {
  console.log(min, max);

  if (node === null) {
    return true;
  }

  if (
    (max !== null && node.value > max) ||
    (min !== null && node.value < min)
  ) {
    return false;
  }

  if (
    !isValidBST(node.left, min, node.value) ||
    !isValidBST(node.right, node.value, max)
  ) {
    return false;
  }
  return true;
}

const findMax = node => {
  console.log(node.key);
  if (!node.right) {
    return node.key;
  } else if (node) {
    return findMax(node.right);
  }
};

const findRoot = node => {
  if (node.key === node.key) {
    console.log(node);
  }
};

function traverse(obj) {
  // always follow left branch first

  let array = [];
  array.push(obj.key);
  if (!obj.key) {
    throw new Error("Tree is empty");
  }

  if (obj.left) {
    //console.log(obj.left.key);
    array.push(obj.left.key);
    traverse(obj.left);
    console.log(array);
  }
  // then the right branch if it exists
  if (obj.right) {
    //console.log(obj.right.key);
    array.push(obj.right.key);
    traverse(obj.right);
    console.log(array);
  }
  return array;
}

// height(firstTree);
// firstTree.insert(20, 20);

//Get tree height
//getHeight(firstTree, 1);
//console.log(getHeight(firstTree, 1));

//console.log(checkBST(firstTree));
//console.log(traverse(firstTree));
//console.log(findRoot(firstTree));

//console.log(firstTree);
