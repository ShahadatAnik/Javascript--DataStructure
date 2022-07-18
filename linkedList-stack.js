const LinkedList = require('./linkedList');

class LinkedListStack {
    constructor(){
        this.list = new LinkedList();
    }

    push(val){
        this.list.prepend(val);
    }

    pop(){
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

const stack = new LinkedListStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();

stack.pop();
stack.print();