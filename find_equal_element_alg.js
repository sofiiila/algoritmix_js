const a = [ 1, 2, 4, 7, 11, 19 ];
const b = [ 2, 7, 19, 28, 31 ];

function findEqualElements(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}

// Примеры
findEqualElements([1, 2, 3], [2]) // => [2]
findEqualElements([2], [1, 2, 3]) // => [2]
findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]) // => [2, 2]
findEqualElements([2, 2, 2, 2], [1, 2, 2, 3]) // => [2, 2]