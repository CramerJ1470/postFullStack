////Reverse Polish Notation(1)

//a simple mathematical notation that doesn't need parentheses

//  + 3 => 2 3+

//interpreter - implementation
let a, b, r; // use a temp storage...
let stack = [];

function interpret(command) {
	let tokens = command.split(" ");
	// "2 3 +" === ["2","3"."+"]
	let ip = 0;
	while (ip < tokens.length) {
		switch (tokens[ip]) {
			//native code for operations
			case "+":
				b = stack.pop();
				a = stack.pop();
				r = a + b;
				stack.push(r);
				ip++;
				break;

			case "-":
				b = stack.pop();
				a = stack.pop();
				r = a - b;
				stack.push(r);
				ip++;
				break;

			case "*":
				b = stack.pop();
				a = stack.pop();
				r = a * b;
				stack.push(r);
				ip++;
				break;

			case "/":
				b = stack.pop();
				a = stack.pop();
				r = a / b;
				stack.push(r);
				ip++;
				break;

			case "print":
				r = stack.pop();
				console.log(r);
				ip++;
				break;

			case "jgz":
				r = stack.pop();
				if (r > 0) {
					ip = Number(tokens[ip + 1]);
				} else {
					ip += 2;
				}
				break;

			case "dup":
				r = stack.pop();
				stack.push(r);
				stack.push(r);
				ip++;
				break;

			default:
				r = Number(tokens[ip]);
				stack.push(r);
				ip++;
				break;
		}
	}
}

interpret("2 3 + 4 1 - print");
interpret("2 3 + 4 1 - * print");
