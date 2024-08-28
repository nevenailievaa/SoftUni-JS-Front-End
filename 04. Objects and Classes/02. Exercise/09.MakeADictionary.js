function makeADictionary(array) {
	let dictionary = {};

	for (let inputElement of array) {
		let obj = JSON.parse(inputElement);
		let word = Object.keys(obj);
		dictionary[word] = obj;
	}

	let sorted = Object.keys(dictionary).sort();

	for (let key of sorted) {
		console.log(`Term: ${key} => Definition: ${Object.values(dictionary[key])}`);
	}
}