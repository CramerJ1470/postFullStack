const { performance } = require("perf_hooks");
const NodeSingle = require("./singlyLinkedList");
let list = new NodeSingle("end");
let start = performance.now();
for (let i = 0; i < 10000; i++) {
	list = new NodeSingle(i, list);
}
let end = performance.now();
console.log(end - start);
