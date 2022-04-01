const NodeSingle = require("../JobPrepSession3/singlyLinkedList");
class Stack {
	// could do it this way
	constructor() {
		this.top = null;
	}

	push(val) {
		this.top = new NodeSingle(val, this.top);
	}

	pop() {
		let val = this.top.val;
		this.top = this.top.next;
		return val;
	}
}
let stack = new Stack();
stack.push(3);
stack.push(8);

console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.push(6);
stack.push(9);
