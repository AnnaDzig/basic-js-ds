const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    return this._root || null;
  }

  add(data) {
    if (!this._root) return (this._root = new Node(data));
    let n = this._root;
    while (true) {
      if (data === n.data) return;
      if (data < n.data) {
        if (!n.left) return (n.left = new Node(data));
        n = n.left;
      } else {
        if (!n.right) return (n.right = new Node(data));
        n = n.right;
      }
    }
  }

  find( data ) {
let n = this._root;
    while (n) {
      if (data === n.data) return n;
      n = data < n.data ? n.left : n.right;
    }
    return null;
    }

  has( data ) {
return this.find(data) !== null;  }

  remove(data) {
const rm = (node, x) => {
      if (!node) return null;
      if (x < node.data) { node.left = rm(node.left, x); return node; }
      if (x > node.data) { node.right = rm(node.right, x); return node; }
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let s = node.right;
      while (s.left) s = s.left;
      node.data = s.data;
      node.right = rm(node.right, s.data);
      return node;
    };
    this._root = rm(this._root, data);
  }
  
  min() {
if (!this._root) return null;
    let n = this._root;
    while (n.left) n = n.left;
    return n.data;  }

  max() {
if (!this._root) return null;
    let n = this._root;
    while (n.right) n = n.right;
    return n.data;  }
}

module.exports = {
  BinarySearchTree
};