// Add a new node to front" 0(1)
const NodeSingle = require("./singlyLinkedList");
const NodeDouble = require("./doublyLinkedList");
console.log(NodeSingle);

let list = new NodeSingle("world");
list = new NodeSingle("hello", list);
console.log(list);
list = new NodeSingle("vlad", list);
console.log(list);
list = new NodeSingle("third", list);
console.log(list);

list.append("heyNow!");
console.log(list.next.next);

console.log(list.last());

function hasCycle(node) {
	//don't run on an array with a loop
	if (node.next == null) {
		return false;
	}
}

let tortoise = node;
let hare = node.next;
while (true) {
	if (hare == tortoise) {
		// if the point to same place they are a cycle
		return true;
	}
	if (hare.next == null) {
		// is there place for hare to move forward? there is a finish line.

		return false;
	}
	hare = hare.next;
	if (hare.next == null) {
		// is there place for hare to move forward? there is a finish line.

		return false;
	}
	hare = hare.next;
	tortoise = tortoise.next; //floyd's algorithium
}
