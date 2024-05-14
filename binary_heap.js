class BinaryHeap {
    constructor() {
        this.data = [];
    }

    // Вспомогательная функция для "поднятия" элемента наверх
    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.data[parentIndex] < this.data[index]) {
                [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Вспомогательная функция для "опускания" элемента вниз
    sinkDown(index) {
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let maxIndex = index;

            if (leftChildIndex < this.data.length && this.data[leftChildIndex] > this.data[maxIndex]) {
                maxIndex = leftChildIndex;
            }

            if (rightChildIndex < this.data.length && this.data[rightChildIndex] > this.data[maxIndex]) {
                maxIndex = rightChildIndex;
            }

            if (maxIndex === index) {
                break;
            }

            [this.data[index], this.data[maxIndex]] = [this.data[maxIndex], this.data[index]];
            index = maxIndex;
        }
    }

    // Добавление элемента
    insert(node) {
        this.data.push(node);
        this.bubbleUp(this.data.length - 1);
    }

    // Удаление корневого элемента
    extract() {
        if (this.data.length === 0) {
            return undefined;
        }

        if (this.data.length === 1) {
            return this.data.pop();
        }

        const root = this.data[0];
        this.data[0] = this.data.pop();
        this.sinkDown(0);

        return root;
    }
}