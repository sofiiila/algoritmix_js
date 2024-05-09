class MyArray {
    constructor(initialSize = 1) {
        if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
            throw new Error('Длина массива должна быть целым числом');
        }

        if (!(initialSize > 0)) {
            throw new Error('Размер массива должен быть больше нуля');
        }

        this.size = initialSize;
        this.memory = this.allocate(initialSize);
        this.length = 0;
    }

    // Возвращает значение по индексу.
    // Если индекс за пределами — кидает ошибку.
    get(index){
        if (index < 0 || index >= this.length){
            throw new Error('индекс за пределами');
        } else {
            return this.memory[index];
        }
    }

    // Устанавливает значение по индексу.
    // Если индекс за пределами — кидает ошибку.
    set(index, value){
        if (index < 0 || index >= this.length){
            throw new Error('индекс за пределами');
        }
        this.memory[index] = value;
        return this.length;
    }

    // Добавляет новый элемент в массив.
    // Если index не определён — добавляет в конец массива.
    // В противном случае — добавляет по индексу со сдвигом
    // всех последующих элементов.
    // Если индекс за пределами - кидает ошибку.
    // Увеличивает выделенную память вдвое, если необходимо.
    // Возвращает новую длину массива.
    add(value, index) {
        if (this.length >= this.size) {
            this.resize();
        }

        if (index < 0 || index > this.length) {
            throw new Error('Индекс за пределами массива');
        }

        if (index === undefined) {
            index = this.length;
        }

        for (let i = this.length; i > index; i--) {
            this.memory[i] = this.memory[i - 1];
        }

        this.memory[index] = value;
        this.length++;

        return this.length;
    }

    // Увеличивает выделенную память вдвое
    resize() {
        const newMemory = this.allocate(this.size * 2);
        for (let i = 0; i < this.size; i++) {
            newMemory[i] = this.memory[i];
        }
        this.memory = newMemory;
        this.size *= 2;
    }

    // Удаляет элемент по индексу со сдвигом всех последующих элементов.
    // Если индекс за пределами - кидает ошибку.
    // Возвращает новую длину массива.
    delete(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Индекс за пределами массива');
        }

        for (let i = index; i < this.length - 1; i++) {
            this.memory[i] = this.memory[i + 1];
        }

        delete this.memory[this.length - 1];
        this.length--;

        return this.length;
    }

    allocate(size) {
        const memory = {};

        for (let i = 0; i < size; i++) {
            memory[i] = undefined;
        }

        return memory;
    }
}

const arr = new MyArray(5);