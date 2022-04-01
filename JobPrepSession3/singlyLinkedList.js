class NodeSingle {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
	append(node) {
		let lastNode = this;
		while (lastNode.next != null) {
			lastNode = lastNode.next;
		}
		lastNode.next = node;
	}
	last() {
		//O(n)
		let lastNode = this;
		while (lastNode.next != null) {
			lastNode = lastNode.next;
		}
		return lastNode;
	}
}

//add to the end  checks for last

module.exports = NodeSingle;
