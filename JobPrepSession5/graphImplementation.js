class GraphNode {
	constructor(val, edges = []) {
		this.val = val;
		this.edges = edges;
	}
}
let graph = new GraphNode("L1", [new GraphNode("L2L", [new GraphNode("L3L")])]);

let last = graph.edges[0].edges[0];
