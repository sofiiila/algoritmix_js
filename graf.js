class Graph {
    constructor() {
        this.data = {};
    }

    // Добавляет вершину
    addVertex(vertex) {
        if (!this.data[vertex]) {
            this.data[vertex] = [];
        }
    }

    // Удаляет вершину
    removeVertex(vertex) {
        if (this.data[vertex]) {
            // Удаляем все ребра, связанные с этой вершиной
            for (const adjacentVertex of this.data[vertex]) {
                this.removeEdge(vertex, adjacentVertex);
            }
            // Удаляем вершину из объекта
            delete this.data[vertex];
        }
    }

    // Добавляет ребро между двумя вершинами
    addEdge(vertex1, vertex2) {
        if (vertex1 === vertex2) {
            return;
        }
        if (this.data[vertex1] && this.data[vertex2]) {
            // Проверяем, что ребро еще не существует
            if (!this.data[vertex1].includes(vertex2) && !this.data[vertex2].includes(vertex1)) {
                this.data[vertex1].push(vertex2);
                this.data[vertex2].push(vertex1);
            }
        }
    }

    // Удаляет ребро между двумя вершинами
    removeEdge(vertex1, vertex2) {
        if (vertex1 === vertex2) {
            return;
        }
        if (this.data[vertex1] && this.data[vertex2]) {
            this.data[vertex1] = this.data[vertex1].filter(v => v !== vertex2);
            this.data[vertex2] = this.data[vertex2].filter(v => v !== vertex1);
        }
    }
}

// Пример использованиия
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');

console.log(graph.data);
/*
{
  A: ['B', 'C'],
  B: ['A'],
  C: ['A'],
  D: []
}
 */