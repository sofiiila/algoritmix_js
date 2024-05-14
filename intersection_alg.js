intersection(
    [[8, 12], [17, 22]],
    [[5, 11], [14, 18], [20, 23]]
) // [[8, 11], [17, 18], [20, 22]]

intersection(
    [[9, 15], [18, 21]],
    [[10, 14], [21, 22]]
) // [[10, 14]]

function intersection(user1, user2) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < user1.length && j < user2.length) {
        const start = Math.max(user1[i][0], user2[j][0]);
        const end = Math.min(user1[i][1], user2[j][1]);
        if (start <= end) {
            result.push([start, end]);
        }
        if (user1[i][1] < user2[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}