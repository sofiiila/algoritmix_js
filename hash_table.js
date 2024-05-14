class HashTable {
    constructor(size) {
        if (!size || size < 0) {
            throw new Error('Размер должен быть положительным числом');
        }

        this.size = size;
        this.memory = [];
    }

    // Добавляет пару [key, value] в хеш-таблицу.
    // Если ключ существует, перезаписывает значение.
    set(key, value) {
        const index = hash( key, this.size)
        if (!this.memory[index]){
            this.memory[index] = []
        }

        const pairIndex = this.memory[index].findIndex((pair) => pair[0] === key);

        if ( pairIndex !== -1){
            this.memory[index][pairIndex][1] = value;
        } else {
            this.memory[index].push([key, value]);
        }
    }

    // Возвращает значение в хеш-таблице по ключу.
    // Если ключа нет, возвращает undefined.
    get(key) {
        const index = hash(key, this.size);

        if(!this.memory[index]){
            return undefined;
        }

        const pair = this.memory[index].find((pair) => pair[0] === key);

        return pair ? pair[1] : undefined;
    }

    // Удаляет значение из хеш-таблице по ключу.
    remove(key) {
        const index = hash(key, this.size);

        if (!this.memory[index]) {
            return;
        }

        const pairIndex = this.memory[index].findIndex((pair) => pair[0] === key);

        if (pairIndex !== -1) {
            this.memory[index].splice(pairIndex, 1);
        }
    }
}


// Хеширующая функция.
function hash(key, size) {
    const MAX_LENGTH = 200;

    const start = key.length > MAX_LENGTH ?
        Math.floor((key.length % MAX_LENGTH) / 2) : 0;
    const end = Math.min(key.length, MAX_LENGTH);

    let total = 0;

    for (let i = 0; i < end; i++) {
        const charCode = key.charCodeAt(start + i);
        total = (total + charCode * (i + 1)) % size;
    }

    return total;
}