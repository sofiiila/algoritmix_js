class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Кладёт элемент на стек.
    // Возвращает новый размер стека.
    push(value) {
        const node = { value, next: null, prev: null };
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return this.size;
    }

    // Убирает элемент со стека.
    // Если стек пустой, кидает ошибку.
    // Возвращает удалённый элемент.
    pop() {
        if (this.size === 0) {
            throw new Error('Stack is empty');
        }
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return value;
    }

    // Возвращает верхний элемент стека без его удаления.
    peek() {
        if (this.size === 0) {
            throw new Error('Stack is empty');
        }
        return this.tail;
    }

    // Если стек пуст, возвращает true. В противном случае –– false.
    isEmpty() {
        return this.size === 0;
    }
}

const myStack = new Stack();

console.log(myStack.isEmpty());
myStack.push(1);
console.log(myStack.peek());
myStack.push(2);
console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack.isEmpty());