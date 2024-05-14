class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Ставит элемент в очередь.
    // Возвращает новый размер очереди.
    enqueue(value) {
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

    // Убирает элемент из очереди.
    // Если очередь пустая, кидает ошибку.
    // Возвращает удалённый элемент.
    dequeue() {
        if (this.size === 0) {
            throw new Error('Queue is empty');
        }
        const value = this.head.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return value;
    }

    // Возвращает элемент в начале очереди.
    peek() {
        if (this.size === 0) {
            throw new Error('Queue is empty');
        }
        return this.head;
    }

    // Если очередь пустая, возвращает true. В противном случае –– false.
    isEmpty() {
        return this.size === 0;
    }
}

const myQueue = new Queue();

console.log(myQueue.isEmpty());
myQueue.enqueue(1);
console.log(myQueue.peek());
myQueue.enqueue(2);
console.log(myQueue.peek());

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

console.log(myQueue.isEmpty());