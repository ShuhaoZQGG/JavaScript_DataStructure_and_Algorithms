class Queue{
  constructor(collection = []){
    this.collection = collection;
  }

  enqueue(ele){
    this.collection.push(ele);
  }

  dequeue(){
    this.collection.shift();
  }

  front(){
    return this.collection[0];
  }

  size(){
    return this.collection.length;
  }

  Empty(){  
    this.collection.splice(0,this.collection.length);
  }
}

myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(3);
myQueue.enqueue(9);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
console.log(myQueue.size());
console.log(myQueue.front());

