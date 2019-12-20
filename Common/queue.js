//const LinkedClasses = require('../Common/linkedNode');
const Stack = require('../Common/stack');

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    firstItem() {
        return this.isEmpty ? null : this.items[0];
    }
    lastItem(){
        return this.isEmpty ? null : this.items[this.items.length -1];
    }
    print() {
        console.log(this.items);
    }
}

class QueueFromStacks {
    constructor() {
        this.enqueueList = new Stack();
        this.dequeueList = new Stack();
    }
    enqueue(val) {
        if(enqueueList.isEmpty() && !this.dequeueList.isEmpty()) {
            this.swap();
        }
        this.enqueue.push(val);
    }
    dequeue() {
        if(this.dequeueList.isEmpty() && !this.enqueueList.isEmpty()) {
            this.swap();
        }
        return this.dequeueList.pop();
    }
    swap() {
        // TODO
    }
}

module.exports = Queue;