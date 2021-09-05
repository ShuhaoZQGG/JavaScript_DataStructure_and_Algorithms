class MinHeap{
  constructor(heap = [null]){
    this.heap = heap;
  }

  insert(num){
    this.heap.push(num);
    if (this.heap.length > 2){
      let idx = this.heap.length - 1;
      while (this.heap[idx] < this.heap[Math.floor(idx/2)]){
        if (idx >= 1){
          [this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
          if (Math.floor(idx/2) > 1){
            idx = Math.floor(idx/2);
          }
          else{
            break;
          }
        }
      }
    }
  };

  remove(){
    let smallest = this.heap[1];
    if (this.heap.length > 2){
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
    
      if (this.heap.length == 3){
        if (this.heap[1] > this.heap[2]){
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        };

        return smallest;
      }

      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (this.heap[i] >= this.heap[left] || this.heap[i] > this.heap[right]){
        if (this.heap[left] < this.heap[right]){
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i;
        }

        else{
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        }

        left = 2 * i;
        right = 2 * i + 1;

        if (this.heap[left] == undefined || this.heap[right] == undefined){
          break;
        }
      }
    }

    else if (this.heap.length == 2){
      this.heap.splice(1,1);
    }

    else{
      return null;
    }

    return smallest;
  };

  sort(){
    let result = new MinHeap();
    while(this.heap.length > 1){
      result.insert(this.remove());
    }
    return result;
  };
}

let myMinHeap = new MinHeap();
myMinHeap.insert(3);
myMinHeap.insert(4);
myMinHeap.insert(5);
myMinHeap.insert(10);
myMinHeap.insert(7);
myMinHeap.insert(2);
myMinHeap.insert(1);
console.log(myMinHeap);
myMinHeap.remove();
console.log(myMinHeap);
myMinHeap.remove();
console.log(myMinHeap);
console.log(myMinHeap.sort());

class MaxHeap{
  constructor(heap = [null]){
    this.heap = heap;
  }

  insert(num){
    this.heap.push(num);
    if (this.heap.length > 2){
      let idx = this.heap.length - 1;
      while (this.heap[idx] > this.heap[Math.floor(idx/2)]){
        if (idx >= 1){
          [this.heap[Math.floor(idx/2)],this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
          if (Math.floor(idx/2) > 1){
            idx = Math.floor(idx/2);
          }
          else{
            break;
          }
        }
      }
    }
  };

  remove(){
    let largest = this.heap[1];
    if (this.heap.length > 2){
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap.splice(this.heap.length - 1);
        if (this.heap.length == 3){
          if (this.heap[1] < this.heap[2]){
            [this.heap[1],this.heap[2]] = [this.heap[2],this.heap[1]];
          };

          return largest;
        }

        let i = 1;
        let left = 2 * i;
        let right = 2 * i + 1;
        while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]){
          if (this.heap[left] > this.heap[right]){
            [this.heap[i], this.heap[left]] = [this.heap[left] ,this.heap[i]];
            i = i * 2;
          }
          else {
            [this.heap[i], this.heap[right]] = [this.heap[right] ,this.heap[i]];
            i = i * 2 + 1;
          };

          left = 2 * i;
          right = 2 * i + 1;

          if (this.heap[left] == undefined || this.heap[right] == undefined){
            break;
          }
        }
    }
    else if (this.heap.length == 2){
      this.heap.splice(1,1);
    }
    else{
      return null;
    }
    return largest;
  };

  sort(){
    let result = new MaxHeap();
    while(this.heap.length > 1){
      result.insert(this.remove());
    }
    return result;
  };
}

let myMaxHeap = new MaxHeap();
myMaxHeap.insert(3);
myMaxHeap.insert(4);
myMaxHeap.insert(5);
myMaxHeap.insert(10);
myMaxHeap.insert(7);
myMaxHeap.insert(2);
myMaxHeap.insert(1);
console.log(myMaxHeap);
myMaxHeap.remove();
myMaxHeap.remove();
console.log(myMaxHeap);
console.log(myMaxHeap.sort());
