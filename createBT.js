class Node{
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    var newNode = new Node(data); 
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root,newNode);
    }
  }
  insertNode(root, newNode) {
    if(newNode.data < root.data) {
      if(root.left === null) {
        root.left = newNode
      } else {
        insertNode(root.left, newNode);
      }
    } else {
      if(root.right === null) {
        root.right = newNode
      } else {
        insertNode(root.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = removeData(this.root, data);
  }

  removeData(node, key) {
    if(node === null) return null;
    if (key.data < node.data) {
      node.left = this.removeData(node.left, key); 
      return node;
    } else if (key.data > node.data) {
      node.right = this.removeData(node.right, key);
    } else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      } else if(node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
    }
    var aux = this.findMinNode(node.right); 
    node.data = aux.data; 
  
    node.right = this.removeData(node.right, aux.data); 
    return node;
  }

  findMinNode(node) {
    if(node.left === null) {
      return node;
    }
    return findMinNode(node.left)
  }

  search(node,data) {
    if (node === null) return null;
    if(data < node.left) {
      return this.search(node.left, data); 
    } else if (data > node.right) {
      return this.search(node.right, data); 
    } else {
      return node; 
    }
  }
}
