// What is the Big O of the below functions? (Hint, you may want to go line by line)

/********************* #1 ***********************/
function funChallenge(input) {
	let a = 10; // O(1)
	a = 50 + 3; // O(1)

	for (let i = 0; i < input.length; i++) {
		// O(n)
		anotherFunction(); // O(n)
		let stranger = true; // O(n)
		a++; // O(n)
	}
	return a; // O(1)
}
/*
    Solution: O(n).

    Explanation: This function will depend on the input array, which will make     it have a linear time complexity.

    BIG O(3 + 4n) = BIG(n)

    **Won't need to calculate Big O like this in an interview**
 */

/********************* #2 ***********************/
function anotherFunChallenge(input) {
	let a = 5; // O(1)
	let b = 10; // O(1)
	let c = 50; // O(1)
	for (let i = 0; i < input; i++) {
		// O(n)
		let x = i + 1; // O(n)
		let y = i + 2; // O(n)
		let z = i + 3; // O(n)
	}
	for (let j = 0; j < input; j++) {
		// O(n)
		let p = j * 2; // O(n)
		let q = j * 2; // O(n)
	}
	let whoAmI = "I don't know"; // O(1)
}
/*
    Solution: O(n).
    
    Big O = 4 + 7n = O(n)
*/

/********************* #3 ***********************/
const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			console.log(arr[i] + "-" + arr[j]);
		}
	}
}
/*
    Solution: O(n^2). For n been the number of boxes.
*/

// logAllPairsOfArray(boxes);
