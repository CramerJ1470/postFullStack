function traversePostOrderRec(node) {
	if (node == null) {
		return;
	}
	traverseInOrderRec(node.left);
	traverseInOrderRec(node.right);
	delete node;
}
