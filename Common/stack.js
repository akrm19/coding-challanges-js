class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }
    peek() {
        return this.items.length > 0 ? this.items[this.items.length -1] : null;
    }
    pop() {
        return this.items.length > 0 ? this.items.pop() : null;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        console.log(this.items);
    }
    maxVal() {
        if(this.isEmpty()) return null;
        return this.items.reduce((acc, cur, idx) => {
            if(idx == 1) return cur;
            return Math.max(acc, cur);
        });
    }
    static fromIterable(source) {
        if(!source) return null;
        let stack = new Stack();

        //If it is iterable
        if(typeof source[Symbol.iterator] === 'function') {
            source.forEach(element => {
                stack.push(element);
            });
        } else {
            stack.push(source);
        }
        console.log(`Created new stack: `);
        stack.print();
        return stack;
    }
}

module.exports = Stack;