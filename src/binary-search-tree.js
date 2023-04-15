const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add( data ) {
    let newNode = new Node(data);
    
    if(this.rootNode === null){
      this.rootNode = newNode;
      return;
    }
    
    function recursing(node){
      let c;
      
      if(node.data>newNode.data){
        c = node.left;
      }else {
        c = node.right;
      }
     
      if(c === null) {
        return node;
      } else {
        return recursing(c);
      }

    }
    
    let targetNode = null; 
    targetNode = recursing (this.rootNode);
   
    if(newNode.data < targetNode.data){
      targetNode.left = newNode;
    } else {
      targetNode.right = newNode;
    }

  
}

  has(data ) {
    function recursing(node){
      if (node === null) {
        return false;
      }
  
      if (node.data === data) {
        return true;
      } else if(node.data > data) {
        return recursing(node.left);
      } else{
        return recursing(node.right);
      }
    }
     return recursing(this.rootNode);
  }

  find(data) {
    function recursing(node){
      if (node === null) {
        return null;
      }
  
      if (node.data === data) {
        return node;
      } else if(node.data > data) {
        return recursing(node.left);
      } else{
        return recursing(node.right);
      }
    }
     return recursing(this.rootNode);
  }

  remove(data) {
    let result = find.call(this,data);

    if(this.rootNode === result.node){
      console.log("root Node same ");
      let rootLeft = this.rootNode.left;
      this.rootNode = result.node.right;
      findMinValueNode(this.rootNode).left = rootLeft;
      console.log("root now", this.rootNode, this.root());

    }

    if (!result.node.right && !result.node.left) {
      result.parent[result.side] = null;
    } else {
      if (!result.node.right) {
        result.parent[result.side] = result.node.left;
      } else {
        result.parent[result.side] = result.node.right;
      }

      let current = result.node;
      result.parent[result.side] = result.node.right;
      findMinValueNode(result.node.right).left = current.left;
    }

    function find(data) {
      
      function recursing(node, parentNode, childSide){
        let result = {};
        result.parent = parentNode;
        result.side = childSide;
        if (node === null) {
          result.node = null;
          return result;
        }
    
        if (node.data === data) {
          result.node = node;
          return result;
        } else if(node.data > data) {
          return recursing(node.left,node, "left");
        } else{
          return recursing(node.right, node, "right");
        }
      }
       return recursing(this.rootNode, this.rootNode);
    }
    

    function findMinValueNode(node){
      function recursing(node){
        if(node.left=== null){
          return node;
        }else {
          return recursing(node.left);
        }
      }
      if(node === null){return null};
      return recursing(node);
    }
  }

  min() {
    function recursing(node){
      if(node.left=== null){
        return node;
      }else {
        return recursing(node.left);
      }
    }
   if(this.rootNode === null){return null};
    let targetNode =  recursing(this.rootNode);
    return targetNode.data;
  }

  max() {
    function recursing(node){
      if(node.right=== null){
        return node;
      }else {
        return recursing(node.right);
      }
    }
   if(this.rootNode === null){return null};
    let targetNode = recursing(this.rootNode);
    return targetNode.data;
    }
}

let t60 = new BinarySearchTree();
t60.add(13);
t60.add(10);
t60.add(7);
t60.add(12);
t60.add(19);
t60.add(18);
t60.add(27);
t60.add(29);
t60.add(26);
module.exports = {
  BinarySearchTree
};