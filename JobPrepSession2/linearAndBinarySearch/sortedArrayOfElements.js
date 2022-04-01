const { performance } = require("perf_hooks");

function createSortedArray(numberOfElements) {
	let arr = [];
	for (let i = 0; i < numberOfElements; i++) {
		arr[i] = Math.floor(Math.random() * numberOfElements);
	}
	console.log(arr.sort());
}
createSortedArray(100);

let arr1 = [
	1, 10, 12, 12, 13, 14, 17, 17, 18, 19, 2, 20, 20, 22, 22, 23, 26, 28, 29,
	30, 30, 30, 33, 34, 34, 36, 38, 38, 38, 38, 38, 4, 42, 42, 43, 44, 44, 46,
	47, 49, 5, 50, 50, 50, 51, 51, 51, 52, 52, 52, 54, 54, 55, 55, 58, 58, 59,
	59, 61, 61, 61, 63, 63, 65, 67, 68, 73, 74, 75, 76, 76, 77, 79, 8, 80, 80,
	81, 83, 84, 84, 84, 86, 87, 88, 88, 89, 9, 91, 93, 94, 95, 95, 96, 96, 96,
	97, 97, 98, 99, 99,
];

function linearSearch(arr, x, start, end) {
	let numberOfIterations = 0;
	let startTime = performance.now();
	for (let i = start; i <= end; i++) {
		if (arr[i] == x) {
			let endTime = performance.now();
			console.log(`The element was found. Number of iterations:`, i);
			let dif = endTime - startTime;
			console.log(`time: `, dif);

			break;
		}
		numberOfIterations = i;
	}
	if (numberOfIterations == end) {
		console.log(`Element not found. Number of linear iterations: `, end);
		let endTime = performance.now();
		let dif = endTime - startTime;
		console.log(`time: `, dif);
	}
}
linearSearch(arr1, 14, 0, arr1.length - 1);

function recursiveSearch(arr, x, start, end, numberOfIterations) {
	let startTime = performance.now();
	let mid = Math.floor((start + end) / 2);
	if (arr[mid] === x) {
		numberOfIterations += 1;
		let endTime = performance.now();
		console.log(
			`The element was found. Number of recursive iterations: `,
			numberOfIterations
		);
		let dif = endTime - startTime;
		console.log(`time: `, dif);
	} else if (start === end) {
		numberOfIterations += 1;
		let endTime = performance.now();
		console.log(
			`The element not found. Number of recursions: `,
			numberOfIterations
		); // not found
		let dif = endTime - startTime;
		console.log(`time: `, dif);
	} else if (arr[mid] < x) {
		numberOfIterations += 1;
		return recursiveSearch(arr, x, mid + 1, end, numberOfIterations);
	} else {
		numberOfIterations += 1;
		return recursiveSearch(arr, x, start, mid - 1, numberOfIterations);
	}
}
recursiveSearch(arr1, 14, 0, arr1.length - 1, 0);

function binarySearch(x, arr) {
	let start = 0;
	let end = arr.length - 1;
	let noi = 0;
	let startTime = performance.now();
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === x) {
			noi += 1;
			console.log(`Number of Iterations in binarySearch: `, noi);
			let endTime = performance.now();
			let dif = endTime - startTime;
			console.log(`time: `, dif);
			break;
		} else if (arr[mid] < x) {
			noi += 1;
			start = mid + 1;
		} else {
			noi += 1;
			end = mid - 1;
		}
	}
	let endTime = performance.now();
	console.log(`Not found. Number of Iterations in binarySearch: `, noi);
	let dif = endTime - startTime;
	console.log(`time: `, dif);
}

binarySearch(14, arr1);
