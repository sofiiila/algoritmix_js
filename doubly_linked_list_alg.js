class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    // Добавляет элемент в список.
    // Если указан индекс - добавляет по индексу,
    // в противном случае добавляет в конец.
    // Если индекс за пределами — кидает ошибку.
    add(value, index) {
        const node = createNode(value);
        if (index === undefined || index === this.size) {
            if (this.size === 0) {
                this.head = node;
                this.tail = node;
            } else {
                node.prev = this.tail;
                this.tail.next = node;
                this.tail = node;
            }
        } else if (index === 0) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else if (index >= 0 && index < this.size) {
            const current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            node.prev = current.prev;
            node.next = current;
            current.prev.next = node;
            current.prev = node;
        } else {
            throw new Error('Index out of bounds');
        }
        this.size++;
    }

    // Удаляет элемент из списка по значению.
    // Удаляет только первый найденный элемент.
    // Если элемент не найден, ничего делать не нужно.
    removeByValue(value) {
        if (this.size === 0) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
            if (current.next !== null) {
                current.next.prev = current;
            } else {
                this.tail = current;
            }
            this.size--;
        }
    }

    // Удаляет элемент из списка по индексу.
    // Если индекс за пределами — кидает ошибку.
    removeByIndex(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next;
            if (current.next !== null) {
                current.next.prev = current;
            } else {
                this.tail = current;
            }
        }
        this.size--;
    }

    // Ищет элемент в списке по индексу.
    // Если индекс за пределами — кидает ошибку.
    searchByIndex(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // Ищет элемент в списке по значению.
    // Возвращает первый найденный элемент.
    // Опционально можно указать индекс начала поиска.
    // Если индекс за пределами — кидает ошибку.
    // Если элемент не найден, нужно вернуть null.
    searchByValue(value, startIndex = 0) {
        if (startIndex < 0 || startIndex >= this.size) {
            throw new Error('Index out of bounds');
        }
        let current = this.head;
        for (let i = 0; i < startIndex; i++) {
            current = current.next;
        }
        while (current !== null && current.value !== value) {
            current = current.next;
        }
        return current;
    }
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
    return {
        value,
        next: null,
        prev: null,
    };
}