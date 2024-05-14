function match(S) {
    let N = S.length;
    let min = 0;
    let max = N;
    let result = [];

    for (let i = 0; i < N; i++) {
        if (S[i] === 'I') {
            result.push(min);
            min++;
        } else if (S[i] === 'D') {
            result.push(max - 1);
            max--;
        }
    }

    return result;
}

match('III') // [0,1,2,3]
match('DDI') // [3,2,0,1]
match('IDID') // [0,4,1,3,2]