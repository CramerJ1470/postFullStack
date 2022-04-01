const fs = require("fs");
const path = require("path");

///way to go through all the nodes of a tree
// 1. Pre-order  current node, left ,right
// 2. In-order  all nodes left, current node, all nodes right
// 3. Post-order all node left, all node right, current node

function printFiles(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	entries
		.filter((e) => e.isFile())
		.forEach((e) => console.log(path.join(dir, e.name)));
	entries
		.filter((e) => e.isDirectory())
		.forEach((e) => printFiles(path.join(dir, e.name)));
}

printFiles("JobPrepSession3");
