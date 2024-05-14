function BFS(root, value) {
    const queue = [root];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (currentNode.value === value) {
            return currentNode;
        }

        currentNode.children.forEach((child) => {
            queue.push(child);
        });
    }
    return undefined;
}