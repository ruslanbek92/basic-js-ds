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

module.exports = {
  BinarySearchTree
};