const LinkedList = require('./linkedList');

class LinkedListQueue {
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(val){
        this.list.append(val);
    }

    dequeue(){
        return this.list.removeFirst();
    }

    peek(){
        return this.list.head.val;
    }

    isEmpty(){
        return this.list.size === 0;
    }

    print(){
        this.list.print();
    }
}

const queue = new LinkedListQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();

queue.dequeue();
queue.print();