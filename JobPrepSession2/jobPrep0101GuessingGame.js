// Console input helpers
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(q) {
	return new Promise((res, rej) => {
		rl.question(q, (answer) => {
			res(answer);
		});
	});
}
// Main function
(async function main() {
	let start = 1,
		end = 99;
	await question(`Think of a number between ${start} and ${end} 
inclusive and press enter!`);
	while (start <= end) {
		let guess = Math.floor(Math.random() * end - start + 1) + start;
		console.log(`start: `, start);
		console.log("end: ", end);
		let ans = await question(`Is it ${guess}? Answer with 
yes/lower/higher: `);

		if (ans === "yes") {
			console.log("I knew I'd find it!");
			break;
		} else if (ans === "lower") {
			end = guess;
		} else if (ans === "higher") {
			start = guess;
		} else {
			console.log("Unrecognized command");
		}
	}
	rl.close();
})();
