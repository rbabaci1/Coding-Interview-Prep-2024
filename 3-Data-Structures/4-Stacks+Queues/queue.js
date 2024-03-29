class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	print() {
		let currentNode = this.first;
		const queue = [];

		while (currentNode) {
			queue.push(`${currentNode.value} |next| -> ${currentNode.next?.value}`);
			currentNode = currentNode.next;
		}

		console.log(queue);
	}

	peek() {
		return this.first;
	}

	enqueue(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.first = newNode;
		} else {
			this.last.next = newNode;
		}

		this.last = newNode;
		this.length++;
	}

	dequeue() {
		if (this.length === 0) return null;
		if (this.length === 1) this.last = null;

		this.first = this.first.next;
		this.length--;
	}
}

const myQueue = new Queue();

myQueue.enqueue("rabah");
myQueue.enqueue("celina");
myQueue.enqueue("zineb");
myQueue.enqueue("marwa");

myQueue.dequeue();

myQueue.print();
