function main() {
	var queue = [];
	queue.push(1);
	queue.push(2);
	queue.push(3);

	while (queue.length > 0) {
		printf("Current queue: " + queue);
		printf("Value obtained from the queue: " + queue.shift());		
	}
}