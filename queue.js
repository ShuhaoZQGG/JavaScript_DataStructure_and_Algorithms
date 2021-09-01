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

  empty(){  
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
myQueue.empty();
console.log(myQueue.size());

class QueueElement{
  constructor(ele,priority){
    this.ele = ele;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue{
  constructor(){
    super();
  }

  enqueue(ele,priority){
    const queueElement = new QueueElement(ele,priority);
    if (queueElement.priority <=0){
      return false;
    }
    if(super.size() === 0){
      this.collection.push(queueElement);
    }

    else{
      let added = false;

      for (let i = 0; i < super.size(); i++){
        if (queueElement.priority < this.collection[i].priority){
          this.collection.splice(i,0,queueElement);
          added = true;
          break;
        }
      }

      if (!added){
        this.collection.push(queueElement);
      }
    }

  }

  dequeue(){
    return super.dequeue();
  }

  front(){
    return super.front();
  }

  size(){
    return super.size();
  }

  empty(){
    return super.empty();
  }
}



const myPriorityQueue = new PriorityQueue();
myPriorityQueue.enqueue(0,1);
console.log(myPriorityQueue);
myPriorityQueue.enqueue(5,3);
myPriorityQueue.enqueue(7,2);
myPriorityQueue.enqueue(9,6);
myPriorityQueue.enqueue(6,5);
myPriorityQueue.dequeue();

console.log(myPriorityQueue);

console.log(myPriorityQueue.front());
console.log(myPriorityQueue.size());
myPriorityQueue.empty();
console.log(myPriorityQueue);
