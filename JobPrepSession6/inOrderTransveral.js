function traverseInOrderRec(node) {
	if (node == null) {
		return;
	}
	traverseInOrderRec(node.left);
	console.log(node.key);
	traverseInOrderRec(node.right);
}

traverseInOrderRec(tree);
