class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size =0;
    }

    //insert the first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }
    //insert last node
    insertLast(data){
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        }

        else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

                current.next = node;
                this.size ++;
        }
    }
    //insert node at any index
    insertAt(data,index){
        let count = 0;
        let current;
        let previous;

        // if index out of range
        if(index > 0 && index > this.size){
            console.log("The index exceeds the length of the list");
            return;
        }
        
        // if first index
        if(index === 0){
            this.insertFirst(data);
            return;
        }

        //the rest
        const node = new Node(data);    

        current = this.head;

        while(count < index){
            previous = current; //Node before index
            count++;
            current = current.next; //Node after index
        }

        node.next = current;
        previous.next = node; 
        this.size++;
    }
    //get any index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count == index){
                console.log(current.data)
            }

            count++;
            current = current.next;
        }
        console.log("-------");
        return null;
        
    }
    //remove node at any index
    removeAt(index){
        let current = this.head;
        let previous;
        let count = 0;

        if(index > 0 && index > this.size){
            console.log("The index you want to remove is out of range");
            return;
        }

        if(index === 0){
            this.head = current.next;
        }else{
        while(count < index){
            previous = current; //Node before index
            count++;
            current = current.next; //Node after index
        }
       
            previous.next = current.next;
        }
            this.size--;
    }
    //clear linked list
    clearList(){
        this.head = null;
        this.size = 0;
        console.log('the list is cleaned up');
    }

    //print data in linked list
    printList(){
        let current = this.head; 
        while(current){
            console.log(current.data);
            current = current.next
        }
        console.log("-------")
    }
}

    const linkedlist = new LinkedList();

    linkedlist.insertFirst(100);
    linkedlist.insertFirst(200);
    linkedlist.insertLast(300);
    linkedlist.insertAt(400, 2);
    linkedlist.printList();

    linkedlist.insertAt(500,10);
    linkedlist.removeAt(10);
    linkedlist.removeAt(2)
    linkedlist.printList();

    linkedlist.getAt(1);
    linkedlist.clearList();
    linkedlist.printList();
    console.log(linkedlist);