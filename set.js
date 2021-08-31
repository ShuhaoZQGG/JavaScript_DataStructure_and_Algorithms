class Set {
  constructor(collection = []){
    this.collection = collection
  }

  has (ele){
    if(this.collection.indexOf(ele) !== -1){
      return true;
    }
    else{
      return false;
    }
  }

  values(){
    return this.collection;
  }

  add (ele){
    if (!this.has(ele)){
      this.collection.push(ele);
      return ele + " is added";
    }
    else{
      return false;
    }
  }

  remove(ele){
    if(this.has(ele)){
      let index = this.collection.indexOf(ele);
      this.collection.splice(index,1);
      return ele + " is removed";
    }
    else{
      return false;
    }
  }

  clear(){
    this.collection = [];
  }

  union(otherset){
    const unionSet = new Set();
    const firstSet = this.values();
    const secondSet = otherset.values();
    firstSet.forEach(function(ele){
      unionSet.add(ele);
    })
    secondSet.forEach(function(ele){
      unionSet.add(ele);
    })
    return unionSet;
  }

  difference(otherset){
    const differenceSet = new Set();
    const firstSet = this.collection;
    const secondSet = otherset;
    firstSet.forEach(function(ele){
      if (!secondSet.has(ele)){
        differenceSet.add(ele);
      }
    })
    return differenceSet;
  }
}

let firstset = new Set();
firstset.add(0);
firstset.add(1);
firstset.add(2);
firstset.add(0);
firstset.remove(1)
console.log(firstset.has(0));
console.log(firstset.has(1));
console.log(firstset);
console.log(firstset.values());
console.log(firstset.add(3))
console.log(firstset.remove(0));
console.log(firstset.values());

let secondset = new Set();
secondset.add(2);
secondset.add(4);
secondset.add(9);
console.log(secondset)

console.log(firstset.union(secondset));
console.log(firstset.difference(secondset));
console.log(secondset.difference(firstset));
