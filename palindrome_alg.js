// palindrome('racecar') === true
// palindrome('table') === false

const palindrome = (str) => {
    const straightStr = str.replace(/[^a-zа-яё0-9]/gi, '').toLowerCase();

    const reversedStr = straightStr.split('').reverse().join('');
    return straightStr === reversedStr;
};

console.log(palindrome('racecar'))
console.log(palindrome('table'))