class Node{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  add(data){
    const node = this.root;
    if (node == null){
      this.root = new Node(data);
      return;
    }
    else {
      const searchTree = function(node){
        if (data < node.data){
          if (node.left === null){
            node.left = new Node(data);
            return;
          }
          else if (node.left !== null){
            return searchTree(node.left);
          }
          else{
            return null;
          }
        }
        else if (data > node.data){
          if (node.right === null){
            node.right = new Node(data);
            return;
          }
          else if (node.right !== null){
            return searchTree(node.right);
          }
          else{
            return null;
          }
        }
      }
      return searchTree(node);
    }
  }

  findMin(){
    let current = this.root;
    while (current.left !== null){
      current = current.left;
    }

    return current.data;
  }

  findMax(){
    let current = this.root;
    while (current.right !== null){
      current = current.right;
    }

    return current.data
  }

  find(data){
    let current = this.root;
    while (current.data !== data){
      if (current.data <= data){
        current = current.right;
      }
      else {
        current = current.left;
      }
      if (current === null){
        return null;
      }
    }
    return current;
  }

  remove(data){
    const removeNode = function(node, data){
      if (node === null){
        return null;
      }

      if (data === node.data){
        if (node.left === null && node.right === null){
          return null;
        }

        if (node.left === null){
          return node.right;
        }

        if (node.right === null){
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null){
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;     
      }
      else if (data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }
      else{
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  findMinHeight(node = this.root){
    if (node == null){
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right){
      return left + 1;
    }
    else{
      return right + 1
    }
  }

  findMaxHeight(node = this.root){
    if (node == null){
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right){
      return left + 1;
    }
    else{
      return right + 1
    }
  }

  isBalanced(){
    return (this.findMaxHeight() - this.findMinHeight() <= 1);
  } 

  inOrder(){
    if (this.root == null){
      return null;
    }
    else{
      let result = new Array();
      function traverseInOrder(node){
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder(){
    if (this.root == null){
      return null;
    }
    else{
      let result = new Array();
      function traversePreOrder(node){
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder(){
    if (this.root == null){
      return null;
    }
    else{
      let result = new Array();
      function traversePostOrder(node){
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder(){
    let result = new Array();
    let Queue = new Array();
    if (this.root != null){
      Queue.push(this.root);
      while(Queue.length > 0){
        let node = Queue.shift();
        result.push(node.data);
        if(node.left != null){
          Queue.push(node.left);
        }
        if(node.right != null){
          Queue.push(node.right);
        }
      }
      return result;
    }
    else{
      return null;
    }
  }
}

const bst = new BST();

bst.add(5);
bst.add(6);
bst.add(7);
bst.add(2)
bst.add(1);
bst.add(3);
bst.add(5.5);
console.log(JSON.stringify(bst));
console.log(bst.findMinHeight())
bst.remove(5);
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.find(5.5));
console.log(JSON.stringify(bst));
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());