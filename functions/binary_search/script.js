// const list = [1, 3, 4, 5, 7, 10];

function binarySearch(list, element) {
    let start = 0;
    let end = list.length;

    while (start < end) {
        // Находим элемент в середине массива
        const middle = Math.floor((start + end) / 2);
        const value = list[middle];

        // Сравниваем аргумент со значением в середине массива
        if (element == value) {
            return middle;
        }

        // Если аргумент меньше, чем серединное значение, разделяем массив пополам
        // Теперь конец массива — это его бывшая середина
        if (element < value) {
            end = middle;
            // Иначе началом массива становится элемент, идущий сразу за «серединой»
        } else {
            start = middle + 1;
        }
    }

    // если искомое число не найдено, возвращаем -1
    return -1;
}