class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
     constructor(){
       this.head = null;
       this.tail = null;
       this.size = 0;
    }
    
    isEmpty(){
        return this.size === 0;
    }
    
    getSize(){
        return this.size;
    }
    
    prepend(val){
        const node = new Node(val);
        if(!this.isEmpty()){
             node.next = this.head;
        }
        this.head = node;
        this.tail = node;
        this.size++;
    }
    
    append(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    insert(index, val){
        if(index < 0 || index > this.size){
            throw new Error('Invalid index');
        }
        if(index === 0){
            this.prepend(val);
        }
        else if(index === this.size){
            this.append(val);
        }
        else{
            const node = new Node(val);
            let curr = this.head;
            let i = 0;
            while(i < index - 1){
                curr = curr.next;
                i++;
            }
            node.next = curr.next;
            curr.next = node;
            this.size++;
        }
    }

    
    removeFrom(index){
        if(index < 0 || index >= this.size){
            throw new Error('Index out of bounds');
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i = 0; i < index -1; i++){
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode;
    }

    removeLast(){
        if (this.isEmpty()) {
            return null;
          }
          const value = this.tail.value;
          if (this.size === 1) {
            this.head = null;
            this.tail = null;
          } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
              prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
          }
          this.size--;
          return value;
    }

    removeFirst(){
        if (this.isEmpty()) {
            return null;
          }
          const value = this.head.value;
          this.head = this.head.next;
          this.size--;
          return value;
    }

    removeValue(val){
        let curr = this.head;
        let prev = null;
        while(curr){
            if(curr.val === val){
                if(prev){
                    prev.next = curr.next;
                }else{
                    this.head = curr.next;
                }
                this.size--;
                return curr;
            }
            prev = curr;
            curr = curr.next;
        }
        return null;
    }

    search(val){
        let curr = this.head;
        while(curr){
            if(curr.val === val){
                return curr;
            }
            curr = curr.next;
        }
        return null;
    }

    reverse(){
        let curr = this.head;
        let prev = null;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
        console.log('\n');
    }
    
}

module.exports = LinkedList;

// const l = new LinkedList();

// l.append(1);
// l.append(2);
// l.append(3);
// l.print();

// l.reverse();
// l.print();
