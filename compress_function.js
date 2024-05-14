function compress(list) {
    if (!list || !list.length) {
        return 'undefined';
    }

    if (list.length === 1) {
        return list[0].toString();
    }

    list.sort((a, b) => a - b);

    const intervals = [];
    let start = list[0];

    for (let i = 1; i < list.length; i++) { // Начинаем цикл с индекса 1, а не 0
        if (list[i] === list[i - 1] + 1) {
            continue;
        } else {
            if (start === list[i - 1]) {
                intervals.push(start.toString());
            } else {
                intervals.push(`${start}-${list[i - 1]}`);
            }
            start = list[i];
        }
    }

    // Добавляем последний элемент в диапазон
    if (start === list[list.length - 1]) {
        intervals.push(start.toString());
    } else {
        intervals.push(`${start}-${list[list.length - 1]}`);
    }

    return intervals.join(',');
}