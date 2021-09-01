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
myQueue.Empty();
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

    if(this.size() === 0){
      this.collection.push(queueElement);
    }

    else{
      let added = false;

      for (let i = 0; i < this.collection.size; i++){
        if (queueElement.priority < this.collection[i].priority){
          this.collection.splice(i,0,queueElement)
          added = true;
          break;
        }
      }

      if (!added){
        this.collection.push(queueElement);
      }
    }

  }
}

const myPriorityQueue = new PriorityQueue();
myPriorityQueue.enqueue(0,1);
console.log(myPriorityQueue);
myPriorityQueue.enqueue(5,3);
myPriorityQueue.enqueue(7,2);
console.log(myPriorityQueue);

