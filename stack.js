class Stack {
  constructor(count = 0,storage = []) {
    this.count = count;
    this.storage = storage;
  }


push(value){
  this.storage[this.count] = value;
  this.count++;
}

pop(value){
  if (this.count <= 0){
    return undefined;
  }

  this.count--;
  const result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
}

peek(value){
  if (this.count <= 0){
    return undefined;
  }

  return this.storage[this.count-1];
}

size(){
  return this.count;
}
}
let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());