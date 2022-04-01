// Breath-First Search  search each on the same level
// we need a queue
// mark nodes as visited
const NodeSingle = require("../JobPrepSession3/singlyLinkedList");
class Queue {
	constructor() {
		this.front = null;
		this.rear = null;
	}
	enqueue(val) {
		if (this.rear == null) {
			this.front = this.rear = new NodeSingle(val);
		} else {
			this.rear.next = new NodeSingle(val);
			this.rear = this.rear.next;
		}
	}
	denqueue(val) {
		if (this.front == null) {
			return null;
		} else {
			let val = this.front.val;
			this.front = this.front.next;
			if (this.front == null) {
				this.rear = null;
			}
			return val;
		}
	}
}
/*let queue = [];

queue.push(3); //add to end//
queue.push(5);

console.log(stack.shift()); // 3 takes from front
console.log(stack.shift()); //5
*/
//let queue = new Queue();
function BFS(node) {
	let queue = new Queue();
	let visited = new Set();
	queue.enqueue(node);
	visited.add(node);
	while (queue.isEmpty()) {
		let curr = queue.denqueue();
		console.log(curr.val);
		curr.edges
			.filter((n) => !visited.has(n))
			.forEach((n) => {
				queue.enqueue(n);
				visited.add(n);
			});
	}
}
