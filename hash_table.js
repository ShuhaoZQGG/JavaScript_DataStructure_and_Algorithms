const hash = function(string, max){
  let hash = 0;
  for (let i = 0; i < string.length; i++){
    hash += string.charCodeAt(i);
  }
  return max % max;
};

class HashTable{
  constructor(storage = [], storageLimit = 14){
    this.storage = storage;
    this.storageLimit = storageLimit;
  }

  print(){
    console.log(this.storage);
  }

  add(key, value){
    let index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined){
      this.storage[index] = [
        [key, value]
      ];
    }
    else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++){
        if (this.storage[index][i][0] === key){
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false){
        this.storage[index].push([key,value]);
      }
    }
  };

  remove(key){
    let index = hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key){
      delete this.storage[index];
    }
    else{
      for (let i = 0; i < this.storage[index].length; i++){
        if (this.storage[index][i][0] === key){
          delete this.storage[index][i];
        }
      }
    }
  };

  lookup(key){
    let index = hash(key, this.storageLimit);
      if (this.storage[index] === undefined){
        return undefined;
      }
      else{
        for (let i = 0; i < this.storage[index].length; i++) {
          if (this.storage[index][i][0] === key) {
            return this.storage[index][i][1];
          }
        }
      }
    };
  
}

let ht = new HashTable();
ht.print();

ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
ht.remove('tux');
ht.print();
console.log(JSON.stringify(ht));
console.log(ht.lookup('rex'));

