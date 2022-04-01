// as far down branch as possible
// need a stack and mark visited.

function DFS(node) {
	let stack = [];
	let visited = new Set();
	stack.push(node);
	visited.add(node);
	while (stack.length > 0) {
		let curr = stack.pop();
		console.log(curr.val);
		curr.edges
			.filter((n) => !visited.has(n))
			.forEach((n) => {
				stack.push(n);
				visited.add(n);
			});
	}
}
