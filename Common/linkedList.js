class LinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

    print() {
        let values = [this.value];
        let current = this.next;
        while(current && current.value !== null) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values);
    }

    getNodeAtIndex(i) {
        let currentIndex = 1;
        let node = this;
        while(node != null) {
            if(currentIndex === i) {
                return node;
            } else {
                currentIndex++;
                node = node.next;
            }
        }
        return node;
    }

    getTail() {
        let {tail} = this.constructor.getTailAndLength(this);
        return tail;
    }

    static getTail(ll) {
        let {tail} = this.getTailAndLength(ll);
        return tail;
    }

    static getTailAndLength(ll) {
        let length = 0;
        let tail = ll;
        while(tail.next) {
            tail = tail.next;
            length++;
        }
        return { tail, length};
    }

    static fromArray(arr) {
        console.log(`Creating LinkedNode from array: ${arr}`);
        let current, head;
        arr.forEach((el, index) => {
            let newLl = new LinkedNode(el);
            if(index === 0) {
                current = newLl;
                head = current;
            } else {
                current.next = newLl;
                current = current.next;
            }
        });
        return head;
    }

    static searchForValue(linkedNode, val) {
        let nextNode = linkedNode;
        while(nextNode != null && nextNode.value !== val) {
            nextNode = nextNode.next;
        }
        return nextNode;
    }

    static deleteNode(linkedNode, nodeToDelete) {
        let nextNode = linkedNode;
        while(!nextNode) {
            if(nextNode.next === nodeToDelete) {
                nextNode.next = nextNode.next.next;
                return true;
            } else {
                nextNode = nextNode.next;
            }
        }
        return false;
    }

    static insertAtEnd(linkedNode, newNode) {
        let nextNode = linkedNode.next;
        while(!nextNode.next) {
            nextNode = nextNode.next;
        }
        nextNode.next = newNode;
    }

    static insertAtStart(linkedNode, newNode) {
        newNode.next = linkedNode;
        return newNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(val) {
        if(!this.head) {
            this.head = new LinkedNode(val);
            this.tail = this.head;
        } else {
            this.tail.next = new LinkedNode(val);
            this.tail = this.tail.next;
        }
    }
    getTail() {
        return this.tail;
    }
    getHead() {
        return this.head;
    }
}

//module.exports = LinkedNode;
module.exports = {
    LinkedNode : LinkedNode,
    LinkedList: LinkedList
}