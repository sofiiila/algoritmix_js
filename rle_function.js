function rle(str) {
    if (!/^[A-Z]*$/.test(str)) {
        throw new Error(`Given string ${str} contains invalid characters`);
    }

    return str.replace(/(.)\1+/g, group => (group[0] + group.length));
}