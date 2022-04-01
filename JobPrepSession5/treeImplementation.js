class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

let tree = new Node(
	"root",
	new Node("left", new Node("L2 left")),
	new Node("right")
);
